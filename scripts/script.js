var t1;
fetch('https://api.openweathermap.org/data/2.5/weather?q=Briston&appid=' + config.wkey)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        console.log(response.weather[0].description)
        t1 = response.weather[0].main
        console.log(t1)
        document.getElementById("test").innerHTML = "The weather at The Treehouse Cafe is " + t1
        return t1
    })
let t2 = t1;
function newtext(t2) {

    document.getElementById("test").innerHTML = "Gone";


}
fetch("https://sheets.googleapis.com/v4/spreadsheets/1yyFnVu1kupXokENcQXFUh3ohdUYmP_c-0Jqu26vg3X8/values/news!A1:C100?key=" + config.gkey)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    console.log(response.values.at(-1)[0]) //first square brackets represent the index of what value to target, the second one targets what item in the array to use also .at lets me target the last value in the array
    t2 = response.values.at(-1)
    document.getElementById("test2").innerHTML = t2
    document.getElementById("7api").innerHTML = response.values.at(-7)[0]// the 7 in this case means 7 days from now
    document.getElementById("7api2").innerHTML = response.values.at(-7)[2]

    document.getElementById("6api").innerHTML = response.values.at(-6)[0]
    document.getElementById("6api2").innerHTML = response.values.at(-6)[2]

    document.getElementById("5api").innerHTML = response.values.at(-5)[0]
    document.getElementById("5api2").innerHTML = response.values.at(-5)[2]

    document.getElementById("4api").innerHTML = response.values.at(-4)[0]
    document.getElementById("4api2").innerHTML = response.values.at(-4)[2]

    document.getElementById("3api").innerHTML = response.values.at(-3)[0]
    document.getElementById("3api2").innerHTML = response.values.at(-3)[2]

    document.getElementById("2api").innerHTML = response.values.at(-2)[0]
    document.getElementById("2api2").innerHTML = response.values.at(-2)[2]

    document.getElementById("1api").innerHTML = response.values.at(-1)[0]
    document.getElementById("1api2").innerHTML = response.values.at(-1)[2]
  })


fetch("https://sheets.googleapis.com/v4/spreadsheets/1yyFnVu1kupXokENcQXFUh3ohdUYmP_c-0Jqu26vg3X8/values/news!A1:C100?key=" + config.gkey)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    console.log(response.values.at(-1)[0])
    //could go with the same var name but i want to use that data later =
    let clear = [];//clear sky
    let overcast = [];//overcast clouds
    let scattered = [];//scattered clouds
    let broken = [];//broken clouds
    let light = []; //light rain
    let moderate = [];//moderate rain
    let few = [];//few clouds
    for (let i = 0; i < 32; i++) {
        if (response.values[i][2] === "clear sky"){
        clear.push(response.values[i][2])
        console.log("dog")
      }
    }
    console.log(clear)
})
