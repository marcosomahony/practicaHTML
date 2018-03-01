export class Main {

    // obligatorio incluir nombre y correo
    // mostrar datos al terminar

    constructor() {
        console.log("Cargación adecuada");

        /*IMPORTS Y TEMPLATES*/
        this.vista = {
            aBtnsMenu: document.querySelectorAll('a'),                 //botones
            eMain : document.querySelector('main'),                     //seccion main
            aImports: document.querySelectorAll('link[rel="import"]'),  //array de imports
            oImports: {}                                                //imports
        }

        this.vista.aBtnsMenu.forEach( (item) =>{
            item.addEventListener('click', this.menuItems.bind(this), false);
        })
        console.log(this.vista.aBtnsMenu);

        this.vista.aImports.forEach( (elem) => {
            this.vista.oImports[elem.title] = elem.import;
        })

       this.cargarTemplate('home'); 

        /*FORMULARIO */
        this.formContacto = {
            oDatos: {},
            oParrafo: document.getElementById("parrafo_resultado"),

            escribirDatos: function () {
                document.getElementById("form_contacto").classList.toggle("oculto")
                document.getElementById("resultado_sugerencia").classList.toggle("oculto")

                for (var i in this.oDatos) {
                    localStorage.setItem(i.toString(), this.oDatos[i])                    
                    this.oParrafo.innerHTML += "<li>" + i + ": <strong>" +
                        this.oDatos[i] + "</strong></li>";
                };
            },
            getTextos: function () {
                var inputs = document.querySelectorAll("input[type='text']")
                for (var i = 0; i < inputs.length; i++) {
                    this.oDatos[inputs[i].name] = inputs[i].value;
                }
                this.oDatos.Sugerencias = document.getElementById("Sugerencias").value;
            },
            validarFormulario: function () {
                let nombre = document.getElementById("Nombre").value
                let email = document.getElementById("Email").value

                if (nombre == null || nombre == "") {
                    alert("Inserte el nombre")          /*como no es sum¡bmit no podemos usar las alertas nativas del navegador*/
                    return false
                } 
                if (email == null || email == "") {
                    alert("Inserte el email")
                    return false
                } 
                return true
            },
            recogerDatos: function () {
                this.getTextos();
                if (this.validarFormulario()) {
                    this.escribirDatos()
                }
            },


        };
        /*document.getElementById("submit").onclick = this.formContacto.recogerDatos.bind(this.formContacto)*/
        
        /*MENU REPLEGABLE */
        document.addEventListener("click", function menuReplegable(){
            let opcionesRep = document.querySelector("#opRep").classList.toggle("opcionesRep")
        });

    }

    menuItems(oEv){
        oEv.preventDefault();
        console.log(`Se ha pulsado: ${oEv.target.id}`);
        this.cargarTemplate(oEv.target.id)
    }

     cargarTemplate (id) {
        // Se selecciona el import adecuado segun su nombre (title)
        const IMPORT = this.vista.oImports[id]
        console.log(IMPORT)
        // del import se selecciona el template que contiene
        const ELEM = IMPORT.querySelector(`#${id}`)
        console.log(`#${id}`)
        console.log(ELEM)
        // el HTML del elemnto se añade en el punto adecuado
        this.vista.eMain.innerHTML = ELEM.innerHTML
    } 

}