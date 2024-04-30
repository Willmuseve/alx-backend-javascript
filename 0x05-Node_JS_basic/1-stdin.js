// Takes user input name from the command line and returns it

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    process.stdout.write(`Your name is: ${data}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
