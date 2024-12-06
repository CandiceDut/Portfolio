// Récupérer les données depuis le backend
fetch('donnees.php')
.then(response => {
    if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
    }
    return response.json();
})
.then(data => {
    console.log(data);

    // Afficher les données dans la page
        const competenceContainer = document.getElementById('competences-container');
        competenceContainer.innerHTML = `
            <ul>${data.competences.map(c => `<li>${c.nom} - ${c.type}</li>`).join('')}</ul>`;

        const projetContainer = document.getElementById('projets-container');
        projetContainer.innerHTML = `
            <ul>${data.projets.map(p => `<li>${p.nom}</li> <li>${p.date}</li><li>${p.image}</li><li>${p.description}</li>`).join('')}</ul>`;

        const etudeContainer = document.getElementById('etude-container');
        etudeContainer.innerHTML = `
            <ul>${data.etudes.map(e => `<li>${e.nom} à ${e.lieu} (${e.année})</li>`).join('')}</ul>`;

        const experienceProContainer = document.getElementById('experiencePro-container');
        experienceProContainer.innerHTML = `
            <ul>${data.experiences.map(ex => `<li>${ex.poste} chez ${ex.entreprise} (${ex.durée})</li>`).join('')}</ul>`;
})
.catch(error => {
    console.error('Erreur :', error);
});