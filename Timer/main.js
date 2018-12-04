'use strict'

//getElementByIdを用いてhtmlから要素を取得
var timer = document.getElementById('timer');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var reset = document.getElementById('reset');
var start = document.getElementById('start');

//タイマーがスタートした時間を取得
var startTime;

//タイマーがスタートしてから経過した時間を取得
var timeLeft;

//カウントダウンする全体の秒数
var timeToCountDown = 4 * 1000;

//clearTimeoutに渡すための引数を定義
var timerId;

//tはミリ秒単位での残り時間表示
function updateTimer(t) {
	var d = new Date(t);
	var m = d.getMinutes();
	var s = d.getSeconds();
	var m = d.getMinutes();
	var ms = d.getMilliseconds();

	//分に対して0を連結させ、末尾2桁を取得する
    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);


	//htmlのtimer要素を取得しtextContentメソッドで出力する
	timer.textContent = m + ':' + s + '.' + ms;
}

//setTimeoutで第二引数に設定したミリ秒後に関数を実行する。ここでは10/1000秒ごとに結果を表示するように動く
function countDown() {
	timerId = setTimeout(function() {
      //カウントダウンする全体の秒数から経過した時間を減算することで残り時間を計算する
      timeLeft = timeToCountDown - (Date.now() - startTime);

      //残り時間が0より小さくなった時の処理
      if (timeLeft < 0) {
      	clearTimeout(timerId);
      	timeLeft = 0;
      	timeToCountDown = 0;
      	updateTimer(timeLeft);
      	//下のcountDownメソッドが呼ばれないように戻す
      	return;
      }

      //引数に残り時間を指定しupdateTimerに渡す
      updateTimer(timeLeft);
      countDown();

	}, 10);
}

//上で定義したstartに対してイベントを追加
start.addEventListener('click', function() {

    //クリックした時間を取得する
	startTime = Date.now();

	countDown();
})


