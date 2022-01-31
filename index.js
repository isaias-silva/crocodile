const { default: axios } = require('axios')
const readline = require('readline-sync')
const ascii = require('./src/ascii')
const opn=require("opn")
console.log(ascii.logo())

async function main() {
 
    console.log(ascii.menu())
    let comand = readline.question('comando: ')
    switch (comand) {
        case '1':
                let number=readline.question("numero: ")
              await opn(`https://wa.me/${number}`)
                console.clear()
                main()
            

            break;
        case '0':
            console.log("bye")
    }
}

main()