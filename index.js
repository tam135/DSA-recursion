//Sum of array
const sumOf = function(list) {
  //base case
  if(list.length === 1) {
    return list[0]
  }
  return list[0] + sumOf(list.slice(1))
}

let list = [2,  4, 6, 8, 10]
console.log(sumOf(list))  

// counting sheep
function countSheep(number) {
  //base case
  if(number === 0) {
    return console.log('All sheep jumped over the fence')
  } else {
    console.log(number + " " + ' Another sheep jumps over the fence')
     newNumber = number - 1
     countSheep(newNumber)
  }
}
countSheep(5) 

//2. Power calculator 
const powerCalculator = function(x, n) {
  if(n === 1) {
    return x
  } 
  return x * powerCalculator(x, n-1)
}
powerCalculator(4,2) 

//Reverse a String
const reverseString = function(str) {
  if(str === "") {
    return ""
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('Hello')


//4.nth triangular number
const triNumber = function(n) {
  if(n <= 1) {
    return n
  } else {
    return n + triNumber(n-1)
  }

triNumber(3)
} 

//5. String splitter
const stringSplitter = function() {

}

//6. fibonacci sequence
const fib = function(num) {
  if(num < 2) {
    return num
  }
  return fib(num-1) + fib(num-2)
}


//7. factorial
const factorial = function(x) {
  if(x === 1) {
    return x
  } else {
    return x * factorial(x-1)
  }
}
factorial(5) 

//find way out of a maze
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function escape(maze) {
  
  this.maze = maze;

  this.traverse = function(column, row) {
    console.log('D')
      if(this.maze[column][row] == 2) {
          console.log("We solved the maze at (" + column + ", " + row + ")");
      } else if(this.maze[column][row] == 1) {
          console.log("At valid position (" + column + ", " + row + ")");
          this.maze[column][row] = 9;
          if(column < this.maze.length - 1) {
            console.log('R')
              this.traverse(column + 1, row);
          }
          if(row < this.maze[column].length - 1) {
            console.log('D')
              this.traverse(column, row + 1);
          }
          if(column > 0) {
            console.log('L')
              this.traverse(column - 1, row);
          }
          if(row > 0) {
            console.log('U')
              this.traverse(column, row - 1);
          }
      }
  };

};
escape(mySmallMaze) 

//anagrams
function anagrams(prefix, str) {
  if (str.length <= 1) {
      console.log(prefix + str);
  }
  else {
      for (let i = 0; i < str.length; i++) {
          const current = str.substring(i, i + 1);
          const before = str.substring(0, i);
          const after = str.substring(i + 1);
          anagrams(prefix + current, before + after);
      }
  }
};

anagrams('', 'east') 

//Organization chart
//Write a recursive function that prints the following organization chart.
//Your output should be as shown below with proper indentation to show the hierarchy.
//You may store the org chart in an object and send that as an input to your program.

const org = [
  {id: 'Zuckerberg', boss: null},
  {id: 'Schroepfer', boss: 'Zuckerberg'},
  {id: 'Schrage', boss: 'Zuckerberg'},
  {id: 'Sandberg', boss: 'Zuckerberg'},
  {id: 'Bosworth', boss:'Schroepfer' },
  {id: 'Zhao', boss:'Schroepfer' },
  {id: 'Steve', boss:'Bosworth' },
  {id: 'Kyle', boss:'Bosworth' },
  {id: 'Andra', boss:'Bosworth' },
  {id: 'Richie', boss: 'Zhao'},
  {id: 'Sofia', boss: 'Zhao'},
  {id: 'Jen', boss: 'Zhao'},
  {id: 'VanDyck', boss:'Schrage' },
  {id: 'Swain', boss:'Schrage' },
  {id: 'Sabrina', boss:'VanDyck' },
  {id: 'Michelle', boss:'VanDyck' },
  {id: 'Josh', boss:'VanDyck' },
  {id: 'Blanch', boss:'Swain' },
  {id: 'Tom', boss:'Swain' },
  {id: 'Joe', boss:'Swain' },
  {id: 'Goler', boss:'Sandberg' },
  {id: 'Hernandez', boss:'Sandberg' },
  {id: 'Moissinac', boss:'Sandberg' },
  {id: 'Kelley', boss:'Sandberg' },
  {id: 'Eddie', boss:'Goler' },
  {id: 'Julie', boss:'Goler' },
  {id: 'Annie', boss:'Goler' },
  {id: 'Rowi', boss:'Hernandez'},
  {id: 'Inga', boss:'Hernandez'},
  {id: 'Morgan', boss:'Hernandez'},
  {id: 'Amy', boss:'Moissinac'},
  {id: 'Chuck', boss:'Moissinac'},
  {id: 'Vinni', boss:'Moissinac'},
  {id: 'Eric', boss:'Kelley'},
  {id: 'Ana', boss:'Kelley'},
  {id: 'Wes', boss:'Kelley'},
];

function organize(org, boss) {
  let node = {};

  org
    .filter(item => item.boss === boss)
    .forEach(item => node[item.id] = organize(org, item.id));
  return node;  
}

console.log(JSON.stringify(organize(org, null))); 

//binary number
function binary(num) {
  if (num === 0) {
    return "0";
  }
  const dividedNum = Math.floor(num / 2);
  const remainder = num % 2;
  if (dividedNum === 0) {
    return `${remainder}`;
  }
  return binary(dividedNum) + remainder.toString();
}

console.log(binary(25));
