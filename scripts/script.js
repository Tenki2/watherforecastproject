var t1;
fetch("https://api.openweathermap.org/data/2.5/weather?q=Briston&appid=" + config.wkey)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    console.log(response.weather[0].description);
    t1 = response.weather[0].description;
    console.log(t1);
    document.getElementById("test").innerHTML =
      "The weather at The Treehouse Cafe is " + t1;
    return t1;
  });
var t2 = t1;
function newtext() {
  document.getElementById("test").innerHTML = "Gone";
}
fetch("https://sheets.googleapis.com/v4/spreadsheets/1yyFnVu1kupXokENcQXFUh3ohdUYmP_c-0Jqu26vg3X8/values/news!A1:D100?key=" + config.gkey)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    console.log(response.values.at(-1)[0]); //first square brackets represent the index of what value to target, the second one targets what item in the array to use also .at lets me target the last value in the array
    var t2 = response.values.at(-1);
    console.log(t2);
    //document.getElementById("test2").innerHTML = t2;
    document.getElementById("7api").innerHTML = response.values.at(-7)[0]; // the 7 in this case means 7 days from now
    document.getElementById("7api2").innerHTML = response.values.at(-7)[2];

    document.getElementById("6api").innerHTML = response.values.at(-6)[0];
    document.getElementById("6api2").innerHTML = response.values.at(-6)[2];

    document.getElementById("5api").innerHTML = response.values.at(-5)[0];
    document.getElementById("5api2").innerHTML = response.values.at(-5)[2];

    document.getElementById("4api").innerHTML = response.values.at(-4)[0];
    document.getElementById("4api2").innerHTML = response.values.at(-4)[2];

    document.getElementById("3api").innerHTML = response.values.at(-3)[0];
    document.getElementById("3api2").innerHTML = response.values.at(-3)[2];

    document.getElementById("2api").innerHTML = response.values.at(-2)[0];
    document.getElementById("2api2").innerHTML = response.values.at(-2)[2];

    document.getElementById("1api").innerHTML = response.values.at(-1)[0];
    document.getElementById("1api2").innerHTML = response.values.at(-1)[2];
  });

fetch(
  "https://sheets.googleapis.com/v4/spreadsheets/1yyFnVu1kupXokENcQXFUh3ohdUYmP_c-0Jqu26vg3X8/values/news!A1:D100?key=" + config.gkey)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    console.log(response.values.at(-1)[0]);

    //tried to implement using 2d arrays but it seems too hard if i dont know the size
    let c_s = []; //clear_sales
    let o_s = []; //overcast_sales
    let s_s = []; //scattered_sales
    let b_s = []; //broken_sales
    let l_s = []; //light_sales
    let m_s = []; //moderate_sales
    let f_s = []; //few_sales

    let clear = []; //clear sky
    let overcast = []; //overcast clouds
    let scattered = []; //scattered clouds
    let broken = []; //broken clouds
    let light = []; //light rain
    let moderate = []; //moderate rain
    let few = []; //few clouds
    for (let i = 0; i < 29; i++) {
      if (response.values[i][2] === "clear sky") {
        clear.push(response.values[i][2]);
        c_s.push(response.values[i][3]);
      }
      if (response.values[i][2] === "overcast clouds") {
        overcast.push(response.values[i][2]);
        o_s.push(response.values[i][3]);
      }
      if (response.values[i][2] === "scattered clouds") {
        scattered.push(response.values[i][2]);
        s_s.push(response.values[i][3]);
      }
      if (response.values[i][2] === "broken clouds") {
        broken.push(response.values[i][2]);
        b_s.push(response.values[i][3]);
      }
      if (response.values[i][2] === "light rain") {
        light.push(response.values[i][2]);
        l_s.push(response.values[i][3]);
      }
      if (response.values[i][2] === "moderate rain") {
        moderate.push(response.values[i][2]);
        m_s.push(response.values[i][3]);
      }
      if (response.values[i][2] === "few clouds") {
        few.push(response.values[i][2]);
        f_s.push(response.values[i][3]);
      }
    }
    console.log(clear.length);
    console.log(overcast.length);
    console.log(scattered.length);
    console.log(broken.length);
    console.log(light.length);
    console.log(moderate.length);
    console.log(few.length);
    console.log(c_s);

    function adding(array) {
      // this funciton adds all of the items in the array togther
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum;
    }
    console.log(adding(c_s.map(Number))); // .map(number) converts the contents of the array into integers
    var clear_mean = adding(c_s.map(Number)) / c_s.length;
    var over_mean = adding(o_s.map(Number)) / o_s.length;
    var scattered_mean = adding(s_s.map(Number)) / s_s.length;
    var broken_mean = adding(b_s.map(Number)) / b_s.length;
    var light_mean = adding(l_s.map(Number)) / l_s.length;
    var moderate_mean = adding(m_s.map(Number)) / m_s.length;
    var few_mean = adding(f_s.map(Number)) / f_s.length;
    console.log(over_mean);
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Briston&appid=" + config.wkey)
      .then((response2) => response2.json())
      .then((response2) => {
        console.log(response2.weather[0].description);
        if (response2.weather[0].description === "clear sky") {
          document.getElementById("avg").innerHTML =
            "On average The Treehouse will have " + clear_mean + " sales";
        }
        if (response2.weather[0].description === "overcast clouds") {
          document.getElementById("avg").innerHTML =
            "On average The Treehouse will have " + over_mean + " sales";
        }
        if (response2.weather[0].description === "scattered clouds") {
          document.getElementById("avg").innerHTML =
            "On average The Treehouse will have " + scattered_mean + " sales";
        }
        if (response2.weather[0].description === "broken clouds") {
          document.getElementById("avg").innerHTML =
            "On average The Treehouse will have " + broken_mean + " sales";
        }
        if (response2.weather[0].description === "light rain") {
          document.getElementById("avg").innerHTML =
            "On average The Treehouse will have " + light_mean + " sales";
        }
        if (response2.weather[0].description === "moderate rain") {
          document.getElementById("avg").innerHTML =
            "On average The Treehouse will have " + moderate_mean + " sales";
        }
        if (response2.weather[0].description === "few clouds") {
          document.getElementById("avg").innerHTML =
            "On average The Treehouse will have " + few_mean + " sales";
        }
        //console.log(response.weather[0].description)
      });

    console.log(clear_mean);
  });
