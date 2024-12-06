<?php
//require("constantes/constantes.php");

try {
/*    // Connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$bdd;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer les compétences
    $stmt = $pdo->prepare("SELECT * FROM competences");
    $stmt->execute();
    $competences = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Récupérer les projets
    $stmt = $pdo->prepare("SELECT * FROM projets");
    $stmt->execute();
    $projets = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Récupérer les études
    $stmt = $pdo->prepare("SELECT * FROM etudes");
    $stmt->execute();
    $etudes = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Récupérer les expériences professionnelles
    $stmt = $pdo->prepare("SELECT * FROM experiencePro");
    $stmt->execute();
    $experiences = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Organiser les données dans un seul tableau associatif
    $data = [
        "competences" => $competences,
        "projets" => $projets,
        "etudes" => $etudes,
        "experiences" => $experiences
    ];*/
    // Exemple de données simulées
    $competences = [
        ["nom" => "HTML", "type" => "Frontend"],
        ["nom" => "CSS", "type" => "Frontend"],
        ["nom" => "JavaScript", "type" => "Frontend"],
        ["nom" => "PHP", "type" => "Backend"],
        ["nom" => "C", "type" => "Backend"],
        ["nom" => "Python", "type" => "Frontend"],
        ["nom" => "C++", "type" => "Orienté Objet"],
        ["nom" => "Java", "type" => "Orienté Objet"],
        ["nom" => "SQL", "type" => "Base de Données"],
        ["nom" => "PL/SQL", "type" => "Base de Données"],
        ["nom" => "Twig", "type" => "Framework"],
        ["nom" => "Visual Studio Code", "type" => "Outils"],
        ["nom" => "phpMyAdmin", "type" => "Outils"],
        ["nom" => "Git", "type" => "Outils"],
        ["nom" => "GitHub", "type" => "Outils"],
        ["nom" => "SQLDevelopper", "type" => "Outils"],
        ["nom" => "IntelliJ", "type" => "Outils"],
        ["nom" => "CodeBlocks", "type" => "Outils"],
    ];

    $projets = [
        ["nom" => "Portfolio", "description" => "Un site vitrine pour présenter mes projets et mes compétences.",
        "date" => "06/12/2024", "image" => "images/portfolio.jpg"],
        ["nom" => "Crochet'Time", "description" => "Une application web de vente de doudous et décorations au crochet fait main.",
        "date" => "25/10/2024", "image" => "images/crochettime.jpg"]
    ];

    $etudes = [
        ["nom" => "BUT Informatique", "lieu" => "IUT de Bayonne et du Pays Basque, Anglet", "année" => "2023-2026"],
        ["nom" => "Baccalauréat Scientifique, spé physique chimie et biologie écologie", "lieu" => "LEGTA Hector Serres, Heugas", "année" => "2020-2023"]
    ];

    $experiences = [
        ["poste" => "Agent d'entretien et propreté", "entreprise" => "la Mairie de Saint Paul les Dax", "durée" => "été 2024"],
        ["poste" => "Castreuse de maïs", "entreprise" => "un particulier", "durée" => "été 2022/2023/2024"]
    ];

    $data = [
        "competences" => $competences,
        "projets" => $projets,
        "etudes" => $etudes,
        "experiences" => $experiences
    ];

    // Envoyer les données au frontend en JSON
    header("Content-Type: application/json");
    echo json_encode($data);

}

catch (PDOException $e) {
    // Si une erreur survient, renvoyer une erreur avec le code 500
    http_response_code(500);
    echo json_encode(["error" => "Erreur de connexion : " . $e->getMessage()]);
    exit;  // Terminer l'exécution après une erreur
}
?>