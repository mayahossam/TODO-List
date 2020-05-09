import  {Request,Response,NextFunction} from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
var express=require("express");
var cors = require("cors");
//var fs = require('fs');
const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(cors());
app.use(loggerMiddleware);
//fs.write('/log.txt','log');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
function loggerMiddleware(request: Request, response: Response, next:NextFunction) {
const data=request.body;
const requestStart = Date.now();
let errorMessage='';
request.on("error", error => {
  errorMessage = error.message;
});
   response.on("finish", () => {
     const { rawHeaders, httpVersion, method, socket, url } = request;
     const { remoteAddress, remoteFamily } = socket;
     const { statusCode, statusMessage } = response;
      const headers = response.getHeaders();

     var log=JSON.stringify({
         timestamp: Date.now(),
         rawHeaders,
         data,
         httpVersion,
         method,
         remoteAddress,
         remoteFamily,
         url,
         response: {
      statusCode,
      statusMessage,
      headers,

    }
       });
       fs.appendFile('log.txt', log + '\n', err => {

         //console.log(response)
           if (err) {
             console.log(err);
           }
         });
   });

/*
  let method = request.method;
let url = request.url;
let status = response.statusCode;
let data=response;
let log = `${method}:${url}:${status} ${data}`;
//fs.writeFile('/log.txt',log);

fs.appendFile('log.txt', log + '\n', err => {
  console.log(log)
    if (err) {
      console.log(err);
    }
  });
  */
  next();
}



var data=[{item: 'get milk'},{item: 'walk the dog'}, {item: 'coding'}];

router.get('/hello', (request: Request, response: Response, next:NextFunction) => {
//  console.log(request)
  response.send('welcome to our new page');
  var resp=JSON.stringify({
    response: {
      data
    }
  });
  fs.appendFile('log.txt', resp + '\n', err => {
      if (err) {
        console.log(err);
      }});
});
app.use('/', router);

module.exports = router;


//app.get('/hello', (request: Request, response: Response, next:NextFunction) => {
//  response.send('Hello world!');
//});

app.listen(81);
