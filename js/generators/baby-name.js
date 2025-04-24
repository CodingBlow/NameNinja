// Baby Name Generator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const babyGenderSelect = document.getElementById('baby-gender');
    const nameOriginSelect = document.getElementById('name-origin');
    const nameStyleSelect = document.getElementById('name-style');
    const nameLengthSelect = document.getElementById('name-length');
    const startingLetterInput = document.getElementById('starting-letter');
    const generateBtn = document.getElementById('generate-btn');
    const regenerateBtn = document.getElementById('regenerate-btn');
    const nameResult = document.getElementById('name-result');
    const nameMeaning = document.getElementById('name-meaning');

    // Function to generate a baby name
    function generateBabyName() {
        // Get form values
        const babyGender = babyGenderSelect.value;
        const nameOrigin = nameOriginSelect.value;
        const nameStyle = nameStyleSelect.value;
        const nameLength = nameLengthSelect.value;
        const startingLetter = startingLetterInput.value.trim();
        
        // Determine which name list to use
        let nameList = [];
        let nameInfo = {};
        
        // Filter by gender
        if (babyGender === 'any') {
            nameList = [...babyNames.boyNames, ...babyNames.girlNames, ...babyNames.neutralNames];
            nameInfo = {...babyNames.boyInfo, ...babyNames.girlInfo, ...babyNames.neutralInfo};
        } else if (babyGender === 'boy') {
            nameList = [...babyNames.boyNames];
            nameInfo = {...babyNames.boyInfo};
        } else if (babyGender === 'girl') {
            nameList = [...babyNames.girlNames];
            nameInfo = {...babyNames.girlInfo};
        } else if (babyGender === 'neutral') {
            nameList = [...babyNames.neutralNames];
            nameInfo = {...babyNames.neutralInfo};
        }
        
        // Filter by origin/ethnicity
        if (nameOrigin !== 'any' && babyNames.origins[nameOrigin]) {
            const originNames = babyNames.origins[nameOrigin];
            nameList = nameList.filter(name => originNames.includes(name));
        }
        
        // Filter by style
        if (nameStyle !== 'any' && babyNames.styles[nameStyle]) {
            const styleNames = babyNames.styles[nameStyle];
            nameList = nameList.filter(name => styleNames.includes(name));
        }
        
        // Filter by length
        if (nameLength !== 'any') {
            if (nameLength === 'short') {
                nameList = nameList.filter(name => name.length >= 3 && name.length <= 5);
            } else if (nameLength === 'medium') {
                nameList = nameList.filter(name => name.length >= 6 && name.length <= 8);
            } else if (nameLength === 'long') {
                nameList = nameList.filter(name => name.length >= 9);
            }
        }
        
        // Filter names by starting letter if provided
        if (startingLetter && startingLetter.length > 0) {
            const filteredList = getElementsStartingWith(nameList, startingLetter);
            if (filteredList.length > 0) {
                nameList = filteredList;
            } else {
                // If no matches found, keep original list and notify user
                nameResult.textContent = `No baby names starting with "${startingLetter}" found. Showing any name:`;
                nameMeaning.textContent = "";
                // Allow time for reading the message before showing the name
                setTimeout(() => {
                    const randomName = getRandomElement(nameList);
                    nameResult.textContent = randomName;
                    displayNameMeaning(randomName, nameInfo);
                    animateResult(nameResult);
                }, 1500);
                return;
            }
        }
        
        // Pick a random name from the filtered list
        let babyName = "No matching names found";
        if (nameList.length > 0) {
            babyName = getRandomElement(nameList);
            displayNameMeaning(babyName, nameInfo);
        } else {
            nameMeaning.textContent = "";
        }
        
        // Display the name
        nameResult.textContent = babyName;
        animateResult(nameResult);
    }
    
    // Function to display name meaning
    function displayNameMeaning(name, nameInfo) {
        if (nameInfo[name]) {
            const info = nameInfo[name];
            let meaningText = `Origin: ${info.origin || 'Unknown'}`;
            if (info.meaning) {
                meaningText += ` | Meaning: ${info.meaning}`;
            }
            nameMeaning.textContent = meaningText;
        } else {
            nameMeaning.textContent = "";
        }
    }
    
    // Event listeners
    generateBtn.addEventListener('click', generateBabyName);
    regenerateBtn.addEventListener('click', generateBabyName);
    
    // Initialize with form values on page load
    startingLetterInput.addEventListener('input', function() {
        // Limit to one character and convert to uppercase
        if (this.value.length > 1) {
            this.value = this.value.charAt(0).toUpperCase();
        } else if (this.value.length === 1) {
            this.value = this.value.toUpperCase();
        }
    });
});
