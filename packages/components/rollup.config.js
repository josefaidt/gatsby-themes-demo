import path from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

const baseConfig = {
  input: path.resolve(__dirname, './src/index.js'),
  external: ['react', 'react-dom', 'prop-types', 'styled-components'],
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true,
      module: true,
    }),
    commonjs({
      include: ['node_modules/**'],
      extensions: ['.js'],
    }),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              browsers: ['last 1 version', 'ie >= 11', 'Firefox ESR'],
            },
          },
        ],
        '@babel/preset-react',
      ],
    }),
  ],
}

export default [
  {
    ...baseConfig,
    output: {
      format: 'cjs',
      file: path.join('lib', 'index.js'),
    },
  },
]
