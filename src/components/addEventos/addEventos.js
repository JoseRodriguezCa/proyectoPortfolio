import { pintarExperiencia } from '../experiencia/experiencia'
import { ocultarMenu, pintarNavMenu } from '../header/header'
import { pintarPrincipal } from '../paginaPrincipal/paginaPrincipal'
import { pintarProyectos } from '../proyectos/proyectos'
import './addEventos.css'




export const addEventosEnlaces = () => {
const experiencia = document.querySelector("#experiencia")
const principal = document.querySelector("#principal")
const proyectos = document.querySelector("#proyectos")
const contacto = document.querySelector("#contacto")
const navMenu = document.querySelector("#nav-icon")

experiencia.addEventListener('click', (ev) => pintarExperiencia(ev))
principal.addEventListener('click', (ev) => pintarPrincipal(ev))
proyectos.addEventListener('click', (ev) => pintarProyectos(ev))
navMenu.addEventListener('click', () => pintarNavMenu(), ocultarMenu())
na
}