let favorites;

function logFavorites() {
    for (let i = 0; i < favorites.length; i++) {
        console.log(favorites[i]);
    }
}

function addToFavorite(element) {
    let parent = element.parentElement;
    parent.classList.add('Favorites');
    parent.style.backgroundColor = 'red';
    favorites = document.getElementsByClassName('Favorites');
}

function loadExternalHTML(url, targetElementId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetElementId).innerHTML = html;
        })
        .catch(error => console.error('Error loading HTML: ', error));
}

function changeContent(tab) {
    var contentDiv = document.getElementById('dynamic');
    console.log("Clicked tab "+tab);

    switch (tab) {
        case 'menu':
            contentDiv.innerHTML = "<p> menu </p>"; //Menu here
            break;

        case 'songs':
            fetch('songs.html')
                .then(response => response.text())
                .then(html => {
                    contentDiv.innerHTML = html;
                })
                .catch(error => console.error('Error loading HTML:', error));
            break;

        case 'genres':
            fetch('index2.html')
                .then(response => response.text())
                .then(html => {
                    contentDiv.innerHTML = html;
                })
                .catch(error => console.error('Error loading HTML:', error));
            break;

        case 'favorites':
            fetch('favorites.html')
                .then(response => response.text())
                .then(html => {
                    contentDiv.innerHTML = html;
                })
                .catch(error => console.error('Error loading HTML:', error));
            break;
        
        default:
            break;
    }
}


