const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const imageElement = document.getElementById('image-container')

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var english_stat = 0;
var math_stat = 0;
var history_stat = 0;
var science_stat = 0;
var english_stat_delta = 0;
var math_stat_delta = 0;
var history_stat_delta = 0;
var science_stat_delta = 0;
var english_grade = "F";
var math_grade = "F";
var history_grade = "F";
var science_grade = "F";
var english_A = 0;
var math_A = 0;
var history_A = 0;
var science_A = 0;
var happiness=10;
var happiness_delta=0
var integrity=10
var stress=0;
var stress_delta=0;
var end_year_stress=0;
var mental_breakdowns=0;
var mental_breakdowns_served=0;
var sleep = 24;  //SET BACK TO 24 WHEN DONE TESTING
var perm_sleep_loss = 0;
var friends=0;
var friends_delta=0;
var franklin_influence=0;
var knovel_influence=0;
var mathew_influence=0;
var terry_influence=0;
var fizzix_influence=0;
var yasse_influence=0;
var graff_influence=0;
var hectare_influence=0;
var franklin_influence_delta=0;
var knovel_influence_delta=0;
var mathew_influence_delta=0;
var terry_influence_delta=0;
var fizzix_influence_delta=0;
var yasse_influence_delta=0;
var graff_influence_delta=0;
var hectare_influence_delta=0;
var FUN_bonus=0;
var clubs_led = 0;
var relax_counter = 0;
var chat_counter = 0;
var socialize_counter = 0;
var study_counter = 0;
var academic_counter = 0;
var sport_counter = 0;
var art_counter = 0;
var recreation_counter = 0;
var recs_gotten = 0;
var straight_A_bonuses = 0;
var resume_points=0;
var current_year="Freshman"
var finalFreshmanIndex=0;
var finalSophomoreIndex=0;
var finalJuniorIndex=0;
var finalSeniorIndex=0;
var club_deck = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
var essay_deck = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]


var freshman_end_year = 'yes'


var msg_stats = document.getElementById("msg");
msg_stats.innerHTML = "<b>Stats:</b> English: <b>"+english_stat+"</b>  Math: <b>"+math_stat+"</b>  History: <b>"+history_stat+"</b>  Science: <b>"+science_stat+ "</b> <br> <b>Grades:</b> English: <b>"+english_grade+"</b>  Math: <b>"+math_grade+"</b>  History: <b>"+history_grade+"</b>  Science: <b>"+science_grade+ "</b> <br> <b>Influence:</b> Knovel: <b>"+knovel_influence+"</b>  Mathew: <b>"+mathew_influence+"</b>  Terry: <b>"+terry_influence+"</b>  Fizzix: <b>"+fizzix_influence+ "</b> Franklin: <b>"+franklin_influence+ "</b> Yasse: <b>"+yasse_influence+ "</b> Graff: <b>"+graff_influence+ "</b> Hectare: <b>"+hectare_influence+ "</b><br> Sleep: <b>"+sleep+" hours/night</b> Friends: <b>"+friends+"</b> Stress: <b>"+stress+"/10</b> Happiness: <b>"+happiness+"/10</b> Integrity: <b>"+integrity+"/10</b> <br> Resume Points: <b>"+resume_points+"</b> Year: <b>"+current_year+"</b>";



let shuffledFreshmanEvents, currentQuestionIndex, currentFreshmanEventIndex, shuffledPanderingDeck, currentPanderingDeckIndex, shuffledCheatingDeck, currentCheatingDeckIndex, shuffledClubDeck, clubDeckIndex, shuffledSophomoreEvents, shuffledJuniorEvents, shuffledSeniorEvents

startButton.addEventListener('click', startGame)

function startGame() {
  startButton.classList.add('hide')
  shuffledFreshmanEvents = freshman_events.sort(() => Math.random() - .5)
  currentFreshmanEventIndex=0
  shuffledSophomoreEvents = sophomore_events.sort(() => Math.random() - .5)
  shuffledJuniorEvents = junior_events.sort(() => Math.random() - .5)
  shuffledSeniorEvents = senior_events.sort(() => Math.random() - .5)
  shuffledPanderingDeck = pandering_deck.sort(() => Math.random() - .5)
  currentPanderingDeckIndex=0
  shuffledCheatingDeck = cheating_deck.sort(() => Math.random() - .5)
  currentCheatingDeckIndex=0
  shuffledClubDeck = club_deck.sort(() => Math.random() - .5)
  shuffledEssayDeck = essay_deck.sort(() => Math.random() - .5)
  clubDeckIndex=0
  essayDeckIndex=0
  drawClub()
  drawEssay()
  drawEssay()
  currentQuestionIndex = 0
  currentEffect = 0 
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  check_breakdown_sleep()
  resetState()
  showQuestion(questions[currentQuestionIndex])
  msg_stats.innerHTML = "<b>Stats:</b> English: <b>"+english_stat+"</b>  Math: <b>"+math_stat+"</b>  History: <b>"+history_stat+"</b>  Science: <b>"+science_stat+ "</b> <br> <b>Grades:</b> English: <b>"+english_grade+"</b>  Math: <b>"+math_grade+"</b>  History: <b>"+history_grade+"</b>  Science: <b>"+science_grade+ "</b> <br> <b>Influence:</b> Knovel: <b>"+knovel_influence+"</b>  Mathew: <b>"+mathew_influence+"</b>  Terry: <b>"+terry_influence+"</b>  Fizzix: <b>"+fizzix_influence+ "</b> Franklin: <b>"+franklin_influence+ "</b> Yasse: <b>"+yasse_influence+ "</b> Graff: <b>"+graff_influence+ "</b> Hectare: <b>"+hectare_influence+ "</b><br> Sleep: <b>"+sleep+" hours/night</b> Friends: <b>"+friends+"</b> Stress: <b>"+stress+"/10</b> Happiness: <b>"+happiness+"/10</b> Integrity: <b>"+integrity+"/10</b> <br> Resume Points: <b>"+resume_points+"</b> Year: <b>"+current_year+"</b>";
}

function setNextEvent() {
  resetState()
  if (currentFreshmanEventIndex < shuffledFreshmanEvents.length){do_event(shuffledFreshmanEvents[currentFreshmanEventIndex])}
  else{
    setNextQuestion()
  }

  msg_stats.innerHTML = "<b>Stats:</b> English: <b>"+english_stat+"</b>  Math: <b>"+math_stat+"</b>  History: <b>"+history_stat+"</b>  Science: <b>"+science_stat+ "</b> <br> <b>Grades:</b> English: <b>"+english_grade+"</b>  Math: <b>"+math_grade+"</b>  History: <b>"+history_grade+"</b>  Science: <b>"+science_grade+ "</b> <br> <b>Influence:</b> Knovel: <b>"+knovel_influence+"</b>  Mathew: <b>"+mathew_influence+"</b>  Terry: <b>"+terry_influence+"</b>  Fizzix: <b>"+fizzix_influence+ "</b> Franklin: <b>"+franklin_influence+ "</b> Yasse: <b>"+yasse_influence+ "</b> Graff: <b>"+graff_influence+ "</b> Hectare: <b>"+hectare_influence+ "</b><br> Sleep: <b>"+sleep+" hours/night</b> Friends: <b>"+friends+"</b> Stress: <b>"+stress+"/10</b> Happiness: <b>"+happiness+"/10</b> Integrity: <b>"+integrity+"/10</b> <br> Resume Points: <b>"+resume_points+"</b> Year: <b>"+current_year+"</b>";
}

function setNextPandering() {
  resetState()
  if (currentPanderingDeckIndex < shuffledPanderingDeck.length){do_pandering(shuffledPanderingDeck[currentPanderingDeckIndex])}
  else{
    currentQuestionIndex=22
    setNextQuestion()
  }
  msg_stats.innerHTML = "<b>Stats:</b> English: <b>"+english_stat+"</b>  Math: <b>"+math_stat+"</b>  History: <b>"+history_stat+"</b>  Science: <b>"+science_stat+ "</b> <br> <b>Grades:</b> English: <b>"+english_grade+"</b>  Math: <b>"+math_grade+"</b>  History: <b>"+history_grade+"</b>  Science: <b>"+science_grade+ "</b> <br> <b>Influence:</b> Knovel: <b>"+knovel_influence+"</b>  Mathew: <b>"+mathew_influence+"</b>  Terry: <b>"+terry_influence+"</b>  Fizzix: <b>"+fizzix_influence+ "</b> Franklin: <b>"+franklin_influence+ "</b> Yasse: <b>"+yasse_influence+ "</b> Graff: <b>"+graff_influence+ "</b> Hectare: <b>"+hectare_influence+ "</b><br> Sleep: <b>"+sleep+" hours/night</b> Friends: <b>"+friends+"</b> Stress: <b>"+stress+"/10</b> Happiness: <b>"+happiness+"/10</b> Integrity: <b>"+integrity+"/10</b> <br> Resume Points: <b>"+resume_points+"</b> Year: <b>"+current_year+"</b>";
}

function setNextCheating() {
  resetState()
  if (currentCheatingDeckIndex < shuffledCheatingDeck.length){do_cheating(shuffledCheatingDeck[currentCheatingDeckIndex])}
  else{
    currentQuestionIndex=22
    setNextQuestion()
  }
  msg_stats.innerHTML = "<b>Stats:</b> English: <b>"+english_stat+"</b>  Math: <b>"+math_stat+"</b>  History: <b>"+history_stat+"</b>  Science: <b>"+science_stat+ "</b> <br> <b>Grades:</b> English: <b>"+english_grade+"</b>  Math: <b>"+math_grade+"</b>  History: <b>"+history_grade+"</b>  Science: <b>"+science_grade+ "</b> <br> <b>Influence:</b> Knovel: <b>"+knovel_influence+"</b>  Mathew: <b>"+mathew_influence+"</b>  Terry: <b>"+terry_influence+"</b>  Fizzix: <b>"+fizzix_influence+ "</b> Franklin: <b>"+franklin_influence+ "</b> Yasse: <b>"+yasse_influence+ "</b> Graff: <b>"+graff_influence+ "</b> Hectare: <b>"+hectare_influence+ "</b><br> Sleep: <b>"+sleep+" hours/night</b> Friends: <b>"+friends+"</b> Stress: <b>"+stress+"/10</b> Happiness: <b>"+happiness+"/10</b> Integrity: <b>"+integrity+"/10</b> <br> Resume Points: <b>"+resume_points+"</b> Year: <b>"+current_year+"</b>";
}

function set_A() {
  resetState()
  currentFreshmanEventIndex--
  do_event(get_A)
}

function drawClub() {
  number = shuffledClubDeck[clubDeckIndex]
  questions[18].answers[number].possible = 1
  if (clubDeckIndex <24){clubDeckIndex++} //Makes sure you stop when you run out of clubs
}

function drawEssay() {
  number = shuffledEssayDeck[essayDeckIndex]
  questions[63].answers[number].possible = 1
  if (essayDeckIndex < 27){essayDeckIndex++} //Makes sure you stop when you run out of essays
}

function checkClubCost_8() {
  if (friends < 8){
    questions[17].answers[0].possible=0
    questions[19].answers[0].possible=0
    questions[20].answers[0].possible=0
  }
  if (friends >= 8){
    questions[17].answers[0].possible=1
    questions[19].answers[0].possible=1
    questions[20].answers[0].possible=1
  }
  for (i=23;i<=44;i++){
    if (friends < questions[i].answers[0].cost){
      questions[i].answers[0].possible=0
    }
    if (friends >= questions[i].answers[0].cost){
      questions[i].answers[0].possible=1
    }
  }
}

function checkEssayPossible() {
  if (integrity < 4){questions[64].answers[0].possible=1}
  if (friends >= 15){questions[65].answers[0].possible=1}
  if (friends < 15){questions[65].answers[0].possible=0}
  if (knovel_influence >= 10){questions[66].answers[0].possible=1}
  if (knovel_influence < 10){questions[66].answers[0].possible=0}
  if (mental_breakdowns_served >= 1){questions[67].answers[0].possible=1}
  if (science_stat >= 3){questions[68].answers[0].possible=1}
  if (science_stat < 3){questions[68].answers[0].possible=0}
  if (relax_counter >= 7){questions[69].answers[0].possible=1}
  if (current_year=="Senior"){questions[70].answers[1].possible=1}
  if (yasse_influence>=1 && graff_influence>=1 && franklin_influence>=1 && hectare_influence>=1 && knovel_influence>=1 && mathew_influence>=1 && terry_influence>=1 && fizzix_influence>=1){questions[71].answers[0].possible=1}
  else {questions[71].answers[0].possible=0}
  if (history_stat >= 6){questions[72].answers[0].possible=1}
  if (history_stat < 6){questions[72].answers[0].possible=0}
  if (happiness < 2){questions[73].answers[0].possible=1}
  if (happiness >= 2){questions[73].answers[0].possible=0}
  if (stress == 9){questions[74].answers[0].possible=1}
  else {questions[74].answers[0].possible=0}
  if (math_stat >= 8){questions[75].answers[0].possible=1}
  else {questions[75].answers[0].possible=0}
  if (currentPanderingDeckIndex>=3){questions[76].answers[0].possible=1}
  if (recs_gotten>=2){questions[77].answers[0].possible=1}
  if (happiness<5){questions[78].answers[0].possible=1}
  if (english_A>=3){questions[79].answers[0].possible=1}
  if (math_A>=2){questions[80].answers[0].possible=1}
  if (history_A>=2){questions[81].answers[0].possible=1}
  if (science_A>=2){questions[82].answers[0].possible=1}
  if (study_counter>=7){questions[83].answers[0].possible=1}
  if (socialize_counter>=7){questions[84].answers[0].possible=1}
  if (chat_counter>=7){questions[85].answers[0].possible=1}
  if (clubs_led>=5){questions[86].answers[0].possible=1}
  if (recreation_counter>=2){questions[87].answers[0].possible=1}
  if (art_counter>=1){questions[88].answers[0].possible=1}
  if (sport_counter>=2){questions[89].answers[0].possible=1}
  if (academic_counter>=2){questions[90].answers[0].possible=1}
  if (academic_counter>=1 && sport_counter>=1 && art_counter>=1 && recreation_counter>=1){questions[91].answers[0].possible=1}

}

function checkSpecial(){
  for (i=0; i<4; i++){
    if ((friends >= 5) && (questions[47].answers[i].taken==0)&&(questions[47].answers[i].unlocked==1)){  //FOR STUD GOV
      questions[47].answers[i].possible=1
    } 
    if ((friends < 5) || (questions[47].answers[i].taken==1)){  
      questions[47].answers[i].possible=0
    } 
  } 
  for (i=0; i<4; i++){
    if ((math_stat >= questions[48].answers[i].cost) && (questions[48].answers[i].taken==0)&&(questions[48].answers[i].unlocked==1)){  //FOR AMC
      questions[48].answers[i].possible=1
    } 
    if ((math_stat < questions[48].answers[i].cost) || (questions[48].answers[i].taken==1)){  
      questions[48].answers[i].possible=0
    } 
  } 
  for (i=0; i<3; i++){ //PHYSICS OLYMPIAD
    if ((science_stat >= questions[59].answers[i].cost)&&(questions[59].answers[i].taken==0)&&(questions[59].answers[i].unlocked==1)){  
      questions[59].answers[i].possible=1
    } 
    if ((science_stat < questions[59].answers[i].cost) || (questions[59].answers[i].taken==1)){  
      questions[59].answers[i].possible=0
    } 
  } 
  if (math_stat>=2 && english_stat>=2 && sleep>0){questions[49].answers[4].possible=1}
  else{questions[49].answers[4].possible=0}

  if (friends >= 30){questions[60].answers[0].possible=1}
  if (friends < 30){questions[60].answers[0].possible=0}

  if (straight_A_bonuses>=3 && english_grade == "A" &&  math_grade == "A" && history_grade == "A" && science_grade == "A"){questions[61].answers[0].possible=1}  //VALEDICTORIAN
  else{questions[61].answers[0].possible=0}
}

function take_FUN() {
  roll_result = Math.floor(Math.random()*5) //0, 1, 2, 3, 4, 5
  if ((roll_result+FUN_bonus)<=2){
    questions[49].answers[3].taken=1
  }
  if ((roll_result+FUN_bonus)==3){
    questions[49].answers[2].taken=1
  }
  if ((roll_result+FUN_bonus)==4){
    questions[49].answers[1].taken=1
  }
  if ((roll_result+FUN_bonus)>=5){
    questions[49].answers[0].taken=1
  }

}

function checkPossibleGrades() {
  if (english_stat >=questions[5].answers[0].cost && english_grade =="F"){questions[5].answers[0].possible = 1}
  if (questions[5].answers[0].destroyed==1){questions[5].answers[0].possible = 0}
  if (english_stat <questions[5].answers[0].cost || english_grade =="A"){questions[5].answers[0].possible = 0}
  if (math_stat >=questions[5].answers[1].cost && math_grade =="F"){questions[5].answers[1].possible = 1}
  if (math_stat <questions[5].answers[1].cost || math_grade =="A"){questions[5].answers[1].possible = 0}
  if (history_stat >=questions[5].answers[2].cost && history_grade =="F"){questions[5].answers[2].possible = 1}
  if (history_stat <questions[5].answers[2].cost || history_grade =="A"){questions[5].answers[2].possible = 0}
  if (science_stat >=questions[5].answers[3].cost && science_grade =="F"){questions[5].answers[3].possible = 1}
  if (science_stat <questions[5].answers[3].cost || science_grade =="A"){questions[5].answers[3].possible = 0}
}

function checkForF() {
  if (english_grade=="A"){get_A.options[0].possible = 0}
  if (english_grade=="F"){get_A.options[0].possible = 1}
  if (math_grade=="A"){get_A.options[1].possible = 0}
  if (math_grade=="F"){get_A.options[1].possible = 1}
  if (history_grade=="A"){get_A.options[2].possible = 0}
  if (history_grade=="F"){get_A.options[2].possible = 1}
  if (science_grade=="A"){get_A.options[3].possible = 0}
  if (science_grade=="F"){get_A.options[3].possible = 1}
}

function checkPossibleInfluence() {
  if (franklin_influence>=3){questions[9].answers[0].possible = 1}
  if (franklin_influence<3){questions[9].answers[0].possible = 0}
  if (franklin_influence>=20){questions[9].answers[1].possible = 1}
  if (franklin_influence<20){questions[9].answers[1].possible = 0}
  if (knovel_influence>=2){questions[10].answers[0].possible = 1}
  if (knovel_influence<2){questions[10].answers[0].possible = 0}
  if (knovel_influence>=16){questions[10].answers[1].possible = 1}
  if (knovel_influence<16){questions[10].answers[1].possible = 0}
  if (mathew_influence>=3){questions[11].answers[0].possible = 1}
  if (mathew_influence<3){questions[11].answers[0].possible = 0}
  if (mathew_influence>=16){questions[11].answers[1].possible = 1}
  if (mathew_influence<16){questions[11].answers[1].possible = 0}
  if (terry_influence>=3){questions[12].answers[0].possible = 1}
  if (terry_influence<3){questions[12].answers[0].possible = 0}
  if (terry_influence>=18){questions[12].answers[1].possible = 1}
  if (terry_influence<18){questions[12].answers[1].possible = 0}
  if (fizzix_influence>=2){questions[13].answers[0].possible = 1}
  if (fizzix_influence<2){questions[13].answers[0].possible = 0}
  if (fizzix_influence>=10){questions[13].answers[1].possible = 1}
  if (fizzix_influence<10){questions[13].answers[1].possible = 0}
  if (yasse_influence>=3){questions[51].answers[0].possible = 1}
  if (yasse_influence<3){questions[51].answers[0].possible = 0}
  if (yasse_influence>=10){questions[51].answers[1].possible = 1}
  if (yasse_influence<10){questions[51].answers[1].possible = 0}
  if (english_stat>=2){questions[52].answers[0].possible = 1}
  if (english_stat<2){questions[52].answers[0].possible = 0}
  if (math_stat>=2){questions[52].answers[1].possible = 1}
  if (math_stat<2){questions[52].answers[1].possible = 0}
  if (history_stat>=2){questions[52].answers[2].possible = 1}
  if (history_stat<2){questions[52].answers[2].possible = 0}
  if (science_stat>=2){questions[52].answers[3].possible = 1}
  if (science_stat<2){questions[52].answers[3].possible = 0}
  if (graff_influence>=3){questions[54].answers[0].possible = 1}
  if (graff_influence<3){questions[54].answers[0].possible = 0}
  if (graff_influence>=18){questions[54].answers[1].possible = 1}
  if (graff_influence<18){questions[54].answers[1].possible = 0}
  if (hectare_influence>=4){questions[55].answers[0].possible = 1}
  if (hectare_influence<4){questions[55].answers[0].possible = 0}
  if (hectare_influence>=20){questions[55].answers[1].possible = 1}
  if (hectare_influence<20){questions[55].answers[1].possible = 0}
}


