function saysHello(person) {
    return "hello, " + person;
}
var Jean = "Jean";
// On ajoute dans notre la page HTML un message 
// pour affiche "Hello, Jean". 
document.body.innerHTML = saysHello(Jean);
//var lifePoint : number =100;
//lifePoint= 50 ;
var Heros = /** @class */ (function () {
    function Heros() {
    }
    return Heros;
}());
function createHeros(lifePoint, name, planet) {
    var heros = new heros();
    heros.lifePoint = lifePoint;
    heros.name = name;
    if (planet)
        heros.planet = planet;
    return heros;
}
