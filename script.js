// ================= CONFIGURAÇÃO =================
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxgwTOi5x1jO2596jEOUZl3VfGs1RXaINmGKelwPXPEnXrGgmqMF3RoLutBco9touW1/exec";

const quizData = {
    fabrica: [
        { q: "Sobrou retalho de metal na reforma de uma unidade móvel. O que fazer?", options: ["Deixar no canto da bancada", "Descartar na caçamba de recicláveis", "Misturar com lixo comum", "Guardar 'por via das dúvidas'"], answer: 1 },
        { q: "O uniforme com faixa neon deve estar sempre limpo para visibilidade. Qual 'S' foca nisso?", options: ["Seiso", "Seiton", "Seiketsu", "Shitsuke"], answer: 0 },
        { q: "Ferramentas de marcenaria e elétrica misturadas após o uso ferem qual senso?", options: ["Seiri", "Seiton", "Shitsuke", "Seiketsu"], answer: 1 },
        { q: "As faixas neon do uniforme estão desgastadas, perdendo a função de segurança. Isso é:", options: ["Normal do dia a dia", "Falta de Seiketsu", "Apenas estética", "Problema do RH"], answer: 1 },
        { q: "Manter o posto de trabalho em containers limpo, mesmo em reformas pesadas, é:", options: ["Impossível", "Responsabilidade da limpeza", "Senso de Disciplina", "Perda de tempo"], answer: 2 }
    ],
    almoxarifado: [
        { q: "O controle de EPIs é feito no Sankhya. Manter o sistema atualizado evita desperdício de qual 'S'?", options: ["Seiri", "Seiso", "Seiton", "Nenhum"], answer: 0 },
        { q: "Com pouco espaço físico, qual a melhor estratégia de Seiton (Organização)?", options: ["Empilhar tudo", "Identificar locais e usar verticalização", "Deixar no chão", "Não organizar"], answer: 1 },
        { q: "Um item novo chegou e não tem lugar definido. O que deve ser feito imediatamente?", options: ["Criar um endereçamento padronizado", "Deixar na entrada", "Colocar em cima de outro item", "Esperar o inventário"], answer: 0 },
        { q: "O 5S foi implementado no setor de almoxarifado. Para manter o resultado, precisamos de:", options: ["Nova reforma", "Shitsuke", "Mais espaço", "Trocar o sistema"], answer: 1 },
        { q: "Itens obsoletos de projetos antigos ocupando prateleiras devem ser:", options: ["Mantidos lá", "Doados/Descartados (Seiri)", "Escondidos", "Pintados"], answer: 1 }
    ],
    compras: [
        { q: "Para garantir que a Fábrica receba o insumo no prazo, o pedido de compra no Sankhya deve ser:", options: ["Feito de qualquer jeito", "Padronizado e detalhado", "Apenas por telefone", "Esquecido no rascunho"], answer: 1 },
        { q: "O acúmulo de notas fiscais de fornecedores sem processar fere qual senso?", options: ["Seiri", "Seiso", "Seiton", "Nenhum"], answer: 0 },
        { q: "Manter o catálogo de fornecedores de componentes médicos atualizado e organizado é:", options: ["Seiton", "Seiso", "Shitsuke", "Perda de tempo"], answer: 0 },
        { q: "Solicitar materiais em excesso que ficam parados no almoxarifado sem uso vai contra o:", options: ["Seiri", "Seiso", "Seiketsu", "Shitsuke"], answer: 0 },
        { q: "A comunicação clara com o Financeiro para liberação de pagamentos depende de processos:", options: ["Bagunçados", "Padronizados", "Informais", "Lentos"], answer: 1 }
    ],
    comercial: [
        { q: "Informações claras e sem erros para o cliente no CRM evitam retrabalho. Qual 'S'?", options: ["Seiketsu", "Seiso", "Seiri", "Nenhum"], answer: 0 },
        { q: "A confiança do cliente é mantida com processos organizados e transparentes. Isso reflete:", options: ["Shitsuke", "Seiton", "Seiri", "Seiso"], answer: 0 },
        { q: "Contratos e propostas em rascunho espalhados pela mesa de trabalho ferem o:", options: ["Seiton", "Seiri", "Seiso", "Nenhuma"], answer: 1 },
        { q: "Manter a base de leads atualizada, removendo quem não tem interesse, foca no senso de:", options: ["Seiri", "Seiso", "Seiton", "Shitsuke"], answer: 0 },
        { q: "A clareza nas informações passadas ao cliente sobre a unidade móvel foca em:", options: ["Seiketsu", "Seiso", "Seiri", "Nenhum"], answer: 0 }
    ],
    marketing: [
        { q: "O mural de avisos tem 'caixinhas' para papéis. Papéis de atividades antigas devem ser:", options: ["Mantidos como histórico", "Retirados para dar lugar ao novo", "Acumulados", "Deixados no chão"], answer: 1 },
        { q: "A padronização visual dos anúncios da empresa no mural reflete qual senso?", options: ["Seiso", "Seiketsu", "Seiton", "Seiri"], answer: 1 },
        { q: "Arquivos digitais de campanhas devem estar em pastas nomeadas. Isso é:", options: ["Seiton Digital", "Perda de tempo", "Apenas estética", "Tarefa do TI"], answer: 0 },
        { q: "As artes impressas que sobram e ficam em cima das mesas ferem qual senso?", options: ["Seiton", "Seiri", "Seiso", "Todos os anteriores"], answer: 3 },
        { q: "Manter o mural limpo e atualizado reflete qual senso?", options: ["Seiso", "Seiketsu", "Seiri", "Shitsuke"], answer: 0 }
    ],
    rh: [
        { q: "A entrega de novos uniformes padronizados para escritório e fábrica visa:", options: ["Apenas estética", "Seiketsu", "Gasto desnecessário", "Seiso"], answer: 1 },
        { q: "Manter o estoque de uniformes organizado por tamanho facilita o:", options: ["Seiton", "Seiri", "Seiso", "Nenhuma"], answer: 0 },
        { q: "O agendamento da psicóloga mensal deve estar visível e organizado. Qual senso ajuda?", options: ["Seiton", "Seiri", "Seiketsu", "Shitsuke"], answer: 2 },
        { q: "Documentação de integração de novos funcionários deve ser digitalizada para evitar papel acumulado. Isso é:", options: ["Seiri", "Seiso", "Seiton", "Seiketsu"], answer: 0 },
        { q: "Estimular os colaboradores a manterem o 5S nas áreas comuns é papel do:", options: ["Shitsuke", "Apenas da limpeza", "Diretoria apenas", "Ninguém"], answer: 0 }
    ],
    financeiro: [
        { q: "A agilidade para liberar materiais para a Fábrica depende de documentos organizados. Qual 'S'?", options: ["Seiton", "Seiso", "Seiketsu", "Shitsuke"], answer: 0 },
        { q: "Notas fiscais guardadas fora de ordem dificultam a auditoria. Isso fere o:", options: ["Seiton", "Seiri", "Seiso", "Shitsuke"], answer: 0 },
        { q: "O uso consciente de papel e impressão no setor financeiro ajuda na:", options: ["Sustentabilidade e Seiri", "Apenas economia", "Estética", "Fábrica"], answer: 0 },
        { q: "Manter as mesas limpas ao final do expediente é um compromisso de:", options: ["Seiso", "Seiri", "Seiton", "Shitsuke"], answer: 3 },
        { q: "Padronizar o envio de comprovantes para outros setores via sistema é:", options: ["Seiketsu", "Seiso", "Seiri", "Seiton"], answer: 0 }
    ],
    arquitetura: [
        { q: "A precisão da planta (elétrica/hidráulica) evita desperdício de material na Fábrica. Isso é:", options: ["Seiketsu", "Seiri", "Seiso", "Seiton"], answer: 1 },
        { q: "Manter a biblioteca de blocos CAD/BIM organizada por pastas é:", options: ["Seiton Digital", "Perda de tempo", "Desnecessário", "Seiso"], answer: 0 },
        { q: "O detalhamento marcenaria deve seguir um padrão técnico para a Fábrica entender. Qual 'S'?", options: ["Seiketsu", "Seiso", "Seiri", "Shitsuke"], answer: 0 },
        { q: "Amostras de materiais antigos e quebrados na mesa de projeto devem ser:", options: ["Mantidas", "Descartadas", "Pintadas", "Enviadas para o RH"], answer: 1 },
        { q: "A revisão constante dos projetos para evitar erros na implementação é:", options: ["Shitsuke", "Sorte", "Apenas trabalho", "Seiso"], answer: 0 }
    ],
    executivo: [
        { q: "Um bom ambiente de trabalho começa com a liderança dando exemplo no 5S. Isso é:", options: ["Shitsuke", "Seiri", "Seiton", "Seiso"], answer: 0 },
        { q: "Manter a sala de reuniões organizada após o uso é um exemplo de:", options: ["Seiton e Seiso", "Apenas Seiri", "Obrigação da limpeza", "Desnecessário"], answer: 0 },
        { q: "A clareza nas metas estratégicas da empresa reflete qual senso de padronização?", options: ["Seiketsu", "Seiri", "Seiso", "Nenhum"], answer: 0 },
        { q: "Promover a sustentabilidade nas unidades móveis é um valor de:", options: ["Cultura Organizacional", "Apenas Vendas", "Apenas Fábrica", "Marketing"], answer: 0 },
        { q: "Arquivos de diretoria protegidos e bem localizados garantem a continuidade. Isso é:", options: ["Seiton", "Seiri", "Seiso", "Nenhuma"], answer: 0 }
    ]
};

