//--------------things to add ------------------//
//location finder using gps coordinates
//error handli

//1. fetch user zip code from markup

//2. fetch api data from weather map



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



//basic fetch request

//const url = ( 'https://api.openbrewerydb.org/breweries/search?query=Denver&per_page=2')
//async function getData() {
   // const response = await fetch(url);
   //const data = await response.json();

   // data.forEach((element) => {
     //   console.log(element.name)
        //console.log(element.id)
      //  console.log(element.street)
      ///  console.log(element.city)
       // console.log(element.state)
       // console.log(element.postal_code)
        

        
        //var names =(element.name);
        //var zip = (element.postal_code)
        
       // document.getElementById('disp_name').textContent = names;
       // document.getElementById('disp_zip').textContent = zip;
       
   // });

  //  return data.map(function(results) {


   // }
    

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

//document.getElementById('results').style.display='block';

}


