// @ts-check

/**
 * @param {number} minInt
 * @param {number} maxInt
 * @return {number}
 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
const getRandomInt = (minInt = 0, maxInt = 100) => {
  const min = Math.ceil(minInt);
  const max = Math.floor(maxInt);

  // The maximum is inclusive and the minimum is inclusive
  const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  return randomInt;
};

export default getRandomInt;
