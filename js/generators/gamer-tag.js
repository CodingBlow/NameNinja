// Gamer Tag Generator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const gameTypeSelect = document.getElementById('game-type');
    const tagStyleSelect = document.getElementById('tag-style');
    const tagLengthSelect = document.getElementById('tag-length');
    const includeNumbersSelect = document.getElementById('include-numbers');
    const includeSymbolsSelect = document.getElementById('include-symbols');
    const yourNameInput = document.getElementById('your-name');
    const generateBtn = document.getElementById('generate-btn');
    const regenerateBtn = document.getElementById('regenerate-btn');
    const nameResult = document.getElementById('name-result');

    // Function to generate a gamer tag
    function generateGamerTag() {
        // Get form values
        const gameType = gameTypeSelect.value;
        const tagStyle = tagStyleSelect.value;
        const tagLength = tagLengthSelect.value;
        const includeNumbers = includeNumbersSelect.value;
        const includeSymbols = includeSymbolsSelect.value;
        const yourName = yourNameInput.value.trim();
        
        // Initialize name components
        let nameList = [];
        
        // Add base names based on game type
        if (gameType === 'any') {
            // Add all game type names
            for (const type in gamerTags.gameTypes) {
                nameList = [...nameList, ...gamerTags.gameTypes[type]];
            }
        } else if (gamerTags.gameTypes[gameType]) {
            nameList = [...gamerTags.gameTypes[gameType]];
        }
        
        // Add style-specific names
        if (tagStyle !== 'any' && gamerTags.styles[tagStyle]) {
            nameList = [...nameList, ...gamerTags.styles[tagStyle]];
        }
        
        // Add generic gamer tags
        nameList = [...nameList, ...gamerTags.general];
        
        // Filter by length if specified
        if (tagLength !== 'any') {
            if (tagLength === 'short') {
                nameList = nameList.filter(name => name.length >= 3 && name.length <= 7);
            } else if (tagLength === 'medium') {
                nameList = nameList.filter(name => name.length >= 8 && name.length <= 12);
            } else if (tagLength === 'long') {
                nameList = nameList.filter(name => name.length >= 13);
            }
        }
        
        // Generate personalized tags based on user's name
        if (yourName && yourName.length > 0) {
            const personalTags = generatePersonalizedTags(yourName, gameType, tagStyle);
            nameList = [...nameList, ...personalTags];
        }
        
        // If no tags in list, generate some random tags
        if (nameList.length === 0) {
            nameList = generateRandomTags(10);
        }
        
        // Pick a random tag from the list
        let gamerTag = getRandomElement(nameList);
        
        // Add numbers if requested
        if (includeNumbers === 'yes' || (includeNumbers === 'maybe' && Math.random() > 0.5)) {
            gamerTag = addNumbersToTag(gamerTag);
        }
        
        // Add symbols if requested
        if (includeSymbols === 'yes' || (includeSymbols === 'maybe' && Math.random() > 0.5)) {
            gamerTag = addSymbolsToTag(gamerTag);
        }
        
        // Apply formatting to match length preferences
        if (tagLength !== 'any') {
            gamerTag = formatTagForLength(gamerTag, tagLength);
        }
        
        // Display the tag
        nameResult.textContent = gamerTag;
        animateResult(nameResult);
    }
    
    // Function to generate personalized tags based on user's name
    function generatePersonalizedTags(name, gameType, tagStyle) {
        const personalTags = [];
        const formattedName = name.trim();
        
        if (formattedName) {
            // Create variations of the name
            personalTags.push(formattedName);
            personalTags.push(`${formattedName}Gaming`);
            personalTags.push(`${formattedName}Plays`);
            personalTags.push(`The${formattedName}`);
            
            // Short name version
            if (formattedName.length > 3) {
                const shortName = formattedName.substring(0, 3);
                personalTags.push(shortName);
                personalTags.push(`${shortName}Gaming`);
                personalTags.push(`${shortName}Player`);
            }
            
            // Game-specific prefixes
            if (gameType !== 'any' && gamerTags.prefixes[gameType]) {
                const prefixes = gamerTags.prefixes[gameType];
                prefixes.forEach(prefix => {
                    personalTags.push(`${prefix}${formattedName}`);
                    personalTags.push(`${formattedName}${prefix}`);
                });
            }
            
            // Style-specific prefixes
            if (tagStyle !== 'any' && gamerTags.prefixes[tagStyle]) {
                const stylePrefixes = gamerTags.prefixes[tagStyle];
                stylePrefixes.forEach(prefix => {
                    personalTags.push(`${prefix}${formattedName}`);
                    personalTags.push(`${formattedName}${prefix}`);
                });
            }
            
            // Elite format: replace letters with similar-looking numbers
            const eliteFormat = formattedName
                .replace(/a/gi, '4')
                .replace(/e/gi, '3')
                .replace(/i/gi, '1')
                .replace(/o/gi, '0')
                .replace(/s/gi, '5')
                .replace(/t/gi, '7');
            
            if (eliteFormat !== formattedName) {
                personalTags.push(eliteFormat);
            }
            
            // Aggressive formats
            personalTags.push(`x${formattedName}x`);
            personalTags.push(`${formattedName}Killer`);
            personalTags.push(`${formattedName}Slayer`);
            
            // Capitalize every other letter
            let alternateCase = '';
            for (let i = 0; i < formattedName.length; i++) {
                if (i % 2 === 0) {
                    alternateCase += formattedName[i].toUpperCase();
                } else {
                    alternateCase += formattedName[i].toLowerCase();
                }
            }
            personalTags.push(alternateCase);
        }
        
        return personalTags;
    }
    
    // Function to generate random tags
    function generateRandomTags(count) {
        const tags = [];
        const adjectives = gamerTags.adjectives;
        const nouns = gamerTags.nouns;
        
        for (let i = 0; i < count; i++) {
            const adj = getRandomElement(adjectives);
            const noun = getRandomElement(nouns);
            
            tags.push(`${adj}${noun}`);
            tags.push(`${adj}_${noun}`);
            tags.push(`The${adj}${noun}`);
        }
        
        return tags;
    }
    
    // Function to add numbers to a tag
    function addNumbersToTag(tag) {
        const numStyle = Math.floor(Math.random() * 3);
        
        if (numStyle === 0) {
            // Add a random number from 1-99
            return `${tag}${Math.floor(Math.random() * 99) + 1}`;
        } else if (numStyle === 1) {
            // Add a year (current year or recent years)
            const currentYear = new Date().getFullYear();
            const years = [currentYear, currentYear - 1, currentYear - 2];
            return `${tag}${getRandomElement(years)}`;
        } else {
            // Replace letters with numbers (leet speak)
            return tag
                .replace(/a/gi, '4')
                .replace(/e/gi, '3')
                .replace(/i/gi, '1')
                .replace(/o/gi, '0')
                .replace(/s/gi, '5')
                .replace(/t/gi, '7');
        }
    }
    
    // Function to add symbols to a tag
    function addSymbolsToTag(tag) {
        const symbols = ['_', 'x', 'X', '-', '.', '^', '~', '*', '|'];
        const symbolStyle = Math.floor(Math.random() * 3);
        
        if (symbolStyle === 0) {
            // Add symbols at beginning and end
            const symbol = getRandomElement(symbols);
            return `${symbol}${tag}${symbol}`;
        } else if (symbolStyle === 1) {
            // Replace spaces with symbols
            const symbol = getRandomElement(symbols);
            return tag.replace(/\s+/g, symbol);
        } else {
            // Insert a symbol randomly
            const symbol = getRandomElement(symbols);
            const position = Math.floor(Math.random() * tag.length);
            return tag.slice(0, position) + symbol + tag.slice(position);
        }
    }
    
    // Function to format tag to match length preferences
    function formatTagForLength(tag, lengthPref) {
        if (lengthPref === 'short' && tag.length > 7) {
            // Truncate to 7 characters
            return tag.substring(0, 7);
        } else if (lengthPref === 'medium' && tag.length < 8) {
            // Add some filler to reach medium length
            const fillers = ['Gaming', 'Player', 'Pro', 'Master', 'Elite'];
            return tag + getRandomElement(fillers);
        } else if (lengthPref === 'medium' && tag.length > 12) {
            // Truncate to 12 characters
            return tag.substring(0, 12);
        } else if (lengthPref === 'long' && tag.length < 13) {
            // Add significant filler to reach long length
            const longFillers = ['Professional', 'Unstoppable', 'Legendary', 'Championship', 'Domination'];
            return tag + getRandomElement(longFillers);
        }
        
        // If already matches the preference, return unchanged
        return tag;
    }
    
    // Event listeners
    generateBtn.addEventListener('click', generateGamerTag);
    regenerateBtn.addEventListener('click', generateGamerTag);
});
