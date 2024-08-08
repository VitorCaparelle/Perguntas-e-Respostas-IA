const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Videogame é uma disputa competitiva, executada no formato de um jogo eletrônico. O jogador permanece diante de uma TV que transmite as imagens do confronto. Qual o geito de jogar com os amigos sem ter problemas?",
        alternativas: [
            {
                texto: "Online via Internet é distante e instável",
                afirmacao: "Você confirma, por que com Internet vai ter uma leve queda de fps"
            },
            {
                texto: "Cooperativo um do lado do outro",
                afirmacao: "Você confirma, um do lado do outro não vai ter nenhuma queda de fps"
            }
        ]
    },
    {
        enunciado: "Qual foi o nome dado ao jogo criado por William Higinbotham, que era uma simulação de tênis?",
        alternativas: [
            {
                texto: "Tennis for Two 1",
                afirmacao: "jogo simula uma partida de tênis usando gráficos simples com dois traços e uma bola "
            },
            {
                texto: "Tennis Programming",
                afirmacao: "Você confirma que Tennis Programming não é o nome utilizado para o jogo."
            }
        ]
    },
    {
        enunciado: "Enunciado 3",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 1"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
    {
        enunciado: "Enunciado 4",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 1"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
    {
        enunciado: "Enunciado 5",
        alternativas: [
            {
                texto: "texto botão 1",
                afirmacao: "Afirmação do texto botão 1"
            },
            {
                texto: "texto botão 2",
                afirmacao: "Afirmação do texto botão 2"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
