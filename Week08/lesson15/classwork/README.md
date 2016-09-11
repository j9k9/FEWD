##Lesson 15 Classwork

FORMS:
Forms are bridge between front and back-end

takes user input and takes into server.
Sever responds with info back.

Forms tell the page:
where to send data
how to send data
what is being sent (need to say what language you are sending in)

API is an entryway to be able to get data from a server.

Form tag.

<form> </form>

attributes:

method: post,get,put,delete (default is "get")
action: url to send data to (may be internal or external URL)
enctype: Means encoding type. multipart/form-data if uploading files, otherwise no need to specify.

attributes go into the opening tag like all their html attributes.

Methods meanings:
POST means you are sending off data to the server
GET means you are getting info off of the server
PUT is used for updating. eg: updating customer database (updating existing record like a customer credit card or address)
DELETE deletes something that already exists on server

INPUTS
<form>  Inputs get submitted inside form tag. They are self closing </form>

TYPE: default is text, but many more likes password or email address  or checkbox etc
NAME: name of the input which is submitted to server, V IMPORTANT!
PLACEHOLDER
VALUE: Initial value for that input. This attribute is optional except when the input has type of radio or checkbox.

Good website: http://www.mobileinputtypes.com/

BUTTONS:
Button submits it's parent form: <input type="submit" value ="submit" />
or:
<button>submit</button> (button tag can also exist outside of a form)

default type for button is submit.

SELECT AND OPTION
<select>
<option value = "firstoption">
<option value = "secondoption">
 </select>

 LABELS
 if you tap on the word "name" then the focus will be on the input box. Good for mobile users.

 <label>name
 <input type="text"/>
</label>

or:

<label for="yourName">Name</label>
<input type = "text" id="yourName"/>

any styling on label won't affect input.

STYLING:
Ball-ache. Can find form styling libraries.

JAVASCRIPT OBJECTS:
Creating an object:
var x = new Object ();

or easier way:
var y = {};

similar to arrays.

can declare and assign values in one go.

var ages = {
  "james: 26,
  "janine": 28,
  "jenna": 30  
}

or:
var ages ={};
  ages.james = 26;

.notation will make james read as a string.

or:
ages["james"] = 26;
better if you need to look for a variable inside the square brackets.

Objects have "keys" (properties) and values.

Keys are james, janine and jenna. Values are 26, 28 and 30
 
You can store many keys inside an object, including other objects.
