let villeChoisie;
if ( "geolocation" in navigator){

  
  navigator.geolocation.watchPosition((position) => {

    const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + position.coords.longitude +'&lat='+ position.coords.latitude  + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';


      let requete = new XMLHttpRequest(); // creation objet qui nous permettra de faire des requêtes
      requete.open('GET', url); // je recupere les données
      requete.responseType = 'json'; 
      requete.send(); // envoi de requête

      //  fonction est executée
      requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
          if (requete.status === 200) {
            let reponse = requete.response;
            // console.log(reponse);
            let temperature = reponse.main.temp;
            let ville       = reponse.name;
            // console.log(temperature);
            document.querySelector('#temperature_label').textContent = temperature;
            document.querySelector('#ville').textContent = ville;
          }
          else {
            alert('Un problème est intervenu, merci de revenir plus tard.');
          }
        }
      }
      




  },erreur, option)

}else{
  let villeChoisie = "Montreal";
  recevoirTemperature(villeChoisie);

}
var option ={
  enableHightAccuracy : true
}

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
  recevoirTemperature(villeChoisie);
});

function erreur(){
  villeChoisie = "Cotonou";
  recevoirTemperature(villeChoisie);

}

function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

  let requete = new XMLHttpRequest(); // creation objet qui nous permettra de faire des requêtes
  requete.open('GET', url); // je recupere les données
  requete.responseType = 'json'; 
  requete.send(); // envoi de requête

  //  fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        // console.log(reponse);
        let temperature = reponse.main.temp;
        let ville       = reponse.name;
        // console.log(temperature);
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
}