let attempts = 0;
let correctFighter = fighters[Math.floor(Math.random() * fighters.length)];
let guessedFighters = []; // Tracks fighters the player has guessed


const inputField = document.getElementById("fighterInput");
const submitButton = document.getElementById("submitGuess");
const resetButton = document.getElementById("resetGame");
const previousGuessesContainer = document.getElementById("previousGuesses");
const resultMessage = document.getElementById("resultMessage");

const dropdown = document.createElement("div");
dropdown.classList.add("autocomplete-dropdown");
inputField.parentNode.appendChild(dropdown);

function positionDropdown() {
    dropdown.style.left = `${inputField.offsetLeft}px`;
    dropdown.style.top = `${inputField.offsetTop + inputField.offsetHeight}px`;
    dropdown.style.width = `${inputField.offsetWidth}px`;
}

function showDropdownOptions(matches) {
    dropdown.innerHTML = "";
    if (matches.length === 0) {
        dropdown.style.display = "none";
        return;
    }

    matches.forEach(fighter => {
        const option = document.createElement("div");
        option.classList.add("dropdown-option");
        option.innerHTML = `<img src="${fighter.image}" class="dropdown-face-icon" alt="${fighter.name}"> <span>${fighter.name}</span>`;
        option.addEventListener("click", () => {
            inputField.value = fighter.name;
            dropdown.style.display = "none";
            inputField.focus();
        });
        dropdown.appendChild(option);
    });

    dropdown.style.display = "block";
    positionDropdown();
}

fighters.sort((a, b) => a.name.localeCompare(b.name));

function filterFighters(searchText) {
    if (searchText.length === 0) {
        dropdown.style.display = "none";
        return;
    }

    const lowerSearch = searchText.toLowerCase();
    const matches = fighters.filter(fighter =>
        !guessedFighters.includes(fighter.name) && // Exclude already guessed fighters
        (fighter.name.toLowerCase().startsWith(lowerSearch) ||
         fighter.name.toLowerCase().split(" ")[1]?.startsWith(lowerSearch))
    );

    showDropdownOptions(matches);
}


function handleEnterSubmit(event) {
    if (event.key === "Enter") {
        const firstOption = dropdown.querySelector(".dropdown-option");
        if (firstOption) {
            inputField.value = firstOption.textContent.trim();
        }
        dropdown.style.display = "none";
        checkGuess();
    }
}

function checkGuess() {
    attempts++;
    const userGuess = inputField.value.trim().toLowerCase();
    if (!userGuess) return;

    const guessedFighter = fighters.find(fighter => fighter.name.toLowerCase() === userGuess);
    if (guessedFighter) {
        if (guessedFighters.includes(guessedFighter.name)) {
            displayResultMessage(`❌ You already guessed ${guessedFighter.name}! Try someone else.`, "orange");
            return; // Stop further processing
        }
    
        guessedFighters.push(guessedFighter.name); // Add fighter to guessed list
    
        createHeaderRow();
        if (guessedFighter.name === correctFighter.name) {
            addPreviousGuess(guessedFighter, true);
        } else {
            addPreviousGuess(guessedFighter, false);
        }
    }
    

    inputField.value = "";
    dropdown.style.display = "none";

    // Check if we need to enable hints
    updateHintsState();
}


function addPreviousGuess(guessedFighter, isCorrect = false) {
    const guessRow = document.createElement("div");
    guessRow.classList.add("guess-row");

    guessRow.innerHTML = `
        <div class="fighter-name-box">
            <img src="${guessedFighter.image}" class="fighter-face-icon" alt="${guessedFighter.name}">
        </div>
        ${generateHintBox(guessedFighter.age, correctFighter.age)}
        ${generateHintBox(guessedFighter.gender, correctFighter.gender)}
        ${generateHintBox(guessedFighter.country, correctFighter.country, true)}
        ${generateHintBox(guessedFighter.fights, correctFighter.fights)}
        ${generateHintBox(guessedFighter.wins, correctFighter.wins)}
        ${generateHintBox(guessedFighter.debutYear, correctFighter.debutYear)}
        ${generateHintBox(guessedFighter.weightClass, correctFighter.weightClass, false, true)}
    `;

    previousGuessesContainer.prepend(guessRow);

    const hintBoxes = guessRow.querySelectorAll(".hint-box");
    hintBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add("revealed");
        }, index * 400); // Flips each one every 0.4s
    });

    if (isCorrect) {
        const totalFlipTime = hintBoxes.length * 400;
        setTimeout(() => {
            displayResultMessage(`🎉 Correct! The fighter was <b>${correctFighter.name}</b>!`, "green");
            submitButton.disabled = true;
            resetButton.style.display = "block";
    
            launchConfetti(); // Confetti explosion
            showVictoryCard(correctFighter);
        }, totalFlipTime + 400);
    }
}    

