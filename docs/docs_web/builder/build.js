import { readFile, writeFile } from 'fs/promises';
// import { createRequire } from "module";
import fs from 'fs';
import ejs from 'ejs';

// const require = createRequire(import.meta.url);
// let ejs = require('ejs');

const pages = JSON.parse(
    await readFile(new URL('../pages.json', import.meta.url))
)

let str = ejs.renderFile('./templates/Roadmaps/Roadmaps.ejs', {pages: pages}, (err, str) => {
    if (err) {
        console.log(err);
    } else {
        console.log(str);
    }
});