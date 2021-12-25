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




