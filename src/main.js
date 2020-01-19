const path = require('path');
const Fuse = require('fuse.js');
const brandColors = require('brand-colors/data/brandColors');

const options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name'],
}

const fuse = new Fuse(brandColors.getAll(), options);

const items = fuse.search(process.argv[2] || '').map(item => {
  return {
    uid: item.name,
    title: item.name,
    subtitle: item.color,
    autocomplete: item.name,
    arg: item.color,
    icon: {
      path: path.resolve(__dirname, `images/${item.name}.png`)
    }
  }
});

console.log(JSON.stringify({ items }));