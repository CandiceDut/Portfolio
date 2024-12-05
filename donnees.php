<?php
require("constantes/constantes.php");

try {
    // Connexion à la base de données
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
    ];

    // Envoyer les données au frontend en JSON
    header("Content-Type: application/json");
    echo json_encode($data);

} catch (PDOException $e) {
    // Si une erreur survient, renvoyer une erreur avec le code 500
    http_response_code(500);
    echo json_encode(["error" => "Erreur de connexion : " . $e->getMessage()]);
    exit;  // Terminer l'exécution après une erreur
}
?>
