---
title: Create a Webpack Library Without Exporting a "default" Object
date: "2019-04-07T15:00:00-0700"
description: ""
---

I recently finished building [version 2 of vidbg.js, a minimal JavaScript video background plugin.](https://github.com/blakewilson/vidbg) I use Babel and Webpack to be able to write the newest JavaScript, while making it backwards compatible for older browsers that I need to support.

Webpack has an option to export your code as a "library" or in my case, a plugin, with a configurable variable name. For example, for vidbg.js I have something like this in my `webpack.config.js`

```js
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'vidbg.js', // The filename
  library: 'vidbg', // The variable name to access the library
  libraryTarget: 'var', // The type of library, in this case var
},
```

Ideally, since the `libraryTarget` is set to `var` I should be able to access my script through the `vidbg` global variable.

However, I noticed that instead of accessing the script through `vidbg`, I had to access it through `vidbg.default` because I was using ES6 modules and doing a default export, like so:

```js
class vidbg{
  ...
}

export default vidbg
```

After searching literally everywhere to no avail, I finally found the answer buried in the Webpack docs. All you have to do is add `libraryExport` with a value of `default` to your `webpack.config.js`.

### The Solution

```js
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'vidbg.js',
  library: 'vidbg',
  libraryTarget: 'var',
  libraryExport: 'default' // tell Webpack to export the default export, not the entire namespace object
},
```

This tells Webpack to export the library on the default export now, instead of exporting the whole namespace object.

I hope someone can find this useful, since it took me hours to fix this one simple issue 🤦‍