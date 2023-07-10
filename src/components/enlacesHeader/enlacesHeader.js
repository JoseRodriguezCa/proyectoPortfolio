import "./enlacesHeader.css";

export const renderEnlaces = (enlaces) => {

    let returnText = ``;

    for (const enlace of enlaces) {
        returnText += `
            <li>
                <a href="${enlace.href}" id="${enlace.id}">${enlace.texto}</a>
            </li>
        `
    }
    return returnText;
}