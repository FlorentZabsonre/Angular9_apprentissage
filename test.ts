function saysHello(person)
{
    return "hello, " + person;
}

var Jean="Jean";
// On ajoute dans notre la page HTML un message 
// pour affiche "Hello, Jean". 
document.body.innerHTML=saysHello(Jean);

//var lifePoint : number =100;
//lifePoint= 50 ;

class Heros{

    id : number;
    name: string;
   planet : string;
}

function createHeros(lifePoint: number, name: string, planet?: string): Heros
{
    var heros= new heros();
    heros.lifePoint = lifePoint;
    heros.name= name;
    if(planet) heros.planet = planet;
    return heros;
}

