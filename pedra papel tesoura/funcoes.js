let pontosUsuario = 0;
let pontosComputador = 0;
const placar_div = document.querySelector(".placar");

function game(opcaoDoUsuario, icone){
    const opcoesDisponiveis = ["Pedra", "Papel", "Tesoura"];
    const iconesDisponiveis = ["&#x1F44A;", "&#x1F590;", "&#x270C;"];
    const numeroSorteado = Math.floor(Math.random() * 3);
    const opcaoDoComputador = opcoesDisponiveis[numeroSorteado];

    if (
        (opcaoDoUsuario == "Pedra" && opcaoDoComputador == "Tesoura") ||
        (opcaoDoUsuario == "Tesoura" && opcaoDoComputador == "Papel") ||
        (opcaoDoUsuario == "Papel" && opcaoDoComputador == "Pedra")
    ){
        document.getElementById("texto-resultado").innerHTML = opcaoDoUsuario + " ganha de " + opcaoDoComputador + ". VOCÊ GANHOU!" 
        pontosUsuario++;
        document.getElementById("pontos-usuario").innerHTML = pontosUsuario;
    }
    else if (
        (opcaoDoComputador == "Pedra" && opcaoDoUsuario == "Tesoura") ||
        (opcaoDoComputador == "Tesoura" && opcaoDoUsuario == "Papel") ||
        (opcaoDoComputador == "Papel" && opcaoDoUsuario == "Pedra")
    ){
        pontosComputador++;
        document.getElementById("pontos-computador").innerHTML = pontosComputador;
        document.getElementById("texto-resultado").innerHTML = opcaoDoUsuario + " perde de " + opcaoDoComputador + ". Você Perdeu... Loser!!!"
    }
    else if(opcaoDoUsuario == opcaoDoComputador){
        document.getElementById("texto-resultado").innerHTML = "Os dois escolheram " + opcaoDoUsuario + ". Empate!"
    }
    
    document.getElementById("escolha-usuario").innerHTML = icone;
    document.getElementById("escolha-x").innerHTML = "x";
    document.getElementById("escolha-computador").innerHTML = iconesDisponiveis[numeroSorteado];
}