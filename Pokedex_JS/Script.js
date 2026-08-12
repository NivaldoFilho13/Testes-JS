function mostrarPokemon(pokemon) {
    let mensagem = "";
    if (pokemon === "Pikachu") {
        mensagem =
            "Pikachu é um Pokémon do tipo Elétrico e é conhecido por sua grande velocidade e ataques elétricos.";
    }
    else if (pokemon === "Charizard") {
        mensagem =
            "Charizard é dos tipos Fogo e Voador. Ele possui asas e pode utilizar poderosos ataques de fogo.";
    }
    else if (pokemon === "Bulbasaur") {
        mensagem =
            "Bulbasaur é dos tipos Planta e Veneno. A semente em suas costas cresce ao longo de sua vida.";
    }
    else if (pokemon === "Squirtle") {
        mensagem =
            "Squirtle é um Pokémon do tipo Água que utiliza sua carapaça para se proteger.";
    }
    alert(mensagem);
}
function criarTreinador() {
    let nome =
        document.getElementById("nomeTreinador").value;
    let resultado =
        document.getElementById("mensagemTreinador");
    if (nome.trim() === "") {
        resultado.textContent =
            "Digite seu nome para começar!";
        return;
    }
    resultado.textContent =
        "Boa sorte, " +
        nome +
        "! Sua jornada Pokémon começou!";
}