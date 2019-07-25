import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    name: 'test'
  },
  plugins: [
    json(),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    })
  ],
  external: ['lodash']
};