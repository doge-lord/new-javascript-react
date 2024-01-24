const http = require("http");

const songs = require("./models/song");
const genres = require("./models/genre");

const DEFAULT_HEADER = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

/**
 *
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse<http.IncomingMessage> & {req: http.IncomingMessage}} res
 */
const handleGetRequest = async (req, res) => {
  // Your code here

  // Sample usage of Model methods
  console.log(JSON.stringify(await songs.searchByTitle("a")));
  console.log(JSON.stringify(await genres.findAll()));

  res.writeHeader(200, DEFAULT_HEADER);
  res.write(JSON.stringify([]));
  return res.end();
};

const server = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return handleGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

server.listen(3000, () => {
  const { port } = server.address();
  console.log(`Server is listening on: http://localhost:${port}`);
});
