<script>

const formulario = document.getElementById('meuFormulario');


formulario.addEventListener('submit', function (event){

    event.preventDefault();


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Email:', username);
    console.log('Senha:', password);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = Email: ${ username } <br>Senha: ${password};
});
</script>