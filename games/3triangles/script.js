const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const imageElement = document.getElementById('image-container')
//const top = document.getElementById('top')
//const middle = document.getElementById('middle')
//const bottom = document.getElementById('bottom')


var coll = document.getElementsByClassName("collapsible");


//The variables
var topt = 'BT1'
var middle = 'BD1'
var bottom = 'BS1'

//Triangle Arrays!
let triangle1 = [['BT1', 'WD2','BS3'], ['WT1', 'BD2', 'WS3' ]] // back - front
let triangle2 = [['BD1', 'BS2','WT3'], ['WD1', 'WS2', 'BT3']] // back - front
let triangle3 = [['BS1', 'BD3','BT2'], ['WS1', 'WD3','WT2']] // back - front
let order = ['1','2','3']
let side = ['0','0','0'] //triangle1, 2, 3
let current1 = 0
let current2 = 0
let current3 = 0

startButton.addEventListener('click', function(){rotate(1, 0)})
document.getElementById('rotate-left-2').addEventListener('click', function(){rotate2(1)})
document.getElementById('rotate-left-3').addEventListener('click', function(){rotate3(1)})
document.getElementById('rotate-right').addEventListener('click', function(){rotate(-1, 0)})
document.getElementById('rotate-right-2').addEventListener('click', function(){rotate2(-1)})
document.getElementById('rotate-right-3').addEventListener('click', function(){rotate3(-1)})
document.getElementById('move1').addEventListener('click', move1)
document.getElementById('move2').addEventListener('click', move2)
document.getElementById('flipleft1').addEventListener('click', function(){flip(-1,0)})
document.getElementById('flipleft2').addEventListener('click', function(){flip2(-1)})
document.getElementById('flipleft3').addEventListener('click', function(){flip3(-1)})
document.getElementById('flipright1').addEventListener('click', function(){flip(1,0)})
document.getElementById('flipright2').addEventListener('click', function(){flip2(1)})
document.getElementById('flipright3').addEventListener('click', function(){flip3(1)})
document.getElementById('flipbottom1').addEventListener('click', function(){flip(0,0)})
document.getElementById('flipbottom2').addEventListener('click', function(){flip2(0)})
document.getElementById('flipbottom3').addEventListener('click', function(){flip3(0)})

  //startButton.classList.add('hide')
  //questionContainerElement.classList.remove('hide')


function swapElement(array, indexA, indexB) {
  var tmp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = tmp;
}

function flip(a, b) { //a=left(-1)/right(1)/bottom(0) b=which level
  if (order[b] == '1'){ //if triangle 1, on top at b=0
    if (side[0] ==0){
      current1 = ((current1+a)%3+3)%3
    }
    if (side[0] ==1){
      current1 = ((current1-a)%3+3)%3
    }
    side[0] = (side[0]+1)%2
  }
  if (order[b] == '2'){ //if triangle 2, on top at b=0
    if (side[1] ==0){
      current2 = ((current2+a)%3+3)%3
    }
    if (side[1] ==1){
      current2 = ((current2-a)%3+3)%3
    }
    side[1] = (side[1]+1)%2
  }
  if (order[b] == '3'){ //if triangle 3, on top at b=0
    if (side[2] ==0){
      current3 = ((current3+a)%3+3)%3
    }
    if (side[2] ==1){
      current3 = ((current3-a)%3+3)%3
    }
    side[2] = (side[2]+1)%2
  }
  loadstate()
}

function flip2(a){
  flip(a, 0)
  flip(a, 1)
  swapElement(order,0,1)
  loadstate()
}

function flip3(a){
  flip(a, 0)
  flip(a, 1)
  flip(a, 2)
  swapElement(order,0,2)
  loadstate()
}


function move1() {
  swapElement(order,0,2)
  swapElement(order,0,1)
  loadstate()
}

function move2() {
  move1()
  move1()
}

