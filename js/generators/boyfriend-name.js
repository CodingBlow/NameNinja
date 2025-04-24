// Boyfriend Name Generator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const nameStyleSelect = document.getElementById('name-style');
    const relationshipLengthSelect = document.getElementById('relationship-length');
    const startingLetterInput = document.getElementById('starting-letter');
    const hisNameInput = document.getElementById('his-name');
    const generateBtn = document.getElementById('generate-btn');
    const regenerateBtn = document.getElementById('regenerate-btn');
    const nameResult = document.getElementById('name-result');

    // Function to generate a boyfriend nickname
    function generateBoyfriendName() {
        // Get form values
        const nameStyle = nameStyleSelect.value;
        const relationshipLength = relationshipLengthSelect.value;
        const startingLetter = startingLetterInput.value.trim();
        const hisName = hisNameInput.value.trim();
        
        // Determine which name list to use
        let nameList = [];
        
        // If a specific style is selected
        if (nameStyle !== 'any' && maleNames.boyfriendNicknames[nameStyle]) {
            nameList = [...maleNames.boyfriendNicknames[nameStyle]];
        } else {
            // Combine all styles for 'any'
            for (const style in maleNames.boyfriendNicknames) {
                nameList = [...nameList, ...maleNames.boyfriendNicknames[style]];
            }
        }
        
        // Add relationship-specific nicknames if selected
        if (relationshipLength !== 'any' && maleNames.relationshipStage[relationshipLength]) {
            nameList = [...nameList, ...maleNames.relationshipStage[relationshipLength]];
        }
        
        // Add personalized nicknames based on his name
        if (hisName && hisName.length > 0) {
            const personalizedNames = generatePersonalizedNicknames(hisName);
            nameList = [...nameList, ...personalizedNames];
        }
        
        // Filter names by starting letter if provided
        if (startingLetter && startingLetter.length > 0) {
            const filteredList = getElementsStartingWith(nameList, startingLetter);
            if (filteredList.length > 0) {
                nameList = filteredList;
            } else {
                // If no matches found, keep original list and notify user
                nameResult.textContent = `No nicknames starting with "${startingLetter}" found. Showing any nickname:`;
                // Allow time for reading the message before showing the name
                setTimeout(() => {
                    nameResult.textContent = getRandomElement(nameList);
                    animateResult(nameResult);
                }, 1500);
                return;
            }
        }
        
        // Pick a random name from the filtered list
        let boyfriendName = "No matching nicknames found";
        if (nameList.length > 0) {
            boyfriendName = getRandomElement(nameList);
        }
        
        // Display the name
        nameResult.textContent = boyfriendName;
        animateResult(nameResult);
    }
    
    // Function to generate personalized nicknames based on his name
    function generatePersonalizedNicknames(name) {
        const nicknames = [];
        const formattedName = capitalizeFirstLetter(name.trim());
        
        if (formattedName) {
            // Common nickname patterns
            nicknames.push(`${formattedName}-bear`);
            nicknames.push(`${formattedName}-boo`);
            
            // For shorter names, add some variants
            if (formattedName.length <= 5) {
                // Add "y" or "ie" to the end
                if (formattedName.endsWith('y')) {
                    nicknames.push(`${formattedName.slice(0, -1)}kins`);
                } else if (formattedName.endsWith('n')) {
                    nicknames.push(`${formattedName}y`);
                    nicknames.push(`${formattedName}ie`);
                } else {
                    nicknames.push(`${formattedName}y`);
                    nicknames.push(`${formattedName}ie`);
                }
            }
            
            // Create nickname from first part of the name
            if (formattedName.length > 3) {
                let shortName = formattedName.substring(0, Math.min(3, formattedName.length));
                nicknames.push(`${shortName}ster`);
                nicknames.push(`${shortName}sy`);
            }
            
            // My + name variants
            nicknames.push(`My ${formattedName}`);
            nicknames.push(`Captain ${formattedName}`);
            nicknames.push(`Mr. ${formattedName}`);
        }
        
        return nicknames;
    }
    
    // Event listeners
    generateBtn.addEventListener('click', generateBoyfriendName);
    regenerateBtn.addEventListener('click', generateBoyfriendName);
    
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
