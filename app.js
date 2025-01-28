


let char = '12345678910abcdefghijklmnopuvwxyzABCDEFIJKLMNOPUVWXYZ!@#$%&*()'
let randomPassword = ''

function generatePassword() {
    
    let userInput = +prompt("Enter Lenght of Password to Generate")
    randomPassword = ''
    for (let i = 0; i < userInput; i++) {
        
    let randomCharacter = Math.round(Math.random() * char.length)
    randomPassword += char[randomCharacter]

}
document.write(`<h2> ${randomPassword} </h2>`);

}




