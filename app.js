//--------------things to add ------------------//


// -Error Handling for improper searches 
// - convert kelvin to F or C degrees
// - code more weather descriptions in the background style and icons 
//


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
const start = ('https://api.openweathermap.org/data/2.5/weather?q=')



async function test_get() {

    const start = ('https://api.openweathermap.org/data/2.5/weather?q=')
    const city = document.getElementById('city').value
    const id =('&APPID=a488d31fefafdc561500bdfd1b695f5d')
    const url =(start + city + id)
  
    const response = await fetch(url);
    const data = await response.json();
    var string = "";
    for (i in data) {
        
            string +='<div class="card"> <div class="col-xs-5"><span class="name">'+data.main.temp+'</span></div><div class="col-xs-2"></div><div class="col-xs-5">'+data.main.humidity+'</div><div class = "col-xs-5">'+data.name+'</div> <div class ="">'+data.main.description+'</div>   </div><br></br>';
             
        //console.log(data.main.temp)
      //  console.log(data.main.humidity)
       //  console.log(data.weather[0].main)
       // console.log(data.weather[0].description)
       // console.log(data.name)

        
          
          };
            
          document.getElementById('output').innerHTML =string    

        
        //convert kelvin to degrees F
        // F = 9/5K -273.15 + 32


     
   //activates creative weather front end animations 
    
  // VisualWeather_test() 

      

}


 function VisualWeather_test () {
    

    if (output_temp.innerHTML > 300) {
    document.getElementById('weather-icon').className = "fas fa-sun fa-10x"
    document.body.style.backgroundColor = "skyblue";
    
    }
    else if (data.weather [0].main = "rain") {
        document.body.style.backgroundColor = "lightgrey";
        document.getElementById('weather-icon').className = "fas fa-cloud-showers-heavy"

    } else if (data.weather [0].main = "Clouds") {
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


function disp() {

var show = document.getElementById('results')
if(show.style.display = 'none') {
    show.style.display = 'block'
}
else if ( show.style.display = 'block' ) {

    show.style.display ='none'
}

}