function generateHintBox(guessValue, correctValue, isCountry = false, isWeightClass = false) {
    let hintClass = "hint-wrong";

    if (isWeightClass) {
        const guessedClasses = Array.isArray(guessValue) ? guessValue : [guessValue];
        const correctClasses = Array.isArray(correctValue) ? correctValue : [correctValue];

        const matchingClasses = guessedClasses.filter(value => correctClasses.includes(value));

        if (matchingClasses.length === correctClasses.length && guessedClasses.length === correctClasses.length) {
            hintClass = "hint-correct"; // Full match (green)
        } else if (matchingClasses.length > 0) {
            hintClass = "hint-partial"; // Partial match (orange)
        }
    } else if (isCountry) {
        const guessedCountries = Array.isArray(guessValue) ? guessValue : [guessValue];
        const correctCountries = Array.isArray(correctValue) ? correctValue : [correctValue];

        const matchingCountries = guessedCountries.filter(country => correctCountries.includes(country));

        if (matchingCountries.length === correctCountries.length && guessedCountries.length === correctCountries.length) {
            hintClass = "hint-correct"; // Full match (green)
        } else if (matchingCountries.length > 0) {
            hintClass = "hint-partial"; // Partial match (orange)
        }
    } else if (guessValue === correctValue) {
        hintClass = "hint-correct";
    } else if (typeof guessValue === "number") {
        hintClass = guessValue > correctValue ? "hint-lower" : "hint-higher";
    }

    // Ensure all country and weight class arrays are displayed properly
    const displayValue = Array.isArray(guessValue) ? guessValue.join(", ") : guessValue;

    return `<div class="hint-box ${hintClass}">${displayValue}</div>`;
}

function createHeaderRow() {
    const headerContainer = document.getElementById("headerRowContainer");
    if (!headerContainer.querySelector(".guess-header")) {
        const headerRow = document.createElement("div");
        headerRow.classList.add("guess-header");
        headerRow.innerHTML = `
            <div>Fighter</div>
            <div>Age</div>
            <div>Gender</div>
            <div>Country</div>
            <div>Fights</div>
            <div>Wins</div>
            <div>Debut Year</div>
            <div>Weight</div>
        `;
        headerContainer.appendChild(headerRow);
    }
}

function updateHintsState() {
    const hint1Image = document.getElementById("hint1Image");
    const hint2Image = document.getElementById("hint2Image");
    const hint3Image = document.getElementById("hint3Image");

    const hint1Countdown = document.getElementById("hint1Countdown");
    const hint2Countdown = document.getElementById("hint2Countdown");
    const hint3Countdown = document.getElementById("hint3Countdown");

    // Hint 1 unlocks after 5 attempts
    if (attempts >= 5) {
        hint1Image.classList.remove('disabled-hint');
        hint1Image.classList.add('enabled-hint');
        hint1Countdown.textContent = "Style clue";
    } else {
        const remaining = 5 - attempts;
        hint1Countdown.textContent = `Style clue in ${remaining} ${remaining === 1 ? 'try' : 'tries'}`;
    }

    // Hint 2 unlocks after 8 attempts
    if (attempts >= 8) {
        hint2Image.classList.remove('disabled-hint');
        hint2Image.classList.add('enabled-hint');
        hint2Countdown.textContent = "Last appearance clue";
    } else {
        const remaining = 8 - attempts;
        hint2Countdown.textContent = `Last appearance clue in ${remaining} ${remaining === 1 ? 'try' : 'tries'}`;
    }

    // Hint 3 (Nickname) unlocks after 10 attempts
    if (attempts >= 10) {
        hint3Image.classList.remove('disabled-hint');
        hint3Image.classList.add('enabled-hint');
        hint3Countdown.textContent = "Nickname clue";
    } else {
        const remaining = 10 - attempts;
        hint3Countdown.textContent = `Nickname clue in ${remaining} ${remaining === 1 ? 'try' : 'tries'}`;
    }
}


