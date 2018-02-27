<?php
    $user = [];
    $user['id'] = uniqid(); // génère id
    $user['nom'] = $_GET["nom"];
    $user['prenom'] = $_GET["prenom"];
    $user['age'] = $_GET["age"];
    echo json_encode($user); //créé fichier json
?>