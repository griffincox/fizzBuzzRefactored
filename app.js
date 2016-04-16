$(document).ready(function() {
  var userNum = parseInt(prompt("Pick an integer"));
  for (var i=1; i<=userNum; i++) {
    var mod3 = (i % 3);
    var mod5 = (i % 5);
    var mod15= (i % 15);
    var el = document.createElement("p");
    if (mod15 == 0) {
      el.innerHTML = "FizzBuzz";
      document.body.appendChild(el);
    }
    else if (mod3 == 0) {
      el.innerHTML = "Fizz";
      document.body.appendChild(el);
    }
    else if (mod5 == 0) {
      el.innerHTML = "Buzz";
      document.body.appendChild(el);
    }
    else {
      el.innerHTML = i;
      document.body.appendChild(el);
    }
  }
});
