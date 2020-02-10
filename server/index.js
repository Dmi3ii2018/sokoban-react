
const app = require(`express`)();
const http = require(`http`).createServer(app);
const io = require(`socket.io`)(http);
const jwt = require(`jsonwebtoken`);
const jwksClient = require(`jwks-rsa`);

app.get(`/`, function (req, res) {
  res.send(`<h1>Hello</h1>`);
});

io.on(`connection`, function (socket) {
  console.log(`a user connected`);
});

// const client = jwksClient({
//   jwksUri: `https://dev-ras4v53d.eu.auth0.com`
// });

// const players = [];

// const verifyPlayer = (token, cb) => {
//   const uncheckedToken = jwt.decode(token, {complete: true});
//   const kid = uncheckedToken.header.kid;

//   client.getSigningKey(kid, (err, key) => {
//     const signingKey = key.publicKey || key.rsaPublicKey;

//     jwt.verify(token, signingKey, cb);
//   });
// };

// const newMaxScoreHandler = (payload) => {
//   let foundPlayer = false;
//   players.forEach((player) => {
//     if (player.id === payload.id) {
//       foundPlayer = true;
//       player.maxScore = Math.max(player.maxScore, payload.maxScore);
//     }
//   });

//   if (!foundPlayer) {
//     players.push(payload);
//   }

//   io.emit(`players`, players);
// };

// io.on(`connection`, (socket) => {
//   const { token } = socket.handshake.query;

//   verifyPlayer(token, (err) => {
//     if (err) socket.disconnect();
//     io.emit(`players`, players);
//   });

//   socket.on(`new-max-score`, newMaxScoreHandler);
// });

http.listen(5500, () => {
  console.log(`listening on port 5500`);
});
