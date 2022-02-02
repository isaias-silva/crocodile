const generate=function(name,rules){
    let menu=`✪࿇_____${name}_____࿇✪\n|`
   
    for(let i in rules){
        menu+=`\n|-✦ ${rules[i]}\n|`
    }
    return menu
}

module.exports={genemenu:generate}