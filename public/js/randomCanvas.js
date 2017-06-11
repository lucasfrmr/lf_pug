sketches = ['js/sketches/sketch-geostar.js', 'js/sketches/recursiveRect.js', 'js/sketches/cards.js'];
var sketch;
function loadRandomSketch(){
  // sketch = 'lib/sketches/horde.js';
 sketch = sketches[Math.floor((Math.random() * sketches.length))];
  document.getElementById('p5canvas').src= sketch;
  return sketch;
}

loadRandomSketch();

// function btnPress(){
//   let node = document.getElementsByTagName('button');
//   let textnode = document.createTextNode(sketch);
//   node.appendChild(textnode);
//   document.getElementById("btn").appendChild(node);
// }

//function change() // no ';' here
//{
//  this.value = sketch;
//  loadRandomSketch();
//  console.log(sketch);
//}

// function change() // no ';' here
// {
//     var elem = document.getElementById("btn");
//     if (elem.value=="Random Sketch") elem.value = sketch;
//     else elem.value = sketch;
//     loadRandomSketch();
//     console.log(sketch);
// }

