var group1 = [22, 3, 23, 17, 9, 18, 14, 11, 5, 25, 15, 10, 6, 19, 21, 4, 2, 13, 7, 16, 24, 12, 20, 1, 8];
var group2 = [32, 29, 28, 47, 50, 43, 40, 45, 37, 46, 27, 49, 35, 26, 34, 44, 48, 42, 33, 41, 38, 31, 30, 36, 39];
var group3 = ['sadly', 'roast', 'Loopy', 'burger', 'gavel', 'lure', 'postpone', 'frontal', 'Gavel', 'lavender'];


// Your code goes here! Hooray!
function bubblesort(array) {  
    var newarray = array.slice();
    var length = newarray.length;
    for (var i = (length - 1); i >= 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            if (newarray[j] < newarray[j - 1]) {
                var tmp = newarray[j];
                newarray[j] = newarray[j - 1];
                newarray[j - 1] = tmp;
            }
        }
    }
    return newarray;
}
console.log(bubblesort(group1));

function quicksort(array) {
    if (array.length == 0) return [];
  
    var left = [], right = [], pivot = array[0];
  
    for (var i = 1; i < array.length; i++) {
        if(array[i] < pivot)
            left.push(array[i])
        else
            right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort(group3));


//Sources Used: http://stackoverflow.com/questions/9592740/how-can-you-sort-an-array-without-mutating-the-original-array
//http://codingmiles.com/sorting-algorithms-bubble-sort-using-javascript/
//http://www.codexpedia.com/javascript/javascript-quick-sort-implementation/