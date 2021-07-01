var t1;
fetch('https://api.openweathermap.org/data/2.5/weather?q=Briston&appid=a93533fbcacec5513e231ee77af73e97')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        console.log(response.weather[0].description)
        t1 = response.weather[0].description
        console.log(t1)
        document.getElementById("test").innerHTML = "the weather in Briston is " + t1
        return t1
    })
let t2 = t1;
function newtext(t2) {

    document.getElementById("test").innerHTML = "gone again"


}