function rotate(a, b) {   //a=left/right b=which level
  if (order[b] == '1'){ //if triangle 1, on top at b=0  
  if (side[0] ==0){
    current1 = ((current1+a)%3+3)%3
    }
  if (side[0] ==1){
    current1 = ((current1-a)%3+3)%3
    }
  }
  if (order[b] == '2'){ //if triangle 2 is on top b=0
  if (side[1] ==0){
    current2 = ((current2+a)%3+3)%3
    }
  if (side[1] ==1){
    current2 = ((current2-a)%3+3)%3
    }  }
  if (order[b] == '3'){ //if triangle 3 is on top b=0
  if (side[2] ==0){
    current3 = ((current3+a)%3+3)%3
    }
  if (side[2] ==1){
    current3 = ((current3-a)%3+3)%3
    }
  }
  loadstate()
}

function rotate2(a) {   
  rotate(a,0)
  rotate(a,1)
}

function rotate3(a) {   
  rotate(a,0)
  rotate(a,1)
  rotate(a,2)
}



function loadstate() {
  if (order[0] == '1'){ topt = triangle1[side[0]][current1] } //which triangle is on top
  if (order[0] == '2'){ topt = triangle2[side[1]][current2] } //which triangle is on top
  if (order[0] == '3'){ topt = triangle3[side[2]][current3] } //which triangle is on top
  if (order[1] == '1'){ middle = triangle1[side[0]][current1] } //which triangle is on top
  if (order[1] == '2'){ middle = triangle2[side[1]][current2] } //which triangle is on top
  if (order[1] == '3'){ middle = triangle3[side[2]][current3] } //which triangle is on top
  if (order[2] == '1'){ bottom = triangle1[side[0]][current1] } //which triangle is on top
  if (order[2] == '2'){ bottom = triangle2[side[1]][current2] } //which triangle is on top
  if (order[2] == '3'){ bottom = triangle3[side[2]][current3] } //which triangle is on top
  document.getElementById('tbottom').src='triangles/'+bottom+'.png';
  document.getElementById('tmiddle').src='triangles/'+middle+'.png';
  document.getElementById('ttop').src='triangles/'+topt+'.png';
  clearlegalmoves()
  findlegalmoves()
}


function resetgame() {
  var x1 = document.getElementById("mySelect").value;
  if (x1 ==1){
    order = ['1','2','3']
    side[0] = 0
    side[1] = 0
    side[2] = 0
    current1 = 0
    current2 = 0
    current3 = 0
  }
  if (x1 ==2){
    order = ['1','2','3']
    side[0] = 0
    side[1] = 1
    side[2] = 0
    current1 = 2
    current2 = 0
    current3 = 1
  }
  if (x1 ==3){
    order = ['2','1','3']
    side[0] = 1
    side[1] = 1
    side[2] = 1
    current1 = 2
    current2 = 2
    current3 = 1
  }

  loadstate()
}


//LEGAL MOVES
let BT1legalmoves = ['m','f','x','m','r','f']
let BS3legalmoves = ['r','f','m','f','x','m']
let WD2legalmoves = ['x','m','r','f','m','f']

let BD1legalmoves = ['m','f','f','m2','r','x']
let WT3legalmoves = ['r','x','m','f','f','m2']
let BS2legalmoves = ['f','m2','r','x','m','f']

let BS1legalmoves = ['m2','f','x','m2','r','f']
let BT2legalmoves = ['r','f','m2','f','x','m2']
let BD3legalmoves = ['x','m2','r','f','m2','f']


function returnvalidmovearray(a){
  if (a == "BT1"){return BT1legalmoves}
  if (a == "BS3"){return BS3legalmoves}
  if (a == "WD2"){return WD2legalmoves}
  if (a == "BD1"){return BD1legalmoves}
  if (a == "WT3"){return WT3legalmoves}
  if (a == "BS2"){return BS2legalmoves}
  if (a == "BS1"){return BS1legalmoves}
  if (a == "BT2"){return BT2legalmoves}
  if (a == "BD3"){return BD3legalmoves}
  return ['0','0','0','0','0','0']
}

function findlegalmoves(){
  for (let i = 0; i < 6; i++) {
    findlegalmoves2(i)
  }
}

