let attempts = 0;
let correctFighter = getDailyFighter();
updateHintsState(); // Ensures hints are set properly when the game starts
let guessedFighters = []; // Tracks fighters the player has guessed


const inputField = document.getElementById("fighterInput");
const submitButton = document.getElementById("submitGuess");
/*const resetButton = document.getElementById("resetGame");*/
const previousGuessesContainer = document.getElementById("previousGuesses");
const resultMessage = document.getElementById("resultMessage");

const dropdown = document.createElement("div");
dropdown.classList.add("autocomplete-dropdown");
inputField.parentNode.appendChild(dropdown);

function restorePreviousSession() {
    const lastPlayedDate = localStorage.getItem("lastPlayedDate");
    const todayDate = new Date().toDateString();

    if (lastPlayedDate === todayDate) {
        console.log("Restoring previous session...");

        // Restore guesses
        const storedGuesses = JSON.parse(localStorage.getItem("guessedFighters")) || [];
        guessedFighters = storedGuesses;
        
        storedGuesses.forEach(guessedName => {
            const guessedFighter = fighters.find(fighter => fighter.name === guessedName);
            if (guessedFighter) {
                addPreviousGuess(guessedFighter, guessedFighter.name === correctFighter.name);
            }
        });

        // Restore attempts
        attempts = parseInt(localStorage.getItem("attempts")) || 0;
        updateHintsState();

        // Restore victory card if they won
        if (localStorage.getItem("gameWon") === "true") {
            const storedFighter = JSON.parse(localStorage.getItem("correctFighter"));
            showVictoryCard(storedFighter);
        }
    }
}

function getDailyFighter() {
    const today = new Date();
    const dayNumber = today.getFullYear() * 1000 + today.getMonth() * 100 + today.getDate(); 
    const index = dayNumber % fighters.length; // Ensures the same fighter is chosen daily
    return fighters[index];
}

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
    console.log("Checking guess...");

    const lastPlayedDate = localStorage.getItem("lastPlayedDate");
    const todayDate = new Date().toDateString();

    if (lastPlayedDate === todayDate) {
        console.log("User has already played today. Restoring session...");
        restorePreviousSession(); // Show their past game instead of blocking them
        return;
    }

    const userGuess = inputField.value.trim().toLowerCase();
    if (!userGuess) return;

    const guessedFighter = fighters.find(fighter => fighter.name.toLowerCase() === userGuess);
    
    if (!guessedFighter) {
        displayResultMessage("❌ Fighter not found. Try again!", "red");
        return;
    }

    if (guessedFighters.includes(guessedFighter.name)) {
        displayResultMessage(`⚠️ You already guessed ${guessedFighter.name}! Try someone else.`, "orange");
        return;
    }

    console.log(`User guessed: ${guessedFighter.name}`);
    guessedFighters.push(guessedFighter.name); // Add to guessed list
    localStorage.setItem("guessedFighters", JSON.stringify(guessedFighters)); // Save to storage

    createHeaderRow();

    if (guessedFighter.name === correctFighter.name) {
        console.log("Correct guess!");
        addPreviousGuess(guessedFighter, true);
        localStorage.setItem("lastPlayedDate", todayDate);
        localStorage.setItem("gameWon", "true"); // Mark game as won
        localStorage.setItem("correctFighter", JSON.stringify(correctFighter)); // Store fighter
        showVictoryCard(correctFighter);
    } else {
        console.log("Incorrect guess.");
        addPreviousGuess(guessedFighter, false);
    }

    attempts++; 
    localStorage.setItem("attempts", attempts); // Store attempts

    console.log(`Total attempts: ${attempts}`);
    updateHintsState(guessedFighter.name === correctFighter.name);
 

    inputField.value = "";
    dropdown.style.display = "none";
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
            /*resetButton.style.display = "block";*/
    
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

