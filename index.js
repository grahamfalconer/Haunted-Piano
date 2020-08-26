
initializePiano = function(){
  findComponents();
  attachEventListeners();
}
findComponents = function(){
  a3 = {appearance: document.getElementById('key-a-3'), sound: document.getElementById('A3')}
  b3 = {appearance: document.getElementById('key-b-3'), sound: document.getElementById('B3')}
  c3 = {appearance: document.getElementById('key-c-3'), sound: document.getElementById('C3')}
  d3 = {appearance: document.getElementById('key-d-3'), sound: document.getElementById('D3')}
  e3 = {appearance: document.getElementById('key-e-3'), sound: document.getElementById('E3')}
  f3 = {appearance: document.getElementById('key-f-3'), sound: document.getElementById('F3')}
  g3 = {appearance: document.getElementById('key-g-3'), sound: document.getElementById('G3')}
  c4 = {appearance: document.getElementById('key-c-4'), sound: document.getElementById('C4')}
  d4 = {appearance: document.getElementById('key-d-4'), sound: document.getElementById('D4')}
  e4 = {appearance: document.getElementById('key-e-4'), sound: document.getElementById('E4')}
  f4 = {appearance: document.getElementById('key-f-4'), sound: document.getElementById('F4')}
  g4 = {appearance: document.getElementById('key-g-4'), sound: document.getElementById('G4')}

}
attachEventListeners = function(){
  document.addEventListener("keydown", function(event){
    key = event.key;
    if(key == 'a'){
      keyPressed(c3)
    } else if(key == 's'){
      keyPressed(d3)
    }else if(key == 'd'){
      keyPressed(e3)
    }else if(key == 'f'){
      keyPressed(f3)
    }else if(key == 'g'){
      keyPressed(g3)
    }else if(key == 'h'){
      keyPressed(c4)
    }else if(key == 'j'){
      keyPressed(d4)
    }else if(key == 'k'){
      keyPressed(e4)
    }else if(key == 'l'){
      keyPressed(f4)
    }else if(key == ';'){
      keyPressed(g4)
    }
  })
  document.addEventListener("keyup", function(event){
    key = event.key;
    if(key == 'a'){
      keyReleased(c3)
    } else if(key == 's'){
      keyReleased(d3)
    }else if(key == 'd'){
      keyReleased(e3)
    }else if(key == 'f'){
      keyReleased(f3)
    }else if(key == 'g'){
      keyReleased(g3)
    }else if(key == 'h'){
      keyReleased(c4)
    }else if(key == 'j'){
      keyReleased(d4)
    }else if(key == 'k'){
      keyReleased(e4)
    }else if(key == 'l'){
      keyReleased(f4)
    }else if(key == ';'){
      keyReleased(g4)
    }
  })
}
//helper functions
keyPressed = function(key){
  key.sound.play()
  // console.log(key)
  key.appearance.setAttribute('style', 'background-color: grey;')
  console.log(key)
}
keyReleased = function(key){
  key.sound.currentTime = 0;
  key.sound.pause();
  key.appearance.setAttribute('style', 'background-color: white;')
}

playNote = function(key){
  keyPressed(key)
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
  setTimeout(function(){playNote(g4)}, 100)
  setTimeout(function(){playNote(e4)}, 100)
  setTimeout(function(){playNote(g4)}, 400)
  setTimeout(function(){playNote(e4)}, 400)
  setTimeout(function(){playNote(g4)}, 700)
  setTimeout(function(){playNote(e4)}, 700)
  setTimeout(function(){playNote(g4)}, 1000)
  setTimeout(function(){playNote(e4)}, 1000)
// da da da

  setTimeout(function(){playNote(f4)},1300)
  setTimeout(function(){playNote(d4)},1300)
  setTimeout(function(){playNote(f4)},1650)
  setTimeout(function(){playNote(d4)},1650)
 // do do

  setTimeout(function(){playNote(c4)},2000)
  setTimeout(function(){playNote(e4)},2000)

  setTimeout(function(){playNote(c4)},2350)
  setTimeout(function(){playNote(e4)},2350)
// do do

  setTimeout(function(){playNote(d4)},2700)
  setTimeout(function(){playNote(g3)},2700)
// duuuuhhhhh

  setTimeout(function(){playNote(d4)}, 3250)
  setTimeout(function(){playNote(g3)}, 3250)

  setTimeout(function(){playNote(d4)}, 3550)
  setTimeout(function(){playNote(g3)}, 3550)

  setTimeout(function(){playNote(d4)}, 3850)
  setTimeout(function(){playNote(g3)}, 3850)
  // da da da

  setTimeout(function(){playNote(f3)}, 4150)
  setTimeout(function(){playNote(c4)}, 4150)

  setTimeout(function(){playNote(f3)},4500)
  setTimeout(function(){playNote(c4)},4500)
// do do

  setTimeout(function(){playNote(e3)},4850)
  setTimeout(function(){playNote(g3)},4850)
  //duhhhh
}


window.onload = initializePiano();

schedule= []//when the    night        has   come              and     the    land   is    dark     and          the           moon is  the only     light   we'll  see        oh    I    wont        be     a   fraaaaid        NO
standByMe = 'E      G      A            E      G                C      D      E    D    C            C         D   E           C      E  D   C         D     D     C            E      G      A         E     G    A            G      E   D        D   E        D        D   C          C         E         D   C        C         E       D   C        E           D     C'
twinkleTwinkle = 'C   C      G   G     A   A   G    F   F     E   E      D   D    C   G      G   F   F   E   E    D   G      G      F   F     E    E    D      C   C      G   G     A   A   G   F     F     E   E     D     D     C'

playString = function(string, speed){

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
