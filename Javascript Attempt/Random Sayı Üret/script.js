function random() {
  let negRnd = Math.floor(Math.random() * -101);
  let pozRnd = Math.floor(Math.random() * 101);

  let rnd = negRnd + pozRnd;

  let deg = document.getElementById("value");
  deg.innerHTML = rnd;

  if (rnd > 0) {
    document.getElementById("poz").innerHTML = "ve sayı pozitiftir.";
    document.getElementById("value").style.color = "green";
    document.getElementById("poz").style.color = "green";
    document.getElementById("neg").innerHTML = " ";
  } else {
    document.getElementById("neg").innerHTML = "ve sayı negatiftir.";
    document.getElementById("value").style.color = "red";
    document.getElementById("neg").style.color = "red";
    document.getElementById("poz").innerHTML = " ";
  }
}
