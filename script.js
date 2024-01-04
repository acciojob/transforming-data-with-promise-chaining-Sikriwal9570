//your JS code here. If required.
// script.js
document.getElementById('btn').addEventListener('click', () => {
    const userInput = document.getElementById('ip').value;

    // Create a promise that resolves after 2 seconds with the user input
    const initialPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(userInput);
        }, 2000);
    });

    // Chain promises to perform operations
    initialPromise
        .then(number => {
            // Print the intermediate result
            updateOutput(`Result: ${number}`);

            // Create a promise that multiplies the number by 2 and resolves after 1 second
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(number * 2);
                }, 1000);
            });
        })
        .then(result => {
            // Print the intermediate result
            updateOutput(`Result: ${result}`);

            // Create a promise that subtracts 3 from the result and resolves after 1 second
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(result - 3);
                }, 1000);
            });
        })
        .then(result => {
            // Print the intermediate result
            updateOutput(`Result: ${result}`);

            // Create a promise that divides the result by 2 and resolves after 1 second
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(result / 2);
                }, 1000);
            });
        })
        .then(result => {
            // Print the intermediate result
            updateOutput(`Result: ${result}`);

            // Create a promise that adds 10 to the result and resolves after 1 second
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(result + 10);
                }, 1000);
            });
        })
        .then(finalResult => {
            // Update the text content of the output div with the final result
            updateOutput(`Final Result: ${finalResult}`);
        })
        .catch(error => {
            // Handle errors or rejections
            console.error('Error:', error);
            updateOutput('An error occurred.');
        });
});

// Function to update the text content of the output div
function updateOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = message;
}

