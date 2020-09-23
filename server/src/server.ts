import express from 'express';

import routes from 'routes';

const server = express();
server.use(express.json());

server.use(routes);

server.listen(3333, () => {
  console.log('O servidor iniciou no seguinte endereço http://localhost:3333');
});
