fetch("http://api.weatherapi.com/v1/current.json?key=cbaa7104fe624460894213217233108&q=indianapolis&aqi=no") // Starts a promise by sending our url to NYT for data
    .then(function (result) { //Creates a new task that takes the results from our api call
      return result.json(); // and creates a JSON file with those results
    }).then(function (json) { //Creates a new task
    console.log(json)
         displayResults(json); //Runs the displayResults function
    });


//2
function displayResults(json) { // Creates a new function called displayResults
 // let articles = json.response.docs; // Creates a new variable within the function called articles, defines articles as part of our response from the api call
 console.log(json.current.temp_f)
 console.log(json) // console logs the variable articles which is now an array of the objects returned in the json file
let results= document.querySelector(".results")
let wind=document.createElement("h3")
let humidity=document.createElement("h3")
let feelslike=document.createElement("h3")
let temp=document.createElement("h3")
let windText=document.createElement("h2")
let humiditytext=document.createElement("h2") 
let feelsliketext=document.createElement("h2")
let temptext=document.createElement("h2")
results.appendChild(windText)
results.appendChild(wind)
results.appendChild(temptext)
results.appendChild(temp)
results.appendChild(feelsliketext)
results.appendChild(feelslike)
results.appendChild(humiditytext)
results.appendChild(humidity)
wind.textContent=json.current.wind_degree
humidity.textContent=json.current.humidity
temp.textContent=json.current.temp_f
feelslike.textContent=json.current.feelslike_f
windText.textContent="WIND"
humiditytext.textContent="HUMIDITY"
feelsliketext.textContent="FEELSLIKE"
temptext.textContent="temp"

  }
 