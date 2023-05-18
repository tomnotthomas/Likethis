# Likethis

LikeThis
A simple npm library that provides an intuitive function for creating short sentences about who liked a post, status, or any object that can be 'liked'.

Features
Handles the case where nobody liked it
Lists up to two people who liked it
For more than two people, it lists two people and indicates how many others liked it.
Installation
To install this package, use the following command:

bash
Copy code
npm install likethis
Usage
Here's a simple example of how to use the likeThis function.

javascript
Copy code
const likeThis = require('likethis');

const names = ['John', 'Jane', 'Sam', 'Alice', 'Bob'];
console.log(likeThis(names));
// Outputs: 'John, Jane and 3 others like this'
Functionality
The likeThis function takes an array of names as input, which represents the people who liked an object. Depending on the number of people who liked it, the function returns a string with a different format.

If nobody liked it, it returns 'no one likes this'.
If one person liked it, it returns '[name] likes this'.
If two people liked it, it returns '[name1] and [name2] like this'.
If three people liked it, it returns '[name1], [name2] and [name3] like this'.
If more than three people liked it, it returns '[name1], [name2] and [number of others] others like this'.
Contributing
If you want to contribute to this library, feel free to open an issue or submit a pull request.

