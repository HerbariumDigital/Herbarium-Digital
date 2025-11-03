// Espera o conteúdo da página carregar antes de executar o script
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona TODOS os botões com a classe .toggle-btn
    const allButtons = document.querySelectorAll('.toggle-btn');

    // Adiciona um "ouvinte" de clique para cada botão encontrado
    allButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            // Encontra o 'card' pai mais próximo do botão que foi clicado
            const card = this.closest('.plant-card');
            
            // Dentro desse card, encontra a div de informação completa
            const info = card.querySelector('.full-info');

            // Adiciona ou remove a classe 'active' da div de informação
            // É isso que faz ela aparecer ou desaparecer (controlado pelo CSS)
            info.classList.toggle('active');

            // Muda o texto do botão
            if (info.classList.contains('active')) {
                this.textContent = 'Leia Menos'; // Se a informação está visível
            } else {
                this.textContent = 'Leia Mais'; // Se a informação está escondida
            }
        });
    });

});