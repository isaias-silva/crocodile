const { default: axios } = require('axios')
const readline = require('readline-sync')
const ascii = require('./src/ascii')
const opn=require("opn")
const gerator=require('./src/menugenerate')
const ownner={user:"+55 21984191603"}
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
        case '2':
            let title=readline.question("titulo: ")
            const rules=[]
            let key=1
            while(key==1){
                console.log("☢ adicionar nova regra? ☢\n[1]-sim\n[0]-não")
               key=readline.question("comando: ")
                if(key==1){
                    let rule=readline.question("escreva a regra: ")
                    rules.push(rule)
                }else{
                    key=0
                }
                
            }
            console.log(gerator.genemenu(title,rules))
            main()
            break;
        case '9':
                let me=ownner.user
                let strig='muito top seu bot man papo reto!'
              await opn(`https://api.whatsapp.com/send?phone=${me}&text=${strig}`)
                console.clear()
                main()
            

        break;
        
        case '0':
            console.log("bye")
    }
}

main()