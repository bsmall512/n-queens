/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution; //fixme
  var board = new Board({n: n}); 

  function findRookSolution(board, startRow, rows) {
    //check our base case and return solution if necessary
      //base case is startRow and rows being equal
    if(startRow === rows){
      return solution = board.rows();
    }

  //Inside a for loop over columns
    for(var colIdx = 0; colIdx < rows; colIdx++){
      //toggle a piece
      board.togglePiece(startRow, colIdx);
       //check for conflict => no conflict
       if(!board.hasAnyRooksConflicts()){
          //recurse with startRow incremented
          var result = findRookSolution(board, startRow + 1, rows); 
          if(result){
            return result;
          }
       }
      //retoggle that same piece 
      board.togglePiece(startRow, colIdx);
    }
    
    findNRooksSolution(board, 0, n);

  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
