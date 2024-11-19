const fs = require('fs');

// Reading text asynchronously
fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
  if (err) {
    throw new Error('Error reading text');
  }

  console.log('File content:', data);

  // Writing back to the file
  fs.writeFile('./texts/read.txt', data, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File successfully written!');
    }
  });
});
