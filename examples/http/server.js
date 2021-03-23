'use strict';



const Module = require('module');
const originalRequire = Module.prototype.require;


const set = new WeakSet();
let lastRequire = null;
Module.prototype.require = function (id) {
  if (false && !id.startsWith('.')) {
    console.error(
      'MOD REQ',
      this.filename
        .replace(/(.*)opentelemetry-js\/examples\/http/, '.')
        .replace(/(.*)projects\/opentelemetry-js\//, '/')
      , '>>', id);
  }
  
  const originalReturn = originalRequire.call(this, id);
  
  if (lastRequire !== Module.prototype.require) {
    lastRequire = Module.prototype.require;
    console.error('## require has changed!');
  }
  if (!set.has(originalReturn)) {
    // console.error('REQ', this.filename, '==>', id);
    set.add(originalReturn);
  }
  
  return originalReturn;
};
// console.log('before', originalRequire.toString(), require === originalRequire);

const api = require('@opentelemetry/api');
const tracer = require('./tracer')('example-http-server');
console.log(require('@opentelemetry/plugin-http'));
// eslint-disable-next-line import/order
const http = require('http');

console.log('NODE_PATH', process.env.NODE_PATH);
// console.log('later', Module.prototype.require.toString(), Module.prototype.require === originalRequire);

/** Starts a HTTP server that receives requests on sample server port. */
function startServer(port) {
  // Creates a server
  const server = http.createServer(handleRequest);
  // Starts the server
  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Node HTTP listening on ${port}`);
  });
}

/** A function which handles requests and send response. */
function handleRequest(request, response) {
  console.log('context', api?.context);
  console.log('active context', api?.context?.active());
  const currentSpan = api.getSpan(api.context.active());
  // display traceid in the terminal
  console.log(`traceid: ${currentSpan?.context().traceId}`);
  const span = tracer.startSpan('handleRequest', {
    kind: 1, // server
    attributes: { key: 'value' },
  });
  // Annotate our span to capture metadata about the operation
  span.addEvent('invoking handleRequest');
  try {
    const body = [];
    request.on('error', (err) => console.log(err));
    request.on('data', (chunk) => body.push(chunk));
    request.on('end', () => {
      // deliberately sleeping to mock some action.
      setTimeout(() => {
        span.end();
        response.end('Hello World!');
      }, 2000);
    });
  } catch (err) {
    console.error(err);
    span.end();
  }
}

startServer(8080);
