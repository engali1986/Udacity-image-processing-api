/* eslint-disable prefer-const */
import sharp from 'sharp';
import path from 'path';

// this function will be used to resize the image upon call back from Route.js and save to images_thumb

async function resize(
  name: string,
  width: string,
  height: string
): Promise<string> {
  let result: string;

  await sharp(path.resolve('./images' + '\\' + name + '.jpg'))
    .resize(parseInt(width), parseInt(height), { fit: 'fill' })
    .toFile(
      path.resolve(
        './images_thumb' + '\\' + name + '_' + width + 'x' + height + '.jpg'
      )
    );
  result = path.resolve(
    './images_thumb' + '\\' + name + '_' + width + 'x' + height + '.jpg'
  );
  return result;
}

export default resize;
