const chokidar = require(`chokidar`);
const {sockets} = require(`./io`);
const fn = require(`./fn`);

chokidar.watch(fn.publicFolderPath, {
  ignored: /(^|[\/\\])\../
})
  .on(`all`, (evt, path, stats) => {
    // Send events to all active connections
    Object.values(sockets).forEach((socket) => {
      socket.emit(`chokidar`, {
        evt,
        path,
        stats
      });
    });
  });
