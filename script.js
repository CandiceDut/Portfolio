// Récupérer les données depuis le backend
//fetch('donnees.php')
//création des données
const competences = {
    "flowers": [
      {
        "type": "Frontend",
        "noms": ["HTML", "CSS", "JavaScript"],
        "position": { "x": 150, "y": 400 },
        "petalSize": { "x": 50, "y": 80 },
        "petalColor": "orange",
        "petalType": "oval",
        "taille": 80
      },
      {
        "type": "Backend",
        "noms": ["PHP", "Python", "C"],
        "position": { "x": 350, "y": 150 },
        "petalSize": { "x": 50, "y": 100 },
        "petalColor": "pink",
        "petalType": "heart",
        "taille": 60
      },
      {
        "type": "POO",
        "noms": ["C++", "Java"],
        "position": { "x": 650, "y": 500 },
        "petalSize": { "x": 50, "y": 100 },
        "petalColor": "red",
        "petalType": "", // Forme par défaut
        "taille": 60
      },
      {
        "type": "BD",
        "noms": ["SQL", "PL/SQL", "NoSQL"],
        "position": { "x": 700, "y": 200 },
        "petalSize": { "x": 30, "y": 100 },
        "petalColor": "cyan",
        "petalType": "oval",
        "taille": 100
      },
      {
        "type": "FrameWork",
        "noms": ["Twig"],
        "position": { "x": 1000, "y": 100 },
        "petalSize": { "x": 50, "y": 100 },
        "petalColor": "purple",
        "petalType": "heart",
        "taille": 60
      },
      {
        "type": "Outils",
        "noms": ["PhpMyAdmin", "Git", "VS Code", "CodeBlocks", "GitHub", "IntelliJ", "SQLDevelopper"],
        "position": { "x": 1100, "y": 400 },
        "petalSize": { "x": 60, "y": 100 },
        "petalColor": "lime",
        "petalType": "", // Forme par défaut
        "taille": 100
      }
    ]
  };
  
  // Fonction pour dessiner une fleur
  function drawFlower(centerX, centerY, words, petalType, flowerSize, petalSize, petalColor, type) {
    const canvas = document.getElementById("flowerCanvas");
    const ctx = canvas.getContext("2d");
  
    // Taille des pétales
    const petalWidth = petalSize.x;
    const petalHeight = petalSize.y;
  
    // Dessiner les pétales
    const petalCount = words.length;
    for (let i = 0; i < petalCount; i++) {
      const angle = (2 * Math.PI / petalCount) * i;
      const petalX = centerX + flowerSize * Math.cos(angle);
      const petalY = centerY + flowerSize * Math.sin(angle);

      const petalRotation = Math.PI / 2; // Rotation of 90 degrees for each petal

      // Save the context before rotation
      ctx.save();
      ctx.translate(petalX, petalY);
      
      // Apply the individual rotation of each petal (based on the petal index)
      ctx.rotate(angle + petalRotation); // Rotate each petal based on its position
  
      // Dessiner le pétale selon son type
      ctx.beginPath();
      if (petalType === 'oval') {
        ctx.ellipse(0, 0, petalWidth, petalHeight, 0, 0, 2 * Math.PI);
      } else if (petalType === 'heart') {
        ctx.moveTo(0, -20);
        ctx.bezierCurveTo(0, -60, -80, -60, -50, 20); // Left curve (larger)
        ctx.bezierCurveTo(-30, 60, 20, 70, 40, 30); // Right curve (larger)
        ctx.bezierCurveTo(85, -60, 0, -60, 0, -20); // Closing the petal (larger)
      } else {
        ctx.arc(0, 0, petalWidth, 0, 2 * Math.PI); // Forme circulaire par défaut
      }
      ctx.fillStyle = petalColor; // Couleur des pétales
      ctx.fill();
      ctx.stroke();
      ctx.restore();
  
      // Ajouter le texte sur le pétale
      ctx.fillStyle = "black";
      ctx.font = "14px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(words[i], petalX, petalY);
    }
  
    // Dessiner le centre de la fleur
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    // **Ajout du titre au centre de la fleur**
    ctx.fillStyle = "black";
    ctx.font = "16px Arial bold";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(type, centerX, centerY); // Écrire le titre au centre
  }
  
  // Fonction pour dessiner toutes les fleurs
  function drawAllFlowers() {
    const canvas = document.getElementById("flowerCanvas");
    const ctx = canvas.getContext("2d");
  
    // Nettoyer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Dessiner chaque fleur
    competences.flowers.forEach(flower => {
      drawFlower(
        flower.position.x,
        flower.position.y,
        flower.noms, 
        flower.petalType, 
        flower.taille, 
        flower.petalSize, 
        flower.petalColor,
        flower.type
      );
    });
  }
  
  // Dessiner les fleurs lorsque la page est chargée
  document.addEventListener("DOMContentLoaded", drawAllFlowers);

  const track = document.querySelector('.carousel-track');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  
  // Largeur d'une case incluant l'espacement
  const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20; // 20 = marge
  
  let position = 0; // Position actuelle de défilement
  
  // Fonction pour défiler vers la droite
  rightArrow.addEventListener('click', () => {
    position -= itemWidth; // On déplace vers la gauche
    track.style.transform = `translateX(${position}px)`;
  });
  
  // Fonction pour défiler vers la gauche
  leftArrow.addEventListener('click', () => {
    position += itemWidth; // On déplace vers la droite
    track.style.transform = `translateX(${position}px)`;
  });
  
  
  

  // Ouvrir la pop-up avec l'image agrandie
  function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
  }

  // Fermer la pop-up
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  window.onclick = function(event) {
      var modal = document.getElementById("myModal");
      var modalContent = document.getElementsByClassName("modal-content")[0];
      
      if (event.target == modal) {  // Vérifie si l'utilisateur clique en dehors de l'image
          modal.style.display = "none";  // Cacher la pop-up
      }
  }

$etudes = {
    "nom": "BUT Informatique",
    "lieu": "IUT de Bayonne et du Pays Basque, Anglet",
    "année": "2023-2026"},
    {"nom": "Baccalauréat Scientifique, spé physique chimie et biologie écologie",
    "lieu": "LEGTA Hector Serres, Heugas",
    "année": "2020-2023"
};

$experiences = {
    "poste": "Agent d'entretien et propreté",
    "entreprise": "la Mairie de Saint Paul les Dax",
    "durée": "été 2024"},
    {"poste": "Castreuse de maïs",
    "entreprise": "un particulier",
    "durée": "été 2022/2023/2024"
};

    const projetContainer = document.getElementById('projets-container');
    projetContainer.innerHTML = `
        <ul>${projets.nom} <li>${p.date}</li><li>${p.image}</li><li>${p.description}</li></ul>`;

    const etudeContainer = document.getElementById('etude-container');
    etudeContainer.innerHTML = `
        <ul>${data.etudes.map(e => `<li>${e.nom} à ${e.lieu} (${e.année})</li>`).join('')}</ul>`;

    const experienceProContainer = document.getElementById('experiencePro-container');
    experienceProContainer.innerHTML = `
        <ul>${data.experiences.map(ex => `<li>${ex.poste} chez ${ex.entreprise} (${ex.durée})</li>`).join('')}</ul>`;
