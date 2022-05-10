### Ajout des librairies
* webpack et webpack-cli
* @babel/core @babel/preset-env @babel/preset-react babel-loader
* Ajout de la commande de build

````
"build": "webpack --mode production"
````

* Création du fichier `webpack.config.js` à la racine du projet et ajout de la configuration 
de transformation des fichiers
* Utilisation du loader Babel
* Ajout du fichier `.babelrc` à la racine du projet et utilisation des presets