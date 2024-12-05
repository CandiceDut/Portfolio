// Charger les projets depuis le backend et les afficher.
document.addEventListener('DOMContentLoaded', () => {
    const competenceContainer = document.getElementById('competence-container');
    const projetContainer = document.getElementById('project-container');
    const etudeContainer = document.getElementById('etude-container');
    const experienceProContainer = document.getElementById('experiencePro-container');

    fetch('donnees.php') // Récupère les données JSON depuis le backend.
        .then(response => response.json())
        .then(competences => {
            if (competences.error) {
                console.error('Erreur depuis le backend :', competences.error);
                competenceContainer.innerHTML = `<p>Erreur lors du chargement des competences.</p>`;
                return;
            }

            projets.forEach(projet => {
                const competenceDiv = document.createElement('div');
                competenceDiv.classList.add('competence');
                competenceDiv.innerHTML = `
                    <h3>${competence.nom}</h3>
                    <p>${competence.type}</p>
                `;
                competenceContainer.appendChild(competenceDiv);
            });
        })
        .then(projets => {
            if (projets.error) {
                console.error('Erreur depuis le backend :', projets.error);
                projetContainer.innerHTML = `<p>Erreur lors du chargement des projets.</p>`;
                return;
            }

            projets.forEach(projet => {
                const projetDiv = document.createElement('div');
                projetDiv.classList.add('projet');
                projetDiv.innerHTML = `
                    <img src="${projet.image}" alt="${projet.nom}">
                    <h3>${projet.nom}</h3>
                    <p>${projet.date}</p>
                    <p>${projet.description}</p>
                    <a href="${projet.lien}" target="_blank">Voir sur GitHub</a>
                `;
                projetContainer.appendChild(projetDiv);
            });
        })
        .then(etudes => {
            if (etudes.error) {
                console.error('Erreur depuis le backend :', etudes.error);
                etudeContainer.innerHTML = `<p>Erreur lors du chargement des etudes.</p>`;
                return;
            }

            etudes.forEach(etude => {
                const etudeDiv = document.createElement('div');
                etudeDiv.classList.add('etude');
                etudeDiv.innerHTML = `
                    <h3>${etude.niveau}</h3>
                    <p>${etude.etablissement}</p>
                    <p>${etude.specialite}</p>
                    <p>${etude.lieu}</p>
                `;
                etudeContainer.appendChild(etudeDiv);
            });
        })
        .then(experiencesPro => {
            if (experiencesPro.error) {
                console.error('Erreur depuis le backend :', experiencesPro.error);
                experienceProContainer.innerHTML = `<p>Erreur lors du chargement des experiences Pro.</p>`;
                return;
            }

            experiencesPro.forEach(experiencePro => {
                const experienceProDiv = document.createElement('div');
                experienceProDiv.classList.add('experiencePro');
                experienceProDiv.innerHTML = `
                    <h3>${experiencePro.niveau}</h3>
                    <p>${experiencePro.etablissement}</p>
                    <p>${experiencePro.specialite}</p>
                    <p>${experiencePro.lieu}</p>
                `;
                experienceProContainer.appendChild(experienceProDiv);
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement des etudes :', error);
            etudeContainer.innerHTML = `<p>Erreur lors du chargement des etudes.</p>`;
        });
});
