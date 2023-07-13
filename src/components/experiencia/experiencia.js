import './experiencia.css'
import { experiencias } from '../../data/experiencias'
const main$$ = document.querySelector('main')
const experienciasContainer = document.createElement('div')
experienciasContainer.classList.add('experiencias-container')


export const pintarExperiencia = (ev) => {
    if (ev) { ev.preventDefault()}
    main$$.innerHTML = ''
    console.log("hola")
    main$$.innerHTML += `
    <div class="text-container">
        <h1>José Rodriguez</h1>
        <h2>Junior Developer</h2>
        <p>Realizando proyectos en html, css y js.</p>
        <p>Estudiando vite y react</p>
    </div>
    `
    main$$.appendChild(experienciasContainer)
    experienciasContainer.innerHTML = ''
    for (const experiencia of experiencias) {
    
    experienciasContainer.innerHTML += `
    <div class="experiencias">
        <img src="${experiencia.logo}" id="img${experiencia.id}" alt="Logo XBOX">
        <h1>${experiencia.empresa}</h1>
        <h2>${experiencia.puesto}</h2>
        <h3>${experiencia.responsabilidad}</h3>
        <p>${experiencia.descripcion}</p>
        <p>${experiencia.año}</p>
    </div>`
    }
}



