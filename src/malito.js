const opn=require('opn')
const desactive= async function(n){

opn(`mailto:support@whatsapp.com?subject=perdido/roubado&body=Por favor, desative minha conta: ${n}
   -- Atenciosamente, Equipe Webmaker Brasil ®`)

}


module.exports={desativar:desactive}