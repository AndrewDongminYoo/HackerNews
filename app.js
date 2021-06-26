const ajax = new XMLHttpRequest();
const root = document.getElementById('root');
const contentBox = document.createElement('div');
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";


function getAPI(URL) {
    ajax.open('GET', URL, false);
    ajax.send();
    return JSON.parse(ajax.response);
};

function newsFeed() {
    const newsFeed = getAPI(NEWS_URL);
    const newsList = [];
    newsList.push("<ul>")
    newsFeed.map((content) => {
        newsList.push(`
        <li>
        <a href="#${content.id}">
        ${content.title} (${content.comments_count})
        </a>
        </li>`);
    })
    newsList.push("</ul>")
    root.innerHTML = newsList.join("")
};

function newsDetail() {
    const id = location.hash.substr(1);

    root.innerHTML = `<h1>
    ${getAPI(CONTENT_URL.replace('@id', id)).title}
    </h1><a href="#">목록으로</a>`
};

function router() {
    const path = location.hash;

    if (path === '') {
        newsFeed();
    } else {
        newsDetail();
    }
};

router();
window.addEventListener('hashchange', router);