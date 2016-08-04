##Lesson 05 Classwork

White space characters:
font-size:0 on the parent
The children have to have the font size added back in.
This gets around the inline-block problem where white space will mean a line break.

Don't have to put tags on same line to get layout to work.

inline-block more stable than floats.

up to personal preference which one you use.

Could use inline-blocks for layouts unless you need to align something to the right

Margins:
define margins on right hand side
pseudo selector to target last child
:last child will target the last child of that type and set far right margin to zero.

Selectors:
div a {} would target any <a> tag inside a div.
the SPACE means look inside the thing you just defined.
so div...look inside...find an <a>

div, section {}  
comma means "and this too" so it's a list of elements that would pick up that styling.

div.bunny {} would target all divs with class of bunny. Defines additional information about the element.
you can just write .bunny

or can chain classes:
div.bunny.turtle.last-column {}

this would target:
<div class="bunny turtle last-column">

div .bunny{} would target anything with a class of bunny inside a div.

div, .bunny{} would target all divs and all elements with a class of bunny

Difference between normalize and reset css:

Reset takes away all default browser styling
All text tags are the same size, from <h1> to <h6> and <p>

Normalize css makes some good defaults between browsers
Restyles with nice new styles.

Organising CSS in big projects
Could do one file for layout and then small css files for all other elements.
These  are then compiled into one css file tor reduce requests on loading.

YOU CAN USE DECIMAL PLACES FOR PIXEL MEASUREMENTS!
