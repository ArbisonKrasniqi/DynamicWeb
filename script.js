function loadExternalHTML(url, targetElementId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Inject the HTML into the specified target element
            document.getElementById(targetElementId).innerHTML = html;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Example usage

function changeContent(tab) {
    var contentDiv = document.getElementById('dynamic');
    console.log("Clicked tab "+tab);

    
    // Example usage
    switch (tab) {
        case 'menu':
            contentDiv.innerHTML = "<p> menu </p>"; //Menu here
            break;

        case 'songs':
            contentDiv.innerHTML = "songs"; //Songs Here
            break;

        case 'genres':
            contentDiv.innerHTML = loadExternalHTML("index2.html", "test")
                .then(html => {
                    contentDiv.innerHTML = html;
                })
                .catch(error => {
                    // Handle the error, if needed
                });
            break;

        case 'settings':
            contentDiv.innerHTML = "settings"; //Settings here
            break;
        
        default:
            break;
    }
}
