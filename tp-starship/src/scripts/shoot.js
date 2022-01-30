import Mobile from './mobile';
import SRC from '../assets/images/tir.png';

export default class Shoot extends Mobile{

  constructor(x,y,dpX=8,dpY=0,src=SRC){
      super(x,y,dpX,dpY,src);
  }

  /**
  * @param {Mobile} mobile Object of class Mobile
  * @return {boolean} if we have a collision between the shoot and the mobile given in parameter
  */
  collisionWith(mobile){
    const A1=[mobile.x,mobile.y];
    const A2=[this.x,this.y];
    const B1=[mobile.x+mobile.image.width,mobile.y+mobile.image.height];
    const B2=[this.x+this.image.width,this.y+this.image.height];
    const P1=[Math.max(A1[0],A2[0]),Math.max(A1[1],A2[1])];
    const P2=[Math.min(B1[0],B2[0]),Math.min(B1[1],B2[1])];
    if(P1[0]<P2[0] && P1[1]<P2[1] && mobile.isFalling !== true){
      this.src=null;
      return true;
    }
    return false;
  }

  /**
  * check for every saucer in the list given in parameter if a collision is present.
  * @param {Array} saucers list of mobile
  */
  collision(saucers){
    saucers.forEach(saucer => {
      if (this.collisionWith(saucer)){
        saucer.isFalling=true;
        saucer.dpX=0;
        saucer.dpY=3;
      }
    });
  }

  /**
  * Move the shoot in the canvas given in parameter
  * @param {canvas} canvas
  */
  move(canvas){

    this.x = this.x + this.dpX;
    this.y = this.y + this.dpY;
  }

}
