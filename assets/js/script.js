/*
Case sensitive = reconheçe letras maiusculas e menusculas

por Tag: getElementByTagName()
por Id: getElementById()
por nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/
let testeE = document.querySelector('.form-msg-style')
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let EmailOk = false
let AssuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    let testeNome = document.querySelector('.form-box-style')    
    if (nome.value.length >=1 == nome.value.length<=3) {
        txtNome.innerHTML = 'Nome Invalido'  /*innerHTML insere um valor passado dentro da div selecionada no HTML*/
        txtNome.style.color = 'red'
        testeNome.style.backgroundColor = '#e17055'
        
        }   
        else if(nome.value <=0) {
            txtNome.innerHTML = ''
            testeNome.style.backgroundColor = '#55efc4'
        }
    else{
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
        testeNome.style.backgroundColor = '#ffeaa7'
        nomeOk = true 
    }

}

function validaEmail() {
    let testeEmail = document.querySelector('.form-box-style-email')
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Invalido'
        txtEmail.style.color = 'red'
        testeEmail.style.backgroundColor = '#e17055'
      if   (email.value <=0) { 
            txtEmail.innerHTML = ''
            testeEmail.style.backgroundColor = '#55efc4'
        }
    }
    
    else {
        txtEmail.innerHTML = 'E-mail Valido'
        txtEmail.style.color = 'green'
        testeEmail.style.backgroundColor = '#ffeaa7'
        EmailOk = true 
       
    }
}

function validaAssunto() {
    let teste = document.querySelector('.form-msg-style')
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Erro: Digite até 100 caracteres'
        txtAssunto.style.color = 'red'
        teste.style.backgroundColor = '#e17055' 
       
    }
        else if(assunto.value.length <1) {
                teste.style.backgroundColor = '#55efc4'
                txtAssunto.innerHTML = ''
         
        }
    else {
        
        teste.style.backgroundColor = '#ffeaa7' /*#ffeaa7*/
        txtAssunto.style.color = 'green'
        txtAssunto.innerHTML = 'Valido'
        txtAssunto.color = 'green'
        AssuntoOk = true 
    }    
            
            
   
    
            
    
}

function enviar () {
    if(nomeOk == true && EmailOk == true && AssuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulario corretamente antes de enviar')
    }

}

function mapaZoom () {
    mapa.style.width = '700px'
    mapa.style.height = '500px'

}

function mapaNormal () {
    mapa.style.width = '500px'
    mapa.style.height = '300px'
}