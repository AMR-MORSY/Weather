



let searchInput = document.getElementById("searchLocation");
let currentDiv = document.getElementById("current");
let firstForecast=document.getElementById("forecast1");
let secondForecast=document.getElementById("forecast2");

let searchValue = searchInput.value;
let current = [];
let currentLocation = [];
let forcast = [];

async function getWeather(city) {
    let httpRequest = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=df8286397f2b4467b19224648210605&q=${city}&days=3`);


    let httpResponse = await httpRequest.json();

    console.log(httpResponse);

    current = httpResponse.current;
    currentLocation = httpResponse.location;
    forcast=httpResponse.forecast.forecastday;
   
    displayCurrentCond();
}

getWeather("london");


searchInput.addEventListener("keyup", function () { getWeather(searchInput.value) });


async function displayCurrentCond() {
   

    let a = new Date (forcast[0].date)
    let d = new Date(forcast[1]. date);
    let c= new Date(forcast[2].date)
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = d.getMonth(current.last_updated);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = a.getDay();
    let dayplus = a.getDate();
    let dayForc1=d.getDay();
    let dayForc2= c.getDay();

    currentDiv.innerHTML = `
       <div class=" head d-flex justify-content-between">

             <h6 class= "pl-3 pt-2 text-white">${days[day]}</h6>

             <h6 class= " pr-3 pt-2 text-white">${dayplus}-${months[month]}</h6>
          </div>
           <h6 class="text-white pl-3 my-4">${currentLocation.name}</h6>
           <h1 class="text-white largeFont  pl-3 my-4">${current.temp_c}&#176C<img class="w-25 float-right" src=http:${current.condition.icon} alt=""></h1>
            


              <h6 class="text-primary  pl-5 my-4">${current.condition.text}</h6>

              <div class="d-flex justify-content-around">
              <h6 class="text-white pl-3 my-4"><img src="images/icon-umberella.png"> 20%</h6>
              <h6 class="text-white pl-3 my-4"><img src="images/icon-wind.png"> 18Km</h6>
              <h6 class="text-white pl-3 my-4"><img src="images/icon-compass.png"> East</h6>
              </div>
              
              `;
              firstForecast.innerHTML=`
              <div class=" head d-flex justify-content-center">

              <h6 class= "pl-3 pt-2 text-white">${days[dayForc1]}</h6>
 
             
           </div>
           <div class="d-flex  justify-content-center">
           <img class=" w-25 d-inline-block " src=http:${forcast[1].day.condition.icon} alt="">
           </div>
           
            <h4 class="text-white font-weight-bolder text-center pl-3 my-4">${forcast[1].day.maxtemp_c}&#176C</h4>
            <h4 class="text-muted text-center pl-3 my-4">${forcast[1].day.mintemp_c}&#176C</h4>
             
 
 
               <h6 class="text-primary  pl-5 my-4">${forcast[1].day.condition.text}</h6>
 
               <div class="d-flex justify-content-around">
               <h6 class="text-white pl-3 my-4"><img src="images/icon-umberella.png"> 20%</h6>
               <h6 class="text-white pl-3 my-4"><img src="images/icon-wind.png"> 18Km</h6>
               <h6 class="text-white pl-3 my-4"><img src="images/icon-compass.png"> East</h6>
               </div>
               
               `;
               secondForecast.innerHTML=`
               <div class=" head d-flex justify-content-center">
 
               <h6 class= "pl-3 pt-2 text-white">${days[dayForc2]}</h6>
  
         
            </div>
            <div class="d-flex  justify-content-center">
            <img class=" w-25 d-inline-block " src=http:${forcast[2].day.condition.icon} alt="">
            </div>
             <h4 class="text-white font-weight-bolder text-center pl-3 my-4">${forcast[1].day.maxtemp_c}&#176C</h4>
            <h4 class="text-muted text-center pl-3 my-4">${forcast[2].day.mintemp_c}&#176C</h4>
  
  
                <h6 class="text-primary  pl-5 my-4">${forcast[2].day.condition.text}</h6>
  
                <div class="d-flex justify-content-around">
                <h6 class="text-white pl-3 my-4"><img src="images/icon-umberella.png"> 20%</h6>
                <h6 class="text-white pl-3 my-4"><img src="images/icon-wind.png"> 18Km</h6>
                <h6 class="text-white pl-3 my-4"><img src="images/icon-compass.png"> East</h6>
                </div>
                
                `;






}





