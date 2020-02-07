function showData(div, url) {
  fetch(url)
    .then(data => data.json())
    .then(person => {
      document.getElementById(div).innerHTML = `
       <h1>${person.name}</h1> 
       <h2>Birth year: ${person.birth_year}</h2>
       <h4>Facts</h4>
       <ul>
        <li>Eye color: ${person.eye_color}</li>
        <li>Gender: ${person.gender}</li>
        ${
          person.hair_color != "none"
            ? `<li>Hair color: ${person.hair_color}</li>`
            : ""
        }
        <li>Height: ${person.height}</li>
        <li>Skin color: ${person.skin_color}</li>
        <li>Mass: ${person.mass}</li>

        <li>Homeworld: <a href="${person.homeworld}">${
        person.homeworld
      }</a></li>
       </ul>
       <h4>Films</h4>
       <ul>
        ${person.films.map(film => `<li><a href="${film}">${film}</a></li>`)}
       </ul>
       ${
         person.vehickles
           ? `<h4>Vehicles</h4>
                <ul>
                  ${person.vehicles.map(
                    vehicle => `<li><a href="${vehicle}">${vehicle}</a></li>`
                  )}
                </ul>
                <h4>Starships</h4>`
           : ""
       }
       <ul>
        ${person.starships.map(
          starship => `<li><a href="${starship}">${starship}</a></li>`
        )}
       </ul>
       ${
         person.name === "Luke Skywalker"
           ? `<button type="button" id="darthBtn">DARTH VADER</button>`
           : ""
       }
      `;
      return person.name;
    })
    .then(name => {
      if (name === "Luke Skywalker") {
        document.getElementById("darthBtn").addEventListener("click", () => {
          showData("divForData", "https://swapi.co/api/people/4/");
        });
      }
    });
}

showData("divForData", "https://swapi.co/api/people/1");
