# bscit.dev
My website. A collection of ameteur essays, fiction, cooking recipes, and other stuff, with more to come as I evolve.

Ad-free and tracker-free forever.

Most previous iterations of the site are available as branches. The license terms have changed over time, so to ensure there is no confusion, refer only to the license that existed for the version that you are looking at. For example, if you wanted to clone the repo from the third commit in history, refer to the state of the license(s) during the time of the third commit.

TL;DR older code follows older license. I hope that makes sense.

## building
Depending on which version of the site you are building, there are different workflows involved.

- Before **legacy-2.0**

  Did not use any build tools. Most of the development was done through the online editor on Neocities.

- **legacy-2.0** and **legacy-3.0** ([Jekyll](https://jekyllrb.com) era)

  **Install Jekyll with *[Ruby](https://www.ruby-lang.org/en/downloads/) 3.1*** (newer versions have unknown behavior that the old code cannot predict).

- After **legacy-3.0** (main branch) ([Nue](https://nuejs.org) era)

  Nue is extremely simple to install and use. Install [Bun](https://bun.com/). Run `bun install --global nuekit` anywhere. Inside `/src`, run `nue dev`. That's literally the entire process!
