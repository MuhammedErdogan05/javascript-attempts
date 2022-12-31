let verilerim = [];

function bayrakulke() {
  let bayList = document.getElementById("bayrakulke");
  fetch("https://restcountries.com/v3.1/all")
    .then((cevap) => cevap.json())
    .then((veri) => {
      verilerim = veri;
      for (let tekrar of verilerim) {
        let bayrak = tekrar.flag;
        let ulke = tekrar.name.common;
        bayList.innerHTML += `<div> ${bayrak} ${ulke}</div>`;
      }
    });
}

function search() {
  let divdis = document.getElementById("bayrakulke");
  divdis.innerHTML = "";

  let yazılan = document.getElementById("search").value;

  verilerim = verilerim.filter((veri) => {
    return veri.name.common.includes(yazılan);
  });

  for (let tekrar of verilerim) {
    let bayrak = tekrar.flag;
    let ulke = tekrar.name.common;
    divdis.innerHTML += `<div> ${bayrak} ${ulke}</div>`;
  }
}
