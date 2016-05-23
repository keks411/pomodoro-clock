var max = document.getElementById('slength').innerText;
var blen = document.getElementById('blength').innerText;
var sec = 60;
var mtimer;






function incSL() {
  if (Number(max) > 99) {
 
} else {
   max = Number(max) + 1;
  document.getElementById("slength").innerText = max;
}
}

function decSL() {
if(Number(max) === 1) {
 
} else {
   max = Number(max) - 1;
  document.getElementById("slength").innerText = max;
}
}

function incBL() {
  if (Number(blen) > 9) {
 
} else {
   blen = Number(blen) + 1;
  document.getElementById("blength").innerText = blen;
}
}

function decBL() {
if(Number(blen) === 1) {
 
} else {
   blen = Number(blen) - 1;
  document.getElementById("blength").innerText = blen;
}
}

function freset() {
  document.getElementById("btnreset").style.visibility = "hidden";
  document.getElementById("btnstart").style.visibility = "visible";
  document.getElementById("btime").style.visibility = "hidden";
  document.getElementById("graph").style.visibility = "hidden";
  document.getElementById("slength").innerText = Number(25);
  document.getElementById("blength").innerText = Number(1);
  max = Number(25);
  blen = Number(1);
  document.getElementById("btime").innerText = "TIME";
  clearInterval(mtimer);
  sec = 60;
}

function startT() {
  document.getElementById("btnreset").style.visibility = "visible";
  document.getElementById("btnstart").style.visibility = "hidden";
  document.getElementById("btime").style.visibility = "visible";
  document.getElementById("btime").innerText = max + ":00";
  document.getElementById("btime").style.color = "green";
  max = max - 1;
  mtimer = setInterval(timer, 1000);
}

function timer() {
  sec = sec - 1;
  
  
  if(max === 0 && sec === 0) {
    document.getElementById("btime").innerText = "0:00";
    clearInterval(mtimer);
    sec = 60;
    mtimer = setInterval(fbreak, 1000);
    document.getElementById("graph").style.visibility = "visible";
    blen = blen - 1;
    fbreak();
  } else {
  if(sec < 10) {
    if(sec === 0) {
      document.getElementById("btime").innerText = max + ":00";
      sec = 60;
      max = max - 1;
    } else {
     document.getElementById("btime").innerText = max + ":0" + sec;
    }
  } else {
    document.getElementById("btime").innerText = max + ":" + sec;
  }
  }
    }

function fbreak() {
 sec = sec - 1;
  
  
  if(blen === 0 && sec === 0) {
    clearInterval(mtimer);
    document.getElementById("btime").innerText = "0:00";
    alert("You should get back to work!");
    freset();
  } else {
  if(sec < 10) {
    if(sec === 0) {
      document.getElementById("btime").innerText = blen + ":00";
      sec = 60;
      blen = blen - 1;
    } else {
     document.getElementById("btime").innerText = blen + ":0" + sec;
    }
  } else {
    document.getElementById("btime").innerText = blen + ":" + sec;
  }
}
}