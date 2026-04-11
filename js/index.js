document.addEventListener("DOMContentLoaded", function () {
    function aplicarBlur(ativar) {
        document.body.classList.toggle("bloqueado", ativar);
    }

    const path = window.location.pathname;
    const repo = "/Projeto-1-Periodo/";

    if (path === "/" || path === repo || path.endsWith("index.html")) {
        let nomeVisitante = prompt("Bem-vindo ao site! Qual é o seu nome?");
        let idadeVisitante = Number(prompt("Olá, " + nomeVisitante + "! Qual é a sua idade para acessar o conteúdo sensível?"));
        let acessoLiberado = idadeVisitante >= 18;
        localStorage.setItem("acessoLiberado", acessoLiberado);
    }

    let acesso = localStorage.getItem("acessoLiberado");

    if (acesso === "true") {
        alert("Acesso liberado! Conteúdo visível.");
        aplicarBlur(false);
    } else {
        alert("Acesso negado! Conteúdo bloqueado.");
        aplicarBlur(true);
    }

    const botaoTema = document.getElementById("tema-btn");

    let temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");
        botaoTema.textContent = "Tema Claro";
    }

    botaoTema.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.toggle("dark-mode");
        let modoEscuro = document.body.classList.contains("dark-mode");
        if (modoEscuro) {
            botaoTema.textContent = "Tema Claro";
            localStorage.setItem("tema", "escuro");
        } else {
            botaoTema.textContent = "Tema Escuro";
            localStorage.setItem("tema", "claro");
        }
    });
});