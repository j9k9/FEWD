##Lesson 08 Classwork

Javascript:

Was a scripting language
like an actor reading from script and being told how to behave - hence term scripting.

But now you can write it on server so not really relevent

VARIABLES:

Tell program to remember values to use for later on.

Saving a value to memory is called assignment

Entity used to store value is called a variable


-----

Declare variable = creating a variable
assignment is assigning a value to a variable

Declaration: var age;
Assignment  age = 21;
Both at the same time var age = 21;

end declarations and assignments or shorthand version ends with ";"

Accessing variables:

var age =21

accessing would mean using it: console.log(age);
this would display the age in the console.

console gives feedback, can see if JS code is correct

Variables an be re-assigned.
assignment: ver name = "Jo";
re-assignment name = "Amir";

Variable naming: Use camelCase.
BEST PRACTICE TO ALWAYS USE IT!

What can you store in variables???
Everything has a data type:

Different types of data are:

String = text

int, float = numbers

Integers are whole numbers like 5
Floats are decimal place numbers like 5.2 or 5.0

Boolean = true or false

-----

STRINGS

Strings are surrounded by quotes try and keep it consistent with double quotes.

Double and single quoted strings.
Escaping:
"They \"purchased\" it"
the slashes say treat the next character as just test.
another example:
'It\'s a beautiful day'


conversion of strings to numbers:
var intString = "4"; a string with text value of 4, not an integer

var intNumber = parseInt(intString, 10);
This will tell the computer to base the numbers on a decimal system. this is the default anyway but good to define also.

var floatString = "3.14";
var floatNumber = parseFloat(floatString);

Conversion of numbers to strings:
var number = 4;
number.toString(); => "4"

or

number + ""; => "4"

+ Addition
- Subtraction
* Multiplication
/ Division
% Modulus (gives you a remainder so 10%6=4)

LOOK AT ASCII CHART FOR COMPARING STRINGS.

-----

CONDITIONALS
Lets you make decisions, only execute code if the statement is true.

COMPARISONS
10 === 10 true
10 === 5 false
"hi" === "hi" true

== is more flexible
10 == "10" is true

=== is equality of value AND data types

= one equal sign is only for assignment

LOGICAL OPERATORS
== EQUAL TO
=== exactly equal to value and types
!= is not equal
!== is not equal either in value or type
> greater than
< less than
>= greater than or equal to
<= less than or equal to


CONDITIONAL SYNTAX

if (condition is true) {
  //do stuff
}


if (condition is true) {
  //do stuff
} else {
  //do other stuff
}

multiple conditions.

if (name ==="GA" && password === "yellowpencil") {
  //allow access to internet
}

or conditions (pipes)

if (day === "Tuesday" || day ==="Thursday") {
  //we have class today
}
