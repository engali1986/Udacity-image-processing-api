/* eslint-disable @typescript-eslint/no-unused-vars */
/* 
This API will be used to send images from Images folder then store the image name  which has been sent to the images_thumb folder 
after resizing the image with Sharp
if the server got request for any image which has been sent before the API shall send the image from Images_thumb folder

*/

import express, { Application, Request, Response } from 'express'; // this will import express middleware to the file
import route from './Rotes/Route'; // this will import route from the route floder

const app: Application = express();

app.use(route);
app.use((req: Request, res: Response): void => {
  // if user entered any route other than mintioned above it will send error massage
  res.send('page not found');
});

app.listen(3000, function () {
  console.log('running');
});

export default app;
