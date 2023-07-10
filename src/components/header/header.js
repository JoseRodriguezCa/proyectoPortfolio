import "./header.css";
import { renderEnlaces } from "../enlacesHeader/enlacesHeader";
import { renderIcon } from "../socialIconHeader/socialIconHeader";
import { enlaces } from "../../data/routes";


export const pintarHeader = () => {
    const header = document.querySelector('header');
    header.innerHTML = `    
    <div class="header-container">
        <img class="small-image" src="./image/buceo.jpg" alt="">
        <nav>
            <ul class="init-container">
                ${renderEnlaces(enlaces)}
            </ul>
        </nav>
        <div id="nav-icon">
            <i class="fa-solid fa-bars fa-flip"></i>
            </svg>
        </div>
        ${renderIcon()}
    </div>`;
};

export const pintarNavMenu = () => {
    const navMenu = document.querySelector(".init-container");
    if (navMenu.classList.contains("mostrar-menu")) {
        navMenu.classList.remove("mostrar-menu");
      } else {
        navMenu.classList.add("mostrar-menu");
      }
}


export const ocultarMenu = () => {
    const navMenu = document.querySelector(".init-container");
    const opciones = navMenu.querySelectorAll("a");

    for (const opcion of opciones) {
        opcion.addEventListener("click", () => {
            navMenu.classList.remove("mostrar-menu");
        })
    }
}