function check_breakdown_sleep() {
  if (stress >=10){
    stress-=10
    mental_breakdowns+=1
  }
  if (mental_breakdowns > mental_breakdowns_served){    
    questions[0].answers[3].possible = 1
    questions[0].answers[3].red = 1}
  if (mental_breakdowns <= mental_breakdowns_served){    
    questions[0].answers[3].possible = 0
    questions[0].answers[3].red = 0}
  if ((mental_breakdowns > mental_breakdowns_served) || (sleep <=0)){
    questions[0].answers[0].possible = 0}
  if ((mental_breakdowns <= mental_breakdowns_served) && (sleep >0)){
    questions[0].answers[0].possible = 1}
  if (sleep <=10){    
    questions[0].answers[4].possible = 1}
  if (sleep >10){    
    questions[0].answers[4].possible = 0}
}

function end_of_year(){
  math_stat+=math_stat_delta
  english_stat+=english_stat_delta
  history_stat+=history_stat_delta
  science_stat+=science_stat_delta
  happiness+=happiness_delta
  stress+=stress_delta
  stress+=Math.floor((10-happiness)/2)
  stress+=(10-sleep)
  friends+=friends_delta
  franklin_influence += franklin_influence_delta
  knovel_influence += knovel_influence_delta
  mathew_influence += mathew_influence_delta
  terry_influence += terry_influence_delta
  fizzix_influence += fizzix_influence_delta
  yasse_influence += yasse_influence_delta
  graff_influence += graff_influence_delta
  hectare_influence += hectare_influence_delta
  sleep = (24-perm_sleep_loss)       //SET BACK WHEN DONE TESTING!!!!!!!!!!!!!!! 24-perm_sleep_loss
  if (english_grade == "A" &&  math_grade == "A" && history_grade == "A" && science_grade == "A"){resume_points+=3, straight_A_bonuses+=1}
  english_grade = "F"
  math_grade = "F"
  history_grade = "F"
  science_grade = "F"
  questions[1].answers[0].possible = 1 //UNDO crushing on someone
  questions[1].answers[1].possible = 1 //UNDO can't socialize
  questions[0].answers[1].possible=1 //UNDO can't talk to teachers
  questions[5].answers[0].possible = 1 // Undoes unable to correct english
  questions[0].answers[2].possible=1 //UNDO unable to buy clubs
  questions[5].answers[0].taken = 0 //makes test correction buttons not green again
  questions[5].answers[1].taken = 0
  questions[5].answers[2].taken = 0
  questions[5].answers[3].taken = 0
  questions[5].answers[0].destroyed=0 //Makes English correctable again

}

function end_of_frosh_year(){
  questions[5].answers[0].text = "English II (-3 English stat, +1 Resume Point, +5 Yasse influence)"
  questions[5].answers[0].effect = 113
  questions[5].answers[0].reward = 1
  questions[5].answers[0].cost = 3
  questions[5].answers[1].text = "Pre-Calculus (-3 Math stat, +1 Resume Point, +5 Graff influence)"
  questions[5].answers[1].effect = 114
  questions[5].answers[1].reward = 1
  questions[5].answers[1].cost = 3
  questions[5].answers[2].text = "TOP US History (-4 History stat, +2 Resume Points, +6 Terry influence)"
  questions[5].answers[2].effect = 115
  questions[5].answers[2].reward = 2
  questions[5].answers[2].cost = 4
  questions[5].answers[3].text = "TOP Chemistry (-5 Science stat, +3 Resume Points, +6 Hectare influence)"
  questions[5].answers[3].effect = 116
  questions[5].answers[3].reward = 3
  questions[5].answers[3].cost = 5
  questions[0].answers[4].effect = 141 //So end of year does the end of sophomore year effect
  questions[0].answers[4].correct = 50 //to Junior year
  current_year="Sophomore"
}

function end_of_soph_year(){
  questions[5].answers[0].text = "TOP Writing (-4 English stat, +2 Resume Points, +6 Knovel influence)"
  questions[5].answers[0].effect = 136
  questions[5].answers[0].reward = 2
  questions[5].answers[0].cost = 4
  questions[5].answers[1].text = "TOP Calculus (-4 Math stat, +2 Resume Points, +6 Mathew influence)"
  questions[5].answers[1].effect = 137
  questions[5].answers[1].reward = 2
  questions[5].answers[1].cost = 4
  questions[5].answers[2].text = "TOP US Government (-4 History stat, +2 Resume Points, +6 Franklin influence)"
  questions[5].answers[2].effect = 138
  questions[5].answers[2].reward = 2
  questions[5].answers[2].cost = 4
  questions[5].answers[3].text = "TOP Physics (-5 Science stat, +3 Resume Points, +6 Fizzix influence)"
  questions[5].answers[3].effect = 139
  questions[5].answers[3].reward = 3
  questions[5].answers[3].cost = 5
  questions[46].answers[2].possible=1, questions[0].answers[5].possible=1  //FUN becomes available
  questions[0].answers[4].effect = 200 //So end of year does the end of junior year effect
  questions[0].answers[4].correct = 57 //end of junior year causes it to go to Senior year
  current_year="Junior"
}


function end_of_junior_year(){
  questions[5].answers[0].text = "TOP Literature (-4 English stat, +2 Resume Points, +6 Yasse influence)"
  questions[5].answers[0].effect = 202
  questions[5].answers[0].reward = 2
  questions[5].answers[0].cost = 4
  questions[5].answers[1].text = "TOP Statistics (-4 Math stat, +2 Resume Points, +6 Graff influence)"
  questions[5].answers[1].effect = 203
  questions[5].answers[1].reward = 2
  questions[5].answers[1].cost = 4
  questions[5].answers[2].text = "TOP Economics (-4 History stat, +2 Resume Points, +6 Terry influence)"
  questions[5].answers[2].effect = 204
  questions[5].answers[2].reward = 2
  questions[5].answers[2].cost = 4
  questions[5].answers[3].text = "TOP Biology (-6 Science stat, +3 Resume Points, +6 Hectare influence)"
  questions[5].answers[3].effect = 205
  questions[5].answers[3].reward = 3
  questions[5].answers[3].cost = 5
  questions[0].answers[4].text = "End the game" //to END OF GAME
  questions[0].answers[4].effect = 251 //So end of year does the END OF GAME effect
  questions[0].answers[4].correct = 58 //to END OF GAME
  current_year="Senior"
}

function end_of_senior_year(){
  resume_points+=integrity //ADD Integrity to RP
  math_stat+=math_stat_delta
  english_stat+=english_stat_delta
  history_stat+=history_stat_delta
  science_stat+=science_stat_delta
  happiness+=happiness_delta
  stress+=stress_delta
  stress+=Math.floor((10-happiness)/2)
  stress+=(10-sleep)
  friends+=friends_delta
  franklin_influence += franklin_influence_delta
  knovel_influence += knovel_influence_delta
  mathew_influence += mathew_influence_delta
  terry_influence += terry_influence_delta
  fizzix_influence += fizzix_influence_delta
  yasse_influence += yasse_influence_delta
  graff_influence += graff_influence_delta
  hectare_influence += hectare_influence_delta
  if (english_grade == "A" &&  math_grade == "A" && history_grade == "A" && science_grade == "A"){resume_points+=3, straight_A_bonuses+=1}
  if (mental_breakdowns > mental_breakdowns_served){resume_points-=(5*(mental_breakdowns-mental_breakdowns_served))}
  if (questions[49].answers[0].taken==1){resume_points+=10}
  else if (questions[49].answers[1].taken==1){resume_points+=8}
  else if (questions[49].answers[2].taken==1){resume_points+=4}
  if (integrity >= 10){questions[58].answers[0].taken=1}
  if (happiness >= 10){questions[58].answers[1].taken=1}
  if (questions[49].answers[0].taken==1){questions[58].answers[2].taken=1} //perfect FUN
  if (questions[47].answers[0].taken==1){questions[58].answers[3].taken=1}
  if (questions[48].answers[0].taken==1){questions[58].answers[4].taken=1}
  if (questions[59].answers[0].taken==1){questions[58].answers[5].taken=1}
  if (questions[60].answers[0].taken==1){questions[58].answers[6].taken=1}
  if (questions[61].answers[0].taken==1){questions[58].answers[7].taken=1}
}

function end_of_game_message(){
  if (resume_points <= 0){
    questions[58].room = 'After four years of hell, you finally made it to the end! You were at the very bottom of your class, doing poorly at virtually everything. Any dream you had of attending the best universities in the world have been completely shattered. Every college that you applied to rejected you, even your safety schools. Your performance was so poor that you single-handedly managed to lower your school\'s ranking in the US News and Report. Was this your plan all along? Needless to say, the principal refused to allow you to graduate. Your friends, whom all got into fantastic universities, have all moved on and forgotten you. Your family disowned you, and you are currently homeless. \n'
}
  else if (resume_points>0 && resume_points<=50){
    questions[58].room = 'After a grueling four years, you finally made it to the end! You were near the bottom of your class, but at least you survived (some did not). You had high hopes throughout admissions season, but one by one, all the colleges you were hoping to get into rejected you. You are completely demoralized by the entire experience, and cannot help but feel the disappointment evident in your teachers, family, and friends. With no other options, you decide to get a job working at McDonald\'s. \n'
}
  else if (resume_points>50 && resume_points<=100){
    questions[58].room = 'After a difficult four years, you finally made it to the end! You were above average, but not the top of your class by any means. You had high hopes throughout admissions season, but the universities you were hoping to get into rejected you. Luckily, you got into one of your safety schools. Your family expected more from you, and decide not to help you pay for your tuition at all. You go deep into debt to attend college, and find it no easier than high school was. After graduating college, you still cannot find a job, but hey, at least you went to college. \n'
}
  else if (resume_points>100 && resume_points<=150){
    questions[58].room = 'After a tedious four years, you finally made it to the end! You were at the top of your class, although it was a struggle at times. You were very confident throughout admissions season because of this. Unfortunately, you did not get into your top choices. Even today, you still do not know why you did not get in, especially since many of your peers got into the schools that you wanted to get into. Filled with resentment towards your peers, you settle for the university that you did get into. It is an excellent school and you probably would have had a good time if you were not so hyper competitive and bitter. \n'
}
  else if (resume_points>150){
    questions[58].room = 'You dominated your four years of high school. Your teachers all agreed that you were the best student they ever had. You got into every college you applied to, including the university of your dreams. So why do you feel so empty? Being ultra-competitive for four years took a huge toll on you, and reflecting back on it you feel like you wasted four years of your life. You have already forgotten everything that you learned, and all you have to show for all that studying is nothing at all. You also realized that all of your friendships were entirely superficial. You never cared about your friends and they never cared about you: you simply used them as a means to get ahead. After graduating the college of your dreams, you get a high-paying, but grueling job where you feel yourself waste away. \n'
}
  if (integrity >=10){
    questions[58].room +='Throughout high school, you conducted yourself with impeccable integrity. You never cheated on an assignment or did anything remotely improper. Unfortunately, you feel alone in this. Being the role model student made others resent you. You missed out on a lot of opportunities to increase your resume points, which you now regret. \n'
}
  else if (integrity >=5 && integrity<10){
    questions[58].room +='You cheated from time to time to get ahead, but you were not a chronic cheater. You never got caught, but you can feel a level of distrust from your teachers, whom cannot prove anything about you but have their suspicions. \n'
}
  else if (integrity <5){
    questions[58].room +='You cheated all the time. Your teachers know about it and even caught you a few times, but let it slide for the most part because most other students were also cheaters. \n'
}
  if (happiness >=10){
    questions[58].room +='By the time you left high school, you were a very happy and fulfilled person. Are you just happy to finally be done with high school? It doesn\'t matter, because either way, you feel internally at peace. \n'
}
  else if (happiness >=5 && happiness<10){
    questions[58].room +='You sacrificed your happiness to get ahead in high school, but made sure to treat yourself every so often. You are glad you are finally done with school and hope that you can regain some of the blissfulness you had before high school. \n'
}
  else if (happiness <5){
    questions[58].room +='You constantly abused yourself to try and get ahead in high school. You never really took a break from the grind, or took a moment just for yourself. You have paid dearly for it, and wonder whether you can ever be happy. \n'
}
  questions[58].room += 'You mentally broke down '+mental_breakdowns+' times. \n'
  questions[58].room += 'You led '+clubs_led+'/25 clubs. \n'
  questions[58].room += 'You saw '+essayDeckIndex+'/28 essays. \n'
  questions[58].room += 'You got '+recs_gotten+'/8 Teacher Recommendation letters. \n'
  questions[58].room += 'You saw '+currentPanderingDeckIndex+'/8 Pandering abilities. \n'
  questions[58].room += 'You saw '+currentCheatingDeckIndex+'/8 Cheating abilities. \n'
  questions[58].room += 'You studied '+study_counter+' times. \n'
  questions[58].room += 'You chatted '+chat_counter+' times. \n'
  questions[58].room += 'You socialized '+socialize_counter+' times. \n'
  questions[58].room += 'You relaxed '+relax_counter+' times. \n'
  questions[58].room += 'You saw '+finalFreshmanIndex+'/35 Freshman events. \n'
  questions[58].room += 'You saw '+finalSophomoreIndex+'/33 Sophomore events. \n'
  questions[58].room += 'You saw '+finalJuniorIndex+'/32 Junior events. \n'
  questions[58].room += 'You saw '+finalSeniorIndex+'/30 Senior events. \n'
  questions[58].room += 'You achieved the following achievements (highlighted in green): \n'
}

