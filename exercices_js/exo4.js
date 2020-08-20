
let poids =Number(prompt("entrez votre poids en kg"));

let taille = Number(prompt("entrez votre taille en m"));

console.log(poids);
console.log(taille);

let imc = (poids/(taille*taille));

if (imc<18.5)
{
    console.log(imc);
    alert("insufisance ponderale") ;
}

else if(imc>=18.5 && imc<=25 )
{
    console.log(imc);
    alert("poids normal") ;
}
else if (imc>=25 && imc<=30 )
{
    console.log(imc);
    alert("surcharge ponderale") ;
}
else{
    console.log(imc);
    alert("obesite") ;
}