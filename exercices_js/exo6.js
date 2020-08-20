


    let annee =Number(prompt("entrez une annee"));

console.log(annee%4);

if (annee ==0 && (annee/100 !== 0 || annee/400 !== 0 ))
{
    alert(annee + " est une annee bissexile") ;
}
else
    {
        alert (annee + " est une annee non bissexile");
}