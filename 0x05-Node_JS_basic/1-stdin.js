// Display initial message

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// A function to handle input
process.stdin.on('data', function(data) {
    // Extract the input and remove trailing newline character
    const input = data.toString().trim();

    // Display the user's name
    console.log('Your name is:', input);
    
    // Check if the input is "exit" to end the program
    if (input.toLowerCase() === 'exit') {
        console.log('This important software is now closing');
        // End the process
        process.exit();
    }
    
    // Prompt for another input
    process.stdout.write('Welcome to Holberton School, what is your name?\n');
});

// Handle program termination
process.on('exit', function() {
    console.log('This important software is now closing');
});
