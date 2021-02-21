const testm = require('./testm');

testm.hello();

function draw(){
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
    }
  }