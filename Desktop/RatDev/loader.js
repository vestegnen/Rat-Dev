function elementFromHTML(html){
    const template = document.createElement("template")
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}
const container = document.getElementById("grid");

fetch("games.json").then(r => r.json()).then(games => {
    for (const game of games) {
        const e = elementFromHTML(`<a href="Games/${game}/index.html"> <img id="Game" src="Games/${game}/image.png" alt="${game}"> </a>`)
        container.appendChild(e);
    }
});