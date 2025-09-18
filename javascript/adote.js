//PRIMEIRA PARTE
const imagens = ["../imagens/adote/urso1.png", "../imagens/adote/urso2.png", "../imagens/adote/urso3.png", "../imagens/adote/urso4.png"];
let index = 0;

const urso = document.getElementById("urso");
const contador = document.getElementById("contador");

urso.addEventListener("click", () => {
  index = (index + 1) % imagens.length;
  urso.src = imagens[index];
  contador.textContent = `${index + 1}/${imagens.length}`;
});

//SEGUNDA PARTE 

document.getElementById("reservaForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Reserva enviada com sucesso!");

  const botao = document.querySelector(".btn-reservar");

  
  botao.classList.add("reservado");
  botao.textContent = "Reservado";
  botao.disabled = true; 
});

//ROLAR


const botaoPreco = document.querySelector(".card button");

botaoPreco.addEventListener("click", () => {
  const formulario = document.getElementById("formulario-reserva");
  formulario.scrollIntoView({
    behavior: "smooth", 
    block: "start"      
  });
});




//API DE ACESSIBILIDADE
  (function(d){
    var s = d.createElement("script");
    s.setAttribute("data-account", "SUA_CHAVE");
    s.src="https://cdn.userway.org/widget.js";
    (d.body || d.head).appendChild(s);
  })(document)

  