let perguntasAtuais = [];
let currentIdx = 0;
let score = 0;
let setorSelecionado = "";
let errosCapturados = [];

function iniciarQuiz(setor) {
    setorSelecionado = setor;
    perguntasAtuais = quizData[setor];
    currentIdx = 0;
    score = 0;
    errosCapturados = [];

    const titulo = document.getElementById("quiz-title");
    if(titulo) titulo.innerText = `5S: ${setor.charAt(0).toUpperCase() + setor.slice(1)}`;
    
    document.getElementById("setor-selector").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("result-container").classList.add("hidden");
    
    loadQuestion();
}

function loadQuestion() {
    const q = perguntasAtuais[currentIdx];
    document.getElementById("question-text").innerText = q.q;
    const container = document.getElementById("options-container");
    container.innerHTML = "";
    
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(i, btn);
        container.appendChild(btn);
    });

    const progress = (currentIdx / perguntasAtuais.length) * 100;
    document.getElementById("progress-fill").style.width = `${progress}%`;
}

function checkAnswer(idx, btn) {
    const botoes = document.querySelectorAll(".option-btn");
    botoes.forEach(b => b.disabled = true);
    const perguntaAtual = perguntasAtuais[currentIdx];

    if (idx === perguntaAtual.answer) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
        errosCapturados.push(perguntaAtual.q); 
    }
    document.getElementById("next-btn").classList.remove("hidden");
}

