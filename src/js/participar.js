document.getElementById('forms-id').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    window.location.href = './index.html'; // Redireciona para a página desejada
});