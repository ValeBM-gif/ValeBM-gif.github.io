let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 

var texto = 'Desarrollo aplicaciones móviles con Flutter. :)'

typewriter
  .pauseFor(2500)
  .typeString(texto)
  .pauseFor(200).start()
  
  
  let app_e = document.getElementById('typewriter2');
 
let typewriter2 = new Typewriter(app_e, {
  loop: true,
  delay: 75,
});
 

var texto2 = 'I develop mobile apps with Flutter. :)'

typewriter2
  .pauseFor(2500)
  .typeString(texto2)
  .pauseFor(200)
  .deleteChars(10).start()

  //verde 7fd37f
  //rosa fa947c
  document.getElementById("toggle-language").addEventListener("click", function () {
    const btn = this;
    const contentEs = document.querySelectorAll(".content-es");
    const contentEn = document.querySelectorAll(".content-en");

    if (btn.textContent === "English") {
      btn.textContent = "Español";
      contentEs.forEach(el => el.classList.add("d-none"));
      contentEn.forEach(el => el.classList.remove("d-none"));
    } else {
      btn.textContent = "English";
      contentEn.forEach(el => el.classList.add("d-none"));
      contentEs.forEach(el => el.classList.remove("d-none"));
    }
  });