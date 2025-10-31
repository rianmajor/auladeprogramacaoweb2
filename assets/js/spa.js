// assets/js/spa.js
import { cadastroTemplate } from './templates.js';

const btnCadastrar = document.getElementById('btn-cadastrar');
const formContainer = document.getElementById('form-container');

if (btnCadastrar && formContainer) {
  btnCadastrar.addEventListener('click', () => {
    formContainer.innerHTML = cadastroTemplate;
    // após injetar o formulário, o listener de submit (form.js) vai capturar o envio
  });
} else {
  console.warn('Elemento #btn-cadastrar ou #form-container não encontrado no DOM.');
}