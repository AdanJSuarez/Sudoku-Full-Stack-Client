/** 
 * Adan J. Suarez
 * adanjsuarez@gmail.com
 * Full Stack Home-Project 
 */

const express = require('express');
const path = require('path');
const app = express();

console.log('---Server running at localhost:9000---')
app.use(express.static(path.join(__dirname, 'build')));

app.get('/sudoku/board', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
