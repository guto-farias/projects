function generatePassword(){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?!@&*,.()[]"

    let password = ""

    for(let i = 0; i < 8; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber, randomNumber + 1) //recorte de uma string
    }

    const inputEl = document.getElementById("password")
    inputEl.value = password
    console.log(password)

}

