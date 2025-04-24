// Baby name datasets
const babyNames = {
    // Boy names
    boyNames: [
        "Liam", "Noah", "Oliver", "Elijah", "William", "James", "Benjamin", "Lucas", "Henry", "Alexander",
        "Mason", "Michael", "Ethan", "Daniel", "Jacob", "Logan", "Jackson", "Levi", "Sebastian", "Mateo",
        "Jack", "Owen", "Theodore", "Aiden", "Samuel", "Joseph", "John", "David", "Wyatt", "Matthew",
        "Luke", "Asher", "Carter", "Julian", "Grayson", "Leo", "Jayden", "Gabriel", "Isaac", "Lincoln",
        "Anthony", "Hudson", "Dylan", "Ezra", "Thomas", "Charles", "Christopher", "Jaxon", "Maverick", "Josiah",
        "Isaiah", "Andrew", "Elias", "Joshua", "Nathan", "Caleb", "Ryan", "Adrian", "Miles", "Eli",
        "Nolan", "Christian", "Aaron", "Cameron", "Ezekiel", "Colton", "Luca", "Landon", "Hunter", "Jonathan",
        "Santiago", "Axel", "Easton", "Cooper", "Jeremiah", "Angel", "Roman", "Connor", "Jameson", "Robert",
        "Greyson", "Jordan", "Ian", "Carson", "Jaxson", "Leonardo", "Nicholas", "Dominic", "Austin", "Everett",
        "Brooks", "Xavier", "Kai", "Jose", "Parker", "Adam", "Jace", "Wesley", "Kayden", "Silas"
    ],

    // Girl names
    girlNames: [
        "Olivia", "Emma", "Charlotte", "Amelia", "Ava", "Sophia", "Isabella", "Mia", "Evelyn", "Harper",
        "Luna", "Camila", "Gianna", "Elizabeth", "Eleanor", "Ella", "Abigail", "Sofia", "Avery", "Scarlett",
        "Emily", "Aria", "Penelope", "Chloe", "Layla", "Mila", "Nora", "Hazel", "Madison", "Ellie",
        "Lily", "Nova", "Isla", "Grace", "Violet", "Aurora", "Riley", "Zoey", "Willow", "Emilia",
        "Stella", "Zoe", "Victoria", "Hannah", "Addison", "Leah", "Lucy", "Eliana", "Ivy", "Everly",
        "Lillian", "Paisley", "Elena", "Naomi", "Maya", "Natalie", "Kinsley", "Delilah", "Claire", "Audrey",
        "Aaliyah", "Ruby", "Brooklyn", "Alice", "Aubrey", "Autumn", "Leilani", "Savannah", "Valentina", "Kennedy",
        "Madelyn", "Josephine", "Bella", "Skylar", "Genesis", "Sophie", "Hailey", "Sadie", "Natalia", "Quinn",
        "Caroline", "Allison", "Gabriella", "Anna", "Serenity", "Nevaeh", "Cora", "Ariana", "Emery", "Lydia",
        "Jade", "Sarah", "Eva", "Adeline", "Madeline", "Piper", "Rylee", "Athena", "Peyton", "Everleigh"
    ],

    // Gender neutral names
    neutralNames: [
        "Jordan", "Riley", "Casey", "Jessie", "Jackie", "Avery", "Quinn", "Dakota", "River", "Skyler",
        "Frankie", "Drew", "Morgan", "Taylor", "Blake", "Rowan", "Charlie", "Finley", "Emerson", "Hayden",
        "Alexis", "Parker", "Peyton", "Jamie", "Reese", "Sidney", "Kerry", "Ryan", "Kendall", "Rory",
        "Aubrey", "Harley", "Marley", "Angel", "Kai", "Justice", "Sage", "Ellis", "Eden", "Nova",
        "Phoenix", "Jalen", "Micah", "Erin", "Lennon", "Oakley", "Robin", "Scout", "Shay", "Shiloh",
        "Spencer", "Stevie", "Tatum", "Armani", "Azariah", "Briar", "Cypress", "Ember", "Marlowe", "Lumi",
        "Sky", "Sol", "Winter", "Wren", "Yael", "Zephyr", "Arlo", "August", "Blue", "Cleo",
        "Dawson", "Denver", "Echo", "Elliott", "Flynn", "Gray", "Haven", "Indigo", "Keegan", "Leighton",
        "Marlow", "Noel", "Ocean", "Onyx", "Paige", "Palmer", "Remi", "Royal", "Salem", "Story"
    ],

    // Name info with origins and meanings
    boyInfo: {
        "Liam": { origin: "Irish", meaning: "Strong-willed warrior and protector" },
        "Noah": { origin: "Hebrew", meaning: "Rest, comfort" },
        "Oliver": { origin: "Latin", meaning: "Olive tree" },
        "Elijah": { origin: "Hebrew", meaning: "Yahweh is God" },
        "William": { origin: "Germanic", meaning: "Resolute protector" },
        "James": { origin: "Hebrew", meaning: "Supplanter" },
        "Benjamin": { origin: "Hebrew", meaning: "Son of the right hand" },
        "Lucas": { origin: "Greek", meaning: "Bringer of light" },
        "Henry": { origin: "Germanic", meaning: "Ruler of the home" },
        "Alexander": { origin: "Greek", meaning: "Defender of the people" },
        "Mason": { origin: "Occupational", meaning: "Stone worker" },
        "Michael": { origin: "Hebrew", meaning: "Who is like God?" },
        "Ethan": { origin: "Hebrew", meaning: "Strong, firm" },
        "Daniel": { origin: "Hebrew", meaning: "God is my judge" },
        "Jacob": { origin: "Hebrew", meaning: "Supplanter" },
        "Logan": { origin: "Scottish", meaning: "Small hollow" },
        "Jackson": { origin: "English", meaning: "Son of Jack" },
        "Levi": { origin: "Hebrew", meaning: "Joined, attached" },
        "Sebastian": { origin: "Greek", meaning: "Venerable, revered" },
        "Mateo": { origin: "Spanish", meaning: "Gift of God" }
    },

    girlInfo: {
        "Olivia": { origin: "Latin", meaning: "Olive tree" },
        "Emma": { origin: "Germanic", meaning: "Universal" },
        "Charlotte": { origin: "French", meaning: "Free man" },
        "Amelia": { origin: "Germanic", meaning: "Work" },
        "Ava": { origin: "Latin", meaning: "Like a bird" },
        "Sophia": { origin: "Greek", meaning: "Wisdom" },
        "Isabella": { origin: "Italian", meaning: "Pledged to God" },
        "Mia": { origin: "Italian", meaning: "Mine" },
        "Evelyn": { origin: "English", meaning: "Wished for child" },
        "Harper": { origin: "English", meaning: "Harp player" },
        "Luna": { origin: "Latin", meaning: "Moon" },
        "Camila": { origin: "Latin", meaning: "Young ceremonial attendant" },
        "Gianna": { origin: "Italian", meaning: "God is gracious" },
        "Elizabeth": { origin: "Hebrew", meaning: "My God is an oath" },
        "Eleanor": { origin: "Greek", meaning: "Bright, shining one" },
        "Ella": { origin: "German", meaning: "Fairy maiden" },
        "Abigail": { origin: "Hebrew", meaning: "Father's joy" },
        "Sofia": { origin: "Greek", meaning: "Wisdom" },
        "Avery": { origin: "English", meaning: "Ruler of the elves" },
        "Scarlett": { origin: "English", meaning: "Red" }
    },

    neutralInfo: {
        "Jordan": { origin: "Hebrew", meaning: "Flow down" },
        "Riley": { origin: "Irish", meaning: "Valiant" },
        "Casey": { origin: "Irish", meaning: "Vigilant, watchful" },
        "Jessie": { origin: "Hebrew", meaning: "Gift" },
        "Jackie": { origin: "Hebrew", meaning: "Supplanter" },
        "Avery": { origin: "English", meaning: "Ruler of the elves" },
        "Quinn": { origin: "Irish", meaning: "Counsel, wisdom" },
        "Dakota": { origin: "Native American", meaning: "Friend, ally" },
        "River": { origin: "English", meaning: "Stream of water that flows to the sea" },
        "Skyler": { origin: "Dutch", meaning: "Scholar" },
        "Frankie": { origin: "Latin", meaning: "Free one" },
        "Drew": { origin: "Greek", meaning: "Strong and manly" },
        "Morgan": { origin: "Welsh", meaning: "Sea-born, sea-circle" },
        "Taylor": { origin: "English", meaning: "Tailor" },
        "Blake": { origin: "English", meaning: "Dark" },
        "Rowan": { origin: "Irish", meaning: "Little red one" },
        "Charlie": { origin: "German", meaning: "Free man" },
        "Finley": { origin: "Scottish", meaning: "Fair warrior" },
        "Emerson": { origin: "German", meaning: "Brave, powerful" },
        "Hayden": { origin: "English", meaning: "Valley with hay" }
    },

    // Name categories by origin/ethnicity
    origins: {
        american: [
            "Liam", "Noah", "Oliver", "Elijah", "William", "James", "Benjamin", "Lucas", "Henry", "Alexander",
            "Olivia", "Emma", "Charlotte", "Amelia", "Ava", "Sophia", "Isabella", "Mia", "Evelyn", "Harper",
            "Jordan", "Riley", "Avery", "Quinn", "River", "Rowan", "Charlie", "Finley", "Emerson", "Hayden"
        ],
        english: [
            "William", "James", "Henry", "Alexander", "Jack", "Thomas", "Samuel", "Edward", "Charles", "George",
            "Charlotte", "Amelia", "Evelyn", "Eleanor", "Abigail", "Victoria", "Grace", "Hannah", "Alice", "Elizabeth",
            "Avery", "Taylor", "Blake", "Hayden", "Morgan", "Riley", "Quinn", "Parker", "Casey", "Jordan"
        ],
        irish: [
            "Liam", "Aiden", "Connor", "Ryan", "Sean", "Finn", "Declan", "Cian", "Rowan", "Callum",
            "Fiona", "Erin", "Maeve", "Siobhan", "Bridget", "Aoife", "Niamh", "Shannon", "Eileen", "Sinead",
            "Riley", "Casey", "Quinn", "Kelly", "Keegan", "Rory", "Shannon", "Cody", "Kerry", "Sloane"
        ],
        // Add more origins as needed...
    },

    // Name categories by style
    styles: {
        classic: [
            "William", "James", "Henry", "Alexander", "George", "Edward", "Thomas", "Benjamin", "Samuel", "Charles",
            "Elizabeth", "Charlotte", "Eleanor", "Catherine", "Victoria", "Margaret", "Virginia", "Jane", "Alice", "Anne",
            "Jordan", "Morgan", "Taylor", "Casey", "Jackie", "Drew", "Avery", "Riley", "Jesse", "Jamie"
        ],
        modern: [
            "Liam", "Noah", "Mason", "Logan", "Jackson", "Aiden", "Elijah", "Lucas", "Jayden", "Ethan",
            "Emma", "Olivia", "Ava", "Sophia", "Mia", "Isabella", "Luna", "Harper", "Camila", "Aria",
            "Skyler", "River", "Phoenix", "Nova", "Kai", "Winter", "Lumi", "Onyx", "Echo", "Indigo"
        ],
        unique: [
            "Axel", "Zephyr", "Atlas", "Orion", "Phoenix", "Caspian", "Onyx", "Caius", "Sage", "Zion",
            "Aurora", "Seraphina", "Ophelia", "Calliope", "Octavia", "Persephone", "Elowen", "Juniper", "Zephyrine", "Celestia",
            "Indigo", "Echo", "Zephyr", "Onyx", "Phoenix", "Winter", "Sage", "Ocean", "Sol", "Story"
        ],
        // Add more styles as needed...
    }
};
