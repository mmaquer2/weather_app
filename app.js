//--------------things to add ------------------//


// -Error Handling for improper searches 
// - convert kelvin to F or C degrees
// - code more weather descriptions in the background style and icons 
//



function data_test() {

//const state = document.getElementById('state').value

//const postal = document.getElementById('zip').value

const start = ('https://api.openweathermap.org/data/2.5/weather?q=')
const city = document.getElementById('city').value
const id =('&APPID=a488d31fefafdc561500bdfd1b695f5d')
const url =(start + city + id)
alert(url)

}


//const url = ('https://api.openweathermap.org/data/2.5/weather?q=Nashville&APPID=a488d31fefafdc561500bdfd1b695f5d')
const start = ('https://api.openweathermap.org/data/2.5/weather?q=')



async function test_get() {

    const start = ('https://api.openweathermap.org/data/2.5/weather?q=')
    const city = document.getElementById('city').value
    const id =('&APPID=a488d31fefafdc561500bdfd1b695f5d')
    const url =(start + city + id)

   

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

        //convert kelvin to degrees F
        // F = 9/5K -273.15 + 32

   
   output_name.innerHTML = 'The Weather in ' + data.name
   output_temp.innerHTML = 'is currently ' + data.main.temp + ' degrees F'
   output_hum.innerHTML = ('the humidity is currently ' + data.main.humidity + ' %'); 
   output_main.innerHTML = ('right now it is ' + data.weather[0].main + ' in the area.')

     
   //activates creative weather front end animations 
    
   VisualWeather_test() 

      

}


 function VisualWeather_test () {
    

    if (output_temp.innerHTML > 300) {
    document.getElementById('weather-icon').className = "fas fa-sun fa-10x"
    document.body.style.backgroundColor = "skyblue";
    
    }else {
        document.getElementById('weather-icon').className = "fas fa-cloud fa-10x"
        document.body.style.backgroundColor = "grey";

    }

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


