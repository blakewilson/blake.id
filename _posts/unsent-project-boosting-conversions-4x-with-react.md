---
title: "The Unsent Project: Boosting Conversions 4x With React"
date: "2019-06-23T15:00:00-0700"
---

I recently had the opportunity to build the new submission flow for [The Unsent Project](https://theunsentproject.com) by [Rora Blue](https://instagram.com/rorablue).

The Unsent Project is a collection of unsent text messages to first loves. Users can submit these messages on The Unsent Project website by filling out a name, the message, and selecting a color that you associate with your first love. Once submitted, it gets added to the Unsent Project Archive, a collection of over 40,000 submissions. [I recommend checking it out!](https://theunsentproject.com/archive)

<figure>
    <span style="background-color: #000;"><img src="./blankunsent.png" /></span>
    <figcaption>A blank Unsent Message</figcaption>
</figure>

### Technical Workflow Before Redesign

Before the redesign, users would first enter a name and message into inputs to determine how their Unsent Project message would turn out. Once satisfied with the way it looked, they would then re-enter that name and message into a form below where they could then select a color. Finally, they would have to take a screenshot of the mockup Unsent message in order for the archive to have a featured image to be displayed in the archive. After this process, the form would be submitted and added as a post in WordPress, where Rora would sometimes need to re-submit screenshots that didn't turn out as expected/wrong aspect ratio/etc.

This process has a lot of room for human error, and can be minimized greatly with some automation.

### UI/UX Challenges & Solutions

The new submission flow had to be sleek, easy to use, and quick to submit with the least amount of user input as possible while still maintaining the original artistic elements like design, typography, and meaning that Rora fostered in the projects's conception.

I immediately considered and decided on using [React](https://reactjs.org/) for this project. React has great state management, meaning that users could change inputs like the name field, message field, or color field at any given time, and the user would be able to see the changes live in real-time; no need to refresh.

This was critical for keeping users engaged from start to finish, as they were able to visualize every element change in front of their eyes.

### Technical Challenges & Solutions

A large technical challenge I faced was how we would actually get the rendered image into WordPress. We were able to create a functional frontend experience for users, but no method to actually get that design in image form.

After some research, I found [`html2canvas`](https://html2canvas.hertzen.com/) to be the perfect package for what was needed. `html2canvas` does exactly what it sounds like; it converts HTML to an HTML canvas.

This allowed me to create an HTML canvas from the HTML generated from React. Then, upon submission, we would convert the canvas to a Data URL for transport to WordPress.

Once the information is sent to WordPress, the data would hit an endpoint that would create a new WordPress post, as well as convert the Data URL to a png image server side to be saved into WordPress media as a featured image.

Finally, I used [Create React App](https://github.com/facebook/create-react-app) in the development process, but since it was such a simple app, I did not need the entire CRA. Instead, I used a package called [`nwb`](https://github.com/insin/nwb) to export just a single component.

After running the following code, I got a bundle of JS and CSS to run the component stand alone.

```bash
cd my-app/componentDir

nwb react build component.js
```

This let me enqueue the compiled JS and CSS into WordPress by using `wp_enqueue_script()` and `wp_enqueue_style()` respectively.

### The Final Product

I am very happy with the final product. It is very responsive to user input, and works on mobile, which was a downfall of the previous iteration. Additionally, her users seem to enjoy it as well!

<video loop controls autoplay muted playsinline>
    <source src="./final-project.mp4" type="video/mp4">
</video>

Most importantly, the conversion rate has jumped drastically. Prior to the redesign, The Unsent Project would average 500 submissions a month. The monthly average amount of submissions post-redesign are now 2,000 submissions; a 4x increase! There have been over 7,000 submissions since the redesign, bringing total submissions to over 40,000!

View [Rora Blue's Instagram](https://instagram.com/rorablue) and [The Unsent Project](https://theunsentproject.com).
