const opn=require('opn')
const desactive= async function(n){

opn(`mailto:support@whatsapp.com?subject=perdido/roubado&body=Por favor, desative minha conta: ${n}
   -- Atenciosamente, Equipe Webmaker Brasil ®`)

}
const desban= async function(n){

    opn(`mailto:support@whatsapp.com?subject=Urgente&body=Fui banido sem motivo nenhum e gostaria de ser desbanido com máxima urgência \n Numero: ${n}`)
    
    }


module.exports={desativar:desactive, desbanir:desban} 