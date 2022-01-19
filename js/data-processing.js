//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console    
console.log(queryString);

//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

let myData = '';
urlParams.forEach(function(value, key) {
    key = key.split("_")
    myData += `<p>${key}: ${value}</p>`;
});

myData += `<p><a href="index.html` > CLEAR < /a></p > ;

document.getElementById("output").innerHTML = myData;