function findlegalmoves2(a){
//MOVE 1 OR 2
  if (mor2m(returnvalidmovearray(topt)[a]) && !mor2m(returnvalidmovearray(middle)[a]) && nox(a)){
    printstuff('move, ');
  }
  if (mor2m(returnvalidmovearray(topt)[a]) && mor2m(returnvalidmovearray(middle)[a]) && !mor2m(returnvalidmovearray(bottom)[a]) && nox(a)){
    printstuff('move 2, ');
  }
//3 MOVES
  if (returnvalidmovearray(topt)[a] == 'm' && returnvalidmovearray(middle)[a] =='m2' && mor2m(returnvalidmovearray(bottom)[a]) && nox(a)){
    printstuff('move 1 (special linking case), ');
  }
  if (returnvalidmovearray(topt)[a] == 'm' && returnvalidmovearray(middle)[a] =='m' && returnvalidmovearray(bottom)[a] == 'm2' && nox(a)){
    printstuff('move 2 (special linking case), ');
  }
  if (returnvalidmovearray(topt)[a] == 'm2' && returnvalidmovearray(middle)[a] =='m' && mor2m(returnvalidmovearray(bottom)[a]) && nox(a)){
    printstuff('move 1 (special linking case), ');
  }
  if (returnvalidmovearray(topt)[a] == 'm2' && returnvalidmovearray(middle)[a] =='m2' && returnvalidmovearray(bottom)[a] == 'm' && nox(a)){
    printstuff('move 2 (special linking case), ');
  }
//ROTATIONS
  if ( returnvalidmovearray(topt)[a]== 'r' && returnvalidmovearray(middle)[a] != 'r' && nox(a)){
    printstuff('rotate left, rotate right, ');
  }
  if ( returnvalidmovearray(topt)[a]== 'r' && returnvalidmovearray(middle)[a] == 'r' && returnvalidmovearray(bottom)[a] != 'r' && nox(a) ){
    printstuff('rotate left 2, rotate right 2, ');
  }
  if ( returnvalidmovearray(topt)[a]== 'r' && returnvalidmovearray(middle)[a] == 'r' && returnvalidmovearray(bottom)[a] == 'r' && nox(a) ){
    printstuff('rotate left 3, rotate right 3, ');
  }
//FLIPS
  if ( returnvalidmovearray(topt)[a]== 'f' && returnvalidmovearray(middle)[a] != 'f' && nox(a)){
    if (a<2 && a>=0){
      printstuff('flip left, ');
    }
    if (a<4 && a>=2){
      printstuff('flip right, ');
    }
    if (a<6 && a>=4){
      printstuff('flip bottom, ');
    }
  }
//FLIPS2
  if ( returnvalidmovearray(topt)[a]== 'f' && returnvalidmovearray(middle)[a] == 'f' && returnvalidmovearray(bottom)[a] != 'f' && nox(a)){
    if (a<2 && a>=0){
      printstuff('flip left 2, ');
    }
    if (a<4 && a>=2){
      printstuff('flip right 2, ');
    }
    if (a<6 && a>=4){
      printstuff('flip bottom 2, ');
    }
  }
//FLIPS3
  if ( returnvalidmovearray(topt)[a]== 'f' && returnvalidmovearray(middle)[a] == 'f' && returnvalidmovearray(bottom)[a] == 'f' && nox(a)){
    if (a<2 && a>=0){
      printstuff('flip left 3, ');
    }
    if (a<4 && a>=2){
      printstuff('flip right 3, ');
    }
    if (a<6 && a>=4){
      printstuff('flip bottom 3, ');
    }
  }
}

function mor2m(a){
  if (a == 'm'){return 1}
  if (a == 'm2'){return 1}
  return 0
}

function printstuff(a){
   var text = document.createTextNode(a);
   document.getElementById('legalmoves').appendChild(text)
}

function nox(a){
  if (returnvalidmovearray(topt)[a] != 'x' && returnvalidmovearray(middle)[a] != 'x' && returnvalidmovearray(bottom)[a] != 'x'){return 1}
  return 0
}

function clearlegalmoves(){
  while (document.getElementById('legalmoves').firstChild) {
    document.getElementById('legalmoves').removeChild(document.getElementById('legalmoves').firstChild)
  }
}

