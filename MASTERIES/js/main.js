//----------------------------------------------------------------
// ---MasteryChecker---
// Test created by @DiiREKT
// Demonstrate the power of Riot API.
// MasteryChecker isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games
// or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
// trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
//----------------------------------------------------------------
var APIkey = "RGAPI-3eeba6c8-f589-4926-96ce-36cca9689289";

console.log("page chargée");

function getSummonerData(name, region) {
  URL = "https://"+region+".api.riotgames.com/lol/summoner/v4/summoners/by-name/"+name+"?api_key="+APIkey;
  apiCall(URL);
}

function retrieveDataHTML() {
  name = document.getElementById("name").value;
  region = document.getElementById("region").value;
  console.log("Retrieved "+name+" and "+region+" from HTML!");
  getSummonerData(name,region);
}
