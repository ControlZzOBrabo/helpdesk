// PROGRAMAÇÃO

// Botões

let solicitar = document.getElementById('solicitar')
let limpar = document.getElementById('limpar')

solicitar.addEventListener('click', ()=>{
    
    // Aba de Testes -------------->
//     if(localStorage.getItem('cliente') === null) {

//         localStorage.setItem('cliente',cliente) 

//   }
    // ---------------------------->

    // Aleatorizador

    let id_chamado = Math.round(Math.random() * 100000) + 1

    // Declarando dados

    const cliente = document.getElementById('cliente').value
    const sistema = document.getElementById('sistema').value
    const modulo = document.getElementById('modulo').value
    const manutenção = document.getElementById('manutenção').value
    const tempo = Math.round(Math.random() * 50) + 1;
    const status = 'aberto'

    // Salvando os Dados no Local Storage

    localStorage.setItem('cliente',cliente)
    console.log(cliente)
    localStorage.setItem('sistema',sistema)
    console.log(sistema)
    localStorage.setItem('modulo',modulo)
    console.log(modulo)
    localStorage.setItem('manutenção',manutenção)
    console.log(manutenção)
    localStorage.setItem('id_chamado',id_chamado)
    console.log(id_chamado)
    localStorage.setItem('tempo',tempo)
    console.log(tempo)
    localStorage.setItem('status',status)
    console.log(status)

    // Resposta

    let res = document.getElementById('res')
    res.innerHTML = 'A Requisição de Número ' + id_chamado + ' está em andamento' + '<br><br>Cliente: ' + cliente + '<br><br>Sistema: ' + sistema + '<br><br>Módulo: ' + modulo + '<br><br>Tipo Manutenção: ' + manutenção + '<br><br>Tempo: ' + tempo + ' Hrs<br>' + '<br>Status: ' + status
})

limpar.addEventListener('click', ()=>{
    localStorage.clear();
})