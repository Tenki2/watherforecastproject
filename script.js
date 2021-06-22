fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(function (data){
        let t1 = response.title
    })

function newtext(t1) {

    document.getElementById("test").innerHTML = t1


}
