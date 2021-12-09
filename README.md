# Example site: Every Color

**View this demo site**: https://every-color.netlify.app

## About this example site

This site uses Netlify's on-demand builder functions to dynamically generate a page for any requested valid CSS color in hex, RGB, or named formats.

On-demand builder functions generate a page the first time it is requested and then adds it to the most recent deployment for immediate serving for each subsequent request.

You can read more about On-demand builder functions in the docs. You can learn more about the architecture pattern they implement, in this blog post about Distribute Persistent Rendering (DPR)



## Speedily deploy your own version

Deploy your own version of this example site, by clicking the Deploy To Netlify Button below. This will automatically:

- Clone a copy of this repo to your own GitHub account
- Create a new project in your Netlify account, linked to your new repo
- Create an automated deployment pipeline to watch for changes on your repo
- Build and deploy your new site


## Install and run this example for locally

You can clone this example repo to explore its features and implementation, and to run it locally.

```shell

# 1. Clone the repository to your local development environment
git clone REPO_URL

# 2. Move into the project directory
cd example-every-color

# 3. Install code dependencies
npm install

# 4. Install the Netlify CLI to let you locally serve your site using Netlify's features
npm install -g netlify-cli

# 5. Serve your site using Netlify Dev
neltify dev

```


