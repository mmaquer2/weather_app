//--------------things to add ------------------//
//location finder using gps coordinates
//error handli

//1. fetch user zip code from markup

//2. fetch api data from weather map


function output_test() {

var test = document.getElementById('output');

output.innerHTML = "test data here"

}


function data_test() {

//const state = document.getElementById('state').value
//const city = document.getElementById('cit').value
const postal = document.getElementById('zip').value
alert(postal)

}


const url = ('https://api.openweathermap.org/data/2.5/weather?q=Nashville&APPID=a488d31fefafdc561500bdfd1b695f5d')
async function test_get() {

//const state = document.getElementById('state').value
//const city = document.getElementById('cit').value
//const postal = document.getElementById('zip').value
//const city_name = document.getElementById('zip').value    


    
    const response = await fetch(url);
    const data = await response.json();

        console.log(data.main.temp)
        console.log(data.main.humidity)

        console.log(data.weather[0].main)
        console.log(data.weather[0].description)
        console.log(data.name)

   
   
    //results and output template based on the search results of the user

    //var temp = data.main.temp
    //var humid = data.main.humidity
    //var min = data.main.temp_min
    //var max = data.main.temp_max

   //var test = document.getElementById('output');

   //output.innerHTML = "test data here"
   output_name.innerHTML = data.name
   output_temp.innerHTML = data.main.temp
   output_hum.innerHTML = data.main.humidity
   output_main.innerHTML = data.weather[0].main

     
   //activates creative weather front end animations 
   

    
   VisualWeather_test() 

      

}


 function VisualWeather_test () {
    document.body.style.backgroundColor = "skyblue";
    document.getElementById('weather-icon').className = "fas fa-sun fa-10x"
    


 }


    
/*function VisualWeather() {


        //if statement based on value of weather_temp
            if(data.weather [0].main = "sunny") {
            document.body.style.backgroundColor = "skyblue";
            //<i class="fas fa-sun"></i>

        }
        elseif(data.weather [0].main = "cloudy") {
            document.body.style.backgroundColor = "lightgrey";
            //<i class="fas fa-cloud"></i>
       

        }
        elseif(data.weather [0].main = "rain") {
            document.body.style.backgroundColor = "lightgrey";
            //<i class="fas fa-cloud-showers-heavy"></i>
       

        }
        elseif (data.weather [0].main = "snow") {
            document.body.style.backgroundColor = "lightgrey";
            //<i class="far fa-snowflake"></i>
       

        }

        elseif (data.weather [0].main = "storm") {
            document.body.style.backgroundColor = "lightgrey";
            
        //<i class="fas fa-bolt"></i>
       

        }



        

      
//} */



    

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


