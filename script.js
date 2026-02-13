// 1. Banco de Dados Único com todas as áreas da Fleximedical/Kure
// 1. Banco de Dados Único com todas as áreas da Fleximedical/Kure
const quizData = {
    fabrica: [
        { q: "Sobrou retalho de metal na reforma de uma unidade de Mamografia. O que fazer?", options: ["Deixar no canto da bancada", "Descartar na caçamba de recicláveis (Seiri)", "Misturar com lixo comum", "Guardar 'por via das dúvidas'"], answer: 1 },
        { q: "O novo uniforme com faixa neon deve estar sempre limpo para visibilidade. Qual 'S' foca nisso?", options: ["Seiso (Limpeza)", "Seiton", "Seiketsu", "Shitsuke"], answer: 0 },
        { q: "Ferramentas de marcenaria e elétrica misturadas após o uso ferem qual senso?", options: ["Seiri", "Seiton (Organização)", "Shitsuke", "Seiketsu"], answer: 1 },
        { q: "As faixas neon do uniforme estão desgastadas, perdendo a função de segurança. Isso é:", options: ["Normal do dia a dia", "Falta de Seiketsu (Padronização/Saúde)", "Apenas estética", "Problema do RH"], answer: 1 },
        { q: "Manter o posto de trabalho em containers limpo, mesmo em reformas pesadas, é:", options: ["Impossível", "Responsabilidade da limpeza", "Senso de Disciplina (Shitsuke)", "Perda de tempo"], answer: 2 }
    ],
    almoxarifado: [
        { q: "O controle de EPIs é feito no Sankhya. Manter o sistema atualizado evita desperdício de qual 'S'?", options: ["Seiri (Utilização)", "Seiso", "Seiton", "Nenhum"], answer: 0 },
        { q: "Com pouco espaço físico, qual a melhor estratégia de Seiton (Organização)?", options: ["Empilhar tudo", "Identificar locais e usar verticalização", "Deixar no chão", "Não organizar"], answer: 1 },
        { q: "Um item novo chegou e não tem lugar definido. O que deve ser feito imediatamente?", options: ["Criar um endereçamento padronizado", "Deixar na entrada", "Colocar em cima de outro item", "Esperar o inventário"], answer: 0 },
        { q: "O 5S foi implementado em Setembro/25. Para manter o resultado, precisamos de:", options: ["Nova reforma", "Shitsuke (Disciplina/Hábito)", "Mais espaço", "Trocar o sistema"], answer: 1 },
        { q: "Itens obsoletos de projetos antigos ocupando prateleiras devem ser:", options: ["Mantidos lá", "Doados/Descartados (Seiri)", "Escondidos", "Pintados"], answer: 1 }
    ],
    compras: [
        { q: "Para garantir que a Fábrica receba o insumo no prazo, o pedido de compra no Sankhya deve ser:", options: ["Feito de qualquer jeito", "Padronizado e detalhado (Seiketsu)", "Apenas por telefone", "Esquecido no rascunho"], answer: 1 },
        { q: "O acúmulo de notas fiscais de fornecedores em cima da mesa sem processar fere qual senso?", options: ["Seiri (Utilização/Descarte)", "Seiso", "Seiton", "Nenhum"], answer: 0 },
        { q: "Manter o catálogo de fornecedores de componentes médicos atualizado e organizado é:", options: ["Seiton (Organização)", "Seiso", "Shitsuke", "Perda de tempo"], answer: 0 },
        { q: "Solicitar materiais em excesso que ficam parados no almoxarifado sem uso vai contra o:", options: ["Seiri (Senso de Utilização)", "Seiso", "Seiketsu", "Shitsuke"], answer: 0 },
        { q: "A comunicação clara com o Financeiro para liberação de pagamentos depende de processos:", options: ["Bagunçados", "Padronizados (Seiketsu)", "Informais", "Lentos"], answer: 1 }
    ],
    comercial: [
        { q: "Informações claras e sem erros para o cliente no CRM evitam retrabalho. Qual 'S'?", options: ["Seiketsu (Padronização)", "Seiso", "Seiri", "Nenhum"], answer: 0 },
        { q: "A confiança do cliente é mantida com processos organizados e transparentes. Isso reflete:", options: ["Shitsuke (Disciplina)", "Seiton", "Seiri", "Seiso"], answer: 0 },
        { q: "Contratos e propostas em rascunho espalhados pela mesa de trabalho ferem o:", options: ["Seiton", "Seiri (Utilização - remover o desnecessário)", "Seiso", "Nenhuma"], answer: 1 },
        { q: "Manter a base de leads atualizada, removendo quem não tem interesse, foca no senso de:", options: ["Seiri", "Seiso", "Seiton", "Shitsuke"], answer: 0 },
        { q: "A clareza nas informações passadas ao cliente sobre a unidade móvel foca em:", options: ["Seiketsu", "Seiso", "Seiri", "Nenhum"], answer: 0 }
    ],
    marketing: [
        { q: "O mural de avisos tem 'caixinhas' para papéis. Papéis de palestras antigas devem ser:", options: ["Mantidos como histórico", "Retirados para dar lugar ao novo (Seiri)", "Acumulados", "Deixados no chão"], answer: 1 },
        { q: "A padronização visual dos anúncios da empresa no mural reflete qual senso?", options: ["Seiso", "Seiketsu (Padronização)", "Seiton", "Seiri"], answer: 1 },
        { q: "Arquivos digitais de campanhas (Outubro Rosa) devem estar em pastas nomeadas. Isso é:", options: ["Seiton Digital", "Perda de tempo", "Apenas estética", "Tarefa do TI"], answer: 0 },
        { q: "As artes impressas que sobram e ficam em cima das mesas ferem qual senso?", options: ["Seiton", "Seiri", "Seiso", "Todos os anteriores"], answer: 3 },
        { q: "Manter o mural limpo e sem vidros quebrados ou fitas velhas é:", options: ["Seiso (Limpeza)", "Seiketsu", "Seiri", "Shitsuke"], answer: 0 }
    ],
    rh: [
        { q: "A entrega de novos uniformes padronizados para escritório e fábrica visa:", options: ["Apenas estética", "Seiketsu (Padronização e Identidade)", "Gasto desnecessário", "Seiso"], answer: 1 },
        { q: "Manter o estoque de uniformes no Sankhya organizado por tamanho facilita o:", options: ["Seiton (Organização)", "Seiri", "Seiso", "Nenhuma"], answer: 0 },
        { q: "O agendamento da psicóloga mensal deve estar visível e organizado. Qual senso ajuda?", options: ["Seiton", "Seiri", "Seiketsu (Padronização de Processos)", "Shitsuke"], answer: 2 },
        { q: "Documentação de integração de novos funcionários deve ser digitalizada para evitar papel acumulado. Isso é:", options: ["Seiri", "Seiso", "Seiton", "Seiketsu"], answer: 0 },
        { q: "Estimular os colaboradores a manterem o 5S nas áreas comuns é papel do:", options: ["Shitsuke (Cultura/Disciplina)", "Apenas da limpeza", "Diretoria apenas", "Ninguém"], answer: 0 }
    ],
    financeiro: [
        { q: "A agilidade para liberar materiais para a Fábrica depende de documentos organizados. Qual 'S'?", options: ["Seiton", "Seiso", "Seiketsu", "Shitsuke"], answer: 0 },
        { q: "Notas fiscais guardadas fora de ordem dificultam a auditoria. Isso fere o:", options: ["Seiton (Organização)", "Seiri", "Seiso", "Shitsuke"], answer: 0 },
        { q: "O uso consciente de papel e impressão no setor financeiro ajuda na:", options: ["Sustentabilidade e Seiri", "Apenas economia", "Estética", "Fábrica"], answer: 0 },
        { q: "Manter as mesas limpas ao final do expediente é um compromisso de:", options: ["Seiso", "Seiri", "Seiton", "Shitsuke"], answer: 3 },
        { q: "Padronizar o envio de comprovantes para outros setores via sistema é:", options: ["Seiketsu (Padronização)", "Seiso", "Seiri", "Seiton"], answer: 0 }
    ],
    arquitetura: [
        { q: "A precisão da planta (elétrica/hidráulica) evita desperdício de material na Fábrica. Isso é:", options: ["Seiketsu (Padronização)", "Seiri", "Seiso", "Seiton"], answer: 1 },
        { q: "Manter a biblioteca de blocos CAD/BIM organizada por pastas é:", options: ["Seiton Digital", "Perda de tempo", "Desnecessário", "Seiso"], answer: 0 },
        { q: "O detalhamento marcenaria deve seguir um padrão técnico para a Fábrica entender. Qual 'S'?", options: ["Seiketsu (Padronização)", "Seiso", "Seiri", "Shitsuke"], answer: 0 },
        { q: "Amostras de materiais antigos e quebrados na mesa de projeto devem ser:", options: ["Mantidas", "Descartadas (Seiri)", "Pintadas", "Enviadas para o RH"], answer: 1 },
        { q: "A revisão constante dos projetos para evitar erros na implementação é:", options: ["Shitsuke (Disciplina/Hábito)", "Sorte", "Apenas trabalho", "Seiso"], answer: 0 }
    ],
    executivo: [
        { q: "Um bom ambiente de trabalho começa com a liderança dando exemplo no 5S. Isso é:", options: ["Shitsuke (Disciplina)", "Seiri", "Seiton", "Seiso"], answer: 0 },
        { q: "Manter a sala de reuniões organizada após o uso é um exemplo de:", options: ["Seiton e Seiso", "Apenas Seiri", "Obrigação da limpeza", "Desnecessário"], answer: 0 },
        { q: "A clareza nas metas estratégicas da empresa reflete qual senso de padronização?", options: ["Seiketsu", "Seiri", "Seiso", "Nenhum"], answer: 0 },
        { q: "Promover a sustentabilidade nas unidades móveis é um valor de:", options: ["Cultura Organizacional (Shitsuke)", "Apenas Vendas", "Apenas Fábrica", "Marketing"], answer: 0 },
        { q: "Arquivos de diretoria protegidos e bem localizados garantem a continuidade. Isso é:", options: ["Seiton", "Seiri", "Seiso", "Nenhuma"], answer: 0 }
    ]
};

