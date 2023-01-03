const viewports = {
  min: 500,
  max: 1440,
};

/**
 * Prends un tableau de tokens avec valeurs min et max et retourne un tableau avec des valeurs converties pour clamp
 *
 * @param {array} tokens array of {name: string, min: number, max: number}
 * @returns {array} {name: string, value: string}
 */
const clampGenerator = (tokens) => {
  const rootSize = 16;
  return tokens.map(({ name, min, max }) => {
    // Convertir les valeurs min et max en rem
    const minSize = min / rootSize;
    const maxSize = max / rootSize;

    // Convertir les valeurs viewport min et max en rem
    const minViewport = viewports.min / rootSize;
    const maxViewport = viewports.max / rootSize;

    // Calcul ici : https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
    const slope = (maxSize - minSize) / (maxViewport - minViewport);
    const intersection = -1 * minViewport * slope + minSize;

    return {
      name,
      value: `clamp(${minSize}rem, ${intersection.toFixed(2)}rem + ${(
        slope * 100
      ).toFixed(2)}vw, ${maxSize}rem)`,
    };
  });
};

module.exports = clampGenerator;
