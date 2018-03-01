import { Main } from './main.js'
import { FormContacto } from './form.js'

(function () {
    document.addEventListener("DOMContentLoaded", () => new Main(), false)
    document.getElementById('main').addEventListener("DOMSubtreeModified", () => new FormContacto(), false)
})()