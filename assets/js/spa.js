import { cadastroTemplate } from './templates.js';

const btnCadastrar = document.getElementById('btn-cadastrar');
const formContainer = document.getElementById('form-container');

btnCadastrar.addEventListener('click', () => {
  formContainer.innerHTML = cadastroTemplate; // insere o formulário no container
});