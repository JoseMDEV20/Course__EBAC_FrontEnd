const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
    const mensagemSucesso = 'O segundo número é maior que o primeiro!';
    const mensagemFalha = 'O segundo número não é maior que o primeiro.';
    const mensagemErro = 'Por favor, preencha os dois campos com números válidos.';

    const divMensagem = document.getElementById('mensagem');
    divMensagem.className = '';

    if (numero1 === '' || numero2 === '') {
        divMensagem.textContent = mensagemErro;
        divMensagem.className = 'mensagem-erro';
    } else if (Number(numero2) > Number(numero1)) {
        divMensagem.textContent = mensagemSucesso;
        divMensagem.className = 'mensagem-sucesso';
    } else {
        divMensagem.textContent = mensagemFalha;
        divMensagem.className = 'mensagem-falha';
    }
});
