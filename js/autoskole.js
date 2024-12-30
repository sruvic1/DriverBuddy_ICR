// Autoškole prema gradovima
const autoskole = {
    sarajevo: [
        { naziv: "Autoškola Sauter", telefon: "+387 33 123 456" },
        { naziv: "Autoškola Safety", telefon: "+387 33 654 321" },
        { naziv: "Autoškola Klas", telefon: "+387 33 234 567" }
    ],
    zenica: [
        { naziv: "Autoškola Zenica", telefon: "+387 32 123 456" },
        { naziv: "Autoškola As", telefon: "+387 32 654 321" }
    ],
    mostar: [
        { naziv: "Autoškola Mostar", telefon: "+387 36 123 456" },
        { naziv: "Autoškola S", telefon: "+387 36 654 321" }
    ],
    tuzla: [
        { naziv: "Autoškola Tuzla", telefon: "+387 35 123 456" },
        { naziv: "Autoškola Tuz", telefon: "+387 35 654 321" }
    ],
    banjaLuka: [
        { naziv: "Autoškola Banja Luka", telefon: "+387 51 123 456" },
        { naziv: "Autoškola ABC", telefon: "+387 51 654 321" }
    ],
    bihac: [
        { naziv: "Autoškola Bihać", telefon: "+387 37 123 456" },
        { naziv: "Autoškola Petrovac", telefon: "+387 37 654 321" }
    ],
    brcko: [
        { naziv: "Autoškola Brčko", telefon: "+387 49 123 456" },
        { naziv: "Autoškola Družina", telefon: "+387 49 654 321" }
    ],
    bijeljina: [
        { naziv: "Autoškola Bijeljina", telefon: "+387 55 123 456" },
        { naziv: "Autoškola Novo", telefon: "+387 55 654 321" }
    ],
};

// Funkcija koja puni grid prema odabranom gradu
function loadAutoskole(city) {
    const grid = document.getElementById("grid");
    grid.innerHTML = ""; // Očistiti grid prije nego što se puni

    if (autoskole[city]) {
        autoskole[city].forEach(school => {
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";

            const schoolName = document.createElement("h3");
            schoolName.innerText = school.naziv;
            gridItem.appendChild(schoolName);

            const phoneNumber = document.createElement("p");
            phoneNumber.innerText = "Telefon: " + school.telefon;
            gridItem.appendChild(phoneNumber);

            // Kreiraj link ka posebnoj stranici za autoškolu
            const moreInfoLink = document.createElement("a");
            moreInfoLink.href = "#";
            moreInfoLink.innerText = "Više informacija";
            gridItem.appendChild(moreInfoLink);

            grid.appendChild(gridItem);
        });
    }
}

// Event listener za promjenu grada
document.getElementById("options").addEventListener("change", function() {
    loadAutoskole(this.value);
});

// Pokreni sa prvim gradom kao default
loadAutoskole("sarajevo");
