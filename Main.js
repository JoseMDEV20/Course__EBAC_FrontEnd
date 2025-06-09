const form = document.getElementById('formCadastro');

function validaNome(nomeCompleto) {
    const nomeCompletoArray = nomeCompleto.trim().split(' ').filter(Boolean);
    return nomeCompletoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const botao = form.querySelector('button[type="submit"]');

    if (!validaNome(nomeCompleto)) {
        alert('O nome completo deve conter pelo menos dois nomes.');
        return;
    }

    botao.textContent = 'Enviado com sucesso!';
    botao.style.backgroundColor = '#28a745';
    botao.style.color = '#fff';
    botao.disabled = true;

});

console.log(form);