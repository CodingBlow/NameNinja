/**
 * Villain Names Data
 * Collection of names, titles, and descriptors for villain name generation
 */

// Villain first names categorized by gender
const villainFirstNames = {
    male: [
        "Damien", "Draven", "Malachi", "Viktor", "Magnus", "Lucius", "Silas", "Mortimer", "Darius", "Thorne", 
        "Asmodeus", "Kaine", "Nero", "Vladimir", "Zoran", "Grimm", "Bastian", "Cyrus", "Orion", "Raziel",
        "Alaric", "Bane", "Crowley", "Damon", "Erebus", "Faust", "Gideon", "Hannibal", "Icarus", "Jericho",
        "Kaiser", "Leviathan", "Mephisto", "Nyx", "Osiris", "Phelan", "Quillon", "Raiden", "Sauron", "Thanos"
    ],
    female: [
        "Lilith", "Morgana", "Bellatrix", "Ravenna", "Morrigan", "Vesper", "Desdemona", "Maleficent", "Hela", "Lamia", 
        "Carmilla", "Morana", "Elvira", "Jezebel", "Nephthys", "Selene", "Thana", "Vexana", "Octavia", "Nyx",
        "Acantha", "Belladonna", "Circe", "Desdemona", "Ebony", "Fiona", "Gothel", "Hecate", "Ishtar", "Jinx",
        "Kalypso", "Lyra", "Medusa", "Nemesis", "Onyx", "Pandora", "Quorra", "Raven", "Sable", "Tempest"
    ],
    neutral: [
        "Onyx", "Ruin", "Zenith", "Viper", "Wraith", "Void", "Eclipse", "Nemesis", "Havoc", "Abyss", 
        "Entropy", "Cipher", "Dread", "Malice", "Shadow", "Tempest", "Chaos", "Spectre", "Oblivion", "Thorn",
        "Ash", "Blitz", "Crimson", "Doom", "Enigma", "Frost", "Ghost", "Hex", "Iron", "Jester",
        "Knell", "Legend", "Midnight", "Null", "Omen", "Phantom", "Quake", "Rogue", "Shroud", "Talon"
    ]
};

// Villain last names
const villainLastNames = [
    "Blackwood", "Shadowfell", "Darkheart", "Bloodthorn", "Grimshaw", "Nightshade", "Ironhand", "Duskraven", 
    "Voidbringer", "Soulreaver", "Cruelclaw", "Deathwhisper", "Frostbane", "Mournweaver", "Hellstrom", 
    "Doomforge", "Boneflayer", "Scourge", "Dreadlord", "Harbinger",
    "Ashcroft", "Blackthorne", "Craven", "Dreadborne", "Ebonhart", "Frostfell", "Grimclaw", "Hexthorn",
    "Ironblood", "Jaggerfang", "Kilgrave", "Lector", "Malignant", "Necroveil", "Obsidian", "Plaguebringer",
    "Queenslayer", "Ravenscroft", "Stormcrow", "Tormentus"
];

// Villain titles
const villainTitles = [
    "the Merciless", "the Destroyer", "the Deceitful", "the Cruel", "the Immortal", "the Terrible", 
    "the Shadow", "the Devourer", "the Corrupted", "the Cursed", "the Undying", "the Tormentor", 
    "the Betrayer", "the Vile", "the Wicked", "the Insidious", "the Forsaken", "the Malevolent", 
    "the Defiler", "the Banished",
    "the Abominable", "the Butcher", "the Calamitous", "the Deathbringer", "the Execrable", "the Feared",
    "the Grotesque", "the Heartless", "the Infernal", "the Jailer", "the Killer", "the Loathsome",
    "the Monstrous", "the Nefarious", "the Oppressor", "the Pestilent", "the Quarrelsome", "the Reviled",
    "the Sinister", "the Tyrant"
];

// Villain type descriptions
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