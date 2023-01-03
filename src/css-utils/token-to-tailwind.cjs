/**
 * Convertir JSON vers config tailwind
 *
 * @param {array} tokens {name: string, value: any}
 * @return {object} {key, value}
 */
const tokensToTailwind = (tokens) => {
  let data = {};
  tokens.forEach(({ name, value }) => {
    data[name] = value;
  });
  return data;
};

module.exports = tokensToTailwind;
