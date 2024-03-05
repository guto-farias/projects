let passwordLength = 20
let finalPassword = ""

function generatePassword(){
    let chars = "abcdefghijklmnopqrstuvwxyz"

    const upperCaseEl = document.querySelector("#uppercase-check")
    const numberEl = document.querySelector("#number-check")
    const symbolEl = document.querySelector("#symbol-check")

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "?!@&*,.()[]"

    if(upperCaseEl.checked){
        chars += upperCaseChars
    }

    if(numberEl.checked){
        chars += numberChars
    }

    if(symbolEl.checked){
        chars += symbolChars
    }

    let password = ""

    for(let i = 0; i < passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber, randomNumber + 1) //recorte de uma string
    }

    const inputEl = document.getElementById("password")
    inputEl.value = password
    finalPassword = inputEl.value

}

function catchRange(){ //pego valor do input range e chamo generatePassword a cada alteração 
    const passwordLengthEl = document.querySelector("#password-length")
    passwordLengthEl.addEventListener("input", function(){
        passwordLength = passwordLengthEl.value
        document.querySelector("#password-length-text").innerText = passwordLength
        generatePassword()
    })
}

function copy(){
    navigator.clipboard.writeText(finalPassword)//copiar conteúdo do inputEl, API padrão atualmente
}
