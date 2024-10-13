const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como é possível definir dentro da informática a palavra HARDWARE",
        alternativas: [
            {
                texto: "É a parte fisíca do computador, algo palpável, possível de toque, é a parte que você chuta.",
                afirmacao: "Perfeito, o HARDWARE é algo fisíco, porém devemos lembrar que não é por conta de ser fisíco que não haverá alguma programação envolvida. UM ACERTO"
            },
            {
                texto: "É a parte fisíca do computador, essas partes não tem programação nenhuma é somente material.",
                afirmacao: "Em partes, é sim a parte fisíca porém a peça pode conter algo lógico, como por exemplo a placa de vídeo somente uma ventoinha não irá auxiliar de nada."
            },
            {
                texto: "É a parte lógica, a parte onde não podemos tocar, sendo somente lógica onde não há material envolvido.",
                afirmacao: "Conpletamente errado, o HARDWARE é a parte fisíca, porém pode sim conter algo lógico como o processador que é a peça responsavel por todo o funcionamento do PC."
            }
        ]
    },
    {
        enunciado: "Existe mais de uma linguagem de programação? E o que é uma linguagem?",
        alternativas: [
            {
                texto: "Não, CSS e HTML não são linguagens, existe somente JAVA. Linguagem é uma forma simplificada de programar substituindo o 0001 ou semelhante",
                afirmacao: "Está errado, porém realmente CSS e HTML não são concideradas linguagens, porém existe C, C++, Python são outras linguagens. A parte da linguagem está correta, ela é ultilizada para simplificar o processo de programação."
            },
            { 
                texto: "Sim, existem diversas linguagens, entre elas português e inglês. Linguagem é somente o idioma em que você irá programar.",
                afirmacao: "Não, linguagem de programação é diferente de idioma, linguagem é uma maneira de programar simplificada, para ajudar os programadores a não ter que escrever tudo em 0001."
            },
            {
                texto: "Sim, existem diversas linguagens, dentre elas Java, C++, entre outras. Linguagem é uma forma simplificada de programar, diferente de como era no começo usando código binário",
                afirmacao: "Você acertou em cheio, graças as linguagens podemos ter todos os sites que vemos hoje. UM ACERTO"
            }
        ]
    },
    {
        enunciado: "Qual a área que está em ascenção que está pagando mais?",
        alternativas: [
            {
                texto: "Programador, qualquer área da programação paga mais de R$20,000",
                afirmacao: "Não, a área da informática é muito dependente da sua função, alguém que só faz a aparência mesmo quando senior dificilmente chegará a ganhar R$20,000"
            },
            {
                texto: "Especista em nuvem, área qual é responsavel por criar um lugar para guardar dados",
                afirmacao: "Acertou em cheio, a carreira de cloud(ou nuvem em inglês), tem crecido exponencialmente por conta do aumento de websites e a necessidade de haver um lugar onde guardar os dados. UM ACERTO"
            },
            {
                texto: "Desenvolvedor de software, área que cria website",
                afirmacao: "Não, essa área está em grande ascenção, porém quanto mais ela cresce maior a necessidade de um local para guardar dados, logo alguém que trabalha com Cloud ganhará mais por conta de necessidade."
            }
        ]
    },
    {
        enunciado: "Qual foi a primeira linguagem de programação de alto nível",
        alternativas: [
            {
                texto: "Fortran, foi a primeira linguagem de programação de altto nível revolucionado o desenvolvimento de software ciêntifico",
                afirmacao: "Exato, na época ela causou grande mudanças no mercado, porém dos dias atuais outras tomaram maior destaque como o Python. UM ACERTO"
            },
            {
                texto: "Javascript, revolucionou a área de crianção de websites, sendo a mais importante de todas",
                afirmacao: "Quase, javascript revolucionou sim o mercado, porém surgiu somente em 1995, além de que serve somente para websites, não emglobando toda a programação"
            },
            {
                texto: "Python, revolucionou a área com a automação de tarefas, mudando completamente o mercado",
                afirmacao: "Não, automação de tarefas surgiu bem antes, além de que mesmo nos dias de hoje ela não tem grande influência,"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let pontos = 0;


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
    let afirmacoes = opcaoSelecionada.afirmacao;

    // Verifica se a afirmativa contém "UM ACERTO" e incrementa os pontos
    if (afirmacoes.includes("UM ACERTO")) {
        pontos++;  // Incrementa pontos
        // Remove a frase "UM ACERTO" da resposta final
        afirmacoes = afirmacoes.replace("UM ACERTO", "");
    }

    // Verifica se a afirmativa contém "OBRIGADO PELA PARTICIPAÇÃO!!!" e adiciona uma quebra de linha
    if (afirmacoes.includes("OBRIGADO PELA PARTICIPAÇÃO!!!")) {
        afirmacoes = afirmacoes.replace("OBRIGADO PELA PARTICIPAÇÃO!!!", "<br><br><strong>OBRIGADO PELA PARTICIPAÇÃO!!!</strong>");
    }

    historiaFinal += afirmacoes.trim() + "<br>" + "<br>";  // Adiciona a quebra de linha após cada afirmativa
    atual++;
    mostraPergunta();
}



function mostraResultado() {
    caixaPerguntas.textContent = "Com isso o resultado é...";

    // Adiciona a pontuação final ao texto do resultado, com a fonte maior
    historiaFinal += `<br><strong><span style="font-size: 24px;">Sua pontuação final foi: ${pontos} acertos.</span></strong>`;
    
    textoResultado.innerHTML = historiaFinal;  // Usa innerHTML para suportar tags HTML
    caixaAlternativas.textContent = "";
}


mostraPergunta();
