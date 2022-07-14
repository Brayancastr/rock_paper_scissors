function aiPlay () {
  const randnom_number = Math.floor(Math.random() * 3)+1;
    switch (randnom_number){
      case 1:
            ai = "ROCK";
            document.getElementById('rock2').style.display='block'
            document.getElementById('paper2').style.display='none';
            document.getElementById('scissors2').style.display='none';
            return ai 
            break
        case 2:
            ai = "PAPER";
            document.getElementById('paper2').style.display='block';
            document.getElementById('rock2').style.display='none';
            document.getElementById('scissors2').style.display='none';
            return ai 
            break
        case 3:
            ai = "SCISSORS";
            document.getElementById('scissors2').style.display='block';
            document.getElementById('paper2').style.display='none';
            document.getElementById('rock2').style.display='none';
            return ai 
            break
    }
};

document.querySelector('#button').addEventListener('click', function(){ 
  document.getElementById('rock').style.display='block';
  document.getElementById('paper').style.display='none';
  document.getElementById('scissors').style.display='none';
  console.log(aiPlay())
 if (aiPlay() == "ROCK" ){
  var audio = new Audio('tied.mp3');
  audio.play();
}
else if (aiPlay() == "PAPER" ){
  var audio = new Audio('lost.mp3'); 
  audio.play();
}
else if (aiPlay()== "SCISSORS" ){
  var audio = new Audio('win.mp3');
  audio.play();
}
});

document.querySelector('#button1').addEventListener('click', function(){ 
  document.getElementById('paper').style.display='block';
  document.getElementById('rock').style.display='none';
  document.getElementById('scissors').style.display='none';
  if (aiPlay() == "PAPER" ){
    var audio = new Audio('tied.mp3');
    audio.play();
  }
  else if (aiPlay() == "SCISSORS" ){
    var audio = new Audio('lost.mp3');
    audio.play();
  }
  else if (aiPlay()== "ROCK" ){
    var audio = new Audio('win.mp3');
    audio.play();
  }
});
document.querySelector('#button2').addEventListener('click', function(){ 
  document.getElementById('scissors').style.display='block';
  document.getElementById('paper').style.display='none';
  document.getElementById('rock').style.display='none';
  if (aiPlay() == "SCISSORS" ){
    var audio = new Audio('tied.mp3');
    audio.play();
  }
  else if (aiPlay() == "ROCK" ){
    var audio = new Audio('lost.mp3');
    audio.play();
  }
  else if (aiPlay()== "PAPER" ){
    var audio = new Audio('win.mp3');
    audio.play();
  }
});
