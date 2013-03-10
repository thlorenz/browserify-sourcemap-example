# browserify-sourcemap-example

Shows how browserify source mapping urls work (via separate browserify fork).

## Caveats 

Need a browser that supports sourceMappingURLs (i.e. Chrome {beta,canary}).

## Give it a try

    git clone git://github.com/thlorenz/browserify-sourcemap-example.git && cd browserify-sourcemap-example
    npm install
    node app

## What you get

### Stacktraces in console output

![console](https://raw.github.com/thlorenz/browserify-sourcemap-example/master/assets/devtools-console.png)

### Separate sources

- original files in sources
- break points referring to original files
- stack traces referring to locations in original files


![sources](https://raw.github.com/thlorenz/browserify-sourcemap-example/master/assets/devtools-sources.png)

### Find original files via Command-O


![search](https://raw.github.com/thlorenz/browserify-sourcemap-example/master/assets/devtools-search.png)

## Few simple steps I took to build this

1. Install dependencies:
  
  - browserify fork that supports sourceMappingURLs: `npm i -S git://github.com/thlorenz/node-browserify.git#sourcemaps`
  - express `npm i -S express`

2. Create directories: 

   mkdir -p public/js views routes

3. Create index.html in /views which requires the bundle we'll generate in the bundle route
4. Create app.js 
5. Create a bundle route which re-generates the bundle every time it is requested
6. Create some sample JavaScript files that will be required via the `main.js` entry file
