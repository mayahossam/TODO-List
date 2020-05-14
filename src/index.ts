import  {Request,Response,NextFunction} from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
var express=require("express");
var cors = require("cors");
var health="false";
const app = express();
//const router = express.Router();
app.get('/todo/health', function(req:Request,response:Response) {
//  console.log(request)
var empty="Nothing to show"
response.json(empty);

});
app.use(bodyParser.json());
app.use(cors());
app.use(loggerMiddleware);
app.use(Checkheaders);

//fs.write('/log.txt','log');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
function Checkheaders(request: Request, response: Response, next:NextFunction) {
if(request.header('x-Gateway-Apikey')!=='fixed'||request.header('csrf-token') =='' ) {
          response.status(404).send({ error: 'Post not found' });
}
next();
}

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



var data=[{id:1,item: 'get milk'},{id:2,item: 'walk the dog'}, {id:3,item: 'coding'}];

app.get('/todo', function(req:Request,response:Response) {
//  console.log(request)
response.json(data);

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
app.post('/todo',urlencodedParser,function(req:Request,res:Response){
  var oneitem={id: req.body.id,item:req.body.item}

//var oneitem={id: Number(new Date()),item:req.body}
console.log("AddDATA");

data.push(oneitem);
console.log(req.body);

res.json(oneitem);
});

app.delete('/todo/:id',function(req:Request,res:Response){
console.log(req.params.id);
var index=+req.params.id;
data.splice(index, 1);
console.log("RemovedDATA");

  console.log(data);
//  res.sendFile(__dirname+'/index.html');
res.json(data);
});
app.patch('/todo/',urlencodedParser,function(req:Request,res:Response){
  console.log("patch");
console.log(req.body.index);
console.log(req.body.item);

var index=+req.body.index;
console.log(index);
data[index].item=req.body.item;
//data[index].id=Number(new Date());
 //data[index].item=req.body;
 var todo={id:data[index].id,item:req.body.item,index:index}
  console.log(data);
  var oneitem=[index,todo ]
  console.log(todo);

  console.log(todo.index);
  console.log(todo.id);


//  res.sendFile(__dirname+'/index.html');
res.json(todo);

});



//app.use('/', router);

//module.exports = router;


//app.get('/hello', (request: Request, response: Response, next:NextFunction) => {
//  response.send('Hello world!');
//});

app.listen(81);
