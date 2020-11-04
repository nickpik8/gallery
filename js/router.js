let linkGallery = document.getElementById("gallery");
let linkLoad = document.getElementById("load");
let linkInfo = document.getElementById("info");
let linkExit = document.getElementById("exit");

linkGallery.addEventListener("click", (event) => {
    event.preventDefault();

});
linkLoad.addEventListener("click", (event) => {
    event.preventDefault();
    /*const dataServerLoad = Object.create(
        {},
        {
            name: {
                value: 'load'
            },
            address: {
                value: 'http://gallery-master.ru/load.php'
            }
        });*/
    let response = fetch('http://gallery-master.ru/load.php');
    response
    .then(data => data.text())
    .then(dataHtml => {
        document.getElementById("content").innerHTML = dataHtml;
    })
    .catch(error => console.log(error)) 
});
linkInfo.addEventListener("click", (event) => {
    event.preventDefault();
});
linkExit.addEventListener("click", (event) => {
    event.preventDefault();
});