// 2. Variáveis de Estado de Controle
let perguntasAtuais = [];
let currentIdx = 0;
let score = 0;
let setorSelecionado = "";

// 3. Função para Iniciar o Quiz (Troca de Telas)
function iniciarQuiz(setor) {
    setorSelecionado = setor;
    perguntasAtuais = quizData[setor];
    currentIdx = 0;
    score = 0;

    // Ajusta o título do quiz para o setor escolhido
    const titulo = document.getElementById("quiz-title");
    if(titulo) titulo.innerText = `5S: ${setor.charAt(0).toUpperCase() + setor.slice(1)}`;
    
    // Oculta seletor e mostra o container do quiz
    document.getElementById("setor-selector").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    
    loadQuestion();
}

// 4. Carregar Pergunta na Tela
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

    // Atualiza Barra de Progresso
    const progress = (currentIdx / perguntasAtuais.length) * 100;
    document.getElementById("progress-fill").style.width = `${progress}%`;
}

// 5. Verificar Resposta
function checkAnswer(idx, btn) {
    const botoes = document.querySelectorAll(".option-btn");
    botoes.forEach(b => b.disabled = true); // Evita cliques múltiplos

    if (idx === perguntasAtuais[currentIdx].answer) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
    }
    document.getElementById("next-btn").classList.remove("hidden");
}

