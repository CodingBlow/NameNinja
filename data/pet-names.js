// Pet name datasets
const petNames = {
    // General pet names that work for any pet
    general: {
        any: [
            "Buddy", "Charlie", "Max", "Bailey", "Cooper", "Luna", "Stella", "Bella", "Daisy", "Lucy",
            "Molly", "Sadie", "Lola", "Shadow", "Rocky", "Oliver", "Leo", "Milo", "Jasper", "Ziggy",
            "Simba", "Coco", "Toby", "Ruby", "Sox", "Peanut", "Pepper", "Rosie", "Ginger", "Scout",
            "Finn", "Riley", "Zeus", "Zoe", "Lucky", "Loki", "Oscar", "Sam", "Teddy", "Winston",
            "Willow", "Murphy", "Penny", "Roxy", "Oreo", "Maggie", "Angel", "Harley", "Diesel", "Bear",
            "Baxter", "Bentley", "Archie", "Blue", "Duke", "Ellie", "Emma", "Gracie", "George", "Izzy",
            "Jack", "Koda", "Lily", "Marley", "Maya", "Mia", "Millie", "Nova", "Ollie", "Piper",
            "Sophie", "Tucker", "Wally", "Winnie", "Chloe", "Felix", "Thor", "Mocha", "Bandit", "Echo",
            // New additions
            "Sammy", "Hazel", "Nala", "Gus", "Ivy", "Atlas", "Cleo", "Rusty", "Tessa", "Maverick",
            "Jade", "Rex", "Sasha", "Boomer", "Poppy", "Frankie", "Violet", "Dexter", "Pippin", "Aspen",
            "Tango", "Moose", "Cinnamon", "Basil", "Sable", "Mimi", "Zara", "Casper", "Lulu", "Bruno",
            "Opal", "Titan", "Skye", "Bowie", "Fiona", "Ranger", "Ebony", "Phoebe", "Gideon", "Sienna",
            "Dash", "Tinker", "Mabel", "Arrow", "Cairo", "Raven", "Juniper", "Odin", "Pearl", "Saffron"
        ],
        cute: [
            "Mochi", "Pumpkin", "Cupcake", "Button", "Jellybean", "Sprinkles", "Marshmallow", "Waffle", 
            "Cookie", "Biscuit", "Pudding", "Buttercup", "Candy", "Cotton", "Bubbles", "Pebbles", "Pookie", 
            "Snuggles", "Waffles", "Nugget", "Twinkle", "Sweetie", "Charm", "Skippy", "Honey", "Sugar", 
            "Cuddles", "Peaches", "Tiny", "Sparkle", "Puff", "Squeak", "Bunny", "Doodle", "Giggles", 
            "Pipsqueak", "Bean", "Pixel", "Bitsy", "Dotty",
            // New additions
            "Muffin", "Toffee", "Lollipop", "Taffy", "Snickers", "Fudge", "Popcorn", "Caramel", "Skittles", 
            "Gummy", "Petal", "Chiffon", "Tinkerbell", "Fluffel", "Daisy", "Bambi", "Sprout", "Churro", 
            "Puffy", "Clementine", "Bouncy", "Tutu", "Glitter", "Smore", "Noodle", "Pinky", "Wiggly", 
            "Bonbon", "Pippin", "Crumpet", "Sundae", "Tinsel", "Bloop", "Zuzu", "Pancake", "Munchkin", 
            "Coco", "Fizzy", "Ducky", "Pebbles"
        ],
        cool: [
            "Ace", "Bolt", "Blaze", "Dash", "Maverick", "Axel", "Rebel", "Storm", "Raven", "Phoenix",
            "Ghost", "Arrow", "Hunter", "Onyx", "Viper", "Jett", "Ranger", "Rocket", "Razor", "Slate",
            "Nitro", "Jax", "Steele", "Legend", "Bullet", "Rex", "Vortex", "Blade", "Asher", "Frost",
            // New additions
            "Drift", "Cruz", "Zane", "Falcon", "Sable", "Hawk", "Talon", "Surge", "Kaiser", "Rogue",
            "Cobalt", "Zephyr", "Striker", "Dusk", "Gunner", "Stryker", "Vapor", "Shadow", "Blitz", 
            "Canyon", "Rush", "Knox", "Haze", "Volt", "Jetstream", "Panther", "Orion", "Spear", "Drake",
            "Torque", "Grit", "Saber", "Flash", "Echo", "Iron", "Wolf", "Shade", "Rift", "Mako"
        ],
        funny: [
            "Taco", "Noodle", "Pickles", "Sir Fluffington", "Captain Whiskers", "Professor Pawprints",
            "Pancake", "Nacho", "Burrito", "Potato", "Waffles", "Ketchup", "Mustard", "Meatball", "Sushi",
            "Pretzel", "Lord Barksalot", "Miss Furbottom", "Count Lickula", "Dr. Fluffles", "Sergeant Snugglekins",
            "Lieutenant Fuzzyboots", "Princess Purrpants", "King Woofington", "Lady Whiskerface", "Sir Barksalot",
            // New additions
            "Baron Von Meow", "General Furrypants", "Admiral Snugglebutt", "Duke Pawsington", "Mister Wiggles", 
            "Doctor Purrfect", "Colonel Cuddles", "Squire Scratchalot", "Madame Floof", "Chewy McFluff", 
            "Bark Twain", "Purrsephone", "Furry Poppins", "Meowzart", "Woofgang Amadeus", "Catniss Everclean", 
            "Dogtor Strange", "Pawdrey Hepburn", "Bark Vader", "Furball Einstein", "Hairy Potter", 
            "Paws Solo", "Munchkin McMuffin", "Chomperella", "Sir Lickington", "Fluffy McFluffface"
        ],
        classic: [
            "Rex", "Fido", "Spot", "Lady", "Rover", "Fluffy", "Boots", "Tiger", "Kitty", "Buddy",
            "Buster", "Princess", "Spike", "Rusty", "Duke", "Duchess", "King", "Queenie", "Champ", "Sandy",
            "Lucky", "Goldie", "Pepper", "Ginger", "Blackie", "Snowball", "Midnight", "Misty", "Sammy", "Peanut",
            // New additions
            "Prince", "Scamp", "Trixie", "Patches", "Bandit", "Shadow", "Smokey", "Coco", "Dusty", "Socks",
            "Muffin", "Brownie", "Puffy", "Bingo", "Scooter", "Tinker", "Mandy", "Benji", "Pinky", "Candy",
            "Barney", "Molly", "Skippy", "Jasper", "Toby", "Rags", "Snickers", "Lassie", "Pal", "Bouncer",
            "Star", "Honey", "Rufus", "Cinnamon", "Penny", "Snoopy", "Chico", "Milo", "Paddy", "Dolly"
        ],
        unique: [
            "Krypto", "Zephyr", "Indigo", "Nebula", "Odyssey", "Zenith", "Quantum", "Catalyst", "Vector", "Equinox",
            "Solstice", "Axiom", "Nimbus", "Zodiac", "Pixel", "Quasar", "Synth", "Cipher", "Orbit", "Echo",
            "Gadget", "Helix", "Jupiter", "Kaleidoscope", "Labyrinth", "Meridian", "Oblivion", "Parallax", "Sphinx", "Vertex",
            // New additions
            "Aether", "Cosmo", "Vellum", "Prism", "Aurora", "Vanguard", "Elysium", "Spectra", "Nexus", "Chronos",
            "Zion", "Pulsar", "Vesper", "Galaxia", "Icarus", "Nova", "Eon", "Tempest", "Sirocco", "Argon",
            "Lyric", "Ozone", "Flux", "Mirage", "Crimson", "Asteria", "Vortex", "Draco", "Saffron", "Rune",
            "Umber", "Celestine", "Ignis", "Borealis", "Zest", "Cetus", "Lumen", "Arcadia", "Stratos", "Obsidian"
        ]
    },
    
    // Dog specific names
    dog: {
        any: [
            "Max", "Buddy", "Charlie", "Cooper", "Jack", "Rocky", "Bear", "Duke", "Tucker", "Oliver",
            "Milo", "Bentley", "Zeus", "Louie", "Winston", "Toby", "Jax", "Oscar", "Finn", "Bandit",
            "Beau", "Gus", "Koda", "Murphy", "Archie", "Bruno", "Ace", "Apollo", "Hank", "Henry",
            "Luna", "Bella", "Daisy", "Lucy", "Bailey", "Sadie", "Molly", "Stella", "Roxy", "Zoey",
            "Lily", "Lola", "Zoe", "Ruby", "Riley", "Ellie", "Nala", "Abby", "Chloe", "Pepper",
            "Rosie", "Willow", "Piper", "Sophie", "Maggie", "Coco", "Gracie", "Harper", "Penny", "Sasha",
            // New additions
            "Rusty", "Sammy", "Hazel", "Boomer", "Tessa", "Frankie", "Maverick", "Cleo", "Poppy", "Jade",
            "Rex", "Violet", "Dexter", "Pippin", "Aspen", "Moose", "Tango", "Cinnamon", "Sable", "Bruno",
            "Zara", "Casper", "Lulu", "Opal", "Titan", "Skye", "Bowie", "Fiona", "Ranger", "Ebony",
            "Phoebe", "Gideon", "Sienna", "Dash", "Tinker", "Mabel", "Arrow", "Cairo", "Raven", "Juniper",
            "Odin", "Pearl", "Saffron", "Scout", "Ivy", "Atlas", "Nala", "Gus", "Mimi", "Zara"
        ],
        male: [
            "Max", "Buddy", "Charlie", "Cooper", "Jack", "Rocky", "Bear", "Duke", "Tucker", "Oliver",
            "Milo", "Bentley", "Zeus", "Louie", "Winston", "Toby", "Jax", "Oscar", "Finn", "Bandit",
            "Beau", "Gus", "Koda", "Murphy", "Archie", "Bruno", "Ace", "Apollo", "Hank", "Henry",
            "Rex", "Teddy", "Leo", "Dexter", "Diesel", "Rusty", "Atlas", "Thor", "Samson", "Oreo",
            "Marley", "Simba", "Riley", "Tank", "Jasper", "Buster", "Baxter", "Scout", "Moose", "Harley",
            // New additions
            "Ranger", "Boomer", "Frankie", "Pippin", "Titan", "Cairo", "Gideon", "Dash", "Odin", "Casper",
            "Arrow", "Bruno", "Rex", "Sammy", "Maverick", "Tango", "Atlas", "Ziggy", "Haze", "Knox",
            "Drake", "Sable", "Bowie", "Rusty", "Cobalt", "Zane", "Hawk", "Talon", "Cruz", "Striker",
            "Vapor", "Blitz", "Canyon", "Rush", "Gunner", "Stryker", "Panther", "Orion", "Spear", "Torque",
            "Grit", "Saber", "Flash", "Iron", "Wolf", "Shade", "Rift", "Mako", "Jet", "Viking"
        ],
        female: [
            "Luna", "Bella", "Daisy", "Lucy", "Bailey", "Sadie", "Molly", "Stella", "Roxy", "Zoey",
            "Lily", "Lola", "Zoe", "Ruby", "Riley", "Ellie", "Nala", "Abby", "Chloe", "Pepper",
            "Rosie", "Willow", "Piper", "Sophie", "Maggie", "Coco", "Gracie", "Harper", "Penny", "Sasha",
            "Ivy", "Hazel", "Ginger", "Nova", "Olive", "Dixie", "Honey", "Millie", "Mia", "Winnie",
            "Poppy", "Emma", "Lady", "Layla", "Kona", "Lexi", "Mila", "Phoebe", "Annie", "Maya",
            // New additions
            "Tessa", "Cleo", "Poppy", "Jade", "Violet", "Aspen", "Cinnamon", "Sable", "Lulu", "Opal",
            "Skye", "Fiona", "Ebony", "Phoebe", "Sienna", "Tinker", "Mabel", "Juniper", "Pearl", "Saffron",
            "Nala", "Mimi", "Zara", "Raven", "Ivy", "Coco", "Dolly", "Bambi", "Tulip", "Fizzy",
            "Chanel", "Velvet", "Sundae", "Blossom", "Tiffy", "Lacey", "Glimmer", "Starlight", "Coral", 
            "Breezy", "Flora", "Pebbles", "Suki", "Wren", "Marigold", "Taffy", "Sable", "Zinnia", "Cali"
        ]
    },
    
    // Cat specific names
    cat: {
        any: [
            "Luna", "Oliver", "Leo", "Bella", "Charlie", "Lucy", "Max", "Lily", "Simba", "Chloe",
            "Milo", "Sophie", "Jack", "Nala", "Kitty", "Loki", "Smokey", "Tiger", "Oscar", "Shadow",
            "Mittens", "Felix", "Pepper", "Gracie", "Jasper", "Daisy", "Salem", "Cleo", "Rocky", "Penny",
            "Gizmo", "Misty", "Sam", "Zoe", "Boots", "Maggie", "Romeo", "Coco", "George", "Poppy",
            "Teddy", "Ruby", "Scout", "Rosie", "Toby", "Piper", "Zeus", "Princess", "Louie", "Ellie",
            // New additions
            "Sammy", "Hazel", "Gus", "Ivy", "Atlas", "Rusty", "Tessa", "Maverick", "Jade", "Rex",
            "Sasha", "Boomer", "Frankie", "Violet", "Dexter", "Pippin", "Aspen", "Tango", "Moose", "Cinnamon",
            "Sable", "Mimi", "Zara", "Casper", "Lulu", "Bruno", "Opal", "Titan", "Skye", "Bowie",
            "Fiona", "Ranger", "Ebony", "Phoebe", "Gideon", "Sienna", "Dash", "Tinker", "Mabel", "Arrow",
            "Cairo", "Raven", "Juniper", "Odin", "Pearl", "Saffron", "Nala", "Gus", "Mimi", "Zara"
        ],
        male: [
            "Oliver", "Leo", "Charlie", "Max", "Simba", "Milo", "Jack", "Loki", "Tiger", "Oscar",
            "Shadow", "Felix", "Jasper", "Salem", "Rocky", "Gizmo", "Sam", "Boots", "Romeo", "George",
            "Teddy", "Scout", "Toby", "Zeus", "Louie", "Ollie", "Finn", "Winston", "Ziggy", "Oreo",
            "Binx", "Archie", "Dexter", "Peanut", "Cooper", "Thomas", "Sammy", "Buster", "Murphy", "Tigger",
            // New additions
            "Ranger", "Boomer", "Frankie", "Pippin", "Titan", "Cairo", "Gideon", "Dash", "Odin", "Casper",
            "Arrow", "Bruno", "Rex", "Sammy", "Maverick", "Tango", "Atlas", "Ziggy", "Haze", "Knox",
            "Drake", "Sable", "Bowie", "Rusty", "Cobalt", "Zane", "Hawk", "Talon", "Cruz", "Striker",
            "Vapor", "Blitz", "Canyon", "Rush", "Gunner", "Stryker", "Panther", "Orion", "Spear", "Torque",
            "Grit", "Saber", "Flash", "Iron", "Wolf", "Shade", "Rift", "Mako", "Jet", "Viking"
        ],
        female: [
            "Luna", "Bella", "Lucy", "Lily", "Chloe", "Sophie", "Nala", "Kitty", "Smokey", "Pepper",
            "Gracie", "Daisy", "Cleo", "Penny", "Misty", "Zoe", "Maggie", "Coco", "Poppy", "Ruby",
            "Rosie", "Piper", "Princess", "Ellie", "Callie", "Willow", "Mittens", "Sasha", "Molly", "Stella",
            "Lola", "Angel", "Kiki", "Nova", "Olive", "Hazel", "Cali", "Mia", "Ginger", "Abby",
            // New additions
            "Tessa", "Jade", "Violet", "Aspen", "Cinnamon", "Sable", "Lulu", "Opal", "Skye", "Fiona",
            "Ebony", "Phoebe", "Sienna", "Tinker", "Mabel", "Juniper", "Pearl", "Saffron", "Mimi", "Zara",
            "Raven", "Ivy", "Coco", "Dolly", "Bambi", "Tulip", "Fizzy", "Chanel", "Velvet", "Sundae",
            "Blossom", "Tiffy", "Lacey", "Glimmer", "Starlight", "Coral", "Breezy", "Flora", "Pebbles", 
            "Suki", "Wren", "Marigold", "Taffy", "Sable", "Zinnia", "Cali", "Nixie", "Fable", "Lyric"
        ]
    },
    
    // Bird specific names
    bird: {
        any: [
            "Kiwi", "Rio", "Sky", "Blue", "Sunny", "Piper", "Charlie", "Tweety", "Pepper", "Mango",
            "Buddy", "Skye", "Phoenix", "Lola", "Coco", "Oliver", "Luna", "Kiki", "Polly", "Lucky",
            "Zazu", "Echo", "Ziggy", "Willow", "Peaches", "Pip", "Ginger", "Rocky", "Koko", "Sky",
            "Blueberry", "Sunshine", "Tiki", "Oscar", "Lemon", "Angel", "Jasper", "Daisy", "Bandit", "Ruby",
            // New additions
            "Star", "Flicker", "Tango", "Saffron", "Zephyr", "Coral", "Tinker", "Flame", "Opal", "Ivy",
            "Sparrow", "Noodle", "Breeze", "Sable", "Crimson", "Pippin", "Dawn", "Mango", "Sienna", "Dash",
            "Feather", "Nixie", "Blaze", "Tulip", "Cedar", "Onyx", "Puffy", "Sprout", "Coco", "Glint",
            "Fable", "Chirpy", "Lark", "Jade", "Vivid", "Bouncy", "Slate", "Dusty", "Petal", "Swoop",
            "Blossom", "Cairo", "Raven", "Juniper", "Pearl", "Saffron", "Mimi", "Zara", "Glimmer", "Lyric"
        ]
    },
    
    // Fish specific names
    fish: {
        any: [
            "Bubbles", "Nemo", "Goldie", "Finley", "Ripple", "Blue", "Coral", "Flash", "Splash", "Finn",
            "Neptune", "Gill", "Dory", "Sunny", "Marlin", "Wave", "Sharky", "Rainbow", "Flipper", "Pearl",
            "Aqua", "Shelly", "Flounder", "Ariel", "Sebastian", "Captain", "Luna", "Moby", "Jaws", "Scale",
            "Poseidon", "Jacques", "Cleo", "Blub", "Squirtle", "Triton", "Betta", "Guppy", "Noodle", "Swimmer",
            // New additions
            "Tide", "Drift", "Marina", "Sable", "Cobalt", "Spritz", "Lagoon", "Zephyr", "Glint", "Shimmer",
            "Reef", "Saphira", "Pippin", "Sushi", "Tango", "Opal", "Mako", "Crimson", "Sienna", "Dash",
            "Bloop", "Fizzy", "Coralina", "Nixie", "Flare", "Sable", "Vivid", "Puffy", "Sprout", "Coco",
            "Glimmer", "Chirpy", "Jade", "Bouncy", "Slate", "Dusty", "Petal", "Swoop", "Blossom", "Cairo",
            "Raven", "Juniper", "Pearl", "Saffron", "Mimi", "Zara", "Lyric", "Tinsel", "Spark"
        ]
    },
    
    // Reptile specific names
    reptile: {
        any: [
            "Spike", "Rex", "Godzilla", "Lizzy", "Draco", "Ziggy", "Gecko", "Scales", "Slither", "Ranger",
            "Iggy", "Crush", "Drake", "Tiny", "Chompers", "Fang", "Gex", "Rango", "Turtle", "Echo",
            "Naga", "Komodo", "Pascal", "Yoshi", "Bowser", "Chameleon", "Skink", "Raptor", "Flash", "Emerald",
            "Noodle", "Cobra", "Python", "Hydra", "Medusa", "Zeus", "Apollo", "Kaa", "Viper", "Snappy",
            // New additions
            "Sable", "Titan", "Cairo", "Sienna", "Dash", "Tinker", "Mabel", "Juniper", "Odin", "Pearl",
            "Saffron", "Mimi", "Zara", "Glimmer", "Lyric", "Obsidian", "Slate", "Crimson", "Vivid", "Pippin",
            "Nixie", "Blaze", "Tulip", "Cedar", "Onyx", "Puffy", "Sprout", "Coco", "Glint", "Fable",
            "Chirpy", "Jade", "Bouncy", "Dusty", "Petal", "Swoop", "Blossom", "Raven", "Mako", "Zephyr",
            "Coral", "Flame", "Opal", "Ivy", "Sparrow", "Noodle", "Breeze", "Dawn", "Mango", "Viper"
        ]
    },
    
    // Small mammal specific names
    smallMammal: {
        any: [
            "Nibbles", "Whiskers", "Peanut", "Oreo", "Coco", "Hammy", "Gizmo", "Squeaks", "Oliver", "Luna",
            "Nugget", "Pepper", "Biscuit", "Noodle", "Charlie", "Button", "Marshmallow", "Fluffy", "Bean", "Teddy",
            "Pipsqueak", "Pebbles", "Chip", "Cookie", "Daisy", "Smokey", "Snickers", "Socks", "Thumper", "Cotton",
            "Midnight", "Snowball", "Maple", "Penny", "Rusty", "Shadow", "Ginger", "Buddy", "Speck", "Dusty",
            // New additions
            "Mochi", "Mocha", "Benny", "Lulu", "Pumpkin", "Scout", "Bear", "Brownie", "Pepper", "Honey",
            "Sammy", "Hazel", "Gus", "Ivy", "Atlas", "Cleo", "Rusty", "Tessa", "Maverick", "Jade",
            "Rex", "Sasha", "Boomer", "Poppy", "Frankie", "Violet", "Dexter", "Pippin", "Aspen", "Tango",
            "Moose", "Cinnamon", "Sable", "Mimi", "Zara", "Casper", "Lulu", "Bruno", "Opal", "Titan",
            "Skye", "Bowie", "Fiona", "Ranger", "Ebony", "Phoebe", "Gideon", "Sienna", "Dash", "Tinker"
        ]
    }
};