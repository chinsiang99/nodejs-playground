const http = require("http");
const fs = require("fs/promises");

const PORT = 8000;

const server = http.createServer(async (req, res, next) => {
  const contentBuffer = await fs.readFile(__dirname + "/text.txt")

  console.log(contentBuffer.toString('utf-8'));
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(contentBuffer.toString('utf-8'));
})

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})