//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console    
console.log(queryString);

//separate querystring parameters
const urlParams = new URLSearchParams(queryString);