const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

// main route --> /
app.get('/', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('Express Routing Exercise');
});

// Add your code here

// suggestion from Eddie for 304
app.disable('etag');

// welcome route --> /welcome
app.get('/welcome', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>Welcome</h1>');
});

// redirect route --> /redirect
app.get('/redirect', (req, res) => {
  res.redirect(302, '/redirected');
});

// for the redirected route when redirect is done
app.get('/redirected', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>You have been redirected to the /redirected</h1>');
});

// cache route --> /cache
app.get('/cache', (req, res) => {
  res.status(200);
  res.set({
    'Content-Type': 'text/html',
    'Cache-Control': 'max-age=86400',
  });
  res.send('<h1>This resource was cached</h1>');
});

// cookie route --> /cookie
app.get('/cookie', (req, res) => {
  res.status(200);
  res.set({
    'Content-Type': 'text/plain',
    'Set-Cookie': 'hello=world',
  });
  res.send('cookies... yummm');
});

// handle 404
app.use((req, res) => {
  res.status(404);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>404: Page not found</h1>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
