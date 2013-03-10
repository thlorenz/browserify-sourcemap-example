# browserify-sourcemap-example

Shows how browserify source mapping urls work (via separate browserify fork).


1. Install dependencies:
  
  - browserify fork that supports sourceMappingURLs: `npm i -S git://github.com/thlorenz/node-browserify.git#sourcemaps`
  - express `npm i -S express`

2. Create directories: 

   mkdir -p public/js views routes

3. Create index.html in /views which requires the bundle we'll generate in the bundle route
4. Create app.js 
5. Create a bundle route which re-generates the bundle every time it is requested
6. Create some sample JavaScript files that will be required via the `main.js` entry file
