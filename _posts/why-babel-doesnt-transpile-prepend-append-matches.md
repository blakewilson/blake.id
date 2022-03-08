---
title: Why Babel Doesn't Transpile prepend(), append(), matches(), etc.
date: "2019-07-03T00:00:00-0700"
---

[Babel](https://babeljs.io/) is an [EMCAScript](https://en.wikipedia.org/wiki/ECMAScript) transpiler that can be used to input modern JavaScript and export JavaScript that is backwards compatible for older browsers. This works really well, however, I noticed recently that a few methods didn't transpile when testing for Internet Explorer 11. In specific, I noticed `prepend()`, `append()`, and `matches()` were not transpiling.

After looking into this further, I found that these methods in particular are what are known as [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API). These are not actually apart of the ECMAScript spec, therefore Babel will not transpile them. To determine if a method is a Web API, I like to take a look at the [Mozilla Developer Network](https://developer.mozilla.org/en-US/) under "Specification." There you'll find if it is apart of the DOM (Web API), or if it is apart of ECMAScript.

For example, if you look up `map()` on MDN, you'll see under "specifications" that it is apart of ECMAScript, therefore it will be transpiled by Babel.

<figure>
    <img src="./map_ecma_spec.png" />
    <figcaption>map() is apart of the ECMAScript spec, therefore it will be transpiled by Babel.</figcaption>
</figure>

On the other hand, if you take a look at `prepend()` on MDN, you'll see that is it apart of the DOM, meaning that it is a Web API. In this case, `prepend()` will not be transpiled by Babel.

<figure>
    <img src="./prepend_dom_spec.png" />
    <figcaption>prepend() is apart of the DOM spec, therefore it is a web API, and will NOT be transpiled by Babel.</figcaption>
</figure>

Thankfully, MDN provides polyfills for these methods on the same page as the spec under the "Polyfill" section. It is as simple as including the polyfill in your code, and the browser will determine if it is needed or not.
