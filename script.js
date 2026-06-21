const abrirLogin = document.querySelector('.abrirLogin')
const login = document.querySelector('.login')
const cadastro = document.querySelector('.cadastro')
const abrirCadastro = document.querySelector('.abrirCadastro')
const comConta = document.querySelector('.comConta')
const semConta = document.querySelector('.semConta')

abrirLogin.addEventListener('click', () => {
    login.classList.toggle('ativo')
    cadastro.classList.remove('ativo')
})

abrirCadastro.addEventListener('click', () => {
    cadastro.classList.toggle('ativo')
    login.classList.remove('ativo')
})

comConta.addEventListener('click', () => {
    login.classList.add('ativo')
    cadastro.classList.remove('ativo')
})

semConta.addEventListener('click', () => {
    login.classList.remove('ativo')
    cadastro.classList.add('ativo')
})