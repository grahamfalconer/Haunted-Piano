
initializePiano = function(){
  findComponents();
  attachEventListeners();
}
findComponents = function(){
  // white keys
  a3 = {appearance: document.getElementById('key-a-3'), sound: document.getElementById('A3')}
  b3 = {appearance: document.getElementById('key-b-3'), sound: document.getElementById('B3')}
  c3 = {appearance: document.getElementById('key-c-3'), sound: document.getElementById('C3')}
  d3 = {appearance: document.getElementById('key-d-3'), sound: document.getElementById('D3')}
  e3 = {appearance: document.getElementById('key-e-3'), sound: document.getElementById('E3')}
  f3 = {appearance: document.getElementById('key-f-3'), sound: document.getElementById('F3')}
  g3 = {appearance: document.getElementById('key-g-3'), sound: document.getElementById('G3')}
  b4 = {appearance: document.getElementById('key-b-4'), sound: document.getElementById('B4')}
  c4 = {appearance: document.getElementById('key-c-4'), sound: document.getElementById('C4')}
  d4 = {appearance: document.getElementById('key-d-4'), sound: document.getElementById('D4')}
  e4 = {appearance: document.getElementById('key-e-4'), sound: document.getElementById('E4')}
  f4 = {appearance: document.getElementById('key-f-4'), sound: document.getElementById('F4')}
  g4 = {appearance: document.getElementById('key-g-4'), sound: document.getElementById('G4')}

  //black keys
  a3sharp = {appearance:document.getElementById('key-a-3sharp'), sound: document.getElementById('A3sharp')}
  b3sharp = {appearance:document.getElementById('key-b-3sharp'), sound: document.getElementById('B3sharp')}
  c3sharp = {appearance:document.getElementById('key-c-3sharp'), sound: document.getElementById('C3sharp')}
  d3sharp = {appearance:document.getElementById('key-d-3sharp'), sound: document.getElementById('D3sharp')}
  f3sharp = {appearance:document.getElementById('key-f-3sharp'), sound: document.getElementById('F3sharp')}
  g3sharp = {appearance:document.getElementById('key-g-3sharp'), sound: document.getElementById('G3sharp')}
  c4sharp = {appearance:document.getElementById('key-c-4sharp'), sound: document.getElementById('C4sharp')}
  d4sharp = {appearance:document.getElementById('key-d-4sharp'), sound: document.getElementById('D4sharp')}
  f4sharp = {appearance:document.getElementById('key-f-4sharp'), sound: document.getElementById('F4sharp')}
  g4sharp = {appearance:document.getElementById('key-g-4sharp'), sound: document.getElementById('G4sharp')}

  discoButton = document.getElementsByClassName('disco')[0]
}
attachEventListeners = function(){
  document.addEventListener("keydown", function(event){
    key = event.key;
    if(key == 'a'){
      keyPressed(a3)
    } else if(key == 's'){
      keyPressed(b3)
    }else if(key == 'd'){
      keyPressed(c3)
    }else if(key == 'f'){
      keyPressed(d3)
    }else if(key == 'g'){
      keyPressed(e3)
    }else if(key == 'h'){
      keyPressed(f3)
    }else if(key == 'j'){
      keyPressed(g3)
    }else if(key == 'k'){
      keyPressed(b4)
    }else if(key == 'l'){
      keyPressed(c4)
    }else if(key == ';'){
      keyPressed(d4)
    }else if(event.code == 'Quote'){
      keyPressed(e4)
    }else if(event.code == 'Backslash'){
      keyPressed(f4)
    }else if(key == 'Enter'){
      keyPressed(g4)
    }else if(key == '1'){
      keyPressed(a3sharp)
    }else if(key == '2'){
      keyPressed(b3sharp)
    }else if(key == '3'){
      keyPressed(c3sharp)
    }else if(key == '4'){
      keyPressed(d3sharp)
    }else if(key == '6'){
      keyPressed(f3sharp)
    }else if(key == '7'){
      keyPressed(g3sharp)
    }else if(key == '8'){
      keyPressed(c4sharp)
    }else if(key == '9'){
      keyPressed(d4sharp)
    }else if(key == '0'){
      keyPressed(f4sharp)
    }else if(key == '-'){
      keyPressed(g4sharp)
    }
  })
  document.addEventListener("keyup", function(event){
    key = event.key;
    if(key == 'a'){
      keyReleased(a3)
    } else if(key == 's'){
      keyReleased(b3)
    }else if(key == 'd'){
      keyReleased(c3)
    }else if(key == 'f'){
      keyReleased(d3)
    }else if(key == 'g'){
      keyReleased(e3)
    }else if(key == 'h'){
      keyReleased(f3)
    }else if(key == 'j'){
      keyReleased(g3)
    }else if(key == 'k'){
      keyReleased(b4)
    }else if(key == 'l'){
      keyReleased(c4)
    }else if(key == ';'){
      keyReleased(d4)
    }else if(event.code == 'Quote'){
      keyReleased(e4)
    }else if(event.code == 'Backslash'){
      keyReleased(f4)
    }else if(key == 'Enter'){
      keyReleased(g4)
    }else if(key == '1'){
      keyReleased(a3sharp)
    }else if(key == '2'){
      keyReleased(b3sharp)
    }else if(key == '3'){
      keyReleased(c3sharp)
    }else if(key == '4'){
      keyReleased(d3sharp)
    }else if(key == '6'){
      keyReleased(f3sharp)
    }else if(key == '7'){
      keyReleased(g3sharp)
    }else if(key == '8'){
      keyReleased(c4sharp)
    }else if(key == '9'){
      keyReleased(d4sharp)
    }else if(key == '0'){
      keyReleased(f4sharp)
    }else if(key == '-'){
      keyReleased(g4sharp)
    }
  })
}
returnKeyClassName = function(key){
  console.log(key.appearance.className)
}