function do_effect() {
  if (currentEffect ==1){english_stat++}
  if (currentEffect ==2){math_stat++}
  if (currentEffect ==3){history_stat++}
  if (currentEffect ==4){science_stat++}
  if (currentEffect ==5){sleep--}
  if (currentEffect ==6){friends+=2}
  if (currentEffect ==7){checkPossibleGrades()}
  if (currentEffect ==8){yasse_influence+=3, english_stat-=2, resume_points+=1, english_grade="A", questions[5].answers[0].taken = 1, english_A++}
  if (currentEffect ==9){mathew_influence+=3, math_stat-=2, resume_points+=1, math_grade="A", questions[5].answers[1].taken = 1, math_A++}
  if (currentEffect ==10){terry_influence+=3, history_stat-=3, resume_points+=2, history_grade="A", questions[5].answers[2].taken = 1, history_A++}
  if (currentEffect ==11){fizzix_influence+=3, science_stat-=2, resume_points+=1, science_grade="A", questions[5].answers[3].taken = 1, science_A++}
  if (currentEffect ==12){stress-=2}
  if (currentEffect ==13){franklin_influence+=2}
  if (currentEffect ==14){knovel_influence+=2}
  if (currentEffect ==15){mathew_influence+=2}
  if (currentEffect ==16){terry_influence+=2}
  if (currentEffect ==17){fizzix_influence+=2}
  if (currentEffect ==18){friends++}
  if (currentEffect ==19){science_stat++,stress+=2}
  if (currentEffect ==20){happiness--,stress++}
  if (currentEffect ==21){stress++}
  if (currentEffect ==22){stress+=4}
  if (currentEffect ==23){stress++,happiness-=2}
  if (currentEffect ==24){stress--}
  if (currentEffect ==25){stress+=2}
  if (currentEffect ==26){friends-=2}
  if (currentEffect ==27){friends++,happiness--}
  if (currentEffect ==28){stress+=3}
  if (currentEffect ==29){stress-=3}
  if (currentEffect ==30){history_stat+=2}
  if (currentEffect ==31){friends+=1, stress+=1}
  if (currentEffect ==32){questions[1].answers[0].possible = 0}
  //if (currentEffect ==33){PANDERING} //purposely commented out, just a placeholder.
  //if (currentEffect ==34){CHEATING} //purposely commented out.
  if (currentEffect ==35){friends-=1}
  if (currentEffect ==36){questions[1].answers[0].text = "Curiosity (+2 stats, +1 stress)", questions[1].answers[0].correct = 14, sleep-=1, perm_sleep_loss+=1} //CURIOSITY
  if (currentEffect ==37){english_stat-=1}
  if (currentEffect ==38){knovel_influence-=3}
  if (currentEffect ==39){math_stat-=2}
  if (currentEffect ==40){science_stat-=2}
  if (currentEffect ==41){questions[1].answers[1].text = "Courage (+3 friends)", questions[1].answers[1].effect = 277, sleep-=1, perm_sleep_loss+=1} //COURAGE
  if (currentEffect ==42){questions[1].answers[3].text = "Compassion (-3 stress)", questions[1].answers[3].effect = 259, sleep-=1, perm_sleep_loss+=1} //COMPASSION
  if (currentEffect ==43){questions[46].answers[0].possible=1, questions[0].answers[5].possible=1} //STUD GOV PRES
  if (currentEffect ==44){questions[1].answers[2].text = "Character (+3 Teacher Influence)", questions[1].answers[2].correct = 15, sleep-=1, perm_sleep_loss+=1} //CHARACTER
  if (currentEffect ==45){franklin_influence+=10, happiness-=5}
  if (currentEffect ==46){knovel_influence+=10, happiness-=5}
  if (currentEffect ==47){mathew_influence+=10, happiness-=5}
  if (currentEffect ==48){terry_influence+=10, happiness-=5}
  if (currentEffect ==49){fizzix_influence+=10, happiness-=5}
  if (currentEffect ==50){resume_points+=5, integrity-=3}
  if (currentEffect ==51){english_stat+=2, stress++}
  if (currentEffect ==52){math_stat+=2, stress++}
  if (currentEffect ==53){history_stat+=2, stress++}
  if (currentEffect ==54){science_stat+=2, stress++}
  if (currentEffect ==55){friends+=3}
  if (currentEffect ==56){franklin_influence+=3}
  if (currentEffect ==57){knovel_influence+=3}
  if (currentEffect ==58){mathew_influence+=3}
  if (currentEffect ==59){terry_influence+=3}
  if (currentEffect ==60){fizzix_influence+=3}
  if (currentEffect ==61){friends+=5, happiness-=3}
  if (currentEffect ==62){sleep+=3, happiness-=4}
  if (currentEffect ==63){english_stat+=1, math_stat+=1, history_stat+=1, science_stat+=1, integrity-=2}
  if (currentEffect ==64){perm_sleep_loss-=4, integrity-=6}
  if (currentEffect ==65){stress-=10, integrity-=1}
  if (currentEffect ==66){mental_breakdowns_served+=1, resume_points-=5,sleep-=1,perm_sleep_loss+=1}
  if (currentEffect ==67){math_stat_delta+=2, mathew_influence+=6, resume_points+=3, friends-=8, questions[18].answers[0].possible=0, questions[18].answers[0].taken=1, clubs_led++, academic_counter++}
  if (currentEffect ==68){history_stat_delta+=2, terry_influence+=6, resume_points+=3, friends-=8, questions[18].answers[1].possible=0, questions[18].answers[1].taken=1, clubs_led++, academic_counter++}
  if (currentEffect ==69){english_stat_delta+=2, knovel_influence+=6, resume_points+=3, friends-=8, questions[18].answers[2].possible=0, questions[18].answers[2].taken=1, clubs_led++, academic_counter++}
  if (currentEffect ==70){checkClubCost_8()}
  if (currentEffect ==71){checkPossibleInfluence()}
  if (currentEffect ==72){drawClub(), franklin_influence-=3, friends+=2}
  if (currentEffect ==73){knovel_influence-=2, happiness+=1}
  if (currentEffect ==74){mathew_influence-=3, math_stat+=2}
  if (currentEffect ==75){fizzix_influence-=2, stress-=2}
  if (currentEffect ==76){terry_influence-=3}
  if (currentEffect ==77){friends_delta+=3, happiness+=1, resume_points+=2, friends-=7, questions[18].answers[3].possible=0, questions[18].answers[3].taken=1, clubs_led++, sport_counter++}
  if (currentEffect ==78){friends_delta+=2, stress-=4, math_stat+=1, resume_points+=1, friends-=6, questions[18].answers[4].possible=0, questions[18].answers[4].taken=1, clubs_led++, sport_counter++}
  if (currentEffect ==79){friends_delta+=4, resume_points+=1, friends-=6, drawClub(), questions[18].answers[5].possible=0, questions[18].answers[5].taken=1, sport_counter++}
  if (currentEffect ==80){franklin_influence_delta+=1, knovel_influence_delta+=1, mathew_influence_delta +=1, terry_influence_delta+=1, fizzix_influence_delta+=1, yasse_influence_delta+=1, graff_influence_delta+=1, hectare_influence_delta++, resume_points+=3, friends-=12, stress+=4, questions[18].answers[6].possible=0, questions[18].answers[6].taken=1, clubs_led++, art_counter++}
  if (currentEffect ==81){happiness_delta+=1, friends-=3, stress-=3, questions[18].answers[7].possible=0, questions[18].answers[7].taken=1, clubs_led++, recreation_counter++}
  if (currentEffect ==82){stress_delta+=1, stress+=1, friends-=3, resume_points+=3, questions[18].answers[8].possible=0, questions[18].answers[8].taken=1, clubs_led++, recreation_counter++}
  if (currentEffect ==83){science_stat_delta+=2, friends-=6, resume_points+=3, questions[18].answers[9].possible=0, questions[18].answers[9].taken=1, clubs_led++, academic_counter++}
  if (currentEffect ==84){english_stat_delta+=2, yasse_influence+=6, friends-=8, resume_points+=3, questions[18].answers[10].possible=0, questions[18].answers[10].taken=1, clubs_led++, academic_counter++}
  if (currentEffect ==85){history_stat_delta+=2, franklin_influence+=6, friends-=8, resume_points+=3, questions[18].answers[11].possible=0, questions[18].answers[11].taken=1, clubs_led++, academic_counter++}
  if (currentEffect ==86){science_stat_delta+=2, hectare_influence+=6, friends-=8, resume_points+=3, questions[18].answers[12].possible=0, questions[18].answers[12].taken=1, clubs_led++, academic_counter++}
  if (currentEffect ==87){science_stat_delta+=2, fizzix_influence+=6, friends-=8, resume_points+=3, questions[18].answers[13].possible=0, questions[18].answers[13].taken=1, clubs_led++, academic_counter++}
  if (currentEffect ==88){math_stat_delta+=2, graff_influence+=6, friends-=8, resume_points+=3, questions[18].answers[14].possible=0, questions[18].answers[14].taken=1, clubs_led++, academic_counter++}
  if (currentEffect ==89){stress_delta+=2, friends_delta+=2, math_stat+=3, friends-=3, resume_points-=1, questions[18].answers[15].possible=0, questions[18].answers[15].taken=1, clubs_led++, recreation_counter++} //POKER. CHANGE?
  if (currentEffect ==90){happiness_delta-=2, friends_delta+=2, happiness+=6, friends-=5, resume_points-=1, questions[18].answers[16].possible=0, questions[18].answers[16].taken=1, clubs_led++, recreation_counter++}
  if (currentEffect ==91){friends_delta-=4, friends+=4, resume_points-=1, questions[18].answers[17].possible=0, questions[18].answers[17].taken=1, clubs_led++, recreation_counter++}
  if (currentEffect ==92){friends-=5, resume_points+=1, happiness+=3, questions[18].answers[18].possible=0, questions[18].answers[18].taken=1, clubs_led++, art_counter++}
  if (currentEffect ==93){history_stat+=1, history_stat_delta+=1, friends-=3, resume_points+=0, questions[18].answers[19].possible=0, questions[18].answers[19].taken=1, clubs_led++, recreation_counter++}
  if (currentEffect ==94){stress-=4, stress_delta-=2, friends-=5, resume_points+=1, questions[18].answers[20].possible=0, questions[18].answers[20].taken=1, clubs_led++, art_counter++}
  if (currentEffect ==95){stress-=2, friends_delta+=3, friends-=5, resume_points+=1, questions[18].answers[21].possible=0, questions[18].answers[21].taken=1, clubs_led++, sport_counter++}
  if (currentEffect ==96){math_stat+=2, friends_delta+=3, friends-=8, resume_points+=2, questions[18].answers[22].possible=0, questions[18].answers[22].taken=1, clubs_led++, sport_counter++}
  if (currentEffect ==97){yasse_influence+=1, graff_influence+=1, franklin_influence+=1, hectare_influence+=1, knovel_influence+=1, mathew_influence+=1, terry_influence+=1, fizzix_influence+=1, friends_delta+=5, math_stat_delta-=1, friends-=9, resume_points+=3, questions[18].answers[23].possible=0, questions[18].answers[23].taken=1, clubs_led++, sport_counter++}
  if (currentEffect ==98){math_stat_delta+=1, integrity-=2, friends-=3, questions[18].answers[24].possible=0, questions[18].answers[24].taken=1, clubs_led++, checkForF(), recreation_counter++} //CODING CLUB
  if (currentEffect ==99){questions[45].room = 'Freshman year is finally over! No time to relax though, because Sophomore year is about to begin. You got the following bonuses: \n English Stat Added:' +english_stat_delta+' \n Math Stat Added: '+math_stat_delta+' \n History Stat Added: '+history_stat_delta+' \n Science Stat Added: '+science_stat_delta+' \n Franklin Influence Added: '+franklin_influence_delta+' \n Knovel Influence Added: '+knovel_influence_delta+' \n Mathew Influence Added: '+mathew_influence_delta+' \n Terry Influence Added: '+terry_influence_delta+' \n Fizzix Influence Added: '+fizzix_influence_delta+' \n Happiness Change: '+happiness_delta+' \n Friends Change: '+friends_delta+' \n Stress Change: '+stress_delta+' \n Low sleep stress penalty:' +(10-sleep)+' \n Low Happiness stress penalty:' +Math.floor((10-happiness)/2)+ ''}
  if (currentEffect ==100){end_of_year(), end_of_frosh_year(), shuffledFreshmanEvents=shuffledSophomoreEvents, finalFreshmanIndex=currentFreshmanEventIndex, currentFreshmanEventIndex=0, questions[0].answers[4].correct=50} //CHANGE JUNIOR: 
  if (currentEffect ==101){happiness-=2}
  if (currentEffect ==102){english_stat+=2}
  if (currentEffect ==103){math_stat+=2}
  if (currentEffect ==104){history_stat+=2}
  if (currentEffect ==105){science_stat+=2}
  if (currentEffect ==106){stress-=4}
  if (currentEffect ==107){science_stat+=1, history_stat+=1}
  if (currentEffect ==108){happiness+=1}
  if (currentEffect ==109){integrity-=1, friends-=1}
  if (currentEffect ==110){stress+=5}
  if (currentEffect ==111){questions[1].answers[1].possible = 0}
  if (currentEffect ==112){sleep-=1, perm_sleep_loss+=1}
  if (currentEffect ==113){yasse_influence+=5, english_stat-=3, resume_points+=1, english_grade="A", questions[5].answers[0].taken = 1, english_A++}
  if (currentEffect ==114){graff_influence+=5, math_stat-=3, resume_points+=1, math_grade="A", questions[5].answers[1].taken = 1, math_A++}
  if (currentEffect ==115){terry_influence+=6, history_stat-=4, resume_points+=2, history_grade="A", questions[5].answers[2].taken = 1, history_A++}
  if (currentEffect ==116){hectare_influence+=6, science_stat-=5, resume_points+=3, science_grade="A", questions[5].answers[3].taken = 1, science_A++}
  if (currentEffect ==117){sleep--, english_stat++}
  if (currentEffect ==118){friends-=2}
  if (currentEffect ==119){friends+=2, stress--}
  if (currentEffect ==120){if (english_grade=="F"){stress++} if (math_grade=="F"){stress++} if (history_grade=="F"){stress++} if (science_grade=="F"){stress++} }
  if (currentEffect ==121){questions[5].answers[0].possible=0, questions[5].answers[0].destroyed=1}
  if (currentEffect ==122){stress+=5, english_stat+=2}
  if (currentEffect ==123){english_stat-=3}
  if (currentEffect ==124){math_stat-=3}
  if (currentEffect ==125){history_stat-=3}
  if (currentEffect ==126){science_stat-=3}
  if (currentEffect ==127){questions[46].answers[1].possible=1, questions[0].answers[5].possible=1} //AMC
  if (currentEffect ==128){science_stat+=4, integrity-=1}
  if (currentEffect ==129){friends+=science_stat, integrity--}
  if (currentEffect ==130){drawClub()}
  if (currentEffect ==131){resume_points+=1, friends-=5, questions[47].answers[2].unlocked=1, questions[47].answers[3].possible=0, questions[47].answers[3].taken=1}
  if (currentEffect ==132){resume_points+=2, friends-=5, questions[47].answers[1].unlocked=1, questions[47].answers[2].possible=0, questions[47].answers[2].taken=1}
  if (currentEffect ==133){resume_points+=4, friends-=5, questions[47].answers[0].unlocked=1, questions[47].answers[1].possible=0, questions[47].answers[1].taken=1}
  if (currentEffect ==134){resume_points+=6, friends-=5, questions[47].answers[0].possible=0, questions[47].answers[0].taken=1}
  if (currentEffect ==135){checkSpecial()}
  if (currentEffect ==136){knovel_influence+=6, english_stat-=4, resume_points+=2, english_grade="A", questions[5].answers[0].taken = 1, english_A++}
  if (currentEffect ==137){mathew_influence+=6, math_stat-=4, resume_points+=2, math_grade="A", questions[5].answers[1].taken = 1, math_A++}
  if (currentEffect ==138){franklin_influence+=6, history_stat-=4, resume_points+=2, history_grade="A", questions[5].answers[2].taken = 1, history_A++}
  if (currentEffect ==139){fizzix_influence+=6, science_stat-=5, resume_points+=3, science_grade="A", questions[5].answers[3].taken = 1, science_A++}
  if (currentEffect ==140){end_of_year(),end_of_soph_year(), shuffledFreshmanEvents=shuffledJuniorEvents, finalSophomoreIndex=currentFreshmanEventIndex, currentFreshmanEventIndex=0, questions[0].answers[4].correct=57}
  if (currentEffect ==141){questions[50].room = 'Sophomore year is finally over! No time to relax though, because Junior year is about to begin. This year is special: starting now, you will be able to take the FUN, a standardized test used in the college admissions process. You got the following bonuses: \n English Stat Added:' +english_stat_delta+' \n Math Stat Added: '+math_stat_delta+' \n History Stat Added: '+history_stat_delta+' \n Science Stat Added: '+science_stat_delta+' \n Franklin Influence Added: '+franklin_influence_delta+' \n Knovel Influence Added: '+knovel_influence_delta+' \n Mathew Influence Added: '+mathew_influence_delta+' \n Terry Influence Added: '+terry_influence_delta+' \n Fizzix Influence Added: '+fizzix_influence_delta+' \n Happiness Change: '+happiness_delta+' \n Friends Change: '+friends_delta+' \n Stress Change: '+stress_delta+' \n Low sleep stress penalty:' +(10-sleep)+' \n Low Happiness stress penalty:' +Math.floor((10-happiness)/2)+ ''}
  if (currentEffect ==142){resume_points+=4, math_stat-=7, questions[48].answers[2].unlocked=1, questions[48].answers[3].possible=0, questions[48].answers[3].taken=1}
  if (currentEffect ==143){resume_points+=8, math_stat-=11, questions[48].answers[1].unlocked=1, questions[48].answers[2].possible=0, questions[48].answers[2].taken=1}
  if (currentEffect ==144){resume_points+=12, math_stat-=13, questions[48].answers[0].unlocked=1, questions[48].answers[1].possible=0, questions[48].answers[1].taken=1}
  if (currentEffect ==145){resume_points+=20, math_stat-=17, questions[48].answers[0].possible=0, questions[48].answers[0].taken=1}
  if (currentEffect ==146){math_stat+=3, history_stat-=3}
  if (currentEffect ==147){science_stat+=3, history_stat-=3}
  if (currentEffect ==148){questions[46].answers[3].possible=1, questions[0].answers[5].possible=1}// Physics Olympiad
  if (currentEffect ==149){if (math_stat>=2 && english_stat>=2 && history_stat>=2 && science_stat>=2){math_stat-=2, english_stat-=2, history_stat-=2, science_stat>=2, resume_points+=6}}
  if (currentEffect ==150){knovel_influence+=5}
  if (currentEffect ==151){mathew_influence+=5}
  if (currentEffect ==152){terry_influence+=5}
  if (currentEffect ==153){fizzix_influence+=5}
  if (currentEffect ==154){questions[46].answers[4].possible=1, questions[0].answers[5].possible=1} //D1 Athlete
  if (currentEffect ==155){if (integrity<5){questions[0].answers[1].possible=0}} //NO Teacher abilities
  if (currentEffect ==156){math_stat+=2,english_stat+=1}
  if (currentEffect ==157){friends+=3,stress-=3}
  if (currentEffect ==158){sleep-=3,math_stat+=3,english_stat+=3}
  if (currentEffect ==159){if(english_grade=="F"){english_grade="A", resume_points+=2, knovel_influence+=6, english_A++}}
  if (currentEffect ==160){questions[0].answers[2].possible=0}
  if (currentEffect ==161){stress+=5,happiness++}
  if (currentEffect ==162){questions[8].answers[7].possible=0, questions[4].answers[7].possible=0, questions[15].answers[7].possible=0} //TEACHER FIRED
  if (currentEffect ==163){friends-=5}
  if (currentEffect ==164){friends+=5, integrity-=1}
  if (currentEffect ==165){sleep+=1}
  if (currentEffect ==166){yasse_influence+=3}
  if (currentEffect ==167){graff_influence+=3}
  if (currentEffect ==168){hectare_influence+=3}
  if (currentEffect ==169){yasse_influence+=2}
  if (currentEffect ==170){graff_influence+=2}
  if (currentEffect ==171){hectare_influence+=2}
  if (currentEffect ==172){english_stat-=2}
  if (currentEffect ==173){history_stat-=2}
  if (currentEffect ==174){english_stat+=3, yasse_influence-=3}
  if (currentEffect ==175){math_stat+=3, yasse_influence-=3}
  if (currentEffect ==176){history_stat+=3, yasse_influence-=3}
  if (currentEffect ==177){science_stat+=3, yasse_influence-=3}
  if (currentEffect ==178){graff_influence-=3} //DRAW EVENT TOO.
  if (currentEffect ==179){hectare_influence-=4}
  if (currentEffect ==180){yasse_influence-=3}
  if (currentEffect ==181){yasse_influence+=10, happiness-=5}
  if (currentEffect ==182){graff_influence+=10, happiness-=5}
  if (currentEffect ==183){hectare_influence+=10, happiness-=5}
  if (currentEffect ==184){drawClub(),drawClub(),drawClub(), happiness-=1}
  if (currentEffect ==185){franklin_influence_delta+=1, knovel_influence_delta+=1, mathew_influence_delta +=1, terry_influence_delta+=1, fizzix_influence_delta+=1, yasse_influence_delta+=1, graff_influence_delta+=1, hectare_influence_delta++, happiness-=4}
  if (currentEffect ==186){math_stat+=3, english_stat+=2, resume_points+=3, happiness-=5}
  if (currentEffect ==187){english_stat_delta+=3, happiness-=3}
  if (currentEffect ==188){math_stat_delta+=3, happiness-=3}
  if (currentEffect ==189){history_stat_delta+=3, happiness-=3}
  if (currentEffect ==190){science_stat_delta+=3, happiness-=3}
  if (currentEffect ==191){franklin_influence+=8, integrity-=2}
  if (currentEffect ==192){knovel_influence+=8, integrity-=2}
  if (currentEffect ==193){mathew_influence+=8, integrity-=2}
  if (currentEffect ==194){terry_influence+=8, integrity-=2}
  if (currentEffect ==195){fizzix_influence+=8, integrity-=2}
  if (currentEffect ==196){yasse_influence+=8, integrity-=2}
  if (currentEffect ==197){graff_influence+=8, integrity-=2}
  if (currentEffect ==198){hectare_influence+=8, integrity-=2}
  if (currentEffect ==199){friends+=8, drawClub(), integrity-=2}
  if (currentEffect ==200){questions[57].room = 'Junior year is finally over! No time to relax though, because Senior year is about to begin. You got the following bonuses: \n English Stat Added:' +english_stat_delta+' \n Math Stat Added: '+math_stat_delta+' \n History Stat Added: '+history_stat_delta+' \n Science Stat Added: '+science_stat_delta+' \n Franklin Influence Added: '+franklin_influence_delta+' \n Knovel Influence Added: '+knovel_influence_delta+' \n Mathew Influence Added: '+mathew_influence_delta+' \n Terry Influence Added: '+terry_influence_delta+' \n Fizzix Influence Added: '+fizzix_influence_delta+' \n Happiness Change: '+happiness_delta+' \n Friends Change: '+friends_delta+' \n Stress Change: '+stress_delta+' \n Low sleep stress penalty:' +(10-sleep)+' \n Low Happiness stress penalty:' +Math.floor((10-happiness)/2)+ ''}
  if (currentEffect ==201){end_of_year(),end_of_junior_year(), shuffledFreshmanEvents=shuffledSeniorEvents, finalJuniorIndex=currentFreshmanEventIndex, currentFreshmanEventIndex=0}
  if (currentEffect ==202){yasse_influence+=6, english_stat-=4, resume_points+=2, english_grade="A", questions[5].answers[0].taken = 1, english_A++}
  if (currentEffect ==203){graff_influence+=6, math_stat-=4, resume_points+=2, math_grade="A", questions[5].answers[1].taken = 1, math_A++}
  if (currentEffect ==204){terry_influence+=6, history_stat-=4, resume_points+=2, history_grade="A", questions[5].answers[2].taken = 1, history_A++}
  if (currentEffect ==205){hectare_influence+=8, science_stat-=6, resume_points+=3, science_grade="A", questions[5].answers[3].taken = 1, science_A++}
  if (currentEffect ==206){friends+=7}
  if (currentEffect ==207){sleep-=2}
  if (currentEffect ==208){yasse_influence+=1, graff_influence+=1, franklin_influence+=1, hectare_influence+=1, knovel_influence+=1, mathew_influence+=1, terry_influence+=1, fizzix_influence+=1}
  if (currentEffect ==209){yasse_influence+=integrity}
  if (currentEffect ==210){graff_influence+=integrity}
  if (currentEffect ==211){terry_influence+=integrity}
  if (currentEffect ==212){hectare_influence+=integrity}
  if (currentEffect ==213){happiness+=2}
  if (currentEffect ==214){english_stat=0, math_stat=0}
  if (currentEffect ==215){history_stat=0, science_stat=0}
  if (currentEffect ==216){english_stat+=3}
  if (currentEffect ==217){math_stat+=3}
  if (currentEffect ==218){history_stat+=3}
  if (currentEffect ==219){science_stat+=3}
  if (currentEffect ==220){if (clubs_led > 5){resume_points-=5}}
  if (currentEffect ==221){friends-=4}
  if (currentEffect ==222){english_grade="A", resume_points+=questions[5].answers[0].reward, questions[5].answers[0].possible=0, english_A++}
  if (currentEffect ==223){math_grade="A", resume_points+=questions[5].answers[1].reward, questions[5].answers[0].possible=0, math_A++}
  if (currentEffect ==224){history_grade="A", resume_points+=questions[5].answers[2].reward, questions[5].answers[0].possible=0, history_A++}
  if (currentEffect ==225){science_grade="A", resume_points+=questions[5].answers[3].reward, questions[5].answers[0].possible=0, science_A++}
  if (currentEffect ==226){checkForF(), happiness-=3}
  if (currentEffect ==227){checkForF(), integrity-=1}
  if (currentEffect ==228){resume_points+=3, science_stat-=4, questions[59].answers[1].unlocked=1, questions[59].answers[2].possible=0, questions[59].answers[2].taken=1}
  if (currentEffect ==229){resume_points+=6, science_stat-=8, questions[59].answers[0].unlocked=1, questions[59].answers[1].possible=0, questions[59].answers[1].taken=1}
  if (currentEffect ==230){resume_points+=15, science_stat-=12, questions[59].answers[0].possible=0, questions[59].answers[0].taken=1}
  if (currentEffect ==231){resume_points+=15, friends-=30, questions[60].answers[0].possible=0, questions[60].answers[0].taken=1}
  if (currentEffect ==232){questions[61].answers[0].possible=0, questions[61].answers[0].taken=1} //VALEDICTORIAN
  if (currentEffect ==233){recs_gotten++, resume_points+=10, franklin_influence-=20, questions[9].answers[1].possible=0, questions[9].answers[1].taken=1}
  if (currentEffect ==234){recs_gotten++, resume_points+=6, knovel_influence-=16, questions[10].answers[1].possible=0, questions[10].answers[1].taken=1}
  if (currentEffect ==235){recs_gotten++, resume_points+=5, mathew_influence-=16, questions[11].answers[1].possible=0, questions[11].answers[1].taken=1}
  if (currentEffect ==236){recs_gotten++, resume_points+=7, terry_influence-=18, questions[12].answers[1].possible=0, questions[12].answers[1].taken=1}
  if (currentEffect ==237){recs_gotten++, resume_points+=4, fizzix_influence-=10, questions[13].answers[1].possible=0, questions[13].answers[1].taken=1}
  if (currentEffect ==238){recs_gotten++, resume_points+=8, graff_influence-=18, questions[54].answers[1].possible=0, questions[54].answers[1].taken=1}
  if (currentEffect ==239){recs_gotten++, resume_points+=9, hectare_influence-=20, questions[55].answers[1].possible=0, questions[55].answers[1].taken=1}
  if (currentEffect ==240){recs_gotten++, resume_points+=3, yasse_influence-=10, questions[51].answers[1].possible=0, questions[51].answers[1].taken=1}
  if (currentEffect ==241){take_FUN(), math_stat-=2, english_stat-=2, sleep-=1}
  if (currentEffect ==242){integrity-=2, FUN_bonus+=2}
  if (currentEffect ==243){integrity-=1, questions[49].answers[2].taken=1}
  if (currentEffect ==244){mathew_influence=0}
  if (currentEffect ==245){terry_influence=0}
  if (currentEffect ==246){questions[8].answers[4].possible=0, questions[4].answers[4].possible=0, questions[15].answers[4].possible=0}
  if (currentEffect ==247){questions[8].answers[2].possible=0, questions[4].answers[2].possible=0, questions[15].answers[2].possible=0}
  if (currentEffect ==248){questions[8].answers[5].possible=0, questions[4].answers[5].possible=0, questions[15].answers[5].possible=0}
  if (currentEffect ==249){math_stat+=5, integrity-=1}
  if (currentEffect ==250){if (integrity<3){resume_points-=10}}
  if (currentEffect ==251){finalSeniorIndex=currentFreshmanEventIndex, end_of_senior_year(), end_of_game_message()}
  if (currentEffect ==252){checkEssayPossible()}
  if (currentEffect ==253){drawEssay(),resume_points+=2,questions[63].answers[0].taken=1,questions[63].answers[0].possible=0}
  if (currentEffect ==254){drawEssay(),resume_points+=3,friends-=5,questions[63].answers[1].taken=1,questions[63].answers[1].possible=0}
  if (currentEffect ==255){drawEssay(),resume_points+=2,knovel_influence-=5,questions[63].answers[2].taken=1,questions[63].answers[2].possible=0}
  if (currentEffect ==256){drawEssay(),resume_points+=5,questions[63].answers[3].taken=1,questions[63].answers[3].possible=0}
  if (currentEffect ==257){drawEssay(),resume_points+=2,science_stat-=3,questions[63].answers[4].taken=1,questions[63].answers[4].possible=0}
  if (currentEffect ==258){stress-=2,relax_counter++}
  if (currentEffect ==259){stress-=3,relax_counter++}
  if (currentEffect ==260){checkEssayPossible(),questions[69].room='You write about something pointless and random. College admission officers love it! You must have relaxed at least 7 times this game to complete this essay. You have relaxed '+relax_counter+'/7 times so far.'}
  if (currentEffect ==261){drawEssay(),resume_points+=1,questions[63].answers[5].taken=1,questions[63].answers[5].possible=0}
  if (currentEffect ==262){drawEssay(), questions[63].answers[6].taken=1, questions[63].answers[6].possible=0}
  if (currentEffect ==263){drawEssay(), resume_points+=3, questions[63].answers[6].taken=1, questions[63].answers[6].possible=0}
  if (currentEffect ==264){drawEssay(), resume_points+=2, yasse_influence-=1, graff_influence-=1, franklin_influence-=1, hectare_influence-=1, knovel_influence-=1, mathew_influence-=1, terry_influence-=1, fizzix_influence-=1, questions[63].answers[7].taken=1, questions[63].answers[7].possible=0}
  if (currentEffect ==265){drawEssay(),resume_points+=4, history_stat-=4, questions[63].answers[8].taken=1,questions[63].answers[8].possible=0}
  if (currentEffect ==266){drawEssay(),resume_points+=4, questions[63].answers[9].taken=1,questions[63].answers[9].possible=0}
  if (currentEffect ==267){drawEssay(),resume_points+=3, questions[63].answers[10].taken=1,questions[63].answers[10].possible=0}
  if (currentEffect ==268){drawEssay(),resume_points+=2, questions[63].answers[11].taken=1,questions[63].answers[11].possible=0}
  if (currentEffect ==269){drawEssay(),resume_points+=1, questions[63].answers[12].taken=1,questions[63].answers[12].possible=0}
  if (currentEffect ==270){drawEssay(),resume_points+=2, questions[63].answers[13].taken=1,questions[63].answers[13].possible=0}
  if (currentEffect ==271){drawEssay(),resume_points-=2, happiness+=3, questions[63].answers[14].taken=1,questions[63].answers[14].possible=0}
  if (currentEffect ==272){drawEssay(),resume_points+=3, questions[63].answers[15].taken=1,questions[63].answers[15].possible=0}
  if (currentEffect ==273){drawEssay(),resume_points+=2, questions[63].answers[16].taken=1,questions[63].answers[16].possible=0}
  if (currentEffect ==274){drawEssay(),resume_points+=2, questions[63].answers[17].taken=1,questions[63].answers[17].possible=0}
  if (currentEffect ==275){drawEssay(),resume_points+=2, questions[63].answers[18].taken=1,questions[63].answers[18].possible=0}
  if (currentEffect ==276){friends+=2, socialize_counter++}
  if (currentEffect ==277){friends+=3, socialize_counter++}
  if (currentEffect ==278){chat_counter++}
  if (currentEffect ==279){study_counter++}
  if (currentEffect ==280){drawEssay(),resume_points+=1, questions[63].answers[19].taken=1,questions[63].answers[19].possible=0}
  if (currentEffect ==281){drawEssay(),resume_points+=1, questions[63].answers[20].taken=1,questions[63].answers[20].possible=0}
  if (currentEffect ==282){drawEssay(),resume_points+=1, questions[63].answers[21].taken=1,questions[63].answers[21].possible=0}
  if (currentEffect ==283){checkEssayPossible(),questions[83].room='Just in case they forgot, you remind your Admission officer that you are very smart. If you have studied 7 times during this game, you may complete this essay. You have studied '+study_counter+'/7 times so far.'}
  if (currentEffect ==284){checkEssayPossible(),questions[84].room='You brag about starting a company. You neglect to mention that your lemonade stand has not yet turned a profit. If you have socialized 7 times during this game, you may complete this essay. You have socialized '+socialize_counter+'/7 times so far.'}
  if (currentEffect ==285){checkEssayPossible(),questions[85].room='You write about how much time you spend volunteering. You neglect to mention that the mandatory graduation requirement is the only reason you volunteered at all. If you have chatted 7 times during this game, you may complete this essay. You have chatted '+chat_counter+'/7 times so far.'}
  if (currentEffect ==286){drawEssay(),resume_points+=2, questions[63].answers[22].taken=1,questions[63].answers[22].possible=0}
  if (currentEffect ==287){drawEssay(),resume_points+=1, questions[63].answers[23].taken=1,questions[63].answers[23].possible=0}
  if (currentEffect ==288){drawEssay(),resume_points+=1, questions[63].answers[24].taken=1,questions[63].answers[24].possible=0}
  if (currentEffect ==289){drawEssay(),resume_points+=1, questions[63].answers[25].taken=1,questions[63].answers[25].possible=0}
  if (currentEffect ==290){drawEssay(),resume_points+=1, questions[63].answers[26].taken=1,questions[63].answers[26].possible=0}
  if (currentEffect ==291){drawEssay(),resume_points+=2, questions[63].answers[27].taken=1,questions[63].answers[27].possible=0}
  if (currentEffect ==292){questions[46].answers[5].possible=1, questions[0].answers[5].possible=1}
  if (currentEffect ==293){drawEssay()}
  if (currentEffect ==294){drawEssay(),happiness-=3}
  if (currentEffect ==295){temp=0, temp=science_stat,science_stat=history_stat,history_stat=math_stat,math_stat=english_stat,english_stat=temp}
  if (currentEffect ==296){math_stat+=2,english_stat+=2,sleep-=1}
  if (currentEffect ==297){
    roll_result = Math.floor(Math.random()*2)
    if (roll_result == 0){english_stat+=6,math_stat+=6,history_stat+=6}
    if (roll_result == 1){stress+=20}  
  } 
  //if (english_stat<0){english_stat=0}
  //if (math_stat<0){math_stat=0}
  //if (history_stat<0){history_stat=0}
  //if (science_stat<0){science_stat=0}
  //if (knovel_influence<0){knovel_influence=0}
  //if (mathew_influence<0){mathew_influence=0}
  //if (terry_influence<0){terry_influence=0}
  //if (hectare_influence<0){hectare_influence=0}
  //if (yasse_influence<0){yasse_influence=0}
  //if (graff_influence<0){graff_influence=0}
  //if (fizzix_influence<0){fizzix_influence=0}
  //if (franklin_influence<0){franklin_influence=0}
  //if (friends<0){friends=0}
  if (stress<0){stress=0}
  if (happiness<0){happiness=0}
  if (happiness>10){happiness=10}
  if (integrity<0){integrity=0}
}

