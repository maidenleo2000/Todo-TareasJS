import html from './app.html?raw';//en Vite el ?raw me permine importar un archivo HTML en crudo o RAW para poder insertarlo despues con un innerHTML como la linea 12
/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {

    //Cuando la funcion App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app)

    })();
}