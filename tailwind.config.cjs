/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const postcss = require('postcss');
const postcssJs = require('postcss-js');

// utils
const tokensToTailwind = require('./src/css-utils/token-to-tailwind.cjs');
const clampGenerator = require('./src/css-utils/clamp-generator.cjs');

// Json
const colorTokens = require('./src/design-tokens/colors.json');
const fontTokens = require('./src/design-tokens/fonts.json');
const textSizeTokens = require('./src/design-tokens/text-sizes.json');
const spacingTokens = require('./src/design-tokens/spacing.json');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '500px',
      sm: '700px',
      md: '1000px',
      lg: '1200px',
      xl: '1400px',
    },
    colors: tokensToTailwind(colorTokens.items),
    fontSize: tokensToTailwind(clampGenerator(textSizeTokens.items)),
    fontFamily: tokensToTailwind(fontTokens.items),
    spacing: tokensToTailwind(clampGenerator(spacingTokens.items)),
  },
  plugins: [
    plugin(function ({ addComponents, config }) {
      let result = '';

      const currentConfig = config();

      const groups = [
        { key: 'colors', prefix: 'color' },
        { key: 'fontSize', prefix: 'size' },
        { key: 'fontFamily', prefix: 'font' },
        { key: 'spacing', prefix: 'space' },
      ];

      groups.forEach(({ key, prefix }) => {
        const group = currentConfig.theme[key];
        if (!group) return;

        Object.keys(group).forEach((key) => {
          result += `--${prefix}-${key}: ${group[key]};`;
        });
      });
      addComponents({
        ':root': postcssJs.objectify(postcss.parse(result)),
      });
    }),
  ],
};