// 6. Controle do Botão Próximo
document.getElementById("next-btn").onclick = () => {
    currentIdx++;
    if (currentIdx < perguntasAtuais.length) {
        loadQuestion();
        document.getElementById("next-btn").classList.add("hidden");
    } else {
        showResult();
    }
};

// 7. Tela de Resultados
function showResult() {
    // Esconde o conteúdo do quiz e mostra o de resultado
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");

    const porcentagemAcerto = (score / perguntasAtuais.length) * 100;
    const resultadoTexto = document.getElementById("score-text");
    
    // Lógica de Feedback Dinâmico
    if (porcentagemAcerto === 100) {
        resultadoTexto.innerHTML = `
            <span style="color: var(--secondary); font-weight: bold;">Excelente! 🏆</span><br>
            Você acertou ${score} de ${perguntasAtuais.length}.<br>
            O setor de ${setorSelecionado} está seguindo os padrões 5S perfeitamente!
        `;
    } else if (porcentagemAcerto >= 70) {
        resultadoTexto.innerHTML = `
            <span style="color: var(--primary); font-weight: bold;">Bom trabalho! 👍</span><br>
            Você acertou ${score} de ${perguntasAtuais.length}.<br>
            A base está sólida, mas fique atento aos detalhes para atingir a excelência.
        `;
    } else {
        resultadoTexto.innerHTML = `
            <span style="color: #dc3545; font-weight: bold;">Pode Melhorar ⚠️</span><br>
            Você acertou ${score} de ${perguntasAtuais.length}.<br>
            O 5S ajuda a evitar desperdícios na Fleximedical. Que tal revisar os conceitos do seu setor?
        `;
    }
}
// 8. Integração real com n8n (Substitua a URL quando criar o webhook)
async function enviarParaN8N() {
    const webhookUrl = "https://SEU_N8N_URL/webhook/projeto-5s";
    const payload = {
        setor: setorSelecionado,
        pontos: score,
        total: perguntasAtuais.length,
        timestamp: new Date().toISOString()
    };

    try {
        // Exemplo de integração real usando Fetch API
        /*
        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        */
        alert("Sucesso! Dados enviados para o n8n da Fleximedical.\n\nPayload: " + JSON.stringify(payload));
    } catch (error) {
        alert("Erro ao enviar dados. Verifique a conexão.");
    }
}

function reiniciarQuiz() {
    currentIdx = 0;
    score = 0;
    perguntasAtuais = [];
    setorSelecionado = "";

    // Limpa a interface e o texto de feedback
    document.getElementById("score-text").innerHTML = ""; // Limpa o texto do resultado anterior
    document.getElementById("progress-fill").style.width = "0%";
    
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("setor-selector").classList.remove("hidden");
    document.getElementById("next-btn").classList.add("hidden");
}