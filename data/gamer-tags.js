// Gamer tag datasets
const gamerTags = {
    // Generic gamer tags that work across all game types
    general: [
        "Ace", "Alpha", "Beast", "Blaze", "Bullet", "Chief", "Cobra", "Crush", "Danger", "Dark",
        "Demon", "Eagle", "Elite", "Falcon", "Flash", "Fury", "Ghost", "Goliath", "Hawk", "Hunter",
        "Inferno", "Joker", "King", "Legend", "Lion", "Maverick", "Ninja", "Omega", "Phantom", "Phoenix",
        "Predator", "Ranger", "Raptor", "Raven", "Rebel", "Recon", "Rogue", "Saber", "Shadow", "Shooter",
        "Sniper", "Spark", "Specter", "Stealth", "Storm", "Striker", "Thunder", "Titan", "Venom", "Viper",
        "Void", "Warlock", "Warrior", "Wolf", "Wraith", "Wrath", "Zero", "Zombie", "Dragon", "Knight",
        "Sentinel", "Guardian", "Slayer", "Reaper", "Spectre", "Chaos", "Fury", "Hex", "Jinx", "Karma",
        "Mystic", "Nova", "Orion", "Pyre", "Quantum", "Rage", "Savage", "Tempest", "Ultra", "Vector",
        "Wizard", "Xeno", "Yin", "Zephyr", "Apex", "Bandit", "Cipher", "Doom", "Echo", "Frost"
    ],
    
    // Game type-specific tags
    gameTypes: {
        fps: [
            "Headshot", "Sniper", "AimGod", "TriggerFinger", "Gunslinger", "QuickDraw", "SharpShooter", "Marksman", "BulletStorm", "ShotCaller",
            "FragMaster", "AceShot", "OneShot", "QuickScope", "NoScope", "TripleKill", "Rampage", "KillStreak", "Unstoppable", "Godlike",
            "TacticalOps", "ShadowOps", "GhostOperator", "SpecOps", "PointMan", "OverWatch", "SilentKill", "StealthMode", "TacticalReload", "CoverFire",
            "FlankMaster", "Ambusher", "HitMarker", "CriticalHit", "SniperElite", "DeadEye", "EagleEye", "HawkEye", "SteadyAim", "QuickDraw"
        ],
        moba: [
            "LaneKing", "JungleGod", "MidLaner", "TopLane", "SupportLife", "CarryHard", "GankMaster", "LastHit", "FarmKing", "PushMaster",
            "TowerDiver", "ObjectiveTaker", "BaronSteal", "DragonSlayer", "UltReady", "ComboBreaker", "TeamFight", "Initiator", "Disruptor", "SkillShot",
            "MechanicsGod", "MapAwareness", "VisionControl", "WardMaster", "RoamingSupport", "SplitPusher", "FrontLine", "BackLine", "Peeler", "Engager",
            "Kiter", "BurstDamage", "DPS", "CCMachine", "HealBot", "ShieldMaster", "TankLife", "AssassinMain", "MageGod", "BruiserTop"
        ],
        rpg: [
            "LootMaster", "QuestSeeker", "DragonBorn", "SpellCaster", "SwordMaster", "ArchSage", "BattleMage", "NecroLord", "PaladinOath", "RangerStealth",
            "SummonerSoul", "WarriorHeart", "RogueShadow", "ClericLight", "DruidWild", "MonkFist", "BardSong", "AlchemistBrew", "HunterBeast", "KnightHonor",
            "WizardTower", "ShamanSpirit", "BerserkerRage", "InquisitorFaith", "WarlockPact", "IllusionistTrick", "EnchantressGlam", "ConjurorSummon", "EvokerElemental", "AbjurerWard"
        ],
        sports: [
            "MVP", "AllStar", "ChampionX", "LeagueLeader", "TeamCaptain", "ClutchPlay", "GameChanger", "SportsStar", "TopScorer", "DefenseTitan",
            "GoalKeeper", "StrikerElite", "SlamDunk", "ThreePointer", "HatTrick", "PenaltyKick", "FreeThrow", "HomeRun", "TouchDown", "SlapShot",
            "PitchMaster", "CourtGeneral", "FieldGeneral", "RinkRuler", "DiamondKing", "GridironGod", "CourtVision", "BoxingChamp", "RacerX", "GolfPro"
        ],
        racing: [
            "SpeedDemon", "RacerX", "DriftKing", "NitroBoost", "TrackStar", "LapRecord", "PolePosition", "CheckeredFlag", "FinishLine", "TurboCharged",
            "RoadRage", "StreetRacer", "SuperSonic", "SpeedForce", "NosBoost", "DriftMaster", "CornerKing", "AsphaltLegend", "RubberBurner", "PistonPower",
            "GearHead", "HighOctane", "RedLine", "SpeedJunkie", "DragRacer", "RallyChamp", "CircuitMaster", "FastLane", "SlipStream", "VelocityVector"
        ],
        strategy: [
            "MindGames", "Tactician", "Strategist", "ChessMaster", "CommanderX", "WarGeneral", "MasterMind", "TacticalGenius", "GrandStrategy", "EmperorWar",
            "KingMaker", "ConquestLord", "RulerNations", "EmpireBuilder", "ThroneSeeker", "CrownTaker", "ResourceManager", "TechRush", "ArmyLegion", "DefenseGrid",
            "BaseBuilder", "Fortifier", "ExpansionMaster", "DiplomatElite", "AllianceLord", "TreatyMaker", "Economist", "TradeRoute", "IntelligenceChief", "SpyMaster"
        ],
        sandbox: [
            "WorldBuilder", "CreativeGod", "ConstructorX", "BlockMaster", "TerrainShaper", "LandscapeArtist", "PixelArchitect", "MasterCrafter", "DigBuilder", "SurvivalKing",
            "ResourceHound", "CraftingWizard", "MiningPro", "FarmingGuru", "HarvestMaster", "ExplorerMax", "CaveDelver", "MountainClimber", "OceanDiver", "SkyReacher",
            "BaseDesigner", "HomeBuilder", "CityPlanner", "RedstoneGenius", "MechanicMind", "TinkererTech", "InventorSupreme", "GadgetGuru", "AutomationKing", "MachineMaster"
        ],
        mmo: [
            "GuildMaster", "RaidLeader", "LegendaryGear", "EndgameBoss", "MaxLevel", "EliteRaider", "DungeonMaster", "QuestHunter", "WorldFirst", "BossSlayer",
            "LootHunter", "GrindKing", "PvPGod", "ArenaChampion", "BattlegroundHero", "WarlordX", "TankElite", "HealerLife", "BuffMaster", "AOELegend",
            "CCController", "PartyFinder", "GuildRecruiter", "CrafterSupreme", "GatheringPro", "EconomyBaron", "MarketMaster", "AuctionKing", "CommunityIcon", "LoreSeeker"
        ],
        "battle-royale": [
            "LastSurvivor", "VictoryRoyale", "CircleRunner", "ZoneKing", "DropMaster", "LootGoblin", "AirdropHunter", "CrateRaider", "ShrinkingStorm", "BattleBus",
            "HotDropper", "TilterTowers", "SniperHill", "BushCamper", "CircleEdge", "StormFighter", "ThirdParty", "CleanupCrew", "SquadWiper", "SoloSquad",
            "ReviveMaster", "RespawnKing", "GulagWinner", "PingMaster", "RotationKing", "HighGrounder", "SmokeDancer", "GrenadeRain", "CoverFire", "FlankMaster"
        ]
    },
    
    // Style-specific tags
    styles: {
        aggressive: [
            "Killer", "Slayer", "Destroyer", "Eliminator", "Annihilator", "Demolisher", "Dominator", "Conqueror", "Vanquisher", "Obliterator",
            "Ravager", "Savage", "Berserker", "Bruiser", "Basher", "Crusher", "Smasher", "Wrecker", "Breaker", "Mauler",
            "Assassin", "Executioner", "Terminator", "Exterminator", "Eradicator", "Decimator", "Punisher", "Enforcer", "Oppressor", "Tormentor",
            "Devastator", "Marauder", "Raider", "Pillager", "Plunderer", "Looter", "Thief", "Bandit", "Outlaw", "Pirate",
            "Barbarian", "Warrior", "Fighter", "Brawler", "Pugilist", "Boxer", "Scrapper", "Battler", "Combatant", "Gladiator"
        ],
        funny: [
            "NoodleDoodle", "TacoTuesday", "PizzaWizard", "BananaBro", "CookieMonsta", "CheeseWhiz", "PajamaParty", "PotatoAim", "WaffleWarrior", "CaptainUnderpants",
            "DerpyDino", "FluffyPenguin", "JellyBelly", "MuffinMan", "PancakeFlip", "RubberDucky", "SillyGoose", "TeddyBear", "WhiskerWisdom", "YogurtYeti",
            "BaconBuddy", "ChickenChaser", "DonutDude", "EggHead", "FlapjackFury", "GummyBearGod", "HotSauceHero", "IceCreamDream", "JumpingJellybean", "KitchenNinja",
            "LollipopLarry", "MarshmallowMan", "NapTime", "OatmealOgre", "PretzelPro", "QuackAttack", "RamenRanger", "SandwichSage", "TeaBagger", "UnicornUprising"
        ],
        mysterious: [
            "Enigma", "Mystery", "Shadow", "Phantom", "Specter", "Ghost", "Wraith", "Apparition", "Silhouette", "Shade",
            "Veil", "Shroud", "Cloak", "Mask", "Hood", "Mist", "Fog", "Cloud", "Smoke", "Haze",
            "Twilight", "Dusk", "Dawn", "Nightfall", "Midnight", "Eclipse", "Blackout", "Darkness", "Abyss", "Void",
            "Unknown", "Anonymous", "Nameless", "Faceless", "Unseen", "Hidden", "Concealed", "Obscured", "Cryptic", "Arcane",
            "Secret", "Covert", "Clandestine", "Occult", "Mystic", "Esoteric", "Elusive", "Ethereal", "Whisper", "Murmur"
        ],
        cool: [
            "Frost", "Ice", "Chill", "Freeze", "Zero", "Sub-Zero", "Arctic", "Polar", "Glacier", "Avalanche",
            "Winter", "Snow", "Blizzard", "Sleet", "Hail", "North", "Alpine", "Tundra", "Permafrost", "Crystal",
            "Steel", "Metal", "Iron", "Chrome", "Silver", "Platinum", "Titanium", "Cobalt", "Mercury", "Zinc",
            "Sleek", "Smooth", "Slick", "Clean", "Sharp", "Crisp", "Fresh", "Pure", "Pristine", "Immaculate",
            "Zenith", "Apex", "Peak", "Summit", "Top", "Prime", "Elite", "Supreme", "Ultimate", "Optimal"
        ],
        elite: [
            "Pro", "Elite", "Master", "Champion", "Legend", "Immortal", "God", "Titan", "Supreme", "Ultimate",
            "Expert", "Veteran", "Ace", "Star", "Prodigy", "Genius", "Virtuoso", "Maestro", "Savant", "Adept",
            "Grandmaster", "Emperor", "King", "Queen", "Lord", "Overlord", "Monarch", "Sovereign", "Ruler", "Dominator",
            "Undefeated", "Unbeatable", "Unstoppable", "Invincible", "Indomitable", "Insurmountable", "Unconquerable", "Impenetrable", "Unbreakable", "Unyielding",
            "eSports", "Tournament", "Competition", "Championship", "Trophy", "Award", "Medal", "Prize", "Victory", "Triumph"
        ],
        mythical: [
            "Dragon", "Phoenix", "Griffin", "Manticore", "Chimera", "Hydra", "Kraken", "Leviathan", "Behemoth", "Colossus",
            "Titan", "Giant", "Goliath", "Cyclops", "Minotaur", "Centaur", "Satyr", "Faun", "Mermaid", "Siren",
            "Unicorn", "Pegasus", "Alicorn", "Hippocampus", "Kelpie", "Sleipnir", "Cerberus", "Fenrir", "Jormungandr", "Ouroboros",
            "Vampire", "Werewolf", "Ghoul", "Banshee", "Wraith", "Specter", "Phantom", "Ghost", "Poltergeist", "Revenant",
            "Angel", "Demon", "Seraph", "Cherub", "Archangel", "Fallen", "Nephilim", "Djinn", "Ifrit", "Efreet"
        ]
    },
    
    // Game and style-specific prefixes
    prefixes: {
        fps: ["Aim", "Shot", "Head", "Snipe", "Trigger", "Kill", "Frag", "Gun", "Tac", "Bullet"],
        moba: ["Lane", "Gank", "Push", "Team", "Farm", "Jungle", "Vision", "CC", "Tank", "DPS"],
        rpg: ["Quest", "Loot", "Spell", "Sword", "Mage", "Knight", "Rogue", "Level", "Skill", "Grind"],
        sports: ["MVP", "All", "Pro", "Captain", "Coach", "Champ", "Win", "Play", "Game", "Sport"],
        racing: ["Speed", "Race", "Fast", "Drift", "Nitro", "Turbo", "Track", "Gear", "Lap", "NOS"],
        strategy: ["Tactic", "Plan", "Command", "Think", "Mind", "War", "Lord", "Emperor", "Chess", "Intel"],
        sandbox: ["Build", "Craft", "Mine", "Create", "Design", "Block", "World", "Dig", "Explore", "Make"],
        mmo: ["Guild", "Raid", "Epic", "Leg", "Boss", "PvP", "PvE", "Tank", "Heal", "DPS"],
        "battle-royale": ["Last", "Victory", "Drop", "Zone", "Storm", "Loot", "Survive", "Circle", "Squad", "Solo"],
        
        aggressive: ["Kill", "Slay", "Destroy", "Death", "Doom", "War", "Rage", "Fury", "Mad", "Hate"],
        funny: ["Silly", "Crazy", "Goofy", "Goof", "Derp", "LOL", "ROFL", "Haha", "JK", "Funny"],
        mysterious: ["Dark", "Shadow", "Night", "Myst", "Secret", "Hidden", "Unknown", "Silent", "Void", "Black"],
        cool: ["Cool", "Chill", "Frost", "Ice", "Snow", "Cold", "Steel", "Silver", "Slick", "Smooth"],
        elite: ["Pro", "Elite", "Master", "God", "King", "Queen", "Lord", "Champ", "Top", "Best"],
        mythical: ["Dragon", "Phoenix", "Magic", "Myth", "Legend", "Epic", "Mystic", "Ancient", "Elder", "Eternal"]
    },
    
    // Adjectives for random tag generation
    adjectives: [
        "Angry", "Brave", "Crazy", "Dangerous", "Evil", "Fierce", "Grumpy", "Happy", "Insane", "Jolly",
        "Keen", "Lucky", "Mad", "Nervous", "Odd", "Perfect", "Quick", "Rapid", "Silent", "Toxic",
        "Unique", "Vicious", "Wild", "Xenial", "Young", "Zealous", "Amazing", "Brilliant", "Clever", "Dynamic",
        "Elegant", "Fabulous", "Glorious", "Honorable", "Incredible", "Jovial", "Kind", "Luminous", "Mighty", "Noble",
        "Optimistic", "Powerful", "Quaint", "Radical", "Savage", "Terrific", "Unstoppable", "Victorious", "Wonderful", "Xtreme"
    ],
    
    // Nouns for random tag generation
    nouns: [
        "Assassin", "Bandit", "Champion", "Defender", "Emperor", "Fighter", "Guardian", "Hunter", "Invader", "Joker",
        "Knight", "Legend", "Marauder", "Ninja", "Outlaw", "Predator", "Queen", "Raider", "Sniper", "Titan",
        "Unicorn", "Vampire", "Warrior", "Xenomorph", "Yeti", "Zombie", "Archer", "Berserker", "Crusader", "Destroyer",
        "Explorer", "Falcon", "Gunner", "Hero", "Infiltrator", "Juggernaut", "Killer", "Lancer", "Mage", "Necromancer",
        "Overlord", "Paladin", "Ranger", "Soldier", "Templar", "Usurper", "Vigilante", "Warlord", "Zealot", "Avenger"
    ]
};
