<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$timeUnix =time();

$date = date('Y-m-d H:i:s', time());

$data =  json_encode([ "unix" => $timeUnix, "date" => $date ]);
echo $data;