/*
  Do not change the line below. If you'd like to run code from this file, you may use the `examplePokemon` variable below to gain access to an array of pokemon.

  Keep in mind that your functions must still have and use a parameter for accepting all pokemon.
*/
const examplePokemon = require("./pokemon.js");
// Do not change the line above.

/**
 * getAllPokemonNames()
 * -----------------------------
 * Returns all of  the names from an array of pokemon. If the inputted `pokemon` array is of length 1, throw an error with a message.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @returns {string[]|Error} An array of strings, which are pokemon names.
 *
 * NOTE: You must use the `.map()` method.
 * 
 * EXAMPLE:
 *  getAllPokemonNames(pokemon);
 *  //> [
  'bulbasaur',  'ivysaur',    'venusaur',
  'charmander', 'charmeleon', 'charizard',
  'squirtle',   'wartortle',  'blastoise',
  'caterpie',   'metapod',    'butterfree',
  'weedle',     'kakuna',     'beedrill',
  'pidgey',     'pidgeotto',  'pidgeot',
  'rattata',    'raticate',   'spearow',
  'fearow',     'ekans',      'arbok',
  'pikachu',    'raichu',     'sandshrew',
  'sandslash',  'nidoran-f',  'nidorina',
  'nidoqueen',  'nidoran-m',  'nidorino',
  'nidoking',   'clefairy',   'clefable',
  'vulpix',     'ninetales',  'jigglypuff',
  'wigglytuff'
];
 */

function getAllPokemonNames() {}

/**
 * checkIfAnyPokemonWeighsLessThan()
 * -----------------------------
 * Returns a boolean, representing whether or not any of the pokemon weighs less than the provided weight.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} [weight= >18] - A weight. Defaults to a number higher than 18.
 * @returns {boolean} Returns `true` if a pokemon exists in the list that weighs less than the provided weight, otherwise returns `false`.
 *
 * NOTE: You must use the `.some()` method.
 *
 * EXAMPLE:
 *  checkIfAnyPokemonWeighsLessThan(pokemon, 60);
 *  //> true
 *
 * EXAMPLE:
 *  checkIfAnyPokemonWeighsLessThan(pokemon, 18);
 *  //> false
 */
function checkIfAnyPokemonWeighsLessThan(pokemon, weight = 100) {}

/**
 * findById()
 * -----------------------------
 * Returns a pokemon object from an array of objects based on the ID. If the ID does not match any pokemon, return `null`.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} id - A unique `pokeId`.
 * @returns {Object|null} The pokemon object with the matching `pokeId` or null.
 *
 * NOTE: You must use the `.find()` method.
 * 
 * EXAMPLE:
 *  findById(pokemon, 36);
 *  //> {
      // clefable
    };
 */
function findById(pokemon, id) {}

/**
 * filterByType()
 * -----------------------------
 * Returns all pokemon objects with a matching type. Case-insensitive. If no pokemon match the inputted `genre`, return `[]`.
 * @param {Object[]} pokemon - An array of pokemon. See the `pokemon.js` file for an example of this array.
 * @param {string} genre - The type of a pokemon. (e.g. "Fantasy")
 * @returns {Object[]} An array of pokemon where at least one of the types matches the `type` inputted.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 * EXAMPLE:
 *  filterByType(pokemon, "water");
 *  //> [
      {
        // squirtle
        // wartortle
        // blastoise
      }
    ]
 *
 * EXAMPLE:
 *  filterByType(pokemon, "psychic")
 *  //> []
 */
function filterByType(pokemon, pokeType) {}

module.exports = {
  getAllPokemonNames,
  checkIfAnyPokemonWeighsLessThan,
  findById,
  filterByType,
};