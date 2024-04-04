var timer = 60;
var hitrn = 0;
var score = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}
function runTimer(){
    let timerInt = setInterval(function() {
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerInt)
            document.querySelector("#pbtm").innerHTML = "<h1>GAME OVER!</h1>";
        }
    }, 1000);
}

function makeBubble(){
    var clutter = "";
    for(var i = 0;i <= 167; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class = "bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = (Number(dets.target.textContent));
    if(clickedNum == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
runTimer();
makeBubble();
getNewHit();