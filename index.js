import {request} from 'graphql-request';

const query = `
query getFilmInfo($isIt: Boolean = true) {
  allFilms {
    title
    characters @skip(if: $isIt) {
      name
    }
  }
}`;

const variable = `
  {
    "isIt": false
  }
`;
   
request('https://api.graph.cool/simple/v1/swapi', query, variable)
.then(data => console.log(JSON.stringify(data, null, 4)))