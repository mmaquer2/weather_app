//--------------things to add ------------------//
//location finder using gps coordinates
//error handli

//1. fetch user zip code from markup

//2. fetch api data from weather map


const url = ('https://api.openweathermap.org/data/2.5/weather?q=Nashville&APPID=a488d31fefafdc561500bdfd1b695f5d')
async function test() {

  const response = await fetch(url);
  const data = await response.json();

    data.forEach((element) => {
      console.log(element.name)
      console.log(element.street)
      console.log(element.city)
      console.log(element.state)
      console.log(element.postal_code)



  })
  .catch(error => console.error(error))


}

//3. change background color based on weather or current forecast
    //if weather is sunny page = yellow sun animation 
    //if weather is cold/snowwy = snowflakes animation
    //


//4.display 5 day weather and content on webpage






//get search info

//const rad = document.getElementById('radius').value
//const state = document.getElementById('city_state').value
//const city = document.getElementById('city_state').value
//const postal = document.getElementById('zip').value

    

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


