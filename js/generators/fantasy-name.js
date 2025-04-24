// Fantasy Name Generator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const fantasyTypeSelect = document.getElementById('fantasy-type');
    const characterGenderSelect = document.getElementById('character-gender');
    const nameStyleSelect = document.getElementById('name-style');
    const startingLetterInput = document.getElementById('starting-letter');
    const generateBtn = document.getElementById('generate-btn');
    const regenerateBtn = document.getElementById('regenerate-btn');
    const nameResult = document.getElementById('name-result');

    // Function to generate a fantasy name
    function generateFantasyName() {
        // Get form values
        const fantasyType = fantasyTypeSelect.value;
        const characterGender = characterGenderSelect.value;
        const nameStyle = nameStyleSelect.value;
        const startingLetter = startingLetterInput.value.trim();
        
        // Determine which name list to use
        let nameList = [];
        
        if (fantasyType === 'any') {
            // Combine names from different character types
            for (const type in fantasyNames) {
                if (characterGender === 'any') {
                    // Add all genders for this type
                    for (const gender in fantasyNames[type]) {
                        if (Array.isArray(fantasyNames[type][gender])) {
                            nameList = [...nameList, ...fantasyNames[type][gender]];
                        }
                    }
                } else if (fantasyNames[type][characterGender]) {
                    // Add specific gender for this type
                    nameList = [...nameList, ...fantasyNames[type][characterGender]];
                } else if (fantasyNames[type]['any']) {
                    // Add 'any' gender names if the specific gender isn't available
                    nameList = [...nameList, ...fantasyNames[type]['any']];
                }
            }
        } else if (fantasyNames[fantasyType]) {
            // Use specific fantasy type
            if (characterGender === 'any') {
                // Add all genders for this type
                for (const gender in fantasyNames[fantasyType]) {
                    if (Array.isArray(fantasyNames[fantasyType][gender])) {
                        nameList = [...nameList, ...fantasyNames[fantasyType][gender]];
                    }
                }
            } else if (fantasyNames[fantasyType][characterGender]) {
                // Add specific gender for this type
                nameList = [...nameList, ...fantasyNames[fantasyType][characterGender]];
            } else if (fantasyNames[fantasyType]['any']) {
                // Add 'any' gender names if the specific gender isn't available
                nameList = [...nameList, ...fantasyNames[fantasyType]['any']];
            }
        }
        
        // Filter by name style if specified
        if (nameStyle !== 'any' && fantasyType !== 'any') {
            const styledList = [];
            // Try to get style-specific names
            if (fantasyNames[fantasyType][nameStyle] && Array.isArray(fantasyNames[fantasyType][nameStyle])) {
                styledList.push(...fantasyNames[fantasyType][nameStyle]);
            }
            
            // If style-specific names are found, use them; otherwise, keep the original list
            if (styledList.length > 0) {
                nameList = styledList;
            }
        }
        
        // Filter names by starting letter if provided
        if (startingLetter && startingLetter.length > 0) {
            const filteredList = getElementsStartingWith(nameList, startingLetter);
            if (filteredList.length > 0) {
                nameList = filteredList;
            } else {
                // If no matches found, keep original list and notify user
                nameResult.textContent = `No ${fantasyType} names starting with "${startingLetter}" found. Showing any name:`;
                // Allow time for reading the message before showing the name
                setTimeout(() => {
                    nameResult.textContent = getRandomElement(nameList);
                    animateResult(nameResult);
                }, 1500);
                return;
            }
        }
        
        // Pick a random name from the filtered list
        let fantasyName = "No matching names found";
        if (nameList.length > 0) {
            fantasyName = getRandomElement(nameList);
        }
        
        // Display the name
        nameResult.textContent = fantasyName;
        animateResult(nameResult);
    }
    
    // Event listeners
    generateBtn.addEventListener('click', generateFantasyName);
    regenerateBtn.addEventListener('click', generateFantasyName);
    
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
