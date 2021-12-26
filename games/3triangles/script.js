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
let searcharea = [''] //FOR SEARCHING


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
document.getElementById('viewcombined').addEventListener('click', function(){changeview()})
document.getElementById('shrinkview').addEventListener('click', function(){changeviewallinone()})
document.getElementById('leftview').addEventListener('click', function(){changeviewleft()})
document.getElementById('rightview').addEventListener('click', function(){changeviewright()})
document.getElementById('bottomview').addEventListener('click', function(){changeviewbottom()})


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
  swapElement(order,0,1)
  swapElement(order,0,2)
  loadstate()
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

function changeview() {
  document.getElementById('tmiddle').width ="720"
  document.getElementById('tmiddle').height ="720"
  document.getElementById('tmiddle').style.top ="0px"
  document.getElementById('tmiddle').style.left ="0px"

  document.getElementById('ttop').width ="720"
  document.getElementById('ttop').height ="720"
  document.getElementById('ttop').style.top ="0px"
  document.getElementById('ttop').style.left ="0px"

  loadstate()
}

function changeviewallinone() {
  document.getElementById('tmiddle').width ="300"
  document.getElementById('tmiddle').height ="300"
  document.getElementById('tmiddle').style.top ="260px"
  document.getElementById('tmiddle').style.left ="220px"

  document.getElementById('ttop').width ="100"
  document.getElementById('ttop').height ="100"
  document.getElementById('ttop').style.top ="400px"
  document.getElementById('ttop').style.left ="320px"

  loadstate()
}

function changeviewleft() {
  document.getElementById('tmiddle').width ="700"
  document.getElementById('tmiddle').height ="700"
  document.getElementById('tmiddle').style.top ="0px"
  document.getElementById('tmiddle').style.left ="200px"

  document.getElementById('ttop').width ="700"
  document.getElementById('ttop').height ="700"
  document.getElementById('ttop').style.top ="0px"
  document.getElementById('ttop').style.left ="370px"

  loadstate()
}

function changeviewright() {
  document.getElementById('tmiddle').width ="700"
  document.getElementById('tmiddle').height ="700"
  document.getElementById('tmiddle').style.top ="0px"
  document.getElementById('tmiddle').style.left ="-180px"

  document.getElementById('ttop').width ="700"
  document.getElementById('ttop').height ="700"
  document.getElementById('ttop').style.top ="0px"
  document.getElementById('ttop').style.left ="-350px"

  loadstate()
}

function changeviewbottom() {
  document.getElementById('tmiddle').width ="700"
  document.getElementById('tmiddle').height ="700"
  document.getElementById('tmiddle').style.top ="-180px"
  document.getElementById('tmiddle').style.left ="0px"

  document.getElementById('ttop').width ="700"
  document.getElementById('ttop').height ="700"
  document.getElementById('ttop').style.top ="-350px"
  document.getElementById('ttop').style.left ="0px"

  loadstate()
}

function resetgame() {
  var x1 = document.getElementById("mySelect").value;
  resetsearch(x1)
}

