
// importation de la classe Game.js
import Game from './game';
import Starship from './StarShip'


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {

    const canvas =  document.getElementById("stars");
    const game = new Game(canvas);

    window.addEventListener('load', ()=> game.animation());
    window.addEventListener('keydown', game.keyDownActionHandler.bind(game));
    window.addEventListener('keyup', game.keyUpActionHandler.bind(game));
    document.getElementById("nouvelleSoucoupe").addEventListener('click', ()=>game.addSaucer());
    document.getElementById("flotteSoucoupes").addEventListener('click', ()=>game.startAndStop());
    window.addEventListener('keydown', game.keyDownActionHandlerSpace.bind(game));


}

window.addEventListener("DOMContentLoaded",init());

//
console.log('le bundle a été généré');
