/* *******Difference Between Null & Undefined ***********


A variable is said to be ‘undefined’ if it has been declared, but no value has been given to it. Contrary to this, 
‘null’ is a value that can be assigned to a variable and represents ‘no value’. Therefore, ‘undefined’ is a variable
type whereas ‘null’ is an object value.

‘Null’ in JavaScript

‘Null’ is a keyword in JavaScript that signifies ‘no value’ or nonexistence of any value. If you wish to shred a variable off its assigned value,
you can simply assign ‘null’ to it. Besides this, like any other object, it is never implicitly assigned to a variable by JavaScript.
An example of explicit null assignment is –


var some_item= null;
console.log(some_item)
Upon execution, the code will print null.

‘Undefined’ in JavaScript

‘Undefined’ is a global variable that JavaScript creates at run time. This global variable is assigned to an object in one of the
following cases –

1. Declared but not defined –
JavaScript assigns ‘undefined’ to any object that has been declared but not initialized or defined. In other words, in a case where
no value has been explicitly assigned to the variable, JavaScript calls it ‘undefined’.

2. Array index or object property that does not exist.

3. A function parameter that has not been supplied.

4. The return value of functions that have to but don’t return a value.

An illustration of this assignment is shown in the following –


var item;
console.log(item)
Upon execution, the code will print undefined.

Difference in Type –  

‘Null’ is an object with a valid value, no properties, is non-mutable, and only a single instance of the same exists in the system
at all times. In case you wish to verify the object nature of ‘null’, you can use the ‘typeof’ operator. The use of the same will 
give the output as ‘object’. However, if you use the ‘typeof’ operator on an object that belongs to one of the points mentioned in
the ‘undefined’ list, you will get the object type as ‘undefined’.

Conversion to Primitive Types – 

A major difference between ‘null’ and ‘undefined’ is in the way they are converted to primitive types. When you perform arithmetic
conversion on ‘null’, the value determined is 0. This conversion can be verified using the following code snippet.


var v1= 5+ null;
console.log(v1)
Upon execution, this output of this code will print 5.
However, ‘undefined’ does not carry out any such conversion. If you try to add ‘undefined’ to a numeral, you will get NaN or 
Not-a-Number. The following code snippet illustrates this facet of ‘undefined’.


var v2= 5+ undefined;
console.log(v2)
Upon execution, the code will print NaN.*/