function resetsearch(a) {
  if (a ==1){
    order = ['1','2','3']
    side[0] = 0
    side[1] = 0
    side[2] = 0
    current1 = 0
    current2 = 0
    current3 = 0
  }
  if (a ==2){
    order = ['1','2','3']
    side[0] = 0
    side[1] = 1
    side[2] = 0
    current1 = 2
    current2 = 0
    current3 = 1
  }
  if (a ==3){
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
let WT1legalmoves = ['m','f','x','r','f','m']
let BD2legalmoves = ['f','m','m','f','x','r']
let WS3legalmoves = ['x','r','f','m','m','f']
let BD1legalmoves = ['m','f','f','m2','r','x']
let WT3legalmoves = ['r','x','m','f','f','m2']
let BS2legalmoves = ['f','m2','r','x','m','f']
let WD1legalmoves = ['x','f','m','r','m2','f']
let WS2legalmoves = ['m2','f','x','f','m','r']
let BT3legalmoves = ['m','r','m2','f','x','f']
let BS1legalmoves = ['m2','f','x','m2','r','f']
let BT2legalmoves = ['r','f','m2','f','x','m2']
let BD3legalmoves = ['x','m2','r','f','m2','f']
let WS1legalmoves = ['x','f','f','m2','m2','r']
let WD3legalmoves = ['m2','r','x','f','f','m2']
let WT2legalmoves = ['f','m2','m2','r','x','f']


function returnvalidmovearray(a){
  if (a == "BT1"){return BT1legalmoves}
  if (a == "BS3"){return BS3legalmoves}
  if (a == "WD2"){return WD2legalmoves}
  if (a == "WT1"){return WT1legalmoves}
  if (a == "BD2"){return BD2legalmoves}
  if (a == "WS3"){return WS3legalmoves}
  if (a == "BD1"){return BD1legalmoves}
  if (a == "WT3"){return WT3legalmoves}
  if (a == "BS2"){return BS2legalmoves}
  if (a == "WD1"){return WD1legalmoves}
  if (a == "WS2"){return WS2legalmoves}
  if (a == "BT3"){return BT3legalmoves}
  if (a == "BS1"){return BS1legalmoves}
  if (a == "BT2"){return BT2legalmoves}
  if (a == "BD3"){return BD3legalmoves}
  if (a == "WS1"){return BS1legalmoves}
  if (a == "WD3"){return BT2legalmoves}
  if (a == "WT2"){return BD3legalmoves}
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
    searcharea.push("1");
  }
  if (mor2m(returnvalidmovearray(topt)[a]) && mor2m(returnvalidmovearray(middle)[a]) && !mor2m(returnvalidmovearray(bottom)[a]) && nox(a)){
    printstuff('move 2, ');
    searcharea.push("2");
  }
//3 MOVES
  if (returnvalidmovearray(topt)[a] == 'm' && returnvalidmovearray(middle)[a] =='m2' && mor2m(returnvalidmovearray(bottom)[a]) && nox(a)){
    printstuff('move 1 (special linking case), ');
    searcharea.push("1");
  }
  if (returnvalidmovearray(topt)[a] == 'm' && returnvalidmovearray(middle)[a] =='m' && returnvalidmovearray(bottom)[a] == 'm2' && nox(a)){
    printstuff('move 2 (special linking case), ');
    searcharea.push("2");
  }
  if (returnvalidmovearray(topt)[a] == 'm2' && returnvalidmovearray(middle)[a] =='m' && mor2m(returnvalidmovearray(bottom)[a]) && nox(a)){
    printstuff('move 1 (special linking case), ');
    searcharea.push("1");
  }
  if (returnvalidmovearray(topt)[a] == 'm2' && returnvalidmovearray(middle)[a] =='m2' && returnvalidmovearray(bottom)[a] == 'm' && nox(a)){
    printstuff('move 2 (special linking case), ');
    searcharea.push("2");
  }
//ROTATIONS
  if ( returnvalidmovearray(topt)[a]== 'r' && returnvalidmovearray(middle)[a] != 'r' && nox(a)){
    printstuff('rotate left, rotate right, ');
    searcharea.push("3");
    searcharea.push("4");
  }
  if ( returnvalidmovearray(topt)[a]== 'r' && returnvalidmovearray(middle)[a] == 'r' && returnvalidmovearray(bottom)[a] != 'r' && nox(a) ){
    printstuff('rotate left 2, rotate right 2, ');
    searcharea.push("5");
    searcharea.push("6");
  }
  if ( returnvalidmovearray(topt)[a]== 'r' && returnvalidmovearray(middle)[a] == 'r' && returnvalidmovearray(bottom)[a] == 'r' && nox(a) ){
    printstuff('rotate left 3, rotate right 3, ');
    searcharea.push("7");
    searcharea.push("8");
  }
//FLIPS
  if ( returnvalidmovearray(topt)[a]== 'f' && returnvalidmovearray(middle)[a] != 'f' && nox(a)){
    if (a<2 && a>=0){
      printstuff('flip left, ');
      searcharea.push("9");
    }
    if (a<4 && a>=2){
      printstuff('flip right, ');
      searcharea.push("10");
    }
    if (a<6 && a>=4){
      printstuff('flip bottom, ');
      searcharea.push("11");
    }
  }
//FLIPS2
  if ( returnvalidmovearray(topt)[a]== 'f' && returnvalidmovearray(middle)[a] == 'f' && returnvalidmovearray(bottom)[a] != 'f' && nox(a)){
    if (a<2 && a>=0){
      printstuff('flip left 2, ');
      searcharea.push("12");
    }
    if (a<4 && a>=2){
      printstuff('flip right 2, ');
      searcharea.push("13");
    }
    if (a<6 && a>=4){
      printstuff('flip bottom 2, ');
      searcharea.push("14");
    }
  }
//FLIPS3
  if ( returnvalidmovearray(topt)[a]== 'f' && returnvalidmovearray(middle)[a] == 'f' && returnvalidmovearray(bottom)[a] == 'f' && nox(a)){
    if (a<2 && a>=0){
      printstuff('flip left 3, ');
      searcharea.push("15");
    }
    if (a<4 && a>=2){
      printstuff('flip right 3, ');
      searcharea.push("16");
    }
    if (a<6 && a>=4){
      printstuff('flip bottom 3, ');
      searcharea.push("17");
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


//SEARCHING
// move 1 = 1, move 2 = 2, rotate left = 3, rotate right = 4, rotate left 2 = 5, rotate right 2 = 6, rotate left 3 = 7, rotate right 3 = 8, flip left = 9, flip right =10, flip bottom = 11, flip left 2 = 12, flip right 2 = 13, flip bottom 2 = 14, flip left 3 = 15, flip right 3 = 16, flip bottom 3 = 17

var searchpath = ''
let searchone = ['1']


function searchingattempt(){ //a = how deep the search is
    searcharea=[]
    findlegalmoves()
    clearlegalmoves()
    searchone = searcharea
    searchpath = topt + middle + bottom
  //  var text = document.createTextNode('SEARCHONE IS: '+searchone);
    var searchlength=searchone.length
   // document.getElementById('searchlog').appendChild(text)
    for (var i=0; i<searchlength; i++){
      godeep(searchone[i])
      searcharea=[]
      findlegalmoves()
      clearlegalmoves()
      var searchtwo = searcharea
      var searchlength2=searchtwo.length
      var searchpath2 = searchpath + ',' + topt + middle + bottom + ', '
   //   var text = document.createTextNode('SEARCHTWO IS: '+searchtwo);
     // document.getElementById('searchlog').appendChild(text)
      for (var u=0; u<searchlength2; u++){
        godeep(searchtwo[u])
        searcharea=[]
        findlegalmoves()
        clearlegalmoves()
        var search3 = searcharea
        var searchlength3=search3.length
        var searchpath3 = searchpath2 + topt + middle + bottom + ', '
        for (var v=0; v<searchlength3; v++){
          godeep(search3[v])
          searcharea=[]
          findlegalmoves()
          clearlegalmoves()
          var search4 = searcharea
          var searchlength4=search4.length
          var searchpath4 = searchpath3 + topt + middle + bottom + ', '
          for (var z=0; z<searchlength4; z++){
            godeep(search4[v])
            searcharea=[]
            findlegalmoves()
            clearlegalmoves()
            var search5 = searcharea
            var searchlength5=search5.length
            var searchpath5 = searchpath4 + topt + middle + bottom + ', '
            for(var x=0; x<searchlength5; x++){
              godeep(search5[x])
              searcharea=[]
              findlegalmoves()
              clearlegalmoves()
              var search6 = searcharea
              var searchlength6=search6.length
              var searchpath6 = searchpath5 + topt + middle + bottom + ', '             
              for (var j=0; j<searchlength6;j++){
                godeep(search6[j])
                var text = document.createTextNode(searchpath6 + topt + middle + bottom + ', '); //\\replace with ;?
                document.getElementById('searchlog').appendChild(text)
                reversedeep(j)
                }
              reversedeep(x)
              }
            reversedeep(z)
          }
          reversedeep(v)
        }
        reversedeep(u)
      }
      resetsearch(1)

    }


  //}

}


function godeep(a){
  if (a==1){move1() }
  if (a==2){move2() }
  if (a==3){rotate(1,0)}
  if (a==4){rotate(-1,0)}
  if (a==5){rotate2(1)}
  if (a==6){rotate2(-1)}
  if (a==7){rotate3(1)}
  if (a==8){rotate3(-1)}
  if (a==9){flip(-1,0)}
  if (a==10){flip(1,0)}
  if (a==11){flip(0,0)}
  if (a==12){flip2(-1)}
  if (a==13){flip2(1)}
  if (a==14){flip2(0)}
  if (a==15){flip3(-1)}
  if (a==16){flip3(1)}
  if (a==17){flip3(0)}
}

function reversedeep(a){
  if (a==1){move2() }
  if (a==2){move1() }
  if (a==3){rotate(-1,0)}
  if (a==4){rotate(1,0)}
  if (a==5){rotate2(-1)}
  if (a==6){rotate2(1)}
  if (a==7){rotate3(-1)}
  if (a==8){rotate3(1)}
  if (a==9){flip(-1,0)}
  if (a==10){flip(1,0)}
  if (a==11){flip(0,0)}
  if (a==12){flip2(-1)}
  if (a==13){flip2(1)}
  if (a==14){flip2(0)}
  if (a==15){flip3(-1)}
  if (a==16){flip3(1)}
  if (a==17){flip3(0)}
}

