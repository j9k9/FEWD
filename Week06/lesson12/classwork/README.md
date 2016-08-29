##Lesson 12 Classwork

ARRAYS

Arrays are javascript equivalent of an ordered list.

declaring arrays:
var myArr = [];

array can contain  strings, numbers, booleans etc

mrArr = [hello, 12.3, false];

usually good to store array on a variable.

so var aRandomName = [hello, 12.3, false];

array items separated by commas.

A space in an array is like a placeholder (empty space on a bookshelf).

aRandomName.length will return the length (how many list items there are in it)

-------------------

Arrays are zero indexed. ie: counting starts from zero.

var fruit =["kiwi", "lime", "banana", "apple"]

fruit [0] returns "kiwi"

["kiwi", "lime", "banana", "apple"] [0] also returns "kiwi"

fruit.length returns 4

-------------------------


ARRAYS INDEXING:

If you need to update an array you do the following:

fruit[1] = "strawberry";

will return "kiwi", "strawberry", "banana", "apple"

can overwrite arrays.

var fruit =["kiwi", "lime", "banana", "apple"]

var numbers = [1,2,3]

numbers = fruit

numbers will return "kiwi", "lime", "banana", "apple"

to access last item in an array when you don't know the length of the array:

fruit[fruit.length -  1]

-----------------------------

ITERATING OVER ARRAYS

var fruits =["kiwi", "lime", "banana", "apple"]

ForEach:

function modify(element, index){
  console.log(element + "is at position at" + index);
};

fruit.forEach(modify);

this will call the function on each element of fruit.

or you can write like this:

fruits.forEach(function (element,index){

  console.log(element,index);

  });


.map is more useful.

difference between the two:

foreach iterates over a list and applies some operation with side effects to each list member (such as saving each one to the database for example)

map iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (such as converting a list of strings to uppercase)
