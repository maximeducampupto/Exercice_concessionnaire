/**
 * Created by sstienface on 16/10/2018.
 */

var voiture = {
    "Nom" : "Eggo",
    "imgUrl" : "https://fr.ubergizmo.com/wp-content/uploads/2011/10/eggo_01.jpg",
    "nombresRoues" : 4,
    "Couleur" : "Marron",
    "Contructeur" : "Citroen",
    "Carburant" : "Solaire",
    "nombrePortes" : 3,
    "Autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};

var infos = {
    wrapper : document.getElementById('main-wrapper'),
    h1 : document.createElement('h1'),
    img : document.createElement('img'),
    ul : document.createElement('ul'),
};

infos.h1.innerHTML = voiture.Nom;
infos.img.alt = voiture.Nom;
infos.img.src = voiture.imgUrl;

for (prop in voiture)
{
    if (prop !== "Nom" && prop !== "imgUrl")
    {
        let li = document.createElement('li');
        li.innerHTML = `${prop} : ${voiture[prop]}`;
        infos.ul.appendChild(li);
    }
}

for (prop in infos)
{
    if (prop !== "wrapper")
    {
        infos.wrapper.appendChild(infos[prop]);
    }
}
