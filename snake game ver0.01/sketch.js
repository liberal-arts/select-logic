function setup() {
    
    //キャンバスの幅をブロックの幅を
    createCanvas(z*side,z*length);
    background(100);
    
    for(let f=0; f<=24; f++){
        
        randamGrid();
        
        if(x20 === 0 && y20 === 0){
            console.log("ブロック座標("+x20+","+y20+")   ブロックの位置が初期値だったのでリセット")
            randamGrid();
        }
        
        if(badbox.length>0){
            
            for(let i=0; i<badbox.length; i++){
                
                if(x20 === badbox[i].x && y20 === badbox[i].y){
                    console.log("ダブる前のブロック座標("+x20+","+y20+")   "+(i+1)+"個目のブロックとダブりました");
                    badbox.splice(f-1,1);
                    randamGrid();
                }
                
            }
            
        }
        console.log(f+1+"個目のブロック座標:"+x20+","+y20);
        let b = new BadBox(x20,y20);
        append(badbox,b);
        console.log("---------------------------")
    }
    
    console.log(badbox);
    
/*
            
横幅からブロックの幅を引いた数からランダムに数字を取得し、
取得した数字の小数点をfloorで切り捨て、roundで四捨五入する
            
そしてその数字をブロックの幅で割り、小数点を切り捨てた後
数字の1を足し、ブロックの幅を掛ける事で
            
グリッドの座標に適した数字をランダムに作ることができる

*/
function randamGrid(){
    x = round(floor(random(-20,width-z)));
    y = round(floor(random(-20,height-z)));
    x20 = (floor(x/z)+1)*z;
    y20 = (floor(y/z)+1)*z;
    return x20,y20;
}
}

let badbox = [];

let z =20;
let length =15;
let side =15;

var x;
var y;
var x20;
var y20;

let rectX =0;
let rectY =0;

let eatPoint=0;

function draw(){
    
    //灰色の背景を描写
    background(100);
    
    //枠線を白色に
    stroke(255);
    
    //枠線の幅を0.5に
    strokeWeight(0.5);
    
    //グリッド線の描写　上から 縦線,横線
    for(let i=0; i<=width; i+=z){
        line(i,0,i,height);        
    }
    for(let i=0; i<=height; i+=z){
        line(0,i,width,i);        
    }
    
    //黒ブロックの描写
    for(let i=0; i<=badbox.length-1; i++){
        
        //黒ブロックを全て処理する
        badbox[i].show();
        
        //黒ブロックと自分のブロックが重なった時の処理
        if(rectX === badbox[i].x && rectY === badbox[i].y){
            
            //重なったブロックを削除する
            badbox.splice(i,1);
            
            //得点を追加する
            eatPoint++;
            console.log("eatPoint is "+eatPoint);
            console.log(badbox);
            //新しく黒ブロックを生成する
            
//            randamGrid();
//            
//            if(x20 === rectX && y20 ===rectY){
//                randamGrid();    
//            }
//            
//            let b = new BadBox(x20,y20);
//            append(badbox,b); 

            //if文で追加された分のループ処理を抜ける為のbreak
            break;
        }
        else{
            //if文が来るまで処理を続ける為のcontinue
            continue;
        }
    }
    
    //右から左、上から下へ。座標を反対側にするif文  
    if(rectX<0){
        rectX = width-z;
    }
    if(rectX>width-z){
        rectX = 0;
    }
    if(rectY<0){
        rectY = height-z;
    }
    if(rectY>height-z){
        rectY = 0;
    }
    
    //自分のブロックの描写
    fill(255);
    rect(rectX,rectY,z,z);

    function randamGrid(){
        x = round(floor(random(-20,width-z)));
        y = round(floor(random(-20,height-z)));
        x20 = (floor(x/z)+1)*z;
        y20 = (floor(y/z)+1)*z;
        return x20,y20;
    }
    
}

//キーボードを押した時の処理
function keyPressed(){
    
    //上から 上 下 左 右 キーを押した時の処理を設定しています
    
    if(keyCode === UP_ARROW){
        rectY -=z;
    }
    if(keyCode === DOWN_ARROW){
        rectY +=z;
    }
    if(keyCode === LEFT_ARROW){
        rectX -=z;
    }
    if(keyCode === RIGHT_ARROW){
        rectX +=z;
    }
}

//黒ブロックのクラスを作成します
class BadBox{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    
    //黒色の正方形を描写する
    show(){
        fill(10);
        rect(this.x,this.y,z,z);
    }
}


