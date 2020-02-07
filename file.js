function Bird(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getBirdElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }

}

let  bird = new Bird("chim1.jpg", 20, 30, 200);

function start(){
    if(bird.left < window.innerWidth - bird.size){
        bird.moveRight();
    }
    document.getElementById('game').innerHTML = bird.getBirdElement();
    setTimeout(start, 500)
}

start();