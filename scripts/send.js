 const WebSocket = require('ws');
 const ws = new WebSocket('ws://127.0.0.1:9888');

 ws.on('open', function open() {


   ws.send('serverrefresh');
   ws.close();
 });