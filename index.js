const xhrLib = require('xmlhttprequest');
const postData = JSON.stringify({
    "contentorsomemessagefield":"somestring",
});
const xhr = new xhrLib.XMLHttpRequest();
console.log("set xhr const to xmlhttprequest")
function annoyerService()
{
    try{
    //xhr.withCredentials = true;
    // uncomment ^ if the service you are posting to requires authorization to access
    xhr.addEventListener('readystatechange', function() {
    if (this.readyState === this.DONE) {console.log(this.responseText); console.log("set xhr eventlistener status to done")}})
    xhr.open('POST', 'some url here')
    console.log("opened post request to url");
    xhr.setRequestHeader('content-type', 'application/json')
    //change ^ if it does not match the needed content type, could be application/text, application/x-www-form-urlencoded, etc
    xhr.setRequestHeader('user-agent', 'Annoyer1.0')
    //add as mnay request headers as needed, authorization goes here too
    xhr.send(postData);
    console.log("posted data to url");
    } catch(err){
        console.log("A fatal error has occurred!: " + err);
    }
}
annoyerService();
setInterval(annoyerService, 60 /*<-the amount of seconds to wait*/ /*multiplying->*/ * /*amount of ms (there is 1000ms in a second) ->*/ 1000);