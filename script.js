function getData(filename, div) {
    fetch (filename)
    .then(response => response.text())
    .then(html => {
        html = document.getElementById(div).innerHTML;
        return html;
    })
    .catch(error => console.error("Error loading HTML:", error));
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
            contentDiv.innerHTML = getData("index2.html", "test");
            break;

        case 'settings':
            contentDiv.innerHTML = "settings"; //Settings here
            break;
        
        default:
            break;
    }
}
