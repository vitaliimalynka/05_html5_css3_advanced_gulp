# HTML5&CSS3 Advanced. Gulp

This is an app for learning to set up and test Gulp.

## Requirements

- [nodeJs (version >= v18.13.0)](https://nodejs.org/uk/)
- [git (verfion) >=2.38.1](https://git-scm.com/downloads)

## Scripts

- `"build": "gulp build"` - build project for production
- `"start": "gulp watch"` - start project locally and updete changes on real time. Best for development

## Install

1. Make sure you have installed the dependencies or install it on the 2 and 3 steps.
2. Download and install Node.JS v.18.13.0 (LTS) or higher from [official page](https://nodejs.org/en/download/releases/).
3. Download and install Git for your OS from [official page](https://git-scm.com/downloads)
4. Clone the project to your computer from the (source)[https://github.com/vitaliimalynka/html5_css3_advanced_gulp.git]. For this: 
    - start terminal (cmd, PowerShell, Bash or etc.)
    - choose some folder for this project
    - run command `git clone https://git.lanet.ua/external/webinair/link_client.git`
5. Go into folder with project by command `cd html5_css3_advanced_gulp`.
6. Install all required dependencies from package.json. For this, run command `npm i` or `npm install` on the terminal.
6. You can start project by scripts on the 'package.json' file. Run on the terminal next command:
    - for local development: `npm start`;
    - for build project for production: `npm run build`. This command create or udpate `dist` folder. In this folder you can find everithing for start project on the server

## Project structure
```
├── dist/ .......................... Compiled source files place  
├── src/ ........................... Source files  
│   ├── assets/ .................... folder with additional files  
│   │   ├── fonts/ ................. folder with fonts which uses in the project  
│   │   └── img/ ................... folder with images and icons which uses in the project  
│   ├── js/ ........................ folder with JavaScript files  
│   │   ├── main.js ................ entry point for index.html  
│   │   └── submodule.js ........... submodule  
│   ├── scss/ ...................... SCSS source for project   
│   │   └── style.scss ............. Entry point for styles  
│   └── index.html ................. the main HTML document  
├── .gitignore ..................... file for git with excluded folders and files   
├── package-lock.json .............. systems' file for this project  
├── package.json ................... the main systems' file wich subscribe this project, its' dependencies and etc  
└── README.md ...................... readme file  
```
# License
 [ISC](/LICENSE)

# Authors

- [Vitalii Malynka](https://github.com/vitaliimalynka)