//----------------------------------------------------------------
// Test created by @DiiREKT
// Demonstrate the power of Riot API.
// Educational purposes only, I do not sell any of the program
// and might have got inspired by some others.
//----------------------------------------------------------------

//upon loading page
console.log("page chargée");

function getNameAndRegionByUrl()
{
  $.extend({
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


  var pName = $.getUrlVar('name');
  var pRegion = $.getUrlVar('region');

  if (pName != null && pRegion != null)
  {
    //get summoner data
    $.get("http://www.masteryprofiler.com/php/api-caller.php?op=1&platformId=" + GetPlatformId(pRegion) + "&name=" + pName, function(jsonSummData){
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

      $('#loading-section').removeClass('section-hidden');
      $('#intro-header').text("Loading").css({'color':'white'});
      $('#bar-intro>span').width("30%");

      var pResult = "";

      //store data
      m_data["summoner"] = pData;

      console.log ("retrieved summoner id based on region and name " + m_data["summoner"]["name"] + " " + m_data["summoner"]["id"]);
    }
    else if (pName != null || pRegion != null)
    {
      p_message = "Invalid URL. Please use the section above to provide a Summoner Name and a Region.";
      DisplayError(p_message);
    }
    else
    {
      $('#intro-header').text("");
      $('#error-info').text("Begin by providing a League of Legends Summoner Name and Region.").css({'color':'white'});
    }
  }
