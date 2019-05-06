//Made by @DiiREKT
var p,q,w,e,r;
var champions = ['aatrox', 'ahri', 'akali', 'alistar', 'amumu', 'anivia', 'annie', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'draven', 'drmundo', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvaniv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'leblanc', 'leesin', 'leona', 'lissandra', 'lucian', 'lulu', 'lux', 'malphite', 'malzahar', 'maokai', 'masteryi', 'missfortune', 'mordekaiser', 'morgana', 'nami', 'nasus', 'nautilus', 'nidalee', 'nocturne', 'nunu', 'olaf', 'orianna', 'ornn', 'pantheon', 'poppy', 'pyke', 'quinn', 'rakan', 'rammus', 'reksai', 'renekton', 'rengar', 'riven', 'rumble', 'ryze', 'sejuani', 'shaco', 'shen', 'shyvana', 'singed', 'sion', 'neeko', 'sivir', 'skarner', 'sona', 'soraka', 'swain', 'sylas', 'syndra', 'tahmkench', 'taliyah', 'talon', 'taric', 'teemo', 'thresh', 'tristana', 'trundle', 'tryndamere', 'twistedfate', 'twitch', 'udyr', 'urgot', 'varus', 'vayne', 'veigar', 'velkoz', 'vi', 'viktor', 'vladimir', 'volibear', 'warwick', 'xayah', 'xerath', 'xinzhao', 'yasuo', 'yorick', 'zac', 'zed', 'ziggs', 'zilean', 'zoe', 'zyra'];

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

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
  p = "https://cdn.communitydragon.org/9.9.1/champion/" + champions[0] + "/ability-icon/p";
  q = "https://cdn.communitydragon.org/9.9.1/champion/" + champions[0] + "/ability-icon/q";
  w = "https://cdn.communitydragon.org/9.9.1/champion/" + champions[0] + "/ability-icon/w";
  e = "https://cdn.communitydragon.org/9.9.1/champion/" + champions[0] + "/ability-icon/e";
  r = "https://cdn.communitydragon.org/9.9.1/champion/" + champions[0] + "/ability-icon/r";
  document.getElementById("placeholder_p").src=p;
  document.getElementById("placeholder_q").src=q;
  document.getElementById("placeholder_w").src=w;
  document.getElementById("placeholder_e").src=e;
  document.getElementById("placeholder_r").src=r;
}

function validateGuess()
{
  playerGuess = document.getElementById("guess").value;
  if (playerGuess==champions[0])
  {
    console.log("GOOD ANSWER");
    document.getElementById("yesno").src="js/yes.png";
    console.log("OUI");
    document.getElementById("goodOne").innerHTML=" ";
  }
  else
  {
    console.log("WRONG ANSWER, IT WAS "+champions[0]);
    document.getElementById("yesno").src="js/no.png";
    document.getElementById("goodOne").innerHTML="It was "+ champions[0];
  }
  printChamp()
}
