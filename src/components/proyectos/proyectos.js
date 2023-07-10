import { proyectos } from '../../data/proyectos'
import './proyectos.css'
const main$$ = document.querySelector('main')
const proyectosContainer = document.createElement('div')
proyectosContainer.classList.add('proyectos-container')



export const pintarProyectos = (ev) => {
    if (ev) { ev.preventDefault()}
    main$$.innerHTML = ''
    main$$.appendChild(proyectosContainer)
proyectosContainer.innerHTML = ''
for (const proyecto of proyectos) {
    proyectosContainer.innerHTML += `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${proyecto.image}" alt="Avatar";">
            </div>
            <div class="flip-card-back">
                <h1>${proyecto.titulo}</h1>
                <h2>${proyecto.tecnologias}</h2>
                <p>${proyecto.descripcion}</p>
                <a href="${proyecto.url}" target="_blank">Web del proyecto</a>
                <p>Año en que se realizo el proyecto: ${proyecto.año}</p>
            </div>
        </div>
    </div>
    `
}}

