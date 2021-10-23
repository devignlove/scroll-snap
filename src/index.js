import { html, render } from "lit-html";

function Explore(rows = []) {
  return html`
    ${rows.map(
      ({ title, movies }) => html`
        <div class="ContentRow">
          <div class="ContentRow__title">${title}</div>
          <div class="ContentRow__items">
            <div class="ContentRow__spacer"></div>
            ${movies.map(movie => Poster(movie))}
          </div>
        </div>
      `
    )}
  `;
}

function Poster(movie) {
  return html`
  <button class="ContentTile" style=\"background-image:url(img/${movie}.jpg)\"></button>
  <div class="ContentRow__spacer"></div>
`;
}

const rows = [
  {
    title: "New Releases",
    movies: [
      "starwars",
      "birds",
      "bloodshot",
      "onward",
      "underwater",
      "astra",
      "wild",
      "invisible",
      "westworld",
      "ozark"
    ]
  },
  {
    title: "Trending",
    movies: [
      "sonic",
      "knives",
      "little",
      "1917",
      "wick",
      "hollywood",
      "platform",
      "parasite",
      "ford"
    ]
  }
];

render(Explore(rows), document.querySelector(".Explore"));
