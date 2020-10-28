//import * as config from 'configServer.js';
const dataServer = Object.create(
    {},
    {
        name: {
            value: 'gallery'
        },
        address: {
            //здесь должен быть указан  верный домен
            value: 'http://serverImages.ru/getListFiles.php'
        }
    })
let serverResponse = null;

window.onload = () =>{
    document.getElementById("getData").addEventListener("click", getDataFromServer());
}

function getDataFromServer(){
    return new Promise((resolve, reject) => {
        let server = new XMLHttpRequest();
        server.open('GET', dataServer.address);
        server.responseType ='json';
        server.send();
        server.onload = function(){
            console.log(server.status);
            serverResponse = server.response;
            if (serverResponse != null)
                resolve(serverResponse);
            else
                reject(serverResponse);
        }
    })
    .then(value => {
       return value;
    })
    .catch(error => {
        console.error("Что-то пошло не так, объект serverResponse: ", error);
    }
    );
}
//getDataFromServer();
