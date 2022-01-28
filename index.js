const { default: axios } = require('axios')
const readline = require('readline-sync')
const ascii = require('./src/ascii')

console.log(ascii.logo())
console.log(ascii.menu())
function main() {
    let comand = readline.question('comando: ')
    switch (comand) {
        case '1':
            axios.get('http://gerador-nomes.herokuapp.com/nome/aleatorio').then((x) => {
                console.log(`${x.data[0]} ${x.data[1]}`)
                main()
            })

            break;
        case '0':
            console.log("bye")
    }
}

main()