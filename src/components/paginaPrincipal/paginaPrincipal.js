import { ocultarMenu, pintarNavMenu } from '../header/header'
import './paginaPrincipal.css'
const main = document.querySelector('main')


export const pintarPrincipal = (ev) => {
    if (ev) { ev.preventDefault()}
    main.innerHTML = `
    <div class="principal-container">
        <img class="principal-img" src="https://camp.ucss.edu.pe/wp-content/uploads/2021/09/img-llave-de-la-programacion.jpg" alt="">
        <div class="presentation">
            <h2>BIENVENIDOS</h2>
            <h1>Soy <span>José Rodriguez</span>, Fullstack Developer</h1>
            <p>Actualemte estoy estudiando el curso rock the code, de PowerMBA</p>
        </div>
    </div>`
    const navMenu = document.querySelector(".init-container");
    if (navMenu.classList.contains("mostrar-menu")) {
        navMenu.classList.remove("mostrar-menu");
      }
}

