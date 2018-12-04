'use strict'

//ゲームに使用する変数の定義

//タイプ対象のワード
var currentWord ='apple';

//敵の体力を定義
var enemy_hp = 100;

//敵の現在の体力を定義
var current_enemy_hp = enemy_hp;

//プレイヤーの攻撃力を定義
var player_attack = 20;

//タイプ対象のワードの配列
var words = [
  'strong',
  'github',
  'systemctl',
  'javascript',
  'docker',
  'railsserver',
  'dockercompose'
  ];

//タイプ対象が何文字目か
var currentLocation;

//タイプした文字数
var score;

//タイプミスした回数
var miss;

//getElementByIdを用いてhtmlの要素を取得
var target = document.querySelector('#target');
var scoreLabel = document.querySelector('#score');
var missLabel = document.querySelector('#miss');
var progressBar = document.querySelector('#hp_text');

//ゲームが始まっているかの真偽値を格納する変数
var isStarted;

function init() {
	currentWord = 'Click Here';

    //ゲームのスタート時に変数を初期化
    currentLocation = 0;
    score = 0;
    miss = 0;

    //取得したhtmlの要素に対してタイプ対象のワードを出力します
    target.innerHTML = currentWord;

    //取得したhtmlの要素に対してタイプしたワード数を出力します
    scoreLabel.innerHTML = score;

    //取得したhtmlの要素に対してタイプミスしたワード数を出力します
    missLabel.innerHTML = miss;

    

    isStarted = false;
    }

    init();

//配列の中から現在のタイプ対象を選択
function setTarget() {
	//wordの配列数からランダムな数字を取得して乱数を生成しcurrentWordに格納
	currentWord = words[Math.floor(Math.random() * words.length)];
	target.innerHTML = currentWord;

	//currentLocationを0に初期化
	currentLocation = 0;
}

//クリックした時にファンクションが起動
window.addEventListener('click', function() {

	//ゲーム開始の真偽値がfalseの場合関数を実行する
	if (!isStarted){

		//ゲーム開始の真偽値をtrueに変換する
        isStarted = true;

        //setTargetの関数を呼び出す
        setTarget();
    }

});

//敵に攻撃するときのダメージ計算関数
function attack_enemy() {
	if (current_enemy_hp >= enemy_hp){
        current_enemy_hp = enemy_hp - player_attack;
    } else {
        current_enemy_hp -= player_attack;
    }

    progressBar.value = current_enemy_hp / enemy_hp;
}

//プレイヤーが入力したキーを取得します
window.addEventListener('keyup', function(e) {

    //isStartedの真偽値がfalseだった場合、returnする
	if (!isStarted) {
		return;
	}
	// e.keyCodeでプレイヤーのキーを取得可能
	// console.log(String.fromCharCode(e.keyCode));

	// 取得した文字列が現在のワードを大文字にした文字列と同じであれば、_の変数を増算する
	if (String.fromCharCode(e.keyCode) === 
	currentWord[currentLocation].toUpperCase()) {

		//取得した関数が合っていた場合、現在タイピングしている文字列の位置を一つズラす
		currentLocation++;

        //文字を隠す変数を定義
	    var placeholder ='';

        //現在タイピング中の文字数分だけ「_」で文字を変換する
	    for (var i = 0; i < currentLocation; i++) {
	    	placeholder += '_';
	    }

        //「_」に変換された文字と現在の文字列を連結する
        target.innerHTML = placeholder + currentWord.substring(currentLocation);

        //連結した場合、スコアの値を増算する
		score++;

		//取得したhtml要素に対してスコアの値を出力する
	    scoreLabel.innerHTML = score;

	    //タイプ対象を打ち終えた場合、setTargetファンクションを行う
	    if (currentLocation === currentWord.length) {
            attack_enemy();
	    	setTarget();
	    }

	} else {

		//取得したキーと現在タイピングしている値が違う場合にmissの変数を増算する
		miss++;

		//取得したhtml要素に対してmissの値を出力する
		missLabel.innerHTML = miss;
	}
}



);

