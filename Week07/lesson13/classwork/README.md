##Lesson 13 Classwork

RESPONSIVE CSS

5 media breakpoints.

mobile portrait
mobile landscape
ipad portrait
ipad landscape
desktop

 @media (min-width: 650px){
   css here will be applicable to screens 650px and wider.
 }

 max width shouldn't be needed if you go from mobile first.

 standard media queries

 320px portrait phone
 480px landscape phone
 650px portrait tablet
 940px landscape tablet / laptop
 1200px desktop

 make default css the 320px min-width (mobile first)

 need to put this into head of any website you want to be responsive to cover old mobile devices:

 <meta name = "viewport" content ="width=device-width, initial-scale=1">

 The initial-scale 1 will cover for retina screens

 css specificity:


 IS ICE

 Going from most to least specific:

 Inline Styles
 Style tag
 IDs
 Classes
 Elements
