document.getElementById('searchBox').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchWebsite();
    }
});

const pages = [
    { title: '真的爱你', url: 'html/zdan.html' },
    { title: '爱人如己', url: 'html/arrj.html' },
    { title: '鱼歌', url: 'html/yg.html' },
    { title: '我们在此', url: 'html/wmzc.html' },
    { title: 'Flag', url: 'html/flag.html' },
    { title: '母语', url: 'html/my.html' },
    { title: '望祭山', url: 'html/wjs.html' },
    { title: '憧憬未来', url: 'html/cjwl.html' },
    { title: '小猫眼青青', url: 'html/xmyqq.html' },
];

function searchWebsite() {
    const searchTerm = document.getElementById('searchBox').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (searchTerm !== '') {
        let foundTitleMatch = false;

        pages.forEach(page => {
            if (page.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                foundTitleMatch = true;
                addResultLink(page);
            } else {
                fetchPageContent(page, searchTerm, addResultLink);
            }
        });

        setTimeout(() => {
            if (!resultsDiv.hasChildNodes()) {
                const noResultText = document.createElement('span');
                noResultText.textContent = '欢迎给鹿鸣推荐新歌哦(*¯︶¯*)';
                resultsDiv.appendChild(noResultText);
            }
        }, 300);
    }
}

function fetchPageContent(page, searchTerm, callback) {
    fetch(page.url)
        .then(response => response.text())
        .then(content => {
            const lowerCaseContent = content.toLowerCase();
            if (lowerCaseContent.includes(searchTerm.toLowerCase())) {
                callback(page);
            }
        })
        .catch(error => {
            console.error('Error fetching page content:', error);
        });
}

function addResultLink(page) {
    const resultsDiv = document.getElementById('results');
    const link = document.createElement('a');
    link.href = page.url;
    link.textContent = page.title;
    resultsDiv.appendChild(link);
}

document.querySelector('.hamburger').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});