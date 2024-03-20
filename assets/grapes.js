import 'grapesjs/dist/css/grapes.min.css';

import grapesjs from 'grapesjs';
import preset from 'grapesjs-preset-webpage';
import gjsBlocksBasic from 'grapesjs-blocks-basic';


import 'grapesjs-preset-webpage/dist/index.js';


const editor = grapesjs.init({
    container : '#gjs',
    height: '100vh',
    width: '100%',
    // ...
    plugins: [preset, gjsBlocksBasic],
    pluginsOpts: {
      [gjsBlocksBasic]: { /* options */ }
    },
    // or
    //plugins: [
    //  editor => plugin(editor, { /* options */ }),
    //],
  });