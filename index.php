<html>
    <head>
        <meta name="robots" content="none" />
        <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86">
        <meta charset="utf8">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat,wght@1,400;1,700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="style.css" type="text/css">
    </head>
    <body>
        <div id="menu" class="invisible">
            <button id="getData">Получить данные</button>
            <a id="gallery" href="/json">Галерея</a>
            <a id="load" href="/json">Загрузка изображений</a>
            <a id="info" href="/json">Информация</a>
            <a id="exit" href="/json">Выход из приложения</a>
            <div class="delimiter">
            </div>
        </div>
        <div id="content">
            <div id="gallery">
                <div id="general-image">
                    <div class="close"></div>
                    <div class="big-image">
                        <img src="images/0.jpg" class="load-big-image">
                    </div>
                </div>
                <div class="list-images">
                </div>
            </div>
        </div>
        <script src="js/connect.js"></script>
        <script src="js/app.js"></script>
        <script src="js/gallery.js"></script>
        <script src="js/router.js"></script>
    </body>
</html>