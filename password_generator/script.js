let passwordLength = 16
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
        calculateQuality()
        generatePassword()
        calculateFontSize(passwordLength)
    })
}

function calculateFontSize(passwordLength){
    const inputEl = document.getElementById("password")
    
    if (passwordLength > 30) {
        inputEl.classList.remove('font-sm')
        inputEl.classList.remove('font-xs')
        inputEl.classList.add('font-xxs')
    } else if(passwordLength > 24){
        inputEl.classList.remove('font-xxs')
        inputEl.classList.remove('font-sm')
        inputEl.classList.add('font-xs')
    } else if(passwordLength > 14){
        inputEl.classList.remove('font-xxs')
        inputEl.classList.remove('font-xs')
        inputEl.classList.add('font-sm')
    } else {
        inputEl.classList.remove('font-xxs')
        inputEl.classList.remove('font-xs')
        inputEl.classList.remove('font-sm')
    }
}

function calculateQuality(){
    const indicatorBarEl = document.querySelector("#security-indicator-bar")

    const upperCaseEl = document.querySelector("#uppercase-check")
    const numberEl = document.querySelector("#number-check")
    const symbolEl = document.querySelector("#symbol-check")

    const percent = Math.round(
        (passwordLength / 40 * 100) * 0.25 + //tamanho da senha 25% da dificuldade
        (upperCaseEl.checked ? 15 : 0) +    //maiúsculas 15% da dificuldade
        (numberEl.checked ? 25 : 0) +       //números 25% da dificuldade
        (symbolEl.checked ? 35 : 0)         //símbolos da senha 35% da dificuldade
    )//round arredonda valores
    indicatorBarEl.style.width = `${percent}%`

    if (percent > 69) {
        //strong
        indicatorBarEl.classList.remove('media')
        indicatorBarEl.classList.remove('weak')
        indicatorBarEl.classList.add('strong')
    } else if(percent >50) {
        //media
        indicatorBarEl.classList.remove('strong')
        indicatorBarEl.classList.remove('weak')
        indicatorBarEl.classList.add('media')
    } else {
        //weak
        indicatorBarEl.classList.remove('strong')
        indicatorBarEl.classList.remove('media')
        indicatorBarEl.classList.add('weak')
    }

    if(percent >= 100){
        indicatorBarEl.classList.add('completed')
    } else {
        indicatorBarEl.classList.remove('completed')
    }
    
}

function copy(){
    navigator.clipboard.writeText(finalPassword)//copiar conteúdo do inputEl, API padrão atualmente
}
