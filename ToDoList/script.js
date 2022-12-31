function textAdd() {
  let yazi = document.getElementById("input-box").value;
  let note = document.getElementById("note");

  if (yazi.length > 0) {
    note.innerHTML += `<div> ${yazi}</div>`;
  }
  document.getElementById("input-box").value = "";
}
