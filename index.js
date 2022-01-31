const { default: axios } = require('axios')
const readline = require('readline-sync')
const ascii = require('./src/ascii')
const opn=require("opn")
console.log(ascii.logo())
console.log(ascii.menu())
async function main() {
    let comand = readline.question('comando: ')
    switch (comand) {
        case '1':
                let number=readline.question("numero")
                opn(`https://wa.me/${number}`)
      
                main()
            

            break;
        case '0':
            console.log("bye")
    }
}

main()