let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo aplicaciones móviles con Flutter. :)')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  //verde 7fd37f
  //rosa fa947c
