# API Documentation

- This API provides functionality for interacting with the terminal.
- It allows users to execute commands and retrieve the output.

## Usage:

- 1.  Import the API module into your project.
- 2.  Create an instance of the Terminal class.
- 3.  Use the `executeCommand` method to execute terminal commands.
- 4.  Retrieve the output using the `getOutput` method.

### Example:

```
  node koders.js mentors ls

```

- const terminal = new Terminal();
- terminal.executeCommand('ls');
- const output = terminal.getOutput();
- console.log(output);
