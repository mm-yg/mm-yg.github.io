document.getElementById('searchBox').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchWebsite();
    }
});

const pages = [
    { title: '真的爱你', url: 'html/zdan.html' },
    { title: '爱人如己', url: 'html/arrj.html' },
    { title: '布谷鸟', url: 'html/bgn.html' },
    { title: '打鱼归来', url: 'html/dygl.html' },
    { title: '不要放弃', url: 'html/byfq.html' },
    { title: '憧憬未来', url: 'html/cjwl.html' },
    { title: '答案在风中飘', url: 'html/dazfzp.html' },
    { title: '月灯谣', url: 'html/ydy.html' },
    { title: '母语', url: 'html/my.html' },
    { title: '不怕大老虎', url: 'html/bpdlh.html' },
    { title: '上海爱情故事2019', url: 'html/shaqgs.html' },
    { title: '望祭山', url: 'html/wjs.html' },
    { title: '少年·北京', url: 'html/snbj.html' },
    { title: '你清澈的双眼', url: 'html/nqcdsy.html' },
    { title: '日头出来晒山岗', url: 'html/rtclssg.html' },
    { title: '青山绿水', url: 'html/qsls.html' },
    { title: '小猫眼青青', url: 'html/xmyqq.html' },
    { title: '乌拉勒吉', url: 'html/wllj.html' },
];

function searchWebsite() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    let found = false;

    for (let page of pages) {
        if (page.title.toLowerCase().includes(searchTerm)) {
            found = true;
            const link = document.createElement('a');
            link.href = page.url;
            link.textContent = page.title;
            resultsDiv.appendChild(link);
        }
    }

    if (!found) {
        const noResultLink = document.createElement('a');
        noResultLink.textContent = '欢迎给鹿鸣推荐新歌哦(*¯︶¯*)';
        resultsDiv.appendChild(noResultLink);
    }
}