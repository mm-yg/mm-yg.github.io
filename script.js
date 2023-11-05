document.getElementById('searchBox').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchWebsite();
    }
});

const pages = [
    { title: '真的爱你', url: 'html/zdan.html' },
    { title: '爱人如己', url: 'html/arrj.html' },
    { title: '布谷鸟', url: 'html/bgn.html' },
    { title: '鱼歌', url: 'html/yg.html' },
    { title: '我们在此', url: 'html/wmzc.html' },
    { title: '你要啷个', url: 'html/nylg.html' },
    { title: '日安，你好', url: 'html/ranh.html' },
    { title: '月灯谣', url: 'html/ydy.html' },
    { title: '母语', url: 'html/my.html' },
    { title: '不怕大老虎', url: 'html/bpdlh.html' },
    { title: '上海爱情故事2019', url: 'html/shaqgs2019.html' },
    { title: '望祭山', url: 'html/wjs.html' },
    { title: '少年·北京', url: 'html/snbj.html' },
    { title: '青山绿水', url: 'html/qsls.html' },
    { title: '你清澈的双眼', url: 'html/nqcdsy.html' },
    { title: '日头出来晒山岗', url: 'html/rtclssg.html' },
    { title: '小猫眼青青', url: 'html/xmyqq.html' },
    { title: '乌拉勒吉', url: 'html/wllj.html' },
    { title: '打鱼归来', url: 'html/dygl.html' },
    { title: '不要放弃', url: 'html/byfq.html' },
    { title: '憧憬未来', url: 'html/cjwl.html' },
    { title: '答案在风中飘', url: 'html/dazfzp.html' },
];

function searchWebsite() {
    const searchTerm = document.getElementById('searchBox').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

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