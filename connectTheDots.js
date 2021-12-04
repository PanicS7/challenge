/* 
For best experience run code with "code runner" or similar extension, 
on vscode, go to extensions, look for code runner, install, restart vscode, start with "CTRL + ALT + N"
*/


function connectTheDots(input) {

    // Sort all letters from input with alphabetical order
    let dots = [...input.replace(/\s/g, "")];
    dots = [...dots.sort().join("")];

    //  Convert input to multi array, where each array have row with letters and space
    let table = input.split("\n").map(row => row.split(""));
 
    // Find row and column of each letter
    let coordinates = dots.map(dot => {
        const sizeOfRow = table[0].length + 1;
        const position = input.indexOf(dot);
        const row = Math.floor(position / sizeOfRow);
        let column = null;
        for (let i=0; i < table.length; i++) {
            if (table[i].indexOf(dot) >= 0) {
                column = table[i].indexOf(dot);
            }
        }
        return [column,row];
    });

    // Draw lines
    coordinates.map(dotCoord => {
        if (coordinates.indexOf(dotCoord) < coordinates.length - 1) {
            let char = "*";
            let current = dotCoord;
            let next = coordinates[coordinates.indexOf(dotCoord) + 1];
            let [col1, row1] = current;
            let [col2, row2] = next;
            
            // Find direction, 1 increase index, -1 decrease index, 0 stay
            let rowD = row2 - row1 > 0 ? 1 : row2 - row1 < 0 ? -1 : 0;
            let colD = col2 - col1 > 0 ? 1 : col2 - col1 < 0 ? -1 : 0;
            
            // draw
            while (row1 != row2 || col1 != col2) {
                table[row1][col1] = char;
                row1 += rowD;
                col1 += colD;    
            }     
            table[row1][col1] = char;
            
        }
        
    })


    return table.map(row => row.join('')).join('\n');

}

let test1 = "a       b\ne        \n         \nd       c";
let test2 = "   a   \n  e    \n       \nd     b\n       \n       \n   c   ";
//let test3 = "a \n  \n  b";
//let test4 = "a\n \n \n \nb";

console.log(connectTheDots(test1));
console.log(connectTheDots(test2));
//console.log(connectTheDots(test3));
//console.log(connectTheDots(test4));