startingColor = ""
//helper functions
keyPressed = function(key){
  console.log(key.appearance.className)
  key.sound.play();
  key.appearance.className == 'white key' ? key.appearance.setAttribute('style', 'background-color: grey;') : key.appearance.setAttribute('style', 'background-color: rgba(0, 0, 0, 0.8);')
}
keyReleased = function(key){
  key.sound.currentTime = 0;
  key.sound.pause();
  key.appearance.className == 'white key' ? key.appearance.setAttribute('style', 'background-color: white;') : key.appearance.setAttribute('style', 'background-color: rgba(0, 0, 0, 1);')
}

playNote = function(key){
  keyPressed(key);
  setTimeout(function(){keyReleased(key)}, 200)
}
// AI songs
maryHadALittleLamb = function(){
  setTimeout(function(){playNote(e3)}, 200)
  setTimeout(function(){playNote(d3)}, 600)
  setTimeout(function(){playNote(c3)}, 1000)
  setTimeout(function(){playNote(d3)}, 1400)
  setTimeout(function(){playNote(e3)}, 1800)
  setTimeout(function(){playNote(e3)}, 2200)
  setTimeout(function(){playNote(e3)}, 2600)

  setTimeout(function(){playNote(d3)}, 3200)
  setTimeout(function(){playNote(d3)}, 3600)
  setTimeout(function(){playNote(d3)}, 4000)

  setTimeout(function(){playNote(e3)}, 4400)
  setTimeout(function(){playNote(g3)}, 4800)
  setTimeout(function(){playNote(g3)}, 5200)

  setTimeout(function(){playNote(e3)}, 5600)
  setTimeout(function(){playNote(d3)}, 6000)
  setTimeout(function(){playNote(c3)}, 6400)
  setTimeout(function(){playNote(d3)}, 6800)
  setTimeout(function(){playNote(e3)}, 7200)
  setTimeout(function(){playNote(e3)}, 7600)
  setTimeout(function(){playNote(e3)}, 8000)

  setTimeout(function(){playNote(d3)}, 8400)
  setTimeout(function(){playNote(d3)}, 8800)
  setTimeout(function(){playNote(e3)}, 9200)
  setTimeout(function(){playNote(d3)}, 9600)
  setTimeout(function(){playNote(c3)}, 10000)
}
chopSticks = function(){
  setTimeout(function(){playNote(g4sharp)}, 100)
  setTimeout(function(){playNote(d4sharp)}, 100)
  setTimeout(function(){playNote(g4sharp)}, 400)
  setTimeout(function(){playNote(d4sharp)}, 400)
  setTimeout(function(){playNote(g4sharp)}, 700)
  setTimeout(function(){playNote(d4sharp)}, 700)
  setTimeout(function(){playNote(g4sharp)}, 1000)
  setTimeout(function(){playNote(d4sharp)}, 1000)
// da da da

  setTimeout(function(){playNote(f4sharp)},1300)
  setTimeout(function(){playNote(c4sharp)},1300)
  setTimeout(function(){playNote(f4sharp)},1650)
  setTimeout(function(){playNote(c4sharp)},1650)
 // do do

  setTimeout(function(){playNote(d4sharp)},2000)
  setTimeout(function(){playNote(g3sharp)},2000)

  setTimeout(function(){playNote(d4sharp)},2350)
  setTimeout(function(){playNote(g3sharp)},2350)
// do do

  setTimeout(function(){playNote(f3sharp)},2700)
  setTimeout(function(){playNote(c4sharp)},2700)
// duuuuhhhhh

  setTimeout(function(){playNote(g3sharp)}, 3250)
  setTimeout(function(){playNote(d3sharp)}, 3250)

  setTimeout(function(){playNote(g3sharp)}, 3550)
  setTimeout(function(){playNote(d3sharp)}, 3550)

  setTimeout(function(){playNote(g3sharp)}, 3850)
  setTimeout(function(){playNote(g3sharp)}, 3850)
  // da da da

  setTimeout(function(){playNote(f3sharp)}, 4150)
  setTimeout(function(){playNote(c3sharp)}, 4150)

  setTimeout(function(){playNote(f3sharp)},4500)
  setTimeout(function(){playNote(c3sharp)},4500)
// do do

  setTimeout(function(){playNote(d3sharp)},4850)
  setTimeout(function(){playNote(b3sharp)},4850)
  //duhhhh
}