function updateHintsState(isCorrectGuess = false) {
    const hint1Image = document.getElementById("hint1Image");
    const hint2Image = document.getElementById("hint2Image");
    const hint3Image = document.getElementById("hint3Image");

    const hint1Countdown = document.getElementById("hint1Countdown");
    const hint2Countdown = document.getElementById("hint2Countdown");
    const hint3Countdown = document.getElementById("hint3Countdown");

    if (isCorrectGuess) {
        // Instantly unlock all hints if the player guessed correctly
        hint1Image.classList.remove('disabled-hint');
        hint1Image.classList.add('enabled-hint');
        hint1Countdown.textContent = "Style clue available!";

        hint2Image.classList.remove('disabled-hint');
        hint2Image.classList.add('enabled-hint');
        hint2Countdown.textContent = "Last appearance clue available!";

        hint3Image.classList.remove('disabled-hint');
        hint3Image.classList.add('enabled-hint');
        hint3Countdown.textContent = "Nickname clue available!";

        return; // Skip the attempt-based unlocking
    }

    // If the correct guess hasn't been made, follow the normal unlocking process
    hint1Countdown.textContent = attempts >= 5 ? "Style clue available" : `Style clue in ${5 - attempts} tries`;
    hint2Countdown.textContent = attempts >= 8 ? "Last appearance clue available" : `Last appearance clue in ${8 - attempts} tries`;
    hint3Countdown.textContent = attempts >= 10 ? "Nickname clue available" : `Nickname clue in ${10 - attempts} tries`;

    hint1Image.classList.toggle("enabled-hint", attempts >= 5);
    hint2Image.classList.toggle("enabled-hint", attempts >= 8);
    hint3Image.classList.toggle("enabled-hint", attempts >= 10);
}

function setupHintListeners() {
    const hint1Image = document.getElementById("hint1Image");
    const hint2Image = document.getElementById("hint2Image");
    const hint3Image = document.getElementById("hint3Image");

    // Ensure hints toggle on both click and touchstart
    hint1Image.addEventListener("click", revealHint1);
    hint1Image.addEventListener("touchstart", revealHint1);

    hint2Image.addEventListener("click", revealHint2);
    hint2Image.addEventListener("touchstart", revealHint2);

    hint3Image.addEventListener("click", revealHint3);
    hint3Image.addEventListener("touchstart", revealHint3);
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

function revealHint3() {
    if (!document.getElementById("hint3Image").classList.contains("enabled-hint")) return;
    const hint3Popdown = document.getElementById("hint3Popdown");
    hint3Popdown.style.display = "block";
    hint3Popdown.textContent = `Nickname: "${correctFighter.hints.nickname}"`;
}

// Call this function once after the page loads
document.addEventListener("DOMContentLoaded", setupHintListeners);

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

    // Get all hint boxes that need to flip
    const hintBoxes = document.querySelectorAll(".hint-box");
    if (hintBoxes.length === 0) {
        // If no hint boxes exist, scroll immediately
        victoryCard.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }

    let lastFlipTime = hintBoxes.length * 300; // 300ms per flip

    // Flip hints sequentially
    hintBoxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add("revealed");
        }, index * 300);
    });

    // Scroll to victory card **right after the last hint flips**
    setTimeout(() => {
        victoryCard.scrollIntoView({ behavior: "smooth", block: "center" });
    }, lastFlipTime + 300); // Small buffer for smooth transition
}


function updateNextGameTimer() {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0); // Reset at midnight

    const timeLeft = tomorrow - now;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("nextGameTimer").textContent =
        `⏳ Next fighter available in: ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update the countdown every second
setInterval(updateNextGameTimer, 1000);
updateNextGameTimer(); // Call immediately on page load


// Update the countdown every minute
setInterval(updateNextGameTimer, 60000);
updateNextGameTimer(); // Call immediately on page load

function resetGame() {
    const todayDate = new Date().toDateString();
    const lastPlayedDate = localStorage.getItem("lastPlayedDate");

    if (lastPlayedDate === todayDate) {
        displayResultMessage("🚫 You’ve already played today! Come back tomorrow.", "orange");
        return;
    }

    correctFighter = getDailyFighter(); // Select the new daily fighter
    guessedFighters = []; // Reset guessed fighters list

    document.getElementById("headerRowContainer").innerHTML = "";
    document.getElementById("previousGuesses").innerHTML = "";
    displayResultMessage("", "black");
    submitButton.disabled = false;
   /*resetButton.style.display = "none";*/
    attempts = 0;

    console.log("New daily fighter:", correctFighter.name); // Debugging
    updateHintsState(); // Ensures hints match the new fighter
}

submitButton.addEventListener("click", checkGuess);
inputField.addEventListener("keypress", handleEnterSubmit);
inputField.addEventListener("input", () => filterFighters(inputField.value));
inputField.addEventListener("focus", positionDropdown);
window.addEventListener("resize", positionDropdown);


document.addEventListener("DOMContentLoaded", () => {
    restorePreviousSession();
});

