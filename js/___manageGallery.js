let currentImage = 0;
let countImages = 10;
let dirImages = "images/";
let extansion = ".jpg";
let listImages = [countImages];
let $elListImages = null;
let $elBackgroundBigImage = null;
let $elBigImage = null;
let $elCloseBigImage = null;

for (let i = 0; i < 10; i++){
    listImages[i] = {
        id: i,
        description: "Картинка номер " + i,
        width: '200px',
        height: '200px',
        url: dirImages + i + ".jpg"
    }
}

window.onload = function(){
    getListImages();
    console.log("Получили список первых 10 картинок");
    $elBackgroundBigImage = document.querySelector("#general-image");
    $elCloseBigImage = document.querySelector('#general-image .close');
    $elCloseBigImage.onclick = onClickClosePreview;
   // $elBackgroundBigImage.onclick = onClickClosePreview;
    $elBigImage = document.querySelector(".load-big-image");
    $elBigImage.onclick = onClickBigImage;
    console.log("Страница загружена, инициализация закончена...");
}

//Увеличиваем изображение по клику на миниатюре
function onCLickListImagesIncrease(){
    $elBackgroundBigImage.style.display = 'block';
    $elBackgroundBigImage.style.top = window.pageYOffset+'px';
    document.querySelector('.big-image').style.top = '5rem';//((document.documentElement.clientHeight - (40*parseFloat(getComputedStyle(document.documentElement).fontSize))) / 2) + 'px';
    $elBigImage.src = this.src;
    currentImage = this.id;
    document.body.style.overflow = 'hidden';
    console.log("Сработало событие увеличения картинки id images - " + currentImage);
}

//Закрываем увеличенное изображение
function onClickClosePreview(){
   // if (onClickBigImage) return;
    $elBackgroundBigImage.style.display = "none";
    document.body.style.overflow = 'auto';
    console.log("Закрыли просмотр");
}

//Клик по увеличенному изображению меняет его на следующее или предыдущее
function onClickBigImage(e){
    console.log(document.documentElement.clientWidth/2 + "      -      "+  e.pageX);
    if (document.documentElement.clientWidth / 2 < e.pageX ){
        if (++currentImage == countImages) 
            currentImage = 0;
    }
    else{
        if (--currentImage < 0)
            currentImage = countImages - 1;
    }
    $elBigImage.src = dirImages + currentImage + extansion;
    console.log("Next image at the list");
}

function getListImages(){
    $elListImages = document.querySelector(".list-images");
    console.log($elListImages);
    for (let i = 0; i < 10; i++){
        let nodeDivImage = document.createElement("div");

        nodeDivImage.className = "mini-image";

        let nodeImage = new Image();

        nodeImage.src = listImages[i].url;
        nodeImage.id = listImages[i].id;
        nodeImage.onclick = onCLickListImagesIncrease;

        let nodeDesc = document.createElement("div");

        nodeDesc.className = "mini-desc";
        nodeDesc.textContent = listImages[i].description;

        nodeDivImage.appendChild(nodeImage);
        nodeDivImage.appendChild(nodeDesc);
        $elListImages.appendChild(nodeDivImage);
    }
}