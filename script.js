// Variável para guardar o botão 
const botao = document.getElementById('tema');
const icone = botao.querySelector('i');
// Busca na memória do navegador a opção que o usuário tinha escolhido de tema
const salvaTema = localStorage.getItem('theme');

// Se o tema salvo na memória localStorage for tema escuro

if (salvaTema === 'dark'){
    // Adiciona a classe 'dark-mode' no corpo da página
    document.body.classList.add('dark-mode');
    // Trocar o icone de lua ('fa-moon') para icone de sol
    icone.classList.replace('fa-moon', 'fa-sun');
}

//QUANDO CLICAR NO BOTÃO ELE VAI EXECUTAR O CÓDIGO ABAIXO


    botao.addEventListener('click', () => {
    //LIGA OU DESLIGA A CLASSE DARK-MODE
    document.body.classList.toggle('dark-mode');


    //VERIFICAR SE A PÁGINA FICOU COM O MODO ESCURO ATIVADO
    const dark = document.body.classList.contains('dark-mode');


    //SE O MODO ESCURO ESTIVER ATIVADO (VERDADEIRO)
    if (dark){
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }else{
        //TROCA O DE SOL DE VOLTA PARA LUA
        icone.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});