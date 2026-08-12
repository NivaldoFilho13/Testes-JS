function mostrarPersonagem(personagem) {
    let mensagem = "";
    if (personagem === "Peter") {
        mensagem =
            "🕷️ Peter Parker é o Homem-Aranha mais conhecido. Ele possui superforça, agilidade, sentido-aranha e utiliza lançadores de teia.";
    }
    else if (personagem === "Miles") {
        mensagem =
            "🕸️ Miles Morales também assume o papel de Homem-Aranha e possui habilidades próprias, como camuflagem e ataques elétricos.";
    }
    else if (personagem === "MJ") {
        mensagem =
            "❤️ Mary Jane Watson é uma das pessoas mais próximas de Peter Parker e possui grande importância em sua vida.";
    }
    else if (personagem === "Duende") {
        mensagem =
            "🎃 O Duende Verde é um dos principais inimigos do Homem-Aranha e utiliza equipamentos avançados para combater o herói.";
    }
    else if (personagem === "Venom") {
        mensagem =
            "👅 Venom é um personagem ligado a um simbionte alienígena. Sua relação com o Homem-Aranha varia entre inimigo e aliado.";
    }
    else if (personagem === "Octopus") {
        mensagem =
            "🐙 Doutor Octopus é um cientista brilhante que utiliza quatro braços mecânicos para lutar contra seus inimigos.";
    }
    alert(mensagem);
}
function responder(resposta) {
    let resultado =
        document.getElementById("resultado");
    if (resposta === "Peter") {
        resultado.textContent =
            "✅ CORRETO! Peter Parker é o Homem-Aranha mais conhecido.";
        resultado.style.color = "#4caf50";
    }
    else {
        resultado.textContent =
            "❌ ERRADO! Tente novamente.";
        resultado.style.color = "#e21b23";
    }
}
