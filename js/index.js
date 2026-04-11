
document.addEventListener("DOMContentLoaded", function () {
    // função de blur
    function aplicarBlur(ativar) {
        document.body.classList.toggle("bloqueado", ativar);
    }

    // verifica se está no index e Entrada de Dados via Promp
    const path = window.location.pathname;
    const naHome = path === "/" || path.endsWith("/") || path.endsWith("index.html");

    if (naHome) {
    let nomeVisitante = prompt("Bem-vindo ao site! Qual é o seu nome?");
    let idadeVisitante = Number(prompt("Olá, " + nomeVisitante + "! Qual é a sua idade?"));

    let acessoLiberado = idadeVisitante >= 18;
    localStorage.setItem("acessoLiberado", acessoLiberado);
}

    //  pega valor salvo
    let acesso = localStorage.getItem("acessoLiberado");
    //Lógica de Decisão e Feedback e lógica de Decisão e Feedback
    if (acesso === "true") {
        alert("Acesso liberado! Conteúdo visível.");
        aplicarBlur(false);
    } else {
        alert("Acesso negado! Conteúdo bloqueado.");
        aplicarBlur(true);
    }

    const botaoTema = document.getElementById("tema-btn");

    // verifica se já tem tema salvo
    let temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");
        botaoTema.textContent = "Tema Claro";
    }

    // clique no <a>
    botaoTema.addEventListener("click", function (e) {
        e.preventDefault(); // evita recarregar a página

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