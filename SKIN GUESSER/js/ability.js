// DEFINING ALL OF THE CHAMPIONS ABILITIES
// https://www.mobafire.com/league-of-legends/abilities

var champions = ['aatrox', 'ahri', 'akali', 'alistar', 'amumu', 'anivia', 'annie', 'ashe',
'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille',
'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'draven', 'drmundo', 'ekko', 'elise',
'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar',
'gragas', 'graves', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna',
'jarvaniv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus',
'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw',
'leblanc', 'leesin', 'leona', 'lissandra', 'lucian', 'lulu', 'lux', 'malphite', 'malzahar',
'maokai', 'masteryi', 'missfortune', 'mordekaiser', 'morgana', 'nami', 'nasus', 'nautilus',
'nidalee', 'nocturne', 'nunu', 'olaf', 'orianna', 'ornn', 'pantheon', 'poppy', 'pyke',
'quinn', 'rakan', 'rammus', 'reksai', 'renekton', 'rengar', 'riven', 'rumble', 'ryze',
'sejuani', 'shaco', 'shen', 'shyvana', 'singed', 'sion', 'neeko', 'sivir', 'skarner',
'sona', 'soraka', 'swain', 'sylas', 'syndra', 'tahmkench', 'taliyah', 'talon', 'taric',
'teemo', 'thresh', 'tristana', 'trundle', 'tryndamere', 'twistedfate', 'twitch', 'udyr',
'urgot', 'varus', 'vayne', 'veigar', 'velkoz', 'vi', 'viktor', 'vladimir', 'volibear',
'warwick', 'xayah', 'xerath', 'xinzhao', 'yasuo', 'yorick', 'zac', 'zed', 'ziggs', 'zilean',
'zoe', 'zyra'];

var en_aatrox = ["Deathbringer Stance", "The Darkin Blade", "Infernal Chains", "Umbral Dash", "World Ender"];
var en_ahri = ["Vastayan Grace", "Orb of Deception", "Fox-Fire", "Charm", "Spirit Rush"];
var en_akali = ["Assassin's Mark", "Five Point Strike", "Twilight Shroud", "Shuriken Flip", "Perfect Execution"];
var en_alistar = ["Triumphant Roar", "Pulverize", "Headbutt", "Trample", "Unbreakable Will"];
var en_amumu = ["Cursed Touch", "Bandage Toss", "Despair", "Tantrum", "Curse of the Sad Mummy"];
var en_anivia = ["Rebirth", "Flash Frost", "Crystallize", "Frostbite", "Glacial Storm"];
var en_annie = ["Pyromania", "Disintegrate", "Incinerate", "Molten Shield", "Summon: Tibbers"];
var en_ashe = ["Frost Shot", "Ranger's Focus", "Volley", "Hawkshot", "Enchanted Crystal Arrow"];
var en_aurelionsol = ["Center of the Universe", "Starsurge", "Celestial Expansion", "Comet of Legend", "Voice of Light"];
var en_azir = ["Shurima's Legacy", "Conquering Sands", "Arise!", "Shifting Sands", "Emperor's Divide"];
var en_bard = ["Traveler's Call", "Cosmic Binding", "Caretaker's Shrine", "Magical Journey", "Tempered Fate"];
var en_blitzcrank = ["Mana Shield", "Rocket Grab", "Overdrive", "Power Fist", "Static Field"]
var en_brand = ["Blaze", "Sear", "Pillar of Flame", "Conflagration", "Pyroclasm"];
var en_braum = ["Concussive Blows", "Winter's Bite", "Stand Behind Me", "Unbreakable", "Glacial Fissure"];
var en_caitlyn = ["Headshot", "Piltover Peacemaker", "Yordle Snap Trap", "90 Caliber Net", "Ace in the Hole"];
var en_camille = ["Adaptive Defenses", "Precision Protocol", "Tactical Sweep", "Hookshot/Wall Dive", "Hextech Ultimatum"];
var en_cassiopeia = ["Serpentine Grace", "Noxious Blast", "Miasma", "Twin Fang", "Petrifying Gaze"];
var en_chogath = ["Carnivore", "Rupture", "Feral Scream", "Vorpal Spikes", "Feast"];
var en_corki = ["Hextech Munitions", "Phosphorus Bomb", "Valkyrie", "Gatling Gun", "Missile Barrage"];
var en_darius = ["Hemorrhage", "Decimate", "Crippling Strike", "Apprehend", "Noxian Guillotine"];
var en_diana = ["Moonsilver Blade", "Crescent Strike", "Pale Cascade", "Moonfall", "Lunar Rush"];
var en_draven = ["League of Draven", "Spinning Axe", "Blood Rush", "Stand Aside", "Whirling Death"];
var en_drmundo = ["Adrenaline Rush", "Infected Cleaver", "Burning Agony", "Masochism", "Sadism"];
