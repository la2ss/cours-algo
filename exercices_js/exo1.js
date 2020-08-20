//exo 1 decouverte du langage exo 1

let temperature =Number (prompt("entrez une temperature"));
if (temperature<=0)
{
    console.log("l etat de l eau est glace") ;
}

else if(temperature>0 && temperature<=40)
{
    console.log("l etat de l eau est liquide") ;
}

else(temperature>40)
{
    console.log("l etat de l eau est gazeux") ;
}
