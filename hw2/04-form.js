const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

// from Caterina fullstack-examples
app.use(
  express.urlencoded({
    extended: true,
  })
);

// main route --> /
// (redirect to form)
app.get('/', (req, res) => {
  res.status(200);
  res.redirect('/form');
});

// form route --> /form
app.get('/form', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.write('<form action="/submit" method="post">');

  res.write('<label for="name">Name: </label>');
  res.write('<input type="text" name="name" id="name"><br />');

  res.write('<label for="email">Email: </label>');
  res.write('<input type="email" name="email" id="email"><br />');

  res.write('<label for="comments">Comments: </label>');
  res.write('<textarea name="comments" id="comments"></textarea><br />');

  res.write('<label for="newsletter">Newsletter:</label>');
  res.write(
    '<input type="checkbox" name="newsletter" id="newsletter" value="Yes, sign me up for the newsletter."><br />'
  );

  res.write('<button type="submit">Submit</button>');

  res.write('</form><body></html>');
  res.end();
});

// submit route --> /submit
app.post('/submit', (req, res) => {
  const { name, email, comments, newsletter } = req.body;

  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.write(`<div>Name: ${name}</div>`);
  res.write(`<div>Email: ${email}</div>`);
  res.write(`<div>Comments: ${comments || 'n/a'}</div>`);
  res.write(`<div>Newsletter: ${newsletter || 'No, thank you.'}</div>`);
  res.end();
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
