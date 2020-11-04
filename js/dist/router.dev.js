"use strict";

var linkGallery = document.getElementById("gallery");
var linkLoad = document.getElementById("load");
var linkInfo = document.getElementById("info");
var linkExit = document.getElementById("exit");
linkGallery.addEventListener("click", function (event) {
  event.preventDefault();
});
linkLoad.addEventListener("click", function (event) {
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

  var response = fetch('http://gallery-master.ru/load.php');
  response.then(function (data) {
    return data.text();
  }).then(function (dataHtml) {
    document.getElementById("content").innerHTML = dataHtml;
  })["catch"](function (error) {
    return console.log(error);
  });
});
linkInfo.addEventListener("click", function (event) {
  event.preventDefault();
});
linkExit.addEventListener("click", function (event) {
  event.preventDefault();
});