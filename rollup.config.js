/* eslint-disable */

const babel = require('rollup-plugin-babel');
const produce = require('immer').default;
const typescript = require('rollup-plugin-typescript');

const packageJson = require('./package.json');

process.env.BABEL_ENV = 'production';

const baseConfig = {
  external: ['immer', 'memoizerific', 'react', 'shallowequal'],
  input: 'src/index.js',
  output: {
    sourcemap: true,
  },
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['ie >= 11'],
            },
            modules: false,
            loose: true,
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        '@babel/plugin-proposal-json-strings',
        ['transform-react-remove-prop-types', { removeImport: true }],
      ],
    }),
  ],
};

module.exports = [
  // ESM build
  produce(baseConfig, draft => {
    draft.output.format = 'esm';
    draft.output.file = `dist/${packageJson.name}.js`;
  }),
];
