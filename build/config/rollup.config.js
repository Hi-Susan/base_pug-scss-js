import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const globals = {
  jquery: 'jQuery'
}

const plugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    plugins: ['@babel/plugin-transform-runtime']
  })
]
const output = {
  banner: '/*! base_pug-scss-js */',
  dir: 'dist/js/',
  format: 'cjs',
  globals
}

export default [
  {
    input: 'build/js/index.js',
    treeshake: false,
    output,
    plugins
  }
]
