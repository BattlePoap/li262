<?php
    $users = [];
    for ($i = 0; $i < 10; $i++){
        $user = [];
        $user['id'] = uniqid();
        $user['prenom'] = 'prenom'.$i;
        $user['nom'] = 'nom'.$i;
        $user['age'] = 20+$i;
        array_push($users,$user);
    }
    echo json_encode($users); //créé fichier json
?>