var testbtn = document.getElementById("test-openlog");

testbtn.addEventListener("click",()=>{
    var logMenu = document.getElementById("BattleLog");
    logMenu.style.opacity = 0;
    logMenu.style.cssText = "transform:translateY(200%)";
    
    var enemyshutter = document.getElementById("shutter");
    enemyshutter.style.opacity = 0;
    enemyshutter.style.cssText = "transform:translateY(-100%)";
}
);

//---------------------------------------------------------------------------------------

var GoAttackList = document.getElementById("GoAttackList");
var GoItemList = document.getElementById("GoItemList");
var ChangeDistance = document.getElementById("ChangeDistance");

var attack_list = document.getElementById("attack-list");
var item_list = document.getElementById("item-list");
var distance_action = document.getElementById("distance-action");

var EscapeFromBattle = document.getElementById("EscapeFromBattle");

function getAction(){
     
    attack_list.style.cssText = "transform: translateX(0%)";
    item_list.style.cssText = "transform: translateY(-100%);";
    distance_action.style.cssText = "transform: translateX(100%)";

}
function getItem(){
    
    attack_list.style.cssText = "transform: translateX(-100%)";
    item_list.style.cssText = "transform: translateY(0%);";
    distance_action.style.cssText = "transform: translateX(100%)";

}
function getDistance(){
    attack_list.style.cssText = "transform: translateX(-100%)";
    item_list.style.cssText = "transform: translateY(-100%);";
    distance_action.style.cssText = "transform: translateX(0%)";
}

GoAttackList.addEventListener("click",getAction);
GoItemList.addEventListener("click",getItem);
ChangeDistance.addEventListener("click",getDistance);

//---------------------------------------------------------------------------------------