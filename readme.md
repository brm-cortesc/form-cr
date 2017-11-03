## Pre requisitos
- [NodeJS](https://nodejs.org/) 6.10.*
- [GulpJS](http://gulpjs.com/)

Si no tiene instaladas estas herramientas en su equipo busque apoyo en Help Desk.

## Instalación
- Lo primero que debe hacer es clonar este repositorio en su equipo para poder realizar las pruebas localmente.
```
git clone https://github.com/brm-cortesc/frontdesign-package.git
```
- Luego se abre la consola, se ubica la carpera donde clonó el repositorio.
- Se ejecuta el siguiente comando en la consola para descagar las librerías necesarias.
```
npm install
```

## Directorios del proyecto

**src** - Es el directorio en donde están los archivos source de preprocesadores (Pug, Stylus, JS:ES6)

**src/es6** - Archivos JS:ES6

**src/stylus** - Archivos .styl que compilan a .css

**src/templates** - Archivos .pug con los que se arman las etiquetas base del proyecto: head, body, metatags, footer, header,menu, etc.

**src/views** - Archivos .pug que serán de cada interna que tendrá el proyecto: index/home registro, login, contenido, etc.

**publication** - Es el directorio que se entrega al desarrollador para subir al servidor

Después de instalar correctamente cada módulo abra los archivos **package.json** y **frontend.json** y reemplace los datos con los de su proyecto.


## Tareas

### Principales

```
npm start
```
Se crea  http://localhost:3000/ donde podrá ver el corte, css y js que va generando y la tarea se queda escuchando cambios en los archivos para refrescar automaticamente el navegador.


```
npm run finalizar
```

Genera archivos compilados y el html con los respectivos archivos vinculados

```
npm run js:watch
```

Escucha únicamente archivos de JS:ES6, los compila a ES4 y los minifica



### Secundarias / individuales

Estas mismas tareas se corren al ejecutar las tareas `npm start`, `npm run finalizar` y `npm run js:watch` 


```
gulp libs
```
Genera un archivo **libs.min.js** que contiene los plugins/frameworks que utiliza en el proyecto, estos archivos se agregan en el arreglo **jsLibs** en el **gulpfile.js**

```
gulp css
```
Procesa archivos .styl a .css usando nib para generar soporte con propiedades css3 (las nuevas propiedades como flex & calc aún no se da soporte)

```
gulp csslint
```
Evalua archivos .styl para para reportar errores de sintaxis


```
gulp minicss
```
Recoge en orden alfabético los archivos .css en la carpeta publication/css y genera un archivo minificado de css


```
gulp views
```
Procesa archivos .pug a .html


```
gulp watch
```
Crea http://localhost:3000/ que se escucha cambios en los archivos para refrescar automaticamente el navegador corriendo las tareas de views, css, csslint, js


```
gulp js:watch
```
Escucha y procesa archivos JS sintaxis ES6 a JS sintaxis ES4 y los genera minificados.
