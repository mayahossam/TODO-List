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
  //en
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

  next();
}


var data=[{item: 'get milk'},{item: 'walk the dog'}, {item: 'coding'}];

router.get('/todo', function(req:Request,response:Response) {
//  console.log(request)
response.send(data);

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
router.post('/todo',urlencodedParser,function(req:Request,res:Response){

data.push(req.body);

res.json(data);
});

app.delete('/todo/:id',function(req:Request,res:Response){
console.log(req.params.id);
var index=+req.params.id;
data.splice(index, 1);
  console.log(data);
//  res.sendFile(__dirname+'/index.html');
res.json(data);
});
app.patch('/todo/:id',function(req:Request,res:Response){
console.log(req.params.id);
var index=+req.params.id;
 data[index]=req.body;
  console.log(data);
//  res.sendFile(__dirname+'/index.html');
res.json(data);
});

app.use('/', router);

module.exports = router;


//app.get('/hello', (request: Request, response: Response, next:NextFunction) => {
//  response.send('Hello world!');
//});

app.listen(81);
