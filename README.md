# Redwood Restricted Access Demo

## Setup

NOTE: Anyone who understands web development could break this in a few minutes. It is meant to provide only **limited access protection**, before you reveal your amazing app to the world!

1. Copy over `web/providers` and add the `AllContextProviders` to your `App.js`
2. Copy the page `restricted` and add it to `Routes.js`
3. Add `BASIC_AUTH_PASSWORD` to your `.env`

Run it!

## Getting Started

- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
