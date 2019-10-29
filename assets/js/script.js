let change = function() {//crée la fonction pour changer l'image
 this.src = "assets/img/" + this.id + "_2.jpg";
}
document.getElementById('image1').onmouseover = change;
document.getElementById('image2').onmouseover = change;
document.getElementById('image3').onmouseover = change;
document.getElementById('image4').onmouseover = change;
document.getElementById('image5').onmouseover = change;