schedule= []//when the    night        has   come              and     the    land   is    dark     and          the           moon is  the only     light   we'll  see        oh    I    wont        be     a   fraaaaid        NO
standByMe = 'E      G      A            E      G                C      D      E    D    C            C         D   E           C      E  D   C         D     D     C            E      G      A         E     G    A            G      E   D        D   E        D        D   C          C         E         D   C        C         E       D   C        E           D     C'
twinkleTwinkle = 'C   C      G   G     A   A   G    F   F     E   E      D   D    C   G      G   F   F   E   E    D   G      G      F   F     E    E    D      C   C      G   G     A   A   G   F     F     E   E     D     D     C'
kungFuFighting = ''
// string songs

playString = function(string, speed){
  schedule= []
  sortedArray = [];
  unwantedItems = [];
  array = string.split("")
  array = array.map(v => v.toLowerCase());
  array.forEach(function(element){
    if(element == '-'){
      unwantedItems.push(element);
    } else if(element == ' '){
      element = "blank-space"
      let note = { index: (sortedArray.length + 1), instruction: element  }
      sortedArray.push(note);
    } else {
      element = element+'3'
      let note = { index: (sortedArray.length + 1), instruction: element  }
      sortedArray.push(note)
    }
  })
  sortedArray.forEach(function(note){
    if(note.instruction.length > 3){
    } else {
      noteToPlay = window[note.instruction]
      timeToWait = note.index * speed
      let scheduledEvent = { note: note.instruction, playsAfter: timeToWait, keyInfo: noteToPlay }
      schedule.push(scheduledEvent)
      setTimeout(function(){playNote(window[note.instruction])} , timeToWait )
    }
  })
}
inDiscoMode = false;
enterDiscoMode = function(){
  allKeys = [a3, b3, c3, e3, f3, g3, c4, d4, e4, f4, g4]
  falseBody = document.getElementsByClassName('false-body')[0]
  allKeys.forEach(function(key){
    key.appearance.setAttribute('style', 'animation-name: flashColors; animation-duration: 4s; animation-iteration-count: infinite;')
  })
  discoButton.innerHTML = 'Disco Mode: on'
  inDiscoMode = true;
}
exitDiscoMode = function(){
  allKeys = [a3, b3, c3, e3, f3, g3, c4, d4, e4, f4, g4]
  
  allKeys.forEach(function(key){
    key.appearance.setAttribute('style', 'animation-name: none;')
  })
  discoButton.innerHTML = 'Disco Mode: off'
  inDiscoMode = false;
}
toggleDiscoMode = function(){
  if(inDiscoMode){
    exitDiscoMode();
  }else{
    enterDiscoMode();
  }
}


window.onload = initializePiano();
