##Lesson 04 Classwork

never make a class name with two words. Browser interprets as two classes

for descriptive classes use hyphens

pseudo classes helpful to stop writing loads of classes.
can wrap in outer element

in code example
div.message:first-child targets the top div.

Try and reuse attributes that elements have in common, give an element more than one class.

class that comes after overrides files.


FLOATS
float aligns to far right.
inline-block makes things sit side by side.

floating is done within context of the parent

float right will float list of items right to left in browser - ie: back to front.  

display each box as inline-block to make order more intuitive.
wrap in a parent container and float the container right.

margin: 0 auto;
centers a div

CLEARFIX
floats can affect how the parent looks, collapses parent's height, parent has zero height
floats come out of stacking order, floats on it's own.

Need to have a class called clearfix in all css files. Give the class "clearfix" to the parent that is affected by floats.

.clearfix:before, .clearfix:after: {
  content: "";
  display: table;
}

.clearfix:after{
  clear: both;
}

GOLDEN RULE: when you float stuff, wrap it in a parent div and clearfix it.
