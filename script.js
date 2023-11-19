function getData(filename, div) {
    return fetch(filename)
        .then(response => response.text())
        .then(html => {
            // Set the innerHTML of the specified div element
            document.getElementById(div).innerHTML = html;
            // Return the innerHTML
            return html;
        })
        .catch(error => {
            console.error("Error loading HTML:", error);
            throw error; // Re-throw the error to propagate it to the next catch block
        });
}

getData('index2.html', 'test')
    .then(html => {
        // Do something with the fetched HTML
        console.log(html);
    })
    .catch(error => {
        // Handle errors
        console.error(error);
    });

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
