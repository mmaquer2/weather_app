/*
function data_test() {
//const state = document.getElementById('state').value
//const postal = document.getElementById('zip').value
const start = ('https://api.openweathermap.org/data/2.5/weather?q=')
const city = document.getElementById('city').value
const id =('&APPID=a488d31fefafdc561500bdfd1b695f5d')
const url =(start + city + id)
alert(url)
}
*/

//const url = ('https://api.openweathermap.org/data/2.5/weather?q=Nashville&APPID=a488d31fefafdc561500bdfd1b695f5d')


async function test_get() {

    const start = ('https://api.openweathermap.org/data/2.5/weather?q=')
    const city = document.getElementById('city').value
    const id =('&APPID=a488d31fefafdc561500bdfd1b695f5d')
    const url =(start + city + id)
  
    const response = await fetch(url);
    const data = await response.json();
    var string = "";
    var k_temp = data.main.temp;
    var desc = data.weather[0].description;
    
    //convert kelvin to degrees F
    f_temp = ((k_temp - 273.15) * 1.8 + 32).toFixed(1);
    
    string ='<div class="card"> <div><span class=""> City: '+data.name+'</span></div><div class=""></div><div class="col-xs-5"> Currently is: '+f_temp+' F </div><div>'+data.main.humidity+' % Humidity </div> <div> '+data.weather[0].description+'</div> </div><br></br>';
    console.log(data.weather[0].main)
    //console.log(data.main.temp)
    //  console.log(data.main.humidity)
    //  console.log(data.weather[0].main)
     console.log(data.weather[0].description)
     console.log(data.weather[0].icon)
    // console.log(data.name)

 document.getElementById('output').innerHTML =string    

//activates creative weather front end animations 
 VisualWeather_test(k_temp,desc) 

      

}


 function VisualWeather_test (temp,des) {
    
    if (temp < 300) {
    document.getElementById('weather-icon').className = "fas fa-sun fa-10x"
    document.body.style.backgroundColor = "skyblue";
    
    }
    else if ( temp > 300) {
        document.body.style.backgroundColor = "lightgrey";
        document.getElementById('weather-icon').className = "fas fa-cloud-showers-heavy fa-10x"

    } else if (desc === "Clouds") {
        document.body.style.backgroundColor = "lightgrey";
        document.getElementById('weather-icon').className = "fas fa-cloud"
    
    }
    
    else {
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



