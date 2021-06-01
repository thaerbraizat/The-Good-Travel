"use strict";

let arrOfTravel = [];

function Travel(PlacesName, TripPlace, TypeOfTransport) {

    this.PlacesName = PlacesName;
    this.TripPlace = TripPlace;
    this.TypeOfTransport = TypeOfTransport;
    arrOfTravel.push(this);


}
console.log(arrOfTravel);

let form = document.getElementById("travelForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let PlacesName = event.target.PlaceName.value;
    let TripPlace = event.target.TripPlace.value;
    let TypeOfTransport = event.target.TypeOfTransport.value;

    new Travel(PlacesName, TripPlace, TypeOfTransport);

    saveToLs();
    Travel.prototype.render();
    document.getElementById("travelForm").reset();


}


Travel.prototype.render = function () {

    let image = document.createElement("img");
    let main = document.getElementById("main");
    let section = document.createElement("section");
    let unorderList = document.createElement("ul");
    let list = document.createElement("li");
    section.appendChild(image);
    main.appendChild(section);
    section.appendChild(unorderList);

  if (arrOfTravel[arrOfTravel.length - 1].TripPlace === "HAWAII"){
        image.src= `images/${arrOfTravel[arrOfTravel.length - 1].TripPlace}.jpg`;
    }else{
        image.src=`images/${arrOfTravel[arrOfTravel.length - 1].TripPlace}.png`;
    }
 

    

    unorderList.appendChild(list);
    list.textContent = ` Places Name: ${arrOfTravel[arrOfTravel.length - 1].PlacesName}`

    list = document.createElement("li");
    unorderList.appendChild(list);
    list.textContent = ` Trip Place: ${arrOfTravel[arrOfTravel.length - 1].TripPlace}`

    list = document.createElement("li");
    unorderList.appendChild(list);
    list.textContent = ` Type Of Transport: ${arrOfTravel[arrOfTravel.length - 1].TypeOfTransport}`;
    

    let btn = document.createElement("button");
    section.appendChild(btn);
    btn.textContent="x";
    btn.addEventListener("click",handleDelet);

    function handleDelet(event){
        event.preventDefault();
         main.removeChild(section);
         console.log(section);

         localStorage.clear();

    }

}


function saveToLs() {
    let arrStr = JSON.stringify(arrOfTravel);
    localStorage.setItem("Data", arrStr);
}

function getFromLs() {
    let data = localStorage.getItem("Data");
    let show = JSON.parse(data);

    if (show) {
        for (let i = 0; i < show.length; i++) {
            let newInst = new Travel(show[i].PlacesName, show[i].TripPlace, show[i].TypeOfTransport);
            console.log(newInst);

            Travel.prototype.render();
        }
    }
}
getFromLs();