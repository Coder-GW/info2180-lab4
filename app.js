//document.getElementById("btn").addEventListener("click", () => {
//    fetch("superheroes.php")
//        .then(response => {
//            if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
//            return response.text();
//        })
//        .then(data => {
//            const parser = new DOMParser();
//            const doc = parser.parseFromString(data, 'text/html');
//            console.log(doc);
//            const items = Array.from(doc.querySelectorAll('li')).map(li => li.textContent.trim());
//            if (items.length) {
//                alert(items.join('\n'));
//            } else {
//                alert('No results found.');
//            }
//        })
//        .catch(err => {
//            alert('Error: ' + err);
//        });
//});

document.getElementById("btn").addEventListener("click", () => {
    fetch("superheroes.php")
        .then(response => {
            if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
            return response.text();
        })
        .then(data => {
            alert(data);
        })
        .catch(err => {
            alert('Error: ' + err);
        });
});