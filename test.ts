function saysHello(person)
{
    return "hello, " + person;
}

var Jean="Jean";
// On ajoute dans notre la page HTML un message 
// pour affiche "Hello, Jean". 
document.body.innerHTML=saysHello(Jean);