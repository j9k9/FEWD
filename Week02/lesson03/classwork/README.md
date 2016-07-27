##Lesson 03 Classwork

meta tags

<meta charset=“utf-8”>
<meta name=“description” content=“ keywords here”>
<meta name=“keywords” content=“ keywords here”>

Important for SEO

Always use alt tags on an image

Hex codes are fine to use usually

rgba is good for opacity

-------------------------------------

Box model:
Everything is usually a block element by default
<div> , <header>, <p>

Textual content is inline apart from p. <p> is a container of text
inline elements DO NOT have adjustable width and height

Block elements stack on each other


Width = CONTENT + PADDING-LEFT + PADDING-RIGHT + BORDER-LEFT + BORDER-RIGHT.

margin DOES NOT affect the width measurement

Same for height.

-------------------------------------

Make calculations for box model simpler:
* {
  -moz-box-sizing: border-box;
  box-sizing: border-box;  
}

The default is content-box. which means padding and margin are added on to width after. Makes layouts more confusing as u need to do the maths.

THIS MAKES WIDTH AND HEIGHT INCLUSIVE OF PADDING AND BORDER - WAY EASIER!

-------------------------------------
INLINE-BLOCK

Inline-block lets you set width and height but let other elements exist next door to them.

-------------------------------------

Browser prefixes:
CHROME AND SAFARI IS -WEBKIT
FIREFOX is -moz

Border syntax:
border: 1px solid black;

width, then style solid/dotted and then the colour

-------------------------------------

Nested Selectors

Tags next to each other. ie: p em will target every single em nested inside a p tag
very specific, will take precedence. even if a more general style further down is written.

Does not need to be a direct descendent. could be blockquote p em.
blockquote em would target every em inside the blockquote. Not just children but also grandchildren!
