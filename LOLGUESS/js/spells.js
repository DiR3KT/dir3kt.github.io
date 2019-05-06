//Made by @DiiREKT
var playerGuess
var champions = ['aatrox', 'ahri', 'akali', 'alistar', 'amumu', 'anivia', 'annie', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'draven', 'drmundo', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvaniv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'leblanc', 'leesin', 'leona', 'lissandra', 'lucian', 'lulu', 'lux', 'malphite', 'malzahar', 'maokai', 'masteryi', 'missfortune', 'mordekaiser', 'morgana', 'nami', 'nasus', 'nautilus', 'neeko', 'nidalee', 'nocturne', 'nunu', 'olaf', 'orianna', 'ornn', 'pantheon', 'poppy', 'pyke', 'quinn', 'rakan', 'rammus', 'reksai', 'renekton', 'rengar', 'riven', 'rumble', 'ryze', 'sejuani', 'shaco', 'shen', 'shyvana', 'singed', 'sion', 'sivir', 'skarner', 'sona', 'soraka', 'swain', 'sylas', 'syndra', 'tahmkench', 'taliyah', 'talon', 'taric', 'teemo', 'thresh', 'tristana', 'trundle', 'tryndamere', 'twistedfate', 'twitch', 'udyr', 'urgot', 'varus', 'vayne', 'veigar', 'velkoz', 'vi', 'viktor', 'vladimir', 'volibear', 'warwick', 'xayah', 'xerath', 'xinzhao', 'yasuo', 'yorick', 'zac', 'zed', 'ziggs', 'zilean', 'zoe', 'zyra'];
//pick a random champion
function shuffle(array)
{
  var m = array.length, t, i;
  while (m > 0)
  {
    i = Math.floor(Math.random()*m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array
}

function printChamp()
{
  shuffle(champions);
  URL = "https://cdn.communitydragon.org/9.9.1/champion/" + champions[0] + "/portrait";
  document.getElementById("champ").src=URL;
}

function validateGuess()
{
  playerGuess = document.getElementById("guess").value;
  if (playerGuess==champions[0])
  {
    console.log("GOOD ANSWER");
  }
  else
  {
    console.log("WRONG ANSWER, IT WAS "+champions[0]);
  }
  printChamp()
}
