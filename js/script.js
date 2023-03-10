
// INPUT
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", function() {

    // Chiedere Nome e cognome
    const userNameSurnameInput = document.getElementById("user-name-surname");
    const userNameSurname = userNameSurnameInput.value;

    // Chiedere numero di chilometri
    const userDistanceInput = document.getElementById("user-distance");
    const userDistance = parseInt(userDistanceInput.value);

    // Chiedere età
    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value;

    console.log(userNameSurname, userDistance, userAge);


// LOGICA

    const basePrice = userDistance * 0.21
    let finalPrice = basePrice
    let offer = " Standard";

    if (userAge === "junior"){
        finalPrice = basePrice - (basePrice / 100 * 20);
        offer = "Junior";
    } else if (userAge === "senior"){
        finalPrice = basePrice - (basePrice / 100 * 40);
        offer = "Senior";
    }
    console.log(finalPrice);

    // Assegnazione Random carrozza e Codice CP
    const rndCarr = Math.floor(Math.random() * 10) + 1;
    const rndTicket = Math.floor(Math.random() * (9500 - 9000)) + 9000;
    console.log(rndCarr, rndTicket);


// OUTPUT 
// correzzione
    document.getElementById("")
    document.getElementById("")
    document.getElementById("")
    document.getElementById("")
    document.getElementById("")

    // result.innerHTML = `IL TUO BIGLIETTO= NOME E COGNOME: ${userNameSurname} OFFERTA: ${offer} CARROZZA: ${rndCarr} CODICE CP: ${rndTicket} PREZZO BIGLIETTO: € ${finalPrice.toFixed(2)}`;
});




// Reset dei campi
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function() {
    location.reload()
});





