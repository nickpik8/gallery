let currentImage = 0;
let countImages = 0;
let dirImages = "images/";
let extansion = ".jpg";
let listImages = [];
let $elListImages = null;
let $backgroundBigImage = null;
let $bigImage = null;
let $closeBigImage = null;
let $delimiter = null;
let isMouseDown = false;
let minWidthElement = 100;
//let serverResponse = null;
//let sResponses = null;

let dataPromise = getDataFromServer(dataServerGallery);   
dataPromise.then(data =>{
    countImages = data.length;
    for (let i = 0; i < countImages - 1; i++){
        listImages[i] = {
            id: i,
            description: "Картинка номер " + i,
            width: '200px',
            height: '200px',
            url: dirImages + data[i]
        }
    }
    getListImages();
    console.log("Получили список первых "+ data.length + " картинок");
});

window.onload = function(){
    $menu = document.querySelector('#menu');
    $delimiter = document.querySelector('.delimiter');
    $backgroundBigImage = document.querySelector("#general-image");
    $closeBigImage = document.querySelector('#general-image .close');
    $closeBigImage.onclick = onClickClosePreview;
    $bigImage = document.querySelector(".load-big-image");
    $bigImage.onclick = onClickBigImage;
    console.log("Страница загружена, инициализация закончена...");

    saveWidthResizeElements();

    $delimiter.onmousedown = () => {
        isMouseDown = true;
    };

    $delimiter.ondblclick = (ev) => {
        resizeElement = ev.currentTarget.parentElement
        resizeElement.style.width = resizeElement.beginWidth;
    }

    window.onmouseup = () => {
        isMouseDown = false;
        document.body.style.cursor = 'default';
    }
    window.onselectstart = (ev) =>{
        if (isMouseDown)
            return false; 
    }
    document.body.onmousemove = OnMouseMoveResize;

    function OnMouseMoveResize(ev){
        if (isMouseDown){
            this.style.cursor = 'col-resize';
            if (ev.pageX < 100)
                $menu.style.width = "100px";
            else
                $menu.style.width = ev.pageX;
        }
    }
}

//Увеличиваем изображение по клику на миниатюре
function onCLickListImagesIncrease(){
    $backgroundBigImage.style.display = 'block';
    $backgroundBigImage.style.top = window.pageYOffset+'px';
    document.querySelector('.big-image').style.top = '5rem';//((document.documentElement.clientHeight - (40*parseFloat(getComputedStyle(document.documentElement).fontSize))) / 2) + 'px';
    $bigImage.src = this.src;
    currentImage = this.id;
    document.body.style.overflow = 'hidden';
    console.log("Сработало событие увеличения картинки id images - " + currentImage);
}

//Закрываем увеличенное изображение
function onClickClosePreview(){
   // if (onClickBigImage) return;
    $backgroundBigImage.style.display = "none";
    document.body.style.overflow = 'auto';
    console.log("Закрыли просмотр");
}

//Клик по увеличенному изображению меняет его на следующее или предыдущее
function onClickBigImage(e){
    console.log('menu width: ',window.getComputedStyle($menu).width);
    console.log('window width: ',document.documentElement.clientWidth);
    let widthContent = document.documentElement.clientWidth - parseInt(window.getComputedStyle($menu).width);
    console.log(widthContent/2 + "      -      "+  e.pageX/2);
    if (widthContent/2 < e.pageX - parseInt(window.getComputedStyle($menu).width)){
        if (++currentImage == countImages) 
            currentImage = 0;
    }
    else{
        if (--currentImage < 0)
            currentImage = countImages - 1;
    }
    $bigImage.src = dirImages + currentImage + extansion;
    console.log("Next image at the list");
}

function getListImages(){
    $elListImages = document.querySelector(".list-images");
    console.log($elListImages);
    for (let i = 0; i < countImages - 1; i++){
        let nodeDivImage = document.createElement("div");

        nodeDivImage.className = "mini-image";

        let nodeImage = new Image();
        console.log('i  -  ' + i + '   -  count - '  +  countImages);
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
function saveWidthResizeElements(){
    delimiterElements = document.querySelectorAll('.delimiter');
    console.log(delimiterElements);
    console.log(delimiterElements[0].parentElement);
    for (let i = 0; i < delimiterElements.length; i++){
        parentDelimiter = delimiterElements[i].parentElement;
        parentDelimiter['beginWidth'] = window.getComputedStyle(parentDelimiter).width;
        console.log(parentDelimiter['beginWidth']);
    }
}