function revealHint1() {
    if (!document.getElementById("hint1Image").classList.contains("enabled-hint")) return;
    const hint1Popdown = document.getElementById("hint1Popdown");
    hint1Popdown.style.display = "block";
    hint1Popdown.textContent = `Fighting Style: ${correctFighter.hints.style}`;
}

function revealHint2() {
    if (!document.getElementById("hint2Image").classList.contains("enabled-hint")) return;
    const hint2Popdown = document.getElementById("hint2Popdown");
    hint2Popdown.style.display = "block";
    hint2Popdown.textContent = `Last UFC Appearance: ${correctFighter.hints.lastAppearance}`;
}

function displayResultMessage(message, color) {
    resultMessage.innerHTML = message;
    resultMessage.style.color = color;
}

function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
    });
}

function showVictoryCard(fighter) {
    const victoryCard = document.getElementById("victoryCard");
    const victoryFighterImage = document.getElementById("victoryFighterImage");
    const victoryFighterName = document.getElementById("victoryFighterName");
    const victoryAttempts = document.getElementById("victoryAttempts");

    victoryFighterImage.src = fighter.image;
    victoryFighterName.textContent = fighter.name;
    victoryAttempts.textContent = attempts;

    victoryCard.style.display = "block";

    // Smooth scroll to the victory card
    setTimeout(() => {
        victoryCard.scrollIntoView({ behavior: "smooth" });
    }, 300); // Optional slight delay
}


function resetGame() {
    correctFighter = fighters[Math.floor(Math.random() * fighters.length)];
    guessedFighters = [];

    document.getElementById("headerRowContainer").innerHTML = "";
    document.getElementById("previousGuesses").innerHTML = "";
    displayResultMessage("", "black");
    submitButton.disabled = false;
    resetButton.style.display = "none";
    attempts = 0;

    document.getElementById("victoryCard").style.display = "none";

    // Reset hints...
}

{
    const hint1Image = document.getElementById("hint1Image");
    const hint2Image = document.getElementById("hint2Image");
    const hint3Image = document.getElementById("hint3Image");

    const hint1Countdown = document.getElementById("hint1Countdown");
    const hint2Countdown = document.getElementById("hint2Countdown");
    const hint3Countdown = document.getElementById("hint3Countdown");

    hint1Image.classList.add('disabled-hint');
    hint1Image.classList.remove('enabled-hint');
    hint2Image.classList.add('disabled-hint');
    hint2Image.classList.remove('enabled-hint');
    hint3Image.classList.add('disabled-hint');
    hint3Image.classList.remove('enabled-hint');

    hint1Countdown.textContent = "Style clue in 5 tries";
    hint2Countdown.textContent = "Last appearance clue in 8 tries";
    hint3Countdown.textContent = "Nickname clue in 10 tries";

    document.getElementById("hint1Popdown").style.display = "none";
    document.getElementById("hint2Popdown").style.display = "none";
    document.getElementById("hint3Popdown").style.display = "none";
}

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
inputField.addEventListener("keypress", handleEnterSubmit);
inputField.addEventListener("input", () => filterFighters(inputField.value));
inputField.addEventListener("focus", positionDropdown);
window.addEventListener("resize", positionDropdown);
document.getElementById("hint1Image").addEventListener("click", function () {
    const hint1Image = document.getElementById("hint1Image");
    if (hint1Image.classList.contains("enabled-hint")) {
        const hint1Popdown = document.getElementById("hint1Popdown");
        hint1Popdown.style.display = "block";
        hint1Popdown.textContent = `Fighting Style: ${correctFighter.hints.style}`;
    }
});

document.getElementById("hint2Image").addEventListener("click", function () {
    const hint2Image = document.getElementById("hint2Image");
    if (hint2Image.classList.contains("enabled-hint")) {
        const hint2Popdown = document.getElementById("hint2Popdown");
        hint2Popdown.style.display = "block";
        hint2Popdown.textContent = `Last UFC Appearance: ${correctFighter.hints.lastAppearance}`;
    }
});

document.getElementById("hint3Image").addEventListener("click", function () {
    const hint3Image = document.getElementById("hint3Image");
    if (hint3Image.classList.contains("enabled-hint")) {
        const hint3Popdown = document.getElementById("hint3Popdown");
        hint3Popdown.style.display = "block";
        hint3Popdown.textContent = `Nickname: "${correctFighter.hints.nickname}"`;
    }
});
