
# Sreeram Portfolio

Modern backend engineer portfolio website built with React.

## Run Locally

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create GitHub repo
2. Push code
3. Run:

```bash
npm install gh-pages --save-dev
```

Add to package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

Then run:
```bash
npm run deploy
```
