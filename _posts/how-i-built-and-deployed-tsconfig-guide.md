---
title: How I Built and Deployed TSConfig Guide
date: "2024-04-30T15:00:00-0700"
---

Over the weekend, I built a Next.js app and deployed it to CloudFlare Pages. The idea behind this app is that creating `tsconfig.json` files for new TypeScript projects can be overwhelming. There is always new `compilerOptions`, best practices, and targets that you need to be aware of.

The project: Build a TSConfig generator based on a few user toggles like:

- Do you want to use strict type checking?
- Are you using `tsc` to transpile your TypeScript?
- Are you building a Library?
- Etc.

This project was inspired and influenced by [Matt Pocock's TSConfig Cheat Sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet). If you haven't checked this out already, I highly encourage you to bookmark it. It's an excellent resource.

## Getting Started

I started this project off by cloning an example project via the [C3 CLI](https://developers.cloudflare.com/pages/get-started/c3/), a CLI built by Cloudflare to provision web framework example projects like Next.js, Nuxt, etc. with Cloudflare Pages pre-configured for you.

I chose a Next.js project since I was curious what the Next.js developer experience looked like on Cloudflare Pages.

The Next.js example project I created came with TailwindCSS pre-installed. Love it. Let's start designing the UI/UX.

## Design & Technical Challenges

### Layout

I had the initial layout in my head with a simple list of IOS-like toggles on the left pane, and the editor itself with the copy-able code on the right. I have used this layout before in previous projects (Checkout my write up on my [Rental Cash Flow app](/i-just-launched-my-rental-cash-flow-calculator-app/)) and it has worked well.

Here is a screenshot of the first working POC (Shoutout to [TailwindUI](https://tailwindui.com) for the awesome UI components):

<figure>
    <img src="/how-i-built-and-deployed-tsconfig-guide/poc.png" />
    <figcaption>The first working POC of TSConfig Guide</figcaption>
</figure>

### Editor

Building the editor was an interesting technical challenge. I wanted to generate the `tsconfig.json` file contents on the fly when the toggles changed, but I also wanted JSON comments to give a hint at why some options are included. TypeScript supports comments in their `tsconfig.json` file and even adds comments for each option when running `tsc --init`, so I figured it was appropriate to add some here.

The way I envisioned building this was to have a JSON object with all the base TSConfig options, and add to it as options were toggled, finally stringifying the JSON with something like:

```ts
JSON.stringify(tsconfig, null, 2);
```

That worked great for the config, but I was still left without a solution for adding comments in the stringified JSON.

After a search on NPM, I came across the package [`comment-json`](https://www.npmjs.com/package/comment-json). This package allows you to parse a JSON string, and uses JavaScript Symbols to read and write JSON comments to the parsed schema. You can then use the supplied `stringify` function exported from [`comment-json`](https://www.npmjs.com/package/comment-json) to stringify the JSON back together with comments!

The one downside here is that TypeScript support is limited for using symbols with this package [as noted in the readme.](https://github.com/kaelzhang/node-comment-json?tab=readme-ov-file#query-comments-in-typescript) I had to come up with a custom function that will write a comment above a specified line given the `parsedConfig`:

```ts
function writeCommentBeforeLine(
  parsedConfig: CommentJSONValue,
  symbolKey: string,
  comment: string
) {
  (parsedConfig as CommentArray<string>)[
    Symbol.for(symbolKey) as CommentSymbol
  ] = [
    {
      type: "LineComment",
      inline: false,
      value: ` ${comment}`,
    } as CommentToken,
  ];
}
```

As you can see, we had to do some manual casting here as the docs suggest. No biggie.

## Type Checking the TSConfig

This wouldn't be a TypeScript project if we didn't actually type check the result we were providing to the user would it??

I ended up using [@sindresorhus](https://twitter.com/sindresorhus) [`type-fest`](https://github.com/sindresorhus/type-fest) package which has a handy TypeScript type for validating a TSConfig object.

I did notice however it was missing a few things that were introduced in TypeScript 5. I made a [PR to the `type-fest` package](https://github.com/sindresorhus/type-fest/pull/874) late that night, not thinking anything of it, and by the time I woke up in the morning, it had already been merged, versioned, and released to NPM 🤯

That right there is another reason why [@sindresorhus](https://twitter.com/sindresorhus) is the goat.

### Adding Some Fun

I think now-a-days it is very easy to build a "status-quo" website. Meaning, all pages have a similar/known flow to them. Take a general home page for example. Most homepages you come across will follow a format similar to:

- Hero section
- 3 column feature section
- CTA
- Footer

And so on. There is nothing inherently wrong with that, but I miss when websites were fun and sparked some joy. So I tried to think of a fun way to make this site spark some joy when a user copies their config.

This led me to come across [`react-confetti`](https://www.npmjs.com/package/react-confetti). It's a "confetti" library for React that litters a section of the page with confetti. This is exactly what I was looking for.

<figure>
    <video width="100%" loop controls autoplay muted playsinline src="/how-i-built-and-deployed-tsconfig-guide/confetti.mov"></video>
    <figcaption>Confetti effect on TSConfig Guide</figcaption>
</figure>

### Wrapping Up With Styling

Once the editor was done, it just took a little bit of styling for the buttons and background, and we had a project ready to be deployed.

## Deploying

Deploying was a pretty easy task. As I mentioned in the intro of this post, I created a Next.js example project using the C3 CLI which configures everything you need to deploy to Cloudflare. I logged into the Cloudflare dashboard, linked my GitHub account, and selected the repo that I wanted Cloudflare to build my source code from.

<figure>
    <img src="/how-i-built-and-deployed-tsconfig-guide/cf-git-onboard.jpg" />
    <figcaption>Selecting my repo to build from in the Cloudflare dashboard</figcaption>
</figure>

Something I was incredibly intrigued by was that you can select the framework that you are using (If you didn't start from the C3 CLI) and it will modify the build command based on the framework you selected. For example, Cloudflare has a specific command that you can run to build Next.js apps on Cloudflare Pages. It's called [`@cloudflare/next-on-pages`](https://www.npmjs.com/package/@cloudflare/next-on-pages) and can be ran with `npx`:

<figure>
    <img src="/how-i-built-and-deployed-tsconfig-guide/cf-next-build-options.png" />
    <figcaption>Build options in Cloudflare dashboard</figcaption>
</figure>

I imagine that this command is used to formulate a production build using [Vercel's build output API](https://vercel.com/docs/build-output-api/v3) that supports [Cloudflare's workerd runtime.](https://github.com/cloudflare/workerd) I would like to dig into this more. It's very fascinating.

After about 5 minutes of logging into Cloudflare, connecting my GitHub, selecting my repo, and deploying, I had a production build up and ready to use.

## Final Product

Here is what the final product looked like:

<figure>
    <img src="/how-i-built-and-deployed-tsconfig-guide/final.png" />
    <figcaption>Final production ready build</figcaption>
</figure>

I was super happy with the design and reception of the site. I shared it on [Twitter](https://twitter.com/sundaycode/status/1784310656910442825) and even got a repost from [@mattpocock](https://twitter.com/mattpocockuk) which skyrocketed likes/reposts on Twitter and traffic to the site.

This did lead to one problem I noticed with the site which I'll cover in the "troubleshooting" section below.

The website itself is also [open source](https://github.com/blakewilson/tsconfig.guide) and available on GitHub. If you have any feature requests or ideas I would love to hear them in the [GitHub Issues!](https://github.com/blakewilson/tsconfig.guide/issues/new)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I just created <a href="https://t.co/xSpOBHQaCb">https://t.co/xSpOBHQaCb</a>, a tool to generate a TSConfig file for your new TypeScript project based on a few user inputs⚙️<br><br>It&#39;s inspired by <a href="https://twitter.com/mattpocockuk?ref_src=twsrc%5Etfw">@mattpocockuk</a>&#39;s TSConfig Cheat Sheet.<br><br>Check it out!</p>&mdash; Blake Wilson (@sundaycode) <a href="https://twitter.com/sundaycode/status/1784310656910442825?ref_src=twsrc%5Etfw">April 27, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Troubleshooting

There was one small issue I ran across, and was dashing to figure it out early, as the site appeared odd when shared via Twitter: The OpenGraph image was missing!

When deploying a site to Vercel for example, you do not need to specify the [`metadataBase`](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase), as Vercel will use the `VERCEL_URL` environment variable as a fallback if not specified when resolving the [OpenGraph Image.](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#image-files-jpg-png-gif) But other serverless providers like Cloudflare obviously do not set a `VERCEL_URl` environment variable (they do have a `CF_PAGES_URL` environment variable you can use), so setting the `metadataBase` url is a must if you are not deploying to Vercel.