function do_event(thing) {
  questionElement.innerText = thing.event
  thing.options.forEach(option => {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('btn')
    button.dataset.effect = option.effect
    if (option.possible!=0){ //checks to make sure it is possible to select this option
      button.addEventListener('click', selectOption)
    }
    if (option.possible==0){
      setStatusClass(button)
    }
    answerButtonsElement.appendChild(button)
  })
  var img = document.createElement('img')
  img.src = thing.source
  img.style.width = "350px"
  imageElement.appendChild(img)

}

function selectOption(e) {
  const selectedButton = e.target
  const effect = selectedButton.dataset.effect
  Array.from(answerButtonsElement.children).forEach(button => {
    clearStatusClass(button)
  })
  setStatusClass(selectedButton)
  currentFreshmanEventIndex++
  currentEffect = effect
  do_effect()
  if (currentEffect == 33){
    setNextPandering()
    currentEffect=0
  }
  else if (currentEffect == 34){
    setNextCheating()
    currentEffect=0
  }
  else if ((currentEffect == 98) || (currentEffect == 226)){
    set_A()
    currentEffect=0
  }
  else if (currentEffect == 227){
    set_A()
    currentEffect=0
  }
  else{
    currentEffect=0
    setNextQuestion()
  }
}

function showQuestion(question) {
  questionElement.innerText = question.room
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    button.dataset.correct = answer.correct
    button.dataset.effect = answer.effect
    if (answer.possible!=0){ //checks to make sure it is possible to select this option
      button.addEventListener('click', selectAnswer)
    }
    answerButtonsElement.appendChild(button)
    if (answer.red==1){
      makeButtonRed(button)
    }
    if (answer.possible==0){
      setStatusClass(button)
    }
    if (answer.taken==1){
      makeButtonGreen(button)
    }
  })
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  const effect = selectedButton.dataset.effect
  Array.from(answerButtonsElement.children).forEach(button => {
    clearStatusClass(button)
  })
  setStatusClass(selectedButton)
  currentQuestionIndex = correct
  currentEffect = effect
  do_effect()
  if (currentEffect == 5 || currentEffect == 178){
    setNextEvent()
    currentEffect=0
  }
  else if (currentEffect == 33){
    setNextPandering()
    currentEffect=0
  }
  else if (currentEffect == 34){
    setNextCheating()
    currentEffect=0
  }
  else if ((currentEffect == 98) || (currentEffect == 226)){
    set_A()
    currentEffect=0
  }
  else if (currentEffect == 227){
    set_A()
    currentEffect=0
  }
  else{
  setNextQuestion()}
}

function do_pandering(thing) {
  questionElement.innerText = thing.event
  thing.options.forEach(option => {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('btn')
    button.dataset.effect = option.effect
    if (happiness >= option.cost){
      button.addEventListener('click', selectPandering)}
    if (happiness < option.cost){
      setStatusClass(button)
    }
    answerButtonsElement.appendChild(button)
  })
}

function selectPandering(e) {
  const selectedButton = e.target
  const effect = selectedButton.dataset.effect
  Array.from(answerButtonsElement.children).forEach(button => {
    clearStatusClass(button)
  })
  setStatusClass(selectedButton)
  currentPanderingDeckIndex++
  currentEffect = effect
  do_effect()
  if ((currentEffect == 98) || (currentEffect == 226)){
    set_A()
    currentEffect=0
  }
  else if (currentEffect == 227){
    set_A()
    currentEffect=0
  }
  currentEffect=0
  setNextQuestion()
}

function do_cheating(thing) {
  questionElement.innerText = thing.event
  thing.options.forEach(option => {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('btn')
    button.dataset.effect = option.effect
    if (integrity >= option.cost){
      button.addEventListener('click', selectCheating)}
    if (integrity < option.cost){
      setStatusClass(button)
    }
    answerButtonsElement.appendChild(button)
  })
}

function selectCheating(e) {
  const selectedButton = e.target
  const effect = selectedButton.dataset.effect
  Array.from(answerButtonsElement.children).forEach(button => {
    clearStatusClass(button)
  })
  setStatusClass(selectedButton)
  currentCheatingDeckIndex++
  currentEffect = effect
  do_effect()
  if ((currentEffect == 98) || (currentEffect == 226)){
    set_A()
    currentEffect=0
  }
  else if (currentEffect == 227){
    set_A()
    currentEffect=0
  }
  currentEffect=0
  setNextQuestion()
}

function resetState() {
  clearStatusClass(document.body)
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  while (imageElement.firstChild) {
    imageElement.removeChild(imageElement.firstChild)
  }
}


function setStatusClass(element) {
  clearStatusClass(element)
  element.classList.add('correct')
}

function makeButtonGreen(element) {
  element.classList.add('wrong')
}

function makeButtonRed(element) {
  element.classList.add('red')
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
  element.classList.remove('red')
}


////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////ROOMS/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


