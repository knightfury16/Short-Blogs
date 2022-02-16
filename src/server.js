const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

   // Logging the req url and req method
   console.log(req.url, req.method);

   // // Set header content type
   // res.setHeader('Content-Type', 'text/html');
   // res.write('<p>Hello there</p>');
   // res.write('<p>Hello there again</p>');
   // res.end();

   // Sending an html page as response
   // res.setHeader('Content-Type', 'text/html');
   // fs.readFile('../views/index.html', (err, data) => {
   //     if (err) {
   //         console.log(err);
   //         res.end();
   //     } else {
   //         res.end(data);
   //     }
   // });

   // Basic routing
   res.setHeader('Content-Type', 'text/html');
   let path = '../views/';

   switch (req.url) {
      case '/':
         path += 'index.html';
         res.statusCode = 200;
         break;
      case '/about':
         path += 'about.html';
         res.statusCode = 200;
         break;
      case '/about-us':
         res.statusCode = 301;
         res.setHeader('Location', '/about');
         res.end();
         break;
      default:
         path += '404.html';
         res.statusCode = 404;
         break;
   }




   fs.readFile(path, (err, data) => {
      if (err) {
         console.log(err);
         res.end();
      } else {
         res.end(data);
      }
   })
});

server.listen(3000, 'localhost', () => {
   console.log('listening for request on port 3000');
});
