import * as appExp from 'express';
import * as ioSoc from 'socket.io';
import * as jwt from 'jsonwebtoken';
import * as jwksClient from 'jwks-rsa';
import * as httpServ from 'http';


const app = appExp();
const http = httpServ.Server(app);
const io = ioSoc(http);

const client = jwksClient({
  jwksUri: `dev-ras4v53d.eu.auth0.com` // ваш домен
});

const players = [
  {id: `d4`, maxScore: 82, name: `Ado Kukic`},
  {id: `a1`, maxScore: 235, name: `Bruno Krebs`},
  {id: `c3`, maxScore: 99, name: `Diego Poza`},
  {id: `b2`, maxScore: 129, name: `Jeana Tahnk`},
  {id: `e5`, maxScore: 34, name: `Jenny Obrie`},
  {id: `f6`, maxScore: 153, name: `Kim Maida`},
  {id: `g7`, maxScore: 55, name: `Luke Oliff`},
  {id: `h8`, maxScore: 146, name: `Sebastián Peyrott`},
];

const verifyPlayer = (token, cb) => {
  const uncheckedToken = jwt.decode(token, {complete: true});
  const kid = uncheckedToken.header.kid;

  client.getSigningKey(kid, (err, key) => {
    const signingKey = key.publicKey || key.rsaPublicKey;

    jwt.verify(token, signingKey, cb);
  });
};

const newMaxScoreHandler = (payload) => {
  let foundPlayer = false;
  players.forEach((player) => {
    if (player.id === payload.id) {
      foundPlayer = true;
      player.maxScore = Math.max(player.maxScore, payload.maxScore);
    }
  });

  if (!foundPlayer) {
    players.push(payload);
  }

  io.emit(`players`, players);
};

io.on(`connection`, (socket) => {
  const {token} = socket.handshake.query;

  verifyPlayer(token, (err) => {
    if (err) {
      socket.disconnect();
    }
    io.emit(`players`, players);
  });

  socket.on(`new-max-score`, newMaxScoreHandler);
});

http.listen(3001, () => {
  console.log(`listening on port 3001`);
});
