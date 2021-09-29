# Art 109 Boilerplate Three.js

This is sites demonstrates how to create a simple three.js scene and how to load custom models using three.js. 

---

## The Project

On the back-end,
- The app starts at `server.js`
- Frameworks and packages are in `package.json`

On the front-end,
- Edit `style.css` and `index.html` as normal
- The basic three.js scene is housed in `client.js`
- The GLTF model scene is housed in `client2.js`

### Index.html
This is the landing page of the example. It uses client.js and style.css. The rest of the scripts are linked externally.


### gltf.html
This is the model loading example. It uses client2.js, style.css, and scripts found in the "build" and "src" folders. 

---

## When Remixing

- When adding new files, place them in the "public" folder, the Express server treats this as the root so you do not need to include the "/public" in your link. See the way the stylesheet is referenced in index.html for an example.
- If you want to use functionalities outside of the core three.js library you will need to furnish the script by adding a file, adding the package in npm, or linking to an external source. For this example, I add the required files to the "build" and "src" folders within the "public" folder. NOTE: I also had to go into the add-on scripts themselves and change to address for the three.js module to ensure it was pointing to the correct place.
- If you are remixing with glitch, assets can be added in the "assets" section, if you are remixing using a local environment, you can add assets to subfolder with "public".


## Adapted from Fog Creek

\ ゜o゜)ノ