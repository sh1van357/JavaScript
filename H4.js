//Op 2

var mijnauto = {
    kleur: "blauw",
    merk: "Ford",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5
        console.log(this.snelheid)
    },

    toeteren: function () {
        console.log("Toet!")
    }
}
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.toeteren();

//Op 1

var plaatjes = [1,2,3,4,5,6,7,8,9];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('img2/q1.jpg')";

slideholder.addEventListener("click", function() {
    slideholder.style.backgroundImage = "url('img2/q" + getDriver() + ".jpg')";
});

function getDriver() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}