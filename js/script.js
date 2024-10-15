const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.getElementById('score');
let score = 0;
let isGameOver = false;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Atualiza a pontuação se o jogo não estiver acabado
    if (!isGameOver) {
        score++;
        scoreDisplay.textContent = score;
    }

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./imagens/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        isGameOver = true;

        // Reinicia o jogo após 2 segundos
        setTimeout(() => {
            location.reload();
        }, 2000);
    }

}, 10);

document.addEventListener('keydown', jump);
