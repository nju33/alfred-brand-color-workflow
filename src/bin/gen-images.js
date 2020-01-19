const path = require('path');
const sharp = require('sharp');
const brandColors = require('brand-colors/data/brandColors');

brandColors.getAll().forEach(item => {
  const roundedCorners = Buffer.from(
    `<svg><rect x="0" y="0" width="200" height="200" rx="50" ry="50" style="fill:${item.color}" /></svg>`
  );

  sharp(roundedCorners)
    .png()
    .toFile(path.resolve(__dirname, `../images/${item.name}.png`), (err, info) => {
      if (err !== null) {
        console.error(err);
      }
    });
});