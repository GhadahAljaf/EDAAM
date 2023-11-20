document.addEventListener('DOMContentLoaded', function () {
    const businesses = [
        { name: 'Jeeldesign', image: '../Web project/clothes/jeel.png', description: '@jeeldesign', link: 'https://www.instagram.com/jeeldesign/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='},
        { name: 'La designs', image: '../Web project/clothes/la_designs.png', description: '@ladesigns.ae', link: 'https://www.instagram.com/ladesigns.ae/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'We are activeist', image: '../Web project/clothes/activeist.png', description: '@weareactiveist', link: 'https://www.instagram.com/weareactiveist/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Kamin', image: '../Web project/clothes/yava.jpeg', description: '@kamin', link: 'https://www.instagram.com/kamin/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Arabs complex', image: '../Web project/clothes/arab.png', description: '@arabscomplex', link: 'https://www.instagram.com/arabscomplex/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },


        { name: 'The giving movement', image: '../Web project/clothes/giving1.jpeg', description: '@thegivingmovement', link: 'https://www.instagram.com/thegivingmovement/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'A frnd of mine ', image: '../Web project/clothes/frnd.png', description: '@afrndofmine', link: 'https://www.instagram.com/afrndofmine/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Mayka', image: '../Web project/clothes/mayka .png', description: '@maykaofficial', link: 'https://www.instagram.com/maykaofficial/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Ruby Ruffles', image: '../Web project/clothes/ruby.png', description: '@ruby_ruffles', link: 'https://www.instagram.com/ruby_ruffles/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },

        { name: 'Lullabae', image: '../Web project/clothes/lulla.png', description: '@lullabaeme', link: 'https://www.instagram.com/lullabaeme/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Lara Active', image: '../Web project/clothes/lara.png', description: '@laraactive', link: 'https://www.instagram.com/laraactive/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Seedos official', image: '../Web project/clothes/seedos.png', description: '@seedos_official', link: 'https://www.instagram.com/seedoos_official/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
    ];

    const businessListContainer = document.getElementById('businessList');

    businesses.forEach(business => {
    const card = createBusinessCard(business);
    businessListContainer.appendChild(card);
    });
});

function createBusinessCard(business) {
    const card = document.createElement('div');
    card.classList.add('business-card');

      // Create an anchor element for the link
    const link = document.createElement('a');
    link.href = business.link;
    link.target = '_blank'; // Open link in a new tab/window

    const image = document.createElement('img');
    image.src = business.image;
    image.alt = business.name;

    link.appendChild(image);

    const name = document.createElement('h2');
    name.textContent = business.name;

    const description = document.createElement('p');
    description.textContent = business.description;

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(link);

    return card;
}
