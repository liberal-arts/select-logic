//このコードはjavascriptにおける変数の定義を厳しめにするコードです
'use strict';

//getElementVyIdを用いてhtml上の要素を取得します
var attack = document.getElementById('button_a');
var reback = document.getElementById('button_b');
var mychara = document.getElementById('mychara');

var changeTransform = (x) => {
	return () => mychara.style.cssText = "transform:  translateX("+x+"px);";
}

var attackEnemy = changeTransform(100);
var returnPosition = changeTransform(0);

//上で定義したhtmlの要素に対してイベントを紐づけます
//第二引数には必ず関数が指定される必要がある
attack.addEventListener('click', ()=>{
	attackEnemy();
	setTimeout(returnPosition, 100);
});
reback.addEventListener('click', returnPosition);