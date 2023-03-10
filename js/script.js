// INPUT
// Bottone Invia
// assegno elementi per non ripeterli all'interno dei blocchi!
const userNameSurnameInput = document.getElementById("user-name-surname");
const userDistanceInput = document.getElementById("user-distance");
const userAgeInput = document.getElementById("user-age");

const passengerNameSurnameElem = document.getElementById("passenger-name");
const categoryTypeElem = document.getElementById("category-type");
const carriageElem = document.getElementById("carriage");
const cpCodeElem = document.getElementById("cp-code");
const priceElem = document.getElementById("price");

const errorElem = document.getElementById("error-message");

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function() {
    // Messaggio errore hidden
    errorElem.classList.add("hidden");

    // Chiedere Nome e Cognome
    const userNameSurname = userNameSurnameInput.value;
    // Chiedere numero di chilometri
    const userDistance = parseInt(userDistanceInput.value);
    // Chiedere età
    const userAge = userAgeInput.value;
    console.log(userNameSurname, userDistance, userAge);

    // Istruzioni Utente:
    // almeno 3 caratteri nel nome:
    const userNameSurnameIsValid = userNameSurname !== "" && userNameSurname.length > 3;

    // km valore di almeno 10:
    const userDistanceIsValid = !isNaN(userDistance) && userDistance > 10;

    // age campo obbligatorio:
    const userAgeIsValid = userAge !== "";

    if (userNameSurnameIsValid && userDistanceIsValid && userAgeIsValid) {
        
        // LOGICA
        const basePrice = userDistance * 0.21
        let finalPrice = basePrice
        let category = " Standard";
    
        if (userAge === "junior"){
            finalPrice = basePrice - (basePrice / 100 * 20);
            category = "Junior";
        } else if (userAge === "senior"){
            finalPrice = basePrice - (basePrice / 100 * 40);
            category = "Senior";
        }
        console.log(finalPrice);
    
        // Assegnazione Random carrozza e Codice CP
        const rndCarr = Math.floor(Math.random() * 10) + 1;
        const rndTicket = Math.floor(Math.random() * (9500 - 9000)) + 9000;
        console.log(rndCarr, rndTicket);

        // OUTPUT 
        const ticket = document.getElementById("biglietto");
        ticket.classList.remove("hidden");

        passengerNameSurnameElem.innerHTML = userNameSurname;
        categoryTypeElem.innerHTML = category;
        carriageElem.innerHTML = rndCarr;
        cpCodeElem.innerHTML = rndTicket;
        priceElem.innerHTML = `€ ${finalPrice.toFixed(2)}`;

        // Reset dati
        userNameSurnameInput.value = "";
        userDistanceInput.value = "";
        userAgeInput.value = "";
    } else {

        // Stampo messaggio Errore:
        errorElem.classList.remove("hidden");
    }
});

// Reset dei campi
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function() {
    location.reload()
});





