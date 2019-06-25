---
title: Video Background Pro 4 has Been Released
date: "2019-06-24T15:00:00-0700"
description: ""
---

After about a year of development, [Video Background Pro 4](https://pushlabs.co) has been released! This update has been a long time in the making and I am excited to finally release it!

Video Background Pro 4 has a ton of new functionality and is also a lot more optimized. Here are some of the main takeaways of the new version:

### Vimeo Video Backgrounds

Yes, they are finally here. [Vimeo](https://vimeo.com) video backgrounds are now available in Video Background Pro. I have been wanting to release a Vimeo integration for years, however, their API didn't have the functionality needed to display a good-looking video background. That has changed, and I am happy to finally ship this feature!

### Video backgrounds will now play on any browser that supports HTML5 Video

In Video Background Pro 3, we saw mobile video background playback. This was a huge step forward and was revolutionary, as it was one of, if not the first video background plugin to offer this functionality. With that, however, came a few restrictions. Video Backgrounds could only be played in Safari on IOS, and Chrome on Android. With Video Background Pro 4, any browser that supports the HTML5 `<video>` tag will play video backgrounds! This works for desktop browsers, tablet browsers, mobile browsers, etc. I even tried it on an android phone I haven't touched in years and it autoplayed. Exciting times!

<video width="320" controls muted loop>
    <source src="./vidbgpro-mobile-vimeo.mp4" type="video/mp4">
</video>

<p class="caption">Video Background Pro running a Vimeo video background on mobile</p>

### Vanilla ES6+ JavaScript

Video Background Pro has been completely re-written in ES6+ JavaScript. Previously, Video Background Pro was a [jQuery](https://jquery.com/) plugin, but with the way the landscape of JavaScript has gone in recent time, the ability to write vanilla JS code has improved vastly. This decision to switch to vanilla JavaScript instead of jQuery will be easier to update and maintain, and also decreases the load time by quite a bit. Since there is no longer any 3rd party dependencies, Video Background Pro 4 can start running as soon as the browser renders JavaScript.

Additionally, the plugin takes advantage of [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) in order to transpile the new ES6+ code to old browser readable code (IE 11). As a result of this, Video Background Pro now supports IE 11 alongside all modern browsers. If the browser can not play an HTML `<video>`, the fallback image will be shown instead.

### New Loading View and Animation

Video Background Pro will now always show the fallback image prior to the video background playing. This will allow for a more consistent video background visual on all devices. There will also be a fade-in animation on the video background once it starts playing.

Additionally, the fallback image is now rendered server side through PHP, instead of added client side through JavaScript. Doing this will allow the browser to cache the image and minimize delay in image loading.

### Interact with Player APIs Through the Shortcode

The shortcode now has a new parameter called `player_options`. This is really exciting. It allows you to add any of the native options to your video background through the Web API for self hosted video backgrounds, and the player APIs for both YouTube and Vimeo. For example, you may want to disable/enable tracking in the Vimeo player. You can now do this by specifying so in the `player_options` parameter.

The `player_options` parameter accepts a JSON string, and must be surrounded by the opposite of the quotes used in the JSON string. For example, if the JSON string uses double quotes, you'll need to specify the parameter in single quotes:

```
[vidbg
    container="#example"
    type="vimeo"
    url="https://vimeo.com/ID"
    player_options='{\"yourPlayerOption\":true}'
]
```

Notice the single quotes around the `player_options` value.

Depending on the video background type, you can use any of these API parameters:
* [HTML5 video attributes](https://www.w3schools.com/tags/tag_video.asp)
* [YouTube API Parameters](https://developers.google.com/youtube/player_parameters#Parameters)
* [Vimeo API Parameters](https://github.com/vimeo/player.js/#embed-options)

Please keep in mind that using any of these parameters can certainly disable your video background if you are not careful. It is recommended that you have a good understanding of JavaScript before you use this shortcode parameter in production.


### Reposition Your Frontend Buttons

You can now reposition your frontend play/volume buttons. You can do this by specifying the `frontend_container` parameter in the shortcode with a value of a JavaScript selector just like the container field. This will be super useful for those one-off themes that may reposition the frontend buttons in an undesirable location.


### Moving Forward

This is just some of the new functionality found in Video Background Pro 4. I'm super excited to release this version, and can't wait for Video Background Pro users to start using it!

If you'd like to learn more about Video Background Pro, you can [view some demos and more information here!](https://pushlabs.co?ref=blakeid)