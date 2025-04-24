// Startup Name Generator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const businessIndustrySelect = document.getElementById('business-industry');
    const nameStyleSelect = document.getElementById('name-style');
    const nameLengthSelect = document.getElementById('name-length');
    const keywordsInput = document.getElementById('keywords');
    const startingLetterInput = document.getElementById('starting-letter');
    const generateBtn = document.getElementById('generate-btn');
    const regenerateBtn = document.getElementById('regenerate-btn');
    const nameResult = document.getElementById('name-result');
    const domainAvailabilityDiv = document.getElementById('domain-availability');

    // Function to generate a startup name
    function generateStartupName() {
        // Get form values
        const industry = businessIndustrySelect.value;
        const nameStyle = nameStyleSelect.value;
        const nameLength = nameLengthSelect.value;
        const keywords = keywordsInput.value.trim();
        const startingLetter = startingLetterInput.value.trim();
        
        // Process keywords into an array
        const keywordArray = keywords ? keywords.split(',').map(word => word.trim()) : [];
        
        // Generate names based on style and industry
        let generatedNames = [];
        
        if (nameStyle === 'compound' || nameStyle === 'any') {
            // Compound words: pair prefixes with suffixes
            generatedNames = generateCompoundNames(industry, keywordArray);
        }
        
        if (nameStyle === 'coined' || nameStyle === 'any') {
            // Made-up/coined names: combine letters and syllables
            generatedNames = [...generatedNames, ...generateCoinedNames(industry, keywordArray)];
        }
        
        if (nameStyle === 'descriptive' || nameStyle === 'any') {
            // Descriptive names: use industry-specific adjectives + nouns
            generatedNames = [...generatedNames, ...generateDescriptiveNames(industry, keywordArray)];
        }
        
        if (nameStyle === 'metaphor' || nameStyle === 'any') {
            // Metaphorical names: use unexpected words that convey brand attributes
            generatedNames = [...generatedNames, ...generateMetaphorNames(industry)];
        }
        
        if (nameStyle === 'modern' || nameStyle === 'any') {
            // Modern/innovative names: trendy combinations and modifications
            generatedNames = [...generatedNames, ...generateModernNames(industry, keywordArray)];
        }
        
        // Add industry-specific pre-generated names
        if (industry !== 'any' && startupWords.industryNames[industry]) {
            generatedNames = [...generatedNames, ...startupWords.industryNames[industry]];
        }
        
        // Filter by name length
        if (nameLength !== 'any') {
            if (nameLength === 'short') {
                generatedNames = generatedNames.filter(name => name.length >= 3 && name.length <= 6);
            } else if (nameLength === 'medium') {
                generatedNames = generatedNames.filter(name => name.length >= 7 && name.length <= 10);
            } else if (nameLength === 'long') {
                generatedNames = generatedNames.filter(name => name.length >= 11);
            }
        }
        
        // Filter names by starting letter if provided
        if (startingLetter && startingLetter.length > 0) {
            const filteredList = getElementsStartingWith(generatedNames, startingLetter);
            if (filteredList.length > 0) {
                generatedNames = filteredList;
            } else {
                // If no matches found, keep original list and notify user
                nameResult.textContent = `No startup names starting with "${startingLetter}" found. Showing any name:`;
                domainAvailabilityDiv.textContent = "";
                // Allow time for reading the message before showing the name
                setTimeout(() => {
                    const randomName = getRandomElement(generatedNames);
                    nameResult.textContent = randomName;
                    checkDomain(randomName);
                    animateResult(nameResult);
                }, 1500);
                return;
            }
        }
        
        // Pick a random name from the filtered list
        let startupName = "No matching names found";
        if (generatedNames.length > 0) {
            startupName = getRandomElement(generatedNames);
            checkDomain(startupName);
        } else {
            domainAvailabilityDiv.textContent = "";
        }
        
        // Display the name
        nameResult.textContent = startupName;
        animateResult(nameResult);
    }
    
    // Function to generate compound names (prefix + suffix)
    function generateCompoundNames(industry, userKeywords) {
        const names = [];
        
        // Get industry-specific prefixes and suffixes if available
        let prefixes = [...startupWords.prefixes.general];
        let suffixes = [...startupWords.suffixes.general];
        
        if (industry !== 'any' && startupWords.prefixes[industry]) {
            prefixes = [...prefixes, ...startupWords.prefixes[industry]];
        }
        
        if (industry !== 'any' && startupWords.suffixes[industry]) {
            suffixes = [...suffixes, ...startupWords.suffixes[industry]];
        }
        
        // Add user keywords to prefixes if provided
        if (userKeywords.length > 0) {
            prefixes = [...prefixes, ...userKeywords];
        }
        
        // Generate combinations
        for (let i = 0; i < prefixes.length; i++) {
            const prefix = prefixes[i];
            
            // Use either all suffixes or just a few randomly selected ones
            const selectedSuffixes = suffixes.length > 10 ? 
                shuffleArray([...suffixes]).slice(0, 10) : 
                [...suffixes];
            
            for (let j = 0; j < selectedSuffixes.length; j++) {
                const suffix = selectedSuffixes[j];
                
                // Create compound name
                let compoundName = '';
                
                // Handle different joining patterns
                const joinStyle = Math.floor(Math.random() * 3);
                
                if (joinStyle === 0) {
                    // Direct combination
                    compoundName = prefix + suffix;
                } else if (joinStyle === 1) {
                    // Capitalize the suffix
                    compoundName = prefix + capitalizeFirstLetter(suffix);
                } else {
                    // Use a connector
                    const connectors = ['', '-', '&', 'By', 'For', 'My', 'The'];
                    const connector = getRandomElement(connectors);
                    
                    if (connector) {
                        compoundName = prefix + connector + capitalizeFirstLetter(suffix);
                    } else {
                        compoundName = prefix + suffix;
                    }
                }
                
                names.push(compoundName);
            }
        }
        
        return shuffleArray(names).slice(0, 100); // Limit to 100 names
    }
    
    // Function to generate coined/made-up names
    function generateCoinedNames(industry, userKeywords) {
        const names = [];
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
        
        // Get industry root words
        let rootWords = [...startupWords.rootWords.general];
        
        if (industry !== 'any' && startupWords.rootWords[industry]) {
            rootWords = [...rootWords, ...startupWords.rootWords[industry]];
        }
        
        // Add user keywords to root words if provided
        if (userKeywords.length > 0) {
            rootWords = [...rootWords, ...userKeywords];
        }
        
        // Generate modifications of root words
        for (let i = 0; i < rootWords.length; i++) {
            const rootWord = rootWords[i];
            
            // Strategy 1: Replace vowels
            for (let j = 0; j < vowels.length; j++) {
                const newName = rootWord.replace(/[aeiou]/g, vowels[j]);
                if (newName !== rootWord) {
                    names.push(newName);
                }
            }
            
            // Strategy 2: Remove vowels
            const noVowels = rootWord.replace(/[aeiou]/g, '');
            if (noVowels.length >= 3) {
                names.push(noVowels);
            }
            
            // Strategy 3: Add 'ify', 'ly', 'io', 'eo', 'y', etc.
            const suffixes = ['ify', 'ly', 'io', 'eo', 'y', 'sy', 'ify', 'aria', 'aloo', 'able', 'ible'];
            for (let j = 0; j < suffixes.length; j++) {
                names.push(rootWord + suffixes[j]);
            }
            
            // Strategy 4: Replace letters with 'x', 'z', 'q', etc.
            const coolLetters = ['x', 'z', 'q', 'k', 'j'];
            for (let j = 0; j < coolLetters.length; j++) {
                const letter = coolLetters[j];
                if (rootWord.length > 3) {
                    const position = Math.floor(Math.random() * (rootWord.length - 2)) + 1;
                    const modified = rootWord.slice(0, position) + letter + rootWord.slice(position + 1);
                    names.push(modified);
                }
            }
        }
        
        // Generate some completely new names
        for (let i = 0; i < 30; i++) {
            let name = '';
            const length = Math.floor(Math.random() * 5) + 3; // 3-7 characters
            
            for (let j = 0; j < length; j++) {
                if (j % 2 === 0) {
                    name += getRandomElement(consonants);
                } else {
                    name += getRandomElement(vowels);
                }
            }
            
            names.push(name);
            names.push(capitalizeFirstLetter(name));
        }
        
        return shuffleArray(names).slice(0, 100); // Limit to 100 names
    }
    
    // Function to generate descriptive names
    function generateDescriptiveNames(industry, userKeywords) {
        const names = [];
        
        // Get industry-specific adjectives and nouns
        let adjectives = [...startupWords.adjectives.general];
        let nouns = [...startupWords.nouns.general];
        
        if (industry !== 'any' && startupWords.adjectives[industry]) {
            adjectives = [...adjectives, ...startupWords.adjectives[industry]];
        }
        
        if (industry !== 'any' && startupWords.nouns[industry]) {
            nouns = [...nouns, ...startupWords.nouns[industry]];
        }
        
        // Add user keywords if provided
        if (userKeywords.length > 0) {
            // Assume user keywords could be either adjectives or nouns
            adjectives = [...adjectives, ...userKeywords];
            nouns = [...nouns, ...userKeywords];
        }
        
        // Generate combinations
        for (let i = 0; i < adjectives.length; i++) {
            const adjective = adjectives[i];
            
            // Use a subset of nouns for each adjective to prevent too many combinations
            const selectedNouns = nouns.length > 10 ? 
                shuffleArray([...nouns]).slice(0, 10) : 
                [...nouns];
            
            for (let j = 0; j < selectedNouns.length; j++) {
                const noun = selectedNouns[j];
                
                // Direct combination
                names.push(adjective + noun);
                
                // With The
                names.push('The' + capitalizeFirstLetter(adjective) + capitalizeFirstLetter(noun));
            }
        }
        
        return shuffleArray(names).slice(0, 100); // Limit to 100 names
    }
    
    // Function to generate metaphor names
    function generateMetaphorNames(industry) {
        let metaphors = [...startupWords.metaphors.general];
        
        if (industry !== 'any' && startupWords.metaphors[industry]) {
            metaphors = [...metaphors, ...startupWords.metaphors[industry]];
        }
        
        // Shuffle and return
        return shuffleArray(metaphors).slice(0, 100); // Limit to 100 names
    }
    
    // Function to generate modern/innovative names
    function generateModernNames(industry, userKeywords) {
        const names = [];
        
        // Get innovative patterns
        let patterns = [...startupWords.innovativePatterns];
        
        // Get industry-specific words
        let words = [...startupWords.rootWords.general];
        
        if (industry !== 'any' && startupWords.rootWords[industry]) {
            words = [...words, ...startupWords.rootWords[industry]];
        }
        
        // Add user keywords if provided
        if (userKeywords.length > 0) {
            words = [...words, ...userKeywords];
        }
        
        // Apply patterns to words
        for (let i = 0; i < patterns.length; i++) {
            const pattern = patterns[i];
            
            // Use a subset of words for each pattern
            const selectedWords = words.length > 15 ? 
                shuffleArray([...words]).slice(0, 15) : 
                [...words];
            
            for (let j = 0; j < selectedWords.length; j++) {
                let word = selectedWords[j];
                
                // Apply the pattern
                if (pattern === 'double-letter') {
                    // Double a letter in the word
                    if (word.length > 2) {
                        const position = Math.floor(Math.random() * (word.length - 1)) + 1;
                        const letter = word.charAt(position);
                        const modified = word.slice(0, position) + letter + word.slice(position);
                        names.push(modified);
                    }
                } else if (pattern === 'remove-vowels') {
                    // Remove vowels
                    const noVowels = word.replace(/[aeiou]/g, '');
                    if (noVowels.length >= 3) {
                        names.push(noVowels);
                    }
                } else if (pattern === 'replace-with-number') {
                    // Replace letters with numbers (e -> 3, a -> 4, i -> 1, o -> 0)
                    const replacements = {'e': '3', 'a': '4', 'i': '1', 'o': '0'};
                    let modified = word;
                    
                    for (const [letter, number] of Object.entries(replacements)) {
                        if (word.includes(letter)) {
                            modified = modified.replace(new RegExp(letter, 'g'), number);
                        }
                    }
                    
                    if (modified !== word) {
                        names.push(modified);
                    }
                } else if (pattern === 'add-ly') {
                    names.push(word + 'ly');
                } else if (pattern === 'add-io') {
                    names.push(word + 'io');
                } else if (pattern === 'add-ify') {
                    names.push(word + 'ify');
                } else if (pattern === 'add-ai') {
                    names.push(word + 'AI');
                    names.push('AI' + capitalizeFirstLetter(word));
                }
            }
        }
        
        return shuffleArray(names).slice(0, 100); // Limit to 100 names
    }
    
    // Function to check domain availability (simulated)
    function checkDomain(name) {
        // Remove spaces and special characters for domain name
        const domainName = name.toLowerCase()
            .replace(/[^\w\s]/gi, '')
            .replace(/\s+/g, '');
        
        const domainExtensions = ['.com', '.io', '.co', '.app', '.tech', '.ai'];
        let domainHTML = '<p>Suggested domains:</p><ul>';
        
        for (const ext of domainExtensions) {
            const isAvailable = Math.random() > 0.5; // Randomly simulate availability
            const availabilityClass = isAvailable ? 'available' : 'unavailable';
            const availabilityText = isAvailable ? 'Available' : 'Likely taken';
            
            domainHTML += `<li><span class="${availabilityClass}">${domainName}${ext} - ${availabilityText}</span></li>`;
        }
        
        domainHTML += '</ul><p><small>Note: This is a simulation. Check actual domain registrars for real availability.</small></p>';
        
        // Add some basic CSS inline for domain availability
        const css = `
        <style>
            .available { color: green; font-weight: bold; }
            .unavailable { color: #999; }
            #domain-availability ul { 
                list-style-type: none; 
                padding-left: 0; 
                margin-bottom: 10px;
            }
            #domain-availability li {
                margin-bottom: 5px;
            }
        </style>
        `;
        
        domainAvailabilityDiv.innerHTML = css + domainHTML;
    }
    
    // Event listeners
    generateBtn.addEventListener('click', generateStartupName);
    regenerateBtn.addEventListener('click', generateStartupName);
    
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
