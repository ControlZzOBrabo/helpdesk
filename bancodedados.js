// Programação

let mostrar = document.getElementById('mostrar')
const codigo = document.getElementById('codigo')

mostrar.addEventListener('click', ()=>{

    // Pegando os valores

    const codigo_id = localStorage.getItem("id_chamado")
    const cliente_id = localStorage.getItem("cliente");
    const sistema_id = localStorage.getItem("sistema");
    const modulo_id = localStorage.getItem("modulo");
    const manutenção_id = localStorage.getItem("manutenção");
    const tempo_id = localStorage.getItem("tempo");
    const status_id = localStorage.getItem("status");

    // Respostas (labels)

    const codigo = document.getElementById('codigo')
    const cliente = document.getElementById('cliente')
    const sistema = document.getElementById('sistema')
    const modulo = document.getElementById('modulo')
    const manutenção = document.getElementById('manutenção')
    const tempo = document.getElementById('tempo')
    const status = document.getElementById('status')

    // Fazendo eles aparecerem

    // codigo
    if (codigo_id !== null) {
        codigo.innerHTML = codigo_id
      } else {
        console.log("Nenhum valor encontrado para a chave 'minhaChave'");
      }
    // cliente
    if (cliente_id !== null) {
        cliente.innerHTML = cliente_id
      } else {
        console.log("Nenhum valor encontrado para a chave 'minhaChave'");
      }
    // sistema
    if (sistema_id !== null) {
        sistema.innerHTML = sistema_id
      } else {
        console.log("Nenhum valor encontrado para a chave 'minhaChave'");
      }
    // modulo
    if (modulo_id !== null) {
        modulo.innerHTML = modulo_id
      } else {
        console.log("Nenhum valor encontrado para a chave 'minhaChave'");
      }
    // manutenção
    if (manutenção_id !== null) {
        manutenção.innerHTML = manutenção_id
      } else {
        console.log("Nenhum valor encontrado para a chave 'minhaChave'");
      }
    // tempo
    if (tempo_id !== null) {
        tempo.innerHTML = tempo_id + ' Hrs'
      } else {
        console.log("Nenhum valor encontrado para a chave 'minhaChave'");
      }
    // status
    if (status_id !== null) {
        status.innerHTML = status_id
      } else {
        console.log("Nenhum valor encontrado para a chave 'minhaChave'");
      }
})

// Visto

const visto = document.getElementById('visto')

visto.addEventListener('click', ()=>{
  const status = document.getElementById('status')
  const status_atual = document.getElementById('statusatual').value
  localStorage.setItem('status',status)
  
  status.innerHTML = status_atual
})