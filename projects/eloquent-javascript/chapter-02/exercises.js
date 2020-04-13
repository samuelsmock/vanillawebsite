
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {        //prints a number of hashtags separated by new lines
  var num = '#';                    // each new line having one more
  for(var i = 0; i < number; i++){
    console.log(num);               //prints num, which increases each time the loop is called
    num += '#';
}
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {           //prints numbers in range replacing numbers divisile by 
                                // 3 w Fizz, 5 by Buzz, divisible by both "FizzBuzz"
    // YOUR CODE GOES BELOW HERE //
    for(var i = start; i<=end; i++){        //loop to print the indexes
        if (i%3 ==0 && i%5 ==0){
            console.log("fizzbuzz");
        }else if(i%3 == 0){
            console.log("fizz");        //modulus zero === divisability
        }else if (i%5 == 0){
            console.log("buzz");
        }else{
            console.log(i);
        }
        
    }


    // YOUR CODE GOES ABOVE HERE //
}
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {   //prints a chessbord of any size
  var evenLine = '';   //initialize evenlin
  var oddLine  = '';   //initialize odd line
  var chessBoard = ''; // initialize chessboard

  for (var i = 0; i < number; i++){       //first fill 
    evenLine += (i%2 === 0 ? '#' : ' ');
    oddLine  += (i%2 === 0 ? ' ' : '#');
  }

  for (var j = 0; j < number ; j++){
    chessBoard += (j%2 === 1 ?  evenLine :  oddLine)
      chessBoard += '\n';
  }

  console.log(chessBoard);
  
}
//console.log(drawChessboard(12));

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}





