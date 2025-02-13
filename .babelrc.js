const presets = ['@babel/preset-typescript']
const plugins = [
  '@babel/plugin-transform-block-scoping',
  '@babel/plugin-transform-template-literals',
  '@babel/plugin-transform-arrow-functions',
  '@babel/plugin-transform-parameters',
  '@babel/plugin-transform-destructuring',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-shorthand-properties',
  '@babel/plugin-proposal-nullish-coalescing-operator',
]

if (process.env.BABEL_ENV !== 'esm') {
  plugins.push('@babel/plugin-transform-modules-commonjs')
  plugins.push('babel-plugin-add-module-exports')
}

if (process.env.BABEL_ENV === 'esm' || process.env.BABEL_ENV === 'commonjs') {
  plugins.push(['babel-plugin-add-import-extension', { extension: 'js' }])
}

const overrides = [{ ignore: ['**/*.d.ts'] }]

module.exports = {
  presets,
  plugins,
  overrides,
}
