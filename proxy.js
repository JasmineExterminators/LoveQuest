const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
    // Set CORS headers here
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    proxy.web(req, res, {
        target: 'https://api.perplexity.ai', // Target API
        changeOrigin: true, // Important for CORS
        secure: true          // If your target is HTTPS
    }, (err) => {
        console.error('Proxy error:', err);
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });
        res.end('Proxy error');
    });
});

const port = 8080; // Or any other port you prefer
server.listen(port, () => {
    console.log(`Proxy server listening on port ${port}`);
});
