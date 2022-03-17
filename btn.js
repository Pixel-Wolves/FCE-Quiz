class Btn{
    constructor(index,x,y){
        this.index = index;
        this.sprite = createSprite(x,y);
        this.image = loadImage("images/button.png");
        this.sprite.addImage(this.image);
        this.sprite.scale = 2;
        this.sprite.mouseActive=true;
    }

    display(){
        if(this.sprite.mouseIsPressed == true && this.index == rightOption){
            score += 1;
            randomQuestion()
        }
        else if(this.sprite.mouseIsPressed == true && this.index != rightOption){
            score = 0;
        }
    }
}