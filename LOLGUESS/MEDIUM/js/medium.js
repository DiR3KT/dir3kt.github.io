//Made by @DiiREKT
var p,q,w,e,r,html,bgURL;
var mistakes=0;
var champions = ['aatrox', 'ahri', 'akali', 'alistar', 'amumu', 'anivia', 'annie', 'ashe', 'aurelionsol', 'azir', 'bard', 'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia', 'chogath', 'corki', 'darius', 'diana', 'draven', 'drmundo', 'ekko', 'elise', 'evelynn', 'ezreal', 'fiddlesticks', 'fiora', 'fizz', 'galio', 'gangplank', 'garen', 'gnar', 'gragas', 'graves', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'ivern', 'janna', 'jarvaniv', 'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 'katarina', 'kayle', 'kayn', 'kennen', 'khazix', 'kindred', 'kled', 'kogmaw', 'leblanc', 'leesin', 'leona', 'lissandra', 'lucian', 'lulu', 'lux', 'malphite', 'malzahar', 'maokai', 'masteryi', 'missfortune', 'mordekaiser', 'morgana', 'nami', 'nasus', 'nautilus', 'nidalee', 'nocturne', 'nunu', 'olaf', 'orianna', 'ornn', 'pantheon', 'poppy', 'pyke', 'quinn', 'rakan', 'rammus', 'reksai', 'renekton', 'rengar', 'riven', 'rumble', 'ryze', 'sejuani', 'shaco', 'shen', 'shyvana', 'singed', 'sion', 'neeko', 'sivir', 'skarner', 'sona', 'soraka', 'swain', 'sylas', 'syndra', 'tahmkench', 'taliyah', 'talon', 'taric', 'teemo', 'thresh', 'tristana', 'trundle', 'tryndamere', 'twistedfate', 'twitch', 'udyr', 'urgot', 'varus', 'vayne', 'veigar', 'velkoz', 'vi', 'viktor', 'vladimir', 'volibear', 'warwick', 'xayah', 'xerath', 'xinzhao', 'yasuo', 'yorick', 'zac', 'zed', 'ziggs', 'zilean', 'zoe', 'zyra'];

//bgURL = "https://cdn.communitydragon.org/9.9.1/champion/"+champions[0]+"/splash-art";
//html = document.querySelector("html").style.opacity
//html.style.background-image =

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
  if (champions.length!==0){
    shuffle(champions);
    randomNumber = Math.floor(Math.random() * 5) + 1;
    if(randomNumber==1)
    {
      placeholder = "https://cdn.communitydragon.org/9.9.1/champion/" + champions[0] + "/ability-icon/p";
    }
    else if (randomNumber==2) {
      placeholder = "https://cdn.communitydragon.org/9.9.1/champion/" + champions[0] + "/ability-icon/q";
    }
    else if (randomNumber==3) {
      placeholder="https://cdn.communitydragon.org/9.9.1/champion/" + champions[0] + "/ability-icon/w";
    }
    else if (randomNumber==4) {
      placeholder="https://cdn.communitydragon.org/9.9.1/champion/" + champions[0] + "/ability-icon/e";
    }
    else if (randomNumber==5) {
      placeholder="https://cdn.communitydragon.org/9.9.1/champion/" + champions[0] + "/ability-icon/r";
    }
  }
  else {
    alert("You won! You made "+mistakes+" mistakes...");
    location.reload();
  }
  document.getElementById("placeholder").src=placeholder;
}

function validateGuess()
{
  playerGuess = document.getElementById("guess").value;
  playerGuess= playerGuess.toLowerCase();
  playerGuessRatio = compareTwoStrings(playerGuess,champions[0]);
  if (playerGuessRatio>0.6)
  {
    console.log("GOOD ANSWER");
    YESURL="https://cdn.communitydragon.org/9.9.1/champion/"+champions[0]+"/square";
    document.getElementById("yesno").src=YESURL;
    document.getElementById("yesno").style.opacity=1;
    document.getElementById("goodOne").innerHTML="Yes! It was "+ champions[0];
  }
  else
  {
    console.log("WRONG ANSWER, IT WAS "+champions[0]);
    NOURL="https://cdn.communitydragon.org/9.9.1/champion/"+champions[0]+"/square";
    document.getElementById("yesno").src=NOURL;
    document.getElementById("yesno").style.opacity=1;
    document.getElementById("goodOne").innerHTML="No! It was "+ champions[0];
    mistakes++;
  }
  champions.shift();
  printChamp()
  playerGuess.value = " ";
}

var champInput = document.getElementById("guess");
champInput.addEventListener('keydown', function(e){
  if (e.keyCode === 13) {
    validateGuess();
  }
});
