import Starship from './StarShip';
import Saucer from './Saucer';
import Shoot from './shoot';
const alea =  (b) => {
    const max = Math.floor(b);
    return Math.floor(Math.random() *max);
  }

export default class Game {

    /**
    * construct the game with the canvas given in parameter
    * An array of saucer (saucers) and shoot (shoots) is initialized, a StarShip is initialized too (star)
    * @param {canvas} canvas
    */
    constructor(canvas){
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.saucers = new Array();
        this.star = new Starship(40,Math.floor(this.canvas.height/2));
        this.score = 0;
        this.shoots = new Array();
        this.addSaucer =this.addSaucer.bind(this);
        this.interval = null;
    }

    /*
    * add a saucer in saucers
    */
    addSaucer(){
        const x = this.canvas.width;
        const y = alea(this.canvas.height-40);
        this.saucers.push(new Saucer(x, y));
      }

    /*
    * add a shoot in shoots
    */
    addShoot(){
      this.shoots.push(new Shoot(this.star.x+this.star.image.width,this.star.y+this.star.image.height/3));
    }

    /*
    * this function lauch the animation of the game
    * at the begin we clear the canvas and after we move and draw the starship same for shoots and saucers
    * at the end we filter saucers and shoots which are out of the canvas or if the shoot hit a saucer
    * and we update the score board.
    */
    animation(){

        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);

        this.star.move(this.canvas);
        this.star.draw(this.context);
        this.saucers.forEach(saucer=>{
            saucer.move(this.canvas);
            saucer.draw(this.context);
            if(saucer.x<0){
                this.loose();
            }
        });
        this.shoots.forEach((shoot) => {
            shoot.move(this.canvas);
            shoot.draw(this.context);
            shoot.collision(this.saucers);
            if(shoot.src === null){
                this.scored();
            }


        });
        this.shoots = this.shoots.filter(shoot => shoot.x < this.canvas.width && shoot.src !==null);
        this.saucers = this.saucers.filter(saucer => saucer.src !== null);
        document.getElementById('score').textContent = this.score;
        document.activeElement.blur();
        window.requestAnimationFrame(this.animation.bind(this));


    }

    /**
    * this function take an event in parameter and apply another function
    * we have to press ArrowDown or ArrowUp
    */
    keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowUp":
            case "Up":
                this.star.moveUp();
                break;
            case "ArrowDown":
            case "Down":
                this.star.moveDown();
                break;
            default: return;
        }
        event.preventDefault();
    }

    /**
    * this function take an event in parameter and apply another function
    * we have to release ArrowDown or ArrowUp
    */
    keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowDown":
            case "Down":
            case "ArrowUp":
            case "Up":
                this.star.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }

    /**
    * this function take an event in parameter and apply another function
    * we must press Space to activate it
    */
    keyDownActionHandlerSpace(event) {
        switch (event.key) {
            //case event.keyCode==32:
            case " ":
                this.addShoot();
                break;
            default: return;
        }
        event.preventDefault();
    }

    /**
    * up by 200 the score board
    */
    scored(){
        this.score = this.score +200;
    }

    /**
    * losing 1000 point
    */
    loose(){
        this.score = this.score -1000;
    }

    /**
    * this function can draw a saucer if we draw a 0 with the function alea
    */
    randomSaucer(){
      const rand = alea(2);
      if(rand===0){
        this.addSaucer();
      }
    }

    /**
    * Start the interval if it isn't defined else stop it
    */
    startAndStop(){
      if(this.interval !== null){
        window.clearInterval(this.interval);
        this.interval = null;
      }
      else{
        this.interval=setInterval(() => this.randomSaucer(), 750);
      }
    }





}
