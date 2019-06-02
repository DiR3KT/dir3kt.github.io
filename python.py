import json
from pprint import pprint

with open('champion.json', "r", encoding="utf-8") as data_file:
    data = json.load(data_file)

champs = ['aatrox', 'ahri', 'akali', 'alistar', 'amumu', 'anivia', 'annIe', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'draven', 'drmundo', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvaniv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'leblanc', 'leesin', 'leona', 'lissandra', 'lucian', 'lulu', 'lux', 'malphite', 'malzahar', 'maokai', 'masteryi', 'missfortune', 'mordekaiser', 'morgana', 'nami', 'nasus', 'nautilus', 'nidalee', 'nocturne', 'nunu', 'olaf', 'orianna', 'ornn', 'pantheon', 'poppy', 'pyke', 'quinn', 'rakan', 'rammus', 'reksai', 'renekton', 'rengar', 'riven', 'rumble', 'ryze', 'sejuani', 'shaco', 'shen', 'shyvana', 'singed', 'sion', 'neeko', 'sivir', 'skarner', 'sona', 'soraka', 'swain', 'sylas', 'syndra', 'tahmkench', 'taliyah', 'talon', 'taric', 'teemo', 'thresh', 'tristana', 'trundle', 'tryndamere', 'twistedfate', 'twitch', 'udyr', 'urgot', 'varus', 'vayne', 'veigar', 'velkoz', 'vi', 'viktor', 'vladimir', 'volibear', 'warwick', 'xayah', 'xerath', 'xinzhao', 'wukong', 'yasuo', 'yorick', 'zac', 'zed', 'ziggs', 'zilean', 'zoe', 'zyra']

with open('champion.json', "r", encoding="utf-8") as data_file:
    data = json.load(data_file)

for champion in champs:
    if champion == "aurelionsol":
        champname = "AurelionSol"
    elif champion == "drmundo":
        champname = "DrMundo"
    elif champion == "jarvaniv":
        champname = "JarvanIV"
    elif champion == "kogmaw":
        champname = "KogMaw"
    elif champion == "leesin":
        champname = "LeeSin"
    elif champion == "masteryi":
        champname = "MasterYi"
    elif champion == "missfortune":
        champname = "MissFortune"
    elif champion == "reksai":
        champname = "RekSai"
    elif champion == "tahmkench":
        champname = "TahmKench"
    elif champion == "twistedfate":
        champname = "TwistedFate"
    elif champion == "xinzhao":
        champname = "XinZhao"
    elif champion == "wukong":
        champname = "MonkeyKing"
    else:
        champname = champion.capitalize()


    print("var "+champion+" = "+data["data"][champname]["key"])
