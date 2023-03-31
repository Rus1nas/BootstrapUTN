let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('La Capital Financiera del Mundo')
  .pauseFor(300)
  .deleteChars(20)
  .start();


 