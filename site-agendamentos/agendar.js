   // Função chamada quando o botão "Agendar" é clicado
   function proximoPasso() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    if (nome === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Armazenar os dados no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('telefone', telefone);

    // Redireciona para a página de agendamento com os dados já salvos
    window.location.href = "agenda/agendamento.html";
}