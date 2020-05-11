<html>
    <head>
        <meta name="robots" content="none" />
        <meta charset="utf8">
        <script src="js/connect.js"></script>
        <script src="js/app.js"></script>
        <script src="js/gallery.js"></script>
        <link rel="stylesheet" href="style.css" type="text/css">
    </head>
    <body>
        <div id="menu" class="invisible">
            <button onclick="getDataFromServer();">Получить данные</button>
            <a href="/json">Галерея</a>
            <a href="/json">Загрузка изображений</a>
            <a href="/json">Информация</a>
            <a href="/json">Выход из приложения</a>
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
    </body>
</html>