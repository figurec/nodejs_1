v = 0;
const http = require('http');
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  str = JSON.stringify(res.getHeaders()) + "\n";
  str += res.statusCode + "\n";
  str += ++v;
  res.end('Hello World\n' + str);
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}/`);
});
