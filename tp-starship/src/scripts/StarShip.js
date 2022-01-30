import Mobile from './mobile';
import MoveState from './MoveState'
import SRC from '../assets/images/vaisseau-ballon-petit.png';


export default class Starship extends Mobile{

  /**
  * construct a StarShip
  * @param {int} x  position X
  * @param  {int} y position Y
  * @param {int} dpX movement speed in X axis (by default 0)
  * @param {int} dpY movement speed in Y axis (by default 0)
  * @param {string} src which is the path to the image (by default it's SRC)
  * @param {MoveState} moving the moving direction of the StarShip
  */
    constructor(x,y,dpX=0,dpY=8,src=SRC, moving=MoveState.NONE){
        super(x,y,dpX,dpY,src);
        this.moving = moving;
    }


    /**
    * StarShip is moving up
    */
    moveUp() {
        this.moving = MoveState.UP;
    }

    /**
    * StarShip is moving down
    */
    moveDown() {
        this.moving = MoveState.DOWN;
    }

    /**
    * move the Starship in the canvas but can't be out of the canvas limit
    * @param {canvas} canvas
    */
    move(canvas) {              // déplace sans sortir des limites de *box*
      if (this.moving === MoveState.UP) {
        this.y = Math.max(0, this.y - this.dpY);

      }
      if (this.moving === MoveState.DOWN) {
        this.y = Math.min(canvas.height - this.image.height, this.y + this.dpY);

      }
    }

    /**
    * StarShip stop moving
    */
    stopMoving(){
      this.moving=MoveState.NONE;
    }


}
