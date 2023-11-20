let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #563e7d;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #563e7d;">Soy estudiante de la Licenciatura en Ciencias Computacionales de la UANL</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
