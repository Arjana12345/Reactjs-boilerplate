<?php
 header("Access-Control-Allow-Origin: *");
$test = array(array(
                                "name"=> "Arjana",
                                "lastName" => "Haldkar"
                            ),
                            array(
                                "name"=> "Vikash",
                                "lastName" => "Haldkar"
                            )
    
            );

echo json_encode($test);

?>