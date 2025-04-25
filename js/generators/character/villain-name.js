/**
 * Villain Name Generator
 * Generates creative villain names with customizable options
 */

document.addEventListener('DOMContentLoaded', function() {
    // Sample villain first names
    const villainFirstNames = {
        male: ["Damien", "Draven", "Malachi", "Viktor", "Magnus", "Lucius", "Silas", "Mortimer", "Darius", "Thorne", "Asmodeus", "Kaine", "Nero", "Vladimir", "Zoran", "Grimm", "Bastian", "Cyrus", "Orion", "Raziel"],
        female: ["Lilith", "Morgana", "Bellatrix", "Ravenna", "Morrigan", "Vesper", "Desdemona", "Maleficent", "Hela", "Lamia", "Carmilla", "Morana", "Elvira", "Jezebel", "Nephthys", "Selene", "Thana", "Vexana", "Octavia", "Nyx"],
        neutral: ["Onyx", "Ruin", "Zenith", "Viper", "Wraith", "Void", "Eclipse", "Nemesis", "Havoc", "Abyss", "Entropy", "Cipher", "Dread", "Malice", "Shadow", "Tempest", "Chaos", "Spectre", "Oblivion", "Thorn"]
    };
        
    // Sample villain last names and titles
    const villainLastNames = ["Blackwood", "Shadowfell", "Darkheart", "Bloodthorn", "Grimshaw", "Nightshade", "Ironhand", "Duskraven", "Voidbringer", "Soulreaver", "Cruelclaw", "Deathwhisper", "Frostbane", "Mournweaver", "Hellstrom", "Doomforge", "Boneflayer", "Scourge", "Dreadlord", "Harbinger"];
        
    const villainTitles = ["the Merciless", "the Destroyer", "the Deceitful", "the Cruel", "the Immortal", "the Terrible", "the Shadow", "the Devourer", "the Corrupted", "the Cursed", "the Undying", "the Tormentor", "the Betrayer", "the Vile", "the Wicked", "the Insidious", "the Forsaken", "the Malevolent", "the Defiler", "the Banished"];

    // Generate villain name function
    function generateVillainName() {
        const villainType = document.getElementById('villain-type').value;
        const gender = document.getElementById('villain-gender').value;
        const origin = document.getElementById('villain-origin').value;
        const style = document.getElementById('villain-style').value;
        const startingLetter = document.getElementById('starting-letter').value.toUpperCase();
        
        // Determine gender for name selection
        let nameGender = gender;
        if (gender === 'any') {
            const genders = ['male', 'female', 'neutral'];
            nameGender = genders[Math.floor(Math.random() * genders.length)];
        }
        
        // Select appropriate first name list
        let firstNamePool = villainFirstNames[nameGender].slice();
        
        // Filter by starting letter if specified
        if (startingLetter) {
            firstNamePool = firstNamePool.filter(name => name.startsWith(startingLetter));
            // If no matches, revert to full list to avoid empty results
            if (firstNamePool.length === 0) {
                firstNamePool = villainFirstNames[nameGender].slice();
            }
        }
        
        // Generate name components
        const firstName = firstNamePool[Math.floor(Math.random() * firstNamePool.length)];
        const lastName = villainLastNames[Math.floor(Math.random() * villainLastNames.length)];
        const title = villainTitles[Math.floor(Math.random() * villainTitles.length)];
        
        // Craft final name based on style
        let villainName = '';
        const styleRandom = style === 'any' ? Math.floor(Math.random() * 4) : 0;
        
        switch (style === 'any' ? styleRandom : style) {
            case 'aristocratic':
            case 0:
                villainName = `${firstName} ${lastName}`;
                break;
            case 'title':
            case 1:
                villainName = `${firstName} ${title}`;
                break;
            case 'intimidating':
            case 2:
                villainName = `${lastName}`;
                break;
            case 'mysterious':
            case 3:
                villainName = `${firstName}`;
                break;
            default:
                villainName = `${firstName} ${lastName}`;
        }
        
        // Display the result
        document.getElementById('name-result').innerText = villainName;
        document.getElementById('name-result').classList.add('animate-result');
        
        // Create a villain description
        generateVillainDescription(villainName, villainType, nameGender);
        
        // Remove animation class after animation completes
        setTimeout(() => {
            document.getElementById('name-result').classList.remove('animate-result');
        }, 500);
    }
    
    // Generate a villain description
    function generateVillainDescription(name, type, gender) {
        const villainTypes = {
            "mastermind": "A brilliant manipulator who orchestrates complex schemes from the shadows",
            "tyrant": "A ruthless ruler who maintains control through fear and oppression",
            "monster": "A terrifying creature with inhuman abilities and dark desires",
            "corrupt": "A once-respected authority figure who has fallen to greed and abuse of power",
            "criminal": "A notorious figure in the underworld with a reputation for brutality",
            "supernatural": "A being with otherworldly powers and ancient malice",
            "scientist": "A brilliant mind whose unethical experiments push the boundaries of science",
            "corporate": "A calculating business mogul who values profit above all else",
            "any": "A formidable adversary with mysterious motives"
        };
        
        const pronouns = {
            "male": { subject: "he", object: "him", possessive: "his" },
            "female": { subject: "she", object: "her", possessive: "her" },
            "neutral": { subject: "they", object: "them", possessive: "their" }
        };
        
        const p = pronouns[gender];
        const description = villainTypes[type];
        
        document.getElementById('name-meaning').innerHTML = `<p>${description}. Known for ${p.possessive} cunning intellect and ruthless determination, ${name} will stop at nothing to achieve ${p.possessive} goals.</p>`;
    }
    
    // Event listeners
    document.getElementById('generate-btn').addEventListener('click', generateVillainName);
    document.getElementById('regenerate-btn').addEventListener('click', generateVillainName);
});