
var numbers = new Array();

function newDrawing() {
   var i;
   for (i in numbers) {
      document.getElementById("N" + numbers[i].toString()).className = "";
   }
   drawNumbers();
   for (i in numbers) {
      document.getElementById("N" + numbers[i].toString()).className = "hi";
   }
   return;
}

function drawNumbers() {
   numbers = new Array();
   var rnd;
   while (numbers.length < 6) {
      rnd = Math.ceil(Math.random() * 49);
      var i, alreadyThere = false;
      for (i in numbers) {
         if (numbers[i] == rnd) alreadyThere = true;
      }
      if (!alreadyThere) numbers.push(rnd);
   }
   return;
}
