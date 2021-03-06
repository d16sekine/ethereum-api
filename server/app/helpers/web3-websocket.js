const connections = require('../helpers/connections.js');
const network = connections.network;
const websocketUrl = connections.websocketUrl;
const Web3 = require('web3');
var BigNumber = require('bignumber.js');//handles web3 balances

// websocket
const WebSocket = require('ws');

var web3Provider;
var web3;//instance

// Initialize web3 and set the provider to the testRPC.
if (process.env.WEBSOCKET_URL){
  web3Provider = new Web3.providers.WebsocketProvider(process.env.WEBSOCKET_URL);
} else {
  web3Provider = new Web3.providers.WebsocketProvider(websocketUrl);
}
web3 = new Web3(web3Provider);


/**
 * New Custom Websocket Server to serve clients
 * IMPORTANT: experimental
 */

// const wssBlock = new WebSocket.Server({ port: 8081 });
// wssBlock.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) {
//     console.log('message form client: ', message);
//     ws.send(`send client message back to client : ${message}`)
//   });

//   setInterval(
//     () => ws.send(`test websocket ${Date.now()}`),
//     3000
//   )
// });


/**
 * Object holds all parameters and functions needed to communicate by the API
 */
Web3Object = {
  web3Provider: web3Provider,
  web3Socket: web3,
  BigNumber: BigNumber,
  network: network,
  WebSocket: WebSocket,
}

module.exports = Web3Object;