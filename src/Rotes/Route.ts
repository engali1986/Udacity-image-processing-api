/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
import express from 'express';
import resize from '../functions/resize';
import fs from 'fs';
import path from 'path';

const route: express.IRouter = express.Router();
const visited: any[] = []; // This array is used to store file names for comparison later
let found: boolean; // Boolean to be true if the file name exists in Visited Array

route.get('/', (req: express.Request, res: express.Response): void => {
  try {
    if (
      !req.query.name ||
      !req.query.width ||
      !req.query.height ||
      !fs.existsSync(path.resolve('./images' + '\\' + req.query.name + '.jpg'))
    ) {
      res.send('File not found');
    } else {
      if (visited.length === 0) {
        try {
          resize(
            req.query.name as string,
            req.query.width as string,
            req.query.height as string
          )
            .then(() => {
              res.sendFile(
                path.resolve(
                  './images_thumb' +
                    '\\' +
                    req.query.name +
                    '_' +
                    req.query.width +
                    'x' +
                    req.query.height +
                    '.jpg'
                )
              );
              visited.push(
                req.query.name + '_' + req.query.width + 'x' + req.query.height
              );
            })
            .catch(() => {
              res.send('File not found');
            });
        } catch (error) {
          res.send('File not Found');
        }
      } else if (visited.length > 0) {
        for (let index = 0; index < visited.length; index++) {
          const element = visited[index];
          if (
            element ===
            req.query.name + '_' + req.query.width + 'x' + req.query.height
          ) {
            found = true;
            break;
          } else {
            found = false;
          }
        }
      } else {
      }
      if (visited.length > 0 && found == true) {
        res.sendFile(
          path.resolve(
            './images_thumb' +
              '\\' +
              req.query.name +
              '_' +
              req.query.width +
              'x' +
              req.query.height +
              '.jpg'
          )
        );
      } else if (visited.length > 0 && found == false) {
        try {
          resize(
            req.query.name as string,
            req.query.width as string,
            req.query.height as string
          )
            .then(() => {
              res.sendFile(
                path.resolve(
                  './images_thumb' +
                    '\\' +
                    req.query.name +
                    '_' +
                    req.query.width +
                    'x' +
                    req.query.height +
                    '.jpg'
                )
              );
              visited.push(
                req.query.name + '_' + req.query.width + 'x' + req.query.height
              );
            })
            .catch(() => {
              res.send('File not found');
            });
        } catch (error) {
          res.send('File not Found');
        }
      }
    }
  } catch (error) {
    res.send('File not found');
  }
});

export default route;
