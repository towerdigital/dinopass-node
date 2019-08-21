import cleanup from 'rollup-plugin-cleanup'
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    name: 'main',
    banner:
      '/**\n' +
      ' * Copyright (c) Tower Digital LLC and Phillip Henslee. All Rights Reserved.\n' +
      ' *\n' +
      ' * This source code is licensed under the MIT license found in the\n' +
      ' * LICENSE file in the root directory of this source tree.\n' +
      ' *\n' +
      ' */'
  },
  plugins: [cleanup()]
}
