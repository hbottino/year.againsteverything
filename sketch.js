function setup() {
  createCanvas(550, 775);
  background(240, 227, 206);
}

var a = 187; 
var b = 46;
var c = 49;

var d = 172;
var e = 131;
var f = 37;

var g = 39;
var h = 127;
var i = 187;

var j = 234;
var k = 173;
var l = 157;


var uno = {
  
  draw: function () {
  fill(a, b, c),
  noStroke(),
  quad(50, 175, 350, 50, 350, 175, 175, 250);
  
  }
  
  
}

var dos = {
  
  draw: function () {
  
  fill(d, e, f)
  noStroke()
  quad(350,50,475,125,475,600,350,525,350,175);
  
  }
}

var tres = {
  
  draw: function () {
  
  fill(g, h, i)
  noStroke()
  quad(350,525,475,600,175,725,175,600);
  
  }

}

var cuatro = {
  
  draw: function () {
  
  fill(j, k, l)
  noStroke()
  quad(50, 175, 175,250, 175, 725, 50, 650);
  
  }
}
  

function draw() {
  
  //fill(187, 46, 49)
  //noStroke()
  //quad(50, 175, 350, 50, 350, 175, 175, 250);
  uno.draw();

  //fill(172, 131, 37)
  //noStroke()
  //quad(350,50,475,125,475,600,350,525,350,175);

  dos.draw ();
  
  //fill(39, 127, 187)
  //noStroke()
  //quad(350,525,475,600,175,725,175,600);
 
  tres.draw ();

  //fill(234, 173, 157)
  //noStroke()
  //quad(50, 175, 175,250, 175, 725, 50, 650);
  
  cuatro.draw ();

  }
  
  function mousePressed () {
    
    if (a == 187) {
      a = 172;
      b = 131;
      c = 37;
      
      d = 39;
      e = 127;
      f = 187;
      
      g = 234;
      h = 173;
      i = 157;
      
      j = 187;
      k = 46;
      l = 49;
      
      
    } else if ( a == 172){
      a = 39;
      b = 127;
      c = 187;
      
      d = 234;
      e = 173;
      f = 157;
      
      g = 187;
      h = 46;
      i = 49;
      
      j = 172;
      k = 131;
      l = 37;
      
    } else if ( a == 39) {
      a = 234;
      b = 173;
      c = 157;
      
      d = 187;
      e = 46;
      f = 49;
      
      g = 172;
      h = 131;
      i = 37;
      
      j = 39;
      k = 127;
      l = 187;
      
      
    } else if ( a == 234) {
      a = 187;
      b = 46;
      c = 49;
      
      d = 172;
      e = 131;
      f = 37;
      
      g = 39;
      h = 127;
      i = 187;
      
      j = 234;
      k = 173;
      l = 157;
      
    }
    
    
    
  
    
    
    
    
  }

  