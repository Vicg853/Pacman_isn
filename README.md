![](https://github.com/Vicg853/Pacman_isn/blob/e429df0a9863791d89aa40830d9253707f3e5665/6e56d8fcafd7c7cad48e999957f36a54.jpg)
# Pacman ISN 
## _A little 3D pacman version for a school project_
Sadly this project is not fully finished. But here is the start of a little 3D version of Pacman made for Web, using: NodeJs/Express.js server (a little Backend for Frontend, just serving static files), HTML, CSS, JS, and the library Three.js. 
Hope you like it 😊, even tho it is still in development. 
Started while I was at Lycée Pasteur Vergueiro - São Paulo, SP - Brazil


## Development stages... :
* [x] Game base, with: Three.js, Pacman movements, and map generation
* [ ] Ghosts and their algorithms
* [ ] Little fruits and ghosts collision handling
* [ ] Some more advanced graphics (like some lighting and little bit higher 3D models)
* [ ] Better optimize web version with some options in React and support for Desktop version with Electron.js
#### _Maybe... :_
* [ ] Making a second version with mobile support using React Native
- - - - 

## Web access
If you don't wan't to install the project on your own computer, you may access it via this [URL](https://pacman-isn.herokuapp.com/)

## Installation
##### First, let's download the project
_Must have: [Node.Js](https://nodejs.dev/) installed_
##### With git clone the repository (or download and extract the zip file)
```bash
git clone https://github.com/Vicg853/Pacman_isn.git
cd Pacman_isn
```
<details>
    <summary>_In case you downloaded and extracted the Zip file_</summary>
    <p>
        ```cd [download repository path]/Pacman_isn```
    </p>
</details>

##### Then use [NPM](https://docs.npmjs.com/) package manager to download dependencies and run the project...
```bash
npm install
```
_For development run..._
```bash
npm install
npm run dev
```
_...Or for production run_
```bash
npm install
npm run start
```
##### Now you should be able to access the project on your brwoser...
...Just access [Localhost](http://localhost:8080/) on port ```8080``` in the browser of your choice.

- - - - 

## Technologies used
- [Three.js](https://threejs.org/) Javascript 3D library, version 0.121.1
- [Express.js](https://expressjs.com/) Node.js Web framework, version 4.17.1
- [Nodemon](https://nodemon.io/) Node.js code change monitor utility, version 2.0.4

## License
_MIT_
