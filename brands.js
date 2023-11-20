document.addEventListener('DOMContentLoaded', function () {
    // Brands data, you can replace these with your actual data
    const brands = [
        { category: 'clothes', name: 'Brand A', logo: 'brand_a_logo.jpg', instagram: 'https://www.instagram.com/brand_a/' },
        { category: 'clothes', name: 'Brand B', logo: 'brand_b_logo.jpg', instagram: 'https://www.instagram.com/brand_b/' },
        { category: 'clothes', name: 'Brand C', logo: 'brand_c_logo.jpg', instagram: 'https://www.instagram.com/brand_c/' },
        // Add more brands for food and small businesses
    ];

    const brandsContainer = document.getElementById('brandsContainer');
    renderBrands(brandsContainer, 'clothes'); // Initially show clothes brands
});

function renderBrands(container, category) {
    // Filter brands based on the selected category
    const filteredBrands = brands.filter(brand => brand.category === category);

    // Clear existing brands
    container.innerHTML = '';

    // Render the brands
    filteredBrands.forEach(brand => {
        const brandElement = document.createElement('div');
        brandElement.classList.add('brand');

        const logoElement = document.createElement('img');
        logoElement.src = brand.logo;
        logoElement.alt = brand.name;

        const nameElement = document.createElement('a');
        nameElement.href = brand.instagram;
        nameElement.textContent = brand.name;

        brandElement.appendChild(logoElement);
        brandElement.appendChild(nameElement);
        
        container.appendChild(brandElement);
    });
}

function showCategories(category) {
    renderBrands(brandsContainer, category);
}
