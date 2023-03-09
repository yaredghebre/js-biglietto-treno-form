
// INPUT
    const submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", function() {
    const result = document.getElementById("result");
    // Reset dei risultati
    result.className = "";
    
    // Chiedere Nome e cognome
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;

    const userSurnameInput = document.getElementById("user-surname");
    const userSurname = userSurnameInput.value;

    // Chiedere numero di chilometri
    const userDistanceInput = document.getElementById("user-distance");
    const userDistance = userDistanceInput.value;

    // Chiedere età
    const userAgeInput = document.querySelector("user-age");
    const userAge = userAgeInput;

    console.log(userName, userSurname, userDistance);

// LOGICA
    // Prezzo percorrenza per Km
    const pricePerKm = 0.21    

    let price = userDistance * pricePerKm

    if (userAge == "junior"){
        price = price - (price / 100 * 20);
    } else if (userAge =="senior") {
        price = price - (price / 100 * 40);
    }

    console.log(price);

    // Assegnazione Random carrozza e Codice CP
    const rndCarr = Math.floor(Math.random() * 10) + 1;
    const rndTicket = Math.floor(Math.random() * 9500) + 9000;
    console.log(rndCarr, rndTicket);

// OUTPUT 
    result.innerHTML = `NOME: ${userName} COGNOME: ${userSurname} CARROZZA: ${rndCarr} CODICE CP: ${rndTicket} PREZZO BIGLIETTO: € ${price.toFixed(2)}`;
});


// Reset dei campi
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function() {
    location.reload()
});





