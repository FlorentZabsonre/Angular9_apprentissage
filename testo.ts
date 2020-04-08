
// On reprend notre élément personnalisé 'super-heros' précédent
customElements.define('super-hero',
 class extends HTMLElement {
  constructor() {
   super();
   let template = document.getElementById('super-hero');
   // On récupère le contenu de notre template :
   let templateContent = template.content;
   // On ajoute le contenu de notre template au DOM de l'ombre
   const shadowRoot = this.attachShadow({mode:'open'})
    .appendChild(templateContent.cloneNode(true));
  }
})