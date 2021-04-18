<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
$test = array(array(
                                "name"=> "Arjana",
                                "lastName" => "Haldkar"
                            ),
                            array(
                                "name"=> "Vikash",
                                "lastName" => "Haldkar"
                            )
    
            );

//echo json_encode($test);
//echo $_POST['id'];
//echo '{ "data": { "user": { "id":"1","name": "arju" } } }';


$method = $_SERVER['REQUEST_METHOD'];
if($method == 'POST')
{
    $myObj->data = ($_POST);

    print_r(json_encode($myObj));
}else{
    echo '{ "data": { "user": { "id":"1","name": "arju" } } }';
}



?>