function color_write() {
  let ak = "Aktif Renk ";

  let rnd = Math.floor(Math.random() * 5);

  let color_name = ["Kırmızı", "Mavi", "Yeşil", "Sarı", "Siyah"];

  let yaz = document.getElementById("yazi");
  yaz.innerHTML = ak + color_name[rnd];

  let back_color = ["red", "blue", "green", "yellow", "black"];

  document.getElementById("kutu").style.backgroundColor = back_color[rnd];
}

