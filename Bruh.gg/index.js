function userSubmit(){
  userName = document.getElementById("userInputName").value;
  userRegion = document.getElementById("userInputRegion").value;
  if (userName!==""){
    getData(userName, userRegion);
  }
  else {console.log("Please provide a summoner name")}
}

function getData(name,region){
  url='https://ahoui.herokuapp.com/getData/'+region+'/'+name;
  $.ajax({
      url: url,
      dataType: 'JSONP',
      contentType: 'application/json',
      type: 'GET',
      async: false,
      crossDomain: true,
      success: function(json) {parseData(json)},
      error: function(xhr, status, error) {console.log("error");}
    });
}

function getRank(id, region){
  url='https://ahoui.herokuapp.com/getRank/'+region+'/'+id;
  $.ajax({
      url: url,
      dataType: 'JSONP',
      contentType: 'application/json',
      type: 'GET',
      async: false,
      crossDomain: true,
      success: function(json) {parseRank(json)},
      error: function(xhr, status, error) {console.log("error");}
    });
}
function parseData(data){
  document.getElementById("userInputName").value="";
  parsedData=(JSON.parse(data));
  dID=parsedData["id"];
  dAccountID=parsedData["accountId"];
  dPuuid=parsedData["puuid"];
  dName=parsedData["name"];
  dIconId=parsedData["profileIconId"];
  dLevel=parsedData["summonerLevel"];
  if (dName!== undefined) {
    console.log(dName+" is level "+dLevel);
    getRank(dID, userRegion);
  }
  else {
    console.error(userName+" is not a valid summoner name.");
  }
}

function parseRank(json){
  rankData=JSON.parse(json);
  index=rankData.findIndex(item => item.queueType === "RANKED_SOLO_5x5");
  console.log(index);
  if (index == "-1") {
    rank=false;
  }
  else {
    rank=true;
    dRank=rankData[index].rank;//IV
    dTier=rankData[index].tier;//SILVER
    dLP=rankData[index].leaguePoints;//0
    console.log(dTier+" "+dRank+" "+dLP+"LP");
  }
  createHtmlElements();
}

function createHtmlElements() {
  document.getElementById("profileIcon").style.display = "block";
  document.getElementById("profileName").style.display = "block";
  document.getElementById("profileLevel").style.display = "block";
  document.getElementById("profileRank").style.display = "block";
  document.getElementById("profileIcon").src="https://ddragon.leagueoflegends.com/cdn/9.9.1/img/profileicon/"+dIconId+".png";
  document.getElementById("profileName").textContent=dName;
  document.getElementById("profileLevel").textContent="Level "+dLevel;
  if (rank==true){
    document.getElementById("profileRank").textContent=dTier+" "+dRank+"   "+dLP+"LP";
  }
  else {
    document.getElementById("profileRank").textContent="Unranked";
  }
}
