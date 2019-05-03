//----------------------------------------------------------------
// ---MasteryChecker---
// Test created by @DiiREKT
// Demonstrate the power of Riot API.
// MasteryChecker isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games
// or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are
// trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
//----------------------------------------------------------------

//--------------VARIABLES---------------
var APIkey = "RGAPI-4d1d64d1-4360-4169-951b-f0e9fdb20910";





console.log("page chargée");

function getNameAndRegionByUrl() //Retrieve summoner name and region in the url.
{
  $.extend({ //jquery solution to get variables from url
    getUrlVars: function(){
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    },
    getUrlVar: function(name){
      return $.getUrlVars()[name];
    }
  });

  //get variables in the url starting with "?name=" and "&region="
  var pName = $.getUrlVar('name');
  var pRegion = $.getUrlVar('region');


  if (pName != null && pRegion != null)
  {
    //get summoner data
    $.get("http://www.masteryprofiler.com/php/api-caller.php?op=1&platformId=" + pRegion + "&name=" + pName, function(jsonSummData){
      var pData;

      try
      {
        pData = JSON.parse(jsonSummData);
      }
      catch (e)
      {
        p_message = jsonSummData;
        DisplayError(p_message);
        return;
      }

      var pResult = "";

      //store data
      m_data["summoner"] = pData;

      console.log ("retrieved summoner id based on region and name " + m_data["summoner"]["name"] + " " + m_data["summoner"]["id"]);
    })
    else if (pName != null || pRegion != null)
    {
      console.log("INVALID URL")
      console.log("START BY USING https://dir3kt.github.io/MASTERIES/index.html?name=[NAME]&region=[REGION]")
    }
    else
    {
      console.log("INVALID URL")
      console.log("START BY USING https://dir3kt.github.io/MASTERIES/index.html?name=[NAME]&region=[REGION]")
    }
  }
