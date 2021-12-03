var t1;
fetch('https://api.openweathermap.org/data/2.5/weather?q=Briston&appid=a93533fbcacec5513e231ee77af73e97')
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
fetch('https://sheets.googleapis.com/v4/spreadsheets/1yyFnVu1kupXokENcQXFUh3ohdUYmP_c-0Jqu26vg3X8/values/A1:C100?key=AIzaSyBSX0JSlhgZc8CQSu-niOqscU05GQR7o1M')
  .then(response => response.json())
  .then(response => {
    console.log(response)
    console.log(response.values.at(-1)[0]) //first square brackets represent the index of what value to target, the second one targets what item in the array to use also .at lets me target the last value in the array
    t2 = response.values.at(-1)
    document.getElementById("test2").innerHTML = t2







    var avg_sales_array;
    var count_y = 13;
    var sales_array;
    var salesnumber;
    var daycount;
    while (count_y <= response.values.count){

    if (response.value[count_y][2] = response.value[count_y-1][2]){
      sales_array.push(response.value[count_y-1][3]);
    daycount = daycount+1;
    }
    else {forEach((sales_array) => { salesnumber=salesnumber+ item;
    numberofday.push(daycount);

    });
    avg_sales_array.push(salesnumber/sales_array.items.count()); //pushes average sales per consecutive weatherdays


    }

    count_y=count_y+1;}
    var x;
    var inv_x = 30-x;
    var dayremaining;
    while (30>dayremaining){
    console.log(avg_sales_array[inv_x]);
    console.log(dayremaining)

      dayremaining=dayremaining + numberofday[numberofday.items.count - x]
    }


  })




/*
var thirty = 1
var counter = 0
for thirty in range(1,30){
  if response.values.at(thirty)[0] == "overcast clouds"{
    overcast_counter = overcast_counter + 1
  }
  if response.values.at(thirty)[0] == "broken clouds"{
    broken_counter = broken_counter + 1
  }
  if response.values.at(thirty)[0] == "overcast clouds"
}

*/
