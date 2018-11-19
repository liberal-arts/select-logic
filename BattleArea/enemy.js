//このコードはjavascriptにおける変数の定義を厳しめにするコードです
'use strict';

//HPを定義します
var enemy_hp = 100;

//回復値を定義します
var recover;

//攻撃力を定義します
var power;

//getElementVyIdを用いてhtml上の要素を取得します
var attack = document.getElementById('button_a');

//オクトキャットの行動パターンを定義します

function octocatAction () {

  //変数numに0~2までの変数を格納します
  var num = Math.floor(Math.random() * 2)

  if (num===0) {

    //htmlからid="log"の要素を取得します
    var log = document.querySelector("#log");

    //上で定義したlog要素に対してオクトキャットの行動を出力します
    log.innerHTML += 'オクトキャットは様子を見ている<br>';

  } else if (num===1) {
        
        //htmlからid="log"の要素を取得します
    var log = document.querySelector("#log");

    //上で定義したlog要素に対してオクトキャットの行動を出力します
    log.innerHTML += 'オクトキャットは休んでいる';
　　　　　
        //回復値に0~30までの数字を代入します
        recover = Math.floor(Math.random() * 30);

        //上で定義したlog要素に対して攻撃した与えたダメージを出力します
        log.innerHTML += 'オクトキャットは'+recover+'回復<br>';

        //敵の体力から回復値を足します
        enemy_hp = enemy_hp + recover;

  } else {

    //htmlからid="log"の要素を取得します
    var log = document.querySelector("#log");

    //上で定義したlog要素に対してオクトキャットの行動を出力します
    log.innerHTML += 'オクトキャットの攻撃<br>';
  }
}

//敵の体力を減らすメソッド
function dicreaseEnemyHp () {

	//相手のHPが0以上であることを確認します
	if (enemy_hp > 0) {

		//htmlからid="log"の要素を取得します
       var log = document.querySelector("#log");

        //自分の攻撃力に0~20までの数字を代入します
       power = Math.floor(Math.random() * 20);

        //上で定義したlog要素に対して攻撃した与えたダメージを出力します
       log.innerHTML += 'ドッカーの攻撃<br>オクトキャットに'+power+'のダメージ<br>';

        //敵の体力から与えたダメージを減算します
       enemy_hp = enemy_hp - power;

        //攻撃時にオクトキャットのHPが0より小さいかを確認します
       if (enemy_hp <= 0) {

        //htmlからid="log"の要素を取得します
        var log = document.querySelector("#log");

        //上で定義したlog要素に対して結果を出力します
        log.innerHTML += 'オクトキャットを撃破しました<br>';
       } else {
        octocatAction ();
       }
       
	} 

        //logの表示を一番最後に照準を合わせます
    var logTmp = document.getElementById("log");
    logTmp.scrollTop = logTmp.scrollHeight;

}

//上で定義されたhtml上の要素がクリックされた時敵の体力を減らすメソッドを呼び出します
attack.addEventListener('click', dicreaseEnemyHp);
