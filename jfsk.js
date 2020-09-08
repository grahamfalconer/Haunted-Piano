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
