//muda o tamanho da foto de perfil ao passar o mouse
let imgPerfil = document.querySelector(".borda-degrade");
imgPerfil.addEventListener("mouseover", function () {
  imgPerfil.style.transform = "scale(1.5)";
});
imgPerfil.addEventListener("mouseout", function () {
  imgPerfil.style.transform = "";
});

// duplo click na foto muda a cor do coração
let imgFeed = document.getElementById("foto-post");
let coracaoVermelho = document.getElementById("coracao");
let curtidas = document.getElementById("numero-curtidas");

imgFeed.addEventListener("dblclick", function () {
  coracaoVermelho.style.fill = "red";
  ("");

  //aumenta o numero de curtidas
  let manipulaCurtidas = Number(curtidas.textContent);
  curtidas.textContent = manipulaCurtidas + 1;
});

//ao clicar no coracao, fica vermelho ou sem cor
coracaoVermelho.addEventListener("click", function () {
  let manipulaCurtidas = Number(curtidas.textContent);
  if (coracaoVermelho.style.fill === "") {
    coracaoVermelho.style.fill = "red";
    curtidas.textContent = manipulaCurtidas + 1;
  } else {
    coracaoVermelho.style.fill = "";
    curtidas.textContent = manipulaCurtidas - 1;
  }
});

//manipulação do bookmark
let salvar = document.getElementById("salvar");
salvar.addEventListener("click", function () {
  salvar.classList.toggle("preenchimento-salvar");
  if (salvar.classList.contains("preenchimento-salvar")) {
    setTimeout(function () {
      alert("post salvo!");
    }, 500);
  } else {
    setTimeout(function () {
      alert("o post não está mais salvo!");
    }, 500);
  }
});

//interação dos comentários
let comentar = document.getElementById("comentar");
let inputComent = document.getElementById("conteiner-comentarios");
comentar.addEventListener("click", function () {
  if (inputComent.style.display === "flex") {
    inputComent.style.display = "none";
  } else {
    inputComent.style.display = "flex";
  }
});

//adicionando os comentarios

let botaoComentario = document.getElementById("botao-publicar");
let areaComentarios = document.getElementById("area-comentarios");
let textoUser = document.getElementById("digita-comentario");
let controlador = 1;
botaoComentario.addEventListener("click", function () {
  let divPai = document.createElement("div");
  let divFilha = document.createElement("div");
  divPai.classList.add("divPai");
  divPai.appendChild(divFilha);

  //cria o icone
  let icone = document.createElement("i");
  icone.classList.add("fa-solid", "fa-circle-user");
  icone.style.fontSize = "17px";
  divPai.appendChild(icone);

  //cria o nome do usuario
  let user = document.createElement("p");
  user.textContent = `fulano_${controlador}`;
  user.style.fontWeight = "bold";
  user.style.fontSize = "13px";
  divFilha.appendChild(user);

  //cria o texto do comentario
  let texto = document.createElement("p");
  texto.textContent = textoUser.value;
  divFilha.appendChild(texto);

  areaComentarios.appendChild(divPai);
  inputComent.style.display = "none";
  textoUser.value = "";
  controlador++;
});
