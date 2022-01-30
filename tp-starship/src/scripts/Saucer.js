import Mobile from './mobile';
import SRC from '../assets/images/flyingSaucer-petit.png';


export default class Saucer extends Mobile{

    constructor(x,y,dpX=-3,dpY=0,src=SRC){
        super(x,y,dpX,dpY,src);
        this.isFalling=false;
    }

    /**
    * move the Saucer in the canvas given in parameter but if the saucer is out of the canvas he is deleted from the game
    * @param {canvas} canvas
    */
    move(canvas){

        if ((this.x+this.dpX<0)){
            this.src=null;

        }
        else if ((this.y+this.dpY)>(canvas.height - this.image.height)){
            this.src=null;
        }
        this.x = this.x + this.dpX;
        this.y = this.y + this.dpY;
    }
}
