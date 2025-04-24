// Startup name generation words and components
const startupWords = {
    // Prefixes for company names
    prefixes: {
        general: [
            "Smart", "Quick", "Fast", "Rapid", "Swift", "Bright", "Prime", "Peak", "Top", "Ultra",
            "Meta", "Hyper", "Super", "Pro", "Ace", "Alpha", "Beta", "Next", "Neo", "Novo",
            "Nova", "Stellar", "Astro", "Cosmic", "Global", "World", "Inter", "Omni", "Pan", "Uni",
            "Tech", "Digi", "Cyber", "Data", "Info", "Web", "Net", "Cloud", "App", "Mobile",
            "Micro", "Macro", "Mega", "Giga", "Tera", "Quantum", "Atom", "Pixel", "Bit", "Wave",
            "Flow", "Stream", "Flux", "Pulse", "Core", "Hub", "Nexus", "Node", "Link", "Sync",
            "Loop", "Circuit", "Grid", "Matrix", "Sphere", "Cube", "Vector", "Vertex", "Index", "Base",
            "Stack", "Chain", "Block", "Ware", "Soft", "Firm", "Corp", "Group", "Team", "Crew"
        ],
        tech: [
            "Byte", "Code", "Dev", "Algo", "Script", "System", "Logic", "Array", "Stack", "Parse",
            "Query", "Cache", "Hash", "Node", "API", "Git", "Host", "Deploy", "Build", "Runtime",
            "Kernel", "Unix", "Linux", "Cloud", "Docker", "React", "Vue", "Angular", "Swift", "Python",
            "Deep", "Neural", "Graph", "Edge", "Fog", "AI", "ML", "AR", "VR", "IoT"
        ],
        finance: [
            "Fin", "Cash", "Money", "Pay", "Wealth", "Asset", "Fund", "Capital", "Invest", "Market",
            "Trade", "Stock", "Bond", "Hedge", "Equity", "Secure", "Trust", "Bank", "Loan", "Credit",
            "Debit", "Tax", "Budget", "Plan", "Fiscal", "Coin", "Token", "Ledger", "Block", "Chain"
        ],
        health: [
            "Med", "Health", "Care", "Cure", "Heal", "Vital", "Life", "Bio", "Gene", "Pharma",
            "Remedy", "Therapy", "Fitness", "Wellness", "Nutrition", "Diet", "Mind", "Body", "Heart", "Brain",
            "Neuro", "Cardio", "Immune", "Dental", "Vision", "Sleep", "Rest", "Energy", "Balance", "Harmony"
        ],
        food: [
            "Bite", "Taste", "Flavor", "Meal", "Dish", "Cuisine", "Chef", "Cook", "Kitchen", "Dine",
            "Eat", "Feast", "Gourmet", "Organic", "Fresh", "Green", "Farm", "Harvest", "Garden", "Sprout",
            "Spice", "Sweet", "Savory", "Juice", "Brew", "Bake", "Toast", "Sizzle", "Simmer", "Fusion"
        ],
        fashion: [
            "Style", "Trend", "Mode", "Chic", "Vogue", "Glam", "Thread", "Stitch", "Weave", "Fabric",
            "Cloth", "Wear", "Dress", "Fit", "Cut", "Tailor", "Design", "Pattern", "Color", "Hue",
            "Shade", "Tone", "Look", "Ensemble", "Attire", "Garment", "Couture", "Boutique", "Runway", "Model"
        ],
        education: [
            "Learn", "Teach", "Edu", "Know", "Study", "Scholar", "Tutor", "Mentor", "Guide", "Expert",
            "Skill", "Talent", "Ability", "Intellect", "Mind", "Brain", "Thought", "Reason", "Logic", "Wisdom",
            "Insight", "Vision", "Idea", "Concept", "Theory", "Practice", "Method", "System", "Course", "Class"
        ],
        entertainment: [
            "Fun", "Play", "Game", "Joy", "Thrill", "Excite", "Amuse", "Laugh", "Smile", "Happy",
            "Show", "Stage", "Scene", "Act", "Drama", "Comedy", "Tragedy", "Fiction", "Story", "Tale",
            "Myth", "Legend", "Film", "Movie", "Stream", "Watch", "View", "Listen", "Hear", "Audio"
        ],
        travel: [
            "Trip", "Tour", "Journey", "Voyage", "Travel", "Cruise", "Flight", "Drive", "Ride", "Walk",
            "Path", "Road", "Route", "Way", "Track", "Trail", "Guide", "Map", "Navigate", "Explore",
            "Discover", "Find", "Seek", "Quest", "Adventure", "Excursion", "Expedition", "Safari", "Trek", "Hike"
        ],
        real: [
            "Home", "House", "Dwell", "Live", "Reside", "Abode", "Nest", "Haven", "Shelter", "Realty",
            "Land", "Lot", "Plot", "Acre", "Estate", "Property", "Asset", "Value", "Worth", "Appraise",
            "Build", "Construct", "Design", "Plan", "Blueprint", "Architect", "Space", "Room", "Area", "Zone"
        ],
        fitness: [
            "Fit", "Health", "Strong", "Power", "Muscle", "Train", "Coach", "Gym", "Exercise", "Workout",
            "Sport", "Active", "Move", "Motion", "Action", "Dynamic", "Energy", "Vigor", "Vitality", "Life",
            "Body", "Mind", "Spirit", "Balance", "Harmony", "Wellness", "Nutrition", "Diet", "Fuel", "Nourish"
        ],
        gaming: [
            "Play", "Game", "Level", "Quest", "Mission", "Challenge", "Adventure", "World", "Universe", "Realm",
            "Hero", "Warrior", "Mage", "Rogue", "Ranger", "Paladin", "Guild", "Clan", "Team", "Squad",
            "Arena", "Battle", "Combat", "Fight", "Duel", "Strategy", "Tactics", "Plan", "Build", "Craft"
        ],
        ecommerce: [
            "Shop", "Store", "Market", "Mart", "Mall", "Bazaar", "Emporium", "Boutique", "Outlet", "Retail",
            "Buy", "Sell", "Trade", "Deal", "Bargain", "Price", "Cost", "Value", "Worth", "Quality",
            "Product", "Goods", "Wares", "Merchandise", "Stock", "Inventory", "Supply", "Demand", "Order", "Ship"
        ],
        social: [
            "Social", "Connect", "Link", "Network", "Friend", "Group", "Community", "Tribe", "Circle", "Sphere",
            "Share", "Post", "Message", "Chat", "Talk", "Speak", "Voice", "Express", "Communicate", "Interact",
            "Engage", "Involve", "Participate", "Contribute", "Collaborate", "Cooperate", "Team", "Together", "Collective", "Common"
        ]
    },

    // Suffixes for company names
    suffixes: {
        general: [
            "ify", "ly", "io", "eo", "app", "hub", "base", "spot", "space", "zone",
            "sphere", "cube", "box", "ware", "tech", "sys", "net", "web", "cloud", "data",
            "bit", "byte", "flow", "stream", "pulse", "wave", "link", "now", "plus", "pro",
            "go", "me", "you", "us", "all", "one", "first", "top", "prime", "ultra",
            "able", "wise", "worth", "ful", "ible", "ous", "ism", "ment", "tion", "sion",
            "ance", "ence", "ity", "ness", "ship", "dom", "hood", "er", "or", "ist",
            "ian", "ive", "al", "ary", "ory", "ical", "esque", "que", "ic", "iac",
            "ing", "zing", "ify", "ize", "en", "ish", "like", "some", "y", "esque"
        ],
        tech: [
            "tech", "soft", "sys", "ware", "code", "dev", "lab", "works", "bit", "byte",
            "net", "web", "app", "cloud", "data", "AI", "ML", "AR", "VR", "IoT",
            "API", "hack", "stack", "node", "compile", "query", "cache", "host", "build", "deploy"
        ],
        finance: [
            "pay", "cash", "coin", "money", "wallet", "bank", "finance", "capital", "invest", "wealth",
            "fund", "asset", "market", "trade", "stock", "bond", "hedge", "equity", "secure", "trust"
        ],
        health: [
            "health", "med", "care", "heal", "vita", "life", "bio", "gene", "pharma", "remedy",
            "therapy", "wellness", "fitness", "nutrition", "mind", "body", "heart", "brain", "neuro", "cardio"
        ],
        food: [
            "bite", "taste", "flavor", "meal", "dish", "cuisine", "chef", "kitchen", "dine", "eat",
            "feast", "gourmet", "organic", "fresh", "farm", "harvest", "garden", "spice", "sweet", "savory"
        ],
        fashion: [
            "style", "trend", "mode", "chic", "vogue", "glam", "thread", "stitch", "fabric", "wear",
            "dress", "fit", "cut", "design", "pattern", "color", "look", "attire", "couture", "boutique"
        ],
        education: [
            "learn", "teach", "edu", "know", "study", "scholar", "tutor", "mentor", "guide", "expert",
            "skill", "talent", "mind", "thought", "wisdom", "insight", "course", "class", "school", "academy"
        ],
        entertainment: [
            "fun", "play", "game", "joy", "thrill", "show", "stage", "scene", "act", "drama",
            "comedy", "story", "tale", "film", "movie", "stream", "watch", "view", "listen", "audio"
        ],
        travel: [
            "trip", "tour", "journey", "voyage", "travel", "cruise", "flight", "drive", "path", "road",
            "guide", "map", "navigate", "explore", "discover", "adventure", "expedition", "safari", "trek", "hike"
        ],
        real: [
            "home", "house", "dwell", "live", "abode", "nest", "haven", "realty", "land", "estate",
            "property", "asset", "value", "build", "construct", "design", "space", "room", "area", "zone"
        ],
        fitness: [
            "fit", "health", "strong", "power", "muscle", "train", "coach", "gym", "exercise", "workout",
            "sport", "active", "move", "energy", "vigor", "body", "wellness", "nutrition", "diet", "fuel"
        ],
        gaming: [
            "play", "game", "level", "quest", "mission", "adventure", "world", "hero", "guild", "clan",
            "arena", "battle", "combat", "strategy", "tactics", "build", "craft", "loot", "score", "win"
        ],
        ecommerce: [
            "shop", "store", "market", "mart", "mall", "bazaar", "boutique", "retail", "buy", "sell",
            "trade", "deal", "price", "value", "product", "goods", "wares", "stock", "order", "ship"
        ],
        social: [
            "social", "connect", "link", "network", "friend", "group", "community", "tribe", "share", "post",
            "message", "chat", "talk", "voice", "express", "engage", "involve", "participate", "collaborate", "team"
        ]
    },

    // Root words for making coined names
    rootWords: {
        general: [
            "vista", "horizon", "zenith", "apex", "summit", "peak", "crest", "wave", "pulse", "flow",
            "stream", "current", "flux", "motion", "orbit", "path", "route", "course", "way", "track",
            "trail", "journey", "quest", "mission", "goal", "aim", "target", "focus", "point", "center",
            "core", "heart", "soul", "spirit", "mind", "brain", "thought", "idea", "concept", "notion",
            "vision", "sight", "view", "scene", "scenario", "situation", "state", "status", "mode", "phase",
            "stage", "level", "tier", "rank", "grade", "class", "category", "group", "set", "collection",
            "array", "series", "sequence", "chain", "link", "bond", "tie", "connection", "relation", "network",
            "web", "mesh", "grid", "matrix", "system", "structure", "framework", "architecture", "design", "pattern"
        ],
        tech: [
            "code", "dev", "byte", "bit", "pixel", "cloud", "net", "web", "app", "data",
            "file", "host", "server", "client", "user", "admin", "system", "program", "script", "module",
            "function", "method", "object", "class", "interface", "protocol", "standard", "format", "syntax", "logic",
            "algo", "compute", "process", "task", "job", "work", "flow", "queue", "stack", "heap",
            "frame", "buffer", "cache", "memory", "storage", "disk", "drive", "port", "socket", "packet",
            "message", "signal", "stream", "channel", "band", "wave", "frequency", "spectrum", "range", "domain"
        ],
        finance: [
            "pay", "cash", "coin", "money", "fund", "finance", "bank", "invest", "market", "trade",
            "stock", "bond", "share", "equity", "asset", "capital", "wealth", "value", "worth", "price",
            "cost", "expense", "budget", "account", "balance", "credit", "debit", "loan", "debt", "mortgage",
            "interest", "dividend", "yield", "return", "profit", "gain", "loss", "risk", "hedge", "insure",
            "tax", "audit", "fiscal", "monetary", "economic", "financial", "commercial", "business", "corporate", "enterprise"
        ],
        health: [
            "health", "care", "med", "heal", "cure", "treat", "therapy", "remedy", "drug", "pharma",
            "dose", "clinic", "hospital", "doctor", "nurse", "patient", "vital", "life", "live", "bio",
            "gene", "cell", "tissue", "organ", "system", "body", "mind", "brain", "heart", "lung",
            "blood", "bone", "muscle", "nerve", "skin", "immune", "diet", "nutrition", "fitness", "exercise",
            "workout", "train", "strength", "endurance", "flexibility", "balance", "wellness", "well", "whole", "holistic"
        ],
        // Add more industry-specific root words as needed...
    },

    // Adjectives for descriptive names
    adjectives: {
        general: [
            "amazing", "awesome", "brilliant", "bold", "creative", "dynamic", "efficient", "elegant", "excellent", "fabulous",
            "fantastic", "fresh", "friendly", "global", "happy", "innovative", "inspiring", "intelligent", "intuitive", "joyful",
            "keen", "lively", "magical", "masterful", "mighty", "modern", "natural", "noble", "novel", "optimal",
            "outstanding", "passionate", "perfect", "positive", "powerful", "practical", "premium", "prime", "proactive", "productive",
            "professional", "quality", "quick", "radiant", "rapid", "reliable", "remarkable", "resilient", "responsive", "robust",
            "seamless", "sensible", "simple", "smart", "smooth", "solid", "sound", "speedy", "stable", "steady",
            "streamlined", "strong", "stunning", "stylish", "sublime", "substantial", "successful", "super", "superb", "supreme",
            "swift", "talented", "terrific", "thorough", "thriving", "top", "ultimate", "unique", "universal", "valuable",
            "versatile", "vibrant", "victorious", "vigorous", "virtual", "visionary", "vital", "vivid", "wise", "wonderful"
        ],
        tech: [
            "advanced", "agile", "algorithmic", "automated", "binary", "cloud-based", "connected", "cyber", "data-driven", "digital",
            "encrypted", "fast", "futuristic", "high-tech", "intelligent", "interactive", "interconnected", "mobile", "modern", "next-gen",
            "online", "optimized", "quantum", "responsive", "robotic", "scalable", "smart", "streamlined", "technological", "virtual"
        ],
        finance: [
            "affluent", "bankable", "beneficial", "cost-effective", "economical", "fiscal", "frugal", "lucrative", "monetary", "premium",
            "profitable", "prosperous", "resourceful", "rewarding", "secure", "solvent", "strategic", "thrifty", "valuable", "wealthy"
        ],
        health: [
            "active", "balanced", "curative", "energetic", "fit", "healthful", "holistic", "invigorating", "natural", "nourishing",
            "organic", "preventive", "rejuvenating", "restorative", "revitalizing", "therapeutic", "thriving", "vibrant", "vital", "wholesome"
        ],
        // Add more industry-specific adjectives as needed...
    },

    // Nouns for descriptive names
    nouns: {
        general: [
            "academy", "access", "account", "ace", "action", "advance", "advantage", "adventure", "advisor", "advocate",
            "agent", "aid", "ally", "alternative", "angel", "apex", "approach", "architect", "arrow", "artisan",
            "asset", "assist", "atlas", "attain", "avenue", "award", "axis", "balance", "base", "basis",
            "beacon", "benefit", "boost", "bridge", "builder", "business", "captain", "catalyst", "center", "central",
            "champion", "choice", "circle", "clarity", "class", "coach", "coalition", "coast", "code", "command",
            "commerce", "compass", "concept", "concierge", "connect", "consensus", "consultant", "core", "corner", "create",
            "credit", "crest", "crown", "crystal", "cube", "curator", "current", "curve", "cycle", "data",
            "dawn", "day", "deal", "delta", "design", "direct", "dispatch", "district", "domain", "drive",
            "dynamic", "eagle", "earth", "east", "edge", "element", "elevate", "elite", "emerge", "empower"
        ],
        tech: [
            "algorithm", "app", "array", "bandwidth", "bit", "block", "browser", "byte", "cache", "chip",
            "cloud", "code", "data", "database", "device", "digital", "domain", "download", "engine", "file",
            "firewall", "framework", "gateway", "grid", "hardware", "host", "interface", "kernel", "key", "link",
            "logic", "memory", "network", "node", "packet", "pixel", "platform", "program", "protocol", "query",
            "router", "script", "server", "signal", "software", "source", "stack", "storage", "system", "terminal"
        ],
        finance: [
            "account", "asset", "bank", "bond", "budget", "capital", "cash", "coin", "credit", "currency",
            "deposit", "dividend", "equity", "exchange", "finance", "fund", "growth", "income", "interest", "invest",
            "ledger", "loan", "market", "money", "mortgage", "payment", "portfolio", "profit", "revenue", "savings",
            "share", "stock", "trade", "treasury", "trust", "value", "vault", "venture", "wallet", "wealth"
        ],
        health: [
            "balance", "body", "care", "clinic", "cure", "doctor", "energy", "fitness", "health", "heart",
            "immunity", "life", "medicine", "mind", "nutrition", "organic", "recovery", "remedy", "strength", "therapy",
            "treatment", "vitality", "wellness", "wholeness", "healing", "restoration", "rejuvenation", "revival", "vigor", "vitality"
        ],
        // Add more industry-specific nouns as needed...
    },

    // Metaphorical names
    metaphors: {
        general: [
            "Horizon", "Pinnacle", "Summit", "Apex", "Zenith", "Crest", "Oasis", "Harbor", "Anchor", "Beacon",
            "Compass", "Lighthouse", "North Star", "Milestone", "Cornerstone", "Foundation", "Keystone", "Pillar", "Bridge", "Gateway",
            "Passage", "Portal", "Junction", "Nexus", "Crossroads", "Intersection", "Matrix", "Mosaic", "Tapestry", "Canvas",
            "Palette", "Spectrum", "Prism", "Crystal", "Gem", "Diamond", "Pearl", "Amber", "Ivory", "Marble",
            "Echo", "Whisper", "Murmur", "Ripple", "Wave", "Current", "Stream", "River", "Ocean", "Sea",
            "Harbor", "Bay", "Coast", "Shore", "Horizon", "Sky", "Cloud", "Star", "Sun", "Moon",
            "Eclipse", "Shadow", "Light", "Spark", "Flame", "Fire", "Ember", "Blaze", "Torch", "Lantern",
            "Nest", "Haven", "Sanctuary", "Refuge", "Retreat", "Den", "Burrow", "Cocoon", "Shell", "Garden"
        ],
        tech: [
            "Quantum", "Neural", "Synapse", "Cortex", "Helix", "Matrix", "Nexus", "Grid", "Sphere", "Cube",
            "Vector", "Array", "Spectrum", "Pulse", "Signal", "Wave", "Beam", "Router", "Hub", "Node",
            "Gateway", "Portal", "Cipher", "Code", "Protocol", "Module", "Core", "Kernel", "Shell", "Frame"
        ],
        finance: [
            "Vault", "Treasury", "Mint", "Coffer", "Safe", "Fortress", "Citadel", "Castle", "Keep", "Bastion",
            "Shield", "Aegis", "Bulwark", "Rampart", "Wall", "Gate", "Bridge", "Path", "Road", "Route",
            "Journey", "Voyage", "Expedition", "Quest", "Mission", "Venture", "Pursuit", "Endeavor", "Undertaking", "Enterprise"
        ],
        health: [
            "Garden", "Grove", "Meadow", "Orchard", "Forest", "Tree", "Root", "Stem", "Branch", "Leaf",
            "Bloom", "Blossom", "Flower", "Fruit", "Seed", "Sprout", "Shoot", "Growth", "Harvest", "Bounty",
            "River", "Stream", "Spring", "Fountain", "Well", "Pool", "Lake", "Sea", "Ocean", "Tide"
        ],
        // Add more industry-specific metaphors as needed...
    },

    // Innovative patterns for modern names
    innovativePatterns: [
        "double-letter", 
        "remove-vowels", 
        "replace-with-number",
        "add-ly",
        "add-io",
        "add-ify",
        "add-ai"
    ],

    // Pre-generated names for specific industries
    industryNames: {
        tech: [
            "ByteWave", "CodeSphere", "DevNexus", "TechPulse", "PixelFlow", "CloudCore", "NetMatrix", "AppHub", "DataByte", "SoftFlux",
            "LogicWave", "CyberSync", "WebNode", "MobileAxis", "TechCraft", "CodeForge", "ByteShift", "CloudPeak", "DataSphere", "NetEdge",
            "Devify", "Algoly", "Pythonic", "ReactWare", "NodeFlex", "QuantumBit", "VRBeyond", "AIForward", "EdgeWise", "CloudBurst"
        ],
        finance: [
            "WealthWise", "CapitalCore", "FinPeak", "MoneyMatrix", "InvestHub", "MarketMind", "TradeSmart", "BankBright", "CashFlow", "PaySwift",
            "WealthFront", "FinCrest", "MoneyWave", "InvestPro", "MarketEdge", "TradeBeam", "BankHaven", "CashLoop", "PayVantage", "CapitalPulse"
        ],
        health: [
            "VitalWave", "HealWell", "MedCore", "CarePoint", "LifePulse", "WellnessHub", "HealthHarbor", "FitMatrix", "NutriSphere", "MindfulBody",
            "VitalGlow", "HealingHaven", "MedSpark", "CareCrest", "LifeBridge", "WellnessPeak", "HealthHorizon", "FitFlow", "NutriNest", "MindPeace"
        ],
        food: [
            "FreshBite", "TasteCraft", "FlavorFuse", "MealMaster", "DishDash", "CuisineCore", "ChefSphere", "KitchenHub", "DineWave", "EatWell",
            "FeastFlow", "GourmetGrid", "OrganicOrbit", "FreshHarvest", "GardenGlow", "SpiceSpan", "SavorySphere", "SweetSurge", "JuiceJoy", "BrewBright"
        ],
        fashion: [
            "StyleSphere", "TrendPulse", "ChicCore", "VogueVibe", "GlamGrid", "ThreadThrive", "StitchStar", "FabricFlux", "WearWave", "DressCode",
            "FitFrame", "CutCrest", "TailorTech", "DesignDash", "PatternPeak", "ColorCraft", "HueHub", "LookLoop", "EnsembleEdge", "AttireAxis"
        ],
        education: [
            "LearnLoop", "TeachTech", "EduEdge", "KnowNow", "StudySphere", "ScholarStream", "TutorTide", "MentorMatrix", "GuideGrid", "ExpertEcho",
            "SkillSphere", "TalentTrek", "AbilityAxis", "IntellectIvy", "MindMosaic", "ThoughtThrive", "ReasonRealm", "LogicLane", "WisdomWave", "InsightIon"
        ],
        entertainment: [
            "FunFlow", "PlayPulse", "GameGrid", "JoyJam", "ThrillThrive", "ExciteEdge", "AmuseArc", "LaughLoop", "SmileStream", "HappyHub",
            "ShowSphere", "StageStream", "SceneSync", "ActAxis", "DramaDash", "ComedyCrest", "StoryStudio", "TaleTech", "FilmFlow", "MovieMatrix"
        ],
        travel: [
            "TripTide", "TourTech", "JourneyJunction", "VoyageVector", "TravelTrove", "CruiseCrest", "FlightFlow", "DriveDesk", "PathPulse", "RoadRover",
            "RouteRealm", "WayWave", "TrackTrellis", "TrailTrek", "GuidegGrid", "MapMatrix", "NavigateNow", "ExploreEdge", "DiscoverDome", "FindFlow"
        ],
        real: [
            "HomeHub", "HouseHaven", "DwellDesk", "LiveLoop", "ResideRealm", "AbodeAxis", "NestNode", "HavenHall", "ShelterSphere", "RealtyRiver",
            "LandLink", "LotLoop", "PlotPulse", "AcreAxis", "EstateEdge", "PropertyPro", "AssetArc", "ValueVista", "WorthWave", "AppraisePeak"
        ],
        fitness: [
            "FitFlow", "HealthHub", "StrongSphere", "PowerPulse", "MuscleMatrix", "TrainTide", "CoachCrest", "GymGrid", "ExerciseEdge", "WorkoutWave",
            "SportSphere", "ActiveAxis", "MoveMatrix", "MotionMind", "ActionArc", "DynamicDash", "EnergyEcho", "VigorVista", "VitalityVibe", "LifeLoop"
        ],
        gaming: [
            "PlayPulse", "GameGrid", "LevelLoop", "QuestQuark", "MissionMatrix", "ChallengeCore", "AdventureAxis", "WorldWave", "UniverseUnity", "RealmRush",
            "HeroHub", "WarriorWave", "MageMind", "RogueRiver", "RangerRealm", "PaladinPeak", "GuildGrid", "ClanCore", "TeamTide", "SquadStream"
        ],
        ecommerce: [
            "ShopStream", "StoreSync", "MarketMatrix", "MartMind", "MallMesh", "BazaarByte", "EmporiumEdge", "BoutiqueBay", "OutletOrbit", "RetailRapid",
            "BuyBridge", "SellSphere", "TradeTide", "DealDash", "BargainBay", "PricePulse", "CostCore", "ValueVortex", "WorthWave", "QualityQuest"
        ],
        social: [
            "SocialSphere", "ConnectCore", "LinkLoop", "NetworkNexus", "FriendFlow", "GroupGrid", "CommunityCloud", "TribeTrack", "CircleCrest", "SphereSpark",
            "ShareStream", "PostPulse", "MessageMatrix", "ChatChannel", "TalkTide", "SpeakSpan", "VoiceVector", "ExpressEdge", "CommunicateCore", "InteractIo"
        ]
    }
};