document.getElementById("next-btn").onclick = () => {
    currentIdx++;
    if (currentIdx < perguntasAtuais.length) {
        loadQuestion();
        document.getElementById("next-btn").classList.add("hidden");
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");

    const porcentagemAcerto = (score / perguntasAtuais.length) * 100;
    const resultadoTexto = document.getElementById("score-text");
    
    if (porcentagemAcerto === 100) {
        resultadoTexto.innerHTML = `<span style="color: #28a745; font-weight: bold;">Excelente! 🏆</span><br>Você acertou tudo!`;
    } else {
        resultadoTexto.innerHTML = `Você acertou ${score} de ${perguntasAtuais.length}.`;
    }
}

async function enviarParaPlanilha() {
    const emailUser = document.getElementById("user-email").value;
    
    // Validação básica de e-mail
    if (!emailUser || !emailUser.includes("@")) {
        alert("Por favor, insira um e-mail válido para receber as dicas.");
        return;
    }

    const porcentagemCalc = ((score / perguntasAtuais.length) * 100).toFixed(2);
   const listaErros = errosCapturados.length > 0 
        ? errosCapturados.map(q => `[${setorSelecionado}] ${q}`).join(" | ") 
        : "Nenhum erro";

    const payload = {
        email: emailUser,
        setor: setorSelecionado,
        pontos: score,
        total: perguntasAtuais.length,
        porcentagem: porcentagemCalc + "%",
        data: new Date().toLocaleString('pt-BR'),
        erros: listaErros
    };

    const btnFinal = document.querySelector(".btn-final");
    btnFinal.innerText = "⏳ Enviando e-mail...";
    btnFinal.disabled = true;

    try {
        await fetch(GOOGLE_SHEET_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        alert("✅ Resultados salvos e dicas enviadas para o e-mail!");
        btnFinal.innerText = "✅ Concluído!";
    } catch (error) {
        console.error("Erro:", error);
        alert("❌ Erro ao enviar.");
        btnFinal.disabled = false;
    }
}

function reiniciarQuiz() {
    location.reload(); // Forma mais limpa de resetar tudo
}

// Lógica do Modal Informativo
const modal = document.getElementById("modal-5s");
const btnInfo = document.getElementById("info-btn");
const closeBtn = document.querySelector(".close-btn");

if (btnInfo) {
    btnInfo.onclick = () => {
        modal.classList.remove("hidden");
    };
}

if (closeBtn) {
    closeBtn.onclick = () => {
        modal.classList.add("hidden");
    };
}

// Fecha o modal se o usuário clicar fora da caixa branca
window.onclick = (event) => {
    if (event.target == modal) {
        modal.classList.add("hidden");
    }
};

// Gera o QR Code automaticamente para a URL atual do site
window.onload = function() {
    new QRCode(document.getElementById("qrcode"), {
        text: window.location.href,
        width: 128,
        height: 128,
        colorDark : "#0093dd", // Azul da Fleximedical
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
};
