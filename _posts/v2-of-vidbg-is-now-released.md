---
title: Version 2 of vidbg.js Has Been Released
date: "2019-04-08T22:00:00-0700"
---

Today, I finished [vidbg.js](https://github.com/blakewilson/vidbg) version 2 and merged it into the master git repo.

I first released [vidbg.js](https://github.com/blakewilson/vidbg), a port of Vide, almost 4 years ago. At the time, HTML5 was brand new, and jQuery dominated the JavaScript landscape.

Since then, JavaScript has completely revolutionized the way websites are built. It seems there is a new JavaScript framework popping up every day.

With all that is new to JavaScript, I thought it was about time to give [vidbg.js](https://github.com/blakewilson/vidbg) a refresh, since the last commit, well, was the initial commit.

### This new version of vidbg.js brings some significant improvements and drastic changes.

vidbg.js no longer relies on jQuery to get the job done. Instead, it is a ~100 line vanilla JavaScript file that uses the newest JavaScript has to offer. Things like `let` and `const`, the spread operator, classes, and more.

Additionally, I am now using Babel and Webpack in order to transpile this JavaScript into executable JS for older browsers like IE 11.

Hands down the best part of v2 is the **mobile playback**. vidbg.js now supports mobile video background playback on any browser that supports auto-playing HTML5 `<video>` elements.

This is a really exciting release, and was fun to refresh my first open source project.

If you want to give the new vidbg.js a try, [you can download it here.](https://github.com/blakewilson/vidbg/releases/tag/v2)

Cheers!
