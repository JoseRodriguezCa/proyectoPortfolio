import "./contacto.css";

const main$$ = document.querySelector("main");

export const pintarContacto = (ev) => {
  if (ev) {
    ev.preventDefault();
  }
  main$$.innerHTML = "";
  main$$.innerHTML += `
    <form id="form">
    <div class="field">
      <label for="name">Nombre y Apellido</label>
      <input type="text" name="name" id="name" required>
    </div>
    <div class="field">
      <label for="email">Correo electronico</label>
      <input type="text" name="email" id="email" required>
    </div>
    <div class="field">
      <label for="asunto">Asunto</label>
      <input type="text" name="asunto" id="asunto" required>
    </div>
    <div class="field">
      <label for="message">Mensaje</label>
      <textarea name="message" id="message" required></textarea>
    </div>
  
    <input type="submit" id="button" value="Enviar mensaje" required >
  </form>
  
    `;
    const btn = document.getElementById('button');
    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
       const inputs$$ = document.querySelectorAll("input");
       const textarea$$ = document.querySelector("textarea")
       textarea$$.value = "";
       for (const input of inputs$$) {
        input.value = "";
       }
       btn.value = 'Enviando...';
    
       const serviceID = 'default_service';
       const templateID = 'template_crnwdmp';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Enviar mensaje';
          alert('Mensaje Enviado!');
        }, (err) => {
          btn.value = 'Enviar mensaje';
          alert(JSON.stringify(err));
        });
    });
};


