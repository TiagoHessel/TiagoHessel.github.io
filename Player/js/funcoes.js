let musicas = [
    {
        'musica':'oteatromagico-um-filme.mp3',
        'titulo':'Um filme',
        'artista':'O Teatro Mágico',
        'foto':'teatro-magico.png'
    },
    {
        'musica':'capitaonemo-jack-soul-brasileiro.mp3',
        'titulo':'Jack Soul Brasileiro',
        'artista':'Capitão Nemo',
        'foto':'capitao-nemo.jpg'
    },
    {
        'musica':'flaviak-janelas-imprevisiveis.mp3',
        'titulo':'Janelas Imprevisíveis',
        'artista':'Flavia K',
        'foto':'flaviak.jpg'
    }
];
let musicaAtual = 0;

function TrocarMusica() {
    let componenteMusica = document.querySelector("#componente-musicas");

    if (musicaAtual == musicas.length - 1) {
        musicaAtual = 0;        
    } else {
        musicaAtual++;
    }
    componenteMusica.innerHTML = '<source src="audio/' + musicas[musicaAtual].musica + '" type="audio/mpeg">';
    componenteMusica.load();
    document.querySelector(".tocar").click();
}

function AtualizarInformacoes() {
    document.querySelector(".titulo").innerText = musicas[musicaAtual].titulo;
    document.querySelector(".artista").innerText = musicas[musicaAtual].artista;
    document.querySelector("body").style.backgroundImage = "url('img/"+ musicas[musicaAtual].foto +"')";
    document.querySelector(".imagem-capa").src = "img/"+ musicas[musicaAtual].foto;
}

function PausarMusica() {
    let componenteMusica = document.querySelector("#componente-musicas");
    componenteMusica.pause();

    document.querySelector(".tocar").style.display = "inline";
    document.querySelector(".pausar").style.display = "none";
}

function TocarMusica() {
    let componenteMusica = document.querySelector("#componente-musicas");
    componenteMusica.play();

    document.querySelector(".tocar").style.display = "none";
    document.querySelector(".pausar").style.display = "inline";

    AtualizarInformacoes();
}


function AtualizaTempo() {
    let componenteMusica = document.querySelector("#componente-musicas");
    let segundos = parseInt(componenteMusica.currentTime % 60);
    let minutos = parseInt((componenteMusica.currentTime / 60) % 60);

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    document.querySelector('#tempo-atual').innerHTML = minutos + ':' + segundos ;

    document.querySelector('.barra-tempo').value = componenteMusica.currentTime;

    if (componenteMusica.currentTime == componenteMusica.duration) {
        TrocarMusica();
    }
}



function AtualizarTempoTotalMusica() {
    let componenteMusica = document.querySelector("#componente-musicas");

    console.log(componenteMusica.duration);
    let minutos = parseInt(componenteMusica.duration / 60, 10);
    let segundos = parseInt(componenteMusica.duration % 60);

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    document.querySelector("#tempo-total").innerText = minutos + ':' + segundos;
    document.querySelector('.barra-tempo').max = componenteMusica.duration;
}