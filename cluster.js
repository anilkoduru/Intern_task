const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs/2; i++) {
    cluster.fork();
  }
  let currentWorkerIndex = 0;
    const balancer = http.createServer((req, res) => {
        const worker = Object.values(cluster.workers)[currentWorkerIndex];
        currentWorkerIndex = (currentWorkerIndex + 1) % (numCPUs/2);
        worker.send('sticky-session:connection', req.socket);
    });
  balancer.listen(4005, () => {
    console.log(`Load balancer listening on port ${4005}`);
  });
} else {
  const app = require('./index.js');
  const server = http.createServer(app);
  server.listen(4001 + cluster.worker.id - 1, () => {
    console.log(`Worker ${cluster.worker.id} listening on port ${4001 + cluster.worker.id - 1}`);
  });
}