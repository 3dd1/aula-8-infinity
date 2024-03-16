// const usuarios = [
//     ["joao@gmail.com", "123456"],
//     ["abel@gmail.com", "deusefiel"],
//     ["maria@gmail.com", "456789"],
//     ["antonio@gmail.com", "euamominhamae"],
//     ["ana@gmail.com", "ana1996"],
//     ]
// const email = document.querySelector("#email")
// const senha = document.querySelector("#senha")
// const formulario = document.querySelector("#formulario")
// // const botao = document.querySelector("#botao")

// // ---------MINHA VERSÃO------- (essa versao não utiliza o "form")
// // botao.addEventListener("click", () => {
// //     for(let conta of usuarios){
// //         if (conta.includes(email.value) && conta.includes(senha.value)){
// //             alert("conta incluida no banco de dados")
// //             break
// //         }
// //         else{
// //             alert("conta não incluida")
// //             break
// //         }
// //     }
// // })

// function checarUsuario(event){
//     event.preventDefault()
//     let deu_certo = false

//     for(let usuario_atual of usuarios){
//         if(usuario_atual[0] === email.value && usuario_atual[1] === senha.value){
//             alert("login efetuado com sucesso!")
//             deu_certo == true
//             break 
               
//     }
//     if(!deu_certo){
//         alert("email ou senha incorreto")
//         break
//     }
//     }
    
// }
    


// formulario.addEventListener("submit", checarUsuario)


//  ---------------CLOSURE---------- (UMA CALLBACK DENTRO DE UMA CALLBACK)
const titulo = document.querySelector("#titulo")
const principal = document.querySelector("#principal")
const secundario = document.querySelector("#secundario")
const terciario = document.querySelector("#terciario")
const normal = document.querySelector("#normal")

function mudarClasse(nome_da_classe){
    titulo.className = ''
    titulo.classList.add(nome_da_classe)
}

principal.addEventListener("click", () => mudarClasse("titulo_principal"))
secundario.addEventListener("click", () => mudarClasse("titulo_secundario"))
terciario.addEventListener("click", () => mudarClasse("titulo_terciario"))
normal.addEventListener("click", () => mudarClasse(""))