import requests
import shutil
from io import open as iopen

champions = ['aatrox', 'ahri', 'akali', 'alistar', 'amumu', 'anivia', 'annie', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'draven', 'drmundo', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvaniv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'leblanc', 'leesin', 'leona', 'lissandra', 'lucian', 'lulu', 'lux', 'malphite', 'malzahar', 'maokai', 'masteryi', 'missfortune', 'mordekaiser', 'morgana', 'nami', 'nasus', 'nautilus', 'neeko', 'nidalee', 'nocturne', 'nunu', 'olaf', 'orianna', 'ornn', 'pantheon', 'poppy', 'pyke', 'quinn', 'rakan', 'rammus', 'reksai', 'renekton', 'rengar', 'riven', 'rumble', 'ryze', 'sejuani', 'shaco', 'shen', 'shyvana', 'singed', 'sion', 'sivir', 'skarner', 'sona', 'soraka', 'swain', 'sylas', 'syndra', 'tahmkench', 'taliyah', 'talon', 'taric', 'teemo', 'thresh', 'tristana', 'trundle', 'tryndamere', 'twistedfate', 'twitch', 'udyr', 'urgot', 'varus', 'vayne', 'veigar', 'velkoz', 'vi', 'viktor', 'vladimir', 'volibear', 'warwick', 'xayah', 'xerath', 'xinzhao', 'yasuo', 'yorick', 'zac', 'zed', 'ziggs', 'zilean', 'zoe', 'zyra']

print("\nDownloading every champ spell icon...")

for champion in champions:
    URL = "http://raw.communitydragon.org/latest/game/assets/characters/" + champion + "/hud/" + champion + "_square.png"
    response = requests.get(URL, stream=True)
    print("Downloading " + champion + " icon...")
    path = "characters/" + champion + "_0.png"
    if response.status_code == 200:
        with open(path,'wb') as out_file:
            shutil.copyfileobj(response.raw, out_file)
        del response
