import express, {Request,Response,NextFunction} from 'express';
//import * as bodyParser from 'body-parser';
var cors = require("cors");
function loggerMiddleware(request: Request, response: Response, next:NextFunction) {
  console.log(`${request.method} ${request.path}`);
  next();
}

const app = express();
app.use(cors());
app.use(loggerMiddleware);

const router = express.Router();

router.get('/hello', (request: Request, response: Response, next:NextFunction) => {
//  console.log(request)
  response.send('Hello world!');
//  response.sendFile(__dirname+'/index.html');
});

app.use('/', router);

module.exports = router;


//app.get('/hello', (request: Request, response: Response, next:NextFunction) => {
//  response.send('Hello world!');
//});

app.listen(81);
