const prompt = require('prompt');

prompt.start();

prompt.get(['playerO'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  });



// let personO
// let personX


// grid A B C
//  1
//  2
//  3

// winning combos
// [ ['A1', 'B1', 'C1'],
//   ['A2', 'B2', 'C2'],
//   ['A3', 'B3', 'C3'],
//   ['A1', 'A2', 'A3'],
//   ['B1', 'B2', 'B3'],
//   ['B1', 'B2', 'B3'],
//   ['A1', 'B2', 'C3'],
//   ['A3', 'B2', 'C1'] ]



// use prompt to get user input for where to place X/O
// record each users inputs win if at any ime it matches all the inputs in a winning combo