var questions = [
  {
    room: 'You are currently at home.', //0
    answers: [
      { text: 'Go to school (-1 Sleep)', correct: 1, effect: 5, possible: 1 },
      { text: 'View teachers', correct: 8, effect: 0 },
      { text: 'View clubs', correct: 18, effect: 0 },
      { text: 'Mental Breakdown', correct: 16, effect: 66, possible: 0, red: 0 },
      { text: 'End the year', correct: 45, effect: 99, possible: 0, red: 1 },
      { text: 'Special', correct: 46, effect: 0, possible: 0 },
      { text: 'College Essays', correct: 63, effect: 0, possible: 1 }
    ]
  },
  {
    room: 'You are at school.', //1
    answers: [
      { text: 'Study (+1 stat)', correct: 2, effect: 279, possible: 1 },
      { text: 'Socialize (+2 friends)', correct: 0, effect: 276, possible: 1 },
      { text: 'Chat with Teacher (+2 Teacher Influence)', correct: 4, effect: 278, possible: 1 },
      { text: 'Relax (-2 stress)', correct: 0, effect: 258 },
      { text: 'Improve Grade (Get an A)', correct: 5, effect: 7 }
    ]
  },
  {
    room: 'What to study?', //2
    answers: [
      { text: 'English', correct: 0, effect: 1 },
      { text: 'Math', correct: 0, effect: 2 },
      { text: 'History', correct: 0, effect: 3 },
      { text: 'Science', correct: 0, effect: 4 }
    ]
  },
  {
    room: 'You socialized and got 2 friends!', //3
    answers: [
      { text: 'Nice', correct: 0, effect: 6 }
    ]
  },
  {
    room: 'Which teacher would you like to chat with? You will get 2 teacher influence with that teacher.', //4
    answers: [
      { text: 'Franklin, the Principal', correct: 0, effect: 13 },
      { text: 'Knovel, the English teacher', correct: 0, effect: 14 },
      { text: 'Mathew, the Math teacher', correct: 0, effect: 15 },
      { text: 'Terry, the History teacher', correct: 0, effect: 16 },
      { text: 'Fizzix, the Science teacher', correct: 0, effect: 17 },
      { text: 'Yasse, an English teacher', correct: 0, effect: 169 },
      { text: 'Graff, a Math teacher', correct: 0, effect: 170 },
      { text: 'Hectare, a Science teacher', correct: 0, effect: 171 },
      { text: 'Go back', correct: 1, effect: 0 }
    ]
  },
  {
    room: 'Which class do you want to improve your grade in?', //5
    answers: [
      { text: 'English I (-2 English Stat, +1 Resume Point, +3 Yasse influence)', correct: 6, effect: 8, possible: 0, cost: 2, taken: 0, reward: 1, destroyed: 0 },
      { text: 'Algebra II (-2 Math Stat, +1 Resume Point, +3 Mathew influence)', correct: 6, effect: 9, possible: 0, cost: 2, taken: 0, reward: 1 },
      { text: 'TOP Human Geo (-3 History Stat, +2 Resume Points, +3 Terry influence)', correct: 6, effect: 10, possible: 0, cost: 3, taken: 0, reward: 2 },
      { text: 'Physics (-2 Science Stat, +1 Resume Point, +3 Fizzix influence)', correct: 6, effect: 11, possible: 0, cost: 2, taken: 0, reward: 1 },
      { text: 'Go Back', correct: 1, effect: 0 }
    ]
  },
  {
    room: 'After studying hard, you got an A! Immediately afterwards, all the knowledge you obtained left your brain. You got an A though, and that\'s what counts. You got Resume Point and teacher influence with your teacher.', //6
    answers: [
      { text: 'Great!', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'After studying hard, you got an A! Immediately afterwards, all the knowledge you obtained left your brain. You got an A though, and that\'s what counts. You got 2 Resume Points and 3 teacher influence with your teacher.', //7
    answers: [
      { text: 'Great!', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Which teacher do you want to see?', //8
    answers: [
      { text: 'Franklin, the Principal', correct: 9, effect: 71, possible: 1 },
      { text: 'Knovel, an English teacher', correct: 10, effect: 71, possible: 1 },
      { text: 'Mathew, a Math teacher', correct: 11, effect: 71, possible: 1 },
      { text: 'Terry, a History teacher', correct: 12, effect: 71, possible: 1 },
      { text: 'Fizzix, a Science teacher', correct: 13, effect: 71, possible: 1 },
      { text: 'Yasse, an English teacher', correct: 51, effect: 71, possible: 1 },
      { text: 'Graff, a Math teacher', correct: 54, effect: 71, possible: 1 },
      { text: 'Hectare, a Science teacher', correct: 55, effect: 71, possible: 1 },
      { text: 'Go back', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'You visit the principal. He says, \"A smart person like you should consider starting a club! I can help with that, if you would like.\" ', //9
    answers: [
      { text: 'I\'d like to start a club (-3 Influence, +2 friends, draw 1 club)', correct: 0, effect: 72, possible: 0 },
      { text: 'Can you write me a college rec letter? (-20 Influence, +10 resume points)', correct: 0, effect: 233, possible: 0, taken: 0 },
      { text: 'Never mind.', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'You visit your English teacher. She says, \"Students these days are too unhappy. I can tell you a good joke, if you\'d like?\" ', //10
    answers: [
      { text: 'Sure (-2 Influence, +1 happiness)', correct: 0, effect: 73, possible: 0 },
      { text: 'Can you write me a college rec letter? (-16 Influence, +6 resume points)', correct: 0, effect: 234, possible: 0, taken: 0 },
      { text: 'Never mind.', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'You visit your Math teacher. He says, \"Did you need some help with your homework?\" ', //11
    answers: [
      { text: 'Sure (-3 Influence, +2 math stat)', correct: 0, effect: 74, possible: 0 },
      { text: 'Can you write me a college rec letter? (-16 Influence, +5 resume points)', correct: 0, effect: 235, possible: 0, taken: 0 },
      { text: 'Never mind.', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'You visit your History teacher. He says, \"I have a lot of wisdom to pass onto you. Don\'t make the same mistakes I did, kid." ', //12
    answers: [
      { text: 'Receive life advice (-3 Influence, +life advice)', correct: 21, effect: 76, possible: 0 },
      { text: 'Can you write me a college rec letter? (-18 Influence, + 7 Resume points)', correct: 0, effect: 236, possible: 0, taken: 0 },
      { text: 'Never mind.', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'You visit your Science teacher. She says, \"You look stressed. How about I postpone the test?\" ', //13
    answers: [
      { text: 'Sure (-2 Influence, -2 stress)', correct: 0, effect: 75, possible: 0 },
      { text: 'Can you write me a college rec letter? (-10 Influence, + 4 Resume Points)', correct: 0, effect: 237, possible: 0, taken: 0 },
      { text: 'Never mind.', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Your curiosity allows you to study much more efficiently, but also makes you a bit stressed. Which stat do you want to study in?', //14
    answers: [
      { text: 'English', correct: 0, effect: 51 },
      { text: 'Math', correct: 0, effect: 52 },
      { text: 'History', correct: 0, effect: 53 },
      { text: 'Science', correct: 0, effect: 54 }
    ]
  },
  {
    room: 'Your Character makes your teachers like you more. Which teacher would you like to chat with? You will get 3 teacher influence with that teacher.', //15
    answers: [
      { text: 'Franklin, the Principal', correct: 0, effect: 56 },
      { text: 'Knovel, an English teacher', correct: 0, effect: 57 },
      { text: 'Mathew, a Math teacher', correct: 0, effect: 58 },
      { text: 'Terry, a History teacher', correct: 0, effect: 59 },
      { text: 'Fizzix, a Science teacher', correct: 0, effect: 60 },
      { text: 'Yasse, an English teacher', correct: 0, effect: 166 },
      { text: 'Graff, a Math teacher', correct: 0, effect: 167 },
      { text: 'Hectare, a Science teacher', correct: 0, effect: 168 },
      { text: 'Go back', correct: 1, effect: 0 }
    ]
  },
  {
    room: 'You got 10 stress, which caused you to have a mental breakdown. This reduced your resume points by 5, and also reduced your sleep and permanent sleep by 1. It also reduced your stress back down to 0.', //16
    answers: [
      { text: 'Ready to go back to school...? ', correct: 0, effect: 0},
    ]
  },
  {
    room: 'Math Team: A cult of students who dream in coordinates. Leading this club gives you 6 mathew influence and 3 Resume Points. It also gives you 2 math stat at the end of each year. It costs 8 friends.', //17
    answers: [
      { text: 'Buy leadership (-8 friends)', correct: 0, effect: 67, possible: 0 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'You are viewing a list of the clubs at your school. If one is currently unavailable, try starting it! The easiest way to start a club is to talk with Franklin, the principal.', //18
    answers: [
      { text: 'Math Team (Academic, +2 math/year)', correct: 17, effect: 70, possible: 0, taken: 0 },
      { text: 'Debate (Academic, +2 history/year)', correct: 19, effect: 70, possible: 0, taken: 0 },
      { text: 'Model UN (Academic, +2 english/year)', correct: 20, effect: 70, possible: 0, taken: 0 },
      { text: 'Soccer (Sport, +3 friends/year)', correct: 23, effect: 70, possible: 0, taken: 0 },
      { text: 'Ultimate Frisbee (Sport, +2 friends/year)', correct: 24, effect: 0, possible: 0, taken: 0 },
      { text: 'Ping Pong (Sport, +4 friends/year)', correct: 25, effect: 70, possible: 0, taken: 0},
      { text: 'Theater (Arts, +8 influence/year)', correct: 26, effect: 70, possible: 0, taken: 0 },
      { text: 'Video Gaming Society (Recreation, +1 happiness/year)', correct: 27, effect: 70, possible: 0, taken: 0 },
      { text: 'Investing Club (Recreation, +1 stress/year)', correct: 28, effect: 70, possible: 0, taken: 0 },
      { text: 'Environmental Club (Academic, +2 science/year)', correct: 29, effect: 70, possible: 0, taken: 0 },
      { text: 'Poetry Slam (Academic, +2 english/year)', correct: 30, effect: 70, possible: 0, taken: 0 },
      { text: 'Scholastic Bowl (Academic, +2 history/year)', correct: 31, effect: 70, possible: 0, taken: 0 },
      { text: 'Science Olympiad (Academic, +2 science/year)', correct: 32, effect: 70, possible: 0, taken: 0 },
      { text: 'Robotics (Academic, +2 science/year)', correct: 33, effect: 70, possible: 0, taken: 0 },
      { text: 'Chess Team (Academic, +2 math/year)', correct: 34, effect: 70, possible: 0, taken: 0 },
      { text: 'Poker (Recreation, ???/year)', correct: 35, effect: 70, possible: 0, taken: 0 },
      { text: 'Personal Fan Club (Recreation, -2 happiness +2 friends/year)', correct: 36, effect: 70, possible: 0, taken: 0 },
      { text: 'Meme Connoisseurs (Recreation, -4 friends/year)', correct: 37, effect: 70, possible: 0, taken: 0 },
      { text: 'Yoga (Arts)', correct: 38, effect: 70, possible: 0, taken: 0 },
      { text: 'TV and Film Appreciation (Recreation, +1 history/year)', correct: 39, effect: 70, possible: 0, taken: 0 },
      { text: 'Tea and Meditation (Arts, -2 stress/year)', correct: 40, effect: 70, possible: 0, taken: 0 },
      { text: 'Cross Country (Sport, +3 friends/year)', correct: 41, effect: 70, possible: 0, taken: 0 },
      { text: 'Basketball (Sport, +3 friends/year)', correct: 42, effect: 70, possible: 0, taken: 0 },
      { text: 'Football (Sport, +5 friends -1 math/year)', correct: 43, effect: 70, possible: 0, taken: 0 },
      { text: 'Coding Club (Recreation, +1 math/year)', correct: 44, effect: 70, possible: 0, taken: 0 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Debate: Those in Debate will do anything to win an argument. Leading this club gives you 6 Terry influence and 3 Resume Points. It also gives you 2 history stat at the end of each year. It costs 8 friends.', //19
    answers: [
      { text: 'Buy leadership (-8 friends)', correct: 0, effect: 68, possible: 0 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Model UN: Roleplaying, but without the stigma. Leading this club gives you 6 Knovel influence and 3 Resume Points. It also gives you 2 English stat at the end of each year. It costs 8 friends.', //20
    answers: [
      { text: 'Buy leadership (-8 friends)', correct: 0, effect: 69, possible: 0 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Terry seems to appreciate the company. He says, \"What do you want to know more about?\"', //21
    answers: [
      { text: 'Ends justifying the means (+cheating)', correct: 0, effect: 34 },
      { text: 'Relationships (+pandering)', correct: 0, effect: 33 }
    ]
  },
  {
    room: 'No more of this type of ability exists! There is no more for you to learn.', //22
    answers: [
      { text: 'Ok', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Soccer: The real Football sport. Leading this club will give you +1 Happiness and 2 Resume Points. It also gives you 3 friends at the end of each year. It costs 7 friends.', //23
    answers: [
      { text: 'Buy leadership (-7 friends)', correct: 0, effect: 77, possible: 0, cost: 7 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Ultimate Frisbee: Because just \"frisbee\" is not catchy enough. Leading this club gives you -4 stress, +1 math stat, and 1 Resume Point. It also gives you 2 friends at the end of each year. It costs 6 friends.', //24
    answers: [
      { text: 'Buy leadership (-6 friends)', correct: 0, effect: 78, possible: 0, cost: 6 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Ping pong: Because the school couldn\'t afford to purchase an actual tennis court. Leading this club makes another club available and gives you 1 Resume Point. It also gives you 4 friends at the end of each year. It costs 6 friends.', //25
    answers: [
      { text: 'Buy leadership (-6 friends)', correct: 0, effect: 79, possible: 0, cost: 6 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Theater: Those in theater are constantly trying to get people to buy tickets to their shows: unfortunately, everyone is busy. Leading this club is stressful, and gives you +4 stress, but 3 Resume Points. It also gives you 1 teacher influence with every teacher at the end of each year. It costs 12 friends.', //26
    answers: [
      { text: 'Buy leadership (-12 friends)', correct: 0, effect: 80, possible: 0, cost: 12 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Video Gaming Society: You keep telling yourself that the time you spend playing video games will one day pay off when you quit school to become a professional gamer. Leading this club reduces your stress by 3. It also gives you 1 happiness at the end of each year. It costs 3 friends.', //27
    answers: [
      { text: 'Buy leadership (-3 friends)', correct: 0, effect: 81, possible: 0, cost: 3 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Investing club: You have dreams of making millions on the stock market. Instead, you lose your parents\' hard earned money. Leading this club gives you +1 stress immediately, and also +1 stress at the end of each year. It also gives you 2 Resume Points. It costs 3 friends.', //28
    answers: [
      { text: 'Buy leadership (-3 friends)', correct: 0, effect: 82, possible: 0, cost: 3 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Environmental club: You make everyone else check their carbon footprint! Leading this club gives you +2 science stat at the end of each year. It also gives you 3 Resume Points. It costs 6 friends.', //29
    answers: [
      { text: 'Buy leadership (-6 friends)', correct: 0, effect: 83, possible: 0, cost: 6 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Poetry Slam: Because Poetry Dribbling is not enough. Leading this club gives you +6 Yasse influence and 3 Resume Points. It also gives you +2 English Stat at the end of each year. It costs 8 friends.', //30
    answers: [
      { text: 'Buy leadership (-8 friends)', correct: 0, effect: 84, possible: 0, cost: 8 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Scholastic Bowl: You now know more than you ever wanted to know. Leading this club gives you +6 Franklin influence and 3 Resume Points. It also gives you +2 History Stat at the end of each year. It costs 8 friends.', //31
    answers: [
      { text: 'Buy leadership (-8 friends)', correct: 0, effect: 85, possible: 0, cost: 8 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Science Olympiad: It is surprising that the Olympics have not sued Science Olympiad for copyright infringement. Leading this club gives you +6 Hectare influence and 3 Resume Points. It also gives you +2 Science Stat at the end of each year. It costs 8 friends.', //32
    answers: [
      { text: 'Buy leadership (-8 friends)', correct: 0, effect: 86, possible: 0, cost: 8 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Robotics: A team for students wanting to stay relevant in the 22nd century economy. Leading this club gives you +6 Fizzix influence and 3 Resume Points. It also gives you +2 Science Stat at the end of each year. It costs 8 friends.', //33
    answers: [
      { text: 'Buy leadership (-8 friends)', correct: 0, effect: 87, possible: 0, cost: 8 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Chess Team: A club for pawns. Leading this club gives you +6 Graff influence and 3 Resume Points. It also gives you +2 Math Stat at the end of each year. It costs 8 friends.', //34
    answers: [
      { text: 'Buy leadership (-8 friends)', correct: 0, effect: 88, possible: 0, cost: 8 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Poker: An underground gambling club. College admission officers think that the members of this club are delinquents! Leading this club gives you an unknown effect, and also makes you lose 1 Resume Point. It costs 3 friends.', //35
    answers: [
      { text: 'Buy leadership (-3 friends)', correct: 0, effect: 89, possible: 0, cost: 3},
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Personal Fan Club: A club for all of your personal fans!. Leading this club gives you +6 Happiness, but makes you lose 1 Resume Point. It also gives you +2 friends, but reduces your Happiness by 2 at the end of each year. It costs 5 friends.', //36
    answers: [
      { text: 'Buy leadership (-5 friends)', correct: 0, effect: 90, possible: 0, cost: 5 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Meme Connoisseurs: A very popular club among freshmen, but colleges think it is simply immature. Leading this club gives you +8 Friends, but makes you lose 1 Resume Point. It also makes you lose 4 friends at the end of each year. It costs 4 friends.', //37
    answers: [
      { text: 'Buy leadership (-4 friends)', correct: 0, effect: 91, possible: 0, cost: 4 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Yoga: People who join this club may be spreading themselves too thin... both literally and figuratively. Leading this club gives you +3 Happiness and gives you 1 Resume Point. It costs 5 friends.', //38
    answers: [
      { text: 'Buy leadership (-5 friends)', correct: 0, effect: 92, possible: 0, cost: 5 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'TV and Film Appreciation: Instead of watching movies at home, you watch them at school! Leading this club gives you +1 History stat. It also gives you +1 History stat at the end of each year. It costs 3 friends.', //39
    answers: [
      { text: 'Buy leadership (-3 friends)', correct: 0, effect: 93, possible: 0, cost: 3 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Tea and Meditation: 40 minutes of peace and quiet... the perfect environment to get some homework done. Leading this club reduces your stress by 4 and gives you 1 Resume Point. It also reduces your stress at the end of each year by 2. It costs 5 friends.', //40
    answers: [
      { text: 'Buy leadership (-5 friends)', correct: 0, effect: 94, possible: 0, cost: 5 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Cross Country: People who join this club can run away from their problems. Leading this club reduces your stress by 2 and gives you 1 Resume Point. It also gives you 3 friends at the end of each year. It costs 5 friends.', //41
    answers: [
      { text: 'Buy leadership (-5 friends)', correct: 0, effect: 95, possible: 0, cost: 5 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Basketball: Practice shooting has increased your math ability. Leading this club gives you +2 math stat and gives you 2 Resume Points. It also gives you 3 friends at the end of each year. It costs 8 friends.', //42
    answers: [
      { text: 'Buy leadership (-8 friends)', correct: 0, effect: 96, possible: 0, cost: 8 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Football: After headbutting people all day, members of this club have trouble remembering things. Leading this club gives you +1 teacher influence with every teacher and 3 Resume Points. It also gives you 5 friends at the end of each year, but you lose 1 math stat. It costs 9 friends.', //43
    answers: [
      { text: 'Buy leadership (-9 friends)', correct: 0, effect: 97, possible: 0, cost: 9 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Coding Club: Members of this club can hack into gradebook and change their grades to an A. Leading this club reduces your integrity by 2, but allows you to choose a class you have an F in and immediately make it an A (This integrity loss is mandatory, even if you have all A\'s). It also gives you 1 math stat at the end of each year. It costs 3 friends.', //44
    answers: [
      { text: 'Buy leadership (-3 friends)', correct: 0, effect: 98, possible: 0, cost: 3 },
      { text: 'Never mind', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'placeholder value', //45
    answers: [
      { text: 'Proceed to Sophomore Year', correct: 0, effect: 100, possible: 1 }
    ]
  },
  {
    room: 'You can do some special activities.', //46
    answers: [
      { text: 'Student Government', correct: 47, effect: 135, possible: 0 },
      { text: 'AMC', correct: 48, effect: 135, possible: 0 },
      { text: 'The FUN', correct: 49, effect: 135, possible: 0 },
      { text: 'Physics Olympiad', correct: 59, effect: 135, possible: 0 },
      { text: 'Athletic Scholarship', correct: 60, effect: 135, possible: 0 },
      { text: 'Valedictorian', correct: 61, effect: 135, possible: 0 },
      { text: 'Never mind', correct: 0, effect: 0}
    ]
  },
  {
    room: 'Student government is a ruthless organization where only the most skilled politicians will succeed. Starting from the bottom ranks, you must work your way up by using the most important resource of them all: connections. Resume points earned are cumulative.', //47
    answers: [
      { text: 'Be elected as president (-5 friends, +6 Resume Points)', correct: 0, effect: 134, possible: 0, taken: 0, cost: 5, unlocked: 0 },
      { text: 'Be elected as vice president (-5 friends, +4 Resume Points)', correct: 0, effect: 133, possible: 0, taken: 0, cost: 5, unlocked: 0 },
      { text: 'Be elected as treasurer (-5 friends, +2 Resume Points)', correct: 0, effect: 132, possible: 0, taken: 0, cost: 5, unlocked: 0 },
      { text: 'Be elected to the student government (-5 friends, +1 Resume Points)', correct: 0, effect: 131, possible: 1, taken: 0, cost: 5, unlocked: 1 },
      { text: 'Never mind', correct: 0, effect: 0}
    ]
  },
  {
    room: 'The AMC is the first step towards qualifying to the US\'s International Math Olympiad Team. People say that it is impossible to do, but if you make it then it will surely be an impressive thing to write on your resume.', //48
    answers: [
      { text: 'Make the US International Math Olympiad Team (-17 math stat, +20 Resume Points)', correct: 0, effect: 145, possible: 0, taken: 0, cost: 17, unlocked: 0 },
      { text: 'Do well on the USAMO (-13 math stat, +12 Resume Points)', correct: 0, effect: 144, possible: 0, taken: 0, cost: 13, unlocked: 0 },
      { text: 'Do well on the AIME (-11 math stat, +8 Resume Points)', correct: 0, effect: 143, possible: 0, taken: 0, cost: 11, unlocked: 0 },
      { text: 'Do well on the AMC (-7 math stat, +4 Resume Points)', correct: 0, effect: 142, possible: 1, taken: 0, cost: 7, unlocked: 1 },
      { text: 'Never mind', correct: 0, effect: 0}
    ]
  },
  {
    room: 'The FUN, or For University Needs, is a standardized test widely used for college admissions. You must do well on this test in order to get into a good college. Taking the FUN gives you a random chance of obtaining any one of the 4 scores. Luckily, you can take it multiple times, and only your highest score counts. The resume points you obtain from the FUN will only be added at the very end of the game.', //49
    answers: [
      { text: 'Obtain a perfect score of 36 (10 Resume Points)', correct: 0, effect: 0, possible: 0, taken: 0},
      { text: 'Obtain a score of 35 (8 Resume Points)', correct: 0, effect: 0, possible: 0, taken: 0},
      { text: 'Obtain a score of 34 (4 Resume Points)', correct: 0, effect: 0, possible: 0, taken: 0},
      { text: 'Obtain a score of 0 (0 Resume Points)', correct: 0, effect: 0, possible: 0, taken: 0},
      { text: 'Take the FUN (-2 math, -2 english, -1 sleep)', correct: 0, effect: 241, possible: 1},
      { text: 'Never mind', correct: 0, effect: 0}
    ]
  },
  {
    room: 'placeholder value', //50
    answers: [
      { text: 'Proceed to Junior Year', correct: 0, effect: 140, possible: 1 }
    ]
  },
  {
    room: 'You visit your English teacher. She says, \"Students like you have infinite possibilities. Never commit yourself to just one path, and keep on learning!\" ', //51
    answers: [
      { text: 'Rearrange my stats (-3 Influence, -2 stat, +3 stat)', correct: 52, effect: 71, possible: 1 },
      { text: 'Can you write me a college rec letter? (-10 Influence, + 3 resume points)', correct: 0, effect: 240, possible: 0, taken: 0 },
      { text: 'Never mind.', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'Which stat would you like to lose 2 in?\" (You must have at least 2 stats to use this ability.)', //52
    answers: [
      { text: 'English stat', correct: 53, effect: 172, possible: 1 },
      { text: 'Math stat', correct: 53, effect: 39, possible: 1 },
      { text: 'History stat', correct: 53, effect: 173, possible: 1 },
      { text: 'Science stat', correct: 53, effect: 40, possible: 1 },
      { text: 'Never mind.', correct: 51, effect: 0 }
    ]
  },
  {
    room: 'Which stat would you like to gain 3 in?\" ', //53
    answers: [
      { text: 'English stat', correct: 0, effect: 174, possible: 1 },
      { text: 'Math stat', correct: 0, effect: 175, possible: 1 },
      { text: 'History stat', correct: 0, effect: 176, possible: 1 },
      { text: 'Science stat', correct: 0, effect: 177, possible: 1 }
    ]
  },
  {
    room: 'You visit your Math teacher. She says, \"Have you heard the latest news? You must be out of the loop!\" ', //54
    answers: [
      { text: 'Draw an event card (+event)', correct: 0, effect: 178, possible: 1 },
      { text: 'Can you write me a college rec letter? (-18 Influence, + 8 resume points)', correct: 0, effect: 238, possible: 0, taken: 0 },
      { text: 'Never mind.', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'You visit your Science teacher. She says, \"Do you have any interesting gossip for me?\" ', //55
    answers: [
      { text: 'Gossip (-4 hectare influence, +3 teacher influence)', correct: 56, effect: 179, possible: 1 },
      { text: 'Can you write me a college rec letter? (-20 Influence, + 9 resume points)', correct: 0, effect: 239, possible: 0, taken:0 },
      { text: 'Never mind.', correct: 0, effect: 0 }
    ]
  },
  {
    room: 'You tell your Science teacher some stories that paint you in a good light. She says, \"That\'s super interesting! I will have to go tell some of my colleagues about this.\" ', //56
    answers: [
      { text: 'Tell Franklin ( +3 teacher influence)', correct: 0, effect: 56, possible: 1 },
      { text: 'Tell Knovel ( +3 teacher influence)', correct: 0, effect: 57, possible: 1 },
      { text: 'Tell Mathew ( +3 teacher influence)', correct: 0, effect: 58, possible: 1 },
      { text: 'Tell Terry ( +3 teacher influence)', correct: 0, effect: 59, possible: 1 },
      { text: 'Tell Fizzix ( +3 teacher influence)', correct: 0, effect: 60, possible: 1 },
      { text: 'Tell Yasse ( +3 teacher influence)', correct: 0, effect: 166, possible: 1 },
      { text: 'Tell Graff ( +3 teacher influence)', correct: 0, effect: 167, possible: 1 },
    ]
  },
  {
    room: 'placeholder value', //57
    answers: [
      { text: 'Proceed to Senior Year', correct: 0, effect: 201, possible: 1 }
    ]
  },
  {
    room: 'placeholder value. Good game!', //58
    answers: [
      { text: 'Achievement: Perfect Integrity', correct: 0, effect: 0, possible: 0, taken: 0 },
      { text: 'Achievement: Full Happiness at game end', correct: 0, effect: 0, possible: 0, taken: 0 },
      { text: 'Achievement: Perfect FUN score', correct: 0, effect: 0, possible: 0, taken: 0 },
      { text: 'Achievement: Be President of Student Government', correct: 0, effect: 0, possible: 0, taken: 0 },
      { text: 'Achievement: Qualify for the USAMO Team', correct: 0, effect: 0, possible: 0, taken: 0 },
      { text: 'Achievement: Qualify for the USAPO Team', correct: 0, effect: 0, possible: 0, taken: 0 },
      { text: 'Achievement: Be a D1 Sports Scholar', correct: 0, effect: 0, possible: 0, taken: 0 },
      { text: 'Achievement: Be Valedictorian', correct: 0, effect: 0, possible: 0, taken: 0 }
    ]
  },
  {
    room: 'The Physics Olympiad is the first step towards qualifying to the US\'s International Physics Olympiad Team. People say that it is impossible to do, but if you make it then it will surely be an impressive thing to write on your resume.', //59
    answers: [
      { text: 'Make the US International Physics Olympiad Team (-12 science stat, +15 Resume Points)', correct: 0, effect: 230, possible: 0, taken: 0, cost: 12, unlocked: 0 },
      { text: 'Do well on the USAPhO exam (-8 science stat, +6 Resume Points)', correct: 0, effect: 229, possible: 0, taken: 0, cost: 8, unlocked: 0 },
      { text: 'Do well on the F=MA exam (-4 science stat, +3 Resume Points)', correct: 0, effect: 228, possible: 1, taken: 0, cost: 4, unlocked: 1 },
      { text: 'Never mind', correct: 0, effect: 0}
    ]
  },
  {
    room: 'Getting an Athletic scholarship takes a ton of effort, work, and connections. People say it is impossible to do, but if you make it then you will have a huge leg up in admissions.', //60 //athletic scholarship
    answers: [
      { text: 'Get a D1 sports scholarship (-30 friends, +15 Resume Points)', correct: 0, effect: 231, possible: 0, taken: 0, cost: 30},
      { text: 'Never mind', correct: 0, effect: 0}
    ]
  },
  {
    room: 'You can be the valedictorian if you got A\'s in every class you ever took.', //61
    answers: [
      { text: 'Become Valedictorian (???)', correct: 62, effect: 232, possible: 0, taken: 0},
      { text: 'Never mind', correct: 0, effect: 0}
    ]
  },
  {
    room: 'Through blood, sweat, and tears, you reign on top. Nobody else has a GPA as high as yours. You became the valedictorian!!! \n \n For some reason, you feel empty inside...', //62
    answers: [
      { text: 'I worked so hard, yet gained nothing (+0 resume points)', correct: 0, effect: 0}
    ]
  },
  {
    room: 'You must write college essays as a part of your college application. You are encouraged to write them as soon as possible! Completing an essay gives you Resume Points and allows you to begin writing another essay.', //63
    answers: [
      { text: 'Plagiarized Essay (+2 resume points)', correct: 64, effect: 252, possible: 0, taken: 0},
      { text: 'Submit Picture (+3 resume points)', correct: 65, effect: 252, possible: 0, taken: 0},
      { text: 'Brilliant Satire (+2 resume points)', correct: 66, effect: 252, possible: 0, taken: 0},
      { text: 'Hardship (+5 resume points)', correct: 67, effect: 252, possible: 0, taken: 0},
      { text: 'Belief Challenged (+2 resume points)', correct: 68, effect: 252, possible: 0, taken: 0},
      { text: 'Banana Essay (+1 resume points)', correct: 69, effect: 260, possible: 0, taken: 0},
      { text: 'Writer\'s Block (+0/+3 resume points)', correct: 70, effect: 252, possible: 0, taken: 0},
      { text: 'Edited Essay (+2 resume points)', correct: 71, effect: 252, possible: 0, taken: 0},
      { text: 'Favorite Color (+4 resume points)', correct: 72, effect: 252, possible: 0, taken: 0},
      { text: 'Magnum Opus (+4 resume points)', correct: 73, effect: 252, possible: 0, taken: 0},
      { text: '11:59 Essay (+3 resume points)', correct: 74, effect: 252, possible: 0, taken: 0},
      { text: 'Bribe (+2 resume points)', correct: 75, effect: 252, possible: 0, taken: 0},
      { text: 'Found Bigfoot! (+1 resume point)', correct: 76, effect: 252, possible: 0, taken: 0},
      { text: 'I Love Learning (+2 resume points)', correct: 77, effect: 252, possible: 0, taken: 0},
      { text: 'Long Rant (-2 resume points)', correct: 78, effect: 252, possible: 0, taken: 0},
      { text: 'A Poem (+3 resume points)', correct: 79, effect: 252, possible: 0, taken: 0},
      { text: 'Wrong Name (+2 resume points)', correct: 80, effect: 252, possible: 0, taken: 0},
      { text: 'Political Essay (+2 resume points)', correct: 81, effect: 252, possible: 0, taken: 0},
      { text: 'Favorite Book (+2 resume points)', correct: 82, effect: 252, possible: 0, taken: 0},
      { text: 'I am Smart (+1 resume point)', correct: 83, effect: 283, possible: 0, taken: 0},
      { text: 'Started a Company (+1 resume point)', correct: 84, effect: 284, possible: 0, taken: 0},
      { text: 'Volunteering (+1 resume point)', correct: 85, effect: 285, possible: 0, taken: 0},
      { text: 'Leadership (+2 resume points)', correct: 86, effect: 252, possible: 0, taken: 0},
      { text: 'Braggart\'s Essay (+1 resume point)', correct: 87, effect: 252, possible: 0, taken: 0},
      { text: 'Artsy (+1 resume point)', correct: 88, effect: 252, possible: 0, taken: 0},
      { text: 'Team Player (+1 resume point)', correct: 89, effect: 252, possible: 0, taken: 0},
      { text: 'Boring Essay (+1 resume point)', correct: 90, effect: 252, possible: 0, taken: 0},
      { text: 'Well Rounded (+2 resume points)', correct: 91, effect: 252, possible: 0, taken: 0},
      { text: 'Go back', correct: 0, effect: 0}
    ]
  },
  {
    room: 'This essay is plagiarized from online. You must have less than 4 integrity to complete this essay.', //64
    answers: [
      { text: 'Complete Plagiarized Essay (+2 resume points)', correct: 0, effect: 253, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'A picture is worth 1000 words. Too bad the word limit is 650. You must have 15 friends to complete this essay. 5 friends are spent upon completion.', //65
    answers: [
      { text: 'Complete Submit Picture (+3 resume points, - 5 friends)', correct: 0, effect: 254, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write something genuinely funny and brilliant. College admission officers do not appreciate it. You must have 10 Knovel influence to complete this essay. 5 influence are spent upon completion.', //66
    answers: [
      { text: 'Complete Brilliant Satire (+2 resume points, - 5 Knovel influence)', correct: 0, effect: 255, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You try to gain sympathy points by writing about your hardships. College admission officers think you are a wimp. You must have mentally broken down at least once to complete this essay.', //67
    answers: [
      { text: 'Complete Hardship (+5 resume points)', correct: 0, effect: 256, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write about a time that you challenged your beliefs. College admission officers think you are indecisive. You must have at least 3 science stat to complete this essay. 3 Science stat are spent upon completion.', //68
    answers: [
      { text: 'Complete Belief Challenged (+2 resume points, -3 science stat)', correct: 0, effect: 257, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write about something pointless and random. College admission officers love it! But you didn\'t answer the prompt... You must have relaxed at least 7 times this game to complete this essay. You have relaxed '+relax_counter+'/7 times so far.', //69
    answers: [
      { text: 'Complete Banana Essay (+1 resume points)', correct: 0, effect: 261, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You have writer\'s block and can\'t think of anything to write! You can give up on this essay at any time to complete it, but you will not get any resume points for it. You can complete this essay during senior year for 3 resume points.', //70
    answers: [
      { text: 'Give up on Writer\'s block (+0 resume points)', correct: 0, effect: 262, possible: 1},
      { text: 'Complete Writer\'s block (+3 resume points)', correct: 0, effect: 263, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You have as many teachers edit your essay as possible. You are pretty sure it got worse. You must have at least 1 influence with every teacher to complete this essay. 1 teacher influence per teacher is spent upon completion.', //71
    answers: [
      { text: 'Complete Edited Essay (+2 resume points)', correct: 0, effect: 264, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write about your favorite color. Wow! Lucky for you, the admission officer who read your essay happens to have the same favorite color. If you have at least 6 History stats, you may complete this essay. 4 history stats are spent upon completion.', //72
    answers: [
      { text: 'Complete Favorite Color (+4 resume points)', correct: 0, effect: 265, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You worked day and night for two months, but have created a masterpiece! If you have less than 2 Happiness, you may complete this essay.', //73
    answers: [
      { text: 'Complete Magnum Opus (+4 resume points)', correct: 0, effect: 266, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You submitted this essay at 11:59pm. If you have exactly 9 stress, you may complete this essay.', //74
    answers: [
      { text: 'Complete 11:59 Essay (+3 resume points)', correct: 0, effect: 267, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You attach a ten dollar bill to your essay. Admission officers feel offended: they wanted at least a 20. If you have 8 or more math stat, you may complete this essay.', //75
    answers: [
      { text: 'Complete Bribe (+2 resume points)', correct: 0, effect: 268, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write a humorous essay about finding Bigfoot! Admission officers do not believe you. If you have seen 3 or more pandering abilities this game, you may complete this essay.', //76
    answers: [
      { text: 'Complete Bigfoot (+1 resume point)', correct: 0, effect: 269, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write about how you do not have a favorite subject. Admission officers already knew you were undecided. If you have 2 or more Teacher recommendation letters, you may complete this essay.', //77
    answers: [
      { text: 'Complete I Love Learning (+2 resume points)', correct: 0, effect: 270, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write a long rant about what is on your mind. Admission officers see this as a red flag. If you have less than 5 happiness, you may complete this essay. Upon completion, you gain 3 happiness.', //78
    answers: [
      { text: 'Complete Rant (-2 resume points)', correct: 0, effect: 271, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You take a risk. Unfortunately, Admission officers do not appreciate it. If you have gotten 3 A\'s in English classes during this game, you may complete this essay.', //79
    answers: [
      { text: 'Complete A Poem (+3 resume points)', correct: 0, effect: 272, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write the wrong college name in your essay. If you have gotten 2 A\'s in Math classes during this game, you may complete this essay.', //80
    answers: [
      { text: 'Complete Wrong Name (+2 resume points)', correct: 0, effect: 273, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write about politics. Unfortunately, the admission officer who read your essay politically disagrees with you. If you have gotten 2 A\'s in History classes during this game, you may complete this essay.', //81
    answers: [
      { text: 'Complete Political Essay (+2 resume points)', correct: 0, effect: 274, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write about your favorite book. Unfortunately, the admission officer who read your essay has not read it. If you have gotten 2 A\'s in Science classes during this game, you may complete this essay.', //82
    answers: [
      { text: 'Complete Favorite Book (+2 resume points)', correct: 0, effect: 275, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'Just in case they forgot, you remind your Admission officer that you are very smart. If you have studied 7 times during this game, you may complete this essay.', //83
    answers: [
      { text: 'Complete I am Smart (+1 resume points)', correct: 0, effect: 280, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You brag about starting a company. You neglect to mention that your lemonade stand has not yet turned a profit. If you have socialized 7 times during this game, you may complete this essay.', //84
    answers: [
      { text: 'Complete Started a Company (+1 resume points)', correct: 0, effect: 281, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write about how much time you spend volunteering. You neglect to mention that the mandatory graduation requirement is the only reason you volunteered at all. If you have chatted 7 times during this game, you may complete this essay.', //85
    answers: [
      { text: 'Complete Volunteering (+1 resume points)', correct: 0, effect: 282, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write about your stellar leadership skills. If you lead 5 or more clubs, you may complete this essay.', //86
    answers: [
      { text: 'Complete Leadership (+2 resume points)', correct: 0, effect: 286, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write about how great you are. If you lead at least 2 recreational clubs, you may complete this essay.', //87
    answers: [
      { text: 'Complete Braggart\'s Essay (+1 resume points)', correct: 0, effect: 287, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You show off your creative side... with an essay. If you lead at least 1 arts clubs, you may complete this essay.', //88
    answers: [
      { text: 'Complete Artsy (+1 resume points)', correct: 0, effect: 288, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write about how playing sports made you realize the value of teamwork. If you lead at least 2 sports clubs, you may complete this essay.', //89
    answers: [
      { text: 'Complete Team Player (+1 resume points)', correct: 0, effect: 289, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write a boring essay. If you lead at least 2 academic clubs, you may complete this essay.', //90
    answers: [
      { text: 'Complete Boring Essay (+1 resume points)', correct: 0, effect: 290, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
  {
    room: 'You write about how well rounded you are. If you lead at least 1 of every type of club, you may complete this essay.', //91
    answers: [
      { text: 'Complete Well Rounded (+2 resume points)', correct: 0, effect: 291, possible: 0},
      { text: 'Never mind', correct: 63, effect: 0, possible: 1}
    ]
  },
]

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////EVENTS////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


var freshman_events = [
  {
    event: 'There is a fire drill!', //0
    options: [
      { text: 'Act cool (+2 friends)', effect: 6 },
      { text: 'Appreciate missing class (-2 stress)', effect: 12 },
    ],
    source: "freshman/Fire Drill.png"
  },
  {
    event: 'Minecraft becomes cool again.', //1
    options: [
      { text: 'Play Minecraft (+2 friends)', effect: 6 },
      { text: 'Appreciate missing class (+1 English Stat)', effect: 1 },
    ],
    source: "default.png"
  },
  {
    event: 'Your Physics class takes a trip to Six Flags!', //2
    options: [
      { text: 'Have fun (+1 friend)', effect: 18 },
      { text: 'Do the optional assignment on Rollercoaster physics (+1 Science Stat, +2 Stress)', effect: 19 },
    ],
    source: "freshman/Crappy-physics-group.png"
  },
  {
    event: 'You have an epiphany: school sucks.', //3
    options: [
      { text: 'School Sucks (-1 Happiness, +1 stress)', effect: 20 }
    ],
    source: "freshman/epiphany.png"
  },
  {
    event: 'It is flu season, and you get the flu', //4
    options: [
      { text: 'Now you are behind on school work (+1 stress)', effect: 21 }
    ],
    source: "freshman/flu.png"
  },
  {
    event: 'You get injured in gym class', //5
    options: [
      { text: 'Ouch. (+1 stress)', effect: 21 }
    ],
    source: "freshman/pacer test.png"
  },
  {
    event: 'Your mom tells you to do your homework.', //6
    options: [
      { text: 'Yes mom (-2 Happiness, +1 stress)', effect: 23 },
      { text: 'No! (+4 stress)', effect: 22 }
    ],
    source: "freshman/Do Your Homework.png"
  },
  {
    event: 'It is Pizza Day in the lunchroom.', //7
    options: [
      { text: 'Cool! (+1 friend)', effect: 18 },
      { text: 'Pack lunch anyway (-1 stress)', effect: 24 }
    ],
    source: "freshman/MONOPOLIZE lunch tables.png"
  },
  {
    event: 'You lost your wallet!', //8
    options: [
      { text: 'Oh well (+2 stress)', effect: 25 }
    ],
    source: "default.png"
  },
  {
    event: 'Your high school is ranked as one of the best in the nation, according to a popular magazine. Now your parents expect you to be successful.', //9
    options: [
      { text: 'I\'m just a kid (+2 stress)', effect: 25 }
    ],
    source: "default.png"
  },
  {
    event: 'It is curriculum night and your parents plan to attend.', //10
    options: [
      { text: 'Convince them not to go (+2 stress)', effect: 25 },
      { text: 'Your parents do something weird (-2 friends)', effect: 26 }
    ],
    source: "freshman/curriculum night.png"
  },
  {
    event: 'It is the talent show!', //11
    options: [
      { text: 'Show off (+2 friends)', effect: 6 },
      { text: 'Skip it (-2 stress)', effect: 12 }
    ],
    source: "freshman/Talent Show.png"
  },
  {
    event: 'There is a substitute teacher today in physics class. You can sleep in class with impunity', //12
    options: [
      { text: 'Sleep (-2 stress)', effect: 12 },
      { text: 'Study (+1 science)', effect: 4 }
    ],
    source: "freshman/Free Class Period.png"
  },
  {
    event: 'It is Halloween!', //13
    options: [
      { text: 'Trick (-2 stress)', effect: 12 },
      { text: 'Treat (+2 friends)', effect: 6 }
    ],
    source: "freshman/Halloween Day.png"
  },
  {
    event: 'It is school spirit week, and today you can wear your pajamas to school! It is very relaxing to attend school in pajamas. But wait: you have a test today! Now you are stressed.', //14
    options: [
      { text: 'Oh well (+2 stress)', effect: 25 }
    ],
    source: "default.png"
  },
  {
    event: 'You recall how awkward you were during freshmen connection.', //15
    options: [
      { text: 'Yikes (-2 friends)', effect: 26 }    ],
    source: "freshman/makefunofsomeone.png"
  },
  {
    event: 'Today is homecoming, but you aren\'t sure if you want to go. Everyone is saying that it will be fun', //16
    options: [
      { text: 'Be disappointed (+1 friend, -1 happiness)', effect: 27 },
      { text: 'Skip it and feel left out (+3 stress)', effect: 28 }
    ],
    source: "freshman/homecoming.png"
  },
  {
    event: 'Today is an obscure holiday. You aren\'t even sure why it is a thing, but you are just glad that you don\'t have class today.', //17
    options: [
      { text: 'Take a nap (-3 Stress)', effect: 29 },
      { text: 'The grind never ends (+2 History stat)', effect: 30 }
    ],
    source: "freshman/Columbus.png"
  },
  {
    event: 'There is a lockdown drill today. You huddle in the corner with the rest of the class.', //18
    options: [
      { text: 'Act cool but secretly panic (+1 stress, +1 friend)', effect: 31 },
      { text: 'It is just a drill (no effect)', effect: 0 }
    ],
    source: "default.png"
  },
  {
    event: 'There is a pep rally today. Yay, school spirit!', //19
    options: [
      { text: 'Yay (no effect)', effect: 0 }
    ],
    source: "default.png"
  },
  {
    event: 'Someone you know got into a very prestigious college. You are jealous because you did not think that they would get in.', //20
    options: [
      { text: 'I can\'t believe it (+2 stress)', effect: 25 }
    ],
    source: "default.png"
  },
  {
    event: 'You are worried about North Korea building nuclear missiles.', //21
    options: [
      { text: 'We are in big trouble (+1 stress)', effect: 21 }
    ],
    source: "default.png"
  },
  {
    event: 'You have a crush on someone. For the rest of the year, you cannot study.', //22
    options: [
      { text: 'aww (-study)', effect: 32 }
    ],
    source: "freshman/Crushing on Someone.png"
  },
  {
    event: 'A friend offers to teach you a pandering skill. These are powerful abilities that you may acquire at the cost of happiness.', //23
    options: [
      { text: 'Why not? (+Pandering)', effect: 33 }
    ],
    source: "default.png"
  },
  {
    event: 'A friend encourages you to cheat! By taking them up on their offer, you will have the opportunity to acquire a powerful cheating ability at the cost of integrity.', //24
    options: [
      { text: 'Come to the dark side (+Cheating)', effect: 34 },
      { text: 'No way! (-1 friend)', effect: 35 }
    ],
    source: "freshman/discover the answer key.png"
  },
  {
    event: 'You may acquire Curiosity, one of the 4 c\'s (Curiosity, Compassion, Character, and Courage). If you do so, you will permanently lose 1 hour of sleep/night, but gain an upgrade to your study action. Alternatively, you may acquire a powerful pandering skill at the cost of happiness.', //25
    options: [
      { text: 'Learn for learning\'s sake (+Curiosity)', effect: 36 },
      { text: 'I hate learning (+Pandering)', effect: 33 }
    ],
    source: "freshman/compass.png"
  },
  {
    event: 'You have an important essay due for English class!', //26
    options: [
      { text: 'Do it (-1 English stat)', effect: 37 },
      { text: 'Disappoint your teacher (-3 Knovel influence)', effect: 38 }
    ],
    source: "sophomore/30 page paper.png"
  },
  {
    event: 'Your math teacher announces that there will be a test tomorrow. Surprise!', //27
    options: [
      { text: 'Cram (+3 stress)', effect: 28 },
      { text: 'Wing it (-2 Math stat)', effect: 39 }
    ],
    source: "freshman/Standardized Testing.png"
  },
  {
    event: 'You have a test for Art class. Wait, what?', //28
    options: [
      { text: 'That sucks (+1 stress)', effect: 21 }
    ],
    source: "freshman/Standardized Testing.png"
  },
  {
    event: 'You have a group project for physics, but nobody wants to work on it. You realize that you either have to do it yourself or take a hit on your grades.', //29
    options: [
      { text: 'Do it all (+3 stress)', effect: 28 },
      { text: 'No way! (-2 Science stat)', effect: 40 }
    ],
    source: "freshman/Crappy-physics-group.png"
  },
  {
    event: 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. A single lap should be completed each time you hear this sound.  Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.', //30
    options: [
      { text: 'Ok (+3 stress)', effect: 28 }
    ],
    source: "freshman/pacer test.png"
  },
  {
    event: 'You don\'t know what this event does.', //31
    options: [
      { text: 'Bring it on! (+Unknown)', effect: 41 },
      { text: 'Never mind (no effect)', effect: 0 }
    ],
    source: "default.png"
  },
  {
    event: 'Studgov elections are coming up! You can sign up to run if you would like.', //32
    options: [
      { text: 'House of Cards has prepared me for this moment (+Stud Gov)', effect: 43 },
      { text: 'Relax instead (-2 stress)', effect: 12 }
    ],
    source: "freshman/Stud Gov Election.png"
  },
  {
    event: 'Today, you received an email from the principal. \"Academic dishonesty is not tolerated,\" the email reads. You may acquire Curiosity, one of the 4 c\'s (Curiosity, Compassion, Character, and Courage). If you do so, you will permanently lose 1 hour of sleep/night, but gain an upgrade to your chat action. Alternatively, you may acquire a powerful cheating skill at the cost of integrity. ', //33
    options: [
      { text: 'I will never, ever cheat (+Character)', effect: 44 },
      { text: 'Playing by the rules is for suckers (+Cheating)', effect: 34 }
    ],
    source: "freshman/compass.png"
  },
  {
    event: 'You may acquire Compassion, one of the 4 c\'s (Curiosity, Compassion, Character, and Courage). If you do so, you will permanently lose 1 hour of sleep/night, but gain an upgrade to your relax action. ', //34
    options: [
      { text: 'Be compassionate in everything you do (+Compassion)', effect: 42 },
      { text: 'Nah, I am not that compassionate (no effect)', effect: 0 }
    ],
    source: "freshman/compass.png"
  }
///////Missing: Eagle Scout, Bullying cards?
]

//////////////////Sophomore Events/////////////////////////////////////////////////////////////////////////

var sophomore_events = [
  {
    event: 'You are not sure all the work you are doing is worth it anymore.', //0
    options: [
      { text: 'Doubts (-2 Happiness)', effect: 101 }
    ],
    source: "sophomore/Doubts.png"
  },
  {
    event: 'You can request an upperclassman tutor in a subject you are struggling in. ', //1
    options: [
      { text: 'Math tutor (+2 math stat)', effect: 103 },
      { text: 'Science tutor (+2 science stat)', effect: 105 },
      { text: 'English tutor (+2 english stat)', effect: 102 },
      { text: 'History tutor (+2 history stat)', effect: 104 },
      { text: 'I don\'t need a tutor (+cheating)', effect: 34 }
    ],
    source: "default.png"
  }, 
  {
    event: 'There is a rampant cheating problem at your school. This has made it easier to acquire cheating and pandering skills!', //2
    options: [
      { text: 'Cheating (+cheating)', effect: 34 },
      { text: 'Pandering (+pandering)', effect: 33 }
    ],
    source: "sophomore/cheating problems.png"
  },
  {
    event: 'Due to the cold weather, school has been canceled', //3
    options: [
      { text: 'Relax (-4 stress)', effect: 106 },
      { text: 'The grind never stops (+1 science stat, +1 history stat)', effect: 107 }
    ],
    source: "sophomore/snow day.png"
  },
  {
    event: 'Your teachers wonder why the kids are so stressed these days. They determine that students are too lazy.', //4
    options: [
      { text: 'wow (+2 stress)', effect: 25 },
    ],
    source: "junior/blame the student.png"
  },
  {
    event: 'You are one of your teacher\'s favorites. You may obtain a pandering card or gain 1 happiness.', //5
    options: [
      { text: 'neat (+1 happiness)', effect: 108 },
      { text: 'capitalize on this to your advantage (+pandering)', effect: 33 },
    ],
    source: "junior/your-favorite-teacher.png"
  },
  {
    event: 'It is the history fair! You can make your partner do everything for 1 integrity and 1 friend. Alternatively, you may grind it out, but gain 5 stress for doing so.', //6
    options: [
      { text: 'make partner do everything (-1 integrity, -1 friend)', effect: 109 },
      { text: 'grind through it (+5 stress)', effect: 110 },
    ],
    source: "sophomore/history fair.png"
  },
  {
    event: 'It is the sophomore slump! You lose a lot of motivation to do school...', //7
    options: [
      { text: 'yikes (+1 stress, -1 happiness)', effect: 20 },
    ],
    source: "sophomore/Doubts.png"
  },
  {
    event: 'You have a doctor appointment and get out of school! You are diagnosed with a severe allergy to homework.', //8
    options: [
      { text: 'ok (no effect)', effect: 0 },
    ],
    source: "default.png"
  },
  {
    event: 'You have to read the Scarlet Letter! You can actually read it, or just google the synopsis.', //9
    options: [
      { text: 'Sparknotes to the rescue (no effect)', effect: 0 },
      { text: 'read it (-1 sleep, +1 English stat)', effect: 117 },
    ],
    source: "sophomore/scarlet letter.png"
  },
  {
    event: 'There is a teachers strike and school is cancelled for weeks! You get -10 stress! But wait- it\'s the governor, who reaches an agreement with the teacher\'s union at 11:59 PM.', //10
    options: [
      { text: 'Who are the procrastinators now? (+2 stress)', effect: 25 },
    ],
    source: "default.png"
  },
  {
    event: 'You tell your favorite teacher that you are stressed. They tell you that stress is a good thing because it helps you learn better.', //11
    options: [
      { text: 'Thanks I guess (+2 stress)', effect: 25 },
    ],
    source: "junior/your-favorite-teacher.png"
  },
  {
    event: 'Everyone has forgotten that the Sophomores exist.', //12
    options: [
      { text: 'Hello? Anybody? (-2 friends)', effect: 118 },
    ],
    source: "default.png"
  },
  {
    event: 'You tell tales of Sophomore year to scare the freshies.', //13
    options: [
      { text: 'You think physics is hard, just wait until you take TOP Chem! (+2 friends, -1 stress)', effect: 119 },
    ],
    source: "sophomore/Scare the Freshmen.png"
  },
  {
    event: 'As a sophomore, you have moved up the social ladder!', //14
    options: [
      { text: 'Great! (+3 friends)', effect: 55 },
    ],
    source: "sophomore/Posting Flyers.png"
  },
  {
    event: 'You talk to your councillor. Your councillor tells you that you should not have taken so many difficult classes.', //15
    options: [
      { text: 'Thanks, councillor! (+2 stress)', effect: 25 },
    ],
    source: "junior/counselor meeting.png"
  },
  {
    event: 'You and your friends are talking about grades.', //16
    options: [
      { text: 'Say that you have high grades (-2 friends)', effect: 118 },
      { text: 'Complain about your low grades (-2 friends)', effect: 118 },
    ],
    source: "default.png"
  },
  {
    event: 'You look silly in your gym clothing', //17
    options: [
      { text: 'darn (-2 friends)', effect: 118 },
    ],
    source: "freshman/pacer test.png"
  },
  {
    event: 'You make an offensive post on social media. This will make it nearly impossible to make new friends until the end of the year. Ouch, what were you thinking?', //18
    options: [
      { text: 'Serves you right, jerk (-socialize)', effect: 111 },
    ],
    source: "sophomore/offensive social media post.png"
  },
  {
    event: 'Progress reports were sent to your home. You get stress equal to the number of F\'s that you have!', //19
    options: [
      { text: 'Hopefully you have good grades (+stress)', effect: 120 },
    ],
    source: "sophomore/Progress Reports.png"
  },
  {
    event: 'You have the opportunity to represent the school this Saturday for the annual Open House. You would guide prospective students around the building and tell them how great your school is. Doing so will win you brownie points with the principal. You can choose to relax instead, giving you -3 stress.', //20
    options: [
      { text: 'Represent your school (+3 Franklin influence)', effect: 56 },
      { text: 'Relax (-3 stress)', effect: 29 },
    ],
    source: "sophomore/meeting the principal.png"
  },
  {
    event: 'Prospective students show up at your school today to get a better idea of what it is really like.', //21
    options: [
      { text: 'Tell them that it is great (+3 Franklin influence)', effect: 56 },
      { text: 'Tell them to stay away! (-3 stress)', effect: 29 },
    ],
    source: "sophomore/Shadow Students.png"
  },
  {
    event: 'You have to write a 30 page paper for your English class. If you take the L, your grade in English will become unchangeable (if you already have an A, you do not lose it.).', //22
    options: [
      { text: 'Take the L (-English Class)', effect: 121 },
      { text: 'Grind it (+5 stress, +2 English Stat)', effect: 122 },
    ],
    source: "sophomore/30 page paper.png"
  },
  {
    event: 'Final exams are coming up. Yikes! Choose a stat: it decreases by three (You can\'t always study for everything!)', //23
    options: [
      { text: 'Avoid studying English (-3 English stat)', effect: 123 },
      { text: 'Avoid studying Math (-3 Math stat)', effect: 124 },
      { text: 'Avoid studying History (-3 History stat)', effect: 125 },
      { text: 'Avoid studying Science (-3 Science stat)', effect: 126 },
    ],
    source: "sophomore/Final Exams.png"
  },
  {
    event: 'It is now the Drivers Ed unit of gym class, which means that you now have tests in gym class.)', //24
    options: [
      { text: 'The one class I didn\'t have tests in... (-1 sleep)', effect: 5 },
    ],
    source: "freshman/Standardized Testing.png"
  },
  {
    event: 'Your math teacher encourages you to take the American Mathematics Competition (AMC). If you do really well, then you might be able to write about it on your resume. Your teacher figures that you need about 5 math stats to get a good score. He tells you that there is no downside to taking it if you do not qualify.', //25
    options: [
      { text: 'Sign up to take it (???)', effect: 127 },
      { text: 'Relax instead (-2 stress)', effect: 12 },
    ],
    source: "default.png"
  },
  {
    event: 'To better prepare you for your TOP exam, your history teacher is making you prepare for a test featuring long essay questions. ', //26
    options: [
      { text: 'That is stressful (+3 stress)', effect: 28 },
    ],
    source: "freshman/Standardized Testing.png"
  },
  {
    event: 'You discover a TOP Chemistry textbook that belonged to the half-blood prince. Using the textbook will give you 4 science stat, but reduce your integrity by 1, while refusing will increase your stress by 2. ', //27
    options: [
      { text: 'Time to brew some potions (+4 science, -1 integrity)', effect: 128 },
      { text: 'Not a Harry Potter fan (+2 stress)', effect: 25 },
    ],
    source: "sophomore/TOP Chem Chapter Tests.png"
  },
  {
    event: 'You can allow other people to copy your TOP Chem lab report to gain friends equal to your science stat, at the cost of 1 integrity.', //28
    options: [
      { text: 'Let others copy (+friends, -1 integrity)', effect: 129 },
      { text: 'I hate freeloaders (no effect)', effect: 0 },
    ],
    source: "sophomore/Letting Others Copy.png"
  },
  {
    event: 'You have a chapter test for TOP Chem this week. If you fail it, your teacher will force you to do 100 homework problems as punishment.', //29
    options: [
      { text: 'That\'s sadistic (+5 stress)', effect: 110 },
    ],
    source: "sophomore/TOP Chem Chapter Tests.png"
  },
  {
    event: 'The principal announces that, due to a budget surplus, the school will be funding additional activities.', //30
    options: [
      { text: 'More clubs! (+1 club added to the pool)', effect: 130 },
    ],
    source: "sophomore/new clubs.png"
  },
  {
    event: 'Your teacher decides to sponsor a new club.', //31
    options: [
      { text: 'More clubs! (+1 club added to the pool)', effect: 130 },
    ],
    source: "sophomore/Start Some Clubs.png"
  },
  {
    event: 'Legend says that you can only have two out of a social life, good grades, and sleep. Which one will you choose to lose?', //32
    options: [
      { text: 'No social life (-socialize)', effect: 111 },
      { text: 'Bad grades (-study)', effect: 32 },
      { text: 'No sleep (-2 sleep)', effect: 207 },
    ],
    source: "sophomore/you can only have two.png"
  },

]

//////////////////Junior Events/////////////////////////////////////////////////////////////////////////

var junior_events = [
  {
    event: 'It is easier to start clubs because you are an upperclassmen.', //0
    options: [
      { text: 'Start a club (+club)', effect: 130 },
      { text: 'Aquire a Pandering skill (+pandering)', effect: 33 }
    ],
    source: "sophomore/Start Some Clubs.png"
  },
  {
    event: 'You burn an old textbook for fun.', //1
    options: [
      { text: 'Burn, baby, burn (-2 stress)', effect: 12 }
    ],
    source: "junior/burn old textbooks.png"
  },
  {
    event: 'You are late to school.', //2
    options: [
      { text: 'Be tardy (+2 stress)', effect: 25 }
    ],
    source: "junior/shared misery.png"
  },
  {
    event: 'It is the new year! What is your new year\'s resolution?', //3
    options: [
      { text: 'Get good grades (+1 math stat)', effect: 2 },
      { text: 'Make some friends (+2 friends)', effect: 6 },
      { text: 'Be happier (+1 happiness)', effect: 108 }
    ],
    source: "default.png"
  },
  {
    event: 'You go down the wrong stairs and a teacher humiliates you for breaking the rules.', //4
    options: [
      { text: 'Shouldn\'t a junior know better? (+2 stress)', effect: 25 }
    ],
    source: "confrontation.png"
  },
  {
    event: 'It is international night and there is FREE FOOD!', //5
    options: [
      { text: 'Eat free food (+1 happiness)', effect: 108 },
      { text: 'Study instead (+1 math stat)', effect: 2 }
    ],
    source: "default.png"
  },
  {
    event: 'Someone ask you what colleges you are applying to.', //6
    options: [
      { text: 'I am trying not to think about that (+4 stress)', effect: 22 },
      { text: 'ALL of the ivy leagues (-2 happiness)', effect: 101 }
    ],
    source: "default.png"
  },
  {
    event: 'You get to school early and have some extra time.', //7
    options: [
      { text: 'Make some new friends (+2 friends)', effect: 6 },
      { text: 'Do homework (+1 math stat)', effect: 2 }
    ],
    source: "default.png"
  },
  {
    event: 'It is the Junior Book Awards, where colleges give books out to kids as prizes.', //8
    options: [
      { text: 'One more thing that I won\'t read (no effect)', effect: 0 }
    ],
    source: "default.png"
  },
  {
    event: 'You have to read Shakespeare.', //9
    options: [
      { text: 'To be (+1 happiness)', effect: 108 },
      { text: 'Not to be (+2 friends)', effect: 6 }
    ],
    source: "junior/reading shakespeare.png"
  },
  {
    event: 'People tell you that history stat is useless for getting jobs, and you are better off majoring in STEM. You can choose to trade in 3 history stat for 3 science or 3 math stat.', //10
    options: [
      { text: 'Trade for math stat (-3 history, +3 math)', effect: 146 },
      { text: 'Trade for science stat (-3 history, +3 science)', effect: 147 },
      { text: 'No thanks (no effect)', effect: 0 }
    ],
    source: "default.png"
  },
  {
    event: 'Your science teacher tells you about the Physics Olympiad, a prestigious event. Being a finalist significantly boosts your resume points, but a significant amount of science stat is needed to become a finalist.', //11
    options: [
      { text: 'Sign up for it (+Physics Olympiad)', effect: 148 },
      { text: 'Chill at home instead (-2 stress)', effect: 12 }
    ],
    source: "default.png"
  },
  {
    event: 'Today, instead of class, students take the PFUN. If you do well enough, you will get a national merit scholarship that you can write on your resume! If you choose to take the test seriously and have at least 2 of each stat, you will lose 2 of every stat but gain 6 resume points.', //12
    options: [
      { text: 'Take the test seriously (???)', effect: 149 },
      { text: 'Doodle in the answer booklet (-2 stress)', effect: 12 }
    ],
    source: "junior/easier FUN.png"
  },
  {
    event: 'You need to start seriously thinking about which teachers you want to ask for a letter of rec.', //13
    options: [
      { text: 'Your english teacher (+5 Knovel influence)', effect: 150 },
      { text: 'Your math teacher (+5 Mathew influence)', effect: 151 },
      { text: 'Your history teacher (+5 Terry influence)', effect: 152 },
      { text: 'Your science teacher (+5 Fizzix influence)', effect: 153 }
    ],
    source: "junior/thinking about recs.png"
  },
  {
    event: 'You hear about prestigious sports scholarships. Applying costs friends, but is worth a lot of resume points', //14
    options: [
      { text: 'Apply to the scholarship (+sports scholarship)', effect: 154 },
      { text: 'Hang out with friends instead (+2 friends)', effect: 6 }
    ],
    source: "default.png"
  },
  {
    event: 'You feel like you don\'t need friends anymore. You cannot socialize for the rest of the year.', //15
    options: [
      { text: 'Friends are unnecessary (-socialize)', effect: 111 }
    ],
    source: "junior/friends-are-unnecessary.png"
  },
  {
    event: 'Teachers love to gossip! Hopefully they aren\'t saying bad things about you... If your integrity is less than 5, you cannot talk to teachers for the rest of the year. .', //16
    options: [
      { text: 'I wonder what they are saying about me (???)', effect: 155 }
    ],
    source: "junior/teacher-gossip.png"
  },
  {
    event: 'It is Martin Luther King day. You can spend the day on FUN prep or hang out with friends', //17
    options: [
      { text: 'FUN prep (+2 math, +1 english)', effect: 156 },
      { text: 'Hang out with friends (+3 friends, -3 stress)', effect: 157 }
    ],
    source: "default.png"
  },
  {
    event: 'Academic Approach meets every week for several hours, and students complete practice FUN tests in preparation for the exam. This is a huge time commitment, but will boost your stats significantly.', //18
    options: [
      { text: 'Join the program (-3 sleep, +3 math, +3 english)', effect: 158 },
      { text: 'Relax instead (-2 stress)', effect: 12 }
    ],
    source: "default.png"
  },
  {
    event: 'There is an extra credit opportunity for TOP Bio! You can get extra credit by helping your teacher.', //19
    options: [
      { text: 'Help out (+1 science stat)', effect: 4 },
      { text: 'Relax instead (-2 stress)', effect: 12 }
    ],
    source: "default.png"
  },
  {
    event: 'Your TOP Writing teacher decides to abolish grades. Everybody gets an A! (If you already had an A, nothing happens)', //20
    options: [
      { text: 'I wish all my classes abolished grades (+A in TOP Writing)', effect: 159 }
    ],
    source: "junior/grade yourself.png"
  },
  {
    event: 'Due to general mismanagement of the budget, your school has ran out of money. To make up for the budget shortfall, the school has stopped providing funding for extracurriculars. No new clubs can be joined for the rest of the year!', //21
    options: [
      { text: 'Budget cuts (-Joining Clubs)', effect: 160 }
    ],
    source: "junior/budget cuts.png"
  },
  {
    event: 'Some people pull a prank on you.', //22
    options: [
      { text: 'Ha ha, very funny. (+5 stress, +1 happiness)', effect: 161 }
    ],
    source: "junior/prank someone.png"
  },
  {
    event: 'When the weather is nice, students are generally allowed to eat their lunch outside at the picnic tables. Unfortunately, some jerk didn\'t clean up after themselves and left trash everywhere, so now everyone must eat inside.', //23
    options: [
      { text: 'That was definitely not me. (+2 stress)', effect: 25 }
    ],
    source: "default.png"
  },
  {
    event: 'One of the teachers at your school has been fired. No explanation is given. Any teacher influence you have or gain with them will be unusable.', //24
    options: [
      { text: 'Hectare was fired (-Hectare)', effect: 162 },
      { text: 'Fizzix was fired (-Fizzix)', effect: 246 },
      { text: 'Mathew was fired (-Mathew)', effect: 247 },
      { text: 'Yasse was fired (-Yasse)', effect: 248 }
    ],
    source: "default.png"
  },
  {
    event: 'A completely average day.', //25
    options: [
      { text: 'Nothing happens (no effect)', effect: 0 }
    ],
    source: "default.png"
  },
  {
    event: 'An alumni comes back to visit. You are reminded of college', //26
    options: [
      { text: 'I will be an alumni in just over a year! (+4 stress)', effect: 22 }
    ],
    source: "default.png"
  },
  {
    event: 'Student who register for the FUN at the last minute have to pay an extra fee.', //27
    options: [
      { text: 'Isn\'t this extortion? (+3 stress)', effect: 28 }
    ],
    source: "senior/last-minute-FUN-prep.png"
  },
  {
    event: 'You see someone using their phone during an important exam!', //28
    options: [
      { text: 'Tattle on them (-5 friends)', effect: 163 },
      { text: 'I am no snitch (-1 integrity, +5 friends)', effect: 164 }
    ],
    source: "sophomore/cheating problems.png"
  },
  {
    event: 'Some of your classmates are forming a study group, and invite you to join. It would mean having less time to do other things, though.', //29
    options: [
      { text: 'Study together (+2 math stat, +1 english stat)', effect: 156 },
      { text: 'I study alone (+1 sleep)', effect: 165 }
    ],
    source: "junior/study group.png"
  },
  {
    event: 'There is a boring assembly today. Your principal talks about the importance of academic integrity. After what seems like an eternity, you are finally released. For some reason, you are exhausted.', //30
    options: [
      { text: 'We know already (-1 sleep)', effect: 5 }
    ],
    source: "default.png"
  },
  {
    event: 'Money has mysteriously disappeared from the school\'s budget, and the rumor is that someone in the administration is embezzling money. ', //31
    options: [
      { text: 'Who is lacking integrity now? (no effect)', effect: 0 }
    ],
    source: "default.png"
  },
  {
    event: 'You hear about someone who will take the FUN for you, if you pay them. This will immediately give you a score of 34 on the FUN, but cost you 1 integrity. ', //31
    options: [
      { text: 'Hire FUN taker (+score of 34, -1 integrity)', effect: 243 },
      { text: 'No thanks (no effect)', effect: 0 }
    ],
    source: "junior/FUN Taker for hire.png"
  },
  {
    event: 'You hear that taking Adderall on the FUN can significantly boost your chances of getting a high score. This will permanently boost your chance of getting a high FUN score, but costs 2 integrity. ', //31
    options: [
      { text: 'Take Adderall (+chance of high FUN score, -2 integrity)', effect: 242 },
      { text: 'No thanks (no effect)', effect: 0 }
    ],
    source: "junior/adderall on the FUN.png"
  }
]


//MISSING (add later?): National honor society(integrity check)

//////////////////Senior events/////////////////////////////////////////////////////////////////////////

var senior_events = [
  {
    event: 'It is great being a senior. As the top dogs, friends come easily.', //0
    options: [
      { text: 'I am on top now (+7 friends)', effect: 206 },
    ],
    source: "senior/top-dog.png"
  },
  {
    event: 'From now on, you can go off campus for lunch.', //1
    options: [
      { text: 'Perks of being a senior (+3 friends)', effect: 55 },
    ],
    source: "senior/top-dog.png"
  },
  {
    event: 'The website that you are supposed to use to upload your college essays crashes.', //2
    options: [
      { text: 'Why can\'t they hire someone better at this? (+3 stress)', effect: 28 },
    ],
    source: "default.png"
  },
  {
    event: 'What kind of senior do you plan to be?', //3
    options: [
      { text: 'A slacker (-study)', effect: 32 },
      { text: 'A focused student (-socialize)', effect: 111 },
      { text: 'A sleep-deprived student (-2 sleep)', effect: 207 },
    ],
    source: "senior/senior-slacking.png"
  },
  {
    event: 'You have senioritis! You do not want to do any work.', //4
    options: [
      { text: 'Give in to the disease (-2 sleep)', effect: 207 },
      { text: 'Force yourself to work (+5 stress)', effect: 110 },
    ],
    source: "senior/senioritis.png"
  },
  {
    event: 'You ask your teacher to edit your college essays. They say that they look great!', //5
    options: [
      { text: 'Alright then (no effect)', effect: 0 },
    ],
    source: "senior/teacher-edits-your-essay.png"
  },
  {
    event: 'Your teachers begin to get sentimental once they realize that you will be graduating soon. You get 1 influence with every teacher.', //6
    options: [
      { text: 'Sentimental teachers (+teacher influence)', effect: 208 },
    ],
    source: "senior/sentimental-teacher.png"
  },
  {
    event: 'It is rec letter season! You get influence with one teacher equal to your integrity.', //7
    options: [
      { text: 'Yasse influence', effect: 209 },
      { text: 'Graff influence', effect: 210 },
      { text: 'Terry influence', effect: 211 },
      { text: 'Hectare influence', effect: 212 },
    ],
    source: "senior/rec-letter-season.png"
  },
  {
    event: 'You have an interview with an alumni of the university you are applying to coming up soon. You are nervous for it.', //8
    options: [
      { text: 'Stressed out (+3 stress)', effect: 28 },
    ],
    source: "default.png"
  },
  {
    event: 'Would you like to ditch school today?', //9
    options: [
      { text: 'Wow, sunlight! (+2 happiness)', effect: 213 },
      { text: 'I am a good student (+2 math, +1 stress)', effect: 52 },
    ],
    source: "senior/senior-slacking.png"
  },
  {
    event: 'You got a concussion! This sets all of your stats in two categories to zero.', //10
    options: [
      { text: 'Lose all english and math stat', effect: 214 },
      { text: 'Lose all history and science stat', effect: 215 },
    ],
    source: "senior/concussion.png"
  },
  {
    event: 'You have to start thinking about the future and what you might want to major in. Get 3 stats in the stat of your choice.', //11
    options: [
      { text: 'Focus in English (+3 English)', effect: 216 },
      { text: 'Focus in Math (+3 Math)', effect: 217 },
      { text: 'Focus in History (+3 History)', effect: 218 },
      { text: 'Focus in Science (+3 Science)', effect: 219 },
    ],
    source: "senior/choose a major.png"
  },
  {
    event: 'You find some hidden inspiration.', //12
    options: [
      { text: 'Godspeed (+1 sleep)', effect: 165 }
    ],
    source: "senior/godspeed.png"
  },
  {
    event: 'You frequent an online college forum. Seeing all the people with more impressive resumes than you stresses you out significantly.', //13
    options: [
      { text: 'Why are these people all so impressive? (+3 stress)', effect: 28 }
    ],
    source: "senior/online-college-forum.png"
  },
  {
    event: 'Your principal announces that a Valedictorian will be selected at the end of the year. You can claim this title if you have gotten A\'s in every single class you have taken.', //14
    options: [
      { text: 'Valedictorian time (+valedictorian)', effect: 292 }
    ],
    source: "senior/valedictorian.png"
  },
  {
    event: 'Someone spreads gossip that you got rejected from your top choice university. People have begun avoiding you.', //15
    options: [
      { text: 'But it isn\'t true... yet! (-2 friends)', effect: 26 }
    ],
    source: "senior/college-gossip.png"
  },
  {
    event: 'Due to certain students who fluff their resumes up with a bunch of clubs yet do not commit much time to any of them, colleges have begun penalizing students who list more than 5 clubs on their resume. If you lead more than 5 clubs, lose 5 resume points.', //16
    options: [
      { text: 'This is completely unfair! (-resume points)', effect: 220 }
    ],
    source: "senior/cap-on-extracurriculars.png"
  },
  {
    event: 'You feel the need to leave a legacy at your school.', //17
    options: [
      { text: 'Time to start a club! (+club)', effect: 130 }
    ],
    source: "default.png"
  },
  {
    event: 'Your school hires several additional security guards and subjects all students to mandatory backpack searches upon entering the building.', //18
    options: [
      { text: 'So, what was the point of making us read 1984? (+2 stress, -your privacy)', effect: 25 }
    ],
    source: "default.png"
  },
  {
    event: 'It is an election year, and politics is on everyone\'s minds. You decide to tell people that...', //19
    options: [
      { text: 'I am a liberal (-2 friends)', effect: 26 },
      { text: 'I am a conservative (-2 friends)', effect: 26 },
      { text: 'I am neither (-4 friends)', effect: 221 }
    ],
    source: "default.png"
  },
  {
    event: 'You have angered your teacher!', //20
    options: [
      { text: 'Lose all Mathew influence', effect: 244 },
      { text: 'Lose all Terry influence', effect: 245 },
    ],
    source: "junior/anger teacher.png"
  },
  {
    event: 'Someone starts a fist fight with you. You were just defending yourself, but you got in trouble too!', //21
    options: [
      { text: 'Get a detention (-1 sleep)', effect: 5 }
    ],
    source: "junior/fist fight.png"
  },
  {
    event: 'One of your academic rivals has left their things unattended. You can steal their notes.', //22
    options: [
      { text: 'Steal their notes (-1 integrity, +5 math stat)', effect: 249 },
      { text: 'Never mind (no effect)', effect: 0 }
    ],
    source: "senior/steal-essay.png"
  },
  {
    event: 'A massive cheating scandal was unveiled today, and over 100 students were suspended from school on charges of cheating. If you have less than 3 integrity, it is only a matter of time before they bust you. This will leave a permanent mark on your record, reducing your resume points by 10. ', //23
    options: [
      { text: 'Be more careful! (-resume points)', effect: 250 }
    ],
    source: "default.png"
  },
  {
    event: 'Before you graduate, you have to do some mandatory volunteering.', //24
    options: [
      { text: 'That is an oxymoron if I ever heard one (-1 sleep)', effect: 5 }
    ],
    source: "freshman/mandatory-volunteering.png"
  },
  {
    event: 'You have the opportunity to complete an optional supplemental essay. Side effects may include dizziness, nausea, and rejection from your dream college.', //25
    options: [
      { text: 'Try to complete it (+incomplete essay)', effect: 293 },
      { text: 'I am too lazy for that (+1 sleep)', effect: 165 }
    ],
    source: "senior/supplemental-essay.png"
  },
  {
    event: 'You regret all the opportunities that you past up over your four years. Maybe it is not too late!', //26
    options: [
      { text: 'Sign up to run for Student Government (+stud gov)', effect: 43 },
      { text: 'Sign up to take the AMC (+AMC)', effect: 127 },
      { text: 'Sign up to take the F=MA (+physics olympiad)', effect: 148 },
      { text: 'Try to obtain a sports scholarship (+sports scholarship)', effect: 154 },
      { text: 'Relax instead (-4 stress)', effect: 106 }
    ],
    source: "senior/a day in the life of.png"
  },
  {
    event: 'Something weird happens to you. All of your stats are swapped!', //27
    options: [
      { text: '??? (+Swap Stats)', effect: 295 }
    ],
    source: "senior/swap stats.png"
  },
  {
    event: 'If you are not satisfied with your FUN score, you will only have a few more chances to take it!', //28
    options: [
      { text: 'Hit the books (+2 english, +2 math, -1 sleep)', effect: 296 },
      { text: 'No need, I have a good score already (no effect)', effect: 0 }
    ],
    source: "senior/last minute FUN prep.png"
  },
  {
    event: 'Are you feeling lucky? ', //29
    options: [
      { text: 'I am always lucky (+6 english, +6 math, +6 history OR +20 stress)', effect: 297 },
      { text: 'No way! (no effect)', effect: 0 }
    ],
    source: "senior/lucky gamble.png"
  },
]
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////INFLUENCE/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


var pandering_deck = [
  {
    event: 'Teacher\'s Pet: By kissing up to one of your teachers, you can gain a tremendous amount of influence with them. This ability costs 5 Happiness.', //0
    options: [
      { text: 'Teacher\'s pet with Franklin (+10 Franklin Influence, -5 Happiness)', effect: 45, possible: 1, cost: 5 },
      { text: 'Teacher\'s pet with Knovel (+10 Knovel Influence, -5 Happiness)', effect: 46, possible: 1, cost: 5 },
      { text: 'Teacher\'s pet with Mathew (+10 Mathew Influence, -5 Happiness)', effect: 47, possible: 1, cost: 5 },
      { text: 'Teacher\'s pet with Terry (+10 Terry Influence, -5 Happiness)', effect: 48, possible: 1, cost: 5 },
      { text: 'Teacher\'s pet with Fizzix (+10 Fizzix Influence, -5 Happiness)', effect: 49, possible: 1, cost: 5 },
      { text: 'Teacher\'s pet with Yasse (+10 Yasse Influence, -5 Happiness)', effect: 181, possible: 1, cost: 5 },
      { text: 'Teacher\'s pet with Graff (+10 Graff Influence, -5 Happiness)', effect: 182, possible: 1, cost: 5 },
      { text: 'Teacher\'s pet with Hectare (+10 Hectare Influence, -5 Happiness)', effect: 183, possible: 1, cost: 5 },
      { text: 'Discard this ability (no effect)', effect: 0, cost: 0 }
    ]
  },
  {
    event: 'Bad friends: You do not like hanging out with them, but some friends are better than no friends after all. This ability costs 3 Happiness, but gives you 5 friends.', //1
    options: [
      { text: 'Hang out with bad friends (+5 friends, -3 Happiness)', effect: 61, possible:1, cost: 3 },
      { text: 'Discard this ability (no effect)', effect: 0, cost: 0 }
    ]
  },
  {
    event: 'All Nighter: By regularly pulling off all nighters, you get a lot better at time management. This ability costs 4 Happiness, but gives you 3 sleep (this year only).', //2
    options: [
      { text: 'Pull All Nighters (+3 sleep, -4 Happiness)', effect: 62, possible:1, cost: 4 },
      { text: 'Discard this ability (no effect)', effect: 0 , cost: 0}
    ]
  },
  {
    event: 'Start Clubs: By convincing your teachers to sponsor your clubs, more clubs become available for you to lead. This ability costs 1 Happiness, but draws 3 clubs.', //3
    options: [
      { text: 'Draw clubs (-1 Happiness, +3 clubs)', effect: 184, possible:1, cost: 1 },
      { text: 'Discard this ability (no effect)', effect: 0 , cost: 0}
    ]
  },
  {
    event: 'Well Behaved: Your good behavior in class gives you 1 teacher influence with every teacher (excluding Franklin) at the end of each year. This ability costs 4 happiness.', //4
    options: [
      { text: 'Well Behaved (-4 Happiness, + Teacher influence)', effect: 185 , possible:1, cost: 4 },
      { text: 'Discard this ability (no effect)', effect: 0 , cost: 0}
    ]
  },
  {
    event: 'Summer Programs: You can attend a summer program, giving you 3 resume points. You also get 3 math stat and 2 english stat immediately. This costs 5 happiness. ', //5
    options: [
      { text: 'Summer programs (-5 Happiness, +summer programs)', effect: 186 , possible:1, cost: 5 },
      { text: 'Discard this ability (no effect)', effect: 0 , cost: 0}
    ]
  },
  {
    event: 'Private Tutor: Hiring a private tutor in your weakest subject can be a big help. You get 2 stats at the end of every year in your chosen stat. This costs 3 happiness. ', //6
    options: [
      { text: 'English tutor (-3 Happiness, +3 english stat every year)', effect: 187 , possible:1, cost: 3 },
      { text: 'Math tutor (-3 Happiness, +3 math stat every year)', effect: 188 , possible:1, cost: 3 },
      { text: 'History tutor (-3 Happiness, +3 history stat every year)', effect: 189 , possible:1, cost: 3 },
      { text: 'Science tutor (-3 Happiness, +3 science stat every year)', effect: 190 , possible:1, cost: 3 },
      { text: 'Discard this ability (no effect)', effect: 0 , cost: 0}
    ]
  },
  {
    event: 'Brainstorming: You can spend the weekend brainstorming for essay ideas. Doing so gives you an incomplete essay. This costs 3 happiness. ', //7
    options: [
      { text: 'Brainstorming (-3 Happiness, +incomplete essay)', effect: 294 , possible:1, cost: 3 },
      { text: 'Discard this ability (no effect)', effect: 0 , cost: 0}
    ]
  },
/*
  {
    event: 'Extra credit: By asking your teachers for extra credit opportunities, you can get an A in a class! This ability will only give you the resume points for getting an A, and you will not receive the teacher influence bonus. This costs 3 happiness. ', //7
    options: [
      { text: 'Ask for extra credit (-3 Happiness, +A in a class)', effect: 226 , possible:1, cost: 3 },
      { text: 'Discard this ability (no effect)', effect: 0 , cost: 0}
    ]
  }
*/
]

var cheating_deck = [
  {
    event: 'Lie on the Resume: By lying on your resume, you look a lot more impressive. Doing this gives you 5 Resume Points. This ability costs 3 Integrity.', //0
    options: [
      { text: 'Lie on the Resume (+5 Resume Points, -3 integrity)', effect: 50, cost: 3 },
      { text: 'Discard this ability (no effect)', effect: 0, cost: 0 }
    ]
  },
  {
    event: 'Parents do your homework: Your parents do your homework for you. At first they were stuck, so they had to call your friend\'s parents. Doing this gives you 1 of every stat. This ability costs 2 Integrity.', //1
    options: [
      { text: 'Parents do your homework (+1 All Stats, -2 integrity)', effect: 63, cost: 2 },
      { text: 'Discard this ability (no effect)', effect: 0, cost: 0 }
    ]
  },
  {
    event: 'Caffeine Pills: The performance enhancing drug of high school. You get 4 permanent sleep (this gives you more sleep every year, but has no effect immediately). This ability costs 6 Integrity.', //2
    options: [
      { text: 'Caffeine Pills (+4 permanent sleep, -6 integrity)', effect: 64, cost: 6 },
      { text: 'Discard this ability (no effect)', effect: 0, cost: 0 }
    ]
  },
  {
    event: 'Fake Illness: By not showing up to school, you get a much needed break! Your friends don\'t remember you though. Doing this reduces your stress to 0, but makes you lose 2 friends. This ability costs 2 Integrity.', //3
    options: [
      { text: 'Fake an illness (-ALL stress, -2 friends, -1 integrity)', effect: 65, cost: 1 },
      { text: 'Discard this ability (no effect)', effect: 0, cost: 0 }
    ]
  },
  {
    event: 'Bribe Teacher: By giving your teachers expensive gifts, they like you more! Get 8 influence with one teacher. This ability costs 2 Integrity.', //4
    options: [
      { text: 'Bribe Franklin (+8 influence, -2 integrity)', effect: 191, cost: 2 },
      { text: 'Bribe Knovel (+8 influence, -2 integrity)', effect: 192, cost: 2 },
      { text: 'Bribe Mathew (+8 influence, -2 integrity)', effect: 193, cost: 2 },
      { text: 'Bribe Terry (+8 influence, -2 integrity)', effect: 194, cost: 2 },
      { text: 'Bribe Fizzix (+8 influence, -2 integrity)', effect: 195, cost: 2 },
      { text: 'Bribe Yasse (+8 influence, -2 integrity)', effect: 196, cost: 2 },
      { text: 'Bribe Graff (+8 influence, -2 integrity)', effect: 197, cost: 2 },
      { text: 'Bribe Hectare (+8 influence, -2 integrity)', effect: 198, cost: 2 },
      { text: 'Discard this ability (no effect)', effect: 0, cost: 0 }
    ]
  },
  {
    event: 'Fake Illness: By not showing up to school, you get a much needed break! Doing this reduces your stress to 0. This ability costs 1 Integrity.', //5
    options: [
      { text: 'Fake an illness (-ALL stress, -1 integrity)', effect: 65, cost: 1 },
      { text: 'Discard this ability (no effect)', effect: 0, cost: 0 }
    ]
  },
  {
    event: 'Parents Bribe Administration: Your parents exert their influence to ensure that you can lead some exclusive clubs. This ability starts a club and gives you 8 friends. It costs 2 integrity.', //6
    options: [
      { text: 'Bribe the Administration (+8 friends, -2 integrity)', effect: 199, cost: 2 },
      { text: 'Discard this ability (no effect)', effect: 0, cost: 0 }
    ]
  },
/*
  {
    event: 'Get Answer Keys: If you are looking for them, you can find them. This ability lets you get an A in any class. You will get the Resume Point bonus, but your teacher will suspect something is up, and you will receive no teacher influence bonus. It costs 1 integrity.', //7
    options: [
      { text: 'Get the Answer Keys (+A in a class, -1 integrity)', effect: 227, cost: 1 },
      { text: 'Discard this ability (no effect)', effect: 0, cost: 0 }
    ]
  },
*/
  {
    event: 'Cheat on the FUN: Cheating on the FUN can increase your chance of getting a good score significantly. It costs 2 integrity.', //8
    options: [
      { text: 'Cheat on the FUN (+good FUN score chance, -2 integrity)', effect: 242, cost: 2 },
      { text: 'Discard this ability (no effect)', effect: 0, cost: 0 }
    ]
  },
]


////////////////////////////Get A////////////////////

var get_A =  {
    event: 'Which class would you like to get an A in? You ONLY get the resume point bonus, and no teacher influence bonus.', //0
    options: [
      { text: 'English class', effect: 222, possible: 0 },
      { text: 'Math class', effect: 223, possible: 0 },
      { text: 'History class', effect: 224, possible: 0 },
      { text: 'Science class', effect: 225, possible: 0 },
      { text: 'None.', effect: 0, cost: 0 },
    ],
    source: "freshman/discover the answer key.png"
  }

