export class Main {

    constructor() {
        /*IMPORTS Y TEMPLATES*/
        this.vista = {
            aBtnsMenu: document.querySelectorAll('nav ul a'),                 //botones
            eMain: document.querySelector('main'),                     //seccion main
            aImports: document.querySelectorAll('link[rel="import"]'),  //array de imports
            oImports: {}                                                //imports
        }

        this.vista.aBtnsMenu.forEach((item) => {
            item.addEventListener('click', this.menuItems.bind(this), false);
        })

        this.vista.aImports.forEach((elem) => {
            this.vista.oImports[elem.title] = elem.import;
        })

        this.cargarTemplate('home');

        /*MENU REPLEGABLE */
        document.addEventListener("click", function menuReplegable() {
            let opcionesRep = document.querySelector("#opRep").classList.toggle("esconder")
        });
    }

    menuItems(oEv) {
        oEv.preventDefault();
        if (!this.vista.oImports[oEv.target.id]) {
            // Si no existe template
            this.vista.eMain.innerHTML = `
            <article>
                <h2>404 Not Found</h2>
                <p>No hemos encontrado lo que estabas buscando</p>
            </article>`
        } else {
            this.cargarTemplate(oEv.target.id)
        }
    }

    cargarTemplate(id) {
        const IMPORT = this.vista.oImports[id];
        const ELEM = IMPORT.querySelector(`#${id}`);
        this.highlightSelected(id)
        this.vista.eMain.innerHTML = ELEM.innerHTML;
    }

    highlightSelected(id) {
        this.vista.aBtnsMenu.forEach(element => {
            element.classList.remove("active")
        });
        document.getElementById(id).classList.add("active")
    }
}