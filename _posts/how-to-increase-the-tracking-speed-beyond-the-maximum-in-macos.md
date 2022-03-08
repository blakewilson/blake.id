---
title: How to Increase the Tracking Speed Beyond the Maximum in MacOS
date: "2019-10-25T15:00:00-0700"
---

In MacOS, the maximum tracking speed for the mouse can still be pretty slow. Thankfully there is a terminal command you can run to increase it.

First, you can check what your current mouse tracking speed is:

```bash
defaults read -g com.apple.mouse.scaling
```

Next, you can set the mouse tracking speed by specifying a number:

```bash
defaults write -g com.apple.mouse.scaling 10.0
```

Finally, **make sure to restart** and you'll be good to go!
