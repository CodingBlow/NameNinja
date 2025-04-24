// Pet Name Generator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const petTypeSelect = document.getElementById('pet-type');
    const petGenderSelect = document.getElementById('pet-gender');
    const startingLetterInput = document.getElementById('starting-letter');
    const nameStyleSelect = document.getElementById('name-style');
    const generateBtn = document.getElementById('generate-btn');
    const regenerateBtn = document.getElementById('regenerate-btn');
    const nameResult = document.getElementById('name-result');

    // Function to generate a pet name
    function generatePetName() {
        let petName = "Click generate to find a name";
        
        // Get form values
        const petType = petTypeSelect.value;
        const petGender = petGenderSelect.value;
        const startingLetter = startingLetterInput.value.trim();
        const nameStyle = nameStyleSelect.value;
        
        // Determine which name list to use based on pet type
        let nameList = [];
        
        if (petType === 'any') {
            // Use general pet names
            if (nameStyle === 'any') {
                nameList = [...petNames.general.any];
            } else {
                nameList = [...petNames.general[nameStyle]];
            }
        } else {
            // Use specific pet type names
            let petTypeKey = petType;
            if (petType === 'small-mammal') petTypeKey = 'smallMammal';
            
            if (petGender === 'any') {
                nameList = [...petNames[petTypeKey].any];
            } else if (petNames[petTypeKey][petGender]) {
                nameList = [...petNames[petTypeKey][petGender]];
            } else {
                // If no gender-specific list exists, fall back to 'any'
                nameList = [...petNames[petTypeKey].any];
            }

            // Add some general names of the requested style
            if (nameStyle !== 'any' && petNames.general[nameStyle]) {
                nameList = [...nameList, ...petNames.general[nameStyle]];
            }
        }
        
        // Filter names by starting letter if provided
        if (startingLetter && startingLetter.length > 0) {
            const filteredList = getElementsStartingWith(nameList, startingLetter);
            if (filteredList.length > 0) {
                nameList = filteredList;
            } else {
                // If no matches found, keep original list and notify user
                nameResult.textContent = `No ${petType} names starting with "${startingLetter}" found. Showing any name:`;
                // Allow time for reading the message before showing the name
                setTimeout(() => {
                    nameResult.textContent = getRandomElement(nameList);
                    animateResult(nameResult);
                }, 1500);
                return;
            }
        }
        
        // Pick a random name from the filtered list
        if (nameList.length > 0) {
            petName = getRandomElement(nameList);
        } else {
            petName = "No matching names found";
        }
        
        // Display the name
        nameResult.textContent = petName;
        animateResult(nameResult);
    }
    
    // Event listeners
    generateBtn.addEventListener('click', generatePetName);
    regenerateBtn.addEventListener('click', generatePetName);
    
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
