let card = document.querySelectorAll(".card-container .card");
let card2 = document.querySelectorAll(".card-container2 .card");
let next = document.getElementById("next");
let prev = document.getElementById("prev"); 
let next2 = document.getElementById("next2");
let prev2 = document.getElementById("prev2"); 

let active = 3;
function loadShow() {
  let stt = 0;

  card[active].style.transform = `none`;
  card[active].style.zIndex = 1;
  card[active].style.filter = `none`;
  card[active].style.opacity = 1

  for(let i = active + 1; i < card.length; i++){
    stt++;
    card[i].style.transform = `translateX(${120*stt}px)
                                scale(${1 - 0.85*stt})
                                perspective(16px)
                                rotateY(-1deg)`; 

    card[i].style.zIndex = -stt;
    card[i].style.filter = `blur(8px)`;
    card[i].style.opacity = stt > 2 ? 0 : 1;
  }

  stt = 0;
  for(let i = active -1; i >=0 ; i--){
    stt++;
    card[i].style.transform = `translateX(${-120*stt}px)
    scale(${1 - 0.85*stt})
    perspective(16px)
    rotateY(-1deg)`; 

    card[i].style.zIndex = -stt;
    card[i].style.filter = `blur(8px)`;
    card[i].style.opacity = stt > 2 ? 0 : 1; 

  }
}
loadShow();

function loadShow2() {
  let stt2 = 0;
  card2[active].style.transform = `none`;
  card2[active].style.zIndex = 1;
  card2[active].style.filter = `none`;
  card2[active].style.opacity = 1;

  for(let i = active + 1; i < card2.length; i++){
    stt2++;
    card2[i].style.transform = `translateX(${120*stt2}px)
    scale(${1 - 0.85*stt2})
    perspective(16px)
    rotateY(-1deg)`; 

    card2[i].style.zIndex = -stt2;
    card2[i].style.filter = `blur(8px)`;
    card2[i].style.opacity = stt2 > 2 ? 0 : 1;
  }

  stt2 = 0;
  for(let i = active -1; i >=0 ; i--){
    stt2++;
    card2[i].style.transform = `translateX(${-120*stt2}px)
    scale(${1 - 0.85*stt2})
    perspective(16px)
    rotateY(-1deg)`; 

    card2[i].style.zIndex = -stt2;
    card2[i].style.filter = `blur(8px)`;
    card2[i].style.opacity = stt2 > 2 ? 0 : 1; 

  }
}
loadShow2();

next.onclick = function(){
active = active + 1 < card.length ? active + 1 : active ;
loadShow(); 
}

prev.onclick = function(){
active = active - 1 >= 0 ? active - 1 : active ;
loadShow(); 
}

next2.onclick = function(){
  active = active + 1 < card2.length ? active + 1 : active ;
  loadShow2(); 
}

prev2.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active ;
    loadShow2(); 
}