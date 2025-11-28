// Charger les villes depuis le fichier JSON
fetch('cities.json')
  .then(response => response.json())
  .then(data => {
    const citiesGrid = document.getElementById('cities-grid');
    
    data.cities.forEach(city => {
      const cityCard = document.createElement('div');
      cityCard.className = 'city-card';
      
      cityCard.innerHTML = `
        <img src="${city.image}" alt="${city.name}" onerror="this.src='https://via.placeholder.com/250x200?text=${city.name}'">        <div class="city-info">
          <h3>${city.name}</h3>
          <p>${city.country}</p>
          <span class="collection-badge">${city.collection}</span>
        </div>
      `;
      
      citiesGrid.appendChild(cityCard);
    });
  })
  .catch(error => console.error('Erreur lors du chargement des villes:', error));

// Gestion du formulaire newsletter
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Ici vous pouvez ajouter votre logique d'inscription
    // Par exemple, envoyer à un service comme Mailchimp, SendGrid, etc.
    
    alert(`Merci ! Vous êtes maintenant inscrit avec l'email : ${email}`);
    this.reset();
  });
}
