document.addEventListener('DOMContentLoaded', () => {
    const competenceContainer = document.getElementById('competence-container');
    const projetContainer = document.getElementById('project-container');
    const etudeContainer = document.getElementById('etude-container');
    const experienceProContainer = document.getElementById('experiencePro-container');

    // Fonction pour charger les données et afficher les éléments
    function chargerDonnees(url, container, templateFn) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error('Erreur depuis le backend :', data.error);
                    container.innerHTML = `<p>Erreur lors du chargement des données.</p>`;
                    return;
                }
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.classList.add(item.type || 'item'); // Ajoutez une classe spécifique si vous en avez besoin
                    div.innerHTML = templateFn(item);
                    container.appendChild(div);
                });
            })
            .catch(error => {
                console.error('Erreur lors du chargement des données :', error);
                container.innerHTML = `<p>Erreur lors du chargement des données.</p>`;
            });
    }

    // Template pour les compétences
    function competenceTemplate(competence) {
        return `
            <h3>${competence.nom}</h3>
            <p>${competence.type}</p>
        `;
    }

    // Template pour les projets
    function projetTemplate(projet) {
        return `
            <img src="${projet.image}" alt="${projet.nom}">
            <h3>${projet.nom}</h3>
            <p>${projet.date}</p>
            <p>${projet.description}</p>
            <a href="${projet.lien}" target="_blank">Voir sur GitHub</a>
        `;
    }

    // Template pour les études
    function etudeTemplate(etude) {
        return `
            <h3>${etude.niveau}</h3>
            <p>${etude.etablissement}</p>
            <p>${etude.specialite}</p>
            <p>${etude.lieu}</p>
        `;
    }

    // Template pour les expériences professionnelles
    function experienceProTemplate(experiencePro) {
        return `
            <h3>${experiencePro.niveau}</h3>
            <p>${experiencePro.etablissement}</p>
            <p>${experiencePro.specialite}</p>
            <p>${experiencePro.lieu}</p>
        `;
    }

    // Chargement des données pour chaque catégorie
    chargerDonnees('competences.php', competenceContainer, competenceTemplate);
    chargerDonnees('projets.php', projetContainer, projetTemplate);
    chargerDonnees('etudes.php', etudeContainer, etudeTemplate);
    chargerDonnees('experiencesPro.php', experienceProContainer, experienceProTemplate);
});