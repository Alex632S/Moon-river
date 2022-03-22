# Moon-river
A simple landing page for jewelry presentation.
This Landing page features a drop-down navigation menu and minimalist animation.
There is also a google map and form submission.

![html5](https://img.shields.io/badge/-html5-282a36?style=for-the-badge&logo=html5&logoColor=)
![pug](https://img.shields.io/badge/-Pug-282a36?style=for-the-badge&logo=Pug&logoColor=)
![css3](https://img.shields.io/badge/-css3-282a36?style=for-the-badge&logo=css3&logoColor=blue)
![scss](https://img.shields.io/badge/-scss-282a36?style=for-the-badge&logo=sass&logoColor=)
![JS](https://img.shields.io/badge/-JS-282a36?style=for-the-badge&logo=javascript&logoColor=)
![gulp](https://img.shields.io/badge/-gulp-282a36?style=for-the-badge&logo=gulp&logoColor=)

The following technologies are used in the development of the landing:
markup and cascading style sheets. The library is also used  **jquery, slick-carousel**.

Project navigation:

It uses Gulp and the pug and sass preprocessors.

If you need to start the development mode, you need to enter the command inside the downloaded projects in the terminal: 
 ```
 $ npm i 
 ```
This command will help you install the development package.

## The main modules of the project and their dependencies. 

### Html file named **index** uses pug files.
Hierarchy:
<br>![pug_hierarchy](app/img/readme/01-pug-tree.png)

> 1. The file with the name **index** is initializing.
> 2. The files inside the modules folder are plug-ins  to a file named **index**.
> 3. The files inside the includes folder are plug-ins  to a file named **index**.


### The Scss file named **style** uses pug files.
Hierarchy:
<br>![pug_hierarchy](app/img/readme/02-sass-tree.png)

> 1. The file named **style** is initializing.
> 2. The files inside the **modules** folder are plug-ins to a file called **style**.
> 3. The files inside the **includes, media** folder are plug-ins to a file called **style**.
> 4. The file called **style** also has **normalize.css** initialized.


