var comColors = ['yellow','red','green','black']
var otoColor = [];
var selectColor = [];
var level = 0;
var stopp = false

 
$(document).keypress(function(){

    if(!stopp){
        StartCod()
        stopp = true;
    }
})



$('.btn').click(function(){
     const nameOfThis = $(this).attr("id")
     $('#' + nameOfThis).fadeOut(100).fadeIn(100)
      selectColor.push(nameOfThis)
    console.log(nameOfThis)
      CheckAll(selectColor.length -1)
      design(nameOfThis)
      audio(nameOfThis)
})



function CheckAll(get){
    if(otoColor[get] === selectColor[get]){
        if(selectColor.length === otoColor.length){
            setTimeout(() => {
                StartCod()
            }, 1000);
        }
    }else{
        $('.text').text('Game Over, Press Any Key to Restart')
        audio('wrong')
        $('body').addClass('gameover')

        setTimeout(() => {
            $('body').removeClass('gameover')
        }, 200);
        gameOver()
    }
}




function StartCod(){
    selectColor =[];
    level++;
    $('.text').text('Level ' + level)
    const round = Math.floor(Math.random() * 4)
    const roundColor = comColors[round]
    otoColor.push(roundColor)
    $('#' + roundColor).fadeOut(100).fadeIn(100)
    console.log(roundColor)
    design(roundColor)
    audio(roundColor)
}

function design(getCss){
    $('.' + getCss).addClass('randomCss')
    setTimeout(() => {
        $('.' + getCss).removeClass('randomCss')
    }, 200);
}

function audio(getSound){
    var sound = new Audio('sounds/' + getSound +'.mp3')
    sound.play()
}


function gameOver(){
    level =0;
    otoColor = [];
    stopp = false;
}