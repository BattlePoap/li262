<?php
    $user = [];
    if (isset($_GET["id"])){
        $user['id'] = $_GET["id"];
    } else {
        $user['id'] = uniqid(); // génère id
    }
    $user['prenom'] = $_GET["prenom"];
    $user['nom'] = $_GET["nom"];
    $user['age'] = $_GET["age"];
    echo json_encode($user); //créé fichier json
?>