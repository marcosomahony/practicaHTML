export class Main {

    // obligatorio incluir nombre y correo
    // mostrar datos al terminar

    constructor() {
        console.log("Cargación adecuada");

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
                    alert("Inserte el nombre")
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
            }
        };

        document.getElementById("submit").onclick = this.formContacto.recogerDatos.bind(this.formContacto)
    }

}