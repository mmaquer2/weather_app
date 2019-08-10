//--------------things to add ------------------//
//location finder using gps coordinates
//error handli

//1. fetch user zip code from markup

//2. fetch api data from weather map


function output_test() {

var test = document.getElementById('output');

output.innerHTML = "test data here"

}


function RetrieveData() {

const state = document.getElementById('state').value
const city = document.getElementById('cit').value
const postal = document.getElementById('zip').value
const search_url =("")


}
const url = ('https://api.openweathermap.org/data/2.5/weather?q=Nashville&APPID=a488d31fefafdc561500bdfd1b695f5d')
async function test() {

  const response = await fetch(url);
   const data = await response.json();

   console.log(data.main.temp)
   console.log(data.main.humidity)

   console.log(data.weather[0].main)
   console.log(data.weather[0].description)

    
   //activates creative weather front end animations 
   
   

  // for( var i = 0; i < data.length; i++ ) {
       //     console.log(data.main)

   //}

   
    //results and output template based on the search results of the user

    //var temp = data.main.temp
    //var humid = data.main.humidity
    //var min = data.main.temp_min
    //var max = data.main.temp_max

   //var test = document.getElementById('output');

   output.innerHTML = "test data here"


    
   VisualWeather() 

      

}


    
function VisualWeather() {


        document.body.style.backgroundColor = "skyblue";
       

        //icons for weather types:

        //sunny

        //<i class="fas fa-sun"></i>
        //document.body.style.backgroundColor = "skyblue";

        //cloudy

        //<i class="fas fa-cloud"></i>
        //document.body.style.backgroundColor = "skyblue";


        //rain

        //<i class="fas fa-cloud-showers-heavy"></i>

        //snow

        //<i class="far fa-snowflake"></i>

        //thunderstorm

        //<i class="fas fa-bolt"></i>
      
}



    

 function reset() {
  location.reload(true);
}


function disp() {

var show = document.getElementById('results')
if(show.style.display = 'none') {
    show.style.display = 'block'
}
else if ( show.style.display = 'block' ) {

    show.style.display ='none'
}

}


