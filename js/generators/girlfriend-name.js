// Girlfriend Name Generator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const nameStyleSelect = document.getElementById('name-style');
    const relationshipLengthSelect = document.getElementById('relationship-length');
    const startingLetterInput = document.getElementById('starting-letter');
    const herNameInput = document.getElementById('her-name');
    const generateBtn = document.getElementById('generate-btn');
    const regenerateBtn = document.getElementById('regenerate-btn');
    const nameResult = document.getElementById('name-result');

    // Function to generate a girlfriend nickname
    function generateGirlfriendName() {
        // Get form values
        const nameStyle = nameStyleSelect.value;
        const relationshipLength = relationshipLengthSelect.value;
        const startingLetter = startingLetterInput.value.trim();
        const herName = herNameInput.value.trim();
        
        // Determine which name list to use
        let nameList = [];
        
        // If a specific style is selected
        if (nameStyle !== 'any' && femaleNames.girlfriendNicknames[nameStyle]) {
            nameList = [...femaleNames.girlfriendNicknames[nameStyle]];
        } else {
            // Combine all styles for 'any'
            for (const style in femaleNames.girlfriendNicknames) {
                nameList = [...nameList, ...femaleNames.girlfriendNicknames[style]];
            }
        }
        
        // Add relationship-specific nicknames if selected
        if (relationshipLength !== 'any' && femaleNames.relationshipStage[relationshipLength]) {
            nameList = [...nameList, ...femaleNames.relationshipStage[relationshipLength]];
        }
        
        // Add personalized nicknames based on her name
        if (herName && herName.length > 0) {
            const personalizedNames = generatePersonalizedNicknames(herName);
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
        let girlfriendName = "No matching nicknames found";
        if (nameList.length > 0) {
            girlfriendName = getRandomElement(nameList);
        }
        
        // Display the name
        nameResult.textContent = girlfriendName;
        animateResult(nameResult);
    }
    
    // Function to generate personalized nicknames based on her name
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
                nicknames.push(`${shortName}sy`);
            }
            
            // My + name variants
            nicknames.push(`My ${formattedName}`);
            nicknames.push(`Queen ${formattedName}`);
            nicknames.push(`Miss ${formattedName}`);
        }
        
        return nicknames;
    }
    
    // Event listeners
    generateBtn.addEventListener('click', generateGirlfriendName);
    regenerateBtn.addEventListener('click', generateGirlfriendName);
    
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
