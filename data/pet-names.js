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
            "Sophie", "Tucker", "Wally", "Winnie", "Chloe", "Felix", "Thor", "Mocha", "Bandit", "Echo"
        ],
        cute: [
            "Mochi", "Pumpkin", "Cupcake", "Button", "Jellybean", "Sprinkles", "Marshmallow", "Waffle", 
            "Cookie", "Biscuit", "Pudding", "Buttercup", "Candy", "Cotton", "Bubbles", "Pebbles", "Pookie", 
            "Snuggles", "Waffles", "Nugget", "Twinkle", "Sweetie", "Charm", "Skippy", "Honey", "Sugar", 
            "Cuddles", "Peaches", "Tiny", "Sparkle", "Puff", "Squeak", "Bunny", "Doodle", "Giggles", 
            "Pipsqueak", "Bean", "Pixel", "Bitsy", "Dotty"
        ],
        cool: [
            "Ace", "Bolt", "Blaze", "Dash", "Maverick", "Axel", "Rebel", "Storm", "Raven", "Phoenix",
            "Ghost", "Arrow", "Hunter", "Onyx", "Viper", "Jett", "Ranger", "Rocket", "Razor", "Slate",
            "Nitro", "Jax", "Steele", "Legend", "Bullet", "Rex", "Vortex", "Blade", "Asher", "Frost"
        ],
        funny: [
            "Taco", "Noodle", "Pickles", "Sir Fluffington", "Captain Whiskers", "Professor Pawprints",
            "Pancake", "Nacho", "Burrito", "Potato", "Waffles", "Ketchup", "Mustard", "Meatball", "Sushi",
            "Pretzel", "Lord Barksalot", "Miss Furbottom", "Count Lickula", "Dr. Fluffles", "Sergeant Snugglekins",
            "Lieutenant Fuzzyboots", "Princess Purrpants", "King Woofington", "Lady Whiskerface", "Sir Barksalot"
        ],
        classic: [
            "Rex", "Fido", "Spot", "Lady", "Rover", "Fluffy", "Boots", "Tiger", "Kitty", "Buddy",
            "Buster", "Princess", "Spike", "Rusty", "Duke", "Duchess", "King", "Queenie", "Champ", "Sandy",
            "Lucky", "Goldie", "Pepper", "Ginger", "Blackie", "Snowball", "Midnight", "Misty", "Sammy", "Peanut"
        ],
        unique: [
            "Krypto", "Zephyr", "Indigo", "Nebula", "Odyssey", "Zenith", "Quantum", "Catalyst", "Vector", "Equinox",
            "Solstice", "Axiom", "Nimbus", "Zodiac", "Pixel", "Quasar", "Synth", "Cipher", "Orbit", "Echo",
            "Gadget", "Helix", "Jupiter", "Kaleidoscope", "Labyrinth", "Meridian", "Oblivion", "Parallax", "Sphinx", "Vertex"
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
            "Rosie", "Willow", "Piper", "Sophie", "Maggie", "Coco", "Gracie", "Harper", "Penny", "Sasha"
        ],
        male: [
            "Max", "Buddy", "Charlie", "Cooper", "Jack", "Rocky", "Bear", "Duke", "Tucker", "Oliver",
            "Milo", "Bentley", "Zeus", "Louie", "Winston", "Toby", "Jax", "Oscar", "Finn", "Bandit",
            "Beau", "Gus", "Koda", "Murphy", "Archie", "Bruno", "Ace", "Apollo", "Hank", "Henry",
            "Rex", "Teddy", "Leo", "Dexter", "Diesel", "Rusty", "Atlas", "Thor", "Samson", "Oreo",
            "Marley", "Simba", "Riley", "Tank", "Jasper", "Buster", "Baxter", "Scout", "Moose", "Harley"
        ],
        female: [
            "Luna", "Bella", "Daisy", "Lucy", "Bailey", "Sadie", "Molly", "Stella", "Roxy", "Zoey",
            "Lily", "Lola", "Zoe", "Ruby", "Riley", "Ellie", "Nala", "Abby", "Chloe", "Pepper",
            "Rosie", "Willow", "Piper", "Sophie", "Maggie", "Coco", "Gracie", "Harper", "Penny", "Sasha",
            "Ivy", "Hazel", "Ginger", "Nova", "Olive", "Dixie", "Honey", "Millie", "Mia", "Winnie",
            "Poppy", "Emma", "Lady", "Layla", "Kona", "Lexi", "Mila", "Phoebe", "Annie", "Maya"
        ]
    },
    
    // Cat specific names
    cat: {
        any: [
            "Luna", "Oliver", "Leo", "Bella", "Charlie", "Lucy", "Max", "Lily", "Simba", "Chloe",
            "Milo", "Sophie", "Jack", "Nala", "Kitty", "Loki", "Smokey", "Tiger", "Oscar", "Shadow",
            "Mittens", "Felix", "Pepper", "Gracie", "Jasper", "Daisy", "Salem", "Cleo", "Rocky", "Penny",
            "Gizmo", "Misty", "Sam", "Zoe", "Boots", "Maggie", "Romeo", "Coco", "George", "Poppy",
            "Teddy", "Ruby", "Scout", "Rosie", "Toby", "Piper", "Zeus", "Princess", "Louie", "Ellie"
        ],
        male: [
            "Oliver", "Leo", "Charlie", "Max", "Simba", "Milo", "Jack", "Loki", "Tiger", "Oscar",
            "Shadow", "Felix", "Jasper", "Salem", "Rocky", "Gizmo", "Sam", "Boots", "Romeo", "George",
            "Teddy", "Scout", "Toby", "Zeus", "Louie", "Ollie", "Finn", "Winston", "Ziggy", "Oreo",
            "Binx", "Archie", "Dexter", "Peanut", "Cooper", "Thomas", "Sammy", "Buster", "Murphy", "Tigger"
        ],
        female: [
            "Luna", "Bella", "Lucy", "Lily", "Chloe", "Sophie", "Nala", "Kitty", "Smokey", "Pepper",
            "Gracie", "Daisy", "Cleo", "Penny", "Misty", "Zoe", "Maggie", "Coco", "Poppy", "Ruby",
            "Rosie", "Piper", "Princess", "Ellie", "Callie", "Willow", "Mittens", "Sasha", "Molly", "Stella",
            "Lola", "Angel", "Kiki", "Nova", "Olive", "Hazel", "Cali", "Mia", "Ginger", "Abby"
        ]
    },
    
    // Bird specific names
    bird: {
        any: [
            "Kiwi", "Rio", "Sky", "Blue", "Sunny", "Piper", "Charlie", "Tweety", "Pepper", "Mango",
            "Buddy", "Skye", "Phoenix", "Lola", "Coco", "Oliver", "Luna", "Kiki", "Polly", "Lucky",
            "Zazu", "Echo", "Ziggy", "Willow", "Peaches", "Pip", "Ginger", "Rocky", "Koko", "Sky",
            "Blueberry", "Sunshine", "Tiki", "Oscar", "Lemon", "Angel", "Jasper", "Daisy", "Bandit", "Ruby",
            "Storm", "Milo", "Winnie", "Toby", "Olive", "Finn", "Roxy", "Scout", "Pepper", "Bean"
        ]
    },
    
    // Fish specific names
    fish: {
        any: [
            "Bubbles", "Nemo", "Goldie", "Finley", "Ripple", "Blue", "Coral", "Flash", "Splash", "Finn",
            "Neptune", "Gill", "Dory", "Sunny", "Marlin", "Wave", "Sharky", "Rainbow", "Flipper", "Pearl",
            "Aqua", "Shelly", "Flounder", "Ariel", "Sebastian", "Captain", "Luna", "Moby", "Jaws", "Scale",
            "Poseidon", "Jacques", "Cleo", "Blub", "Squirtle", "Triton", "Betta", "Guppy", "Noodle", "Swimmer",
            "Echo", "River", "Cove", "Sandy", "Shimmer", "Sparkle", "Stream", "Tide", "Drift", "Marina"
        ]
    },
    
    // Reptile specific names
    reptile: {
        any: [
            "Spike", "Rex", "Godzilla", "Lizzy", "Draco", "Ziggy", "Gecko", "Scales", "Slither", "Ranger",
            "Iggy", "Crush", "Drake", "Tiny", "Chompers", "Fang", "Gex", "Rango", "Turtle", "Echo",
            "Naga", "Komodo", "Pascal", "Yoshi", "Bowser", "Chameleon", "Skink", "Raptor", "Flash", "Emerald",
            "Noodle", "Cobra", "Python", "Hydra", "Medusa", "Zeus", "Apollo", "Kaa", "Viper", "Snappy",
            "Toothless", "Mushu", "Puff", "Biscuit", "Pebbles", "Rocky", "Shell", "Tortuga", "Slider", "Shelly"
        ]
    },
    
    // Small mammal specific names
    smallMammal: {
        any: [
            "Nibbles", "Whiskers", "Peanut", "Oreo", "Coco", "Hammy", "Gizmo", "Squeaks", "Oliver", "Luna",
            "Nugget", "Pepper", "Biscuit", "Noodle", "Charlie", "Button", "Marshmallow", "Fluffy", "Bean", "Teddy",
            "Pipsqueak", "Pebbles", "Chip", "Cookie", "Daisy", "Smokey", "Snickers", "Socks", "Thumper", "Cotton",
            "Midnight", "Snowball", "Maple", "Penny", "Rusty", "Shadow", "Ginger", "Buddy", "Speck", "Dusty",
            "Mochi", "Mocha", "Benny", "Lulu", "Pumpkin", "Scout", "Bear", "Brownie", "Pepper", "Honey"
        ]
    }
};
