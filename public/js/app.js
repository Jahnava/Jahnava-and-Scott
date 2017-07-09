$(function(){
  $('.page-container').fullpage({
    navigation: true,
    navigationPosition: 'right'
  });
});

//bubbles
// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
      x: 0,
      y: 0
    };
// The Dot object used to scaffold the dots
var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};
// The Dot.prototype.draw() method sets the position of
  // the object's <div> node
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};
// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}
// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.x,
      y = mouse.y;
  // This loop is where all the 90s magic happens
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    dot.x = x+1;
    dot.y = y-1;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;
  });
}
addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});
// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}
// And get it started by calling animate().
animate();

//new
var preloader = (function(){

  'use-strict';

  // Vars
  var main = $('.main'),
      btn = $('.enter'),
      page = $('.page');


  return {

    run: function(){
      // show on load
      main.show();
      // apend and prepend html
      main.prepend(this.tmpl.tl + this.tmpl.tr);
      main.append(this.tmpl.bl + this.tmpl.br);
      // on click open site
     this.click_btn();
    },


    tmpl:{
      'tl': '<span class="tl"></span>',
      'tr': '<span class="tr"></span>',
      'bl': '<span class="bl"></span>',
      'br': '<span class="br"></span>'
    },


    click_btn: function(){
      btn.on('click',function(){
        page.addClass('loaded');
        btn.addClass('hideThis');
        preloader.animations();
      });
    },

    // for firefox i try in css but not work
    animations: function(){
      var tl = $('.loaded .tl'),
          tr = $('.loaded .tr'),
          bl = $('.loaded .bl'),
          br = $('.loaded .br');

      tl.delay(800).animate({top:'-100%',left:'-100%'},500);
      tr.delay(600).animate({top:'-100%',left:'100%'},500);
      bl.delay(400).animate({top:'100%',left:'100%'},500);
      br.delay(200).animate({top:'100%',left:'-100%'},500);
      btn.remove();
    }
  };
})(jQuery);

preloader.run();

//mouse dots

// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
      x: 0,
      y: 0
    };
// The Dot object used to scaffold the dots
var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};
// The Dot.prototype.draw() method sets the position of
  // the object's <div> node
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};
// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}
// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.x,
      y = mouse.y;
  // This loop is where all the 90s magic happens
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    dot.x = x+1;
    dot.y = y-1;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;
  });
}
addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});
// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}
// And get it started by calling animate().
animate();

// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
   // of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

// The Dot object used to scaffold the dots
var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};
// The Dot.prototype.draw() method sets the position of
  // the object's <div> node
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.x,
      y = mouse.y;

  // This loop is where all the 90s magic happens
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];

    dot.x = x+1;
    dot.y = y-1;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}

addEventListener("mousemove", function(event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();


//lanterns
window.onload = function() {

      // var canvas = document.getElementById("sky");
      var context = canvas.getContext("2d");
      canvas.width = 960;
      canvas.height = 400;
      document.body.appendChild(canvas);

      var particles = {},
          particleIndex = 0,
          settings = {
            density: 5,
            particleSize: 0.5,
            maxLife: 100,
          };

      function Particle() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        particleIndex++;
        particles[particleIndex] = this;
        this.id = particleIndex;
        this.life = 0;
        this.opacity = 0;
      }

      Particle.prototype.draw = function() {

        this.opacity += 0.1;
        this.life++;
        if (this.life >= settings.maxLife) {
          delete particles[this.id];
        }

        context.clearRect(settings.leftWall, settings.groundLevel, canvas.width, canvas.height);
        context.beginPath();
        context.fillStyle= "rgba(255,255,255,"+this.opacity+")";
        context.arc(this.x, this.y, settings.particleSize, 0, Math.PI*2, true);
        context.closePath();
        context.fill();

      }

      setInterval(function() {
        context.fillStyle = "rgba(0,0,20,0.2)";
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the particles
        for (var i = 0; i < settings.density; i++) {
          if (Math.random() > 0.97) {
            new Particle();
          }
        }

        for (var i in particles) {
          particles[i].draw();
        }
      }, 100);
    };
