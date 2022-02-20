const logo=function(){
    return `
  
    \u001b[32m__________  ____  __________  ____  ______    ______
    / ____/ __ \/ __ \/ ____/ __ \/ __ \/  _/ /   / ____/
   / /   / /_/ / / / / /   / / / / / / // // /   / __/   
  / /___/ _, _/ /_/ / /___/ /_/ / /_/ // // /___/ /___   
  \____/_/ |_|\____/\____/\____/_____/___/_____/_____/

  \u001b[31m ~by zack black
    \u001b[0m
    `
}
const menu=function(){
  return`  \u001b[32m
_______whatsapp tools_________
|                            |
| [1]=>wa.me                 | 
| [2]=>gerador de menu       |
| [3]=>gerador de aviso      |
|____________________________|

\u001b[31m 
_____hacking tools_____
|                      |
| [4]=>Ddos            |
|                      |
|______________________|
\u001b[0m
  [9]=> criador
  [0]=>sair
  \u001b[0m`
}
const warking=(aviso)=>{
let avisoc=aviso.replace('.','\n')
  return `
  \u001b[31m
  @________________Aviso_______________@
  
  ${avisoc}
  
  
  ~by Zack
       @_________________________@
  \u001b[0m
       `
}

module.exports={logo:logo,menu:menu,aviso:warking}