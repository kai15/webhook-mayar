const https = require('http');
const port = process.env.PORT || 5001

https.createServer(async (req, res) => {
    console.log("here?")
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    // res.setEncoding('utf8');
    const url = req.url;

    console.log("url; =>", url, req);

    if (url?.includes("mayar")) {
        res.end("ok");
        return;
    }
}).listen(port);
console.log(`listen ${port}`);
