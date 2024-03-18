
// Variável para armazenar o número secreto gerado aleatoriamente
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Variável para armazenar a pontuação do jogador
let score = 20;

// Variável para armazenar a pontuação mais alta
let highScore = 0;

// Função para exibir uma mensagem na tela
const showMessage = (message) => {
    document.querySelector('.message').textContent = message;
};

// Event listener para o botão "Jogar Novamente"
document.querySelector('.again').addEventListener('click', () => {
    // Reinicia o jogo
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Reseta o estilo e valores na tela
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    showMessage("Start guessing...");
});

// Event listener para o botão "Verificar"
document.querySelector('.check').addEventListener('click', () => {
    // Obtém o valor do input do usuário
    const guess = Number(document.querySelector('.guess').value);

    // Verifica se ainda há pontos
    if (score > 1) {
        // Se o usuário ainda tem pontos
        if (!guess) {
            // Se o input está vazio
            showMessage("Digite um Número!!!");
        } else if (secretNumber == guess) {
            // Se o número do usuário é igual ao número secreto
            showMessage("Número correto!");
            // Altera o estilo de fundo para verde
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').style.width = "30rem";
            document.querySelector('.number').textContent = secretNumber;

            // Atualiza a pontuação mais alta se necessário
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if (secretNumber != guess) {
            // Se o número do usuário é diferente do número secreto
            showMessage(secretNumber > guess ? "Número muito baixo'!" : "Número muito alto");
            // Decrementa a pontuação
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        // Se o jogador perdeu todas as tentativas
        showMessage("Você perdeu...!");
        document.querySelector('.score').textContent = 0;
    }
});