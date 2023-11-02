const pages = [
    { title: "真的爱你", url: "/html/zdan.html", content: "Content of page 1" },
    { title: "爱人如己", url: "/html/arrj.html", content: "Content of page 2" },
    // ... add more pages as needed
];

const params = new URLSearchParams(window.location.search);
const query = params.get('query');

const matchingPages = pages.filter(page => {
    return page.content.toLowerCase().includes(query.toLowerCase());
});

const resultsDiv = document.getElementById('results');
if (matchingPages.length > 0) {
    matchingPages.forEach(page => {
        resultsDiv.innerHTML += `<a href="${page.url}">${page.title}</a><br>`;
    });
} else {
    resultsDiv.innerHTML = "No results found.";
}
