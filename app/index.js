//webservice 
const express = require('express');
// json parser
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const P2pServer = require('./p2p-server');
const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc);


//app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/blocks', (req,res) => {
    res.json(bc.chain);
});


app.post('/mine', (req,res) => {
    //console.log(req);
    const block = bc.addBlock(req.body.data);
    console.log(`New block added : ${block.toString()}`);
    res.redirect('/blocks');
});


app.listen(HTTP_PORT, () => console.log(`Litesning on port ${HTTP_PORT}`));
p2pServer.listen();
