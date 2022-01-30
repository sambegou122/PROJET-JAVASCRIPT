



export default class Mobile {

    /**
    * construct a Mobile
    * @param {int} x  position X
    * @param  {int} y position Y
    * @param {int} dpX movement speed in X axis (by default 0)
    * @param {int} dpY movement speed in Y axis (by default 0)
    * @param {string} src which is the path to the image
    *
    */
    constructor(x,y,dpX=0,dpY=0,src){
        this.x= x;
        this.y = y;
        this.dpX = dpX;
        this.dpY = dpY;
        this.src = src;
        this.image = this.CreateImage(this.src);
        this.draw = this.draw.bind(this);
    }

    /**
    * draw Mobile's image in the context given in parameter
    * @param {context} context
    */
    draw(context){
        context.drawImage(this.image,this.x,this.y);
    }

    /**
    * Move the Mobile's position
    */
    move(){
        this.x = this.x + this.dpX;
        this.y = this.y + this.dpY;
    }


    /**
    * create Mobile's image
    * @param {string} src source path of the image
    * @return  {Image} 
    */
    CreateImage(src){
        const mobile = new Image();
        mobile.src = src;
        return mobile;
    }



}
