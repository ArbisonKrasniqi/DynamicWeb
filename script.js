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
            contentDiv.innerHTML = "songs"; //Songs Here
            break;

        case 'genres':
            fetch('index2.html')
                .then(response => response.text())
                .then(html => {
                    contentDiv.innerHTML = html;
                })
                .catch(error => console.error('Error loading HTML:', error));
            break;

        case 'settings':
            contentDiv.innerHTML = "settings"; //Settings here
            break;
        
        default:
            break;
    }
}
