import 'grapesjs/dist/css/grapes.min.css';

import grapesjs from 'grapesjs';
import preset from 'grapesjs-preset-webpage';
import plugin from 'grapesjs-blocks-basic';


import 'grapesjs-preset-webpage/dist/index.js';


const editor = grapesjs.init({
    container : '#gjs',
    // ...
    plugins: [plugin],
    pluginsOpts: {
      [plugin]: { /* options */ }
    },
    // or
    plugins: [
      editor => plugin(editor, { /* options */ }),
    ],
  });