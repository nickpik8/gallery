<?php
    $json = '{ ';
    $dir = 'images/';
    $arrayImages = scandir($dir);
    unset($arrayImages[0]);
    unset($arrayImages[1]);
    $count = count($arrayImages);
    sort($arrayImages);
   /* array_unshift($arrayImages, (string)$count);*/
    $json = json_encode($arrayImages, JSON_UNESCAPED_UNICODE);
    header('Content-Type: application/json');
    echo $json;
?>