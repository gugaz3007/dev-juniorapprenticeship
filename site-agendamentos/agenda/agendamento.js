let horarioSelecionado = "";
let dataSelecionada = "";

// Recupera os dados armazenados no localStorage
const nome = localStorage.getItem('nome');
const telefone = localStorage.getItem('telefone');

// Função para selecionar o horário
function selecionarHorario(element) {
    // Remove a classe 'selected' de todos os botões de horário
    document.querySelectorAll(".horario button").forEach(btn => btn.classList.remove("selected"));
    
    // Adiciona a classe 'selected' ao botão clicado
    element.classList.add("selected");
    
    // Salva o horário selecionado
    horarioSelecionado = element.innerText;
}

// Função para selecionar a data
function selecionarData(element) {
    // Remove a classe 'selected' de todos os botões de data
    document.querySelectorAll(".data button").forEach(btn => btn.classList.remove("selected"));
    
    // Adiciona a classe 'selected' ao botão clicado
    element.classList.add("selected");
    
    // Salva a data selecionada
    dataSelecionada = element.innerText;
}

// Função para confirmar o agendamento
function confirmarAgendamento() {
    // Verifica se todos os campos estão preenchidos
    if (!dataSelecionada || !horarioSelecionado) {
        alert("Por favor, selecione uma data e um horário.");
        return;
    }

    // Verifica se o nome e o telefone estão no localStorage
    if (!nome || !telefone) {
        alert("Erro: Dados do cliente não encontrados.");
        return;
    }

    // Cria a mensagem para o WhatsApp
    const mensagem = `Olá, gostaria de agendar o seguinte horário:\n\nNome: ${nome}\nTelefone: ${telefone}\nData: ${dataSelecionada}\nHorário: ${horarioSelecionado}`;
    const numeroWhatsApp = "5513992014379"; // Substitua pelo número do seu salão

    // Gera o link para o WhatsApp com a mensagem e redireciona o usuário
    const url = `https://api.whatsapp.com/send/?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}&type=phone_number&app_absent=0`;
    window.location.href = url;
}
