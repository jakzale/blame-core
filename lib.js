window.LibD =
'/* *****************************************************************************\n' +
'Copyright (c) Microsoft Corporation. All rights reserved. \n' +
'Licensed under the Apache License, Version 2.0 (the "License"); you may not use\n' +
'this file except in compliance with the License. You may obtain a copy of the\n' +
'License at http://www.apache.org/licenses/LICENSE-2.0  \n' +
' \n' +
'THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n' +
'KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\n' +
'WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, \n' +
'MERCHANTABLITY OR NON-INFRINGEMENT. \n' +
' \n' +
'See the Apache Version 2.0 License for specific language governing permissions\n' +
'and limitations under the License.\n' +
'***************************************************************************** */\n' +
'\n' +
'/// <reference no-default-lib="true"/>\n' +
'\n' +
'/////////////////////////////\n' +
'/// ECMAScript APIs\n' +
'/////////////////////////////\n' +
'\n' +
'declare var NaN: number;\n' +
'declare var Infinity: number;\n' +
'\n' +
'/**\n' +
'  * Evaluates JavaScript code and executes it. \n' +
'  * @param x A String value that contains valid JavaScript code.\n' +
'  */\n' +
'declare function eval(x: string): any;\n' +
'\n' +
'/**\n' +
'  * Converts A string to an integer.\n' +
'  * @param s A string to convert into a number.\n' +
'  * @param radix A value between 2 and 36 that specifies the base of the number in numString. \n' +
'  * If this argument is not supplied, strings with a prefix of \'0x\' are considered hexadecimal.\n' +
'  * All other strings are considered decimal.\n' +
'  */\n' +
'declare function parseInt(s: string, radix?: number): number;\n' +
'\n' +
'/**\n' +
'  * Converts a string to a floating-point number. \n' +
'  * @param string A string that contains a floating-point number. \n' +
'  */\n' +
'declare function parseFloat(string: string): number;\n' +
'\n' +
'/**\n' +
'  * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). \n' +
'  * @param number A numeric value.\n' +
'  */\n' +
'declare function isNaN(number: number): boolean;\n' +
'\n' +
'/** \n' +
'  * Determines whether a supplied number is finite.\n' +
'  * @param number Any numeric value.\n' +
'  */\n' +
'declare function isFinite(number: number): boolean;\n' +
'\n' +
'/**\n' +
'  * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).\n' +
'  * @param encodedURI A value representing an encoded URI.\n' +
'  */\n' +
'declare function decodeURI(encodedURI: string): string;\n' +
'\n' +
'/**\n' +
'  * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).\n' +
'  * @param encodedURIComponent A value representing an encoded URI component.\n' +
'  */\n' +
'declare function decodeURIComponent(encodedURIComponent: string): string;\n' +
'\n' +
'/** \n' +
'  * Encodes a text string as a valid Uniform Resource Identifier (URI)\n' +
'  * @param uri A value representing an encoded URI.\n' +
'  */\n' +
'declare function encodeURI(uri: string): string;\n' +
'\n' +
'/**\n' +
'  * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).\n' +
'  * @param uriComponent A value representing an encoded URI component.\n' +
'  */\n' +
'declare function encodeURIComponent(uriComponent: string): string;\n' +
'\n' +
'interface PropertyDescriptor {\n' +
'    configurable?: boolean;\n' +
'    enumerable?: boolean;\n' +
'    value?: any;\n' +
'    writable?: boolean;\n' +
'    get? (): any;\n' +
'    set? (v: any): void;\n' +
'}\n' +
'\n' +
'interface PropertyDescriptorMap {\n' +
'    [s: string]: PropertyDescriptor;\n' +
'}\n' +
'\n' +
'interface Object {\n' +
'    /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */\n' +
'    constructor: Function;\n' +
'\n' +
'    /** Returns a string representation of an object. */\n' +
'    toString(): string;\n' +
'\n' +
'    /** Returns a date converted to a string using the current locale. */\n' +
'    toLocaleString(): string;\n' +
'\n' +
'    /** Returns the primitive value of the specified object. */\n' +
'    valueOf(): Object;\n' +
'\n' +
'    /**\n' +
'      * Determines whether an object has a property with the specified name. \n' +
'      * @param v A property name.\n' +
'      */\n' +
'    hasOwnProperty(v: string): boolean;\n' +
'\n' +
'    /**\n' +
'      * Determines whether an object exists in another object\'s prototype chain. \n' +
'      * @param v Another object whose prototype chain is to be checked.\n' +
'      */\n' +
'    isPrototypeOf(v: Object): boolean;\n' +
'\n' +
'    /** \n' +
'      * Determines whether a specified property is enumerable.\n' +
'      * @param v A property name.\n' +
'      */\n' +
'    propertyIsEnumerable(v: string): boolean;\n' +
'}\n' +
'\n' +
'/**\n' +
'  * Provides functionality common to all JavaScript objects.\n' +
'  */\n' +
'declare var Object: {\n' +
'    new (value?: any): Object;\n' +
'    (): any;\n' +
'    (value: any): any;\n' +
'\n' +
'    /** A reference to the prototype for a class of objects. */\n' +
'    prototype: Object;\n' +
'\n' +
'    /** \n' +
'      * Returns the prototype of an object. \n' +
'      * @param o The object that references the prototype.\n' +
'      */\n' +
'    getPrototypeOf(o: any): any;\n' +
'\n' +
'    /**\n' +
'      * Gets the own property descriptor of the specified object. \n' +
'      * An own property descriptor is one that is defined directly on the object and is not inherited from the object\'s prototype. \n' +
'      * @param o Object that contains the property.\n' +
'      * @param p Name of the property.\n' +
'    */\n' +
'    getOwnPropertyDescriptor(o: any, p: string): PropertyDescriptor;\n' +
'\n' +
'    /** \n' +
'      * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly \n' +
'      * on that object, and are not inherited from the object\'s prototype. The properties of an object include both fields (objects) and functions.\n' +
'      * @param o Object that contains the own properties.\n' +
'      */\n' +
'    getOwnPropertyNames(o: any): string[];\n' +
'\n' +
'    /** \n' +
'      * Creates an object that has the specified prototype, and that optionally contains specified properties.\n' +
'      * @param o Object to use as a prototype. May be null\n' +
'      * @param properties JavaScript object that contains one or more property descriptors. \n' +
'      */\n' +
'    create(o: any, properties?: PropertyDescriptorMap): any;\n' +
'\n' +
'    /**\n' +
'      * Adds a property to an object, or modifies attributes of an existing property. \n' +
'      * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.\n' +
'      * @param p The property name.\n' +
'      * @param attributes Descriptor for the property. It can be for a data property or an accessor property.\n' +
'      */\n' +
'    defineProperty(o: any, p: string, attributes: PropertyDescriptor): any;\n' +
'\n' +
'    /**\n' +
'      * Adds one or more properties to an object, and/or modifies attributes of existing properties. \n' +
'      * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.\n' +
'      * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.\n' +
'      */\n' +
'    defineProperties(o: any, properties: PropertyDescriptorMap): any;\n' +
'\n' +
'    /**\n' +
'      * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.\n' +
'      * @param o Object on which to lock the attributes. \n' +
'      */\n' +
'    seal(o: any): any;\n' +
'\n' +
'    /**\n' +
'      * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.\n' +
'      * @param o Object on which to lock the attributes.\n' +
'      */\n' +
'    freeze(o: any): any;\n' +
'\n' +
'    /**\n' +
'      * Prevents the addition of new properties to an object.\n' +
'      * @param o Object to make non-extensible. \n' +
'      */\n' +
'    preventExtensions(o: any): any;\n' +
'\n' +
'    /**\n' +
'      * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.\n' +
'      * @param o Object to test. \n' +
'      */\n' +
'    isSealed(o: any): boolean;\n' +
'\n' +
'    /**\n' +
'      * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.\n' +
'      * @param o Object to test.  \n' +
'      */\n' +
'    isFrozen(o: any): boolean;\n' +
'\n' +
'    /**\n' +
'      * Returns a value that indicates whether new properties can be added to an object.\n' +
'      * @param o Object to test. \n' +
'      */\n' +
'    isExtensible(o: any): boolean;\n' +
'\n' +
'    /**\n' +
'      * Returns the names of the enumerable properties and methods of an object.\n' +
'      * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\n' +
'      */\n' +
'    keys(o: any): string[];\n' +
'}\n' +
'\n' +
'/**\n' +
'  * Creates a new function.\n' +
'  */\n' +
'interface Function {\n' +
'    /**\n' +
'      * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.\n' +
'      * @param thisArg The object to be used as the this object.\n' +
'      * @param argArray A set of arguments to be passed to the function.\n' +
'      */\n' +
'    apply(thisArg: any, argArray?: any): any;\n' +
'\n' +
'    /**\n' +
'      * Calls a method of an object, substituting another object for the current object.\n' +
'      * @param thisArg The object to be used as the current object.\n' +
'      * @param argArray A list of arguments to be passed to the method.\n' +
'      */\n' +
'    call(thisArg: any, ...argArray: any[]): any;\n' +
'\n' +
'    /**\n' +
'      * For a given function, creates a bound function that has the same body as the original function. \n' +
'      * The this object of the bound function is associated with the specified object, and has the specified initial parameters.\n' +
'      * @param thisArg An object to which the this keyword can refer inside the new function.\n' +
'      * @param argArray A list of arguments to be passed to the new function.\n' +
'      */\n' +
'    bind(thisArg: any, ...argArray: any[]): any;\n' +
'\n' +
'    prototype: any;\n' +
'    length: number;\n' +
'\n' +
'    // Non-standard extensions\n' +
'    arguments: any;\n' +
'    caller: Function;\n' +
'}\n' +
'\n' +
'declare var Function: {\n' +
'    /** \n' +
'      * Creates a new function.\n' +
'      * @param args A list of arguments the function accepts.\n' +
'      */\n' +
'    new (...args: string[]): Function;\n' +
'    (...args: string[]): Function;\n' +
'    prototype: Function;\n' +
'}\n' +
'\n' +
'interface IArguments {\n' +
'    [index: number]: any;\n' +
'    length: number;\n' +
'    callee: Function;\n' +
'}\n' +
'\n' +
'interface String {\n' +
'    /** Returns a string representation of a string. */\n' +
'    toString(): string;\n' +
'\n' +
'    /**\n' +
'      * Returns the character at the specified index.\n' +
'      * @param pos The zero-based index of the desired character.\n' +
'      */\n' +
'    charAt(pos: number): string;\n' +
'\n' +
'    /** \n' +
'      * Returns the Unicode value of the character at the specified location.\n' +
'      * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n' +
'      */\n' +
'    charCodeAt(index: number): number;\n' +
'\n' +
'    /**\n' +
'      * Returns a string that contains the concatenation of two or more strings.\n' +
'      * @param strings The strings to append to the end of the string.  \n' +
'      */\n' +
'    concat(...strings: string[]): string;\n' +
'\n' +
'    /**\n' +
'      * Returns the position of the first occurrence of a substring. \n' +
'      * @param searchString The substring to search for in the string\n' +
'      * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.\n' +
'      */\n' +
'    indexOf(searchString: string, position?: number): number;\n' +
'\n' +
'    /**\n' +
'      * Returns the last occurrence of a substring in the string.\n' +
'      * @param searchString The substring to search for.\n' +
'      * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.\n' +
'      */\n' +
'    lastIndexOf(searchString: string, position?: number): number;\n' +
'\n' +
'    /**\n' +
'      * Determines whether two strings are equivalent in the current locale.\n' +
'      * @param that String to compare to target string\n' +
'      */\n' +
'    localeCompare(that: string): number;\n' +
'\n' +
'    /** \n' +
'      * Matches a string with a regular expression, and returns an array containing the results of that search.\n' +
'      * @param regexp A variable name or string literal containing the regular expression pattern and flags.\n' +
'      */\n' +
'    match(regexp: string): string[];\n' +
'\n' +
'    /** \n' +
'      * Matches a string with a regular expression, and returns an array containing the results of that search.\n' +
'      * @param regexp A regular expression object that contains the regular expression pattern and applicable flags. \n' +
'      */\n' +
'    match(regexp: RegExp): string[];\n' +
'\n' +
'    /**\n' +
'      * Replaces text in a string, using a regular expression or search string.\n' +
'      * @param searchValue A String object or string literal that represents the regular expression\n' +
'      * @param replaceValue A String object or string literal containing the text to replace for every successful match of rgExp in stringObj.\n' +
'      */\n' +
'    replace(searchValue: string, replaceValue: string): string;\n' +
'\n' +
'    /**\n' +
'      * Replaces text in a string, using a regular expression or search string.\n' +
'      * @param searchValue A String object or string literal that represents the regular expression\n' +
'      * @param replaceValue A function that returns the replacement text.\n' +
'      */\n' +
'    replace(searchValue: string, replaceValue: (substring: string, ...args: any[]) => string): string;\n' +
'\n' +
'    /**\n' +
'      * Replaces text in a string, using a regular expression or search string.\n' +
'      * @param searchValue A Regular Expression object containing the regular expression pattern and applicable flags\n' +
'      * @param replaceValue A String object or string literal containing the text to replace for every successful match of rgExp in stringObj.\n' +
'      */\n' +
'    replace(searchValue: RegExp, replaceValue: string): string;\n' +
'\n' +
'    /**\n' +
'      * Replaces text in a string, using a regular expression or search string.\n' +
'      * @param searchValue A Regular Expression object containing the regular expression pattern and applicable flags\n' +
'      * @param replaceValue A function that returns the replacement text.\n' +
'      */\n' +
'    replace(searchValue: RegExp, replaceValue: (substring: string, ...args: any[]) => string): string;\n' +
'\n' +
'    /**\n' +
'      * Finds the first substring match in a regular expression search.\n' +
'      * @param regexp The regular expression pattern and applicable flags. \n' +
'      */\n' +
'    search(regexp: string): number;\n' +
'\n' +
'    /**\n' +
'      * Finds the first substring match in a regular expression search.\n' +
'      * @param regexp The regular expression pattern and applicable flags. \n' +
'      */\n' +
'    search(regexp: RegExp): number;\n' +
'\n' +
'    /**\n' +
'      * Returns a section of a string.\n' +
'      * @param start The index to the beginning of the specified portion of stringObj. \n' +
'      * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. \n' +
'      * If this value is not specified, the substring continues to the end of stringObj.\n' +
'      */\n' +
'    slice(start?: number, end?: number): string;\n' +
'\n' +
'    /**\n' +
'      * Split a string into substrings using the specified separator and return them as an array.\n' +
'      * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. \n' +
'      * @param limit A value used to limit the number of elements returned in the array.\n' +
'      */\n' +
'    split(separator: string, limit?: number): string[];\n' +
'\n' +
'    /**\n' +
'      * Split a string into substrings using the specified separator and return them as an array.\n' +
'      * @param separator A Regular Express that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. \n' +
'      * @param limit A value used to limit the number of elements returned in the array.\n' +
'      */\n' +
'    split(separator: RegExp, limit?: number): string[];\n' +
'\n' +
'    /**\n' +
'      * Returns the substring at the specified location within a String object. \n' +
'      * @param start The zero-based index number indicating the beginning of the substring.\n' +
'      * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\n' +
'      * If end is omitted, the characters from start through the end of the original string are returned.\n' +
'      */\n' +
'    substring(start: number, end?: number): string;\n' +
'\n' +
'    /** Converts all the alphabetic characters in a string to lowercase. */\n' +
'    toLowerCase(): string;\n' +
'\n' +
'    /** Converts all alphabetic characters to lowercase, taking into account the host environment\'s current locale. */\n' +
'    toLocaleLowerCase(): string;\n' +
'\n' +
'    /** Converts all the alphabetic characters in a string to uppercase. */\n' +
'    toUpperCase(): string;\n' +
'\n' +
'    /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment\'s current locale. */\n' +
'    toLocaleUpperCase(): string;\n' +
'\n' +
'    /** Removes the leading and trailing white space and line terminator characters from a string. */\n' +
'    trim(): string;\n' +
'\n' +
'    /** Returns the length of a String object. */\n' +
'    length: number;\n' +
'\n' +
'    // IE extensions\n' +
'    /**\n' +
'      * Gets a substring beginning at the specified location and having the specified length.\n' +
'      * @param from The starting position of the desired substring. The index of the first character in the string is zero.\n' +
'      * @param length The number of characters to include in the returned substring.\n' +
'      */\n' +
'    substr(from: number, length?: number): string;\n' +
'\n' +
'    [index: number]: string;\n' +
'}\n' +
'\n' +
'/** \n' +
'  * Allows manipulation and formatting of text strings and determination and location of substrings within strings. \n' +
'  */\n' +
'declare var String: {\n' +
'    new (value?: any): String;\n' +
'    (value?: any): string;\n' +
'    prototype: String;\n' +
'    fromCharCode(...codes: number[]): string;\n' +
'}\n' +
'\n' +
'interface Boolean {\n' +
'}\n' +
'declare var Boolean: {\n' +
'    new (value?: any): Boolean;\n' +
'    (value?: any): boolean;\n' +
'    prototype: Boolean;\n' +
'}\n' +
'\n' +
'interface Number {\n' +
'    /**\n' +
'      * Returns a string representation of an object.\n' +
'      * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.\n' +
'      */\n' +
'    toString(radix?: number): string;\n' +
'\n' +
'    /** \n' +
'      * Returns a string representing a number in fixed-point notation.\n' +
'      * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.\n' +
'      */\n' +
'    toFixed(fractionDigits?: number): string;\n' +
'\n' +
'    /**\n' +
'      * Returns a string containing a number represented in exponential notation.\n' +
'      * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.\n' +
'      */\n' +
'    toExponential(fractionDigits?: number): string;\n' +
'\n' +
'    /**\n' +
'      * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.\n' +
'      * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.\n' +
'      */\n' +
'    toPrecision(precision?: number): string;\n' +
'}\n' +
'\n' +
'/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */\n' +
'declare var Number: {\n' +
'    new (value?: any): Number;\n' +
'    (value?: any): number;\n' +
'    prototype: Number;\n' +
'\n' +
'    /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */\n' +
'    MAX_VALUE: number;\n' +
'\n' +
'    /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */\n' +
'    MIN_VALUE: number;\n' +
'\n' +
'    /** \n' +
'      * A value that is not a number.\n' +
'      * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.\n' +
'      */\n' +
'    NaN: number;\n' +
'\n' +
'    /** \n' +
'      * A value that is less than the largest negative number that can be represented in JavaScript.\n' +
'      * JavaScript displays NEGATIVE_INFINITY values as -infinity. \n' +
'      */\n' +
'    NEGATIVE_INFINITY: number;\n' +
'\n' +
'    /**\n' +
'      * A value greater than the largest number that can be represented in JavaScript. \n' +
'      * JavaScript displays POSITIVE_INFINITY values as infinity. \n' +
'      */\n' +
'    POSITIVE_INFINITY: number;\n' +
'}\n' +
'\n' +
'interface Math {\n' +
'    /** The mathematical constant e. This is Euler\'s number, the base of natural logarithms. */\n' +
'    E: number;\n' +
'    /** The natural logarithm of 10. */\n' +
'    LN10: number;\n' +
'    /** The natural logarithm of 2. */\n' +
'    LN2: number;\n' +
'    /** The base-2 logarithm of e. */\n' +
'    LOG2E: number;\n' +
'    /** The base-10 logarithm of e. */\n' +
'    LOG10E: number;\n' +
'    /** Pi. This is the ratio of the circumference of a circle to its diameter. */\n' +
'    PI: number;\n' +
'    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */\n' +
'    SQRT1_2: number;\n' +
'    /** The square root of 2. */\n' +
'    SQRT2: number;\n' +
'    /**\n' +
'      * Returns the absolute value of a number (the value without regard to whether it is positive or negative). \n' +
'      * For example, the absolute value of -5 is the same as the absolute value of 5.\n' +
'      * @param x A numeric expression for which the absolute value is needed.\n' +
'      */\n' +
'    abs(x: number): number;\n' +
'    /**\n' +
'      * Returns the arc cosine (or inverse cosine) of a number. \n' +
'      * @param x A numeric expression.\n' +
'      */\n' +
'    acos(x: number): number;\n' +
'    /** \n' +
'      * Returns the arcsine of a number. \n' +
'      * @param x A numeric expression.\n' +
'      */\n' +
'    asin(x: number): number;\n' +
'    /**\n' +
'      * Returns the arctangent of a number. \n' +
'      * @param x A numeric expression for which the arctangent is needed.\n' +
'      */\n' +
'    atan(x: number): number;\n' +
'    /**\n' +
'      * Returns the angle (in radians) from the X axis to a point (y,x).\n' +
'      * @param y A numeric expression representing the cartesian y-coordinate.\n' +
'      * @param x A numeric expression representing the cartesian x-coordinate.\n' +
'      */\n' +
'    atan2(y: number, x: number): number;\n' +
'    /**\n' +
'      * Returns the smallest number greater than or equal to its numeric argument. \n' +
'      * @param x A numeric expression.\n' +
'      */\n' +
'    ceil(x: number): number;\n' +
'    /**\n' +
'      * Returns the cosine of a number. \n' +
'      * @param x A numeric expression that contains an angle measured in radians.\n' +
'      */\n' +
'    cos(x: number): number;\n' +
'    /**\n' +
'      * Returns e (the base of natural logarithms) raised to a power. \n' +
'      * @param x A numeric expression representing the power of e.\n' +
'      */\n' +
'    exp(x: number): number;\n' +
'    /**\n' +
'      * Returns the greatest number less than or equal to its numeric argument. \n' +
'      * @param x A numeric expression.\n' +
'      */\n' +
'    floor(x: number): number;\n' +
'    /**\n' +
'      * Returns the natural logarithm (base e) of a number. \n' +
'      * @param x A numeric expression.\n' +
'      */\n' +
'    log(x: number): number;\n' +
'    /**\n' +
'      * Returns the larger of a set of supplied numeric expressions. \n' +
'      * @param values Numeric expressions to be evaluated.\n' +
'      */\n' +
'    max(...values: number[]): number;\n' +
'    /**\n' +
'      * Returns the smaller of a set of supplied numeric expressions. \n' +
'      * @param values Numeric expressions to be evaluated.\n' +
'      */\n' +
'    min(...values: number[]): number;\n' +
'    /**\n' +
'      * Returns the value of a base expression taken to a specified power. \n' +
'      * @param x The base value of the expression.\n' +
'      * @param y The exponent value of the expression.\n' +
'      */\n' +
'    pow(x: number, y: number): number;\n' +
'    /** Returns a pseudorandom number between 0 and 1. */\n' +
'    random(): number;\n' +
'    /** \n' +
'      * Returns a supplied numeric expression rounded to the nearest number.\n' +
'      * @param x The value to be rounded to the nearest number.\n' +
'      */\n' +
'    round(x: number): number;\n' +
'    /**\n' +
'      * Returns the sine of a number.\n' +
'      * @param x A numeric expression that contains an angle measured in radians.\n' +
'      */\n' +
'    sin(x: number): number;\n' +
'    /**\n' +
'      * Returns the square root of a number.\n' +
'      * @param x A numeric expression.\n' +
'      */\n' +
'    sqrt(x: number): number;\n' +
'    /**\n' +
'      * Returns the tangent of a number.\n' +
'      * @param x A numeric expression that contains an angle measured in radians.\n' +
'      */\n' +
'    tan(x: number): number;\n' +
'}\n' +
'/** An intrinsic object that provides basic mathematics functionality and constants. */\n' +
'declare var Math: Math;\n' +
'\n' +
'/** Enables basic storage and retrieval of dates and times. */\n' +
'interface Date {\n' +
'    /** Returns a string representation of a date. The format of the string depends on the locale. */\n' +
'    toString(): string;\n' +
'    /** Returns a date as a string value. */\n' +
'    toDateString(): string;\n' +
'    /** Returns a time as a string value. */\n' +
'    toTimeString(): string;\n' +
'    /** Returns a value as a string value appropriate to the host environment\'s current locale. */\n' +
'    toLocaleString(): string;\n' +
'    /** Returns a date as a string value appropriate to the host environment\'s current locale. */\n' +
'    toLocaleDateString(): string;\n' +
'    /** Returns a time as a string value appropriate to the host environment\'s current locale. */\n' +
'    toLocaleTimeString(): string;\n' +
'    /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */\n' +
'    valueOf(): number;\n' +
'    /** Gets the time value in milliseconds. */\n' +
'    getTime(): number;\n' +
'    /** Gets the year, using local time. */\n' +
'    getFullYear(): number;\n' +
'    /** Gets the year using Universal Coordinated Time (UTC). */\n' +
'    getUTCFullYear(): number;\n' +
'    /** Gets the month, using local time. */\n' +
'    getMonth(): number;\n' +
'    /** Gets the month of a Date object using Universal Coordinated Time (UTC). */\n' +
'    getUTCMonth(): number;\n' +
'    /** Gets the day-of-the-month, using local time. */\n' +
'    getDate(): number;\n' +
'    /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */\n' +
'    getUTCDate(): number;\n' +
'    /** Gets the day of the week, using local time. */\n' +
'    getDay(): number;\n' +
'    /** Gets the day of the week using Universal Coordinated Time (UTC). */\n' +
'    getUTCDay(): number;\n' +
'    /** Gets the hours in a date, using local time. */\n' +
'    getHours(): number;\n' +
'    /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */\n' +
'    getUTCHours(): number;\n' +
'    /** Gets the minutes of a Date object, using local time. */\n' +
'    getMinutes(): number;\n' +
'    /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */\n' +
'    getUTCMinutes(): number;\n' +
'    /** Gets the seconds of a Date object, using local time. */\n' +
'    getSeconds(): number;\n' +
'    /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */\n' +
'    getUTCSeconds(): number;\n' +
'    /** Gets the milliseconds of a Date, using local time. */\n' +
'    getMilliseconds(): number;\n' +
'    /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */\n' +
'    getUTCMilliseconds(): number;\n' +
'    /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */\n' +
'    getTimezoneOffset(): number;\n' +
'    /** \n' +
'      * Sets the date and time value in the Date object.\n' +
'      * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT. \n' +
'      */\n' +
'    setTime(time: number): number;\n' +
'    /**\n' +
'      * Sets the milliseconds value in the Date object using local time. \n' +
'      * @param ms A numeric value equal to the millisecond value.\n' +
'      */\n' +
'    setMilliseconds(ms: number): number;\n' +
'    /** \n' +
'      * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).\n' +
'      * @param ms A numeric value equal to the millisecond value. \n' +
'      */\n' +
'    setUTCMilliseconds(ms: number): number;\n' +
'\n' +
'    /**\n' +
'      * Sets the seconds value in the Date object using local time. \n' +
'      * @param sec A numeric value equal to the seconds value.\n' +
'      * @param ms A numeric value equal to the milliseconds value.\n' +
'      */\n' +
'    setSeconds(sec: number, ms?: number): number;\n' +
'    /**\n' +
'      * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).\n' +
'      * @param sec A numeric value equal to the seconds value.\n' +
'      * @param ms A numeric value equal to the milliseconds value.\n' +
'      */\n' +
'    setUTCSeconds(sec: number, ms?: number): number;\n' +
'    /**\n' +
'      * Sets the minutes value in the Date object using local time. \n' +
'      * @param min A numeric value equal to the minutes value. \n' +
'      * @param sec A numeric value equal to the seconds value. \n' +
'      * @param ms A numeric value equal to the milliseconds value.\n' +
'      */\n' +
'    setMinutes(min: number, sec?: number, ms?: number): number;\n' +
'    /**\n' +
'      * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).\n' +
'      * @param min A numeric value equal to the minutes value. \n' +
'      * @param sec A numeric value equal to the seconds value. \n' +
'      * @param ms A numeric value equal to the milliseconds value.\n' +
'      */\n' +
'    setUTCMinutes(min: number, sec?: number, ms?: number): number;\n' +
'    /**\n' +
'      * Sets the hour value in the Date object using local time.\n' +
'      * @param hours A numeric value equal to the hours value.\n' +
'      * @param min A numeric value equal to the minutes value.\n' +
'      * @param sec A numeric value equal to the seconds value. \n' +
'      * @param ms A numeric value equal to the milliseconds value.\n' +
'      */\n' +
'    setHours(hours: number, min?: number, sec?: number, ms?: number): number;\n' +
'    /**\n' +
'      * Sets the hours value in the Date object using Universal Coordinated Time (UTC).\n' +
'      * @param hours A numeric value equal to the hours value.\n' +
'      * @param min A numeric value equal to the minutes value.\n' +
'      * @param sec A numeric value equal to the seconds value. \n' +
'      * @param ms A numeric value equal to the milliseconds value.\n' +
'      */\n' +
'    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;\n' +
'    /**\n' +
'      * Sets the numeric day-of-the-month value of the Date object using local time. \n' +
'      * @param date A numeric value equal to the day of the month.\n' +
'      */\n' +
'    setDate(date: number): number;\n' +
'    /** \n' +
'      * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).\n' +
'      * @param date A numeric value equal to the day of the month. \n' +
'      */\n' +
'    setUTCDate(date: number): number;\n' +
'    /** \n' +
'      * Sets the month value in the Date object using local time. \n' +
'      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. \n' +
'      * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.\n' +
'      */\n' +
'    setMonth(month: number, date?: number): number;\n' +
'    /**\n' +
'      * Sets the month value in the Date object using Universal Coordinated Time (UTC).\n' +
'      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.\n' +
'      * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.\n' +
'      */\n' +
'    setUTCMonth(month: number, date?: number): number;\n' +
'    /**\n' +
'      * Sets the year of the Date object using local time.\n' +
'      * @param year A numeric value for the year.\n' +
'      * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.\n' +
'      * @param date A numeric value equal for the day of the month.\n' +
'      */\n' +
'    setFullYear(year: number, month?: number, date?: number): number;\n' +
'    /**\n' +
'      * Sets the year value in the Date object using Universal Coordinated Time (UTC).\n' +
'      * @param year A numeric value equal to the year.\n' +
'      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.\n' +
'      * @param date A numeric value equal to the day of the month.\n' +
'      */\n' +
'    setUTCFullYear(year: number, month?: number, date?: number): number;\n' +
'    /** Returns a date converted to a string using Universal Coordinated Time (UTC). */\n' +
'    toUTCString(): string;\n' +
'    /** Returns a date as a string value in ISO format. */\n' +
'    toISOString(): string;\n' +
'    /** Used by the JSON.stringify method to enable the transformation of an object\'s data for JavaScript Object Notation (JSON) serialization. */\n' +
'    toJSON(key?: any): string;\n' +
'}\n' +
'\n' +
'declare var Date: {\n' +
'    new (): Date;\n' +
'    new (value: number): Date;\n' +
'    new (value: string): Date;\n' +
'    new (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;\n' +
'    (): string;\n' +
'    prototype: Date;\n' +
'    /**\n' +
'      * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.\n' +
'      * @param s A date string\n' +
'      */\n' +
'    parse(s: string): number;\n' +
'    /**\n' +
'      * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date. \n' +
'      * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.\n' +
'      * @param month The month as an number between 0 and 11 (January to December).\n' +
'      * @param date The date as an number between 1 and 31.\n' +
'      * @param hours Must be supplied if minutes is supplied. An number from 0 to 23 (midnight to 11pm) that specifies the hour.\n' +
'      * @param minutes Must be supplied if seconds is supplied. An number from 0 to 59 that specifies the minutes.\n' +
'      * @param seconds Must be supplied if milliseconds is supplied. An number from 0 to 59 that specifies the seconds.\n' +
'      * @param ms An number from 0 to 999 that specifies the milliseconds.\n' +
'      */\n' +
'    UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;\n' +
'    now(): number;\n' +
'}\n' +
'\n' +
'interface RegExpExecArray {\n' +
'    [index: number]: string;\n' +
'    length: number;\n' +
'\n' +
'    index: number;\n' +
'    input: string;\n' +
'\n' +
'    toString(): string;\n' +
'    toLocaleString(): string;\n' +
'    concat(...items: string[][]): string[];\n' +
'    join(separator?: string): string;\n' +
'    pop(): string;\n' +
'    push(...items: string[]): number;\n' +
'    reverse(): string[];\n' +
'    shift(): string;\n' +
'    slice(start?: number, end?: number): string[];\n' +
'    sort(compareFn?: (a: string, b: string) => number): string[];\n' +
'    splice(start: number): string[];\n' +
'    splice(start: number, deleteCount: number, ...items: string[]): string[];\n' +
'    unshift(...items: string[]): number;\n' +
'\n' +
'    indexOf(searchElement: string, fromIndex?: number): number;\n' +
'    lastIndexOf(searchElement: string, fromIndex?: number): number;\n' +
'    every(callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg?: any): boolean;\n' +
'    some(callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg?: any): boolean;\n' +
'    forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void;\n' +
'    map(callbackfn: (value: string, index: number, array: string[]) => any, thisArg?: any): any[];\n' +
'    filter(callbackfn: (value: string, index: number, array: string[]) => boolean, thisArg?: any): string[];\n' +
'    reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: string[]) => any, initialValue?: any): any;\n' +
'    reduceRight(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: string[]) => any, initialValue?: any): any;\n' +
'}\n' +
'\n' +
'\n' +
'interface RegExp {\n' +
'    /** \n' +
'      * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.\n' +
'      * @param string The String object or string literal on which to perform the search.\n' +
'      */\n' +
'    exec(string: string): RegExpExecArray;\n' +
'\n' +
'    /** \n' +
'      * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.\n' +
'      * @param string String on which to perform the search.\n' +
'      */\n' +
'    test(string: string): boolean;\n' +
'\n' +
'    /** Returns a copy of the text of the regular expression pattern. Read-only. The rgExp argument is a Regular expression object. It can be a variable name or a literal. */\n' +
'    source: string;\n' +
'\n' +
'    /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */\n' +
'    global: boolean;\n' +
'\n' +
'    /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */\n' +
'    ignoreCase: boolean;\n' +
'\n' +
'    /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */\n' +
'    multiline: boolean;\n' +
'\n' +
'    lastIndex: number;\n' +
'\n' +
'    // Non-standard extensions\n' +
'    compile(): RegExp;\n' +
'}\n' +
'declare var RegExp: {\n' +
'    new (pattern: string, flags?: string): RegExp;\n' +
'    (pattern: string, flags?: string): RegExp;\n' +
'\n' +
'    // Non-standard extensions\n' +
'    $1: string;\n' +
'    $2: string;\n' +
'    $3: string;\n' +
'    $4: string;\n' +
'    $5: string;\n' +
'    $6: string;\n' +
'    $7: string;\n' +
'    $8: string;\n' +
'    $9: string;\n' +
'    lastMatch: string;\n' +
'}\n' +
'\n' +
'interface Error {\n' +
'    name: string;\n' +
'    message: string;\n' +
'}\n' +
'declare var Error: {\n' +
'    new (message?: string): Error;\n' +
'    (message?: string): Error;\n' +
'    prototype: Error;\n' +
'}\n' +
'\n' +
'interface EvalError extends Error {\n' +
'}\n' +
'declare var EvalError: {\n' +
'    new (message?: string): EvalError;\n' +
'    (message?: string): EvalError;\n' +
'    prototype: EvalError;\n' +
'}\n' +
'\n' +
'interface RangeError extends Error {\n' +
'}\n' +
'declare var RangeError: {\n' +
'    new (message?: string): RangeError;\n' +
'    (message?: string): RangeError;\n' +
'    prototype: RangeError;\n' +
'}\n' +
'\n' +
'interface ReferenceError extends Error {\n' +
'}\n' +
'declare var ReferenceError: {\n' +
'    new (message?: string): ReferenceError;\n' +
'    (message?: string): ReferenceError;\n' +
'    prototype: ReferenceError;\n' +
'}\n' +
'\n' +
'interface SyntaxError extends Error {\n' +
'}\n' +
'declare var SyntaxError: {\n' +
'    new (message?: string): SyntaxError;\n' +
'    (message?: string): SyntaxError;\n' +
'    prototype: SyntaxError;\n' +
'}\n' +
'\n' +
'interface TypeError extends Error {\n' +
'}\n' +
'declare var TypeError: {\n' +
'    new (message?: string): TypeError;\n' +
'    (message?: string): TypeError;\n' +
'    prototype: TypeError;\n' +
'}\n' +
'\n' +
'interface URIError extends Error {\n' +
'}\n' +
'declare var URIError: {\n' +
'    new (message?: string): URIError;\n' +
'    (message?: string): URIError;\n' +
'    prototype: URIError;\n' +
'}\n' +
'\n' +
'interface JSON {\n' +
'    /**\n' +
'      * Converts a JavaScript Object Notation (JSON) string into an object.\n' +
'      * @param text A valid JSON string.\n' +
'      * @param reviver A function that transforms the results. This function is called for each member of the object. \n' +
'      * If a member contains nested objects, the nested objects are transformed before the parent object is. \n' +
'      */\n' +
'    parse(text: string, reviver?: (key: any, value: any) => any): any;\n' +
'    /**\n' +
'      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.\n' +
'      * @param value A JavaScript value, usually an object or array, to be converted.\n' +
'      */\n' +
'    stringify(value: any): string;\n' +
'    /**\n' +
'      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.\n' +
'      * @param value A JavaScript value, usually an object or array, to be converted.\n' +
'      * @param replacer A function that transforms the results.\n' +
'      */\n' +
'    stringify(value: any, replacer: (key: string, value: any) => any): string;\n' +
'    /**\n' +
'      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.\n' +
'      * @param value A JavaScript value, usually an object or array, to be converted.\n' +
'      * @param replacer Array that transforms the results.\n' +
'      */\n' +
'    stringify(value: any, replacer: any[]): string;\n' +
'    /**\n' +
'      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.\n' +
'      * @param value A JavaScript value, usually an object or array, to be converted.\n' +
'      * @param replacer A function that transforms the results.\n' +
'      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.\n' +
'      */\n' +
'    stringify(value: any, replacer: (key: string, value: any) => any, space: any): string;\n' +
'    /**\n' +
'      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.\n' +
'      * @param value A JavaScript value, usually an object or array, to be converted.\n' +
'      * @param replacer Array that transforms the results.\n' +
'      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.\n' +
'      */\n' +
'    stringify(value: any, replacer: any[], space: any): string;\n' +
'}\n' +
'/**\n' +
'  * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.\n' +
'  */\n' +
'declare var JSON: JSON;\n' +
'\n' +
'\n' +
'/////////////////////////////\n' +
'/// ECMAScript Array API (specially handled by compiler)\n' +
'/////////////////////////////\n' +
'\n' +
'interface Array<T> {\n' +
'    /**\n' +
'      * Returns a string representation of an array.\n' +
'      */\n' +
'    toString(): string;\n' +
'    toLocaleString(): string;\n' +
'    /**\n' +
'      * Combines two or more arrays.\n' +
'      * @param items Additional items to add to the end of array1.\n' +
'      */\n' +
'    concat<U extends T[]>(...items: U[]): T[];\n' +
'    /**\n' +
'      * Combines two or more arrays.\n' +
'      * @param items Additional items to add to the end of array1.\n' +
'      */\n' +
'    concat(...items: T[]): T[];\n' +
'    /**\n' +
'      * Adds all the elements of an array separated by the specified separator string.\n' +
'      * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.\n' +
'      */\n' +
'    join(separator?: string): string;\n' +
'    /**\n' +
'      * Removes the last element from an array and returns it.\n' +
'      */\n' +
'    pop(): T;\n' +
'    /**\n' +
'      * Appends new elements to an array, and returns the new length of the array.\n' +
'      * @param items New elements of the Array.\n' +
'      */\n' +
'    push(...items: T[]): number;\n' +
'    /**\n' +
'      * Reverses the elements in an Array. \n' +
'      */\n' +
'    reverse(): T[];\n' +
'    /**\n' +
'      * Removes the first element from an array and returns it.\n' +
'      */\n' +
'    shift(): T;\n' +
'    /** \n' +
'      * Returns a section of an array.\n' +
'      * @param start The beginning of the specified portion of the array.\n' +
'      * @param end The end of the specified portion of the array.\n' +
'      */\n' +
'    slice(start?: number, end?: number): T[];\n' +
'\n' +
'    /**\n' +
'      * Sorts an array.\n' +
'      * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.\n' +
'      */\n' +
'    sort(compareFn?: (a: T, b: T) => number): T[];\n' +
'\n' +
'    /**\n' +
'      * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.\n' +
'      * @param start The zero-based location in the array from which to start removing elements.\n' +
'      */\n' +
'    splice(start: number): T[];\n' +
'\n' +
'    /**\n' +
'      * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.\n' +
'      * @param start The zero-based location in the array from which to start removing elements.\n' +
'      * @param deleteCount The number of elements to remove.\n' +
'      * @param items Elements to insert into the array in place of the deleted elements.\n' +
'      */\n' +
'    splice(start: number, deleteCount: number, ...items: T[]): T[];\n' +
'\n' +
'    /**\n' +
'      * Inserts new elements at the start of an array.\n' +
'      * @param items  Elements to insert at the start of the Array.\n' +
'      */\n' +
'    unshift(...items: T[]): number;\n' +
'\n' +
'    /**\n' +
'      * Returns the index of the first occurrence of a value in an array.\n' +
'      * @param searchElement The value to locate in the array.\n' +
'      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n' +
'      */\n' +
'    indexOf(searchElement: T, fromIndex?: number): number;\n' +
'\n' +
'    /**\n' +
'      * Returns the index of the last occurrence of a specified value in an array.\n' +
'      * @param searchElement The value to locate in the array.\n' +
'      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.\n' +
'      */\n' +
'    lastIndexOf(searchElement: T, fromIndex?: number): number;\n' +
'\n' +
'    /**\n' +
'      * Determines whether all the members of an array satisfy the specified test.\n' +
'      * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.\n' +
'      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\n' +
'      */\n' +
'    every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;\n' +
'\n' +
'    /**\n' +
'      * Determines whether the specified callback function returns true for any element of an array.\n' +
'      * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.\n' +
'      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\n' +
'      */\n' +
'    some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;\n' +
'\n' +
'    /**\n' +
'      * Performs the specified action for each element in an array.\n' +
'      * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. \n' +
'      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\n' +
'      */\n' +
'    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;\n' +
'\n' +
'    /**\n' +
'      * Calls a defined callback function on each element of an array, and returns an array that contains the results.\n' +
'      * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. \n' +
'      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\n' +
'      */\n' +
'    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];\n' +
'\n' +
'    /**\n' +
'      * Returns the elements of an array that meet the condition specified in a callback function. \n' +
'      * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. \n' +
'      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\n' +
'      */\n' +
'    filter(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[];\n' +
'\n' +
'    /**\n' +
'      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n' +
'      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\n' +
'      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n' +
'      */\n' +
'    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;\n' +
'    /**\n' +
'      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n' +
'      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\n' +
'      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n' +
'      */\n' +
'    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;\n' +
'\n' +
'    /** \n' +
'      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n' +
'      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. \n' +
'      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n' +
'      */\n' +
'    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;\n' +
'    /** \n' +
'      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n' +
'      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. \n' +
'      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n' +
'      */\n' +
'    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;\n' +
'\n' +
'    /**\n' +
'      * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.\n' +
'      */\n' +
'    length: number;\n' +
'\n' +
'    [n: number]: T;\n' +
'}\n' +
'declare var Array: {\n' +
'    new (arrayLength?: number): any[];\n' +
'    new <T>(arrayLength: number): T[];\n' +
'    new <T>(...items: T[]): T[];\n' +
'    (arrayLength?: number): any[];\n' +
'    <T>(arrayLength: number): T[];\n' +
'    <T>(...items: T[]): T[];\n' +
'    isArray(arg: any): boolean;\n' +
'    prototype: Array<any>;\n' +
'}\n' +
'\n' +
'\n' +
'/////////////////////////////\n' +
'/// IE10 ECMAScript Extensions\n' +
'/////////////////////////////\n' +
'\n' +
'/**\n' +
'  * Represents a raw buffer of binary data, which is used to store data for the \n' +
'  * different typed arrays. ArrayBuffers cannot be read from or written to directly, \n' +
'  * but can be passed to a typed array or DataView Object to interpret the raw \n' +
'  * buffer as needed. \n' +
'  */\n' +
'interface ArrayBuffer {\n' +
'    /**\n' +
'      * Read-only. The length of the ArrayBuffer (in bytes).\n' +
'      */\n' +
'    byteLength: number;\n' +
'}\n' +
'\n' +
'declare var ArrayBuffer: {\n' +
'    prototype: ArrayBuffer;\n' +
'    new (byteLength: number): ArrayBuffer;\n' +
'}\n' +
'\n' +
'interface ArrayBufferView {\n' +
'    buffer: ArrayBuffer;\n' +
'    byteOffset: number;\n' +
'    byteLength: number;\n' +
'}\n' +
'\n' +
'/**\n' +
'  * A typed array of 8-bit integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.\n' +
'  */\n' +
'interface Int8Array extends ArrayBufferView {\n' +
'    /**\n' +
'      * The size in bytes of each element in the array. \n' +
'      */\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'\n' +
'    /**\n' +
'      * The length of the array.\n' +
'      */\n' +
'    length: number;\n' +
'\n' +
'    [index: number]: number;\n' +
'\n' +
'    /**\n' +
'      * Gets the element at the specified index.\n' +
'      * @param index The index at which to get the element of the array.\n' +
'      */\n' +
'    get(index: number): number;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param index The index of the location to set.\n' +
'      * @param value The value to set.\n' +
'      */\n' +
'    set(index: number, value: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: Int8Array, offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: number[], offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements at begin, inclusive, up to end, exclusive. \n' +
'      * @param begin The index of the beginning of the array.\n' +
'      * @param end The index of the end of the array.\n' +
'      */\n' +
'    subarray(begin: number, end?: number): Int8Array;\n' +
'}\n' +
'declare var Int8Array: {\n' +
'    prototype: Int8Array;\n' +
'    new (length: number): Int8Array;\n' +
'    new (array: Int8Array): Int8Array;\n' +
'    new (array: number[]): Int8Array;\n' +
'    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int8Array;\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'}\n' +
'\n' +
'/**\n' +
'  * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.\n' +
'  */\n' +
'interface Uint8Array extends ArrayBufferView {\n' +
'    /**\n' +
'      * The size in bytes of each element in the array. \n' +
'      */\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'\n' +
'    /**\n' +
'      * The length of the array.\n' +
'      */\n' +
'    length: number;\n' +
'    [index: number]: number;\n' +
'\n' +
'    /**\n' +
'      * Gets the element at the specified index.\n' +
'      * @param index The index at which to get the element of the array.\n' +
'      */\n' +
'    get(index: number): number;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param index The index of the location to set.\n' +
'      * @param value The value to set.\n' +
'      */\n' +
'    set(index: number, value: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: Uint8Array, offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: number[], offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Gets a new Uint8Array view of the ArrayBuffer Object store for this array, specifying the first and last members of the subarray. \n' +
'      * @param begin The index of the beginning of the array.\n' +
'      * @param end The index of the end of the array.\n' +
'      */\n' +
'    subarray(begin: number, end?: number): Uint8Array;\n' +
'}\n' +
'declare var Uint8Array: {\n' +
'    prototype: Uint8Array;\n' +
'    new (length: number): Uint8Array;\n' +
'    new (array: Uint8Array): Uint8Array;\n' +
'    new (array: number[]): Uint8Array;\n' +
'    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint8Array;\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'}\n' +
'\n' +
'/**\n' +
'  * A typed array of 16-bit integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.\n' +
'  */\n' +
'interface Int16Array extends ArrayBufferView {\n' +
'    /**\n' +
'      * The size in bytes of each element in the array. \n' +
'      */\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'\n' +
'    /**\n' +
'      * The length of the array.\n' +
'      */\n' +
'    length: number;\n' +
'    [index: number]: number;\n' +
'\n' +
'    /**\n' +
'      * Gets the element at the specified index.\n' +
'      * @param index The index at which to get the element of the array.\n' +
'      */\n' +
'    get(index: number): number;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param index The index of the location to set.\n' +
'      * @param value The value to set.\n' +
'      */\n' +
'    set(index: number, value: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: Int16Array, offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: number[], offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Gets a new Int16Array view of the ArrayBuffer Object store for this array, specifying the first and last members of the subarray. \n' +
'      * @param begin The index of the beginning of the array.\n' +
'      * @param end The index of the end of the array.\n' +
'      */\n' +
'    subarray(begin: number, end?: number): Int16Array;\n' +
'}\n' +
'declare var Int16Array: {\n' +
'    prototype: Int16Array;\n' +
'    new (length: number): Int16Array;\n' +
'    new (array: Int16Array): Int16Array;\n' +
'    new (array: number[]): Int16Array;\n' +
'    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int16Array;\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'}\n' +
'\n' +
'/**\n' +
'  * A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.\n' +
'  */\n' +
'interface Uint16Array extends ArrayBufferView {\n' +
'    /**\n' +
'      * The size in bytes of each element in the array. \n' +
'      */\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'\n' +
'    /**\n' +
'      * The length of the array.\n' +
'      */\n' +
'    length: number;\n' +
'    [index: number]: number;\n' +
'\n' +
'    /**\n' +
'      * Gets the element at the specified index.\n' +
'      * @param index The index at which to get the element of the array.\n' +
'      */\n' +
'    get(index: number): number;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param index The index of the location to set.\n' +
'      * @param value The value to set.\n' +
'      */\n' +
'    set(index: number, value: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: Uint16Array, offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: number[], offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Gets a new Uint16Array view of the ArrayBuffer Object store for this array, specifying the first and last members of the subarray.\n' +
'      * @param begin The index of the beginning of the array.\n' +
'      * @param end The index of the end of the array.\n' +
'      */\n' +
'    subarray(begin: number, end?: number): Uint16Array;\n' +
'}\n' +
'declare var Uint16Array: {\n' +
'    prototype: Uint16Array;\n' +
'    new (length: number): Uint16Array;\n' +
'    new (array: Uint16Array): Uint16Array;\n' +
'    new (array: number[]): Uint16Array;\n' +
'    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint16Array;\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'}\n' +
'\n' +
'/**\n' +
'  * A typed array of 32-bit integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.\n' +
'  */\n' +
'interface Int32Array extends ArrayBufferView {\n' +
'    /**\n' +
'      * The size in bytes of each element in the array. \n' +
'      */\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'\n' +
'    /**\n' +
'      * The length of the array.\n' +
'      */\n' +
'    length: number;\n' +
'    [index: number]: number;\n' +
'\n' +
'    /**\n' +
'      * Gets the element at the specified index.\n' +
'      * @param index The index at which to get the element of the array.\n' +
'      */\n' +
'    get(index: number): number;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param index The index of the location to set.\n' +
'      * @param value The value to set.\n' +
'      */\n' +
'    set(index: number, value: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: Int32Array, offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: number[], offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Gets a new Int32Array view of the ArrayBuffer Object store for this array, specifying the first and last members of the subarray. \n' +
'      * @param begin The index of the beginning of the array.\n' +
'      * @param end The index of the end of the array.\n' +
'      */\n' +
'    subarray(begin: number, end?: number): Int32Array;\n' +
'}\n' +
'declare var Int32Array: {\n' +
'    prototype: Int32Array;\n' +
'    new (length: number): Int32Array;\n' +
'    new (array: Int32Array): Int32Array;\n' +
'    new (array: number[]): Int32Array;\n' +
'    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Int32Array;\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'}\n' +
'\n' +
'/**\n' +
'  * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.\n' +
'  */\n' +
'interface Uint32Array extends ArrayBufferView {\n' +
'    /**\n' +
'      * The size in bytes of each element in the array. \n' +
'      */\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'\n' +
'    /**\n' +
'      * The length of the array.\n' +
'      */\n' +
'    length: number;\n' +
'    [index: number]: number;\n' +
'\n' +
'    /**\n' +
'      * Gets the element at the specified index.\n' +
'      * @param index The index at which to get the element of the array.\n' +
'      */\n' +
'    get(index: number): number;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param index The index of the location to set.\n' +
'      * @param value The value to set.\n' +
'      */\n' +
'    set(index: number, value: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: Uint32Array, offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: number[], offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Gets a new Int8Array view of the ArrayBuffer Object store for this array, specifying the first and last members of the subarray. \n' +
'      * @param begin The index of the beginning of the array.\n' +
'      * @param end The index of the end of the array.\n' +
'      */\n' +
'    subarray(begin: number, end?: number): Uint32Array;\n' +
'}\n' +
'declare var Uint32Array: {\n' +
'    prototype: Uint32Array;\n' +
'    new (length: number): Uint32Array;\n' +
'    new (array: Uint32Array): Uint32Array;\n' +
'    new (array: number[]): Uint32Array;\n' +
'    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint32Array;\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'}\n' +
'\n' +
'/**\n' +
'  * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.\n' +
'  */\n' +
'interface Float32Array extends ArrayBufferView {\n' +
'    /**\n' +
'      * The size in bytes of each element in the array. \n' +
'      */\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'\n' +
'    /**\n' +
'      * The length of the array.\n' +
'      */\n' +
'    length: number;\n' +
'    [index: number]: number;\n' +
'\n' +
'    /**\n' +
'      * Gets the element at the specified index.\n' +
'      * @param index The index at which to get the element of the array.\n' +
'      */\n' +
'    get(index: number): number;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param index The index of the location to set.\n' +
'      * @param value The value to set.\n' +
'      */\n' +
'    set(index: number, value: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: Float32Array, offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: number[], offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Gets a new Float32Array view of the ArrayBuffer Object store for this array, specifying the first and last members of the subarray. \n' +
'      * @param begin The index of the beginning of the array.\n' +
'      * @param end The index of the end of the array.\n' +
'      */\n' +
'    subarray(begin: number, end?: number): Float32Array;\n' +
'}\n' +
'declare var Float32Array: {\n' +
'    prototype: Float32Array;\n' +
'    new (length: number): Float32Array;\n' +
'    new (array: Float32Array): Float32Array;\n' +
'    new (array: number[]): Float32Array;\n' +
'    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Float32Array;\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'}\n' +
'\n' +
'/**\n' +
'  * A typed array of 64-bit float values. The contents are initialized to 0. If the requested number of bytes could not be allocated an exception is raised.\n' +
'  */\n' +
'interface Float64Array extends ArrayBufferView {\n' +
'    /**\n' +
'      * The size in bytes of each element in the array. \n' +
'      */\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'\n' +
'    /**\n' +
'      * The length of the array.\n' +
'      */\n' +
'    length: number;\n' +
'    [index: number]: number;\n' +
'\n' +
'    /**\n' +
'      * Gets the element at the specified index.\n' +
'      * @param index The index at which to get the element of the array.\n' +
'      */\n' +
'    get(index: number): number;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param index The index of the location to set.\n' +
'      * @param value The value to set.\n' +
'      */\n' +
'    set(index: number, value: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: Float64Array, offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Sets a value or an array of values.\n' +
'      * @param A typed or untyped array of values to set.\n' +
'      * @param offset The index in the current array at which the values are to be written.\n' +
'      */\n' +
'    set(array: number[], offset?: number): void;\n' +
'\n' +
'    /**\n' +
'      * Gets a new Float64Array view of the ArrayBuffer Object store for this array, specifying the first and last members of the subarray. \n' +
'      * @param begin The index of the beginning of the array.\n' +
'      * @param end The index of the end of the array.\n' +
'      */\n' +
'    subarray(begin: number, end?: number): Float64Array;\n' +
'}\n' +
'declare var Float64Array: {\n' +
'    prototype: Float64Array;\n' +
'    new (length: number): Float64Array;\n' +
'    new (array: Float64Array): Float64Array;\n' +
'    new (array: number[]): Float64Array;\n' +
'    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Float64Array;\n' +
'    BYTES_PER_ELEMENT: number;\n' +
'}\n' +
'\n' +
'/**\n' +
'  * You can use a DataView object to read and write the different kinds of binary data to any location in the ArrayBuffer. \n' +
'  */\n' +
'interface DataView extends ArrayBufferView {\n' +
'    /**\n' +
'      * Gets the Int8 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset. \n' +
'      * @param byteOffset The place in the buffer at which the value should be retrieved.\n' +
'      */\n' +
'    getInt8(byteOffset: number): number;\n' +
'\n' +
'    /**\n' +
'      * Gets the Uint8 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset. \n' +
'      * @param byteOffset The place in the buffer at which the value should be retrieved.\n' +
'      */\n' +
'    getUint8(byteOffset: number): number;\n' +
'\n' +
'    /**\n' +
'      * Gets the Int16 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset. \n' +
'      * @param byteOffset The place in the buffer at which the value should be retrieved.\n' +
'      */\n' +
'    getInt16(byteOffset: number, littleEndian?: boolean): number;\n' +
'\n' +
'    /**\n' +
'      * Gets the Uint16 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset. \n' +
'      * @param byteOffset The place in the buffer at which the value should be retrieved.\n' +
'      */\n' +
'    getUint16(byteOffset: number, littleEndian?: boolean): number;\n' +
'\n' +
'    /**\n' +
'      * Gets the Int32 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset. \n' +
'      * @param byteOffset The place in the buffer at which the value should be retrieved.\n' +
'      */\n' +
'    getInt32(byteOffset: number, littleEndian?: boolean): number;\n' +
'\n' +
'    /**\n' +
'      * Gets the Uint32 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset. \n' +
'      * @param byteOffset The place in the buffer at which the value should be retrieved.\n' +
'      */\n' +
'    getUint32(byteOffset: number, littleEndian?: boolean): number;\n' +
'\n' +
'    /**\n' +
'      * Gets the Float32 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset. \n' +
'      * @param byteOffset The place in the buffer at which the value should be retrieved.\n' +
'      */\n' +
'    getFloat32(byteOffset: number, littleEndian?: boolean): number;\n' +
'\n' +
'    /**\n' +
'      * Gets the Float64 value at the specified byte offset from the start of the view. There is no alignment constraint; multi-byte values may be fetched from any offset. \n' +
'      * @param byteOffset The place in the buffer at which the value should be retrieved.\n' +
'      */\n' +
'    getFloat64(byteOffset: number, littleEndian?: boolean): number;\n' +
'\n' +
'    /**\n' +
'      * Stores an Int8 value at the specified byte offset from the start of the view. \n' +
'      * @param byteOffset The place in the buffer at which the value should be set.\n' +
'      * @param value The value to set.\n' +
'      */\n' +
'    setInt8(byteOffset: number, value: number): void;\n' +
'\n' +
'    /**\n' +
'      * Stores an Uint8 value at the specified byte offset from the start of the view. \n' +
'      * @param byteOffset The place in the buffer at which the value should be set.\n' +
'      * @param value The value to set.\n' +
'      */\n' +
'    setUint8(byteOffset: number, value: number): void;\n' +
'\n' +
'    /**\n' +
'      * Stores an Int16 value at the specified byte offset from the start of the view. \n' +
'      * @param byteOffset The place in the buffer at which the value should be set.\n' +
'      * @param value The value to set.\n' +
'      * @param littleEndian If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.\n' +
'      */\n' +
'    setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;\n' +
'\n' +
'    /**\n' +
'      * Stores an Uint16 value at the specified byte offset from the start of the view. \n' +
'      * @param byteOffset The place in the buffer at which the value should be set.\n' +
'      * @param value The value to set.\n' +
'      * @param littleEndian If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.\n' +
'      */\n' +
'    setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;\n' +
'\n' +
'    /**\n' +
'      * Stores an Int32 value at the specified byte offset from the start of the view. \n' +
'      * @param byteOffset The place in the buffer at which the value should be set.\n' +
'      * @param value The value to set.\n' +
'      * @param littleEndian If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.\n' +
'      */\n' +
'    setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;\n' +
'\n' +
'    /**\n' +
'      * Stores an Uint32 value at the specified byte offset from the start of the view. \n' +
'      * @param byteOffset The place in the buffer at which the value should be set.\n' +
'      * @param value The value to set.\n' +
'      * @param littleEndian If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.\n' +
'      */\n' +
'    setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;\n' +
'\n' +
'    /**\n' +
'      * Stores an Float32 value at the specified byte offset from the start of the view. \n' +
'      * @param byteOffset The place in the buffer at which the value should be set.\n' +
'      * @param value The value to set.\n' +
'      * @param littleEndian If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.\n' +
'      */\n' +
'    setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;\n' +
'\n' +
'    /**\n' +
'      * Stores an Float64 value at the specified byte offset from the start of the view. \n' +
'      * @param byteOffset The place in the buffer at which the value should be set.\n' +
'      * @param value The value to set.\n' +
'      * @param littleEndian If false or undefined, a big-endian value should be written, otherwise a little-endian value should be written.\n' +
'      */\n' +
'    setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;\n' +
'}\n' +
'declare var DataView: {\n' +
'    prototype: DataView;\n' +
'    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): DataView;\n' +
'}\n' +
'\n' +
'/////////////////////////////\n' +
'/// IE11 ECMAScript Extensions\n' +
'/////////////////////////////\n' +
'\n' +
'interface Map<K, V> {\n' +
'    clear(): void;\n' +
'    delete(key: K): boolean;\n' +
'    forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;\n' +
'    get(key: K): V;\n' +
'    has(key: K): boolean;\n' +
'    set(key: K, value: V): Map<K, V>;\n' +
'    size: number;\n' +
'}\n' +
'declare var Map: {\n' +
'    new <K, V>(): Map<K, V>;\n' +
'}\n' +
'\n' +
'interface WeakMap<K, V> {\n' +
'    clear(): void;\n' +
'    delete(key: K): boolean;\n' +
'    get(key: K): V;\n' +
'    has(key: K): boolean;\n' +
'    set(key: K, value: V): WeakMap<K, V>;\n' +
'}\n' +
'declare var WeakMap: {\n' +
'    new <K, V>(): WeakMap<K, V>;\n' +
'}\n' +
'\n' +
'interface Set<T> {\n' +
'    add(value: T): Set<T>;\n' +
'    clear(): void;\n' +
'    delete(value: T): boolean;\n' +
'    forEach(callbackfn: (value: T, index: T, set: Set<T>) => void, thisArg?: any): void;\n' +
'    has(value: T): boolean;\n' +
'    size: number;\n' +
'}\n' +
'declare var Set: {\n' +
'    new <T>(): Set<T>;\n' +
'}\n' +
'\n' +
'declare module Intl {\n' +
'\n' +
'    interface CollatorOptions {\n' +
'        usage?: string;\n' +
'        localeMatcher?: string;\n' +
'        numeric?: boolean;\n' +
'        caseFirst?: string;\n' +
'        sensitivity?: string;\n' +
'        ignorePunctuation?: boolean;\n' +
'    }\n' +
'\n' +
'    interface ResolvedCollatorOptions {\n' +
'        locale: string;\n' +
'        usage: string;\n' +
'        sensitivity: string;\n' +
'        ignorePunctuation: boolean;\n' +
'        collation: string;\n' +
'        caseFirst: string;\n' +
'        numeric: boolean;\n' +
'    }\n' +
'\n' +
'    interface Collator {\n' +
'        compare(x: string, y: string): number;\n' +
'        resolvedOptions(): ResolvedCollatorOptions;\n' +
'    }\n' +
'    var Collator: {\n' +
'        new (locales?: string[], options?: CollatorOptions): Collator;\n' +
'        new (locale?: string, options?: CollatorOptions): Collator;\n' +
'        (locales?: string[], options?: CollatorOptions): Collator;\n' +
'        (locale?: string, options?: CollatorOptions): Collator;\n' +
'        supportedLocalesOf(locales: string[], options?: CollatorOptions): string[];\n' +
'        supportedLocalesOf(locale: string, options?: CollatorOptions): string[];\n' +
'    }\n' +
'\n' +
'    interface NumberFormatOptions {\n' +
'        localeMatcher?: string;\n' +
'        style?: string;\n' +
'        currency?: string;\n' +
'        currencyDisplay?: string;\n' +
'        useGrouping?: boolean;\n' +
'    }\n' +
'\n' +
'    interface ResolvedNumberFormatOptions {\n' +
'        locale: string;\n' +
'        numberingSystem: string;\n' +
'        style: string;\n' +
'        currency?: string;\n' +
'        currencyDisplay?: string;\n' +
'        minimumintegerDigits: number;\n' +
'        minimumFractionDigits: number;\n' +
'        maximumFractionDigits: number;\n' +
'        minimumSignificantDigits?: number;\n' +
'        maximumSignificantDigits?: number;\n' +
'        useGrouping: boolean;\n' +
'    }\n' +
'\n' +
'    interface NumberFormat {\n' +
'        format(value: number): string;\n' +
'        resolvedOptions(): ResolvedNumberFormatOptions;\n' +
'    }\n' +
'    var NumberFormat: {\n' +
'        new (locales?: string[], options?: NumberFormatOptions): Collator;\n' +
'        new (locale?: string, options?: NumberFormatOptions): Collator;\n' +
'        (locales?: string[], options?: NumberFormatOptions): Collator;\n' +
'        (locale?: string, options?: NumberFormatOptions): Collator;\n' +
'        supportedLocalesOf(locales: string[], options?: NumberFormatOptions): string[];\n' +
'        supportedLocalesOf(locale: string, options?: NumberFormatOptions): string[];\n' +
'    }\n' +
'\n' +
'    interface DateTimeFormatOptions {\n' +
'        localeMatcher?: string;\n' +
'        weekday?: string;\n' +
'        era?: string;\n' +
'        year?: string;\n' +
'        month?: string;\n' +
'        day?: string;\n' +
'        hour?: string;\n' +
'        minute?: string;\n' +
'        second?: string;\n' +
'        timeZoneName?: string;\n' +
'        formatMatcher?: string;\n' +
'        hour12: boolean;\n' +
'    }\n' +
'\n' +
'    interface ResolvedDateTimeFormatOptions {\n' +
'        locale: string;\n' +
'        calendar: string;\n' +
'        numberingSystem: string;\n' +
'        timeZone: string;\n' +
'        hour12?: boolean;\n' +
'        weekday?: string;\n' +
'        era?: string;\n' +
'        year?: string;\n' +
'        month?: string;\n' +
'        day?: string;\n' +
'        hour?: string;\n' +
'        minute?: string;\n' +
'        second?: string;\n' +
'        timeZoneName?: string;\n' +
'    }\n' +
'\n' +
'    interface DateTimeFormat {\n' +
'        format(date: number): string;\n' +
'        resolvedOptions(): ResolvedDateTimeFormatOptions;\n' +
'    }\n' +
'    var DateTimeFormat: {\n' +
'        new (locales?: string[], options?: DateTimeFormatOptions): Collator;\n' +
'        new (locale?: string, options?: DateTimeFormatOptions): Collator;\n' +
'        (locales?: string[], options?: DateTimeFormatOptions): Collator;\n' +
'        (locale?: string, options?: DateTimeFormatOptions): Collator;\n' +
'        supportedLocalesOf(locales: string[], options?: DateTimeFormatOptions): string[];\n' +
'        supportedLocalesOf(locale: string, options?: DateTimeFormatOptions): string[];\n' +
'    }\n' +
'}\n' +
'\n' +
'interface String {\n' +
'    localeCompare(that: string, locales: string[], options?: Intl.CollatorOptions): number;\n' +
'    localeCompare(that: string, locale: string, options?: Intl.CollatorOptions): number;\n' +
'}\n' +
'\n' +
'interface Number {\n' +
'    toLocaleString(locales?: string[], options?: Intl.NumberFormatOptions): string;\n' +
'    toLocaleString(locale?: string, options?: Intl.NumberFormatOptions): string;\n' +
'}\n' +
'\n' +
'interface Date {\n' +
'    toLocaleString(locales?: string[], options?: Intl.DateTimeFormatOptions): string;\n' +
'    toLocaleString(locale?: string, options?: Intl.DateTimeFormatOptions): string;\n' +
'}\n' +
'\n' +
'\n' +
'/////////////////////////////\n' +
'/// IE9 DOM APIs \n' +
'/////////////////////////////\n' +
'\n' +
'interface PositionOptions {\n' +
'    enableHighAccuracy?: boolean;\n' +
'    timeout?: number;\n' +
'    maximumAge?: number;\n' +
'}\n' +
'\n' +
'interface NavigatorID {\n' +
'    appVersion: string;\n' +
'    appName: string;\n' +
'    userAgent: string;\n' +
'    platform: string;\n' +
'}\n' +
'\n' +
'interface HTMLTableElement extends HTMLElement, MSDataBindingTableExtensions, MSDataBindingExtensions, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    width: string;\n' +
'    /**\n' +
'      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.\n' +
'      */\n' +
'    borderColorLight: any;\n' +
'    /**\n' +
'      * Sets or retrieves the amount of space between cells in a table.\n' +
'      */\n' +
'    cellSpacing: string;\n' +
'    /**\n' +
'      * Retrieves the tFoot object of the table.\n' +
'      */\n' +
'    tFoot: HTMLTableSectionElement;\n' +
'    /**\n' +
'      * Sets or retrieves the way the border frame around the table is displayed.\n' +
'      */\n' +
'    frame: string;\n' +
'    /**\n' +
'      * Sets or retrieves the border color of the object. \n' +
'      */\n' +
'    borderColor: any;\n' +
'    /**\n' +
'      * Sets or retrieves the number of horizontal rows contained in the object.\n' +
'      */\n' +
'    rows: HTMLCollection;\n' +
'    /**\n' +
'      * Sets or retrieves which dividing lines (inner borders) are displayed.\n' +
'      */\n' +
'    rules: string;\n' +
'    /**\n' +
'      * Sets or retrieves the number of columns in the table.\n' +
'      */\n' +
'    cols: number;\n' +
'    /**\n' +
'      * Sets or retrieves a description and/or structure of the object.\n' +
'      */\n' +
'    summary: string;\n' +
'    /**\n' +
'      * Retrieves the caption object of a table.\n' +
'      */\n' +
'    caption: HTMLTableCaptionElement;\n' +
'    /**\n' +
'      * Retrieves a collection of all tBody objects in the table. Objects in this collection are in source order.\n' +
'      */\n' +
'    tBodies: HTMLCollection;\n' +
'    /**\n' +
'      * Retrieves the tHead object of the table.\n' +
'      */\n' +
'    tHead: HTMLTableSectionElement;\n' +
'    /**\n' +
'      * Sets or retrieves a value that indicates the table alignment.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Retrieves a collection of all cells in the table row or in the entire table.\n' +
'      */\n' +
'    cells: HTMLCollection;\n' +
'    /**\n' +
'      * Sets or retrieves the height of the object.\n' +
'      */\n' +
'    height: any;\n' +
'    /**\n' +
'      * Sets or retrieves the amount of space between the border of the cell and the content of the cell.\n' +
'      */\n' +
'    cellPadding: string;\n' +
'    /**\n' +
'      * Sets or retrieves the width of the border to draw around the object.\n' +
'      */\n' +
'    border: string;\n' +
'    /**\n' +
'      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.\n' +
'      */\n' +
'    borderColorDark: any;\n' +
'    /**\n' +
'      * Removes the specified row (tr) from the element and from the rows collection.\n' +
'      * @param index Number that specifies the zero-based position in the rows collection of the row to remove.\n' +
'      */\n' +
'    deleteRow(index?: number): void;\n' +
'    /**\n' +
'      * Creates an empty tBody element in the table.\n' +
'      */\n' +
'    createTBody(): HTMLElement;\n' +
'    /**\n' +
'      * Deletes the caption element and its contents from the table.\n' +
'      */\n' +
'    deleteCaption(): void;\n' +
'    /**\n' +
'      * Creates a new row (tr) in the table, and adds the row to the rows collection.\n' +
'      * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.\n' +
'      */\n' +
'    insertRow(index?: number): HTMLElement;\n' +
'    /**\n' +
'      * Deletes the tFoot element and its contents from the table.\n' +
'      */\n' +
'    deleteTFoot(): void;\n' +
'    /**\n' +
'      * Returns the tHead element object if successful, or null otherwise.\n' +
'      */\n' +
'    createTHead(): HTMLElement;\n' +
'    /**\n' +
'      * Deletes the tHead element and its contents from the table.\n' +
'      */\n' +
'    deleteTHead(): void;\n' +
'    /**\n' +
'      * Creates an empty caption element in the table.\n' +
'      */\n' +
'    createCaption(): HTMLElement;\n' +
'    /**\n' +
'      * Moves a table row to a new position.\n' +
'      * @param indexFrom Number that specifies the index in the rows collection of the table row that is moved.\n' +
'      * @param indexTo Number that specifies where the row is moved within the rows collection.\n' +
'      */\n' +
'    moveRow(indexFrom?: number, indexTo?: number): Object;\n' +
'    /**\n' +
'      * Creates an empty tFoot element in the table.\n' +
'      */\n' +
'    createTFoot(): HTMLElement;\n' +
'}\n' +
'declare var HTMLTableElement: {\n' +
'    prototype: HTMLTableElement;\n' +
'    new (): HTMLTableElement;\n' +
'}\n' +
'\n' +
'interface TreeWalker {\n' +
'    whatToShow: number;\n' +
'    filter: NodeFilter;\n' +
'    root: Node;\n' +
'    currentNode: Node;\n' +
'    expandEntityReferences: boolean;\n' +
'    previousSibling(): Node;\n' +
'    lastChild(): Node;\n' +
'    nextSibling(): Node;\n' +
'    nextNode(): Node;\n' +
'    parentNode(): Node;\n' +
'    firstChild(): Node;\n' +
'    previousNode(): Node;\n' +
'}\n' +
'declare var TreeWalker: {\n' +
'    prototype: TreeWalker;\n' +
'    new (): TreeWalker;\n' +
'}\n' +
'\n' +
'interface GetSVGDocument {\n' +
'    getSVGDocument(): Document;\n' +
'}\n' +
'\n' +
'interface SVGPathSegCurvetoQuadraticRel extends SVGPathSeg {\n' +
'    y: number;\n' +
'    y1: number;\n' +
'    x: number;\n' +
'    x1: number;\n' +
'}\n' +
'declare var SVGPathSegCurvetoQuadraticRel: {\n' +
'    prototype: SVGPathSegCurvetoQuadraticRel;\n' +
'    new (): SVGPathSegCurvetoQuadraticRel;\n' +
'}\n' +
'\n' +
'interface Performance {\n' +
'    navigation: PerformanceNavigation;\n' +
'    timing: PerformanceTiming;\n' +
'    getEntriesByType(entryType: string): any;\n' +
'    toJSON(): any;\n' +
'    getMeasures(measureName?: string): any;\n' +
'    clearMarks(markName?: string): void;\n' +
'    getMarks(markName?: string): any;\n' +
'    clearResourceTimings(): void;\n' +
'    mark(markName: string): void;\n' +
'    measure(measureName: string, startMarkName?: string, endMarkName?: string): void;\n' +
'    getEntriesByName(name: string, entryType?: string): any;\n' +
'    getEntries(): any;\n' +
'    clearMeasures(measureName?: string): void;\n' +
'    setResourceTimingBufferSize(maxSize: number): void;\n' +
'}\n' +
'declare var Performance: {\n' +
'    prototype: Performance;\n' +
'    new (): Performance;\n' +
'}\n' +
'\n' +
'interface MSDataBindingTableExtensions {\n' +
'    dataPageSize: number;\n' +
'    nextPage(): void;\n' +
'    firstPage(): void;\n' +
'    refresh(): void;\n' +
'    previousPage(): void;\n' +
'    lastPage(): void;\n' +
'}\n' +
'\n' +
'interface CompositionEvent extends UIEvent {\n' +
'    data: string;\n' +
'    locale: string;\n' +
'    initCompositionEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, locale: string): void;\n' +
'}\n' +
'declare var CompositionEvent: {\n' +
'    prototype: CompositionEvent;\n' +
'    new (): CompositionEvent;\n' +
'}\n' +
'\n' +
'interface WindowTimers {\n' +
'    clearTimeout(handle: number): void;\n' +
'    setTimeout(handler: any, timeout?: any, ...args: any[]): number;\n' +
'    clearInterval(handle: number): void;\n' +
'    setInterval(handler: any, timeout?: any, ...args: any[]): number;\n' +
'}\n' +
'\n' +
'interface SVGMarkerElement extends SVGElement, SVGStylable, SVGLangSpace, SVGFitToViewBox, SVGExternalResourcesRequired {\n' +
'    orientType: SVGAnimatedEnumeration;\n' +
'    markerUnits: SVGAnimatedEnumeration;\n' +
'    markerWidth: SVGAnimatedLength;\n' +
'    markerHeight: SVGAnimatedLength;\n' +
'    orientAngle: SVGAnimatedAngle;\n' +
'    refY: SVGAnimatedLength;\n' +
'    refX: SVGAnimatedLength;\n' +
'    setOrientToAngle(angle: SVGAngle): void;\n' +
'    setOrientToAuto(): void;\n' +
'    SVG_MARKER_ORIENT_UNKNOWN: number;\n' +
'    SVG_MARKER_ORIENT_ANGLE: number;\n' +
'    SVG_MARKERUNITS_UNKNOWN: number;\n' +
'    SVG_MARKERUNITS_STROKEWIDTH: number;\n' +
'    SVG_MARKER_ORIENT_AUTO: number;\n' +
'    SVG_MARKERUNITS_USERSPACEONUSE: number;\n' +
'}\n' +
'declare var SVGMarkerElement: {\n' +
'    prototype: SVGMarkerElement;\n' +
'    new (): SVGMarkerElement;\n' +
'    SVG_MARKER_ORIENT_UNKNOWN: number;\n' +
'    SVG_MARKER_ORIENT_ANGLE: number;\n' +
'    SVG_MARKERUNITS_UNKNOWN: number;\n' +
'    SVG_MARKERUNITS_STROKEWIDTH: number;\n' +
'    SVG_MARKER_ORIENT_AUTO: number;\n' +
'    SVG_MARKERUNITS_USERSPACEONUSE: number;\n' +
'}\n' +
'\n' +
'interface CSSStyleDeclaration {\n' +
'    backgroundAttachment: string;\n' +
'    visibility: string;\n' +
'    textAlignLast: string;\n' +
'    borderRightStyle: string;\n' +
'    counterIncrement: string;\n' +
'    orphans: string;\n' +
'    cssText: string;\n' +
'    borderStyle: string;\n' +
'    pointerEvents: string;\n' +
'    borderTopColor: string;\n' +
'    markerEnd: string;\n' +
'    textIndent: string;\n' +
'    listStyleImage: string;\n' +
'    cursor: string;\n' +
'    listStylePosition: string;\n' +
'    wordWrap: string;\n' +
'    borderTopStyle: string;\n' +
'    alignmentBaseline: string;\n' +
'    opacity: string;\n' +
'    direction: string;\n' +
'    strokeMiterlimit: string;\n' +
'    maxWidth: string;\n' +
'    color: string;\n' +
'    clip: string;\n' +
'    borderRightWidth: string;\n' +
'    verticalAlign: string;\n' +
'    overflow: string;\n' +
'    mask: string;\n' +
'    borderLeftStyle: string;\n' +
'    emptyCells: string;\n' +
'    stopOpacity: string;\n' +
'    paddingRight: string;\n' +
'    parentRule: CSSRule;\n' +
'    background: string;\n' +
'    boxSizing: string;\n' +
'    textJustify: string;\n' +
'    height: string;\n' +
'    paddingTop: string;\n' +
'    length: number;\n' +
'    right: string;\n' +
'    baselineShift: string;\n' +
'    borderLeft: string;\n' +
'    widows: string;\n' +
'    lineHeight: string;\n' +
'    left: string;\n' +
'    textUnderlinePosition: string;\n' +
'    glyphOrientationHorizontal: string;\n' +
'    display: string;\n' +
'    textAnchor: string;\n' +
'    cssFloat: string;\n' +
'    strokeDasharray: string;\n' +
'    rubyAlign: string;\n' +
'    fontSizeAdjust: string;\n' +
'    borderLeftColor: string;\n' +
'    backgroundImage: string;\n' +
'    listStyleType: string;\n' +
'    strokeWidth: string;\n' +
'    textOverflow: string;\n' +
'    fillRule: string;\n' +
'    borderBottomColor: string;\n' +
'    zIndex: string;\n' +
'    position: string;\n' +
'    listStyle: string;\n' +
'    msTransformOrigin: string;\n' +
'    dominantBaseline: string;\n' +
'    overflowY: string;\n' +
'    fill: string;\n' +
'    captionSide: string;\n' +
'    borderCollapse: string;\n' +
'    boxShadow: string;\n' +
'    quotes: string;\n' +
'    tableLayout: string;\n' +
'    unicodeBidi: string;\n' +
'    borderBottomWidth: string;\n' +
'    backgroundSize: string;\n' +
'    textDecoration: string;\n' +
'    strokeDashoffset: string;\n' +
'    fontSize: string;\n' +
'    border: string;\n' +
'    pageBreakBefore: string;\n' +
'    borderTopRightRadius: string;\n' +
'    msTransform: string;\n' +
'    borderBottomLeftRadius: string;\n' +
'    textTransform: string;\n' +
'    rubyPosition: string;\n' +
'    strokeLinejoin: string;\n' +
'    clipPath: string;\n' +
'    borderRightColor: string;\n' +
'    fontFamily: string;\n' +
'    clear: string;\n' +
'    content: string;\n' +
'    backgroundClip: string;\n' +
'    marginBottom: string;\n' +
'    counterReset: string;\n' +
'    outlineWidth: string;\n' +
'    marginRight: string;\n' +
'    paddingLeft: string;\n' +
'    borderBottom: string;\n' +
'    wordBreak: string;\n' +
'    marginTop: string;\n' +
'    top: string;\n' +
'    fontWeight: string;\n' +
'    borderRight: string;\n' +
'    width: string;\n' +
'    kerning: string;\n' +
'    pageBreakAfter: string;\n' +
'    borderBottomStyle: string;\n' +
'    fontStretch: string;\n' +
'    padding: string;\n' +
'    strokeOpacity: string;\n' +
'    markerStart: string;\n' +
'    bottom: string;\n' +
'    borderLeftWidth: string;\n' +
'    clipRule: string;\n' +
'    backgroundPosition: string;\n' +
'    backgroundColor: string;\n' +
'    pageBreakInside: string;\n' +
'    backgroundOrigin: string;\n' +
'    strokeLinecap: string;\n' +
'    borderTopWidth: string;\n' +
'    outlineStyle: string;\n' +
'    borderTop: string;\n' +
'    outlineColor: string;\n' +
'    paddingBottom: string;\n' +
'    marginLeft: string;\n' +
'    font: string;\n' +
'    outline: string;\n' +
'    wordSpacing: string;\n' +
'    maxHeight: string;\n' +
'    fillOpacity: string;\n' +
'    letterSpacing: string;\n' +
'    borderSpacing: string;\n' +
'    backgroundRepeat: string;\n' +
'    borderRadius: string;\n' +
'    borderWidth: string;\n' +
'    borderBottomRightRadius: string;\n' +
'    whiteSpace: string;\n' +
'    fontStyle: string;\n' +
'    minWidth: string;\n' +
'    stopColor: string;\n' +
'    borderTopLeftRadius: string;\n' +
'    borderColor: string;\n' +
'    marker: string;\n' +
'    glyphOrientationVertical: string;\n' +
'    markerMid: string;\n' +
'    fontVariant: string;\n' +
'    minHeight: string;\n' +
'    stroke: string;\n' +
'    rubyOverhang: string;\n' +
'    overflowX: string;\n' +
'    textAlign: string;\n' +
'    margin: string;\n' +
'    getPropertyPriority(propertyName: string): string;\n' +
'    getPropertyValue(propertyName: string): string;\n' +
'    removeProperty(propertyName: string): string;\n' +
'    item(index: number): string;\n' +
'    [index: number]: string;\n' +
'    setProperty(propertyName: string, value: string, priority?: string): void;\n' +
'}\n' +
'declare var CSSStyleDeclaration: {\n' +
'    prototype: CSSStyleDeclaration;\n' +
'    new (): CSSStyleDeclaration;\n' +
'}\n' +
'\n' +
'interface SVGGElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {\n' +
'}\n' +
'declare var SVGGElement: {\n' +
'    prototype: SVGGElement;\n' +
'    new (): SVGGElement;\n' +
'}\n' +
'\n' +
'interface MSStyleCSSProperties extends MSCSSProperties {\n' +
'    pixelWidth: number;\n' +
'    posHeight: number;\n' +
'    posLeft: number;\n' +
'    pixelTop: number;\n' +
'    pixelBottom: number;\n' +
'    textDecorationNone: boolean;\n' +
'    pixelLeft: number;\n' +
'    posTop: number;\n' +
'    posBottom: number;\n' +
'    textDecorationOverline: boolean;\n' +
'    posWidth: number;\n' +
'    textDecorationLineThrough: boolean;\n' +
'    pixelHeight: number;\n' +
'    textDecorationBlink: boolean;\n' +
'    posRight: number;\n' +
'    pixelRight: number;\n' +
'    textDecorationUnderline: boolean;\n' +
'}\n' +
'declare var MSStyleCSSProperties: {\n' +
'    prototype: MSStyleCSSProperties;\n' +
'    new (): MSStyleCSSProperties;\n' +
'}\n' +
'\n' +
'interface Navigator extends NavigatorID, NavigatorOnLine, NavigatorContentUtils, MSNavigatorExtensions, NavigatorGeolocation, MSNavigatorDoNotTrack, NavigatorStorageUtils {\n' +
'}\n' +
'declare var Navigator: {\n' +
'    prototype: Navigator;\n' +
'    new (): Navigator;\n' +
'}\n' +
'\n' +
'interface SVGPathSegCurvetoCubicSmoothAbs extends SVGPathSeg {\n' +
'    y: number;\n' +
'    x2: number;\n' +
'    x: number;\n' +
'    y2: number;\n' +
'}\n' +
'declare var SVGPathSegCurvetoCubicSmoothAbs: {\n' +
'    prototype: SVGPathSegCurvetoCubicSmoothAbs;\n' +
'    new (): SVGPathSegCurvetoCubicSmoothAbs;\n' +
'}\n' +
'\n' +
'interface SVGZoomEvent extends UIEvent {\n' +
'    zoomRectScreen: SVGRect;\n' +
'    previousScale: number;\n' +
'    newScale: number;\n' +
'    previousTranslate: SVGPoint;\n' +
'    newTranslate: SVGPoint;\n' +
'}\n' +
'declare var SVGZoomEvent: {\n' +
'    prototype: SVGZoomEvent;\n' +
'    new (): SVGZoomEvent;\n' +
'}\n' +
'\n' +
'interface NodeSelector {\n' +
'    querySelectorAll(selectors: string): NodeList;\n' +
'    querySelector(selectors: string): Element;\n' +
'}\n' +
'\n' +
'interface HTMLTableDataCellElement extends HTMLTableCellElement {\n' +
'}\n' +
'declare var HTMLTableDataCellElement: {\n' +
'    prototype: HTMLTableDataCellElement;\n' +
'    new (): HTMLTableDataCellElement;\n' +
'}\n' +
'\n' +
'interface HTMLBaseElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves the window or frame at which to target content.\n' +
'      */\n' +
'    target: string;\n' +
'    /**\n' +
'      * Gets or sets the baseline URL on which relative links are based.\n' +
'      */\n' +
'    href: string;\n' +
'}\n' +
'declare var HTMLBaseElement: {\n' +
'    prototype: HTMLBaseElement;\n' +
'    new (): HTMLBaseElement;\n' +
'}\n' +
'\n' +
'interface ClientRect {\n' +
'    left: number;\n' +
'    width: number;\n' +
'    right: number;\n' +
'    top: number;\n' +
'    bottom: number;\n' +
'    height: number;\n' +
'}\n' +
'declare var ClientRect: {\n' +
'    prototype: ClientRect;\n' +
'    new (): ClientRect;\n' +
'}\n' +
'\n' +
'interface PositionErrorCallback {\n' +
'    (error: PositionError): void;\n' +
'}\n' +
'\n' +
'interface DOMImplementation {\n' +
'    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;\n' +
'    createDocument(namespaceURI: string, qualifiedName: string, doctype: DocumentType): Document;\n' +
'    hasFeature(feature: string, version?: string): boolean;\n' +
'    createHTMLDocument(title: string): Document;\n' +
'}\n' +
'declare var DOMImplementation: {\n' +
'    prototype: DOMImplementation;\n' +
'    new (): DOMImplementation;\n' +
'}\n' +
'\n' +
'interface SVGUnitTypes {\n' +
'    SVG_UNIT_TYPE_UNKNOWN: number;\n' +
'    SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;\n' +
'    SVG_UNIT_TYPE_USERSPACEONUSE: number;\n' +
'}\n' +
'declare var SVGUnitTypes: {\n' +
'    prototype: SVGUnitTypes;\n' +
'    new (): SVGUnitTypes;\n' +
'    SVG_UNIT_TYPE_UNKNOWN: number;\n' +
'    SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;\n' +
'    SVG_UNIT_TYPE_USERSPACEONUSE: number;\n' +
'}\n' +
'\n' +
'interface Element extends Node, NodeSelector, ElementTraversal {\n' +
'    scrollTop: number;\n' +
'    clientLeft: number;\n' +
'    scrollLeft: number;\n' +
'    tagName: string;\n' +
'    clientWidth: number;\n' +
'    scrollWidth: number;\n' +
'    clientHeight: number;\n' +
'    clientTop: number;\n' +
'    scrollHeight: number;\n' +
'    getAttribute(name?: string): string;\n' +
'    getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;\n' +
'    hasAttributeNS(namespaceURI: string, localName: string): boolean;\n' +
'    getBoundingClientRect(): ClientRect;\n' +
'    getAttributeNS(namespaceURI: string, localName: string): string;\n' +
'    getAttributeNodeNS(namespaceURI: string, localName: string): Attr;\n' +
'    setAttributeNodeNS(newAttr: Attr): Attr;\n' +
'    msMatchesSelector(selectors: string): boolean;\n' +
'    hasAttribute(name: string): boolean;\n' +
'    removeAttribute(name?: string): void;\n' +
'    setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void;\n' +
'    getAttributeNode(name: string): Attr;\n' +
'    fireEvent(eventName: string, eventObj?: any): boolean;\n' +
'    getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;\n' +
'    getElementsByTagName(name: "abbr"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "address"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "area"): NodeListOf<HTMLAreaElement>;\n' +
'    getElementsByTagName(name: "article"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "aside"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;\n' +
'    getElementsByTagName(name: "b"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "base"): NodeListOf<HTMLBaseElement>;\n' +
'    getElementsByTagName(name: "bdi"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "bdo"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "blockquote"): NodeListOf<HTMLQuoteElement>;\n' +
'    getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;\n' +
'    getElementsByTagName(name: "br"): NodeListOf<HTMLBRElement>;\n' +
'    getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;\n' +
'    getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;\n' +
'    getElementsByTagName(name: "caption"): NodeListOf<HTMLTableCaptionElement>;\n' +
'    getElementsByTagName(name: "cite"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "code"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "col"): NodeListOf<HTMLTableColElement>;\n' +
'    getElementsByTagName(name: "colgroup"): NodeListOf<HTMLTableColElement>;\n' +
'    getElementsByTagName(name: "datalist"): NodeListOf<HTMLDataListElement>;\n' +
'    getElementsByTagName(name: "dd"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "del"): NodeListOf<HTMLModElement>;\n' +
'    getElementsByTagName(name: "dfn"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;\n' +
'    getElementsByTagName(name: "dl"): NodeListOf<HTMLDListElement>;\n' +
'    getElementsByTagName(name: "dt"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "em"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "embed"): NodeListOf<HTMLEmbedElement>;\n' +
'    getElementsByTagName(name: "fieldset"): NodeListOf<HTMLFieldSetElement>;\n' +
'    getElementsByTagName(name: "figcaption"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "figure"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "footer"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;\n' +
'    getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;\n' +
'    getElementsByTagName(name: "h2"): NodeListOf<HTMLHeadingElement>;\n' +
'    getElementsByTagName(name: "h3"): NodeListOf<HTMLHeadingElement>;\n' +
'    getElementsByTagName(name: "h4"): NodeListOf<HTMLHeadingElement>;\n' +
'    getElementsByTagName(name: "h5"): NodeListOf<HTMLHeadingElement>;\n' +
'    getElementsByTagName(name: "h6"): NodeListOf<HTMLHeadingElement>;\n' +
'    getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;\n' +
'    getElementsByTagName(name: "header"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "hgroup"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "hr"): NodeListOf<HTMLHRElement>;\n' +
'    getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;\n' +
'    getElementsByTagName(name: "i"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;\n' +
'    getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;\n' +
'    getElementsByTagName(name: "input"): NodeListOf<HTMLInputElement>;\n' +
'    getElementsByTagName(name: "ins"): NodeListOf<HTMLModElement>;\n' +
'    getElementsByTagName(name: "kbd"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "label"): NodeListOf<HTMLLabelElement>;\n' +
'    getElementsByTagName(name: "legend"): NodeListOf<HTMLLegendElement>;\n' +
'    getElementsByTagName(name: "li"): NodeListOf<HTMLLIElement>;\n' +
'    getElementsByTagName(name: "link"): NodeListOf<HTMLLinkElement>;\n' +
'    getElementsByTagName(name: "main"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "map"): NodeListOf<HTMLMapElement>;\n' +
'    getElementsByTagName(name: "mark"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "menu"): NodeListOf<HTMLMenuElement>;\n' +
'    getElementsByTagName(name: "meta"): NodeListOf<HTMLMetaElement>;\n' +
'    getElementsByTagName(name: "nav"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "noscript"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "object"): NodeListOf<HTMLObjectElement>;\n' +
'    getElementsByTagName(name: "ol"): NodeListOf<HTMLOListElement>;\n' +
'    getElementsByTagName(name: "optgroup"): NodeListOf<HTMLOptGroupElement>;\n' +
'    getElementsByTagName(name: "option"): NodeListOf<HTMLOptionElement>;\n' +
'    getElementsByTagName(name: "p"): NodeListOf<HTMLParagraphElement>;\n' +
'    getElementsByTagName(name: "param"): NodeListOf<HTMLParamElement>;\n' +
'    getElementsByTagName(name: "pre"): NodeListOf<HTMLPreElement>;\n' +
'    getElementsByTagName(name: "progress"): NodeListOf<HTMLProgressElement>;\n' +
'    getElementsByTagName(name: "q"): NodeListOf<HTMLQuoteElement>;\n' +
'    getElementsByTagName(name: "rp"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "rt"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "ruby"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "s"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "samp"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;\n' +
'    getElementsByTagName(name: "section"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "select"): NodeListOf<HTMLSelectElement>;\n' +
'    getElementsByTagName(name: "small"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "source"): NodeListOf<HTMLSourceElement>;\n' +
'    getElementsByTagName(name: "span"): NodeListOf<HTMLSpanElement>;\n' +
'    getElementsByTagName(name: "strong"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "style"): NodeListOf<HTMLStyleElement>;\n' +
'    getElementsByTagName(name: "sub"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "summary"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "sup"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "table"): NodeListOf<HTMLTableElement>;\n' +
'    getElementsByTagName(name: "tbody"): NodeListOf<HTMLTableSectionElement>;\n' +
'    getElementsByTagName(name: "td"): NodeListOf<HTMLTableDataCellElement>;\n' +
'    getElementsByTagName(name: "textarea"): NodeListOf<HTMLTextAreaElement>;\n' +
'    getElementsByTagName(name: "tfoot"): NodeListOf<HTMLTableSectionElement>;\n' +
'    getElementsByTagName(name: "th"): NodeListOf<HTMLTableHeaderCellElement>;\n' +
'    getElementsByTagName(name: "thead"): NodeListOf<HTMLTableSectionElement>;\n' +
'    getElementsByTagName(name: "title"): NodeListOf<HTMLTitleElement>;\n' +
'    getElementsByTagName(name: "tr"): NodeListOf<HTMLTableRowElement>;\n' +
'    getElementsByTagName(name: "track"): NodeListOf<HTMLTrackElement>;\n' +
'    getElementsByTagName(name: "u"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "ul"): NodeListOf<HTMLUListElement>;\n' +
'    getElementsByTagName(name: "var"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;\n' +
'    getElementsByTagName(name: "wbr"): NodeListOf<HTMLElement>;\n' +
'    getElementsByTagName(name: string): NodeList;\n' +
'    getClientRects(): ClientRectList;\n' +
'    setAttributeNode(newAttr: Attr): Attr;\n' +
'    removeAttributeNode(oldAttr: Attr): Attr;\n' +
'    setAttribute(name?: string, value?: string): void;\n' +
'    removeAttributeNS(namespaceURI: string, localName: string): void;\n' +
'}\n' +
'declare var Element: {\n' +
'    prototype: Element;\n' +
'    new (): Element;\n' +
'}\n' +
'\n' +
'interface HTMLNextIdElement extends HTMLElement {\n' +
'    n: string;\n' +
'}\n' +
'declare var HTMLNextIdElement: {\n' +
'    prototype: HTMLNextIdElement;\n' +
'    new (): HTMLNextIdElement;\n' +
'}\n' +
'\n' +
'interface SVGPathSegMovetoRel extends SVGPathSeg {\n' +
'    y: number;\n' +
'    x: number;\n' +
'}\n' +
'declare var SVGPathSegMovetoRel: {\n' +
'    prototype: SVGPathSegMovetoRel;\n' +
'    new (): SVGPathSegMovetoRel;\n' +
'}\n' +
'\n' +
'interface SVGLineElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {\n' +
'    y1: SVGAnimatedLength;\n' +
'    x2: SVGAnimatedLength;\n' +
'    x1: SVGAnimatedLength;\n' +
'    y2: SVGAnimatedLength;\n' +
'}\n' +
'declare var SVGLineElement: {\n' +
'    prototype: SVGLineElement;\n' +
'    new (): SVGLineElement;\n' +
'}\n' +
'\n' +
'interface HTMLParagraphElement extends HTMLElement, DOML2DeprecatedTextFlowControl {\n' +
'    /**\n' +
'      * Sets or retrieves how the object is aligned with adjacent text. \n' +
'      */\n' +
'    align: string;\n' +
'}\n' +
'declare var HTMLParagraphElement: {\n' +
'    prototype: HTMLParagraphElement;\n' +
'    new (): HTMLParagraphElement;\n' +
'}\n' +
'\n' +
'interface HTMLAreasCollection extends HTMLCollection {\n' +
'    /**\n' +
'      * Removes an element from the collection.\n' +
'      */\n' +
'    remove(index?: number): void;\n' +
'    /**\n' +
'      * Adds an element to the areas, controlRange, or options collection.\n' +
'      */\n' +
'    add(element: HTMLElement, before?: any): void;\n' +
'}\n' +
'declare var HTMLAreasCollection: {\n' +
'    prototype: HTMLAreasCollection;\n' +
'    new (): HTMLAreasCollection;\n' +
'}\n' +
'\n' +
'interface SVGDescElement extends SVGElement, SVGStylable, SVGLangSpace {\n' +
'}\n' +
'declare var SVGDescElement: {\n' +
'    prototype: SVGDescElement;\n' +
'    new (): SVGDescElement;\n' +
'}\n' +
'\n' +
'interface Node extends EventTarget {\n' +
'    nodeType: number;\n' +
'    previousSibling: Node;\n' +
'    localName: string;\n' +
'    namespaceURI: string;\n' +
'    textContent: string;\n' +
'    parentNode: Node;\n' +
'    nextSibling: Node;\n' +
'    nodeValue: string;\n' +
'    lastChild: Node;\n' +
'    childNodes: NodeList;\n' +
'    nodeName: string;\n' +
'    ownerDocument: Document;\n' +
'    attributes: NamedNodeMap;\n' +
'    firstChild: Node;\n' +
'    prefix: string;\n' +
'    removeChild(oldChild: Node): Node;\n' +
'    appendChild(newChild: Node): Node;\n' +
'    isSupported(feature: string, version: string): boolean;\n' +
'    isEqualNode(arg: Node): boolean;\n' +
'    lookupPrefix(namespaceURI: string): string;\n' +
'    isDefaultNamespace(namespaceURI: string): boolean;\n' +
'    compareDocumentPosition(other: Node): number;\n' +
'    normalize(): void;\n' +
'    isSameNode(other: Node): boolean;\n' +
'    hasAttributes(): boolean;\n' +
'    lookupNamespaceURI(prefix: string): string;\n' +
'    cloneNode(deep?: boolean): Node;\n' +
'    hasChildNodes(): boolean;\n' +
'    replaceChild(newChild: Node, oldChild: Node): Node;\n' +
'    insertBefore(newChild: Node, refChild?: Node): Node;\n' +
'    ENTITY_REFERENCE_NODE: number;\n' +
'    ATTRIBUTE_NODE: number;\n' +
'    DOCUMENT_FRAGMENT_NODE: number;\n' +
'    TEXT_NODE: number;\n' +
'    ELEMENT_NODE: number;\n' +
'    COMMENT_NODE: number;\n' +
'    DOCUMENT_POSITION_DISCONNECTED: number;\n' +
'    DOCUMENT_POSITION_CONTAINED_BY: number;\n' +
'    DOCUMENT_POSITION_CONTAINS: number;\n' +
'    DOCUMENT_TYPE_NODE: number;\n' +
'    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;\n' +
'    DOCUMENT_NODE: number;\n' +
'    ENTITY_NODE: number;\n' +
'    PROCESSING_INSTRUCTION_NODE: number;\n' +
'    CDATA_SECTION_NODE: number;\n' +
'    NOTATION_NODE: number;\n' +
'    DOCUMENT_POSITION_FOLLOWING: number;\n' +
'    DOCUMENT_POSITION_PRECEDING: number;\n' +
'}\n' +
'declare var Node: {\n' +
'    prototype: Node;\n' +
'    new (): Node;\n' +
'    ENTITY_REFERENCE_NODE: number;\n' +
'    ATTRIBUTE_NODE: number;\n' +
'    DOCUMENT_FRAGMENT_NODE: number;\n' +
'    TEXT_NODE: number;\n' +
'    ELEMENT_NODE: number;\n' +
'    COMMENT_NODE: number;\n' +
'    DOCUMENT_POSITION_DISCONNECTED: number;\n' +
'    DOCUMENT_POSITION_CONTAINED_BY: number;\n' +
'    DOCUMENT_POSITION_CONTAINS: number;\n' +
'    DOCUMENT_TYPE_NODE: number;\n' +
'    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;\n' +
'    DOCUMENT_NODE: number;\n' +
'    ENTITY_NODE: number;\n' +
'    PROCESSING_INSTRUCTION_NODE: number;\n' +
'    CDATA_SECTION_NODE: number;\n' +
'    NOTATION_NODE: number;\n' +
'    DOCUMENT_POSITION_FOLLOWING: number;\n' +
'    DOCUMENT_POSITION_PRECEDING: number;\n' +
'}\n' +
'\n' +
'interface SVGPathSegCurvetoQuadraticSmoothRel extends SVGPathSeg {\n' +
'    y: number;\n' +
'    x: number;\n' +
'}\n' +
'declare var SVGPathSegCurvetoQuadraticSmoothRel: {\n' +
'    prototype: SVGPathSegCurvetoQuadraticSmoothRel;\n' +
'    new (): SVGPathSegCurvetoQuadraticSmoothRel;\n' +
'}\n' +
'\n' +
'interface DOML2DeprecatedListSpaceReduction {\n' +
'    compact: boolean;\n' +
'}\n' +
'\n' +
'interface MSScriptHost {\n' +
'}\n' +
'declare var MSScriptHost: {\n' +
'    prototype: MSScriptHost;\n' +
'    new (): MSScriptHost;\n' +
'}\n' +
'\n' +
'interface SVGClipPathElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {\n' +
'    clipPathUnits: SVGAnimatedEnumeration;\n' +
'}\n' +
'declare var SVGClipPathElement: {\n' +
'    prototype: SVGClipPathElement;\n' +
'    new (): SVGClipPathElement;\n' +
'}\n' +
'\n' +
'interface MouseEvent extends UIEvent {\n' +
'    toElement: Element;\n' +
'    layerY: number;\n' +
'    fromElement: Element;\n' +
'    which: number;\n' +
'    pageX: number;\n' +
'    offsetY: number;\n' +
'    x: number;\n' +
'    y: number;\n' +
'    metaKey: boolean;\n' +
'    altKey: boolean;\n' +
'    ctrlKey: boolean;\n' +
'    offsetX: number;\n' +
'    screenX: number;\n' +
'    clientY: number;\n' +
'    shiftKey: boolean;\n' +
'    layerX: number;\n' +
'    screenY: number;\n' +
'    relatedTarget: EventTarget;\n' +
'    button: number;\n' +
'    pageY: number;\n' +
'    buttons: number;\n' +
'    clientX: number;\n' +
'    initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget): void;\n' +
'    getModifierState(keyArg: string): boolean;\n' +
'}\n' +
'declare var MouseEvent: {\n' +
'    prototype: MouseEvent;\n' +
'    new (): MouseEvent;\n' +
'}\n' +
'\n' +
'interface RangeException {\n' +
'    code: number;\n' +
'    message: string;\n' +
'    toString(): string;\n' +
'    INVALID_NODE_TYPE_ERR: number;\n' +
'    BAD_BOUNDARYPOINTS_ERR: number;\n' +
'}\n' +
'declare var RangeException: {\n' +
'    prototype: RangeException;\n' +
'    new (): RangeException;\n' +
'    INVALID_NODE_TYPE_ERR: number;\n' +
'    BAD_BOUNDARYPOINTS_ERR: number;\n' +
'}\n' +
'\n' +
'interface SVGTextPositioningElement extends SVGTextContentElement {\n' +
'    y: SVGAnimatedLengthList;\n' +
'    rotate: SVGAnimatedNumberList;\n' +
'    dy: SVGAnimatedLengthList;\n' +
'    x: SVGAnimatedLengthList;\n' +
'    dx: SVGAnimatedLengthList;\n' +
'}\n' +
'declare var SVGTextPositioningElement: {\n' +
'    prototype: SVGTextPositioningElement;\n' +
'    new (): SVGTextPositioningElement;\n' +
'}\n' +
'\n' +
'interface HTMLAppletElement extends HTMLElement, DOML2DeprecatedMarginStyle, DOML2DeprecatedBorderStyle, DOML2DeprecatedAlignmentStyle, MSDataBindingExtensions, MSDataBindingRecordSetExtensions {\n' +
'    width: number;\n' +
'    /**\n' +
'      * Sets or retrieves the Internet media type for the code associated with the object.\n' +
'      */\n' +
'    codeType: string;\n' +
'    object: string;\n' +
'    form: HTMLFormElement;\n' +
'    code: string;\n' +
'    /**\n' +
'      * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.\n' +
'      */\n' +
'    archive: string;\n' +
'    /**\n' +
'      * Sets or retrieves a text alternative to the graphic.\n' +
'      */\n' +
'    alt: string;\n' +
'    /**\n' +
'      * Sets or retrieves a message to be displayed while an object is loading.\n' +
'      */\n' +
'    standby: string;\n' +
'    /**\n' +
'      * Sets or retrieves the class identifier for the object.\n' +
'      */\n' +
'    classid: string;\n' +
'    /**\n' +
'      * Sets or retrieves the shape of the object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.\n' +
'      */\n' +
'    useMap: string;\n' +
'    /**\n' +
'      * Sets or retrieves the URL that references the data of the object.\n' +
'      */\n' +
'    data: string;\n' +
'    /**\n' +
'      * Sets or retrieves the height of the object.\n' +
'      */\n' +
'    height: string;\n' +
'    /**\n' +
'      * Gets or sets the optional alternative HTML script to execute if the object fails to load.\n' +
'      */\n' +
'    altHtml: string;\n' +
'    /**\n' +
'      * Address of a pointer to the document this page or frame contains. If there is no document, then null will be returned.\n' +
'      */\n' +
'    contentDocument: Document;\n' +
'    /**\n' +
'      * Sets or retrieves the URL of the component.\n' +
'      */\n' +
'    codeBase: string;\n' +
'    /**\n' +
'      * Sets or retrieves a character string that can be used to implement your own declare functionality for the object.\n' +
'      */\n' +
'    declare: boolean;\n' +
'    /**\n' +
'      * Returns the content type of the object.\n' +
'      */\n' +
'    type: string;\n' +
'    /**\n' +
'      * Retrieves a string of the URL where the object tag can be found. This is often the href of the document that the object is in, or the value set by a base element.\n' +
'      */\n' +
'    BaseHref: string;\n' +
'}\n' +
'declare var HTMLAppletElement: {\n' +
'    prototype: HTMLAppletElement;\n' +
'    new (): HTMLAppletElement;\n' +
'}\n' +
'\n' +
'interface TextMetrics {\n' +
'    width: number;\n' +
'}\n' +
'declare var TextMetrics: {\n' +
'    prototype: TextMetrics;\n' +
'    new (): TextMetrics;\n' +
'}\n' +
'\n' +
'interface DocumentEvent {\n' +
'    createEvent(eventInterface: string): Event;\n' +
'}\n' +
'\n' +
'interface HTMLOListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {\n' +
'    /**\n' +
'      * The starting number.\n' +
'      */\n' +
'    start: number;\n' +
'}\n' +
'declare var HTMLOListElement: {\n' +
'    prototype: HTMLOListElement;\n' +
'    new (): HTMLOListElement;\n' +
'}\n' +
'\n' +
'interface SVGPathSegLinetoVerticalRel extends SVGPathSeg {\n' +
'    y: number;\n' +
'}\n' +
'declare var SVGPathSegLinetoVerticalRel: {\n' +
'    prototype: SVGPathSegLinetoVerticalRel;\n' +
'    new (): SVGPathSegLinetoVerticalRel;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedString {\n' +
'    animVal: string;\n' +
'    baseVal: string;\n' +
'}\n' +
'declare var SVGAnimatedString: {\n' +
'    prototype: SVGAnimatedString;\n' +
'    new (): SVGAnimatedString;\n' +
'}\n' +
'\n' +
'interface CDATASection extends Text {\n' +
'}\n' +
'declare var CDATASection: {\n' +
'    prototype: CDATASection;\n' +
'    new (): CDATASection;\n' +
'}\n' +
'\n' +
'interface StyleMedia {\n' +
'    type: string;\n' +
'    matchMedium(mediaquery: string): boolean;\n' +
'}\n' +
'declare var StyleMedia: {\n' +
'    prototype: StyleMedia;\n' +
'    new (): StyleMedia;\n' +
'}\n' +
'\n' +
'interface HTMLSelectElement extends HTMLElement, MSHTMLCollectionExtensions, MSDataBindingExtensions {\n' +
'    options: HTMLSelectElement;\n' +
'    /**\n' +
'      * Sets or retrieves the value which is returned to the server when the form control is submitted.\n' +
'      */\n' +
'    value: string;\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in. \n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'    /**\n' +
'      * Sets or retrieves the name of the object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Sets or retrieves the number of rows in the list box. \n' +
'      */\n' +
'    size: number;\n' +
'    /**\n' +
'      * Sets or retrieves the number of objects in a collection.\n' +
'      */\n' +
'    length: number;\n' +
'    /**\n' +
'      * Sets or retrieves the index of the selected option in a select object.\n' +
'      */\n' +
'    selectedIndex: number;\n' +
'    /**\n' +
'      * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.\n' +
'      */\n' +
'    multiple: boolean;\n' +
'    /**\n' +
'      * Retrieves the type of select control based on the value of the MULTIPLE attribute.\n' +
'      */\n' +
'    type: string;\n' +
'    /**\n' +
'      * Removes an element from the collection.\n' +
'      * @param index Number that specifies the zero-based index of the element to remove from the collection.\n' +
'      */\n' +
'    remove(index?: number): void;\n' +
'    /**\n' +
'      * Adds an element to the areas, controlRange, or options collection.\n' +
'      * @param element Variant of type Number that specifies the index position in the collection where the element is placed. If no value is given, the method places the element at the end of the collection.\n' +
'      * @param before Variant of type Object that specifies an element to insert before, or null to append the object to the collection. \n' +
'      */\n' +
'    add(element: HTMLElement, before?: any): void;\n' +
'    /**\n' +
'      * Retrieves a select object or an object from an options collection.\n' +
'      * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is an integer, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.\n' +
'      * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.\n' +
'      */\n' +
'    item(name?: any, index?: any): any;\n' +
'    /**\n' +
'      * Retrieves a select object or an object from an options collection.\n' +
'      * @param namedItem A String that specifies the name or id property of the object to retrieve. A collection is returned if more than one match is made.\n' +
'      */\n' +
'    namedItem(name: string): any;\n' +
'    [name: string]: any;\n' +
'}\n' +
'declare var HTMLSelectElement: {\n' +
'    prototype: HTMLSelectElement;\n' +
'    new (): HTMLSelectElement;\n' +
'}\n' +
'\n' +
'interface TextRange {\n' +
'    boundingLeft: number;\n' +
'    htmlText: string;\n' +
'    offsetLeft: number;\n' +
'    boundingWidth: number;\n' +
'    boundingHeight: number;\n' +
'    boundingTop: number;\n' +
'    text: string;\n' +
'    offsetTop: number;\n' +
'    moveToPoint(x: number, y: number): void;\n' +
'    queryCommandValue(cmdID: string): any;\n' +
'    getBookmark(): string;\n' +
'    move(unit: string, count?: number): number;\n' +
'    queryCommandIndeterm(cmdID: string): boolean;\n' +
'    scrollIntoView(fStart?: boolean): void;\n' +
'    findText(string: string, count?: number, flags?: number): boolean;\n' +
'    execCommand(cmdID: string, showUI?: boolean, value?: any): boolean;\n' +
'    getBoundingClientRect(): ClientRect;\n' +
'    moveToBookmark(bookmark: string): boolean;\n' +
'    isEqual(range: TextRange): boolean;\n' +
'    duplicate(): TextRange;\n' +
'    collapse(start?: boolean): void;\n' +
'    queryCommandText(cmdID: string): string;\n' +
'    select(): void;\n' +
'    pasteHTML(html: string): void;\n' +
'    inRange(range: TextRange): boolean;\n' +
'    moveEnd(unit: string, count?: number): number;\n' +
'    getClientRects(): ClientRectList;\n' +
'    moveStart(unit: string, count?: number): number;\n' +
'    parentElement(): Element;\n' +
'    queryCommandState(cmdID: string): boolean;\n' +
'    compareEndPoints(how: string, sourceRange: TextRange): number;\n' +
'    execCommandShowHelp(cmdID: string): boolean;\n' +
'    moveToElementText(element: Element): void;\n' +
'    expand(Unit: string): boolean;\n' +
'    queryCommandSupported(cmdID: string): boolean;\n' +
'    setEndPoint(how: string, SourceRange: TextRange): void;\n' +
'    queryCommandEnabled(cmdID: string): boolean;\n' +
'}\n' +
'declare var TextRange: {\n' +
'    prototype: TextRange;\n' +
'    new (): TextRange;\n' +
'}\n' +
'\n' +
'interface SVGTests {\n' +
'    requiredFeatures: SVGStringList;\n' +
'    requiredExtensions: SVGStringList;\n' +
'    systemLanguage: SVGStringList;\n' +
'    hasExtension(extension: string): boolean;\n' +
'}\n' +
'\n' +
'interface HTMLBlockElement extends HTMLElement, DOML2DeprecatedTextFlowControl {\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    width: number;\n' +
'    /**\n' +
'      * Sets or retrieves reference information about the object.\n' +
'      */\n' +
'    cite: string;\n' +
'}\n' +
'declare var HTMLBlockElement: {\n' +
'    prototype: HTMLBlockElement;\n' +
'    new (): HTMLBlockElement;\n' +
'}\n' +
'\n' +
'interface CSSStyleSheet extends StyleSheet {\n' +
'    owningElement: Element;\n' +
'    imports: StyleSheetList;\n' +
'    isAlternate: boolean;\n' +
'    rules: MSCSSRuleList;\n' +
'    isPrefAlternate: boolean;\n' +
'    readOnly: boolean;\n' +
'    cssText: string;\n' +
'    ownerRule: CSSRule;\n' +
'    href: string;\n' +
'    cssRules: CSSRuleList;\n' +
'    id: string;\n' +
'    pages: StyleSheetPageList;\n' +
'    addImport(bstrURL: string, lIndex?: number): number;\n' +
'    addPageRule(bstrSelector: string, bstrStyle: string, lIndex?: number): number;\n' +
'    insertRule(rule: string, index?: number): number;\n' +
'    removeRule(lIndex: number): void;\n' +
'    deleteRule(index?: number): void;\n' +
'    addRule(bstrSelector: string, bstrStyle?: string, lIndex?: number): number;\n' +
'    removeImport(lIndex: number): void;\n' +
'}\n' +
'declare var CSSStyleSheet: {\n' +
'    prototype: CSSStyleSheet;\n' +
'    new (): CSSStyleSheet;\n' +
'}\n' +
'\n' +
'interface MSSelection {\n' +
'    type: string;\n' +
'    typeDetail: string;\n' +
'    createRange(): TextRange;\n' +
'    clear(): void;\n' +
'    createRangeCollection(): TextRangeCollection;\n' +
'    empty(): void;\n' +
'}\n' +
'declare var MSSelection: {\n' +
'    prototype: MSSelection;\n' +
'    new (): MSSelection;\n' +
'}\n' +
'\n' +
'interface HTMLMetaElement extends HTMLElement {\n' +
'    /**\n' +
'      * Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header.\n' +
'      */\n' +
'    httpEquiv: string;\n' +
'    /**\n' +
'      * Sets or retrieves the value specified in the content attribute of the meta object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Gets or sets meta-information to associate with httpEquiv or name.\n' +
'      */\n' +
'    content: string;\n' +
'    /**\n' +
'      * Sets or retrieves the URL property that will be loaded after the specified time has elapsed. \n' +
'      */\n' +
'    url: string;\n' +
'    /**\n' +
'      * Sets or retrieves a scheme to be used in interpreting the value of a property specified for the object.\n' +
'      */\n' +
'    scheme: string;\n' +
'    /**\n' +
'      * Sets or retrieves the character set used to encode the object.\n' +
'      */\n' +
'    charset: string;\n' +
'}\n' +
'declare var HTMLMetaElement: {\n' +
'    prototype: HTMLMetaElement;\n' +
'    new (): HTMLMetaElement;\n' +
'}\n' +
'\n' +
'interface SVGPatternElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGTests, SVGFitToViewBox, SVGExternalResourcesRequired, SVGURIReference {\n' +
'    patternUnits: SVGAnimatedEnumeration;\n' +
'    y: SVGAnimatedLength;\n' +
'    width: SVGAnimatedLength;\n' +
'    x: SVGAnimatedLength;\n' +
'    patternContentUnits: SVGAnimatedEnumeration;\n' +
'    patternTransform: SVGAnimatedTransformList;\n' +
'    height: SVGAnimatedLength;\n' +
'}\n' +
'declare var SVGPatternElement: {\n' +
'    prototype: SVGPatternElement;\n' +
'    new (): SVGPatternElement;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedAngle {\n' +
'    animVal: SVGAngle;\n' +
'    baseVal: SVGAngle;\n' +
'}\n' +
'declare var SVGAnimatedAngle: {\n' +
'    prototype: SVGAnimatedAngle;\n' +
'    new (): SVGAnimatedAngle;\n' +
'}\n' +
'\n' +
'interface Selection {\n' +
'    isCollapsed: boolean;\n' +
'    anchorNode: Node;\n' +
'    focusNode: Node;\n' +
'    anchorOffset: number;\n' +
'    focusOffset: number;\n' +
'    rangeCount: number;\n' +
'    addRange(range: Range): void;\n' +
'    collapseToEnd(): void;\n' +
'    toString(): string;\n' +
'    selectAllChildren(parentNode: Node): void;\n' +
'    getRangeAt(index: number): Range;\n' +
'    collapse(parentNode: Node, offset: number): void;\n' +
'    removeAllRanges(): void;\n' +
'    collapseToStart(): void;\n' +
'    deleteFromDocument(): void;\n' +
'    removeRange(range: Range): void;\n' +
'}\n' +
'declare var Selection: {\n' +
'    prototype: Selection;\n' +
'    new (): Selection;\n' +
'}\n' +
'\n' +
'interface SVGScriptElement extends SVGElement, SVGExternalResourcesRequired, SVGURIReference {\n' +
'    type: string;\n' +
'}\n' +
'declare var SVGScriptElement: {\n' +
'    prototype: SVGScriptElement;\n' +
'    new (): SVGScriptElement;\n' +
'}\n' +
'\n' +
'interface HTMLDDElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves whether the browser automatically performs wordwrap.\n' +
'      */\n' +
'    noWrap: boolean;\n' +
'}\n' +
'declare var HTMLDDElement: {\n' +
'    prototype: HTMLDDElement;\n' +
'    new (): HTMLDDElement;\n' +
'}\n' +
'\n' +
'interface MSDataBindingRecordSetReadonlyExtensions {\n' +
'    recordset: Object;\n' +
'    namedRecordset(dataMember: string, hierarchy?: any): Object;\n' +
'}\n' +
'\n' +
'interface CSSStyleRule extends CSSRule {\n' +
'    selectorText: string;\n' +
'    style: MSStyleCSSProperties;\n' +
'    readOnly: boolean;\n' +
'}\n' +
'declare var CSSStyleRule: {\n' +
'    prototype: CSSStyleRule;\n' +
'    new (): CSSStyleRule;\n' +
'}\n' +
'\n' +
'interface NodeIterator {\n' +
'    whatToShow: number;\n' +
'    filter: NodeFilter;\n' +
'    root: Node;\n' +
'    expandEntityReferences: boolean;\n' +
'    nextNode(): Node;\n' +
'    detach(): void;\n' +
'    previousNode(): Node;\n' +
'}\n' +
'declare var NodeIterator: {\n' +
'    prototype: NodeIterator;\n' +
'    new (): NodeIterator;\n' +
'}\n' +
'\n' +
'interface SVGViewElement extends SVGElement, SVGZoomAndPan, SVGFitToViewBox, SVGExternalResourcesRequired {\n' +
'    viewTarget: SVGStringList;\n' +
'}\n' +
'declare var SVGViewElement: {\n' +
'    prototype: SVGViewElement;\n' +
'    new (): SVGViewElement;\n' +
'}\n' +
'\n' +
'interface HTMLLinkElement extends HTMLElement, LinkStyle {\n' +
'    /**\n' +
'      * Sets or retrieves the relationship between the object and the destination of the link.\n' +
'      */\n' +
'    rel: string;\n' +
'    /**\n' +
'      * Sets or retrieves the window or frame at which to target content.\n' +
'      */\n' +
'    target: string;\n' +
'    /**\n' +
'      * Sets or retrieves a destination URL or an anchor point.\n' +
'      */\n' +
'    href: string;\n' +
'    /**\n' +
'      * Sets or retrieves the media type.\n' +
'      */\n' +
'    media: string;\n' +
'    /**\n' +
'      * Sets or retrieves the relationship between the object and the destination of the link.\n' +
'      */\n' +
'    rev: string;\n' +
'    /**\n' +
'      * Sets or retrieves the MIME type of the object.\n' +
'      */\n' +
'    type: string;\n' +
'    /**\n' +
'      * Sets or retrieves the character set used to encode the object.\n' +
'      */\n' +
'    charset: string;\n' +
'    /**\n' +
'      * Sets or retrieves the language code of the object.\n' +
'      */\n' +
'    hreflang: string;\n' +
'}\n' +
'declare var HTMLLinkElement: {\n' +
'    prototype: HTMLLinkElement;\n' +
'    new (): HTMLLinkElement;\n' +
'}\n' +
'\n' +
'interface SVGLocatable {\n' +
'    farthestViewportElement: SVGElement;\n' +
'    nearestViewportElement: SVGElement;\n' +
'    getBBox(): SVGRect;\n' +
'    getTransformToElement(element: SVGElement): SVGMatrix;\n' +
'    getCTM(): SVGMatrix;\n' +
'    getScreenCTM(): SVGMatrix;\n' +
'}\n' +
'\n' +
'interface HTMLFontElement extends HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {\n' +
'    /**\n' +
'      * Sets or retrieves the current typeface family.\n' +
'      */\n' +
'    face: string;\n' +
'}\n' +
'declare var HTMLFontElement: {\n' +
'    prototype: HTMLFontElement;\n' +
'    new (): HTMLFontElement;\n' +
'}\n' +
'\n' +
'interface SVGTitleElement extends SVGElement, SVGStylable, SVGLangSpace {\n' +
'}\n' +
'declare var SVGTitleElement: {\n' +
'    prototype: SVGTitleElement;\n' +
'    new (): SVGTitleElement;\n' +
'}\n' +
'\n' +
'interface ControlRangeCollection {\n' +
'    length: number;\n' +
'    queryCommandValue(cmdID: string): any;\n' +
'    remove(index: number): void;\n' +
'    add(item: Element): void;\n' +
'    queryCommandIndeterm(cmdID: string): boolean;\n' +
'    scrollIntoView(varargStart?: any): void;\n' +
'    item(index: number): Element;\n' +
'    [index: number]: Element;\n' +
'    execCommand(cmdID: string, showUI?: boolean, value?: any): boolean;\n' +
'    addElement(item: Element): void;\n' +
'    queryCommandState(cmdID: string): boolean;\n' +
'    queryCommandSupported(cmdID: string): boolean;\n' +
'    queryCommandEnabled(cmdID: string): boolean;\n' +
'    queryCommandText(cmdID: string): string;\n' +
'    select(): void;\n' +
'}\n' +
'declare var ControlRangeCollection: {\n' +
'    prototype: ControlRangeCollection;\n' +
'    new (): ControlRangeCollection;\n' +
'}\n' +
'\n' +
'interface MSNamespaceInfo extends MSEventAttachmentTarget {\n' +
'    urn: string;\n' +
'    onreadystatechange: (ev: Event) => any;\n' +
'    name: string;\n' +
'    readyState: string;\n' +
'    doImport(implementationUrl: string): void;\n' +
'}\n' +
'declare var MSNamespaceInfo: {\n' +
'    prototype: MSNamespaceInfo;\n' +
'    new (): MSNamespaceInfo;\n' +
'}\n' +
'\n' +
'interface WindowSessionStorage {\n' +
'    sessionStorage: Storage;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedTransformList {\n' +
'    animVal: SVGTransformList;\n' +
'    baseVal: SVGTransformList;\n' +
'}\n' +
'declare var SVGAnimatedTransformList: {\n' +
'    prototype: SVGAnimatedTransformList;\n' +
'    new (): SVGAnimatedTransformList;\n' +
'}\n' +
'\n' +
'interface HTMLTableCaptionElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves the alignment of the caption or legend.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Sets or retrieves whether the caption appears at the top or bottom of the table.\n' +
'      */\n' +
'    vAlign: string;\n' +
'}\n' +
'declare var HTMLTableCaptionElement: {\n' +
'    prototype: HTMLTableCaptionElement;\n' +
'    new (): HTMLTableCaptionElement;\n' +
'}\n' +
'\n' +
'interface HTMLOptionElement extends HTMLElement, MSDataBindingExtensions {\n' +
'    /**\n' +
'      * Sets or retrieves the ordinal position of an option in a list box.\n' +
'      */\n' +
'    index: number;\n' +
'    /**\n' +
'      * Sets or retrieves the status of an option.\n' +
'      */\n' +
'    defaultSelected: boolean;\n' +
'    /**\n' +
'      * Sets or retrieves the value which is returned to the server when the form control is submitted.\n' +
'      */\n' +
'    value: string;\n' +
'    /**\n' +
'      * Sets or retrieves the text string specified by the option tag.\n' +
'      */\n' +
'    text: string;\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in.\n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'    /**\n' +
'      * Sets or retrieves a value that you can use to implement your own label functionality for the object.\n' +
'      */\n' +
'    label: string;\n' +
'    /**\n' +
'      * Sets or retrieves whether the option in the list box is the default item.\n' +
'      */\n' +
'    selected: boolean;\n' +
'    create(): HTMLOptionElement;\n' +
'}\n' +
'declare var HTMLOptionElement: {\n' +
'    prototype: HTMLOptionElement;\n' +
'    new (): HTMLOptionElement;\n' +
'}\n' +
'\n' +
'interface HTMLMapElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves the name of the object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Retrieves a collection of the area objects defined for the given map object.\n' +
'      */\n' +
'    areas: HTMLAreasCollection;\n' +
'}\n' +
'declare var HTMLMapElement: {\n' +
'    prototype: HTMLMapElement;\n' +
'    new (): HTMLMapElement;\n' +
'}\n' +
'\n' +
'interface HTMLMenuElement extends HTMLElement, DOML2DeprecatedListSpaceReduction {\n' +
'    type: string;\n' +
'}\n' +
'declare var HTMLMenuElement: {\n' +
'    prototype: HTMLMenuElement;\n' +
'    new (): HTMLMenuElement;\n' +
'}\n' +
'\n' +
'interface MouseWheelEvent extends MouseEvent {\n' +
'    wheelDelta: number;\n' +
'    initMouseWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, wheelDeltaArg: number): void;\n' +
'}\n' +
'declare var MouseWheelEvent: {\n' +
'    prototype: MouseWheelEvent;\n' +
'    new (): MouseWheelEvent;\n' +
'}\n' +
'\n' +
'interface SVGFitToViewBox {\n' +
'    viewBox: SVGAnimatedRect;\n' +
'    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;\n' +
'}\n' +
'\n' +
'interface SVGPointList {\n' +
'    numberOfItems: number;\n' +
'    replaceItem(newItem: SVGPoint, index: number): SVGPoint;\n' +
'    getItem(index: number): SVGPoint;\n' +
'    clear(): void;\n' +
'    appendItem(newItem: SVGPoint): SVGPoint;\n' +
'    initialize(newItem: SVGPoint): SVGPoint;\n' +
'    removeItem(index: number): SVGPoint;\n' +
'    insertItemBefore(newItem: SVGPoint, index: number): SVGPoint;\n' +
'}\n' +
'declare var SVGPointList: {\n' +
'    prototype: SVGPointList;\n' +
'    new (): SVGPointList;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedLengthList {\n' +
'    animVal: SVGLengthList;\n' +
'    baseVal: SVGLengthList;\n' +
'}\n' +
'declare var SVGAnimatedLengthList: {\n' +
'    prototype: SVGAnimatedLengthList;\n' +
'    new (): SVGAnimatedLengthList;\n' +
'}\n' +
'\n' +
'interface Window extends EventTarget, MSEventAttachmentTarget, WindowLocalStorage, MSWindowExtensions, WindowSessionStorage, WindowTimers {\n' +
'    ondragend: (ev: DragEvent) => any;\n' +
'    onkeydown: (ev: KeyboardEvent) => any;\n' +
'    ondragover: (ev: DragEvent) => any;\n' +
'    onkeyup: (ev: KeyboardEvent) => any;\n' +
'    onreset: (ev: Event) => any;\n' +
'    onmouseup: (ev: MouseEvent) => any;\n' +
'    ondragstart: (ev: DragEvent) => any;\n' +
'    ondrag: (ev: DragEvent) => any;\n' +
'    screenX: number;\n' +
'    onmouseover: (ev: MouseEvent) => any;\n' +
'    ondragleave: (ev: DragEvent) => any;\n' +
'    history: History;\n' +
'    pageXOffset: number;\n' +
'    name: string;\n' +
'    onafterprint: (ev: Event) => any;\n' +
'    onpause: (ev: Event) => any;\n' +
'    onbeforeprint: (ev: Event) => any;\n' +
'    top: Window;\n' +
'    onmousedown: (ev: MouseEvent) => any;\n' +
'    onseeked: (ev: Event) => any;\n' +
'    opener: Window;\n' +
'    onclick: (ev: MouseEvent) => any;\n' +
'    innerHeight: number;\n' +
'    onwaiting: (ev: Event) => any;\n' +
'    ononline: (ev: Event) => any;\n' +
'    ondurationchange: (ev: Event) => any;\n' +
'    frames: Window;\n' +
'    onblur: (ev: FocusEvent) => any;\n' +
'    onemptied: (ev: Event) => any;\n' +
'    onseeking: (ev: Event) => any;\n' +
'    oncanplay: (ev: Event) => any;\n' +
'    outerWidth: number;\n' +
'    onstalled: (ev: Event) => any;\n' +
'    onmousemove: (ev: MouseEvent) => any;\n' +
'    innerWidth: number;\n' +
'    onoffline: (ev: Event) => any;\n' +
'    length: number;\n' +
'    screen: Screen;\n' +
'    onbeforeunload: (ev: BeforeUnloadEvent) => any;\n' +
'    onratechange: (ev: Event) => any;\n' +
'    onstorage: (ev: StorageEvent) => any;\n' +
'    onloadstart: (ev: Event) => any;\n' +
'    ondragenter: (ev: DragEvent) => any;\n' +
'    onsubmit: (ev: Event) => any;\n' +
'    self: Window;\n' +
'    document: Document;\n' +
'    onprogress: (ev: any) => any;\n' +
'    ondblclick: (ev: MouseEvent) => any;\n' +
'    pageYOffset: number;\n' +
'    oncontextmenu: (ev: MouseEvent) => any;\n' +
'    onchange: (ev: Event) => any;\n' +
'    onloadedmetadata: (ev: Event) => any;\n' +
'    onplay: (ev: Event) => any;\n' +
'    onerror: ErrorEventHandler;\n' +
'    onplaying: (ev: Event) => any;\n' +
'    parent: Window;\n' +
'    location: Location;\n' +
'    oncanplaythrough: (ev: Event) => any;\n' +
'    onabort: (ev: UIEvent) => any;\n' +
'    onreadystatechange: (ev: Event) => any;\n' +
'    outerHeight: number;\n' +
'    onkeypress: (ev: KeyboardEvent) => any;\n' +
'    frameElement: Element;\n' +
'    onloadeddata: (ev: Event) => any;\n' +
'    onsuspend: (ev: Event) => any;\n' +
'    window: Window;\n' +
'    onfocus: (ev: FocusEvent) => any;\n' +
'    onmessage: (ev: MessageEvent) => any;\n' +
'    ontimeupdate: (ev: Event) => any;\n' +
'    onresize: (ev: UIEvent) => any;\n' +
'    onselect: (ev: UIEvent) => any;\n' +
'    navigator: Navigator;\n' +
'    styleMedia: StyleMedia;\n' +
'    ondrop: (ev: DragEvent) => any;\n' +
'    onmouseout: (ev: MouseEvent) => any;\n' +
'    onended: (ev: Event) => any;\n' +
'    onhashchange: (ev: Event) => any;\n' +
'    onunload: (ev: Event) => any;\n' +
'    onscroll: (ev: UIEvent) => any;\n' +
'    screenY: number;\n' +
'    onmousewheel: (ev: MouseWheelEvent) => any;\n' +
'    onload: (ev: Event) => any;\n' +
'    onvolumechange: (ev: Event) => any;\n' +
'    oninput: (ev: Event) => any;\n' +
'    performance: Performance;\n' +
'    alert(message?: any): void;\n' +
'    scroll(x?: number, y?: number): void;\n' +
'    focus(): void;\n' +
'    scrollTo(x?: number, y?: number): void;\n' +
'    print(): void;\n' +
'    prompt(message?: string, defaul?: string): string;\n' +
'    toString(): string;\n' +
'    open(url?: string, target?: string, features?: string, replace?: boolean): Window;\n' +
'    scrollBy(x?: number, y?: number): void;\n' +
'    confirm(message?: string): boolean;\n' +
'    close(): void;\n' +
'    postMessage(message: any, targetOrigin: string, ports?: any): void;\n' +
'    showModalDialog(url?: string, argument?: any, options?: any): any;\n' +
'    blur(): void;\n' +
'    getSelection(): Selection;\n' +
'    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;\n' +
'}\n' +
'declare var Window: {\n' +
'    prototype: Window;\n' +
'    new (): Window;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedPreserveAspectRatio {\n' +
'    animVal: SVGPreserveAspectRatio;\n' +
'    baseVal: SVGPreserveAspectRatio;\n' +
'}\n' +
'declare var SVGAnimatedPreserveAspectRatio: {\n' +
'    prototype: SVGAnimatedPreserveAspectRatio;\n' +
'    new (): SVGAnimatedPreserveAspectRatio;\n' +
'}\n' +
'\n' +
'interface MSSiteModeEvent extends Event {\n' +
'    buttonID: number;\n' +
'    actionURL: string;\n' +
'}\n' +
'declare var MSSiteModeEvent: {\n' +
'    prototype: MSSiteModeEvent;\n' +
'    new (): MSSiteModeEvent;\n' +
'}\n' +
'\n' +
'interface DOML2DeprecatedTextFlowControl {\n' +
'    clear: string;\n' +
'}\n' +
'\n' +
'interface StyleSheetPageList {\n' +
'    length: number;\n' +
'    item(index: number): CSSPageRule;\n' +
'    [index: number]: CSSPageRule;\n' +
'}\n' +
'declare var StyleSheetPageList: {\n' +
'    prototype: StyleSheetPageList;\n' +
'    new (): StyleSheetPageList;\n' +
'}\n' +
'\n' +
'interface MSCSSProperties extends CSSStyleDeclaration {\n' +
'    scrollbarShadowColor: string;\n' +
'    scrollbarHighlightColor: string;\n' +
'    layoutGridChar: string;\n' +
'    layoutGridType: string;\n' +
'    textAutospace: string;\n' +
'    textKashidaSpace: string;\n' +
'    writingMode: string;\n' +
'    scrollbarFaceColor: string;\n' +
'    backgroundPositionY: string;\n' +
'    lineBreak: string;\n' +
'    imeMode: string;\n' +
'    msBlockProgression: string;\n' +
'    layoutGridLine: string;\n' +
'    scrollbarBaseColor: string;\n' +
'    layoutGrid: string;\n' +
'    layoutFlow: string;\n' +
'    textKashida: string;\n' +
'    filter: string;\n' +
'    zoom: string;\n' +
'    scrollbarArrowColor: string;\n' +
'    behavior: string;\n' +
'    backgroundPositionX: string;\n' +
'    accelerator: string;\n' +
'    layoutGridMode: string;\n' +
'    textJustifyTrim: string;\n' +
'    scrollbar3dLightColor: string;\n' +
'    msInterpolationMode: string;\n' +
'    scrollbarTrackColor: string;\n' +
'    scrollbarDarkShadowColor: string;\n' +
'    styleFloat: string;\n' +
'    getAttribute(attributeName: string, flags?: number): any;\n' +
'    setAttribute(attributeName: string, AttributeValue: any, flags?: number): void;\n' +
'    removeAttribute(attributeName: string, flags?: number): boolean;\n' +
'}\n' +
'declare var MSCSSProperties: {\n' +
'    prototype: MSCSSProperties;\n' +
'    new (): MSCSSProperties;\n' +
'}\n' +
'\n' +
'interface HTMLCollection extends MSHTMLCollectionExtensions {\n' +
'    /**\n' +
'      * Sets or retrieves the number of objects in a collection.\n' +
'      */\n' +
'    length: number;\n' +
'    /**\n' +
'      * Retrieves an object from various collections.\n' +
'      */\n' +
'    item(nameOrIndex?: any, optionalIndex?: any): Element;\n' +
'    /**\n' +
'      * Retrieves a select object or an object from an options collection.\n' +
'      */\n' +
'    namedItem(name: string): Element;\n' +
'    [name: number]: Element;\n' +
'}\n' +
'declare var HTMLCollection: {\n' +
'    prototype: HTMLCollection;\n' +
'    new (): HTMLCollection;\n' +
'}\n' +
'\n' +
'interface SVGExternalResourcesRequired {\n' +
'    externalResourcesRequired: SVGAnimatedBoolean;\n' +
'}\n' +
'\n' +
'interface HTMLImageElement extends HTMLElement, MSImageResourceExtensions, MSDataBindingExtensions, MSResourceMetadata {\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    width: number;\n' +
'    /**\n' +
'      * Sets or retrieves the vertical margin for the object.\n' +
'      */\n' +
'    vspace: number;\n' +
'    /**\n' +
'      * The original height of the image resource before sizing.\n' +
'      */\n' +
'    naturalHeight: number;\n' +
'    /**\n' +
'      * Sets or retrieves a text alternative to the graphic.\n' +
'      */\n' +
'    alt: string;\n' +
'    /**\n' +
'      * Sets or retrieves how the object is aligned with adjacent text.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * The address or URL of the a media resource that is to be considered.\n' +
'      */\n' +
'    src: string;\n' +
'    /**\n' +
'      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.\n' +
'      */\n' +
'    useMap: string;\n' +
'    /**\n' +
'      * The original width of the image resource before sizing.\n' +
'      */\n' +
'    naturalWidth: number;\n' +
'    /**\n' +
'      * Sets or retrieves the name of the object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Sets or retrieves the height of the object.\n' +
'      */\n' +
'    height: number;\n' +
'    /**\n' +
'      * Specifies the properties of a border drawn around an object.\n' +
'      */\n' +
'    border: string;\n' +
'    /**\n' +
'      * Sets or retrieves the width of the border to draw around the object.\n' +
'      */\n' +
'    hspace: number;\n' +
'    /**\n' +
'      * Sets or retrieves a Uniform Resource Identifier (URI) to a long description of the object.\n' +
'      */\n' +
'    longDesc: string;\n' +
'    /**\n' +
'      * Contains the hypertext reference (HREF) of the URL.\n' +
'      */\n' +
'    href: string;\n' +
'    /**\n' +
'      * Sets or retrieves whether the image is a server-side image map.\n' +
'      */\n' +
'    isMap: boolean;\n' +
'    /**\n' +
'      * Retrieves whether the object is fully loaded.\n' +
'      */\n' +
'    complete: boolean;\n' +
'    create(): HTMLImageElement;\n' +
'}\n' +
'declare var HTMLImageElement: {\n' +
'    prototype: HTMLImageElement;\n' +
'    new (): HTMLImageElement;\n' +
'}\n' +
'\n' +
'interface HTMLAreaElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves the protocol portion of a URL.\n' +
'      */\n' +
'    protocol: string;\n' +
'    /**\n' +
'      * Sets or retrieves the substring of the href property that follows the question mark.\n' +
'      */\n' +
'    search: string;\n' +
'    /**\n' +
'      * Sets or retrieves a text alternative to the graphic.\n' +
'      */\n' +
'    alt: string;\n' +
'    /**\n' +
'      * Sets or retrieves the coordinates of the object.\n' +
'      */\n' +
'    coords: string;\n' +
'    /**\n' +
'      * Sets or retrieves the host name part of the location or URL. \n' +
'      */\n' +
'    hostname: string;\n' +
'    /**\n' +
'      * Sets or retrieves the port number associated with a URL.\n' +
'      */\n' +
'    port: string;\n' +
'    /**\n' +
'      * Sets or retrieves the file name or path specified by the object.\n' +
'      */\n' +
'    pathname: string;\n' +
'    /**\n' +
'      * Sets or retrieves the hostname and port number of the location or URL.\n' +
'      */\n' +
'    host: string;\n' +
'    /**\n' +
'      * Sets or retrieves the subsection of the href property that follows the number sign (#).\n' +
'      */\n' +
'    hash: string;\n' +
'    /**\n' +
'      * Sets or retrieves the window or frame at which to target content.\n' +
'      */\n' +
'    target: string;\n' +
'    /**\n' +
'      * Sets or retrieves a destination URL or an anchor point.\n' +
'      */\n' +
'    href: string;\n' +
'    /**\n' +
'      * Sets or gets whether clicks in this region cause action.\n' +
'      */\n' +
'    noHref: boolean;\n' +
'    /**\n' +
'      * Sets or retrieves the shape of the object.\n' +
'      */\n' +
'    shape: string;\n' +
'    /** \n' +
'      * Returns a string representation of an object.\n' +
'      */\n' +
'    toString(): string;\n' +
'}\n' +
'declare var HTMLAreaElement: {\n' +
'    prototype: HTMLAreaElement;\n' +
'    new (): HTMLAreaElement;\n' +
'}\n' +
'\n' +
'interface EventTarget {\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'    removeEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'    dispatchEvent(evt: Event): boolean;\n' +
'}\n' +
'\n' +
'interface SVGAngle {\n' +
'    valueAsString: string;\n' +
'    valueInSpecifiedUnits: number;\n' +
'    value: number;\n' +
'    unitType: number;\n' +
'    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;\n' +
'    convertToSpecifiedUnits(unitType: number): void;\n' +
'    SVG_ANGLETYPE_RAD: number;\n' +
'    SVG_ANGLETYPE_UNKNOWN: number;\n' +
'    SVG_ANGLETYPE_UNSPECIFIED: number;\n' +
'    SVG_ANGLETYPE_DEG: number;\n' +
'    SVG_ANGLETYPE_GRAD: number;\n' +
'}\n' +
'declare var SVGAngle: {\n' +
'    prototype: SVGAngle;\n' +
'    new (): SVGAngle;\n' +
'    SVG_ANGLETYPE_RAD: number;\n' +
'    SVG_ANGLETYPE_UNKNOWN: number;\n' +
'    SVG_ANGLETYPE_UNSPECIFIED: number;\n' +
'    SVG_ANGLETYPE_DEG: number;\n' +
'    SVG_ANGLETYPE_GRAD: number;\n' +
'}\n' +
'\n' +
'interface HTMLButtonElement extends HTMLElement, MSDataBindingExtensions {\n' +
'    /** \n' +
'      * Sets or retrieves the default or selected value of the control.\n' +
'      */\n' +
'    value: string;\n' +
'    status: any;\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in.\n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'    /** \n' +
'      * Sets or retrieves the name of the object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Gets the classification and default behavior of the button.\n' +
'      */\n' +
'    type: string;\n' +
'    /**\n' +
'      * Creates a TextRange object for the element.\n' +
'      */\n' +
'    createTextRange(): TextRange;\n' +
'}\n' +
'declare var HTMLButtonElement: {\n' +
'    prototype: HTMLButtonElement;\n' +
'    new (): HTMLButtonElement;\n' +
'}\n' +
'\n' +
'interface HTMLSourceElement extends HTMLElement {\n' +
'    /**\n' +
'      * The address or URL of the a media resource that is to be considered.\n' +
'      */\n' +
'    src: string;\n' +
'    /**\n' +
'      * Gets or sets the intended media type of the media source.\n' +
'     */\n' +
'    media: string;\n' +
'    /**\n' +
'     * Gets or sets the MIME type of a media resource.\n' +
'     */\n' +
'    type: string;\n' +
'}\n' +
'declare var HTMLSourceElement: {\n' +
'    prototype: HTMLSourceElement;\n' +
'    new (): HTMLSourceElement;\n' +
'}\n' +
'\n' +
'interface CanvasGradient {\n' +
'    addColorStop(offset: number, color: string): void;\n' +
'}\n' +
'declare var CanvasGradient: {\n' +
'    prototype: CanvasGradient;\n' +
'    new (): CanvasGradient;\n' +
'}\n' +
'\n' +
'interface KeyboardEvent extends UIEvent {\n' +
'    location: number;\n' +
'    keyCode: number;\n' +
'    shiftKey: boolean;\n' +
'    which: number;\n' +
'    locale: string;\n' +
'    key: string;\n' +
'    altKey: boolean;\n' +
'    metaKey: boolean;\n' +
'    char: string;\n' +
'    ctrlKey: boolean;\n' +
'    repeat: boolean;\n' +
'    charCode: number;\n' +
'    getModifierState(keyArg: string): boolean;\n' +
'    initKeyboardEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, keyArg: string, locationArg: number, modifiersListArg: string, repeat: boolean, locale: string): void;\n' +
'    DOM_KEY_LOCATION_RIGHT: number;\n' +
'    DOM_KEY_LOCATION_STANDARD: number;\n' +
'    DOM_KEY_LOCATION_LEFT: number;\n' +
'    DOM_KEY_LOCATION_NUMPAD: number;\n' +
'    DOM_KEY_LOCATION_JOYSTICK: number;\n' +
'    DOM_KEY_LOCATION_MOBILE: number;\n' +
'}\n' +
'declare var KeyboardEvent: {\n' +
'    prototype: KeyboardEvent;\n' +
'    new (): KeyboardEvent;\n' +
'    DOM_KEY_LOCATION_RIGHT: number;\n' +
'    DOM_KEY_LOCATION_STANDARD: number;\n' +
'    DOM_KEY_LOCATION_LEFT: number;\n' +
'    DOM_KEY_LOCATION_NUMPAD: number;\n' +
'    DOM_KEY_LOCATION_JOYSTICK: number;\n' +
'    DOM_KEY_LOCATION_MOBILE: number;\n' +
'}\n' +
'\n' +
'interface Document extends Node, NodeSelector, MSEventAttachmentTarget, DocumentEvent, MSResourceMetadata, MSNodeExtensions {\n' +
'    /**\n' +
'      * Retrieves the collection of user agents and versions declared in the X-UA-Compatible\n' +
'      */\n' +
'    compatible: MSCompatibleInfoCollection;\n' +
'    /**\n' +
'      * Fires when the user presses a key.\n' +
'      * @param ev The keyboard event\n' +
'      */\n' +
'    onkeydown: (ev: KeyboardEvent) => any;\n' +
'    /**\n' +
'      * Fires when the user releases a key.\n' +
'      * @param ev The keyboard event\n' +
'      */\n' +
'    onkeyup: (ev: KeyboardEvent) => any;\n' +
'\n' +
'    /**\n' +
'      * Gets the implementation object of the current document. \n' +
'      */\n' +
'    implementation: DOMImplementation;\n' +
'    /**\n' +
'      * Fires when the user resets a form. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onreset: (ev: Event) => any;\n' +
'\n' +
'    /**\n' +
'      * Retrieves a collection of all script objects in the document.\n' +
'      */\n' +
'    scripts: HTMLCollection;\n' +
'\n' +
'    /**\n' +
'      * Fires when the user presses the F1 key while the browser is the active window. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onhelp: (ev: Event) => any;\n' +
'\n' +
'    /** \n' +
'      * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.\n' +
'      * @param ev The drag event.\n' +
'      */\n' +
'    ondragleave: (ev: DragEvent) => any;\n' +
'\n' +
'    /**\n' +
'      * Gets or sets the character set used to encode the object.\n' +
'      */\n' +
'    charset: string;\n' +
'\n' +
'    /**\n' +
'      * Fires for an element just prior to setting focus on that element.\n' +
'      * @param ev The focus event\n' +
'      */\n' +
'    onfocusin: (ev: FocusEvent) => any;\n' +
'\n' +
'\n' +
'    /** \n' +
'      * Sets or gets the color of the links that the user has visited.\n' +
'      */\n' +
'    vlinkColor: string;\n' +
'\n' +
'    /**\n' +
'      * Occurs when the seek operation ends. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onseeked: (ev: Event) => any;\n' +
'\n' +
'    security: string;\n' +
'\n' +
'    /**\n' +
'      * Contains the title of the document.\n' +
'      */\n' +
'    title: string;\n' +
'\n' +
'    /**\n' +
'      * Retrieves a collection of namespace objects.\n' +
'      */\n' +
'    namespaces: MSNamespaceInfoCollection;\n' +
'\n' +
'    /**\n' +
'      * Gets the default character set from the current regional language settings.\n' +
'      */\n' +
'    defaultCharset: string;\n' +
'\n' +
'    /**\n' +
'      * Retrieves a collection of all embed objects in the document.\n' +
'      */\n' +
'    embeds: HTMLCollection;\n' +
'\n' +
'    /**\n' +
'      * Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.\n' +
'      */\n' +
'    styleSheets: StyleSheetList;\n' +
'\n' +
'    /**\n' +
'      * Retrieves a collection of all window objects defined by the given document or defined by the document associated with the given window.\n' +
'      */\n' +
'    frames: Window;\n' +
'\n' +
'    /**\n' +
'      * Occurs when the duration attribute is updated. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    ondurationchange: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Returns a reference to the collection of elements contained by the object.\n' +
'      */\n' +
'    all: HTMLCollection;\n' +
'\n' +
'    /**\n' +
'      * Retrieves a collection, in source order, of all form objects in the document.\n' +
'      */\n' +
'    forms: HTMLCollection;\n' +
'\n' +
'    /** \n' +
'      * Fires when the object loses the input focus. \n' +
'      * @param ev The focus event.\n' +
'      */\n' +
'    onblur: (ev: FocusEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Sets or retrieves a value that indicates the reading order of the object. \n' +
'      */\n' +
'    dir: string;\n' +
'\n' +
'    /**\n' +
'      * Occurs when the media element is reset to its initial state. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onemptied: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Sets or gets a value that indicates whether the document can be edited.\n' +
'      */\n' +
'    designMode: string;\n' +
'\n' +
'    /**\n' +
'      * Occurs when the current playback position is moved. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onseeking: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the activeElement is changed from the current object to another object in the parent document.\n' +
'      * @param ev The UI Event\n' +
'      */\n' +
'    ondeactivate: (ev: UIEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Occurs when playback is possible, but would require further buffering. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    oncanplay: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the data set exposed by a data source object changes. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    ondatasetchanged: (ev: MSEventObj) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when rows are about to be deleted from the recordset.\n' +
'      * @param ev The event \n' +
'      */\n' +
'    onrowsdelete: (ev: MSEventObj) => any;\n' +
'\n' +
'    Script: MSScriptHost;\n' +
'\n' +
'    /**\n' +
'      * Occurs when Internet Explorer begins looking for media data. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onloadstart: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Gets the URL for the document, stripped of any character encoding.\n' +
'      */\n' +
'    URLUnencoded: string;\n' +
'\n' +
'    defaultView: Window;\n' +
'\n' +
'    /**\n' +
'      * Fires when the user is about to make a control selection of the object.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    oncontrolselect: (ev: MSEventObj) => any;\n' +
'\n' +
'\n' +
'    /** \n' +
'      * Fires on the target element when the user drags the object to a valid drop target.\n' +
'      * @param ev The drag event.\n' +
'      */\n' +
'    ondragenter: (ev: DragEvent) => any;\n' +
'\n' +
'    onsubmit: (ev: Event) => any;\n' +
'\n' +
'    /**\n' +
'      * Returns the character encoding used to create the webpage that is loaded into the document object.\n' +
'      */\n' +
'    inputEncoding: string;\n' +
'\n' +
'    /**\n' +
'      * Gets the object that has the focus when the parent document has focus.\n' +
'      */\n' +
'    activeElement: Element;\n' +
'\n' +
'    /**\n' +
'      * Fires when the contents of the object or selection have changed. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onchange: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Retrieves a collection of all a objects that specify the href property and all area objects in the document.\n' +
'      */\n' +
'    links: HTMLCollection;\n' +
'\n' +
'    /**\n' +
'      * Retrieves an autogenerated, unique identifier for the object. \n' +
'      */\n' +
'    uniqueID: string;\n' +
'\n' +
'    /**\n' +
'      * Sets or gets the URL for the current document. \n' +
'      */\n' +
'    URL: string;\n' +
'\n' +
'    /**\n' +
'      * Fires immediately before the object is set as the active element.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onbeforeactivate: (ev: UIEvent) => any;\n' +
'\n' +
'    head: HTMLHeadElement;\n' +
'    cookie: string;\n' +
'    xmlEncoding: string;\n' +
'    oncanplaythrough: (ev: Event) => any;\n' +
'\n' +
'    /** \n' +
'      * Retrieves the document compatibility mode of the document.\n' +
'      */\n' +
'    documentMode: number;\n' +
'\n' +
'    characterSet: string;\n' +
'\n' +
'    /**\n' +
'      * Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.\n' +
'      */\n' +
'    anchors: HTMLCollection;\n' +
'\n' +
'    onbeforeupdate: (ev: MSEventObj) => any;\n' +
'\n' +
'    /** \n' +
'      * Fires to indicate that all data is available from the data source object. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    ondatasetcomplete: (ev: MSEventObj) => any;\n' +
'\n' +
'    plugins: HTMLCollection;\n' +
'\n' +
'    /**\n' +
'      * Occurs if the load operation has been intentionally halted. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onsuspend: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Gets the root svg element in the document hierarchy.\n' +
'      */\n' +
'    rootElement: SVGSVGElement;\n' +
'\n' +
'    /**\n' +
'      * Retrieves a value that indicates the current state of the object.\n' +
'      */\n' +
'    readyState: string;\n' +
'\n' +
'    /**\n' +
'      * Gets the URL of the location that referred the user to the current page.\n' +
'      */\n' +
'    referrer: string;\n' +
'\n' +
'    /**\n' +
'      * Sets or gets the color of all active links in the document.\n' +
'      */\n' +
'    alinkColor: string;\n' +
'\n' +
'    /**\n' +
'      * Fires on a databound object when an error occurs while updating the associated data in the data source object. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onerrorupdate: (ev: MSEventObj) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Gets a reference to the container object of the window.\n' +
'      */\n' +
'    parentWindow: Window;\n' +
'\n' +
'    /**\n' +
'      * Fires when the user moves the mouse pointer outside the boundaries of the object. \n' +
'      * @param ev The mouse event.\n' +
'      */\n' +
'    onmouseout: (ev: MouseEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Occurs when a user clicks a button in a Thumbnail Toolbar of a webpage running in Site Mode.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onmsthumbnailclick: (ev: MSSiteModeEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the wheel button is rotated. \n' +
'      * @param ev The mouse event\n' +
'      */\n' +
'    onmousewheel: (ev: MouseWheelEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Occurs when the volume is changed, or playback is muted or unmuted.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onvolumechange: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /** \n' +
'      * Fires when data changes in the data provider.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    oncellchange: (ev: MSEventObj) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires just before the data source control changes the current row in the object. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onrowexit: (ev: MSEventObj) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires just after new rows are inserted in the current recordset.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onrowsinserted: (ev: MSEventObj) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Gets or sets the version attribute specified in the declaration of an XML document.\n' +
'      */\n' +
'    xmlVersion: string;\n' +
'\n' +
'    msCapsLockWarningOff: boolean;\n' +
'\n' +
'    /**\n' +
'      * Fires when a property changes on the object.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onpropertychange: (ev: MSEventObj) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires on the source object when the user releases the mouse at the close of a drag operation.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    ondragend: (ev: DragEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Gets an object representing the document type declaration associated with the current document. \n' +
'      */\n' +
'    doctype: DocumentType;\n' +
'\n' +
'    /**\n' +
'      * Fires on the target element continuously while the user drags the object over a valid drop target.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    ondragover: (ev: DragEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Deprecated. Sets or retrieves a value that indicates the background color behind the object. \n' +
'      */\n' +
'    bgColor: string;\n' +
'\n' +
'    /**\n' +
'      * Fires on the source object when the user starts to drag a text selection or selected object. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    ondragstart: (ev: DragEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the user releases a mouse button while the mouse is over the object. \n' +
'      * @param ev The mouse event.\n' +
'      */\n' +
'    onmouseup: (ev: MouseEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires on the source object continuously during a drag operation.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    ondrag: (ev: DragEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the user moves the mouse pointer into the object.\n' +
'      * @param ev The mouse event.\n' +
'      */\n' +
'    onmouseover: (ev: MouseEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Sets or gets the color of the document links. \n' +
'      */\n' +
'    linkColor: string;\n' +
'\n' +
'    /**\n' +
'      * Occurs when playback is paused.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onpause: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the user clicks the object with either mouse button. \n' +
'      * @param ev The mouse event.\n' +
'      */\n' +
'    onmousedown: (ev: MouseEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the user clicks the left mouse button on the object\n' +
'      * @param ev The mouse event.\n' +
'      */\n' +
'    onclick: (ev: MouseEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Occurs when playback stops because the next frame of a video resource is not available. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onwaiting: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the user clicks the Stop button or leaves the Web page.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onstop: (ev: Event) => any;\n' +
'\n' +
'    /**\n' +
'      * false (false)[rolls\n' +
'      */\n' +
'\n' +
'    /**\n' +
'      * Occurs when an item is removed from a Jump List of a webpage running in Site Mode. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onmssitemodejumplistitemremoved: (ev: MSSiteModeEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Retrieves a collection of all applet objects in the document.\n' +
'      */\n' +
'    applets: HTMLCollection;\n' +
'\n' +
'    /**\n' +
'      * Specifies the beginning and end of the document body.\n' +
'      */\n' +
'    body: HTMLElement;\n' +
'\n' +
'    /**\n' +
'      * Sets or gets the security domain of the document. \n' +
'      */\n' +
'    domain: string;\n' +
'\n' +
'    xmlStandalone: boolean;\n' +
'\n' +
'    /**\n' +
'      * Represents the active selection, which is a highlighted block of text or other elements in the document that a user or a script can carry out some action on.\n' +
'      */\n' +
'    selection: MSSelection;\n' +
'\n' +
'    /**\n' +
'      * Occurs when the download has stopped. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onstalled: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the user moves the mouse over the object. \n' +
'      * @param ev The mouse event.\n' +
'      */\n' +
'    onmousemove: (ev: MouseEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Gets a reference to the root node of the document. \n' +
'      */\n' +
'    documentElement: HTMLElement;\n' +
'\n' +
'    /**\n' +
'      * Fires before an object contained in an editable element enters a UI-activated state or when an editable container object is control selected.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onbeforeeditfocus: (ev: MSEventObj) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Occurs when the playback rate is increased or decreased. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onratechange: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Occurs to indicate progress while downloading media data. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onprogress: (ev: any) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the user double-clicks the object.\n' +
'      * @param ev The mouse event.\n' +
'      */\n' +
'    ondblclick: (ev: MouseEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the user clicks the right mouse button in the client area, opening the context menu. \n' +
'      * @param ev The mouse event.\n' +
'      */\n' +
'    oncontextmenu: (ev: MouseEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Occurs when the duration and dimensions of the media have been determined.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onloadedmetadata: (ev: Event) => any;\n' +
'\n' +
'    media: string;\n' +
'\n' +
'    /**\n' +
'      * Fires when an error occurs during object loading.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onerror: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Occurs when the play method is requested. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onplay: (ev: Event) => any;\n' +
'\n' +
'    onafterupdate: (ev: MSEventObj) => any;\n' +
'\n' +
'    /**\n' +
'      * Occurs when the audio or video has started playing. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onplaying: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Retrieves a collection, in source order, of img objects in the document.\n' +
'      */\n' +
'    images: HTMLCollection;\n' +
'\n' +
'    /**\n' +
'      * Contains information about the current URL. \n' +
'      */\n' +
'    location: Location;\n' +
'\n' +
'    /**\n' +
'      * Fires when the user aborts the download.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onabort: (ev: UIEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires for the current element with focus immediately after moving focus to another element. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onfocusout: (ev: FocusEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the selection state of a document changes.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onselectionchange: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when a local DOM Storage area is written to disk.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onstoragecommit: (ev: StorageEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires periodically as data arrives from data source objects that asynchronously transmit their data. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    ondataavailable: (ev: MSEventObj) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the state of the object has changed.\n' +
'      * @param ev The event\n' +
'      */\n' +
'    onreadystatechange: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Gets the date that the page was last modified, if the page supplies one. \n' +
'      */\n' +
'    lastModified: string;\n' +
'\n' +
'    /**\n' +
'      * Fires when the user presses an alphanumeric key.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onkeypress: (ev: KeyboardEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Occurs when media data is loaded at the current playback position. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onloadeddata: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires immediately before the activeElement is changed from the current object to another object in the parent document.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onbeforedeactivate: (ev: UIEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the object is set as the active element.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onactivate: (ev: UIEvent) => any;\n' +
'\n' +
'\n' +
'    onselectstart: (ev: Event) => any;\n' +
'\n' +
'    /**\n' +
'      * Fires when the object receives focus. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onfocus: (ev: FocusEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Sets or gets the foreground (text) color of the document.\n' +
'      */\n' +
'    fgColor: string;\n' +
'\n' +
'    /**\n' +
'      * Occurs to indicate the current playback position.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    ontimeupdate: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires when the current selection changes.\n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onselect: (ev: UIEvent) => any;\n' +
'\n' +
'    ondrop: (ev: DragEvent) => any;\n' +
'\n' +
'    /**\n' +
'      * Occurs when the end of playback is reached. \n' +
'      * @param ev The event\n' +
'      */\n' +
'    onended: (ev: Event) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Gets a value that indicates whether standards-compliant mode is switched on for the object.\n' +
'      */\n' +
'    compatMode: string;\n' +
'\n' +
'    /**\n' +
'      * Fires when the user repositions the scroll box in the scroll bar on the object. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onscroll: (ev: UIEvent) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires to indicate that the current row has changed in the data source and new data values are available on the object. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onrowenter: (ev: MSEventObj) => any;\n' +
'\n' +
'\n' +
'    /**\n' +
'      * Fires immediately after the browser loads the object. \n' +
'      * @param ev The event.\n' +
'      */\n' +
'    onload: (ev: Event) => any;\n' +
'\n' +
'    oninput: (ev: Event) => any;\n' +
'\n' +
'    /**\n' +
'      * Returns the current value of the document, range, or current selection for the given command.\n' +
'      * @param commandId String that specifies a command identifier.\n' +
'      */\n' +
'    queryCommandValue(commandId: string): string;\n' +
'\n' +
'    adoptNode(source: Node): Node;\n' +
'\n' +
'    /**\n' +
'      * Returns a Boolean value that indicates whether the specified command is in the indeterminate state.\n' +
'      * @param commandId String that specifies a command identifier.\n' +
'      */\n' +
'    queryCommandIndeterm(commandId: string): boolean;\n' +
'\n' +
'    getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;\n' +
'    createProcessingInstruction(target: string, data: string): ProcessingInstruction;\n' +
'\n' +
'    /**\n' +
'      * Executes a command on the current document, current selection, or the given range.\n' +
'      * @param commandId String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.\n' +
'      * @param showUI Display the user interface, defaults to false.\n' +
'      * @param value Value to assign.\n' +
'      */\n' +
'    execCommand(commandId: string, showUI?: boolean, value?: any): boolean;\n' +
'\n' +
'    /**\n' +
'      * Returns the element for the specified x coordinate and the specified y coordinate. \n' +
'      * @param x The x-offset\n' +
'      * @param y The y-offset\n' +
'      */\n' +
'    elementFromPoint(x: number, y: number): Element;\n' +
'    createCDATASection(data: string): CDATASection;\n' +
'\n' +
'    /**\n' +
'      * Retrieves the string associated with a command.\n' +
'      * @param commandId String that contains the identifier of a command. This can be any command identifier given in the list of Command Identifiers. \n' +
'      */\n' +
'    queryCommandText(commandId: string): string;\n' +
'\n' +
'    /**\n' +
'      * Writes one or more HTML expressions to a document in the specified window. \n' +
'      * @param content Specifies the text and HTML tags to write.\n' +
'      */\n' +
'    write(...content: string[]): void;\n' +
'\n' +
'    /**\n' +
'      * Allows updating the print settings for the page.\n' +
'      */\n' +
'    updateSettings(): void;\n' +
'\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "a"): HTMLAnchorElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "abbr"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "address"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "area"): HTMLAreaElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "article"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "aside"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "audio"): HTMLAudioElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "b"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "base"): HTMLBaseElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "bdi"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "bdo"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "blockquote"): HTMLQuoteElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "body"): HTMLBodyElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "br"): HTMLBRElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "button"): HTMLButtonElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "canvas"): HTMLCanvasElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "caption"): HTMLTableCaptionElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "cite"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "code"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "col"): HTMLTableColElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "colgroup"): HTMLTableColElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "datalist"): HTMLDataListElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "dd"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "del"): HTMLModElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "dfn"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "div"): HTMLDivElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "dl"): HTMLDListElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "dt"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "em"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "embed"): HTMLEmbedElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "fieldset"): HTMLFieldSetElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "figcaption"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "figure"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "footer"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "form"): HTMLFormElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "h1"): HTMLHeadingElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "h2"): HTMLHeadingElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "h3"): HTMLHeadingElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "h4"): HTMLHeadingElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "h5"): HTMLHeadingElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "h6"): HTMLHeadingElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "head"): HTMLHeadElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "header"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "hgroup"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "hr"): HTMLHRElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "html"): HTMLHtmlElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "i"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "iframe"): HTMLIFrameElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "img"): HTMLImageElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "input"): HTMLInputElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "ins"): HTMLModElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "kbd"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "label"): HTMLLabelElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "legend"): HTMLLegendElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "li"): HTMLLIElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "link"): HTMLLinkElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "main"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "map"): HTMLMapElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "mark"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "menu"): HTMLMenuElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "meta"): HTMLMetaElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "nav"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "noscript"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "object"): HTMLObjectElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "ol"): HTMLOListElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "optgroup"): HTMLOptGroupElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "option"): HTMLOptionElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "p"): HTMLParagraphElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "param"): HTMLParamElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "pre"): HTMLPreElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "progress"): HTMLProgressElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "q"): HTMLQuoteElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "rp"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "rt"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "ruby"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "s"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "samp"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "script"): HTMLScriptElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "section"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "select"): HTMLSelectElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "small"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "source"): HTMLSourceElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "span"): HTMLSpanElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "strong"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "style"): HTMLStyleElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "sub"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "summary"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "sup"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "table"): HTMLTableElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "tbody"): HTMLTableSectionElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "td"): HTMLTableDataCellElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "textarea"): HTMLTextAreaElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "tfoot"): HTMLTableSectionElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "th"): HTMLTableHeaderCellElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "thead"): HTMLTableSectionElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "title"): HTMLTitleElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "tr"): HTMLTableRowElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "track"): HTMLTrackElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "u"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "ul"): HTMLUListElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "var"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "video"): HTMLVideoElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: "wbr"): HTMLElement;\n' +
'    /**\n' +
'      * Creates an instance of the element for the specified tag.\n' +
'      * @param tagName The name of an element.\n' +
'      */\n' +
'    createElement(tagName: string): HTMLElement;\n' +
'\n' +
'    /**\n' +
'      * Removes mouse capture from the object in the current document.\n' +
'      */\n' +
'    releaseCapture(): void;\n' +
'\n' +
'    /**\n' +
'      * Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window. \n' +
'      * @param content The text and HTML tags to write.\n' +
'      */\n' +
'    writeln(...content: string[]): void;\n' +
'    createElementNS(namespaceURI: string, qualifiedName: string): Element;\n' +
'\n' +
'    /**\n' +
'      * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.\n' +
'      * @param url Specifies a MIME type for the document.\n' +
'      * @param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.\n' +
'      * @param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.\n' +
'      * @param replace Specifies whether the existing entry for the document is replaced in the history list.\n' +
'      */\n' +
'    open(url?: string, name?: string, features?: string, replace?: boolean): any;\n' +
'\n' +
'    /**\n' +
'      * Returns a Boolean value that indicates whether the current command is supported on the current range.\n' +
'      * @param commandId Specifies a command identifier.\n' +
'      */\n' +
'    queryCommandSupported(commandId: string): boolean;\n' +
'\n' +
'    /**\n' +
'      * Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.\n' +
'      * @param root The root element or node to start traversing on.\n' +
'      * @param whatToShow The type of nodes or elements to appear in the node list. For more information, see whatToShow.\n' +
'      * @param filter A custom NodeFilter function to use.\n' +
'      * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.\n' +
'      */\n' +
'    createTreeWalker(root: Node, whatToShow: number, filter: NodeFilter, entityReferenceExpansion: boolean): TreeWalker;\n' +
'    createAttributeNS(namespaceURI: string, qualifiedName: string): Attr;\n' +
'\n' +
'    /** \n' +
'      * Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.\n' +
'      * @param commandId Specifies a command identifier.\n' +
'      */\n' +
'    queryCommandEnabled(commandId: string): boolean;\n' +
'\n' +
'    /**\n' +
'      * Causes the element to receive the focus and executes the code specified by the onfocus event.\n' +
'      */\n' +
'    focus(): void;\n' +
'\n' +
'    /**\n' +
'      * Closes an output stream and forces the sent data to display.\n' +
'      */\n' +
'    close(): void;\n' +
'\n' +
'    getElementsByClassName(classNames: string): NodeList;\n' +
'    importNode(importedNode: Node, deep: boolean): Node;\n' +
'\n' +
'    /**\n' +
'      *  Returns an empty range object that has both of its boundary points positioned at the beginning of the document. \n' +
'      */\n' +
'    createRange(): Range;\n' +
'\n' +
'    /**\n' +
'      * Fires a specified event on the object.\n' +
'      * @param eventName Specifies the name of the event to fire.\n' +
'      * @param eventObj Object that specifies the event object from which to obtain event object properties.\n' +
'      */\n' +
'    fireEvent(eventName: string, eventObj?: any): boolean;\n' +
'\n' +
'    /**\n' +
'      * Creates a comment object with the specified data.\n' +
'      * @param data Sets the comment object\'s data.\n' +
'      */\n' +
'    createComment(data: string): Comment;\n' +
'\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "abbr"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "address"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "area"): NodeListOf<HTMLAreaElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "article"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "aside"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "b"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "base"): NodeListOf<HTMLBaseElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "bdi"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "bdo"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "blockquote"): NodeListOf<HTMLQuoteElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "br"): NodeListOf<HTMLBRElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "caption"): NodeListOf<HTMLTableCaptionElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "cite"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "code"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "col"): NodeListOf<HTMLTableColElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "colgroup"): NodeListOf<HTMLTableColElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "datalist"): NodeListOf<HTMLDataListElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "dd"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "del"): NodeListOf<HTMLModElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "dfn"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "dl"): NodeListOf<HTMLDListElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "dt"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "em"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "embed"): NodeListOf<HTMLEmbedElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "fieldset"): NodeListOf<HTMLFieldSetElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "figcaption"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "figure"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "footer"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "h2"): NodeListOf<HTMLHeadingElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "h3"): NodeListOf<HTMLHeadingElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "h4"): NodeListOf<HTMLHeadingElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "h5"): NodeListOf<HTMLHeadingElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "h6"): NodeListOf<HTMLHeadingElement>;\n' +
'    /**\n' +
'     * Retrieves a collection of objects based on the specified element name.\n' +
'     * @param name Specifies the name of an element.\n' +
'     */\n' +
'    getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "header"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "hgroup"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "hr"): NodeListOf<HTMLHRElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "i"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "input"): NodeListOf<HTMLInputElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "ins"): NodeListOf<HTMLModElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "kbd"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "label"): NodeListOf<HTMLLabelElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "legend"): NodeListOf<HTMLLegendElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "li"): NodeListOf<HTMLLIElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "link"): NodeListOf<HTMLLinkElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "main"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "map"): NodeListOf<HTMLMapElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "mark"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "menu"): NodeListOf<HTMLMenuElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "meta"): NodeListOf<HTMLMetaElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "nav"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "noscript"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "object"): NodeListOf<HTMLObjectElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "ol"): NodeListOf<HTMLOListElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "optgroup"): NodeListOf<HTMLOptGroupElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "option"): NodeListOf<HTMLOptionElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "p"): NodeListOf<HTMLParagraphElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "param"): NodeListOf<HTMLParamElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "pre"): NodeListOf<HTMLPreElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "progress"): NodeListOf<HTMLProgressElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "q"): NodeListOf<HTMLQuoteElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "rp"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "rt"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "ruby"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "s"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "samp"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "section"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "select"): NodeListOf<HTMLSelectElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "small"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "source"): NodeListOf<HTMLSourceElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "span"): NodeListOf<HTMLSpanElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "strong"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "style"): NodeListOf<HTMLStyleElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "sub"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "summary"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "sup"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "table"): NodeListOf<HTMLTableElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "tbody"): NodeListOf<HTMLTableSectionElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "td"): NodeListOf<HTMLTableDataCellElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "textarea"): NodeListOf<HTMLTextAreaElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "tfoot"): NodeListOf<HTMLTableSectionElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "th"): NodeListOf<HTMLTableHeaderCellElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "thead"): NodeListOf<HTMLTableSectionElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "title"): NodeListOf<HTMLTitleElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "tr"): NodeListOf<HTMLTableRowElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "track"): NodeListOf<HTMLTrackElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "u"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "ul"): NodeListOf<HTMLUListElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "var"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: "wbr"): NodeListOf<HTMLElement>;\n' +
'    /**\n' +
'      * Retrieves a collection of objects based on the specified element name.\n' +
'      * @param name Specifies the name of an element.\n' +
'      */\n' +
'    getElementsByTagName(name: string): NodeList;\n' +
'\n' +
'    /**\n' +
'      * Creates a new document.\n' +
'      */\n' +
'    createDocumentFragment(): DocumentFragment;\n' +
'\n' +
'    /**\n' +
'      * Creates a style sheet for the document. \n' +
'      * @param href Specifies how to add the style sheet to the document. If a file name is specified for the URL, the style information is added as a link object. If the URL contains style information, it is added to the style object.\n' +
'      * @param index Specifies the index that indicates where the new style sheet is inserted in the styleSheets collection. The default is to insert the new style sheet at the end of the collection.\n' +
'      */\n' +
'    createStyleSheet(href?: string, index?: number): CSSStyleSheet;\n' +
'\n' +
'    /**\n' +
'      * Gets a collection of objects based on the value of the NAME or ID attribute.\n' +
'      * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.\n' +
'      */\n' +
'    getElementsByName(elementName: string): NodeList;\n' +
'\n' +
'    /**\n' +
'      * Returns a Boolean value that indicates the current state of the command.\n' +
'      * @param commandId String that specifies a command identifier.\n' +
'      */\n' +
'    queryCommandState(commandId: string): boolean;\n' +
'\n' +
'    /**\n' +
'      * Gets a value indicating whether the object currently has focus.\n' +
'      */\n' +
'    hasFocus(): boolean;\n' +
'\n' +
'    /**\n' +
'      * Displays help information for the given command identifier.\n' +
'      * @param commandId Displays help information for the given command identifier.\n' +
'      */\n' +
'    execCommandShowHelp(commandId: string): boolean;\n' +
'\n' +
'    /**\n' +
'      * Creates an attribute object with a specified name.\n' +
'      * @param name String that sets the attribute object\'s name.\n' +
'      */\n' +
'    createAttribute(name: string): Attr;\n' +
'\n' +
'    /**\n' +
'      * Creates a text string from the specified value. \n' +
'      * @param data String that specifies the nodeValue property of the text node.\n' +
'      */\n' +
'    createTextNode(data: string): Text;\n' +
'\n' +
'    /**\n' +
'      * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document. \n' +
'      * @param root The root element or node to start traversing on.\n' +
'      * @param whatToShow The type of nodes or elements to appear in the node list\n' +
'      * @param filter A custom NodeFilter function to use. For more information, see filter. Use null for no filter.\n' +
'      * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.\n' +
'      */\n' +
'    createNodeIterator(root: Node, whatToShow: number, filter: NodeFilter, entityReferenceExpansion: boolean): NodeIterator;\n' +
'\n' +
'    /**\n' +
'      * Generates an event object to pass event context information when you use the fireEvent method.\n' +
'      * @param eventObj An object that specifies an existing event object on which to base the new object.\n' +
'      */\n' +
'    createEventObject(eventObj?: any): MSEventObj;\n' +
'\n' +
'    /**\n' +
'      * Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.\n' +
'      */\n' +
'    getSelection(): Selection;\n' +
'\n' +
'    /**\n' +
'      * Returns a reference to the first object with the specified value of the ID or NAME attribute.\n' +
'      * @param elementId String that specifies the ID value. Case-insensitive.\n' +
'      */\n' +
'    getElementById(elementId: string): HTMLElement;\n' +
'}\n' +
'\n' +
'declare var Document: {\n' +
'    prototype: Document;\n' +
'    new (): Document;\n' +
'}\n' +
'\n' +
'interface MessageEvent extends Event {\n' +
'    source: Window;\n' +
'    origin: string;\n' +
'    data: any;\n' +
'    initMessageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, dataArg: any, originArg: string, lastEventIdArg: string, sourceArg: Window): void;\n' +
'}\n' +
'declare var MessageEvent: {\n' +
'    prototype: MessageEvent;\n' +
'    new (): MessageEvent;\n' +
'}\n' +
'\n' +
'interface SVGElement extends Element {\n' +
'    onmouseover: (ev: MouseEvent) => any;\n' +
'    viewportElement: SVGElement;\n' +
'    onmousemove: (ev: MouseEvent) => any;\n' +
'    onmouseout: (ev: MouseEvent) => any;\n' +
'    ondblclick: (ev: MouseEvent) => any;\n' +
'    onfocusout: (ev: FocusEvent) => any;\n' +
'    onfocusin: (ev: FocusEvent) => any;\n' +
'    xmlbase: string;\n' +
'    onmousedown: (ev: MouseEvent) => any;\n' +
'    onload: (ev: Event) => any;\n' +
'    onmouseup: (ev: MouseEvent) => any;\n' +
'    onclick: (ev: MouseEvent) => any;\n' +
'    ownerSVGElement: SVGSVGElement;\n' +
'    id: string;\n' +
'}\n' +
'declare var SVGElement: {\n' +
'    prototype: SVGElement;\n' +
'    new (): SVGElement;\n' +
'}\n' +
'\n' +
'interface HTMLScriptElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves the status of the script.\n' +
'      */\n' +
'    defer: boolean;\n' +
'    /**\n' +
'      * Retrieves or sets the text of the object as a string. \n' +
'      */\n' +
'    text: string;\n' +
'    /**\n' +
'      * Retrieves the URL to an external file that contains the source code or data.\n' +
'      */\n' +
'    src: string;\n' +
'    /** \n' +
'      * Sets or retrieves the object that is bound to the event script.\n' +
'      */\n' +
'    htmlFor: string;\n' +
'    /**\n' +
'      * Sets or retrieves the character set used to encode the object.\n' +
'      */\n' +
'    charset: string;\n' +
'    /**\n' +
'      * Sets or retrieves the MIME type for the associated scripting engine.\n' +
'      */\n' +
'    type: string;\n' +
'    /**\n' +
'      * Sets or retrieves the event for which the script is written. \n' +
'      */\n' +
'    event: string;\n' +
'}\n' +
'declare var HTMLScriptElement: {\n' +
'    prototype: HTMLScriptElement;\n' +
'    new (): HTMLScriptElement;\n' +
'}\n' +
'\n' +
'interface HTMLTableRowElement extends HTMLElement, HTMLTableAlignment, DOML2DeprecatedBackgroundColorStyle {\n' +
'    /**\n' +
'      * Retrieves the position of the object in the rows collection for the table.\n' +
'      */\n' +
'    rowIndex: number;\n' +
'    /**\n' +
'      * Retrieves a collection of all cells in the table row.\n' +
'      */\n' +
'    cells: HTMLCollection;\n' +
'    /**\n' +
'      * Sets or retrieves how the object is aligned with adjacent text.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.\n' +
'      */\n' +
'    borderColorLight: any;\n' +
'    /**\n' +
'      * Retrieves the position of the object in the collection.\n' +
'      */\n' +
'    sectionRowIndex: number;\n' +
'    /**\n' +
'      * Sets or retrieves the border color of the object.\n' +
'      */\n' +
'    borderColor: any;\n' +
'    /**\n' +
'      * Sets or retrieves the height of the object.\n' +
'      */\n' +
'    height: any;\n' +
'    /**\n' +
'      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.\n' +
'      */\n' +
'    borderColorDark: any;\n' +
'    /**\n' +
'      * Removes the specified cell from the table row, as well as from the cells collection.\n' +
'      * @param index Number that specifies the zero-based position of the cell to remove from the table row. If no value is provided, the last cell in the cells collection is deleted.\n' +
'      */\n' +
'    deleteCell(index?: number): void;\n' +
'    /**\n' +
'      * Creates a new cell in the table row, and adds the cell to the cells collection.\n' +
'      * @param index Number that specifies where to insert the cell in the tr. The default value is -1, which appends the new cell to the end of the cells collection.\n' +
'      */\n' +
'    insertCell(index?: number): HTMLElement;\n' +
'}\n' +
'declare var HTMLTableRowElement: {\n' +
'    prototype: HTMLTableRowElement;\n' +
'    new (): HTMLTableRowElement;\n' +
'}\n' +
'\n' +
'interface CanvasRenderingContext2D {\n' +
'    miterLimit: number;\n' +
'    font: string;\n' +
'    globalCompositeOperation: string;\n' +
'    msFillRule: string;\n' +
'    lineCap: string;\n' +
'    msImageSmoothingEnabled: boolean;\n' +
'    lineDashOffset: number;\n' +
'    shadowColor: string;\n' +
'    lineJoin: string;\n' +
'    shadowOffsetX: number;\n' +
'    lineWidth: number;\n' +
'    canvas: HTMLCanvasElement;\n' +
'    strokeStyle: any;\n' +
'    globalAlpha: number;\n' +
'    shadowOffsetY: number;\n' +
'    fillStyle: any;\n' +
'    shadowBlur: number;\n' +
'    textAlign: string;\n' +
'    textBaseline: string;\n' +
'    restore(): void;\n' +
'    setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;\n' +
'    save(): void;\n' +
'    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;\n' +
'    measureText(text: string): TextMetrics;\n' +
'    isPointInPath(x: number, y: number, fillRule?: string): boolean;\n' +
'    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;\n' +
'    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void;\n' +
'    rotate(angle: number): void;\n' +
'    fillText(text: string, x: number, y: number, maxWidth?: number): void;\n' +
'    translate(x: number, y: number): void;\n' +
'    scale(x: number, y: number): void;\n' +
'    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;\n' +
'    lineTo(x: number, y: number): void;\n' +
'    getLineDash(): Array<number>;\n' +
'    fill(fillRule?: string): void;\n' +
'    createImageData(imageDataOrSw: any, sh?: number): ImageData;\n' +
'    createPattern(image: HTMLElement, repetition: string): CanvasPattern;\n' +
'    closePath(): void;\n' +
'    rect(x: number, y: number, w: number, h: number): void;\n' +
'    clip(fillRule?: string): void;\n' +
'    clearRect(x: number, y: number, w: number, h: number): void;\n' +
'    moveTo(x: number, y: number): void;\n' +
'    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;\n' +
'    fillRect(x: number, y: number, w: number, h: number): void;\n' +
'    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;\n' +
'    drawImage(image: HTMLElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void;\n' +
'    transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;\n' +
'    stroke(): void;\n' +
'    strokeRect(x: number, y: number, w: number, h: number): void;\n' +
'    setLineDash(segments: Array<number>): void;\n' +
'    strokeText(text: string, x: number, y: number, maxWidth?: number): void;\n' +
'    beginPath(): void;\n' +
'    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;\n' +
'    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;\n' +
'}\n' +
'declare var CanvasRenderingContext2D: {\n' +
'    prototype: CanvasRenderingContext2D;\n' +
'    new (): CanvasRenderingContext2D;\n' +
'}\n' +
'\n' +
'interface MSCSSRuleList {\n' +
'    length: number;\n' +
'    item(index?: number): CSSStyleRule;\n' +
'    [index: number]: CSSStyleRule;\n' +
'}\n' +
'declare var MSCSSRuleList: {\n' +
'    prototype: MSCSSRuleList;\n' +
'    new (): MSCSSRuleList;\n' +
'}\n' +
'\n' +
'interface SVGPathSegLinetoHorizontalAbs extends SVGPathSeg {\n' +
'    x: number;\n' +
'}\n' +
'declare var SVGPathSegLinetoHorizontalAbs: {\n' +
'    prototype: SVGPathSegLinetoHorizontalAbs;\n' +
'    new (): SVGPathSegLinetoHorizontalAbs;\n' +
'}\n' +
'\n' +
'interface SVGPathSegArcAbs extends SVGPathSeg {\n' +
'    y: number;\n' +
'    sweepFlag: boolean;\n' +
'    r2: number;\n' +
'    x: number;\n' +
'    angle: number;\n' +
'    r1: number;\n' +
'    largeArcFlag: boolean;\n' +
'}\n' +
'declare var SVGPathSegArcAbs: {\n' +
'    prototype: SVGPathSegArcAbs;\n' +
'    new (): SVGPathSegArcAbs;\n' +
'}\n' +
'\n' +
'interface SVGTransformList {\n' +
'    numberOfItems: number;\n' +
'    getItem(index: number): SVGTransform;\n' +
'    consolidate(): SVGTransform;\n' +
'    clear(): void;\n' +
'    appendItem(newItem: SVGTransform): SVGTransform;\n' +
'    initialize(newItem: SVGTransform): SVGTransform;\n' +
'    removeItem(index: number): SVGTransform;\n' +
'    insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;\n' +
'    replaceItem(newItem: SVGTransform, index: number): SVGTransform;\n' +
'    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;\n' +
'}\n' +
'declare var SVGTransformList: {\n' +
'    prototype: SVGTransformList;\n' +
'    new (): SVGTransformList;\n' +
'}\n' +
'\n' +
'interface HTMLHtmlElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves the DTD version that governs the current document.\n' +
'      */\n' +
'    version: string;\n' +
'}\n' +
'declare var HTMLHtmlElement: {\n' +
'    prototype: HTMLHtmlElement;\n' +
'    new (): HTMLHtmlElement;\n' +
'}\n' +
'\n' +
'interface SVGPathSegClosePath extends SVGPathSeg {\n' +
'}\n' +
'declare var SVGPathSegClosePath: {\n' +
'    prototype: SVGPathSegClosePath;\n' +
'    new (): SVGPathSegClosePath;\n' +
'}\n' +
'\n' +
'interface HTMLFrameElement extends HTMLElement, GetSVGDocument, MSDataBindingExtensions {\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    width: any;\n' +
'    /**\n' +
'      * Sets or retrieves whether the frame can be scrolled.\n' +
'      */\n' +
'    scrolling: string;\n' +
'    /**\n' +
'      * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.\n' +
'      */\n' +
'    marginHeight: string;\n' +
'    /**\n' +
'      * Sets or retrieves the left and right margin widths before displaying the text in a frame.\n' +
'      */\n' +
'    marginWidth: string;\n' +
'    /**\n' +
'      * Sets or retrieves the border color of the object.\n' +
'      */\n' +
'    borderColor: any;\n' +
'    /**\n' +
'      * Sets or retrieves the amount of additional space between the frames.\n' +
'      */\n' +
'    frameSpacing: any;\n' +
'    /**\n' +
'      * Sets or retrieves whether to display a border for the frame.\n' +
'      */\n' +
'    frameBorder: string;\n' +
'    /**\n' +
'      * Sets or retrieves whether the user can resize the frame.\n' +
'      */\n' +
'    noResize: boolean;\n' +
'    /**\n' +
'      * Retrieves the object of the specified.\n' +
'      */\n' +
'    contentWindow: Window;\n' +
'    /**\n' +
'      * Sets or retrieves a URL to be loaded by the object.\n' +
'      */\n' +
'    src: string;\n' +
'    /**\n' +
'      * Sets or retrieves the frame name.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Sets or retrieves the height of the object.\n' +
'      */\n' +
'    height: any;\n' +
'    /**\n' +
'      * Retrieves the document object of the page or frame.\n' +
'      */\n' +
'    contentDocument: Document;\n' +
'    /**\n' +
'      * Specifies the properties of a border drawn around an object.\n' +
'      */\n' +
'    border: string;\n' +
'    /**\n' +
'      * Sets or retrieves a URI to a long description of the object.\n' +
'      */\n' +
'    longDesc: string;\n' +
'    /**\n' +
'      * Raised when the object has been completely received from the server.\n' +
'      */\n' +
'    onload: (ev: Event) => any;\n' +
'    /**\n' +
'      * Sets the value indicating whether the source file of a frame or iframe has specific security restrictions applied.\n' +
'      */\n' +
'    security: any;\n' +
'}\n' +
'declare var HTMLFrameElement: {\n' +
'    prototype: HTMLFrameElement;\n' +
'    new (): HTMLFrameElement;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedLength {\n' +
'    animVal: SVGLength;\n' +
'    baseVal: SVGLength;\n' +
'}\n' +
'declare var SVGAnimatedLength: {\n' +
'    prototype: SVGAnimatedLength;\n' +
'    new (): SVGAnimatedLength;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedPoints {\n' +
'    points: SVGPointList;\n' +
'    animatedPoints: SVGPointList;\n' +
'}\n' +
'\n' +
'interface SVGDefsElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {\n' +
'}\n' +
'declare var SVGDefsElement: {\n' +
'    prototype: SVGDefsElement;\n' +
'    new (): SVGDefsElement;\n' +
'}\n' +
'\n' +
'interface HTMLQuoteElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves the date and time of a modification to the object.\n' +
'      */\n' +
'    dateTime: string;\n' +
'    /**\n' +
'      * Sets or retrieves reference information about the object.\n' +
'      */\n' +
'    cite: string;\n' +
'}\n' +
'declare var HTMLQuoteElement: {\n' +
'    prototype: HTMLQuoteElement;\n' +
'    new (): HTMLQuoteElement;\n' +
'}\n' +
'\n' +
'interface CSSMediaRule extends CSSRule {\n' +
'    media: MediaList;\n' +
'    cssRules: CSSRuleList;\n' +
'    insertRule(rule: string, index?: number): number;\n' +
'    deleteRule(index?: number): void;\n' +
'}\n' +
'declare var CSSMediaRule: {\n' +
'    prototype: CSSMediaRule;\n' +
'    new (): CSSMediaRule;\n' +
'}\n' +
'\n' +
'interface WindowModal {\n' +
'    dialogArguments: any;\n' +
'    returnValue: any;\n' +
'}\n' +
'\n' +
'interface XMLHttpRequest extends EventTarget {\n' +
'    responseBody: any;\n' +
'    status: number;\n' +
'    readyState: number;\n' +
'    responseText: string;\n' +
'    responseXML: Document;\n' +
'    ontimeout: (ev: Event) => any;\n' +
'    statusText: string;\n' +
'    onreadystatechange: (ev: Event) => any;\n' +
'    timeout: number;\n' +
'    onload: (ev: Event) => any;\n' +
'    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;\n' +
'    create(): XMLHttpRequest;\n' +
'    send(data?: any): void;\n' +
'    abort(): void;\n' +
'    getAllResponseHeaders(): string;\n' +
'    setRequestHeader(header: string, value: string): void;\n' +
'    getResponseHeader(header: string): string;\n' +
'    LOADING: number;\n' +
'    DONE: number;\n' +
'    UNSENT: number;\n' +
'    OPENED: number;\n' +
'    HEADERS_RECEIVED: number;\n' +
'}\n' +
'declare var XMLHttpRequest: {\n' +
'    prototype: XMLHttpRequest;\n' +
'    new (): XMLHttpRequest;\n' +
'    LOADING: number;\n' +
'    DONE: number;\n' +
'    UNSENT: number;\n' +
'    OPENED: number;\n' +
'    HEADERS_RECEIVED: number;\n' +
'}\n' +
'\n' +
'interface HTMLTableHeaderCellElement extends HTMLTableCellElement {\n' +
'    /**\n' +
'      * Sets or retrieves the group of cells in a table to which the object\'s information applies.\n' +
'      */\n' +
'    scope: string;\n' +
'}\n' +
'declare var HTMLTableHeaderCellElement: {\n' +
'    prototype: HTMLTableHeaderCellElement;\n' +
'    new (): HTMLTableHeaderCellElement;\n' +
'}\n' +
'\n' +
'interface HTMLDListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction {\n' +
'}\n' +
'declare var HTMLDListElement: {\n' +
'    prototype: HTMLDListElement;\n' +
'    new (): HTMLDListElement;\n' +
'}\n' +
'\n' +
'interface MSDataBindingExtensions {\n' +
'    dataSrc: string;\n' +
'    dataFormatAs: string;\n' +
'    dataFld: string;\n' +
'}\n' +
'\n' +
'interface SVGPathSegLinetoHorizontalRel extends SVGPathSeg {\n' +
'    x: number;\n' +
'}\n' +
'declare var SVGPathSegLinetoHorizontalRel: {\n' +
'    prototype: SVGPathSegLinetoHorizontalRel;\n' +
'    new (): SVGPathSegLinetoHorizontalRel;\n' +
'}\n' +
'\n' +
'interface SVGEllipseElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {\n' +
'    ry: SVGAnimatedLength;\n' +
'    cx: SVGAnimatedLength;\n' +
'    rx: SVGAnimatedLength;\n' +
'    cy: SVGAnimatedLength;\n' +
'}\n' +
'declare var SVGEllipseElement: {\n' +
'    prototype: SVGEllipseElement;\n' +
'    new (): SVGEllipseElement;\n' +
'}\n' +
'\n' +
'interface SVGAElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {\n' +
'    target: SVGAnimatedString;\n' +
'}\n' +
'declare var SVGAElement: {\n' +
'    prototype: SVGAElement;\n' +
'    new (): SVGAElement;\n' +
'}\n' +
'\n' +
'interface SVGStylable {\n' +
'    className: SVGAnimatedString;\n' +
'    style: CSSStyleDeclaration;\n' +
'}\n' +
'\n' +
'interface SVGTransformable extends SVGLocatable {\n' +
'    transform: SVGAnimatedTransformList;\n' +
'}\n' +
'\n' +
'interface HTMLFrameSetElement extends HTMLElement {\n' +
'    ononline: (ev: Event) => any;\n' +
'    /**\n' +
'      * Sets or retrieves the border color of the object.\n' +
'      */\n' +
'    borderColor: any;\n' +
'    /**\n' +
'      * Sets or retrieves the frame heights of the object.\n' +
'      */\n' +
'    rows: string;\n' +
'    /**\n' +
'      * Sets or retrieves the frame widths of the object.\n' +
'      */\n' +
'    cols: string;\n' +
'    /**\n' +
'      * Fires when the object loses the input focus.\n' +
'      */\n' +
'    onblur: (ev: FocusEvent) => any;\n' +
'    /**\n' +
'      * Sets or retrieves the amount of additional space between the frames.\n' +
'      */\n' +
'    frameSpacing: any;\n' +
'    /**\n' +
'      * Fires when the object receives focus.\n' +
'      */\n' +
'    onfocus: (ev: FocusEvent) => any;\n' +
'    onmessage: (ev: MessageEvent) => any;\n' +
'    onerror: (ev: Event) => any;\n' +
'    /**\n' +
'      * Sets or retrieves whether to display a border for the frame.\n' +
'      */\n' +
'    frameBorder: string;\n' +
'    onresize: (ev: UIEvent) => any;\n' +
'    name: string;\n' +
'    onafterprint: (ev: Event) => any;\n' +
'    onbeforeprint: (ev: Event) => any;\n' +
'    onoffline: (ev: Event) => any;\n' +
'    border: string;\n' +
'    onunload: (ev: Event) => any;\n' +
'    onhashchange: (ev: Event) => any;\n' +
'    onload: (ev: Event) => any;\n' +
'    onbeforeunload: (ev: BeforeUnloadEvent) => any;\n' +
'    onstorage: (ev: StorageEvent) => any;\n' +
'}\n' +
'declare var HTMLFrameSetElement: {\n' +
'    prototype: HTMLFrameSetElement;\n' +
'    new (): HTMLFrameSetElement;\n' +
'}\n' +
'\n' +
'interface Screen {\n' +
'    width: number;\n' +
'    deviceXDPI: number;\n' +
'    fontSmoothingEnabled: boolean;\n' +
'    bufferDepth: number;\n' +
'    logicalXDPI: number;\n' +
'    systemXDPI: number;\n' +
'    availHeight: number;\n' +
'    height: number;\n' +
'    logicalYDPI: number;\n' +
'    systemYDPI: number;\n' +
'    updateInterval: number;\n' +
'    colorDepth: number;\n' +
'    availWidth: number;\n' +
'    deviceYDPI: number;\n' +
'    pixelDepth: number;\n' +
'}\n' +
'declare var Screen: {\n' +
'    prototype: Screen;\n' +
'    new (): Screen;\n' +
'}\n' +
'\n' +
'interface Coordinates {\n' +
'    altitudeAccuracy: number;\n' +
'    longitude: number;\n' +
'    latitude: number;\n' +
'    speed: number;\n' +
'    heading: number;\n' +
'    altitude: number;\n' +
'    accuracy: number;\n' +
'}\n' +
'declare var Coordinates: {\n' +
'    prototype: Coordinates;\n' +
'    new (): Coordinates;\n' +
'}\n' +
'\n' +
'interface NavigatorGeolocation {\n' +
'    geolocation: Geolocation;\n' +
'}\n' +
'\n' +
'interface NavigatorContentUtils {\n' +
'}\n' +
'\n' +
'interface EventListener {\n' +
'    (evt: Event): void;\n' +
'}\n' +
'\n' +
'interface SVGLangSpace {\n' +
'    xmllang: string;\n' +
'    xmlspace: string;\n' +
'}\n' +
'\n' +
'interface DataTransfer {\n' +
'    effectAllowed: string;\n' +
'    dropEffect: string;\n' +
'    clearData(format?: string): boolean;\n' +
'    setData(format: string, data: string): boolean;\n' +
'    getData(format: string): string;\n' +
'}\n' +
'declare var DataTransfer: {\n' +
'    prototype: DataTransfer;\n' +
'    new (): DataTransfer;\n' +
'}\n' +
'\n' +
'interface FocusEvent extends UIEvent {\n' +
'    relatedTarget: EventTarget;\n' +
'    initFocusEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, relatedTargetArg: EventTarget): void;\n' +
'}\n' +
'declare var FocusEvent: {\n' +
'    prototype: FocusEvent;\n' +
'    new (): FocusEvent;\n' +
'}\n' +
'\n' +
'interface Range {\n' +
'    startOffset: number;\n' +
'    collapsed: boolean;\n' +
'    endOffset: number;\n' +
'    startContainer: Node;\n' +
'    endContainer: Node;\n' +
'    commonAncestorContainer: Node;\n' +
'    setStart(refNode: Node, offset: number): void;\n' +
'    setEndBefore(refNode: Node): void;\n' +
'    setStartBefore(refNode: Node): void;\n' +
'    selectNode(refNode: Node): void;\n' +
'    detach(): void;\n' +
'    getBoundingClientRect(): ClientRect;\n' +
'    toString(): string;\n' +
'    compareBoundaryPoints(how: number, sourceRange: Range): number;\n' +
'    insertNode(newNode: Node): void;\n' +
'    collapse(toStart: boolean): void;\n' +
'    selectNodeContents(refNode: Node): void;\n' +
'    cloneContents(): DocumentFragment;\n' +
'    setEnd(refNode: Node, offset: number): void;\n' +
'    cloneRange(): Range;\n' +
'    getClientRects(): ClientRectList;\n' +
'    surroundContents(newParent: Node): void;\n' +
'    deleteContents(): void;\n' +
'    setStartAfter(refNode: Node): void;\n' +
'    extractContents(): DocumentFragment;\n' +
'    setEndAfter(refNode: Node): void;\n' +
'    END_TO_END: number;\n' +
'    START_TO_START: number;\n' +
'    START_TO_END: number;\n' +
'    END_TO_START: number;\n' +
'}\n' +
'declare var Range: {\n' +
'    prototype: Range;\n' +
'    new (): Range;\n' +
'    END_TO_END: number;\n' +
'    START_TO_START: number;\n' +
'    START_TO_END: number;\n' +
'    END_TO_START: number;\n' +
'}\n' +
'\n' +
'interface SVGPoint {\n' +
'    y: number;\n' +
'    x: number;\n' +
'    matrixTransform(matrix: SVGMatrix): SVGPoint;\n' +
'}\n' +
'declare var SVGPoint: {\n' +
'    prototype: SVGPoint;\n' +
'    new (): SVGPoint;\n' +
'}\n' +
'\n' +
'interface MSPluginsCollection {\n' +
'    length: number;\n' +
'    refresh(reload?: boolean): void;\n' +
'}\n' +
'declare var MSPluginsCollection: {\n' +
'    prototype: MSPluginsCollection;\n' +
'    new (): MSPluginsCollection;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedNumberList {\n' +
'    animVal: SVGNumberList;\n' +
'    baseVal: SVGNumberList;\n' +
'}\n' +
'declare var SVGAnimatedNumberList: {\n' +
'    prototype: SVGAnimatedNumberList;\n' +
'    new (): SVGAnimatedNumberList;\n' +
'}\n' +
'\n' +
'interface SVGSVGElement extends SVGElement, SVGStylable, SVGZoomAndPan, DocumentEvent, SVGLangSpace, SVGLocatable, SVGTests, SVGFitToViewBox, SVGExternalResourcesRequired {\n' +
'    width: SVGAnimatedLength;\n' +
'    x: SVGAnimatedLength;\n' +
'    contentStyleType: string;\n' +
'    onzoom: (ev: any) => any;\n' +
'    y: SVGAnimatedLength;\n' +
'    viewport: SVGRect;\n' +
'    onerror: (ev: Event) => any;\n' +
'    pixelUnitToMillimeterY: number;\n' +
'    onresize: (ev: UIEvent) => any;\n' +
'    screenPixelToMillimeterY: number;\n' +
'    height: SVGAnimatedLength;\n' +
'    onabort: (ev: UIEvent) => any;\n' +
'    contentScriptType: string;\n' +
'    pixelUnitToMillimeterX: number;\n' +
'    currentTranslate: SVGPoint;\n' +
'    onunload: (ev: Event) => any;\n' +
'    currentScale: number;\n' +
'    onscroll: (ev: UIEvent) => any;\n' +
'    screenPixelToMillimeterX: number;\n' +
'    setCurrentTime(seconds: number): void;\n' +
'    createSVGLength(): SVGLength;\n' +
'    getIntersectionList(rect: SVGRect, referenceElement: SVGElement): NodeList;\n' +
'    unpauseAnimations(): void;\n' +
'    createSVGRect(): SVGRect;\n' +
'    checkIntersection(element: SVGElement, rect: SVGRect): boolean;\n' +
'    unsuspendRedrawAll(): void;\n' +
'    pauseAnimations(): void;\n' +
'    suspendRedraw(maxWaitMilliseconds: number): number;\n' +
'    deselectAll(): void;\n' +
'    createSVGAngle(): SVGAngle;\n' +
'    getEnclosureList(rect: SVGRect, referenceElement: SVGElement): NodeList;\n' +
'    createSVGTransform(): SVGTransform;\n' +
'    unsuspendRedraw(suspendHandleID: number): void;\n' +
'    forceRedraw(): void;\n' +
'    getCurrentTime(): number;\n' +
'    checkEnclosure(element: SVGElement, rect: SVGRect): boolean;\n' +
'    createSVGMatrix(): SVGMatrix;\n' +
'    createSVGPoint(): SVGPoint;\n' +
'    createSVGNumber(): SVGNumber;\n' +
'    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;\n' +
'    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;\n' +
'    getElementById(elementId: string): Element;\n' +
'}\n' +
'declare var SVGSVGElement: {\n' +
'    prototype: SVGSVGElement;\n' +
'    new (): SVGSVGElement;\n' +
'}\n' +
'\n' +
'interface HTMLLabelElement extends HTMLElement, MSDataBindingExtensions {\n' +
'    /**\n' +
'      * Sets or retrieves the object to which the given label object is assigned.\n' +
'      */\n' +
'    htmlFor: string;\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in.\n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'}\n' +
'declare var HTMLLabelElement: {\n' +
'    prototype: HTMLLabelElement;\n' +
'    new (): HTMLLabelElement;\n' +
'}\n' +
'\n' +
'interface MSResourceMetadata {\n' +
'    protocol: string;\n' +
'    fileSize: string;\n' +
'    fileUpdatedDate: string;\n' +
'    nameProp: string;\n' +
'    fileCreatedDate: string;\n' +
'    fileModifiedDate: string;\n' +
'    mimeType: string;\n' +
'}\n' +
'\n' +
'interface HTMLLegendElement extends HTMLElement, MSDataBindingExtensions {\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in.\n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'}\n' +
'declare var HTMLLegendElement: {\n' +
'    prototype: HTMLLegendElement;\n' +
'    new (): HTMLLegendElement;\n' +
'}\n' +
'\n' +
'interface HTMLDirectoryElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {\n' +
'}\n' +
'declare var HTMLDirectoryElement: {\n' +
'    prototype: HTMLDirectoryElement;\n' +
'    new (): HTMLDirectoryElement;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedInteger {\n' +
'    animVal: number;\n' +
'    baseVal: number;\n' +
'}\n' +
'declare var SVGAnimatedInteger: {\n' +
'    prototype: SVGAnimatedInteger;\n' +
'    new (): SVGAnimatedInteger;\n' +
'}\n' +
'\n' +
'interface SVGTextElement extends SVGTextPositioningElement, SVGTransformable {\n' +
'}\n' +
'declare var SVGTextElement: {\n' +
'    prototype: SVGTextElement;\n' +
'    new (): SVGTextElement;\n' +
'}\n' +
'\n' +
'interface SVGTSpanElement extends SVGTextPositioningElement {\n' +
'}\n' +
'declare var SVGTSpanElement: {\n' +
'    prototype: SVGTSpanElement;\n' +
'    new (): SVGTSpanElement;\n' +
'}\n' +
'\n' +
'interface HTMLLIElement extends HTMLElement, DOML2DeprecatedListNumberingAndBulletStyle {\n' +
'    /**\n' +
'      * Sets or retrieves the value of a list item.\n' +
'      */\n' +
'    value: number;\n' +
'}\n' +
'declare var HTMLLIElement: {\n' +
'    prototype: HTMLLIElement;\n' +
'    new (): HTMLLIElement;\n' +
'}\n' +
'\n' +
'interface SVGPathSegLinetoVerticalAbs extends SVGPathSeg {\n' +
'    y: number;\n' +
'}\n' +
'declare var SVGPathSegLinetoVerticalAbs: {\n' +
'    prototype: SVGPathSegLinetoVerticalAbs;\n' +
'    new (): SVGPathSegLinetoVerticalAbs;\n' +
'}\n' +
'\n' +
'interface MSStorageExtensions {\n' +
'    remainingSpace: number;\n' +
'}\n' +
'\n' +
'interface SVGStyleElement extends SVGElement, SVGLangSpace {\n' +
'    media: string;\n' +
'    type: string;\n' +
'    title: string;\n' +
'}\n' +
'declare var SVGStyleElement: {\n' +
'    prototype: SVGStyleElement;\n' +
'    new (): SVGStyleElement;\n' +
'}\n' +
'\n' +
'interface MSCurrentStyleCSSProperties extends MSCSSProperties {\n' +
'    blockDirection: string;\n' +
'    clipBottom: string;\n' +
'    clipLeft: string;\n' +
'    clipRight: string;\n' +
'    clipTop: string;\n' +
'    hasLayout: string;\n' +
'}\n' +
'declare var MSCurrentStyleCSSProperties: {\n' +
'    prototype: MSCurrentStyleCSSProperties;\n' +
'    new (): MSCurrentStyleCSSProperties;\n' +
'}\n' +
'\n' +
'interface MSHTMLCollectionExtensions {\n' +
'    urns(urn: any): Object;\n' +
'    tags(tagName: any): Object;\n' +
'}\n' +
'\n' +
'interface Storage extends MSStorageExtensions {\n' +
'    length: number;\n' +
'    getItem(key: string): any;\n' +
'    [key: string]: any;\n' +
'    setItem(key: string, data: string): void;\n' +
'    clear(): void;\n' +
'    removeItem(key: string): void;\n' +
'    key(index: number): string;\n' +
'    [index: number]: any;\n' +
'}\n' +
'declare var Storage: {\n' +
'    prototype: Storage;\n' +
'    new (): Storage;\n' +
'}\n' +
'\n' +
'interface HTMLIFrameElement extends HTMLElement, GetSVGDocument, MSDataBindingExtensions {\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    width: string;\n' +
'    /**\n' +
'      * Sets or retrieves whether the frame can be scrolled.\n' +
'      */\n' +
'    scrolling: string;\n' +
'    /**\n' +
'      * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.\n' +
'      */\n' +
'    marginHeight: string;\n' +
'    /**\n' +
'      * Sets or retrieves the left and right margin widths before displaying the text in a frame.\n' +
'      */\n' +
'    marginWidth: string;\n' +
'    /**\n' +
'      * Sets or retrieves the amount of additional space between the frames.\n' +
'      */\n' +
'    frameSpacing: any;\n' +
'    /**\n' +
'      * Sets or retrieves whether to display a border for the frame.\n' +
'      */\n' +
'    frameBorder: string;\n' +
'    /**\n' +
'      * Sets or retrieves whether the user can resize the frame.\n' +
'      */\n' +
'    noResize: boolean;\n' +
'    /**\n' +
'      * Sets or retrieves the vertical margin for the object.\n' +
'      */\n' +
'    vspace: number;\n' +
'    /**\n' +
'      * Retrieves the object of the specified.\n' +
'      */\n' +
'    contentWindow: Window;\n' +
'    /**\n' +
'      * Sets or retrieves how the object is aligned with adjacent text.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Sets or retrieves a URL to be loaded by the object.\n' +
'      */\n' +
'    src: string;\n' +
'    /**\n' +
'      * Sets or retrieves the frame name.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Sets or retrieves the height of the object.\n' +
'      */\n' +
'    height: string;\n' +
'    /**\n' +
'      * Specifies the properties of a border drawn around an object.\n' +
'      */\n' +
'    border: string;\n' +
'    /**\n' +
'      * Retrieves the document object of the page or frame.\n' +
'      */\n' +
'    contentDocument: Document;\n' +
'    /**\n' +
'      * Sets or retrieves the horizontal margin for the object.\n' +
'      */\n' +
'    hspace: number;\n' +
'    /**\n' +
'      * Sets or retrieves a URI to a long description of the object.\n' +
'      */\n' +
'    longDesc: string;\n' +
'    /**\n' +
'      * Sets the value indicating whether the source file of a frame or iframe has specific security restrictions applied.\n' +
'      */\n' +
'    security: any;\n' +
'    /**\n' +
'      * Raised when the object has been completely received from the server.\n' +
'      */\n' +
'    onload: (ev: Event) => any;\n' +
'}\n' +
'declare var HTMLIFrameElement: {\n' +
'    prototype: HTMLIFrameElement;\n' +
'    new (): HTMLIFrameElement;\n' +
'}\n' +
'\n' +
'interface TextRangeCollection {\n' +
'    length: number;\n' +
'    item(index: number): TextRange;\n' +
'    [index: number]: TextRange;\n' +
'}\n' +
'declare var TextRangeCollection: {\n' +
'    prototype: TextRangeCollection;\n' +
'    new (): TextRangeCollection;\n' +
'}\n' +
'\n' +
'interface HTMLBodyElement extends HTMLElement, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {\n' +
'    scroll: string;\n' +
'    ononline: (ev: Event) => any;\n' +
'    onblur: (ev: FocusEvent) => any;\n' +
'    noWrap: boolean;\n' +
'    onfocus: (ev: FocusEvent) => any;\n' +
'    onmessage: (ev: MessageEvent) => any;\n' +
'    text: any;\n' +
'    onerror: (ev: Event) => any;\n' +
'    bgProperties: string;\n' +
'    onresize: (ev: UIEvent) => any;\n' +
'    link: any;\n' +
'    aLink: any;\n' +
'    bottomMargin: any;\n' +
'    topMargin: any;\n' +
'    onafterprint: (ev: Event) => any;\n' +
'    vLink: any;\n' +
'    onbeforeprint: (ev: Event) => any;\n' +
'    onoffline: (ev: Event) => any;\n' +
'    onunload: (ev: Event) => any;\n' +
'    onhashchange: (ev: Event) => any;\n' +
'    onload: (ev: Event) => any;\n' +
'    rightMargin: any;\n' +
'    onbeforeunload: (ev: BeforeUnloadEvent) => any;\n' +
'    leftMargin: any;\n' +
'    onstorage: (ev: StorageEvent) => any;\n' +
'    createTextRange(): TextRange;\n' +
'}\n' +
'declare var HTMLBodyElement: {\n' +
'    prototype: HTMLBodyElement;\n' +
'    new (): HTMLBodyElement;\n' +
'}\n' +
'\n' +
'interface DocumentType extends Node {\n' +
'    name: string;\n' +
'    notations: NamedNodeMap;\n' +
'    systemId: string;\n' +
'    internalSubset: string;\n' +
'    entities: NamedNodeMap;\n' +
'    publicId: string;\n' +
'}\n' +
'declare var DocumentType: {\n' +
'    prototype: DocumentType;\n' +
'    new (): DocumentType;\n' +
'}\n' +
'\n' +
'interface SVGRadialGradientElement extends SVGGradientElement {\n' +
'    cx: SVGAnimatedLength;\n' +
'    r: SVGAnimatedLength;\n' +
'    cy: SVGAnimatedLength;\n' +
'    fx: SVGAnimatedLength;\n' +
'    fy: SVGAnimatedLength;\n' +
'}\n' +
'declare var SVGRadialGradientElement: {\n' +
'    prototype: SVGRadialGradientElement;\n' +
'    new (): SVGRadialGradientElement;\n' +
'}\n' +
'\n' +
'interface MutationEvent extends Event {\n' +
'    newValue: string;\n' +
'    attrChange: number;\n' +
'    attrName: string;\n' +
'    prevValue: string;\n' +
'    relatedNode: Node;\n' +
'    initMutationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, relatedNodeArg: Node, prevValueArg: string, newValueArg: string, attrNameArg: string, attrChangeArg: number): void;\n' +
'    MODIFICATION: number;\n' +
'    REMOVAL: number;\n' +
'    ADDITION: number;\n' +
'}\n' +
'declare var MutationEvent: {\n' +
'    prototype: MutationEvent;\n' +
'    new (): MutationEvent;\n' +
'    MODIFICATION: number;\n' +
'    REMOVAL: number;\n' +
'    ADDITION: number;\n' +
'}\n' +
'\n' +
'interface DragEvent extends MouseEvent {\n' +
'    dataTransfer: DataTransfer;\n' +
'    initDragEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, dataTransferArg: DataTransfer): void;\n' +
'}\n' +
'declare var DragEvent: {\n' +
'    prototype: DragEvent;\n' +
'    new (): DragEvent;\n' +
'}\n' +
'\n' +
'interface HTMLTableSectionElement extends HTMLElement, HTMLTableAlignment, DOML2DeprecatedBackgroundColorStyle {\n' +
'    /**\n' +
'      * Sets or retrieves a value that indicates the table alignment.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Sets or retrieves the number of horizontal rows contained in the object.\n' +
'      */\n' +
'    rows: HTMLCollection;\n' +
'    /**\n' +
'      * Removes the specified row (tr) from the element and from the rows collection.\n' +
'      * @param index Number that specifies the zero-based position in the rows collection of the row to remove.\n' +
'      */\n' +
'    deleteRow(index?: number): void;\n' +
'    /**\n' +
'      * Moves a table row to a new position.\n' +
'      * @param indexFrom Number that specifies the index in the rows collection of the table row that is moved.\n' +
'      * @param indexTo Number that specifies where the row is moved within the rows collection.\n' +
'      */\n' +
'    moveRow(indexFrom?: number, indexTo?: number): Object;\n' +
'    /**\n' +
'      * Creates a new row (tr) in the table, and adds the row to the rows collection.\n' +
'      * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.\n' +
'      */\n' +
'    insertRow(index?: number): HTMLElement;\n' +
'}\n' +
'declare var HTMLTableSectionElement: {\n' +
'    prototype: HTMLTableSectionElement;\n' +
'    new (): HTMLTableSectionElement;\n' +
'}\n' +
'\n' +
'interface DOML2DeprecatedListNumberingAndBulletStyle {\n' +
'    type: string;\n' +
'}\n' +
'\n' +
'interface HTMLInputElement extends HTMLElement, MSDataBindingExtensions {\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    width: string;\n' +
'    status: boolean;\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in. \n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'    /**\n' +
'      * Gets or sets the starting position or offset of a text selection.\n' +
'      */\n' +
'    selectionStart: number;\n' +
'    indeterminate: boolean;\n' +
'    readOnly: boolean;\n' +
'    size: number;\n' +
'    loop: number;\n' +
'    /**\n' +
'      * Gets or sets the end position or offset of a text selection.\n' +
'      */\n' +
'    selectionEnd: number;\n' +
'    /**\n' +
'      * Sets or retrieves the URL of the virtual reality modeling language (VRML) world to be displayed in the window.\n' +
'      */\n' +
'    vrml: string;\n' +
'    /**\n' +
'      * Sets or retrieves a lower resolution image to display.\n' +
'      */\n' +
'    lowsrc: string;\n' +
'    /**\n' +
'      * Sets or retrieves the vertical margin for the object.\n' +
'      */\n' +
'    vspace: number;\n' +
'    /**\n' +
'      * Sets or retrieves a comma-separated list of content types.\n' +
'      */\n' +
'    accept: string;\n' +
'    /**\n' +
'      * Sets or retrieves a text alternative to the graphic.\n' +
'      */\n' +
'    alt: string;\n' +
'    /**\n' +
'      * Sets or retrieves the state of the check box or radio button.\n' +
'      */\n' +
'    defaultChecked: boolean;\n' +
'    /**\n' +
'      * Sets or retrieves how the object is aligned with adjacent text.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Returns the value of the data at the cursor\'s current position.\n' +
'      */\n' +
'    value: string;\n' +
'    /**\n' +
'      * The address or URL of the a media resource that is to be considered.\n' +
'      */\n' +
'    src: string;\n' +
'    /**\n' +
'      * Sets or retrieves the name of the object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.\n' +
'      */\n' +
'    useMap: string;\n' +
'    /**\n' +
'      * Sets or retrieves the height of the object.\n' +
'      */\n' +
'    height: string;\n' +
'    /**\n' +
'      * Sets or retrieves the width of the border to draw around the object.\n' +
'      */\n' +
'    border: string;\n' +
'    dynsrc: string;\n' +
'    /**\n' +
'      * Sets or retrieves the state of the check box or radio button.\n' +
'      */\n' +
'    checked: boolean;\n' +
'    /**\n' +
'      * Sets or retrieves the width of the border to draw around the object.\n' +
'      */\n' +
'    hspace: number;\n' +
'    /**\n' +
'      * Sets or retrieves the maximum number of characters that the user can enter in a text control.\n' +
'      */\n' +
'    maxLength: number;\n' +
'    /**\n' +
'      * Returns the content type of the object.\n' +
'      */\n' +
'    type: string;\n' +
'    /**\n' +
'      * Sets or retrieves the initial contents of the object.\n' +
'      */\n' +
'    defaultValue: string;\n' +
'    /**\n' +
'      * Retrieves whether the object is fully loaded.\n' +
'      */\n' +
'    complete: boolean;\n' +
'    start: string;\n' +
'    /**\n' +
'      * Creates a TextRange object for the element.\n' +
'      */\n' +
'    createTextRange(): TextRange;\n' +
'    /**\n' +
'      * Sets the start and end positions of a selection in a text field.\n' +
'      * @param start The offset into the text field for the start of the selection.\n' +
'      * @param end The offset into the text field for the end of the selection.\n' +
'      */\n' +
'    setSelectionRange(start: number, end: number): void;\n' +
'    /**\n' +
'      * Makes the selection equal to the current object.\n' +
'      */\n' +
'    select(): void;\n' +
'}\n' +
'declare var HTMLInputElement: {\n' +
'    prototype: HTMLInputElement;\n' +
'    new (): HTMLInputElement;\n' +
'}\n' +
'\n' +
'interface HTMLAnchorElement extends HTMLElement, MSDataBindingExtensions {\n' +
'    /**\n' +
'      * Sets or retrieves the relationship between the object and the destination of the link.\n' +
'      */\n' +
'    rel: string;\n' +
'    /**\n' +
'      * Contains the protocol of the URL.\n' +
'      */\n' +
'    protocol: string;\n' +
'    /**\n' +
'      * Sets or retrieves the substring of the href property that follows the question mark.\n' +
'      */\n' +
'    search: string;\n' +
'    /**\n' +
'      * Sets or retrieves the coordinates of the object.\n' +
'      */\n' +
'    coords: string;\n' +
'    /**\n' +
'      * Contains the hostname of a URL.\n' +
'      */\n' +
'    hostname: string;\n' +
'    /**\n' +
'      * Contains the pathname of the URL.\n' +
'      */\n' +
'    pathname: string;\n' +
'    Methods: string;\n' +
'    /**\n' +
'      * Sets or retrieves the window or frame at which to target content.\n' +
'      */\n' +
'    target: string;\n' +
'    protocolLong: string;\n' +
'    /**\n' +
'      * Sets or retrieves a destination URL or an anchor point.\n' +
'      */\n' +
'    href: string;\n' +
'    /**\n' +
'      * Sets or retrieves the shape of the object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Sets or retrieves the character set used to encode the object.\n' +
'      */\n' +
'    charset: string;\n' +
'    /**\n' +
'      * Sets or retrieves the language code of the object.\n' +
'      */\n' +
'    hreflang: string;\n' +
'    /**\n' +
'      * Sets or retrieves the port number associated with a URL.\n' +
'      */\n' +
'    port: string;\n' +
'    /**\n' +
'      * Contains the hostname and port values of the URL.\n' +
'      */\n' +
'    host: string;\n' +
'    /**\n' +
'      * Contains the anchor portion of the URL including the hash sign (#).\n' +
'      */\n' +
'    hash: string;\n' +
'    nameProp: string;\n' +
'    urn: string;\n' +
'    /**\n' +
'      * Sets or retrieves the relationship between the object and the destination of the link.\n' +
'      */\n' +
'    rev: string;\n' +
'    /**\n' +
'      * Sets or retrieves the shape of the object.\n' +
'      */\n' +
'    shape: string;\n' +
'    type: string;\n' +
'    mimeType: string;\n' +
'    /** \n' +
'      * Returns a string representation of an object.\n' +
'      */\n' +
'    toString(): string;\n' +
'}\n' +
'declare var HTMLAnchorElement: {\n' +
'    prototype: HTMLAnchorElement;\n' +
'    new (): HTMLAnchorElement;\n' +
'}\n' +
'\n' +
'interface HTMLParamElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves the value of an input parameter for an element.\n' +
'      */\n' +
'    value: string;\n' +
'    /**\n' +
'      * Sets or retrieves the name of an input parameter for an element.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Sets or retrieves the content type of the resource designated by the value attribute.\n' +
'      */\n' +
'    type: string;\n' +
'    /**\n' +
'      * Sets or retrieves the data type of the value attribute.\n' +
'      */\n' +
'    valueType: string;\n' +
'}\n' +
'declare var HTMLParamElement: {\n' +
'    prototype: HTMLParamElement;\n' +
'    new (): HTMLParamElement;\n' +
'}\n' +
'\n' +
'interface SVGImageElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {\n' +
'    y: SVGAnimatedLength;\n' +
'    width: SVGAnimatedLength;\n' +
'    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;\n' +
'    x: SVGAnimatedLength;\n' +
'    height: SVGAnimatedLength;\n' +
'}\n' +
'declare var SVGImageElement: {\n' +
'    prototype: SVGImageElement;\n' +
'    new (): SVGImageElement;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedNumber {\n' +
'    animVal: number;\n' +
'    baseVal: number;\n' +
'}\n' +
'declare var SVGAnimatedNumber: {\n' +
'    prototype: SVGAnimatedNumber;\n' +
'    new (): SVGAnimatedNumber;\n' +
'}\n' +
'\n' +
'interface PerformanceTiming {\n' +
'    redirectStart: number;\n' +
'    domainLookupEnd: number;\n' +
'    responseStart: number;\n' +
'    domComplete: number;\n' +
'    domainLookupStart: number;\n' +
'    loadEventStart: number;\n' +
'    msFirstPaint: number;\n' +
'    unloadEventEnd: number;\n' +
'    fetchStart: number;\n' +
'    requestStart: number;\n' +
'    domInteractive: number;\n' +
'    navigationStart: number;\n' +
'    connectEnd: number;\n' +
'    loadEventEnd: number;\n' +
'    connectStart: number;\n' +
'    responseEnd: number;\n' +
'    domLoading: number;\n' +
'    redirectEnd: number;\n' +
'    unloadEventStart: number;\n' +
'    domContentLoadedEventStart: number;\n' +
'    domContentLoadedEventEnd: number;\n' +
'    toJSON(): any;\n' +
'}\n' +
'declare var PerformanceTiming: {\n' +
'    prototype: PerformanceTiming;\n' +
'    new (): PerformanceTiming;\n' +
'}\n' +
'\n' +
'interface HTMLPreElement extends HTMLElement, DOML2DeprecatedTextFlowControl {\n' +
'    /**\n' +
'      * Sets or gets a value that you can use to implement your own width functionality for the object.\n' +
'      */\n' +
'    width: number;\n' +
'    /**\n' +
'      * Indicates a citation by rendering text in italic type.\n' +
'      */\n' +
'    cite: string;\n' +
'}\n' +
'declare var HTMLPreElement: {\n' +
'    prototype: HTMLPreElement;\n' +
'    new (): HTMLPreElement;\n' +
'}\n' +
'\n' +
'interface EventException {\n' +
'    code: number;\n' +
'    message: string;\n' +
'    toString(): string;\n' +
'    DISPATCH_REQUEST_ERR: number;\n' +
'    UNSPECIFIED_EVENT_TYPE_ERR: number;\n' +
'}\n' +
'declare var EventException: {\n' +
'    prototype: EventException;\n' +
'    new (): EventException;\n' +
'    DISPATCH_REQUEST_ERR: number;\n' +
'    UNSPECIFIED_EVENT_TYPE_ERR: number;\n' +
'}\n' +
'\n' +
'interface MSNavigatorDoNotTrack {\n' +
'    msDoNotTrack: string;\n' +
'}\n' +
'\n' +
'interface NavigatorOnLine {\n' +
'    onLine: boolean;\n' +
'}\n' +
'\n' +
'interface WindowLocalStorage {\n' +
'    localStorage: Storage;\n' +
'}\n' +
'\n' +
'interface SVGMetadataElement extends SVGElement {\n' +
'}\n' +
'declare var SVGMetadataElement: {\n' +
'    prototype: SVGMetadataElement;\n' +
'    new (): SVGMetadataElement;\n' +
'}\n' +
'\n' +
'interface SVGPathSegArcRel extends SVGPathSeg {\n' +
'    y: number;\n' +
'    sweepFlag: boolean;\n' +
'    r2: number;\n' +
'    x: number;\n' +
'    angle: number;\n' +
'    r1: number;\n' +
'    largeArcFlag: boolean;\n' +
'}\n' +
'declare var SVGPathSegArcRel: {\n' +
'    prototype: SVGPathSegArcRel;\n' +
'    new (): SVGPathSegArcRel;\n' +
'}\n' +
'\n' +
'interface SVGPathSegMovetoAbs extends SVGPathSeg {\n' +
'    y: number;\n' +
'    x: number;\n' +
'}\n' +
'declare var SVGPathSegMovetoAbs: {\n' +
'    prototype: SVGPathSegMovetoAbs;\n' +
'    new (): SVGPathSegMovetoAbs;\n' +
'}\n' +
'\n' +
'interface SVGStringList {\n' +
'    numberOfItems: number;\n' +
'    replaceItem(newItem: string, index: number): string;\n' +
'    getItem(index: number): string;\n' +
'    clear(): void;\n' +
'    appendItem(newItem: string): string;\n' +
'    initialize(newItem: string): string;\n' +
'    removeItem(index: number): string;\n' +
'    insertItemBefore(newItem: string, index: number): string;\n' +
'}\n' +
'declare var SVGStringList: {\n' +
'    prototype: SVGStringList;\n' +
'    new (): SVGStringList;\n' +
'}\n' +
'\n' +
'interface XDomainRequest {\n' +
'    timeout: number;\n' +
'    onerror: (ev: Event) => any;\n' +
'    onload: (ev: Event) => any;\n' +
'    onprogress: (ev: any) => any;\n' +
'    ontimeout: (ev: Event) => any;\n' +
'    responseText: string;\n' +
'    contentType: string;\n' +
'    open(method: string, url: string): void;\n' +
'    create(): XDomainRequest;\n' +
'    abort(): void;\n' +
'    send(data?: any): void;\n' +
'}\n' +
'declare var XDomainRequest: {\n' +
'    prototype: XDomainRequest;\n' +
'    new (): XDomainRequest;\n' +
'}\n' +
'\n' +
'interface DOML2DeprecatedBackgroundColorStyle {\n' +
'    bgColor: any;\n' +
'}\n' +
'\n' +
'interface ElementTraversal {\n' +
'    childElementCount: number;\n' +
'    previousElementSibling: Element;\n' +
'    lastElementChild: Element;\n' +
'    nextElementSibling: Element;\n' +
'    firstElementChild: Element;\n' +
'}\n' +
'\n' +
'interface SVGLength {\n' +
'    valueAsString: string;\n' +
'    valueInSpecifiedUnits: number;\n' +
'    value: number;\n' +
'    unitType: number;\n' +
'    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;\n' +
'    convertToSpecifiedUnits(unitType: number): void;\n' +
'    SVG_LENGTHTYPE_NUMBER: number;\n' +
'    SVG_LENGTHTYPE_CM: number;\n' +
'    SVG_LENGTHTYPE_PC: number;\n' +
'    SVG_LENGTHTYPE_PERCENTAGE: number;\n' +
'    SVG_LENGTHTYPE_MM: number;\n' +
'    SVG_LENGTHTYPE_PT: number;\n' +
'    SVG_LENGTHTYPE_IN: number;\n' +
'    SVG_LENGTHTYPE_EMS: number;\n' +
'    SVG_LENGTHTYPE_PX: number;\n' +
'    SVG_LENGTHTYPE_UNKNOWN: number;\n' +
'    SVG_LENGTHTYPE_EXS: number;\n' +
'}\n' +
'declare var SVGLength: {\n' +
'    prototype: SVGLength;\n' +
'    new (): SVGLength;\n' +
'    SVG_LENGTHTYPE_NUMBER: number;\n' +
'    SVG_LENGTHTYPE_CM: number;\n' +
'    SVG_LENGTHTYPE_PC: number;\n' +
'    SVG_LENGTHTYPE_PERCENTAGE: number;\n' +
'    SVG_LENGTHTYPE_MM: number;\n' +
'    SVG_LENGTHTYPE_PT: number;\n' +
'    SVG_LENGTHTYPE_IN: number;\n' +
'    SVG_LENGTHTYPE_EMS: number;\n' +
'    SVG_LENGTHTYPE_PX: number;\n' +
'    SVG_LENGTHTYPE_UNKNOWN: number;\n' +
'    SVG_LENGTHTYPE_EXS: number;\n' +
'}\n' +
'\n' +
'interface SVGPolygonElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests, SVGExternalResourcesRequired {\n' +
'}\n' +
'declare var SVGPolygonElement: {\n' +
'    prototype: SVGPolygonElement;\n' +
'    new (): SVGPolygonElement;\n' +
'}\n' +
'\n' +
'interface HTMLPhraseElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves the date and time of a modification to the object.\n' +
'      */\n' +
'    dateTime: string;\n' +
'    /**\n' +
'      * Sets or retrieves reference information about the object.\n' +
'      */\n' +
'    cite: string;\n' +
'}\n' +
'declare var HTMLPhraseElement: {\n' +
'    prototype: HTMLPhraseElement;\n' +
'    new (): HTMLPhraseElement;\n' +
'}\n' +
'\n' +
'interface NavigatorStorageUtils {\n' +
'}\n' +
'\n' +
'interface SVGPathSegCurvetoCubicRel extends SVGPathSeg {\n' +
'    y: number;\n' +
'    y1: number;\n' +
'    x2: number;\n' +
'    x: number;\n' +
'    x1: number;\n' +
'    y2: number;\n' +
'}\n' +
'declare var SVGPathSegCurvetoCubicRel: {\n' +
'    prototype: SVGPathSegCurvetoCubicRel;\n' +
'    new (): SVGPathSegCurvetoCubicRel;\n' +
'}\n' +
'\n' +
'interface MSEventObj extends Event {\n' +
'    nextPage: string;\n' +
'    keyCode: number;\n' +
'    toElement: Element;\n' +
'    returnValue: any;\n' +
'    dataFld: string;\n' +
'    y: number;\n' +
'    dataTransfer: DataTransfer;\n' +
'    propertyName: string;\n' +
'    url: string;\n' +
'    offsetX: number;\n' +
'    recordset: Object;\n' +
'    screenX: number;\n' +
'    buttonID: number;\n' +
'    wheelDelta: number;\n' +
'    reason: number;\n' +
'    origin: string;\n' +
'    data: string;\n' +
'    srcFilter: Object;\n' +
'    boundElements: HTMLCollection;\n' +
'    cancelBubble: boolean;\n' +
'    altLeft: boolean;\n' +
'    behaviorCookie: number;\n' +
'    bookmarks: BookmarkCollection;\n' +
'    type: string;\n' +
'    repeat: boolean;\n' +
'    srcElement: Element;\n' +
'    source: Window;\n' +
'    fromElement: Element;\n' +
'    offsetY: number;\n' +
'    x: number;\n' +
'    behaviorPart: number;\n' +
'    qualifier: string;\n' +
'    altKey: boolean;\n' +
'    ctrlKey: boolean;\n' +
'    clientY: number;\n' +
'    shiftKey: boolean;\n' +
'    shiftLeft: boolean;\n' +
'    contentOverflow: boolean;\n' +
'    screenY: number;\n' +
'    ctrlLeft: boolean;\n' +
'    button: number;\n' +
'    srcUrn: string;\n' +
'    clientX: number;\n' +
'    actionURL: string;\n' +
'    getAttribute(strAttributeName: string, lFlags?: number): any;\n' +
'    setAttribute(strAttributeName: string, AttributeValue: any, lFlags?: number): void;\n' +
'    removeAttribute(strAttributeName: string, lFlags?: number): boolean;\n' +
'}\n' +
'declare var MSEventObj: {\n' +
'    prototype: MSEventObj;\n' +
'    new (): MSEventObj;\n' +
'}\n' +
'\n' +
'interface SVGTextContentElement extends SVGElement, SVGStylable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {\n' +
'    textLength: SVGAnimatedLength;\n' +
'    lengthAdjust: SVGAnimatedEnumeration;\n' +
'    getCharNumAtPosition(point: SVGPoint): number;\n' +
'    getStartPositionOfChar(charnum: number): SVGPoint;\n' +
'    getExtentOfChar(charnum: number): SVGRect;\n' +
'    getComputedTextLength(): number;\n' +
'    getSubStringLength(charnum: number, nchars: number): number;\n' +
'    selectSubString(charnum: number, nchars: number): void;\n' +
'    getNumberOfChars(): number;\n' +
'    getRotationOfChar(charnum: number): number;\n' +
'    getEndPositionOfChar(charnum: number): SVGPoint;\n' +
'    LENGTHADJUST_SPACING: number;\n' +
'    LENGTHADJUST_SPACINGANDGLYPHS: number;\n' +
'    LENGTHADJUST_UNKNOWN: number;\n' +
'}\n' +
'declare var SVGTextContentElement: {\n' +
'    prototype: SVGTextContentElement;\n' +
'    new (): SVGTextContentElement;\n' +
'    LENGTHADJUST_SPACING: number;\n' +
'    LENGTHADJUST_SPACINGANDGLYPHS: number;\n' +
'    LENGTHADJUST_UNKNOWN: number;\n' +
'}\n' +
'\n' +
'interface DOML2DeprecatedColorProperty {\n' +
'    color: string;\n' +
'}\n' +
'\n' +
'interface HTMLCanvasElement extends HTMLElement {\n' +
'    /**\n' +
'      * Gets or sets the width of a canvas element on a document.\n' +
'      */\n' +
'    width: number;\n' +
'    /**\n' +
'      * Gets or sets the height of a canvas element on a document.\n' +
'      */\n' +
'    height: number;\n' +
'    /**\n' +
'      * Returns the content of the current canvas as an image that you can use as a source for another canvas or an HTML element.\n' +
'      * @param type The standard MIME type for the image format to return. If you do not specify this parameter, the default value is a PNG format image.\n' +
'      */\n' +
'    toDataURL(type?: string, ...args: any[]): string;\n' +
'    /**\n' +
'      * Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas.\n' +
'      * @param contextId The identifier (ID) of the type of canvas to create. Internet Explorer 9 and Internet Explorer 10 support only a 2-D context using canvas.getContext("2d"); IE11 Preview also supports 3-D or WebGL context using canvas.getContext("experimental-webgl");\n' +
'      */\n' +
'    getContext(contextId: "2d"): CanvasRenderingContext2D;\n' +
'    getContext(contextId: "experimental-webgl"): WebGLRenderingContext;\n' +
'    getContext(contextId: string, ...args: any[]): any;\n' +
'}\n' +
'declare var HTMLCanvasElement: {\n' +
'    prototype: HTMLCanvasElement;\n' +
'    new (): HTMLCanvasElement;\n' +
'}\n' +
'\n' +
'interface Location {\n' +
'    hash: string;\n' +
'    protocol: string;\n' +
'    search: string;\n' +
'    href: string;\n' +
'    hostname: string;\n' +
'    port: string;\n' +
'    pathname: string;\n' +
'    host: string;\n' +
'    reload(flag?: boolean): void;\n' +
'    replace(url: string): void;\n' +
'    assign(url: string): void;\n' +
'    toString(): string;\n' +
'}\n' +
'declare var Location: {\n' +
'    prototype: Location;\n' +
'    new (): Location;\n' +
'}\n' +
'\n' +
'interface HTMLTitleElement extends HTMLElement {\n' +
'    /**\n' +
'      * Retrieves or sets the text of the object as a string. \n' +
'      */\n' +
'    text: string;\n' +
'}\n' +
'declare var HTMLTitleElement: {\n' +
'    prototype: HTMLTitleElement;\n' +
'    new (): HTMLTitleElement;\n' +
'}\n' +
'\n' +
'interface HTMLStyleElement extends HTMLElement, LinkStyle {\n' +
'    /**\n' +
'      * Sets or retrieves the media type.\n' +
'      */\n' +
'    media: string;\n' +
'    /**\n' +
'      * Retrieves the CSS language in which the style sheet is written.\n' +
'      */\n' +
'    type: string;\n' +
'}\n' +
'declare var HTMLStyleElement: {\n' +
'    prototype: HTMLStyleElement;\n' +
'    new (): HTMLStyleElement;\n' +
'}\n' +
'\n' +
'interface PerformanceEntry {\n' +
'    name: string;\n' +
'    startTime: number;\n' +
'    duration: number;\n' +
'    entryType: string;\n' +
'}\n' +
'declare var PerformanceEntry: {\n' +
'    prototype: PerformanceEntry;\n' +
'    new (): PerformanceEntry;\n' +
'}\n' +
'\n' +
'interface SVGTransform {\n' +
'    type: number;\n' +
'    angle: number;\n' +
'    matrix: SVGMatrix;\n' +
'    setTranslate(tx: number, ty: number): void;\n' +
'    setScale(sx: number, sy: number): void;\n' +
'    setMatrix(matrix: SVGMatrix): void;\n' +
'    setSkewY(angle: number): void;\n' +
'    setRotate(angle: number, cx: number, cy: number): void;\n' +
'    setSkewX(angle: number): void;\n' +
'    SVG_TRANSFORM_SKEWX: number;\n' +
'    SVG_TRANSFORM_UNKNOWN: number;\n' +
'    SVG_TRANSFORM_SCALE: number;\n' +
'    SVG_TRANSFORM_TRANSLATE: number;\n' +
'    SVG_TRANSFORM_MATRIX: number;\n' +
'    SVG_TRANSFORM_ROTATE: number;\n' +
'    SVG_TRANSFORM_SKEWY: number;\n' +
'}\n' +
'declare var SVGTransform: {\n' +
'    prototype: SVGTransform;\n' +
'    new (): SVGTransform;\n' +
'    SVG_TRANSFORM_SKEWX: number;\n' +
'    SVG_TRANSFORM_UNKNOWN: number;\n' +
'    SVG_TRANSFORM_SCALE: number;\n' +
'    SVG_TRANSFORM_TRANSLATE: number;\n' +
'    SVG_TRANSFORM_MATRIX: number;\n' +
'    SVG_TRANSFORM_ROTATE: number;\n' +
'    SVG_TRANSFORM_SKEWY: number;\n' +
'}\n' +
'\n' +
'interface UIEvent extends Event {\n' +
'    detail: number;\n' +
'    view: Window;\n' +
'    initUIEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number): void;\n' +
'}\n' +
'declare var UIEvent: {\n' +
'    prototype: UIEvent;\n' +
'    new (): UIEvent;\n' +
'}\n' +
'\n' +
'interface SVGURIReference {\n' +
'    href: SVGAnimatedString;\n' +
'}\n' +
'\n' +
'interface SVGPathSeg {\n' +
'    pathSegType: number;\n' +
'    pathSegTypeAsLetter: string;\n' +
'    PATHSEG_MOVETO_REL: number;\n' +
'    PATHSEG_LINETO_VERTICAL_REL: number;\n' +
'    PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;\n' +
'    PATHSEG_CURVETO_QUADRATIC_REL: number;\n' +
'    PATHSEG_CURVETO_CUBIC_ABS: number;\n' +
'    PATHSEG_LINETO_HORIZONTAL_ABS: number;\n' +
'    PATHSEG_CURVETO_QUADRATIC_ABS: number;\n' +
'    PATHSEG_LINETO_ABS: number;\n' +
'    PATHSEG_CLOSEPATH: number;\n' +
'    PATHSEG_LINETO_HORIZONTAL_REL: number;\n' +
'    PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;\n' +
'    PATHSEG_LINETO_REL: number;\n' +
'    PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;\n' +
'    PATHSEG_ARC_REL: number;\n' +
'    PATHSEG_CURVETO_CUBIC_REL: number;\n' +
'    PATHSEG_UNKNOWN: number;\n' +
'    PATHSEG_LINETO_VERTICAL_ABS: number;\n' +
'    PATHSEG_ARC_ABS: number;\n' +
'    PATHSEG_MOVETO_ABS: number;\n' +
'    PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;\n' +
'}\n' +
'declare var SVGPathSeg: {\n' +
'    prototype: SVGPathSeg;\n' +
'    new (): SVGPathSeg;\n' +
'    PATHSEG_MOVETO_REL: number;\n' +
'    PATHSEG_LINETO_VERTICAL_REL: number;\n' +
'    PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;\n' +
'    PATHSEG_CURVETO_QUADRATIC_REL: number;\n' +
'    PATHSEG_CURVETO_CUBIC_ABS: number;\n' +
'    PATHSEG_LINETO_HORIZONTAL_ABS: number;\n' +
'    PATHSEG_CURVETO_QUADRATIC_ABS: number;\n' +
'    PATHSEG_LINETO_ABS: number;\n' +
'    PATHSEG_CLOSEPATH: number;\n' +
'    PATHSEG_LINETO_HORIZONTAL_REL: number;\n' +
'    PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;\n' +
'    PATHSEG_LINETO_REL: number;\n' +
'    PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;\n' +
'    PATHSEG_ARC_REL: number;\n' +
'    PATHSEG_CURVETO_CUBIC_REL: number;\n' +
'    PATHSEG_UNKNOWN: number;\n' +
'    PATHSEG_LINETO_VERTICAL_ABS: number;\n' +
'    PATHSEG_ARC_ABS: number;\n' +
'    PATHSEG_MOVETO_ABS: number;\n' +
'    PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;\n' +
'}\n' +
'\n' +
'interface WheelEvent extends MouseEvent {\n' +
'    deltaZ: number;\n' +
'    deltaX: number;\n' +
'    deltaMode: number;\n' +
'    deltaY: number;\n' +
'    initWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, deltaXArg: number, deltaYArg: number, deltaZArg: number, deltaMode: number): void;\n' +
'    DOM_DELTA_PIXEL: number;\n' +
'    DOM_DELTA_LINE: number;\n' +
'    DOM_DELTA_PAGE: number;\n' +
'}\n' +
'declare var WheelEvent: {\n' +
'    prototype: WheelEvent;\n' +
'    new (): WheelEvent;\n' +
'    DOM_DELTA_PIXEL: number;\n' +
'    DOM_DELTA_LINE: number;\n' +
'    DOM_DELTA_PAGE: number;\n' +
'}\n' +
'\n' +
'interface MSEventAttachmentTarget {\n' +
'    attachEvent(event: string, listener: EventListener): boolean;\n' +
'    detachEvent(event: string, listener: EventListener): void;\n' +
'}\n' +
'\n' +
'interface SVGNumber {\n' +
'    value: number;\n' +
'}\n' +
'declare var SVGNumber: {\n' +
'    prototype: SVGNumber;\n' +
'    new (): SVGNumber;\n' +
'}\n' +
'\n' +
'interface SVGPathElement extends SVGElement, SVGStylable, SVGAnimatedPathData, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {\n' +
'    getPathSegAtLength(distance: number): number;\n' +
'    getPointAtLength(distance: number): SVGPoint;\n' +
'    createSVGPathSegCurvetoQuadraticAbs(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticAbs;\n' +
'    createSVGPathSegLinetoRel(x: number, y: number): SVGPathSegLinetoRel;\n' +
'    createSVGPathSegCurvetoQuadraticRel(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticRel;\n' +
'    createSVGPathSegCurvetoCubicAbs(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicAbs;\n' +
'    createSVGPathSegLinetoAbs(x: number, y: number): SVGPathSegLinetoAbs;\n' +
'    createSVGPathSegClosePath(): SVGPathSegClosePath;\n' +
'    createSVGPathSegCurvetoCubicRel(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicRel;\n' +
'    createSVGPathSegCurvetoQuadraticSmoothRel(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothRel;\n' +
'    createSVGPathSegMovetoRel(x: number, y: number): SVGPathSegMovetoRel;\n' +
'    createSVGPathSegCurvetoCubicSmoothAbs(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothAbs;\n' +
'    createSVGPathSegMovetoAbs(x: number, y: number): SVGPathSegMovetoAbs;\n' +
'    createSVGPathSegLinetoVerticalRel(y: number): SVGPathSegLinetoVerticalRel;\n' +
'    createSVGPathSegArcRel(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcRel;\n' +
'    createSVGPathSegCurvetoQuadraticSmoothAbs(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothAbs;\n' +
'    createSVGPathSegLinetoHorizontalRel(x: number): SVGPathSegLinetoHorizontalRel;\n' +
'    getTotalLength(): number;\n' +
'    createSVGPathSegCurvetoCubicSmoothRel(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothRel;\n' +
'    createSVGPathSegLinetoHorizontalAbs(x: number): SVGPathSegLinetoHorizontalAbs;\n' +
'    createSVGPathSegLinetoVerticalAbs(y: number): SVGPathSegLinetoVerticalAbs;\n' +
'    createSVGPathSegArcAbs(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcAbs;\n' +
'}\n' +
'declare var SVGPathElement: {\n' +
'    prototype: SVGPathElement;\n' +
'    new (): SVGPathElement;\n' +
'}\n' +
'\n' +
'interface MSCompatibleInfo {\n' +
'    version: string;\n' +
'    userAgent: string;\n' +
'}\n' +
'declare var MSCompatibleInfo: {\n' +
'    prototype: MSCompatibleInfo;\n' +
'    new (): MSCompatibleInfo;\n' +
'}\n' +
'\n' +
'interface Text extends CharacterData, MSNodeExtensions {\n' +
'    wholeText: string;\n' +
'    splitText(offset: number): Text;\n' +
'    replaceWholeText(content: string): Text;\n' +
'}\n' +
'declare var Text: {\n' +
'    prototype: Text;\n' +
'    new (): Text;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedRect {\n' +
'    animVal: SVGRect;\n' +
'    baseVal: SVGRect;\n' +
'}\n' +
'declare var SVGAnimatedRect: {\n' +
'    prototype: SVGAnimatedRect;\n' +
'    new (): SVGAnimatedRect;\n' +
'}\n' +
'\n' +
'interface CSSNamespaceRule extends CSSRule {\n' +
'    namespaceURI: string;\n' +
'    prefix: string;\n' +
'}\n' +
'declare var CSSNamespaceRule: {\n' +
'    prototype: CSSNamespaceRule;\n' +
'    new (): CSSNamespaceRule;\n' +
'}\n' +
'\n' +
'interface SVGPathSegList {\n' +
'    numberOfItems: number;\n' +
'    replaceItem(newItem: SVGPathSeg, index: number): SVGPathSeg;\n' +
'    getItem(index: number): SVGPathSeg;\n' +
'    clear(): void;\n' +
'    appendItem(newItem: SVGPathSeg): SVGPathSeg;\n' +
'    initialize(newItem: SVGPathSeg): SVGPathSeg;\n' +
'    removeItem(index: number): SVGPathSeg;\n' +
'    insertItemBefore(newItem: SVGPathSeg, index: number): SVGPathSeg;\n' +
'}\n' +
'declare var SVGPathSegList: {\n' +
'    prototype: SVGPathSegList;\n' +
'    new (): SVGPathSegList;\n' +
'}\n' +
'\n' +
'interface HTMLUnknownElement extends HTMLElement, MSDataBindingRecordSetReadonlyExtensions {\n' +
'}\n' +
'declare var HTMLUnknownElement: {\n' +
'    prototype: HTMLUnknownElement;\n' +
'    new (): HTMLUnknownElement;\n' +
'}\n' +
'\n' +
'interface HTMLAudioElement extends HTMLMediaElement {\n' +
'}\n' +
'declare var HTMLAudioElement: {\n' +
'    prototype: HTMLAudioElement;\n' +
'    new (): HTMLAudioElement;\n' +
'}\n' +
'\n' +
'interface MSImageResourceExtensions {\n' +
'    dynsrc: string;\n' +
'    vrml: string;\n' +
'    lowsrc: string;\n' +
'    start: string;\n' +
'    loop: number;\n' +
'}\n' +
'\n' +
'interface PositionError {\n' +
'    code: number;\n' +
'    message: string;\n' +
'    toString(): string;\n' +
'    POSITION_UNAVAILABLE: number;\n' +
'    PERMISSION_DENIED: number;\n' +
'    TIMEOUT: number;\n' +
'}\n' +
'declare var PositionError: {\n' +
'    prototype: PositionError;\n' +
'    new (): PositionError;\n' +
'    POSITION_UNAVAILABLE: number;\n' +
'    PERMISSION_DENIED: number;\n' +
'    TIMEOUT: number;\n' +
'}\n' +
'\n' +
'interface HTMLTableCellElement extends HTMLElement, HTMLTableAlignment, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    width: number;\n' +
'    /**\n' +
'      * Sets or retrieves a list of header cells that provide information for the object.\n' +
'      */\n' +
'    headers: string;\n' +
'    /**\n' +
'      * Retrieves the position of the object in the cells collection of a row.\n' +
'      */\n' +
'    cellIndex: number;\n' +
'    /**\n' +
'      * Sets or retrieves how the object is aligned with adjacent text.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.\n' +
'      */\n' +
'    borderColorLight: any;\n' +
'    /**\n' +
'      * Sets or retrieves the number columns in the table that the object should span.\n' +
'      */\n' +
'    colSpan: number;\n' +
'    /**\n' +
'      * Sets or retrieves the border color of the object. \n' +
'      */\n' +
'    borderColor: any;\n' +
'    /**\n' +
'      * Sets or retrieves a comma-delimited list of conceptual categories associated with the object.\n' +
'      */\n' +
'    axis: string;\n' +
'    /**\n' +
'      * Sets or retrieves the height of the object.\n' +
'      */\n' +
'    height: any;\n' +
'    /**\n' +
'      * Sets or retrieves whether the browser automatically performs wordwrap.\n' +
'      */\n' +
'    noWrap: boolean;\n' +
'    /**\n' +
'      * Sets or retrieves abbreviated text for the object.\n' +
'      */\n' +
'    abbr: string;\n' +
'    /**\n' +
'      * Sets or retrieves how many rows in a table the cell should span.\n' +
'      */\n' +
'    rowSpan: number;\n' +
'    /**\n' +
'      * Sets or retrieves the group of cells in a table to which the object\'s information applies.\n' +
'      */\n' +
'    scope: string;\n' +
'    /**\n' +
'      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.\n' +
'      */\n' +
'    borderColorDark: any;\n' +
'}\n' +
'declare var HTMLTableCellElement: {\n' +
'    prototype: HTMLTableCellElement;\n' +
'    new (): HTMLTableCellElement;\n' +
'}\n' +
'\n' +
'interface SVGElementInstance extends EventTarget {\n' +
'    previousSibling: SVGElementInstance;\n' +
'    parentNode: SVGElementInstance;\n' +
'    lastChild: SVGElementInstance;\n' +
'    nextSibling: SVGElementInstance;\n' +
'    childNodes: SVGElementInstanceList;\n' +
'    correspondingUseElement: SVGUseElement;\n' +
'    correspondingElement: SVGElement;\n' +
'    firstChild: SVGElementInstance;\n' +
'}\n' +
'declare var SVGElementInstance: {\n' +
'    prototype: SVGElementInstance;\n' +
'    new (): SVGElementInstance;\n' +
'}\n' +
'\n' +
'interface MSNamespaceInfoCollection {\n' +
'    length: number;\n' +
'    add(namespace?: string, urn?: string, implementationUrl?: any): Object;\n' +
'    item(index: any): Object;\n' +
'    [index: string]: Object;\n' +
'}\n' +
'declare var MSNamespaceInfoCollection: {\n' +
'    prototype: MSNamespaceInfoCollection;\n' +
'    new (): MSNamespaceInfoCollection;\n' +
'}\n' +
'\n' +
'interface SVGCircleElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {\n' +
'    cx: SVGAnimatedLength;\n' +
'    r: SVGAnimatedLength;\n' +
'    cy: SVGAnimatedLength;\n' +
'}\n' +
'declare var SVGCircleElement: {\n' +
'    prototype: SVGCircleElement;\n' +
'    new (): SVGCircleElement;\n' +
'}\n' +
'\n' +
'interface StyleSheetList {\n' +
'    length: number;\n' +
'    item(index?: number): StyleSheet;\n' +
'    [index: number]: StyleSheet;\n' +
'}\n' +
'declare var StyleSheetList: {\n' +
'    prototype: StyleSheetList;\n' +
'    new (): StyleSheetList;\n' +
'}\n' +
'\n' +
'interface CSSImportRule extends CSSRule {\n' +
'    styleSheet: CSSStyleSheet;\n' +
'    href: string;\n' +
'    media: MediaList;\n' +
'}\n' +
'declare var CSSImportRule: {\n' +
'    prototype: CSSImportRule;\n' +
'    new (): CSSImportRule;\n' +
'}\n' +
'\n' +
'interface CustomEvent extends Event {\n' +
'    detail: any;\n' +
'    initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: any): void;\n' +
'}\n' +
'declare var CustomEvent: {\n' +
'    prototype: CustomEvent;\n' +
'    new (): CustomEvent;\n' +
'}\n' +
'\n' +
'interface HTMLBaseFontElement extends HTMLElement, DOML2DeprecatedColorProperty {\n' +
'    /**\n' +
'      * Sets or retrieves the current typeface family.\n' +
'      */\n' +
'    face: string;\n' +
'    /**\n' +
'      * Sets or retrieves the font size of the object.\n' +
'      */\n' +
'    size: number;\n' +
'}\n' +
'declare var HTMLBaseFontElement: {\n' +
'    prototype: HTMLBaseFontElement;\n' +
'    new (): HTMLBaseFontElement;\n' +
'}\n' +
'\n' +
'interface HTMLTextAreaElement extends HTMLElement, MSDataBindingExtensions {\n' +
'    /**\n' +
'      * Retrieves or sets the text in the entry field of the textArea element.\n' +
'      */\n' +
'    value: string;\n' +
'    /**\n' +
'      * Sets or retrieves the value indicating whether the control is selected.\n' +
'      */\n' +
'    status: any;\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in.\n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'    /**\n' +
'      * Sets or retrieves the name of the object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Gets or sets the starting position or offset of a text selection.\n' +
'      */\n' +
'    selectionStart: number;\n' +
'    /**\n' +
'      * Sets or retrieves the number of horizontal rows contained in the object.\n' +
'      */\n' +
'    rows: number;\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    cols: number;\n' +
'    /**\n' +
'      * Sets or retrieves the value indicated whether the content of the object is read-only.\n' +
'      */\n' +
'    readOnly: boolean;\n' +
'    /**\n' +
'      * Sets or retrieves how to handle wordwrapping in the object.\n' +
'      */\n' +
'    wrap: string;\n' +
'    /**\n' +
'      * Gets or sets the end position or offset of a text selection.\n' +
'      */\n' +
'    selectionEnd: number;\n' +
'    /**\n' +
'      * Retrieves the type of control.\n' +
'      */\n' +
'    type: string;\n' +
'    /**\n' +
'      * Sets or retrieves the initial contents of the object.\n' +
'      */\n' +
'    defaultValue: string;\n' +
'    /**\n' +
'      * Creates a TextRange object for the element.\n' +
'      */\n' +
'    createTextRange(): TextRange;\n' +
'    /**\n' +
'      * Sets the start and end positions of a selection in a text field.\n' +
'      * @param start The offset into the text field for the start of the selection.\n' +
'      * @param end The offset into the text field for the end of the selection.\n' +
'      */\n' +
'    setSelectionRange(start: number, end: number): void;\n' +
'    /**\n' +
'      * Highlights the input area of a form element.\n' +
'      */\n' +
'    select(): void;\n' +
'}\n' +
'declare var HTMLTextAreaElement: {\n' +
'    prototype: HTMLTextAreaElement;\n' +
'    new (): HTMLTextAreaElement;\n' +
'}\n' +
'\n' +
'interface Geolocation {\n' +
'    clearWatch(watchId: number): void;\n' +
'    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;\n' +
'    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;\n' +
'}\n' +
'declare var Geolocation: {\n' +
'    prototype: Geolocation;\n' +
'    new (): Geolocation;\n' +
'}\n' +
'\n' +
'interface DOML2DeprecatedMarginStyle {\n' +
'    vspace: number;\n' +
'    hspace: number;\n' +
'}\n' +
'\n' +
'interface MSWindowModeless {\n' +
'    dialogTop: any;\n' +
'    dialogLeft: any;\n' +
'    dialogWidth: any;\n' +
'    dialogHeight: any;\n' +
'    menuArguments: any;\n' +
'}\n' +
'\n' +
'interface DOML2DeprecatedAlignmentStyle {\n' +
'    align: string;\n' +
'}\n' +
'\n' +
'interface HTMLMarqueeElement extends HTMLElement, MSDataBindingExtensions, DOML2DeprecatedBackgroundColorStyle {\n' +
'    width: string;\n' +
'    onbounce: (ev: Event) => any;\n' +
'    vspace: number;\n' +
'    trueSpeed: boolean;\n' +
'    scrollAmount: number;\n' +
'    scrollDelay: number;\n' +
'    behavior: string;\n' +
'    height: string;\n' +
'    loop: number;\n' +
'    direction: string;\n' +
'    hspace: number;\n' +
'    onstart: (ev: Event) => any;\n' +
'    onfinish: (ev: Event) => any;\n' +
'    stop(): void;\n' +
'    start(): void;\n' +
'}\n' +
'declare var HTMLMarqueeElement: {\n' +
'    prototype: HTMLMarqueeElement;\n' +
'    new (): HTMLMarqueeElement;\n' +
'}\n' +
'\n' +
'interface SVGRect {\n' +
'    y: number;\n' +
'    width: number;\n' +
'    x: number;\n' +
'    height: number;\n' +
'}\n' +
'declare var SVGRect: {\n' +
'    prototype: SVGRect;\n' +
'    new (): SVGRect;\n' +
'}\n' +
'\n' +
'interface MSNodeExtensions {\n' +
'    swapNode(otherNode: Node): Node;\n' +
'    removeNode(deep?: boolean): Node;\n' +
'    replaceNode(replacement: Node): Node;\n' +
'}\n' +
'\n' +
'interface History {\n' +
'    length: number;\n' +
'    back(distance?: any): void;\n' +
'    forward(distance?: any): void;\n' +
'    go(delta?: any): void;\n' +
'}\n' +
'declare var History: {\n' +
'    prototype: History;\n' +
'    new (): History;\n' +
'}\n' +
'\n' +
'interface SVGPathSegCurvetoCubicAbs extends SVGPathSeg {\n' +
'    y: number;\n' +
'    y1: number;\n' +
'    x2: number;\n' +
'    x: number;\n' +
'    x1: number;\n' +
'    y2: number;\n' +
'}\n' +
'declare var SVGPathSegCurvetoCubicAbs: {\n' +
'    prototype: SVGPathSegCurvetoCubicAbs;\n' +
'    new (): SVGPathSegCurvetoCubicAbs;\n' +
'}\n' +
'\n' +
'interface SVGPathSegCurvetoQuadraticAbs extends SVGPathSeg {\n' +
'    y: number;\n' +
'    y1: number;\n' +
'    x: number;\n' +
'    x1: number;\n' +
'}\n' +
'declare var SVGPathSegCurvetoQuadraticAbs: {\n' +
'    prototype: SVGPathSegCurvetoQuadraticAbs;\n' +
'    new (): SVGPathSegCurvetoQuadraticAbs;\n' +
'}\n' +
'\n' +
'interface TimeRanges {\n' +
'    length: number;\n' +
'    start(index: number): number;\n' +
'    end(index: number): number;\n' +
'}\n' +
'declare var TimeRanges: {\n' +
'    prototype: TimeRanges;\n' +
'    new (): TimeRanges;\n' +
'}\n' +
'\n' +
'interface CSSRule {\n' +
'    cssText: string;\n' +
'    parentStyleSheet: CSSStyleSheet;\n' +
'    parentRule: CSSRule;\n' +
'    type: number;\n' +
'    IMPORT_RULE: number;\n' +
'    MEDIA_RULE: number;\n' +
'    STYLE_RULE: number;\n' +
'    NAMESPACE_RULE: number;\n' +
'    PAGE_RULE: number;\n' +
'    UNKNOWN_RULE: number;\n' +
'    FONT_FACE_RULE: number;\n' +
'    CHARSET_RULE: number;\n' +
'}\n' +
'declare var CSSRule: {\n' +
'    prototype: CSSRule;\n' +
'    new (): CSSRule;\n' +
'    IMPORT_RULE: number;\n' +
'    MEDIA_RULE: number;\n' +
'    STYLE_RULE: number;\n' +
'    NAMESPACE_RULE: number;\n' +
'    PAGE_RULE: number;\n' +
'    UNKNOWN_RULE: number;\n' +
'    FONT_FACE_RULE: number;\n' +
'    CHARSET_RULE: number;\n' +
'}\n' +
'\n' +
'interface SVGPathSegLinetoAbs extends SVGPathSeg {\n' +
'    y: number;\n' +
'    x: number;\n' +
'}\n' +
'declare var SVGPathSegLinetoAbs: {\n' +
'    prototype: SVGPathSegLinetoAbs;\n' +
'    new (): SVGPathSegLinetoAbs;\n' +
'}\n' +
'\n' +
'interface HTMLModElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves the date and time of a modification to the object.\n' +
'      */\n' +
'    dateTime: string;\n' +
'    /**\n' +
'      * Sets or retrieves reference information about the object.\n' +
'      */\n' +
'    cite: string;\n' +
'}\n' +
'declare var HTMLModElement: {\n' +
'    prototype: HTMLModElement;\n' +
'    new (): HTMLModElement;\n' +
'}\n' +
'\n' +
'interface SVGMatrix {\n' +
'    e: number;\n' +
'    c: number;\n' +
'    a: number;\n' +
'    b: number;\n' +
'    d: number;\n' +
'    f: number;\n' +
'    multiply(secondMatrix: SVGMatrix): SVGMatrix;\n' +
'    flipY(): SVGMatrix;\n' +
'    skewY(angle: number): SVGMatrix;\n' +
'    inverse(): SVGMatrix;\n' +
'    scaleNonUniform(scaleFactorX: number, scaleFactorY: number): SVGMatrix;\n' +
'    rotate(angle: number): SVGMatrix;\n' +
'    flipX(): SVGMatrix;\n' +
'    translate(x: number, y: number): SVGMatrix;\n' +
'    scale(scaleFactor: number): SVGMatrix;\n' +
'    rotateFromVector(x: number, y: number): SVGMatrix;\n' +
'    skewX(angle: number): SVGMatrix;\n' +
'}\n' +
'declare var SVGMatrix: {\n' +
'    prototype: SVGMatrix;\n' +
'    new (): SVGMatrix;\n' +
'}\n' +
'\n' +
'interface MSPopupWindow {\n' +
'    document: Document;\n' +
'    isOpen: boolean;\n' +
'    show(x: number, y: number, w: number, h: number, element?: any): void;\n' +
'    hide(): void;\n' +
'}\n' +
'declare var MSPopupWindow: {\n' +
'    prototype: MSPopupWindow;\n' +
'    new (): MSPopupWindow;\n' +
'}\n' +
'\n' +
'interface BeforeUnloadEvent extends Event {\n' +
'    returnValue: string;\n' +
'}\n' +
'declare var BeforeUnloadEvent: {\n' +
'    prototype: BeforeUnloadEvent;\n' +
'    new (): BeforeUnloadEvent;\n' +
'}\n' +
'\n' +
'interface SVGUseElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {\n' +
'    y: SVGAnimatedLength;\n' +
'    width: SVGAnimatedLength;\n' +
'    animatedInstanceRoot: SVGElementInstance;\n' +
'    instanceRoot: SVGElementInstance;\n' +
'    x: SVGAnimatedLength;\n' +
'    height: SVGAnimatedLength;\n' +
'}\n' +
'declare var SVGUseElement: {\n' +
'    prototype: SVGUseElement;\n' +
'    new (): SVGUseElement;\n' +
'}\n' +
'\n' +
'interface Event {\n' +
'    timeStamp: number;\n' +
'    defaultPrevented: boolean;\n' +
'    isTrusted: boolean;\n' +
'    currentTarget: EventTarget;\n' +
'    cancelBubble: boolean;\n' +
'    target: EventTarget;\n' +
'    eventPhase: number;\n' +
'    cancelable: boolean;\n' +
'    type: string;\n' +
'    srcElement: Element;\n' +
'    bubbles: boolean;\n' +
'    initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;\n' +
'    stopPropagation(): void;\n' +
'    stopImmediatePropagation(): void;\n' +
'    preventDefault(): void;\n' +
'    CAPTURING_PHASE: number;\n' +
'    AT_TARGET: number;\n' +
'    BUBBLING_PHASE: number;\n' +
'}\n' +
'declare var Event: {\n' +
'    prototype: Event;\n' +
'    new (): Event;\n' +
'    CAPTURING_PHASE: number;\n' +
'    AT_TARGET: number;\n' +
'    BUBBLING_PHASE: number;\n' +
'}\n' +
'\n' +
'interface ImageData {\n' +
'    width: number;\n' +
'    data: Uint8Array;\n' +
'    height: number;\n' +
'}\n' +
'declare var ImageData: {\n' +
'    prototype: ImageData;\n' +
'    new (): ImageData;\n' +
'}\n' +
'\n' +
'interface HTMLTableColElement extends HTMLElement, HTMLTableAlignment {\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    width: any;\n' +
'    /**\n' +
'      * Sets or retrieves the alignment of the object relative to the display or table.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Sets or retrieves the number of columns in the group.\n' +
'      */\n' +
'    span: number;\n' +
'}\n' +
'declare var HTMLTableColElement: {\n' +
'    prototype: HTMLTableColElement;\n' +
'    new (): HTMLTableColElement;\n' +
'}\n' +
'\n' +
'interface SVGException {\n' +
'    code: number;\n' +
'    message: string;\n' +
'    toString(): string;\n' +
'    SVG_MATRIX_NOT_INVERTABLE: number;\n' +
'    SVG_WRONG_TYPE_ERR: number;\n' +
'    SVG_INVALID_VALUE_ERR: number;\n' +
'}\n' +
'declare var SVGException: {\n' +
'    prototype: SVGException;\n' +
'    new (): SVGException;\n' +
'    SVG_MATRIX_NOT_INVERTABLE: number;\n' +
'    SVG_WRONG_TYPE_ERR: number;\n' +
'    SVG_INVALID_VALUE_ERR: number;\n' +
'}\n' +
'\n' +
'interface SVGLinearGradientElement extends SVGGradientElement {\n' +
'    y1: SVGAnimatedLength;\n' +
'    x2: SVGAnimatedLength;\n' +
'    x1: SVGAnimatedLength;\n' +
'    y2: SVGAnimatedLength;\n' +
'}\n' +
'declare var SVGLinearGradientElement: {\n' +
'    prototype: SVGLinearGradientElement;\n' +
'    new (): SVGLinearGradientElement;\n' +
'}\n' +
'\n' +
'interface HTMLTableAlignment {\n' +
'    /**\n' +
'      * Sets or retrieves a value that you can use to implement your own ch functionality for the object.\n' +
'      */\n' +
'    ch: string;\n' +
'    /**\n' +
'      * Sets or retrieves how text and other content are vertically aligned within the object that contains them.\n' +
'      */\n' +
'    vAlign: string;\n' +
'    /**\n' +
'      * Sets or retrieves a value that you can use to implement your own chOff functionality for the object.\n' +
'      */\n' +
'    chOff: string;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedEnumeration {\n' +
'    animVal: number;\n' +
'    baseVal: number;\n' +
'}\n' +
'declare var SVGAnimatedEnumeration: {\n' +
'    prototype: SVGAnimatedEnumeration;\n' +
'    new (): SVGAnimatedEnumeration;\n' +
'}\n' +
'\n' +
'interface DOML2DeprecatedSizeProperty {\n' +
'    size: number;\n' +
'}\n' +
'\n' +
'interface HTMLUListElement extends HTMLElement, DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {\n' +
'}\n' +
'declare var HTMLUListElement: {\n' +
'    prototype: HTMLUListElement;\n' +
'    new (): HTMLUListElement;\n' +
'}\n' +
'\n' +
'interface SVGRectElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {\n' +
'    y: SVGAnimatedLength;\n' +
'    width: SVGAnimatedLength;\n' +
'    ry: SVGAnimatedLength;\n' +
'    rx: SVGAnimatedLength;\n' +
'    x: SVGAnimatedLength;\n' +
'    height: SVGAnimatedLength;\n' +
'}\n' +
'declare var SVGRectElement: {\n' +
'    prototype: SVGRectElement;\n' +
'    new (): SVGRectElement;\n' +
'}\n' +
'\n' +
'interface ErrorEventHandler {\n' +
'    (event: Event, source: string, fileno: number, columnNumber: number): void;\n' +
'    (message: any, uri: string, lineNumber: number, columnNumber?: number): void;\n' +
'}\n' +
'\n' +
'interface HTMLDivElement extends HTMLElement, MSDataBindingExtensions {\n' +
'    /**\n' +
'      * Sets or retrieves how the object is aligned with adjacent text. \n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Sets or retrieves whether the browser automatically performs wordwrap.\n' +
'      */\n' +
'    noWrap: boolean;\n' +
'}\n' +
'declare var HTMLDivElement: {\n' +
'    prototype: HTMLDivElement;\n' +
'    new (): HTMLDivElement;\n' +
'}\n' +
'\n' +
'interface DOML2DeprecatedBorderStyle {\n' +
'    border: string;\n' +
'}\n' +
'\n' +
'interface NamedNodeMap {\n' +
'    length: number;\n' +
'    removeNamedItemNS(namespaceURI: string, localName: string): Attr;\n' +
'    item(index: number): Attr;\n' +
'    [index: number]: Attr;\n' +
'    removeNamedItem(name: string): Attr;\n' +
'    getNamedItem(name: string): Attr;\n' +
'    setNamedItem(arg: Attr): Attr;\n' +
'    getNamedItemNS(namespaceURI: string, localName: string): Attr;\n' +
'    setNamedItemNS(arg: Attr): Attr;\n' +
'}\n' +
'declare var NamedNodeMap: {\n' +
'    prototype: NamedNodeMap;\n' +
'    new (): NamedNodeMap;\n' +
'}\n' +
'\n' +
'interface MediaList {\n' +
'    length: number;\n' +
'    mediaText: string;\n' +
'    deleteMedium(oldMedium: string): void;\n' +
'    appendMedium(newMedium: string): void;\n' +
'    item(index: number): string;\n' +
'    [index: number]: string;\n' +
'    toString(): string;\n' +
'}\n' +
'declare var MediaList: {\n' +
'    prototype: MediaList;\n' +
'    new (): MediaList;\n' +
'}\n' +
'\n' +
'interface SVGPathSegCurvetoQuadraticSmoothAbs extends SVGPathSeg {\n' +
'    y: number;\n' +
'    x: number;\n' +
'}\n' +
'declare var SVGPathSegCurvetoQuadraticSmoothAbs: {\n' +
'    prototype: SVGPathSegCurvetoQuadraticSmoothAbs;\n' +
'    new (): SVGPathSegCurvetoQuadraticSmoothAbs;\n' +
'}\n' +
'\n' +
'interface SVGPathSegCurvetoCubicSmoothRel extends SVGPathSeg {\n' +
'    y: number;\n' +
'    x2: number;\n' +
'    x: number;\n' +
'    y2: number;\n' +
'}\n' +
'declare var SVGPathSegCurvetoCubicSmoothRel: {\n' +
'    prototype: SVGPathSegCurvetoCubicSmoothRel;\n' +
'    new (): SVGPathSegCurvetoCubicSmoothRel;\n' +
'}\n' +
'\n' +
'interface SVGLengthList {\n' +
'    numberOfItems: number;\n' +
'    replaceItem(newItem: SVGLength, index: number): SVGLength;\n' +
'    getItem(index: number): SVGLength;\n' +
'    clear(): void;\n' +
'    appendItem(newItem: SVGLength): SVGLength;\n' +
'    initialize(newItem: SVGLength): SVGLength;\n' +
'    removeItem(index: number): SVGLength;\n' +
'    insertItemBefore(newItem: SVGLength, index: number): SVGLength;\n' +
'}\n' +
'declare var SVGLengthList: {\n' +
'    prototype: SVGLengthList;\n' +
'    new (): SVGLengthList;\n' +
'}\n' +
'\n' +
'interface ProcessingInstruction extends Node {\n' +
'    target: string;\n' +
'    data: string;\n' +
'}\n' +
'declare var ProcessingInstruction: {\n' +
'    prototype: ProcessingInstruction;\n' +
'    new (): ProcessingInstruction;\n' +
'}\n' +
'\n' +
'interface MSWindowExtensions {\n' +
'    status: string;\n' +
'    onmouseleave: (ev: MouseEvent) => any;\n' +
'    screenLeft: number;\n' +
'    offscreenBuffering: any;\n' +
'    maxConnectionsPerServer: number;\n' +
'    onmouseenter: (ev: MouseEvent) => any;\n' +
'    clipboardData: DataTransfer;\n' +
'    defaultStatus: string;\n' +
'    clientInformation: Navigator;\n' +
'    closed: boolean;\n' +
'    onhelp: (ev: Event) => any;\n' +
'    external: External;\n' +
'    event: MSEventObj;\n' +
'    onfocusout: (ev: FocusEvent) => any;\n' +
'    screenTop: number;\n' +
'    onfocusin: (ev: FocusEvent) => any;\n' +
'    showModelessDialog(url?: string, argument?: any, options?: any): Window;\n' +
'    navigate(url: string): void;\n' +
'    resizeBy(x?: number, y?: number): void;\n' +
'    item(index: any): any;\n' +
'    resizeTo(x?: number, y?: number): void;\n' +
'    createPopup(arguments?: any): MSPopupWindow;\n' +
'    toStaticHTML(html: string): string;\n' +
'    execScript(code: string, language?: string): any;\n' +
'    msWriteProfilerMark(profilerMarkName: string): void;\n' +
'    moveTo(x?: number, y?: number): void;\n' +
'    moveBy(x?: number, y?: number): void;\n' +
'    showHelp(url: string, helpArg?: any, features?: string): void;\n' +
'}\n' +
'\n' +
'interface MSBehaviorUrnsCollection {\n' +
'    length: number;\n' +
'    item(index: number): string;\n' +
'}\n' +
'declare var MSBehaviorUrnsCollection: {\n' +
'    prototype: MSBehaviorUrnsCollection;\n' +
'    new (): MSBehaviorUrnsCollection;\n' +
'}\n' +
'\n' +
'interface CSSFontFaceRule extends CSSRule {\n' +
'    style: CSSStyleDeclaration;\n' +
'}\n' +
'declare var CSSFontFaceRule: {\n' +
'    prototype: CSSFontFaceRule;\n' +
'    new (): CSSFontFaceRule;\n' +
'}\n' +
'\n' +
'interface DOML2DeprecatedBackgroundStyle {\n' +
'    background: string;\n' +
'}\n' +
'\n' +
'interface TextEvent extends UIEvent {\n' +
'    inputMethod: number;\n' +
'    data: string;\n' +
'    locale: string;\n' +
'    initTextEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, inputMethod: number, locale: string): void;\n' +
'    DOM_INPUT_METHOD_KEYBOARD: number;\n' +
'    DOM_INPUT_METHOD_DROP: number;\n' +
'    DOM_INPUT_METHOD_IME: number;\n' +
'    DOM_INPUT_METHOD_SCRIPT: number;\n' +
'    DOM_INPUT_METHOD_VOICE: number;\n' +
'    DOM_INPUT_METHOD_UNKNOWN: number;\n' +
'    DOM_INPUT_METHOD_PASTE: number;\n' +
'    DOM_INPUT_METHOD_HANDWRITING: number;\n' +
'    DOM_INPUT_METHOD_OPTION: number;\n' +
'    DOM_INPUT_METHOD_MULTIMODAL: number;\n' +
'}\n' +
'declare var TextEvent: {\n' +
'    prototype: TextEvent;\n' +
'    new (): TextEvent;\n' +
'    DOM_INPUT_METHOD_KEYBOARD: number;\n' +
'    DOM_INPUT_METHOD_DROP: number;\n' +
'    DOM_INPUT_METHOD_IME: number;\n' +
'    DOM_INPUT_METHOD_SCRIPT: number;\n' +
'    DOM_INPUT_METHOD_VOICE: number;\n' +
'    DOM_INPUT_METHOD_UNKNOWN: number;\n' +
'    DOM_INPUT_METHOD_PASTE: number;\n' +
'    DOM_INPUT_METHOD_HANDWRITING: number;\n' +
'    DOM_INPUT_METHOD_OPTION: number;\n' +
'    DOM_INPUT_METHOD_MULTIMODAL: number;\n' +
'}\n' +
'\n' +
'interface DocumentFragment extends Node, NodeSelector, MSEventAttachmentTarget, MSNodeExtensions {\n' +
'}\n' +
'declare var DocumentFragment: {\n' +
'    prototype: DocumentFragment;\n' +
'    new (): DocumentFragment;\n' +
'}\n' +
'\n' +
'interface SVGPolylineElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests, SVGExternalResourcesRequired {\n' +
'}\n' +
'declare var SVGPolylineElement: {\n' +
'    prototype: SVGPolylineElement;\n' +
'    new (): SVGPolylineElement;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedPathData {\n' +
'    pathSegList: SVGPathSegList;\n' +
'}\n' +
'\n' +
'interface Position {\n' +
'    timestamp: number;\n' +
'    coords: Coordinates;\n' +
'}\n' +
'declare var Position: {\n' +
'    prototype: Position;\n' +
'    new (): Position;\n' +
'}\n' +
'\n' +
'interface BookmarkCollection {\n' +
'    length: number;\n' +
'    item(index: number): any;\n' +
'    [index: number]: any;\n' +
'}\n' +
'declare var BookmarkCollection: {\n' +
'    prototype: BookmarkCollection;\n' +
'    new (): BookmarkCollection;\n' +
'}\n' +
'\n' +
'interface PerformanceMark extends PerformanceEntry {\n' +
'}\n' +
'declare var PerformanceMark: {\n' +
'    prototype: PerformanceMark;\n' +
'    new (): PerformanceMark;\n' +
'}\n' +
'\n' +
'interface CSSPageRule extends CSSRule {\n' +
'    pseudoClass: string;\n' +
'    selectorText: string;\n' +
'    selector: string;\n' +
'    style: CSSStyleDeclaration;\n' +
'}\n' +
'declare var CSSPageRule: {\n' +
'    prototype: CSSPageRule;\n' +
'    new (): CSSPageRule;\n' +
'}\n' +
'\n' +
'interface HTMLBRElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves the side on which floating objects are not to be positioned when any IHTMLBlockElement is inserted into the document.\n' +
'      */\n' +
'    clear: string;\n' +
'}\n' +
'declare var HTMLBRElement: {\n' +
'    prototype: HTMLBRElement;\n' +
'    new (): HTMLBRElement;\n' +
'}\n' +
'\n' +
'interface MSNavigatorExtensions {\n' +
'    userLanguage: string;\n' +
'    plugins: MSPluginsCollection;\n' +
'    cookieEnabled: boolean;\n' +
'    appCodeName: string;\n' +
'    cpuClass: string;\n' +
'    appMinorVersion: string;\n' +
'    connectionSpeed: number;\n' +
'    browserLanguage: string;\n' +
'    mimeTypes: MSMimeTypesCollection;\n' +
'    systemLanguage: string;\n' +
'    javaEnabled(): boolean;\n' +
'    taintEnabled(): boolean;\n' +
'}\n' +
'\n' +
'interface HTMLSpanElement extends HTMLElement, MSDataBindingExtensions {\n' +
'}\n' +
'declare var HTMLSpanElement: {\n' +
'    prototype: HTMLSpanElement;\n' +
'    new (): HTMLSpanElement;\n' +
'}\n' +
'\n' +
'interface HTMLHeadElement extends HTMLElement {\n' +
'    profile: string;\n' +
'}\n' +
'declare var HTMLHeadElement: {\n' +
'    prototype: HTMLHeadElement;\n' +
'    new (): HTMLHeadElement;\n' +
'}\n' +
'\n' +
'interface HTMLHeadingElement extends HTMLElement, DOML2DeprecatedTextFlowControl {\n' +
'    /**\n' +
'      * Sets or retrieves a value that indicates the table alignment.\n' +
'      */\n' +
'    align: string;\n' +
'}\n' +
'declare var HTMLHeadingElement: {\n' +
'    prototype: HTMLHeadingElement;\n' +
'    new (): HTMLHeadingElement;\n' +
'}\n' +
'\n' +
'interface HTMLFormElement extends HTMLElement, MSHTMLCollectionExtensions {\n' +
'    /**\n' +
'      * Sets or retrieves the number of objects in a collection.\n' +
'      */\n' +
'    length: number;\n' +
'    /**\n' +
'      * Sets or retrieves the window or frame at which to target content.\n' +
'      */\n' +
'    target: string;\n' +
'    /**\n' +
'      * Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form.\n' +
'      */\n' +
'    acceptCharset: string;\n' +
'    /**\n' +
'      * Sets or retrieves the encoding type for the form.\n' +
'      */\n' +
'    enctype: string;\n' +
'    /**\n' +
'      * Retrieves a collection, in source order, of all controls in a given form.\n' +
'      */\n' +
'    elements: HTMLCollection;\n' +
'    /**\n' +
'      * Sets or retrieves the URL to which the form content is sent for processing.\n' +
'      */\n' +
'    action: string;\n' +
'    /**\n' +
'      * Sets or retrieves the name of the object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Sets or retrieves how to send the form data to the server.\n' +
'      */\n' +
'    method: string;\n' +
'    /**\n' +
'      * Sets or retrieves the MIME encoding for the form.\n' +
'      */\n' +
'    encoding: string;\n' +
'    /**\n' +
'      * Fires when the user resets a form.\n' +
'      */\n' +
'    reset(): void;\n' +
'    /**\n' +
'      * Retrieves a form object or an object from an elements collection.\n' +
'      * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is a Number, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.\n' +
'      * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.\n' +
'      */\n' +
'    item(name?: any, index?: any): any;\n' +
'    /**\n' +
'      * Fires when a FORM is about to be submitted.\n' +
'      */\n' +
'    submit(): void;\n' +
'    /**\n' +
'      * Retrieves a form object or an object from an elements collection.\n' +
'      */\n' +
'    namedItem(name: string): any;\n' +
'    [name: string]: any;\n' +
'}\n' +
'declare var HTMLFormElement: {\n' +
'    prototype: HTMLFormElement;\n' +
'    new (): HTMLFormElement;\n' +
'}\n' +
'\n' +
'interface SVGZoomAndPan {\n' +
'    zoomAndPan: number;\n' +
'    SVG_ZOOMANDPAN_MAGNIFY: number;\n' +
'    SVG_ZOOMANDPAN_UNKNOWN: number;\n' +
'    SVG_ZOOMANDPAN_DISABLE: number;\n' +
'}\n' +
'declare var SVGZoomAndPan: {\n' +
'    prototype: SVGZoomAndPan;\n' +
'    new (): SVGZoomAndPan;\n' +
'    SVG_ZOOMANDPAN_MAGNIFY: number;\n' +
'    SVG_ZOOMANDPAN_UNKNOWN: number;\n' +
'    SVG_ZOOMANDPAN_DISABLE: number;\n' +
'}\n' +
'\n' +
'interface HTMLMediaElement extends HTMLElement {\n' +
'    /**\n' +
'      * Gets the earliest possible position, in seconds, that the playback can begin.\n' +
'      */\n' +
'    initialTime: number;\n' +
'    /**\n' +
'      * Gets TimeRanges for the current media resource that has been played.\n' +
'      */\n' +
'    played: TimeRanges;\n' +
'    /**\n' +
'      * Gets the address or URL of the current media resource that is selected by IHTMLMediaElement.\n' +
'      */\n' +
'    currentSrc: string;\n' +
'    readyState: any;\n' +
'    /**\n' +
'      * The autobuffer element is not supported by Internet Explorer 9. Use the preload element instead.\n' +
'      */\n' +
'    autobuffer: boolean;\n' +
'    /**\n' +
'      * Gets or sets a flag to specify whether playback should restart after it completes.\n' +
'      */\n' +
'    loop: boolean;\n' +
'    /**\n' +
'      * Gets information about whether the playback has ended or not.\n' +
'      */\n' +
'    ended: boolean;\n' +
'    /**\n' +
'      * Gets a collection of buffered time ranges.\n' +
'      */\n' +
'    buffered: TimeRanges;\n' +
'    /**\n' +
'      * Returns an object representing the current error state of the audio or video element.\n' +
'      */\n' +
'    error: MediaError;\n' +
'    /**\n' +
'      * Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked.\n' +
'      */\n' +
'    seekable: TimeRanges;\n' +
'    /**\n' +
'      * Gets or sets a value that indicates whether to start playing the media automatically.\n' +
'      */\n' +
'    autoplay: boolean;\n' +
'    /**\n' +
'      * Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player).\n' +
'      */\n' +
'    controls: boolean;\n' +
'    /**\n' +
'      * Gets or sets the volume level for audio portions of the media element.\n' +
'      */\n' +
'    volume: number;\n' +
'    /**\n' +
'      * The address or URL of the a media resource that is to be considered.\n' +
'      */\n' +
'    src: string;\n' +
'    /**\n' +
'      * Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource.\n' +
'      */\n' +
'    playbackRate: number;\n' +
'    /**\n' +
'      * Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming.\n' +
'      */\n' +
'    duration: number;\n' +
'    /**\n' +
'      * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.\n' +
'      */\n' +
'    muted: boolean;\n' +
'    /**\n' +
'      * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.\n' +
'      */\n' +
'    defaultPlaybackRate: number;\n' +
'    /**\n' +
'      * Gets a flag that specifies whether playback is paused.\n' +
'      */\n' +
'    paused: boolean;\n' +
'    /**\n' +
'      * Gets a flag that indicates whether the the client is currently moving to a new playback position in the media resource.\n' +
'      */\n' +
'    seeking: boolean;\n' +
'    /**\n' +
'      * Gets or sets the current playback position, in seconds.\n' +
'      */\n' +
'    currentTime: number;\n' +
'    /**\n' +
'      * Gets or sets the current playback position, in seconds.\n' +
'      */\n' +
'    preload: string;\n' +
'    /**\n' +
'      * Gets the current network activity for the element.\n' +
'      */\n' +
'    networkState: number;\n' +
'    /**\n' +
'      * Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is playing or paused. You can also use the pause or play events to tell whether the media is playing or not.\n' +
'      */\n' +
'    pause(): void;\n' +
'    /**\n' +
'      * Loads and starts playback of a media resource.\n' +
'      */\n' +
'    play(): void;\n' +
'    /**\n' +
'      * Fires immediately after the client loads the object.\n' +
'      */\n' +
'    load(): void;\n' +
'    /**\n' +
'      * Returns a string that specifies whether the client can play a given media resource type.\n' +
'      */\n' +
'    canPlayType(type: string): string;\n' +
'    HAVE_METADATA: number;\n' +
'    HAVE_CURRENT_DATA: number;\n' +
'    HAVE_NOTHING: number;\n' +
'    NETWORK_NO_SOURCE: number;\n' +
'    HAVE_ENOUGH_DATA: number;\n' +
'    NETWORK_EMPTY: number;\n' +
'    NETWORK_LOADING: number;\n' +
'    NETWORK_IDLE: number;\n' +
'    HAVE_FUTURE_DATA: number;\n' +
'}\n' +
'declare var HTMLMediaElement: {\n' +
'    prototype: HTMLMediaElement;\n' +
'    new (): HTMLMediaElement;\n' +
'    HAVE_METADATA: number;\n' +
'    HAVE_CURRENT_DATA: number;\n' +
'    HAVE_NOTHING: number;\n' +
'    NETWORK_NO_SOURCE: number;\n' +
'    HAVE_ENOUGH_DATA: number;\n' +
'    NETWORK_EMPTY: number;\n' +
'    NETWORK_LOADING: number;\n' +
'    NETWORK_IDLE: number;\n' +
'    HAVE_FUTURE_DATA: number;\n' +
'}\n' +
'\n' +
'interface ElementCSSInlineStyle {\n' +
'    runtimeStyle: MSStyleCSSProperties;\n' +
'    currentStyle: MSCurrentStyleCSSProperties;\n' +
'    doScroll(component?: any): void;\n' +
'    componentFromPoint(x: number, y: number): string;\n' +
'}\n' +
'\n' +
'interface DOMParser {\n' +
'    parseFromString(source: string, mimeType: string): Document;\n' +
'}\n' +
'declare var DOMParser: {\n' +
'    prototype: DOMParser;\n' +
'    new (): DOMParser;\n' +
'}\n' +
'\n' +
'interface MSMimeTypesCollection {\n' +
'    length: number;\n' +
'}\n' +
'declare var MSMimeTypesCollection: {\n' +
'    prototype: MSMimeTypesCollection;\n' +
'    new (): MSMimeTypesCollection;\n' +
'}\n' +
'\n' +
'interface StyleSheet {\n' +
'    disabled: boolean;\n' +
'    ownerNode: Node;\n' +
'    parentStyleSheet: StyleSheet;\n' +
'    href: string;\n' +
'    media: MediaList;\n' +
'    type: string;\n' +
'    title: string;\n' +
'}\n' +
'declare var StyleSheet: {\n' +
'    prototype: StyleSheet;\n' +
'    new (): StyleSheet;\n' +
'}\n' +
'\n' +
'interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {\n' +
'    startOffset: SVGAnimatedLength;\n' +
'    method: SVGAnimatedEnumeration;\n' +
'    spacing: SVGAnimatedEnumeration;\n' +
'    TEXTPATH_SPACINGTYPE_EXACT: number;\n' +
'    TEXTPATH_METHODTYPE_STRETCH: number;\n' +
'    TEXTPATH_SPACINGTYPE_AUTO: number;\n' +
'    TEXTPATH_SPACINGTYPE_UNKNOWN: number;\n' +
'    TEXTPATH_METHODTYPE_UNKNOWN: number;\n' +
'    TEXTPATH_METHODTYPE_ALIGN: number;\n' +
'}\n' +
'declare var SVGTextPathElement: {\n' +
'    prototype: SVGTextPathElement;\n' +
'    new (): SVGTextPathElement;\n' +
'    TEXTPATH_SPACINGTYPE_EXACT: number;\n' +
'    TEXTPATH_METHODTYPE_STRETCH: number;\n' +
'    TEXTPATH_SPACINGTYPE_AUTO: number;\n' +
'    TEXTPATH_SPACINGTYPE_UNKNOWN: number;\n' +
'    TEXTPATH_METHODTYPE_UNKNOWN: number;\n' +
'    TEXTPATH_METHODTYPE_ALIGN: number;\n' +
'}\n' +
'\n' +
'interface HTMLDTElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves whether the browser automatically performs wordwrap.\n' +
'      */\n' +
'    noWrap: boolean;\n' +
'}\n' +
'declare var HTMLDTElement: {\n' +
'    prototype: HTMLDTElement;\n' +
'    new (): HTMLDTElement;\n' +
'}\n' +
'\n' +
'interface NodeList {\n' +
'    length: number;\n' +
'    item(index: number): Node;\n' +
'    [index: number]: Node;\n' +
'}\n' +
'declare var NodeList: {\n' +
'    prototype: NodeList;\n' +
'    new (): NodeList;\n' +
'}\n' +
'\n' +
'interface NodeListOf<TNode extends Node> extends NodeList {\n' +
'    length: number;\n' +
'    item(index: number): TNode;\n' +
'    [index: number]: TNode;\n' +
'}\n' +
'\n' +
'interface XMLSerializer {\n' +
'    serializeToString(target: Node): string;\n' +
'}\n' +
'declare var XMLSerializer: {\n' +
'    prototype: XMLSerializer;\n' +
'    new (): XMLSerializer;\n' +
'}\n' +
'\n' +
'interface PerformanceMeasure extends PerformanceEntry {\n' +
'}\n' +
'declare var PerformanceMeasure: {\n' +
'    prototype: PerformanceMeasure;\n' +
'    new (): PerformanceMeasure;\n' +
'}\n' +
'\n' +
'interface SVGGradientElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGExternalResourcesRequired, SVGURIReference {\n' +
'    spreadMethod: SVGAnimatedEnumeration;\n' +
'    gradientTransform: SVGAnimatedTransformList;\n' +
'    gradientUnits: SVGAnimatedEnumeration;\n' +
'    SVG_SPREADMETHOD_REFLECT: number;\n' +
'    SVG_SPREADMETHOD_PAD: number;\n' +
'    SVG_SPREADMETHOD_UNKNOWN: number;\n' +
'    SVG_SPREADMETHOD_REPEAT: number;\n' +
'}\n' +
'declare var SVGGradientElement: {\n' +
'    prototype: SVGGradientElement;\n' +
'    new (): SVGGradientElement;\n' +
'    SVG_SPREADMETHOD_REFLECT: number;\n' +
'    SVG_SPREADMETHOD_PAD: number;\n' +
'    SVG_SPREADMETHOD_UNKNOWN: number;\n' +
'    SVG_SPREADMETHOD_REPEAT: number;\n' +
'}\n' +
'\n' +
'interface NodeFilter {\n' +
'    acceptNode(n: Node): number;\n' +
'    SHOW_ENTITY_REFERENCE: number;\n' +
'    SHOW_NOTATION: number;\n' +
'    SHOW_ENTITY: number;\n' +
'    SHOW_DOCUMENT: number;\n' +
'    SHOW_PROCESSING_INSTRUCTION: number;\n' +
'    FILTER_REJECT: number;\n' +
'    SHOW_CDATA_SECTION: number;\n' +
'    FILTER_ACCEPT: number;\n' +
'    SHOW_ALL: number;\n' +
'    SHOW_DOCUMENT_TYPE: number;\n' +
'    SHOW_TEXT: number;\n' +
'    SHOW_ELEMENT: number;\n' +
'    SHOW_COMMENT: number;\n' +
'    FILTER_SKIP: number;\n' +
'    SHOW_ATTRIBUTE: number;\n' +
'    SHOW_DOCUMENT_FRAGMENT: number;\n' +
'}\n' +
'declare var NodeFilter: {\n' +
'    prototype: NodeFilter;\n' +
'    new (): NodeFilter;\n' +
'    SHOW_ENTITY_REFERENCE: number;\n' +
'    SHOW_NOTATION: number;\n' +
'    SHOW_ENTITY: number;\n' +
'    SHOW_DOCUMENT: number;\n' +
'    SHOW_PROCESSING_INSTRUCTION: number;\n' +
'    FILTER_REJECT: number;\n' +
'    SHOW_CDATA_SECTION: number;\n' +
'    FILTER_ACCEPT: number;\n' +
'    SHOW_ALL: number;\n' +
'    SHOW_DOCUMENT_TYPE: number;\n' +
'    SHOW_TEXT: number;\n' +
'    SHOW_ELEMENT: number;\n' +
'    SHOW_COMMENT: number;\n' +
'    FILTER_SKIP: number;\n' +
'    SHOW_ATTRIBUTE: number;\n' +
'    SHOW_DOCUMENT_FRAGMENT: number;\n' +
'}\n' +
'\n' +
'interface SVGNumberList {\n' +
'    numberOfItems: number;\n' +
'    replaceItem(newItem: SVGNumber, index: number): SVGNumber;\n' +
'    getItem(index: number): SVGNumber;\n' +
'    clear(): void;\n' +
'    appendItem(newItem: SVGNumber): SVGNumber;\n' +
'    initialize(newItem: SVGNumber): SVGNumber;\n' +
'    removeItem(index: number): SVGNumber;\n' +
'    insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;\n' +
'}\n' +
'declare var SVGNumberList: {\n' +
'    prototype: SVGNumberList;\n' +
'    new (): SVGNumberList;\n' +
'}\n' +
'\n' +
'interface MediaError {\n' +
'    code: number;\n' +
'    MEDIA_ERR_ABORTED: number;\n' +
'    MEDIA_ERR_NETWORK: number;\n' +
'    MEDIA_ERR_SRC_NOT_SUPPORTED: number;\n' +
'    MEDIA_ERR_DECODE: number;\n' +
'}\n' +
'declare var MediaError: {\n' +
'    prototype: MediaError;\n' +
'    new (): MediaError;\n' +
'    MEDIA_ERR_ABORTED: number;\n' +
'    MEDIA_ERR_NETWORK: number;\n' +
'    MEDIA_ERR_SRC_NOT_SUPPORTED: number;\n' +
'    MEDIA_ERR_DECODE: number;\n' +
'}\n' +
'\n' +
'interface HTMLFieldSetElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or retrieves how the object is aligned with adjacent text.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in.\n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'}\n' +
'declare var HTMLFieldSetElement: {\n' +
'    prototype: HTMLFieldSetElement;\n' +
'    new (): HTMLFieldSetElement;\n' +
'}\n' +
'\n' +
'interface HTMLBGSoundElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or gets the value indicating how the volume of the background sound is divided between the left speaker and the right speaker.\n' +
'      */\n' +
'    balance: any;\n' +
'    /**\n' +
'      * Sets or gets the volume setting for the sound. \n' +
'      */\n' +
'    volume: any;\n' +
'    /**\n' +
'      * Sets or gets the URL of a sound to play.\n' +
'      */\n' +
'    src: string;\n' +
'    /**\n' +
'      * Sets or retrieves the number of times a sound or video clip will loop when activated.\n' +
'      */\n' +
'    loop: number;\n' +
'}\n' +
'declare var HTMLBGSoundElement: {\n' +
'    prototype: HTMLBGSoundElement;\n' +
'    new (): HTMLBGSoundElement;\n' +
'}\n' +
'\n' +
'interface HTMLElement extends Element, ElementCSSInlineStyle, MSEventAttachmentTarget, MSNodeExtensions {\n' +
'    onmouseleave: (ev: MouseEvent) => any;\n' +
'    onbeforecut: (ev: DragEvent) => any;\n' +
'    onkeydown: (ev: KeyboardEvent) => any;\n' +
'    onmove: (ev: MSEventObj) => any;\n' +
'    onkeyup: (ev: KeyboardEvent) => any;\n' +
'    onreset: (ev: Event) => any;\n' +
'    onhelp: (ev: Event) => any;\n' +
'    ondragleave: (ev: DragEvent) => any;\n' +
'    className: string;\n' +
'    onfocusin: (ev: FocusEvent) => any;\n' +
'    onseeked: (ev: Event) => any;\n' +
'    recordNumber: any;\n' +
'    title: string;\n' +
'    parentTextEdit: Element;\n' +
'    outerHTML: string;\n' +
'    ondurationchange: (ev: Event) => any;\n' +
'    offsetHeight: number;\n' +
'    all: HTMLCollection;\n' +
'    onblur: (ev: FocusEvent) => any;\n' +
'    dir: string;\n' +
'    onemptied: (ev: Event) => any;\n' +
'    onseeking: (ev: Event) => any;\n' +
'    oncanplay: (ev: Event) => any;\n' +
'    ondeactivate: (ev: UIEvent) => any;\n' +
'    ondatasetchanged: (ev: MSEventObj) => any;\n' +
'    onrowsdelete: (ev: MSEventObj) => any;\n' +
'    sourceIndex: number;\n' +
'    onloadstart: (ev: Event) => any;\n' +
'    onlosecapture: (ev: MSEventObj) => any;\n' +
'    ondragenter: (ev: DragEvent) => any;\n' +
'    oncontrolselect: (ev: MSEventObj) => any;\n' +
'    onsubmit: (ev: Event) => any;\n' +
'    behaviorUrns: MSBehaviorUrnsCollection;\n' +
'    scopeName: string;\n' +
'    onchange: (ev: Event) => any;\n' +
'    id: string;\n' +
'    onlayoutcomplete: (ev: MSEventObj) => any;\n' +
'    uniqueID: string;\n' +
'    onbeforeactivate: (ev: UIEvent) => any;\n' +
'    oncanplaythrough: (ev: Event) => any;\n' +
'    onbeforeupdate: (ev: MSEventObj) => any;\n' +
'    onfilterchange: (ev: MSEventObj) => any;\n' +
'    offsetParent: Element;\n' +
'    ondatasetcomplete: (ev: MSEventObj) => any;\n' +
'    onsuspend: (ev: Event) => any;\n' +
'    readyState: any;\n' +
'    onmouseenter: (ev: MouseEvent) => any;\n' +
'    innerText: string;\n' +
'    onerrorupdate: (ev: MSEventObj) => any;\n' +
'    onmouseout: (ev: MouseEvent) => any;\n' +
'    parentElement: HTMLElement;\n' +
'    onmousewheel: (ev: MouseWheelEvent) => any;\n' +
'    onvolumechange: (ev: Event) => any;\n' +
'    oncellchange: (ev: MSEventObj) => any;\n' +
'    onrowexit: (ev: MSEventObj) => any;\n' +
'    onrowsinserted: (ev: MSEventObj) => any;\n' +
'    onpropertychange: (ev: MSEventObj) => any;\n' +
'    filters: Object;\n' +
'    children: HTMLCollection;\n' +
'    ondragend: (ev: DragEvent) => any;\n' +
'    onbeforepaste: (ev: DragEvent) => any;\n' +
'    ondragover: (ev: DragEvent) => any;\n' +
'    offsetTop: number;\n' +
'    onmouseup: (ev: MouseEvent) => any;\n' +
'    ondragstart: (ev: DragEvent) => any;\n' +
'    onbeforecopy: (ev: DragEvent) => any;\n' +
'    ondrag: (ev: DragEvent) => any;\n' +
'    innerHTML: string;\n' +
'    onmouseover: (ev: MouseEvent) => any;\n' +
'    lang: string;\n' +
'    uniqueNumber: number;\n' +
'    onpause: (ev: Event) => any;\n' +
'    tagUrn: string;\n' +
'    onmousedown: (ev: MouseEvent) => any;\n' +
'    onclick: (ev: MouseEvent) => any;\n' +
'    onwaiting: (ev: Event) => any;\n' +
'    onresizestart: (ev: MSEventObj) => any;\n' +
'    offsetLeft: number;\n' +
'    isTextEdit: boolean;\n' +
'    isDisabled: boolean;\n' +
'    onpaste: (ev: DragEvent) => any;\n' +
'    canHaveHTML: boolean;\n' +
'    onmoveend: (ev: MSEventObj) => any;\n' +
'    language: string;\n' +
'    onstalled: (ev: Event) => any;\n' +
'    onmousemove: (ev: MouseEvent) => any;\n' +
'    style: MSStyleCSSProperties;\n' +
'    isContentEditable: boolean;\n' +
'    onbeforeeditfocus: (ev: MSEventObj) => any;\n' +
'    onratechange: (ev: Event) => any;\n' +
'    contentEditable: string;\n' +
'    tabIndex: number;\n' +
'    document: Document;\n' +
'    onprogress: (ev: any) => any;\n' +
'    ondblclick: (ev: MouseEvent) => any;\n' +
'    oncontextmenu: (ev: MouseEvent) => any;\n' +
'    onloadedmetadata: (ev: Event) => any;\n' +
'    onafterupdate: (ev: MSEventObj) => any;\n' +
'    onerror: (ev: Event) => any;\n' +
'    onplay: (ev: Event) => any;\n' +
'    onresizeend: (ev: MSEventObj) => any;\n' +
'    onplaying: (ev: Event) => any;\n' +
'    isMultiLine: boolean;\n' +
'    onfocusout: (ev: FocusEvent) => any;\n' +
'    onabort: (ev: UIEvent) => any;\n' +
'    ondataavailable: (ev: MSEventObj) => any;\n' +
'    hideFocus: boolean;\n' +
'    onreadystatechange: (ev: Event) => any;\n' +
'    onkeypress: (ev: KeyboardEvent) => any;\n' +
'    onloadeddata: (ev: Event) => any;\n' +
'    onbeforedeactivate: (ev: UIEvent) => any;\n' +
'    outerText: string;\n' +
'    disabled: boolean;\n' +
'    onactivate: (ev: UIEvent) => any;\n' +
'    accessKey: string;\n' +
'    onmovestart: (ev: MSEventObj) => any;\n' +
'    onselectstart: (ev: Event) => any;\n' +
'    onfocus: (ev: FocusEvent) => any;\n' +
'    ontimeupdate: (ev: Event) => any;\n' +
'    onresize: (ev: UIEvent) => any;\n' +
'    oncut: (ev: DragEvent) => any;\n' +
'    onselect: (ev: UIEvent) => any;\n' +
'    ondrop: (ev: DragEvent) => any;\n' +
'    offsetWidth: number;\n' +
'    oncopy: (ev: DragEvent) => any;\n' +
'    onended: (ev: Event) => any;\n' +
'    onscroll: (ev: UIEvent) => any;\n' +
'    onrowenter: (ev: MSEventObj) => any;\n' +
'    onload: (ev: Event) => any;\n' +
'    canHaveChildren: boolean;\n' +
'    oninput: (ev: Event) => any;\n' +
'    dragDrop(): boolean;\n' +
'    scrollIntoView(top?: boolean): void;\n' +
'    addFilter(filter: Object): void;\n' +
'    setCapture(containerCapture?: boolean): void;\n' +
'    focus(): void;\n' +
'    getAdjacentText(where: string): string;\n' +
'    insertAdjacentText(where: string, text: string): void;\n' +
'    getElementsByClassName(classNames: string): NodeList;\n' +
'    setActive(): void;\n' +
'    removeFilter(filter: Object): void;\n' +
'    blur(): void;\n' +
'    clearAttributes(): void;\n' +
'    releaseCapture(): void;\n' +
'    createControlRange(): ControlRangeCollection;\n' +
'    removeBehavior(cookie: number): boolean;\n' +
'    contains(child: HTMLElement): boolean;\n' +
'    click(): void;\n' +
'    insertAdjacentElement(position: string, insertedElement: Element): Element;\n' +
'    mergeAttributes(source: HTMLElement, preserveIdentity?: boolean): void;\n' +
'    replaceAdjacentText(where: string, newText: string): string;\n' +
'    applyElement(apply: Element, where?: string): Element;\n' +
'    addBehavior(bstrUrl: string, factory?: any): number;\n' +
'    insertAdjacentHTML(where: string, html: string): void;\n' +
'}\n' +
'declare var HTMLElement: {\n' +
'    prototype: HTMLElement;\n' +
'    new (): HTMLElement;\n' +
'}\n' +
'\n' +
'interface Comment extends CharacterData {\n' +
'    text: string;\n' +
'}\n' +
'declare var Comment: {\n' +
'    prototype: Comment;\n' +
'    new (): Comment;\n' +
'}\n' +
'\n' +
'interface PerformanceResourceTiming extends PerformanceEntry {\n' +
'    redirectStart: number;\n' +
'    redirectEnd: number;\n' +
'    domainLookupEnd: number;\n' +
'    responseStart: number;\n' +
'    domainLookupStart: number;\n' +
'    fetchStart: number;\n' +
'    requestStart: number;\n' +
'    connectEnd: number;\n' +
'    connectStart: number;\n' +
'    initiatorType: string;\n' +
'    responseEnd: number;\n' +
'}\n' +
'declare var PerformanceResourceTiming: {\n' +
'    prototype: PerformanceResourceTiming;\n' +
'    new (): PerformanceResourceTiming;\n' +
'}\n' +
'\n' +
'interface CanvasPattern {\n' +
'}\n' +
'declare var CanvasPattern: {\n' +
'    prototype: CanvasPattern;\n' +
'    new (): CanvasPattern;\n' +
'}\n' +
'\n' +
'interface HTMLHRElement extends HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    width: number;\n' +
'    /**\n' +
'      * Sets or retrieves how the object is aligned with adjacent text.\n' +
'      */\n' +
'    align: string;\n' +
'    /**\n' +
'      * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.\n' +
'      */\n' +
'    noShade: boolean;\n' +
'}\n' +
'declare var HTMLHRElement: {\n' +
'    prototype: HTMLHRElement;\n' +
'    new (): HTMLHRElement;\n' +
'}\n' +
'\n' +
'interface HTMLObjectElement extends HTMLElement, GetSVGDocument, DOML2DeprecatedMarginStyle, DOML2DeprecatedBorderStyle, DOML2DeprecatedAlignmentStyle, MSDataBindingExtensions, MSDataBindingRecordSetExtensions {\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    width: string;\n' +
'    /**\n' +
'      * Sets or retrieves the Internet media type for the code associated with the object.\n' +
'      */\n' +
'    codeType: string;\n' +
'    /**\n' +
'      * Retrieves the contained object.\n' +
'      */\n' +
'    object: Object;\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in.\n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'    /**\n' +
'      * Sets or retrieves the URL of the file containing the compiled Java class.\n' +
'      */\n' +
'    code: string;\n' +
'    /**\n' +
'      * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.\n' +
'      */\n' +
'    archive: string;\n' +
'    /**\n' +
'      * Sets or retrieves a message to be displayed while an object is loading.\n' +
'      */\n' +
'    standby: string;\n' +
'    /**\n' +
'      * Sets or retrieves a text alternative to the graphic.\n' +
'      */\n' +
'    alt: string;\n' +
'    /**\n' +
'      * Sets or retrieves the class identifier for the object.\n' +
'      */\n' +
'    classid: string;\n' +
'    /**\n' +
'      * Sets or retrieves the name of the object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.\n' +
'      */\n' +
'    useMap: string;\n' +
'    /**\n' +
'      * Sets or retrieves the URL that references the data of the object.\n' +
'      */\n' +
'    data: string;\n' +
'    /**\n' +
'      * Sets or retrieves the height of the object.\n' +
'      */\n' +
'    height: string;\n' +
'    /**\n' +
'      * Retrieves the document object of the page or frame.\n' +
'      */\n' +
'    contentDocument: Document;\n' +
'    /**\n' +
'      * Gets or sets the optional alternative HTML script to execute if the object fails to load.\n' +
'      */\n' +
'    altHtml: string;\n' +
'    /**\n' +
'      * Sets or retrieves the URL of the component.\n' +
'      */\n' +
'    codeBase: string;\n' +
'    declare: boolean;\n' +
'    /**\n' +
'      * Sets or retrieves the MIME type of the object.\n' +
'      */\n' +
'    type: string;\n' +
'    /**\n' +
'      * Retrieves a string of the URL where the object tag can be found. This is often the href of the document that the object is in, or the value set by a base element.\n' +
'      */\n' +
'    BaseHref: string;\n' +
'}\n' +
'declare var HTMLObjectElement: {\n' +
'    prototype: HTMLObjectElement;\n' +
'    new (): HTMLObjectElement;\n' +
'}\n' +
'\n' +
'interface HTMLEmbedElement extends HTMLElement, GetSVGDocument {\n' +
'    /**\n' +
'      * Sets or retrieves the width of the object.\n' +
'      */\n' +
'    width: string;\n' +
'    /**\n' +
'      * Retrieves the palette used for the embedded document.\n' +
'      */\n' +
'    palette: string;\n' +
'    /**\n' +
'      * Sets or retrieves a URL to be loaded by the object.\n' +
'      */\n' +
'    src: string;\n' +
'    /**\n' +
'      * Sets or retrieves the name of the object.\n' +
'      */\n' +
'    name: string;\n' +
'    /**\n' +
'      * Retrieves the URL of the plug-in used to view an embedded document.\n' +
'      */\n' +
'    pluginspage: string;\n' +
'    /**\n' +
'      * Sets or retrieves the height of the object.\n' +
'      */\n' +
'    height: string;\n' +
'    /**\n' +
'      * Sets or retrieves the height and width units of the embed object.\n' +
'      */\n' +
'    units: string;\n' +
'}\n' +
'declare var HTMLEmbedElement: {\n' +
'    prototype: HTMLEmbedElement;\n' +
'    new (): HTMLEmbedElement;\n' +
'}\n' +
'\n' +
'interface StorageEvent extends Event {\n' +
'    oldValue: any;\n' +
'    newValue: any;\n' +
'    url: string;\n' +
'    storageArea: Storage;\n' +
'    key: string;\n' +
'    initStorageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, keyArg: string, oldValueArg: any, newValueArg: any, urlArg: string, storageAreaArg: Storage): void;\n' +
'}\n' +
'declare var StorageEvent: {\n' +
'    prototype: StorageEvent;\n' +
'    new (): StorageEvent;\n' +
'}\n' +
'\n' +
'interface CharacterData extends Node {\n' +
'    length: number;\n' +
'    data: string;\n' +
'    deleteData(offset: number, count: number): void;\n' +
'    replaceData(offset: number, count: number, arg: string): void;\n' +
'    appendData(arg: string): void;\n' +
'    insertData(offset: number, arg: string): void;\n' +
'    substringData(offset: number, count: number): string;\n' +
'}\n' +
'declare var CharacterData: {\n' +
'    prototype: CharacterData;\n' +
'    new (): CharacterData;\n' +
'}\n' +
'\n' +
'interface HTMLOptGroupElement extends HTMLElement, MSDataBindingExtensions {\n' +
'    /**\n' +
'      * Sets or retrieves the ordinal position of an option in a list box.\n' +
'      */\n' +
'    index: number;\n' +
'    /**\n' +
'      * Sets or retrieves the status of an option.\n' +
'      */\n' +
'    defaultSelected: boolean;\n' +
'    /**\n' +
'      * Sets or retrieves the text string specified by the option tag.\n' +
'      */\n' +
'    text: string;\n' +
'    /**\n' +
'      * Sets or retrieves the value which is returned to the server when the form control is submitted.\n' +
'      */\n' +
'    value: string;\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in.\n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'    /**\n' +
'      * Sets or retrieves a value that you can use to implement your own label functionality for the object.\n' +
'      */\n' +
'    label: string;\n' +
'    /**\n' +
'      * Sets or retrieves whether the option in the list box is the default item.\n' +
'      */\n' +
'    selected: boolean;\n' +
'}\n' +
'declare var HTMLOptGroupElement: {\n' +
'    prototype: HTMLOptGroupElement;\n' +
'    new (): HTMLOptGroupElement;\n' +
'}\n' +
'\n' +
'interface HTMLIsIndexElement extends HTMLElement {\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in. \n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'    /**\n' +
'      * Sets or retrieves the URL to which the form content is sent for processing.\n' +
'      */\n' +
'    action: string;\n' +
'    prompt: string;\n' +
'}\n' +
'declare var HTMLIsIndexElement: {\n' +
'    prototype: HTMLIsIndexElement;\n' +
'    new (): HTMLIsIndexElement;\n' +
'}\n' +
'\n' +
'interface SVGPathSegLinetoRel extends SVGPathSeg {\n' +
'    y: number;\n' +
'    x: number;\n' +
'}\n' +
'declare var SVGPathSegLinetoRel: {\n' +
'    prototype: SVGPathSegLinetoRel;\n' +
'    new (): SVGPathSegLinetoRel;\n' +
'}\n' +
'\n' +
'interface DOMException {\n' +
'    code: number;\n' +
'    message: string;\n' +
'    toString(): string;\n' +
'    HIERARCHY_REQUEST_ERR: number;\n' +
'    NO_MODIFICATION_ALLOWED_ERR: number;\n' +
'    INVALID_MODIFICATION_ERR: number;\n' +
'    NAMESPACE_ERR: number;\n' +
'    INVALID_CHARACTER_ERR: number;\n' +
'    TYPE_MISMATCH_ERR: number;\n' +
'    ABORT_ERR: number;\n' +
'    INVALID_STATE_ERR: number;\n' +
'    SECURITY_ERR: number;\n' +
'    NETWORK_ERR: number;\n' +
'    WRONG_DOCUMENT_ERR: number;\n' +
'    QUOTA_EXCEEDED_ERR: number;\n' +
'    INDEX_SIZE_ERR: number;\n' +
'    DOMSTRING_SIZE_ERR: number;\n' +
'    SYNTAX_ERR: number;\n' +
'    SERIALIZE_ERR: number;\n' +
'    VALIDATION_ERR: number;\n' +
'    NOT_FOUND_ERR: number;\n' +
'    URL_MISMATCH_ERR: number;\n' +
'    PARSE_ERR: number;\n' +
'    NO_DATA_ALLOWED_ERR: number;\n' +
'    NOT_SUPPORTED_ERR: number;\n' +
'    INVALID_ACCESS_ERR: number;\n' +
'    INUSE_ATTRIBUTE_ERR: number;\n' +
'}\n' +
'declare var DOMException: {\n' +
'    prototype: DOMException;\n' +
'    new (): DOMException;\n' +
'    HIERARCHY_REQUEST_ERR: number;\n' +
'    NO_MODIFICATION_ALLOWED_ERR: number;\n' +
'    INVALID_MODIFICATION_ERR: number;\n' +
'    NAMESPACE_ERR: number;\n' +
'    INVALID_CHARACTER_ERR: number;\n' +
'    TYPE_MISMATCH_ERR: number;\n' +
'    ABORT_ERR: number;\n' +
'    INVALID_STATE_ERR: number;\n' +
'    SECURITY_ERR: number;\n' +
'    NETWORK_ERR: number;\n' +
'    WRONG_DOCUMENT_ERR: number;\n' +
'    QUOTA_EXCEEDED_ERR: number;\n' +
'    INDEX_SIZE_ERR: number;\n' +
'    DOMSTRING_SIZE_ERR: number;\n' +
'    SYNTAX_ERR: number;\n' +
'    SERIALIZE_ERR: number;\n' +
'    VALIDATION_ERR: number;\n' +
'    NOT_FOUND_ERR: number;\n' +
'    URL_MISMATCH_ERR: number;\n' +
'    PARSE_ERR: number;\n' +
'    NO_DATA_ALLOWED_ERR: number;\n' +
'    NOT_SUPPORTED_ERR: number;\n' +
'    INVALID_ACCESS_ERR: number;\n' +
'    INUSE_ATTRIBUTE_ERR: number;\n' +
'}\n' +
'\n' +
'interface SVGAnimatedBoolean {\n' +
'    animVal: boolean;\n' +
'    baseVal: boolean;\n' +
'}\n' +
'declare var SVGAnimatedBoolean: {\n' +
'    prototype: SVGAnimatedBoolean;\n' +
'    new (): SVGAnimatedBoolean;\n' +
'}\n' +
'\n' +
'interface MSCompatibleInfoCollection {\n' +
'    length: number;\n' +
'    item(index: number): MSCompatibleInfo;\n' +
'}\n' +
'declare var MSCompatibleInfoCollection: {\n' +
'    prototype: MSCompatibleInfoCollection;\n' +
'    new (): MSCompatibleInfoCollection;\n' +
'}\n' +
'\n' +
'interface SVGSwitchElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {\n' +
'}\n' +
'declare var SVGSwitchElement: {\n' +
'    prototype: SVGSwitchElement;\n' +
'    new (): SVGSwitchElement;\n' +
'}\n' +
'\n' +
'interface SVGPreserveAspectRatio {\n' +
'    align: number;\n' +
'    meetOrSlice: number;\n' +
'    SVG_PRESERVEASPECTRATIO_NONE: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMINYMID: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMINYMAX: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;\n' +
'    SVG_MEETORSLICE_UNKNOWN: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMAXYMID: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMINYMIN: number;\n' +
'    SVG_MEETORSLICE_MEET: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMIDYMID: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;\n' +
'    SVG_MEETORSLICE_SLICE: number;\n' +
'    SVG_PRESERVEASPECTRATIO_UNKNOWN: number;\n' +
'}\n' +
'declare var SVGPreserveAspectRatio: {\n' +
'    prototype: SVGPreserveAspectRatio;\n' +
'    new (): SVGPreserveAspectRatio;\n' +
'    SVG_PRESERVEASPECTRATIO_NONE: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMINYMID: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMINYMAX: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;\n' +
'    SVG_MEETORSLICE_UNKNOWN: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMAXYMID: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMINYMIN: number;\n' +
'    SVG_MEETORSLICE_MEET: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMIDYMID: number;\n' +
'    SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;\n' +
'    SVG_MEETORSLICE_SLICE: number;\n' +
'    SVG_PRESERVEASPECTRATIO_UNKNOWN: number;\n' +
'}\n' +
'\n' +
'interface Attr extends Node {\n' +
'    expando: boolean;\n' +
'    specified: boolean;\n' +
'    ownerElement: Element;\n' +
'    value: string;\n' +
'    name: string;\n' +
'}\n' +
'declare var Attr: {\n' +
'    prototype: Attr;\n' +
'    new (): Attr;\n' +
'}\n' +
'\n' +
'interface PerformanceNavigation {\n' +
'    redirectCount: number;\n' +
'    type: number;\n' +
'    toJSON(): any;\n' +
'    TYPE_RELOAD: number;\n' +
'    TYPE_RESERVED: number;\n' +
'    TYPE_BACK_FORWARD: number;\n' +
'    TYPE_NAVIGATE: number;\n' +
'}\n' +
'declare var PerformanceNavigation: {\n' +
'    prototype: PerformanceNavigation;\n' +
'    new (): PerformanceNavigation;\n' +
'    TYPE_RELOAD: number;\n' +
'    TYPE_RESERVED: number;\n' +
'    TYPE_BACK_FORWARD: number;\n' +
'    TYPE_NAVIGATE: number;\n' +
'}\n' +
'\n' +
'interface SVGStopElement extends SVGElement, SVGStylable {\n' +
'    offset: SVGAnimatedNumber;\n' +
'}\n' +
'declare var SVGStopElement: {\n' +
'    prototype: SVGStopElement;\n' +
'    new (): SVGStopElement;\n' +
'}\n' +
'\n' +
'interface PositionCallback {\n' +
'    (position: Position): void;\n' +
'}\n' +
'\n' +
'interface SVGSymbolElement extends SVGElement, SVGStylable, SVGLangSpace, SVGFitToViewBox, SVGExternalResourcesRequired {\n' +
'}\n' +
'declare var SVGSymbolElement: {\n' +
'    prototype: SVGSymbolElement;\n' +
'    new (): SVGSymbolElement;\n' +
'}\n' +
'\n' +
'interface SVGElementInstanceList {\n' +
'    length: number;\n' +
'    item(index: number): SVGElementInstance;\n' +
'}\n' +
'declare var SVGElementInstanceList: {\n' +
'    prototype: SVGElementInstanceList;\n' +
'    new (): SVGElementInstanceList;\n' +
'}\n' +
'\n' +
'interface CSSRuleList {\n' +
'    length: number;\n' +
'    item(index: number): CSSRule;\n' +
'    [index: number]: CSSRule;\n' +
'}\n' +
'declare var CSSRuleList: {\n' +
'    prototype: CSSRuleList;\n' +
'    new (): CSSRuleList;\n' +
'}\n' +
'\n' +
'interface MSDataBindingRecordSetExtensions {\n' +
'    recordset: Object;\n' +
'    namedRecordset(dataMember: string, hierarchy?: any): Object;\n' +
'}\n' +
'\n' +
'interface LinkStyle {\n' +
'    styleSheet: StyleSheet;\n' +
'    sheet: StyleSheet;\n' +
'}\n' +
'\n' +
'interface HTMLVideoElement extends HTMLMediaElement {\n' +
'    /**\n' +
'      * Gets or sets the width of the video element.\n' +
'      */\n' +
'    width: number;\n' +
'    /**\n' +
'      * Gets the intrinsic width of a video in CSS pixels, or zero if the dimensions are not known.\n' +
'      */\n' +
'    videoWidth: number;\n' +
'    /**\n' +
'      * Gets the intrinsic height of a video in CSS pixels, or zero if the dimensions are not known.\n' +
'      */\n' +
'    videoHeight: number;\n' +
'    /**\n' +
'      * Gets or sets the height of the video element.\n' +
'      */\n' +
'    height: number;\n' +
'    /**\n' +
'      * Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.\n' +
'      */\n' +
'    poster: string;\n' +
'}\n' +
'declare var HTMLVideoElement: {\n' +
'    prototype: HTMLVideoElement;\n' +
'    new (): HTMLVideoElement;\n' +
'}\n' +
'\n' +
'interface ClientRectList {\n' +
'    length: number;\n' +
'    item(index: number): ClientRect;\n' +
'    [index: number]: ClientRect;\n' +
'}\n' +
'declare var ClientRectList: {\n' +
'    prototype: ClientRectList;\n' +
'    new (): ClientRectList;\n' +
'}\n' +
'\n' +
'interface SVGMaskElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {\n' +
'    y: SVGAnimatedLength;\n' +
'    width: SVGAnimatedLength;\n' +
'    maskUnits: SVGAnimatedEnumeration;\n' +
'    maskContentUnits: SVGAnimatedEnumeration;\n' +
'    x: SVGAnimatedLength;\n' +
'    height: SVGAnimatedLength;\n' +
'}\n' +
'declare var SVGMaskElement: {\n' +
'    prototype: SVGMaskElement;\n' +
'    new (): SVGMaskElement;\n' +
'}\n' +
'\n' +
'interface External {\n' +
'}\n' +
'declare var External: {\n' +
'    prototype: External;\n' +
'    new (): External;\n' +
'}\n' +
'\n' +
'declare var Audio: { new (src?: string): HTMLAudioElement; };\n' +
'declare var Option: { new (text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement; };\n' +
'declare var Image: { new (width?: number, height?: number): HTMLImageElement; };\n' +
'\n' +
'declare var ondragend: (ev: DragEvent) => any;\n' +
'declare var onkeydown: (ev: KeyboardEvent) => any;\n' +
'declare var ondragover: (ev: DragEvent) => any;\n' +
'declare var onkeyup: (ev: KeyboardEvent) => any;\n' +
'declare var onreset: (ev: Event) => any;\n' +
'declare var onmouseup: (ev: MouseEvent) => any;\n' +
'declare var ondragstart: (ev: DragEvent) => any;\n' +
'declare var ondrag: (ev: DragEvent) => any;\n' +
'declare var screenX: number;\n' +
'declare var onmouseover: (ev: MouseEvent) => any;\n' +
'declare var ondragleave: (ev: DragEvent) => any;\n' +
'declare var history: History;\n' +
'declare var pageXOffset: number;\n' +
'declare var name: string;\n' +
'declare var onafterprint: (ev: Event) => any;\n' +
'declare var onpause: (ev: Event) => any;\n' +
'declare var onbeforeprint: (ev: Event) => any;\n' +
'declare var top: Window;\n' +
'declare var onmousedown: (ev: MouseEvent) => any;\n' +
'declare var onseeked: (ev: Event) => any;\n' +
'declare var opener: Window;\n' +
'declare var onclick: (ev: MouseEvent) => any;\n' +
'declare var innerHeight: number;\n' +
'declare var onwaiting: (ev: Event) => any;\n' +
'declare var ononline: (ev: Event) => any;\n' +
'declare var ondurationchange: (ev: Event) => any;\n' +
'declare var frames: Window;\n' +
'declare var onblur: (ev: FocusEvent) => any;\n' +
'declare var onemptied: (ev: Event) => any;\n' +
'declare var onseeking: (ev: Event) => any;\n' +
'declare var oncanplay: (ev: Event) => any;\n' +
'declare var outerWidth: number;\n' +
'declare var onstalled: (ev: Event) => any;\n' +
'declare var onmousemove: (ev: MouseEvent) => any;\n' +
'declare var innerWidth: number;\n' +
'declare var onoffline: (ev: Event) => any;\n' +
'declare var length: number;\n' +
'declare var screen: Screen;\n' +
'declare var onbeforeunload: (ev: BeforeUnloadEvent) => any;\n' +
'declare var onratechange: (ev: Event) => any;\n' +
'declare var onstorage: (ev: StorageEvent) => any;\n' +
'declare var onloadstart: (ev: Event) => any;\n' +
'declare var ondragenter: (ev: DragEvent) => any;\n' +
'declare var onsubmit: (ev: Event) => any;\n' +
'declare var self: Window;\n' +
'declare var document: Document;\n' +
'declare var onprogress: (ev: any) => any;\n' +
'declare var ondblclick: (ev: MouseEvent) => any;\n' +
'declare var pageYOffset: number;\n' +
'declare var oncontextmenu: (ev: MouseEvent) => any;\n' +
'declare var onchange: (ev: Event) => any;\n' +
'declare var onloadedmetadata: (ev: Event) => any;\n' +
'declare var onplay: (ev: Event) => any;\n' +
'declare var onerror: ErrorEventHandler;\n' +
'declare var onplaying: (ev: Event) => any;\n' +
'declare var parent: Window;\n' +
'declare var location: Location;\n' +
'declare var oncanplaythrough: (ev: Event) => any;\n' +
'declare var onabort: (ev: UIEvent) => any;\n' +
'declare var onreadystatechange: (ev: Event) => any;\n' +
'declare var outerHeight: number;\n' +
'declare var onkeypress: (ev: KeyboardEvent) => any;\n' +
'declare var frameElement: Element;\n' +
'declare var onloadeddata: (ev: Event) => any;\n' +
'declare var onsuspend: (ev: Event) => any;\n' +
'declare var window: Window;\n' +
'declare var onfocus: (ev: FocusEvent) => any;\n' +
'declare var onmessage: (ev: MessageEvent) => any;\n' +
'declare var ontimeupdate: (ev: Event) => any;\n' +
'declare var onresize: (ev: UIEvent) => any;\n' +
'declare var onselect: (ev: UIEvent) => any;\n' +
'declare var navigator: Navigator;\n' +
'declare var styleMedia: StyleMedia;\n' +
'declare var ondrop: (ev: DragEvent) => any;\n' +
'declare var onmouseout: (ev: MouseEvent) => any;\n' +
'declare var onended: (ev: Event) => any;\n' +
'declare var onhashchange: (ev: Event) => any;\n' +
'declare var onunload: (ev: Event) => any;\n' +
'declare var onscroll: (ev: UIEvent) => any;\n' +
'declare var screenY: number;\n' +
'declare var onmousewheel: (ev: MouseWheelEvent) => any;\n' +
'declare var onload: (ev: Event) => any;\n' +
'declare var onvolumechange: (ev: Event) => any;\n' +
'declare var oninput: (ev: Event) => any;\n' +
'declare var performance: Performance;\n' +
'declare function alert(message?: any): void;\n' +
'declare function scroll(x?: number, y?: number): void;\n' +
'declare function focus(): void;\n' +
'declare function scrollTo(x?: number, y?: number): void;\n' +
'declare function print(): void;\n' +
'declare function prompt(message?: string, defaul?: string): string;\n' +
'declare function toString(): string;\n' +
'declare function open(url?: string, target?: string, features?: string, replace?: boolean): Window;\n' +
'declare function scrollBy(x?: number, y?: number): void;\n' +
'declare function confirm(message?: string): boolean;\n' +
'declare function close(): void;\n' +
'declare function postMessage(message: any, targetOrigin: string, ports?: any): void;\n' +
'declare function showModalDialog(url?: string, argument?: any, options?: any): any;\n' +
'declare function blur(): void;\n' +
'declare function getSelection(): Selection;\n' +
'declare function getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;\n' +
'declare function removeEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'declare function dispatchEvent(evt: Event): boolean;\n' +
'declare function attachEvent(event: string, listener: EventListener): boolean;\n' +
'declare function detachEvent(event: string, listener: EventListener): void;\n' +
'declare var localStorage: Storage;\n' +
'declare var status: string;\n' +
'declare var onmouseleave: (ev: MouseEvent) => any;\n' +
'declare var screenLeft: number;\n' +
'declare var offscreenBuffering: any;\n' +
'declare var maxConnectionsPerServer: number;\n' +
'declare var onmouseenter: (ev: MouseEvent) => any;\n' +
'declare var clipboardData: DataTransfer;\n' +
'declare var defaultStatus: string;\n' +
'declare var clientInformation: Navigator;\n' +
'declare var closed: boolean;\n' +
'declare var onhelp: (ev: Event) => any;\n' +
'declare var external: External;\n' +
'declare var event: MSEventObj;\n' +
'declare var onfocusout: (ev: FocusEvent) => any;\n' +
'declare var screenTop: number;\n' +
'declare var onfocusin: (ev: FocusEvent) => any;\n' +
'declare function showModelessDialog(url?: string, argument?: any, options?: any): Window;\n' +
'declare function navigate(url: string): void;\n' +
'declare function resizeBy(x?: number, y?: number): void;\n' +
'declare function item(index: any): any;\n' +
'declare function resizeTo(x?: number, y?: number): void;\n' +
'declare function createPopup(arguments?: any): MSPopupWindow;\n' +
'declare function toStaticHTML(html: string): string;\n' +
'declare function execScript(code: string, language?: string): any;\n' +
'declare function msWriteProfilerMark(profilerMarkName: string): void;\n' +
'declare function moveTo(x?: number, y?: number): void;\n' +
'declare function moveBy(x?: number, y?: number): void;\n' +
'declare function showHelp(url: string, helpArg?: any, features?: string): void;\n' +
'declare var sessionStorage: Storage;\n' +
'declare function clearTimeout(handle: number): void;\n' +
'declare function setTimeout(handler: any, timeout?: any, ...args: any[]): number;\n' +
'declare function clearInterval(handle: number): void;\n' +
'declare function setInterval(handler: any, timeout?: any, ...args: any[]): number;\n' +
'\n' +
'\n' +
'/////////////////////////////\n' +
'/// IE10 DOM APIs \n' +
'/////////////////////////////\n' +
'\n' +
'\n' +
'interface ObjectURLOptions {\n' +
'    oneTimeOnly?: boolean;\n' +
'}\n' +
'\n' +
'interface HTMLBodyElement {\n' +
'    onpopstate: (ev: PopStateEvent) => any;\n' +
'}\n' +
'\n' +
'interface MSGestureEvent extends UIEvent {\n' +
'    offsetY: number;\n' +
'    translationY: number;\n' +
'    velocityExpansion: number;\n' +
'    velocityY: number;\n' +
'    velocityAngular: number;\n' +
'    translationX: number;\n' +
'    velocityX: number;\n' +
'    hwTimestamp: number;\n' +
'    offsetX: number;\n' +
'    screenX: number;\n' +
'    rotation: number;\n' +
'    expansion: number;\n' +
'    clientY: number;\n' +
'    screenY: number;\n' +
'    scale: number;\n' +
'    gestureObject: any;\n' +
'    clientX: number;\n' +
'    initGestureEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, offsetXArg: number, offsetYArg: number, translationXArg: number, translationYArg: number, scaleArg: number, expansionArg: number, rotationArg: number, velocityXArg: number, velocityYArg: number, velocityExpansionArg: number, velocityAngularArg: number, hwTimestampArg: number): void;\n' +
'    MSGESTURE_FLAG_BEGIN: number;\n' +
'    MSGESTURE_FLAG_END: number;\n' +
'    MSGESTURE_FLAG_CANCEL: number;\n' +
'    MSGESTURE_FLAG_INERTIA: number;\n' +
'    MSGESTURE_FLAG_NONE: number;\n' +
'}\n' +
'declare var MSGestureEvent: {\n' +
'    MSGESTURE_FLAG_BEGIN: number;\n' +
'    MSGESTURE_FLAG_END: number;\n' +
'    MSGESTURE_FLAG_CANCEL: number;\n' +
'    MSGESTURE_FLAG_INERTIA: number;\n' +
'    MSGESTURE_FLAG_NONE: number;\n' +
'}\n' +
'\n' +
'interface HTMLAnchorElement {\n' +
'    /**\n' +
'      * Retrieves or sets the text of the object as a string. \n' +
'      */\n' +
'    text: string;\n' +
'}\n' +
'\n' +
'interface HTMLInputElement {\n' +
'    /**\n' +
'      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.\n' +
'      */\n' +
'    validationMessage: string;\n' +
'    /**\n' +
'      * Returns a FileList object on a file type input object.\n' +
'      */\n' +
'    files: FileList;\n' +
'    /**\n' +
'      * Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field.\n' +
'      */\n' +
'    max: string;\n' +
'    /**\n' +
'      * Overrides the target attribute on a form element.\n' +
'      */\n' +
'    formTarget: string;\n' +
'    /**\n' +
'      * Returns whether an element will successfully validate based on forms validation rules and constraints.\n' +
'      */\n' +
'    willValidate: boolean;\n' +
'    /**\n' +
'      * Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field.\n' +
'      */\n' +
'    step: string;\n' +
'    /**\n' +
'      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.\n' +
'      */\n' +
'    autofocus: boolean;\n' +
'    /**\n' +
'      * When present, marks an element that can\'t be submitted without a value.\n' +
'      */\n' +
'    required: boolean;\n' +
'    /**\n' +
'      * Used to override the encoding (formEnctype attribute) specified on the form element.\n' +
'      */\n' +
'    formEnctype: string;\n' +
'    /**\n' +
'      * Returns the input field value as a number.\n' +
'      */\n' +
'    valueAsNumber: number;\n' +
'    /**\n' +
'      * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.\n' +
'      */\n' +
'    placeholder: string;\n' +
'    /**\n' +
'      * Overrides the submit method attribute previously specified on a form element.\n' +
'      */\n' +
'    formMethod: string;\n' +
'    /**\n' +
'      * Specifies the ID of a pre-defined datalist of options for an input element.\n' +
'      */\n' +
'    list: HTMLElement;\n' +
'    /**\n' +
'      * Specifies whether autocomplete is applied to an editable text field.\n' +
'      */\n' +
'    autocomplete: string;\n' +
'    /**\n' +
'      * Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field.\n' +
'      */\n' +
'    min: string;\n' +
'    /**\n' +
'      * Overrides the action attribute (where the data on a form is sent) on the parent form element.\n' +
'      */\n' +
'    formAction: string;\n' +
'    /**\n' +
'      * Gets or sets a string containing a regular expression that the user\'s input must match.\n' +
'      */\n' +
'    pattern: string;\n' +
'    /**\n' +
'      * Returns a  ValidityState object that represents the validity states of an element.\n' +
'      */\n' +
'    validity: ValidityState;\n' +
'    /**\n' +
'      * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.\n' +
'      */\n' +
'    formNoValidate: string;\n' +
'    /**\n' +
'      * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.\n' +
'      */\n' +
'    multiple: boolean;\n' +
'    /**\n' +
'      * Returns whether a form will validate when it is submitted, without having to submit it.\n' +
'      */\n' +
'    checkValidity(): boolean;\n' +
'    /**\n' +
'      * Decrements a range input control\'s value by the value given by the Step attribute. If the optional parameter is used, it will decrement the input control\'s step value multiplied by the parameter\'s value.\n' +
'      * @param n Value to decrement the value by.\n' +
'      */\n' +
'    stepDown(n?: number): void;\n' +
'    /**\n' +
'      * Increments a range input control\'s value by the value given by the Step attribute. If the optional parameter is used, will increment the input control\'s value by that value.\n' +
'      * @param n Value to increment the value by.\n' +
'      */\n' +
'    stepUp(n?: number): void;\n' +
'    /**\n' +
'      * Sets a custom error message that is displayed when a form is submitted.\n' +
'      * @param error Sets a custom error message that is displayed when a form is submitted.\n' +
'      */\n' +
'    setCustomValidity(error: string): void;\n' +
'}\n' +
'\n' +
'interface ErrorEvent extends Event {\n' +
'    colno: number;\n' +
'    filename: string;\n' +
'    error: any;\n' +
'    lineno: number;\n' +
'    message: string;\n' +
'    initErrorEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, messageArg: string, filenameArg: string, linenoArg: number): void;\n' +
'}\n' +
'\n' +
'interface SVGFilterElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGURIReference, SVGExternalResourcesRequired {\n' +
'    y: SVGAnimatedLength;\n' +
'    width: SVGAnimatedLength;\n' +
'    filterResX: SVGAnimatedInteger;\n' +
'    filterUnits: SVGAnimatedEnumeration;\n' +
'    primitiveUnits: SVGAnimatedEnumeration;\n' +
'    x: SVGAnimatedLength;\n' +
'    height: SVGAnimatedLength;\n' +
'    filterResY: SVGAnimatedInteger;\n' +
'    setFilterRes(filterResX: number, filterResY: number): void;\n' +
'}\n' +
'\n' +
'interface TrackEvent extends Event {\n' +
'    track: any;\n' +
'}\n' +
'\n' +
'interface SVGFEMergeNodeElement extends SVGElement {\n' +
'    in1: SVGAnimatedString;\n' +
'}\n' +
'\n' +
'interface SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'}\n' +
'\n' +
'interface MSGesture {\n' +
'    target: Element;\n' +
'    addPointer(pointerId: number): void;\n' +
'    stop(): void;\n' +
'}\n' +
'declare var MSGesture: {\n' +
'    prototype: MSGesture;\n' +
'    new (): MSGesture;\n' +
'}\n' +
'\n' +
'interface TextTrackCue extends EventTarget {\n' +
'    onenter: (ev: Event) => any;\n' +
'    track: TextTrack;\n' +
'    endTime: number;\n' +
'    text: string;\n' +
'    pauseOnExit: boolean;\n' +
'    id: string;\n' +
'    startTime: number;\n' +
'    onexit: (ev: Event) => any;\n' +
'    getCueAsHTML(): DocumentFragment;\n' +
'}\n' +
'declare var TextTrackCue: {\n' +
'    prototype: TextTrackCue;\n' +
'    new (): TextTrackCue;\n' +
'}\n' +
'\n' +
'interface MSStreamReader extends MSBaseReader {\n' +
'    error: DOMError;\n' +
'    readAsArrayBuffer(stream: MSStream, size?: number): void;\n' +
'    readAsBlob(stream: MSStream, size?: number): void;\n' +
'    readAsDataURL(stream: MSStream, size?: number): void;\n' +
'    readAsText(stream: MSStream, encoding?: string, size?: number): void;\n' +
'}\n' +
'declare var MSStreamReader: {\n' +
'    prototype: MSStreamReader;\n' +
'    new (): MSStreamReader;\n' +
'}\n' +
'\n' +
'interface DOMTokenList {\n' +
'    length: number;\n' +
'    contains(token: string): boolean;\n' +
'    remove(token: string): void;\n' +
'    toggle(token: string): boolean;\n' +
'    add(token: string): void;\n' +
'    item(index: number): string;\n' +
'    [index: number]: string;\n' +
'    toString(): string;\n' +
'}\n' +
'\n' +
'interface EventException {\n' +
'    name: string;\n' +
'}\n' +
'\n' +
'interface Performance {\n' +
'    now(): number;\n' +
'}\n' +
'\n' +
'interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {\n' +
'}\n' +
'\n' +
'interface SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    in1: SVGAnimatedString;\n' +
'}\n' +
'\n' +
'interface SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    in2: SVGAnimatedString;\n' +
'    mode: SVGAnimatedEnumeration;\n' +
'    in1: SVGAnimatedString;\n' +
'    SVG_FEBLEND_MODE_DARKEN: number;\n' +
'    SVG_FEBLEND_MODE_UNKNOWN: number;\n' +
'    SVG_FEBLEND_MODE_MULTIPLY: number;\n' +
'    SVG_FEBLEND_MODE_NORMAL: number;\n' +
'    SVG_FEBLEND_MODE_SCREEN: number;\n' +
'    SVG_FEBLEND_MODE_LIGHTEN: number;\n' +
'}\n' +
'declare var SVGFEBlendElement: {\n' +
'    SVG_FEBLEND_MODE_DARKEN: number;\n' +
'    SVG_FEBLEND_MODE_UNKNOWN: number;\n' +
'    SVG_FEBLEND_MODE_MULTIPLY: number;\n' +
'    SVG_FEBLEND_MODE_NORMAL: number;\n' +
'    SVG_FEBLEND_MODE_SCREEN: number;\n' +
'    SVG_FEBLEND_MODE_LIGHTEN: number;\n' +
'}\n' +
'\n' +
'interface WindowTimers extends WindowTimersExtension {\n' +
'}\n' +
'\n' +
'interface CSSStyleDeclaration {\n' +
'    animationFillMode: string;\n' +
'    floodColor: string;\n' +
'    animationIterationCount: string;\n' +
'    textShadow: string;\n' +
'    backfaceVisibility: string;\n' +
'    msAnimationIterationCount: string;\n' +
'    animationDelay: string;\n' +
'    animationTimingFunction: string;\n' +
'    columnWidth: any;\n' +
'    msScrollSnapX: string;\n' +
'    columnRuleColor: any;\n' +
'    columnRuleWidth: any;\n' +
'    transitionDelay: string;\n' +
'    transition: string;\n' +
'    msFlowFrom: string;\n' +
'    msScrollSnapType: string;\n' +
'    msContentZoomSnapType: string;\n' +
'    msGridColumns: string;\n' +
'    msAnimationName: string;\n' +
'    msGridRowAlign: string;\n' +
'    msContentZoomChaining: string;\n' +
'    msGridColumn: any;\n' +
'    msHyphenateLimitZone: any;\n' +
'    msScrollRails: string;\n' +
'    msAnimationDelay: string;\n' +
'    enableBackground: string;\n' +
'    msWrapThrough: string;\n' +
'    columnRuleStyle: string;\n' +
'    msAnimation: string;\n' +
'    msFlexFlow: string;\n' +
'    msScrollSnapY: string;\n' +
'    msHyphenateLimitLines: any;\n' +
'    msTouchAction: string;\n' +
'    msScrollLimit: string;\n' +
'    animation: string;\n' +
'    transform: string;\n' +
'    filter: string;\n' +
'    colorInterpolationFilters: string;\n' +
'    transitionTimingFunction: string;\n' +
'    msBackfaceVisibility: string;\n' +
'    animationPlayState: string;\n' +
'    transformOrigin: string;\n' +
'    msScrollLimitYMin: any;\n' +
'    msFontFeatureSettings: string;\n' +
'    msContentZoomLimitMin: any;\n' +
'    columnGap: any;\n' +
'    transitionProperty: string;\n' +
'    msAnimationDuration: string;\n' +
'    msAnimationFillMode: string;\n' +
'    msFlexDirection: string;\n' +
'    msTransitionDuration: string;\n' +
'    fontFeatureSettings: string;\n' +
'    breakBefore: string;\n' +
'    msFlexWrap: string;\n' +
'    perspective: string;\n' +
'    msFlowInto: string;\n' +
'    msTransformStyle: string;\n' +
'    msScrollTranslation: string;\n' +
'    msTransitionProperty: string;\n' +
'    msUserSelect: string;\n' +
'    msOverflowStyle: string;\n' +
'    msScrollSnapPointsY: string;\n' +
'    animationDirection: string;\n' +
'    animationDuration: string;\n' +
'    msFlex: string;\n' +
'    msTransitionTimingFunction: string;\n' +
'    animationName: string;\n' +
'    columnRule: string;\n' +
'    msGridColumnSpan: any;\n' +
'    msFlexNegative: string;\n' +
'    columnFill: string;\n' +
'    msGridRow: any;\n' +
'    msFlexOrder: string;\n' +
'    msFlexItemAlign: string;\n' +
'    msFlexPositive: string;\n' +
'    msContentZoomLimitMax: any;\n' +
'    msScrollLimitYMax: any;\n' +
'    msGridColumnAlign: string;\n' +
'    perspectiveOrigin: string;\n' +
'    lightingColor: string;\n' +
'    columns: string;\n' +
'    msScrollChaining: string;\n' +
'    msHyphenateLimitChars: string;\n' +
'    msTouchSelect: string;\n' +
'    floodOpacity: string;\n' +
'    msAnimationDirection: string;\n' +
'    msAnimationPlayState: string;\n' +
'    columnSpan: string;\n' +
'    msContentZooming: string;\n' +
'    msPerspective: string;\n' +
'    msFlexPack: string;\n' +
'    msScrollSnapPointsX: string;\n' +
'    msContentZoomSnapPoints: string;\n' +
'    msGridRowSpan: any;\n' +
'    msContentZoomSnap: string;\n' +
'    msScrollLimitXMin: any;\n' +
'    breakInside: string;\n' +
'    msHighContrastAdjust: string;\n' +
'    msFlexLinePack: string;\n' +
'    msGridRows: string;\n' +
'    transitionDuration: string;\n' +
'    msHyphens: string;\n' +
'    breakAfter: string;\n' +
'    msTransition: string;\n' +
'    msPerspectiveOrigin: string;\n' +
'    msContentZoomLimit: string;\n' +
'    msScrollLimitXMax: any;\n' +
'    msFlexAlign: string;\n' +
'    msWrapMargin: any;\n' +
'    columnCount: any;\n' +
'    msAnimationTimingFunction: string;\n' +
'    msTransitionDelay: string;\n' +
'    transformStyle: string;\n' +
'    msWrapFlow: string;\n' +
'    msFlexPreferredSize: string;\n' +
'}\n' +
'\n' +
'interface MessageChannel {\n' +
'    port2: MessagePort;\n' +
'    port1: MessagePort;\n' +
'}\n' +
'declare var MessageChannel: {\n' +
'    prototype: MessageChannel;\n' +
'    new (): MessageChannel;\n' +
'}\n' +
'\n' +
'interface SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'}\n' +
'\n' +
'interface Navigator extends MSFileSaver {\n' +
'    msMaxTouchPoints: number;\n' +
'    msPointerEnabled: boolean;\n' +
'    msManipulationViewsEnabled: boolean;\n' +
'    msLaunchUri(uri: string, successCallback?: MSLaunchUriCallback, noHandlerCallback?: MSLaunchUriCallback): void;\n' +
'}\n' +
'\n' +
'interface TransitionEvent extends Event {\n' +
'    propertyName: string;\n' +
'    elapsedTime: number;\n' +
'    initTransitionEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, propertyNameArg: string, elapsedTimeArg: number): void;\n' +
'}\n' +
'\n' +
'interface MediaQueryList {\n' +
'    matches: boolean;\n' +
'    media: string;\n' +
'    addListener(listener: MediaQueryListListener): void;\n' +
'    removeListener(listener: MediaQueryListListener): void;\n' +
'}\n' +
'\n' +
'interface DOMError {\n' +
'    name: string;\n' +
'    toString(): string;\n' +
'}\n' +
'\n' +
'interface CloseEvent extends Event {\n' +
'    wasClean: boolean;\n' +
'    reason: string;\n' +
'    code: number;\n' +
'    initCloseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, wasCleanArg: boolean, codeArg: number, reasonArg: string): void;\n' +
'}\n' +
'\n' +
'interface WebSocket extends EventTarget {\n' +
'    protocol: string;\n' +
'    readyState: number;\n' +
'    bufferedAmount: number;\n' +
'    onopen: (ev: Event) => any;\n' +
'    extensions: string;\n' +
'    onmessage: (ev: any) => any;\n' +
'    onclose: (ev: CloseEvent) => any;\n' +
'    onerror: (ev: ErrorEvent) => any;\n' +
'    binaryType: string;\n' +
'    url: string;\n' +
'    close(code?: number, reason?: string): void;\n' +
'    send(data: any): void;\n' +
'    OPEN: number;\n' +
'    CLOSING: number;\n' +
'    CONNECTING: number;\n' +
'    CLOSED: number;\n' +
'}\n' +
'declare var WebSocket: {\n' +
'    prototype: WebSocket;\n' +
'    new (url: string): WebSocket;\n' +
'    new (url: string, prototcol: string): WebSocket;\n' +
'    new (url: string, prototcol: string[]): WebSocket;\n' +
'    OPEN: number;\n' +
'    CLOSING: number;\n' +
'    CONNECTING: number;\n' +
'    CLOSED: number;\n' +
'}\n' +
'\n' +
'interface SVGFEPointLightElement extends SVGElement {\n' +
'    y: SVGAnimatedNumber;\n' +
'    x: SVGAnimatedNumber;\n' +
'    z: SVGAnimatedNumber;\n' +
'}\n' +
'\n' +
'interface ProgressEvent extends Event {\n' +
'    loaded: number;\n' +
'    lengthComputable: boolean;\n' +
'    total: number;\n' +
'    initProgressEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, lengthComputableArg: boolean, loadedArg: number, totalArg: number): void;\n' +
'}\n' +
'\n' +
'interface IDBObjectStore {\n' +
'    indexNames: DOMStringList;\n' +
'    name: string;\n' +
'    transaction: IDBTransaction;\n' +
'    keyPath: string;\n' +
'    count(key?: any): IDBRequest;\n' +
'    add(value: any, key?: any): IDBRequest;\n' +
'    clear(): IDBRequest;\n' +
'    createIndex(name: string, keyPath: string, optionalParameters?: any): IDBIndex;\n' +
'    put(value: any, key?: any): IDBRequest;\n' +
'    openCursor(range?: any, direction?: string): IDBRequest;\n' +
'    deleteIndex(indexName: string): void;\n' +
'    index(name: string): IDBIndex;\n' +
'    get(key: any): IDBRequest;\n' +
'    delete(key: any): IDBRequest;\n' +
'}\n' +
'\n' +
'interface HTMLCanvasElement {\n' +
'    /**\n' +
'      * Returns a blob object encoded as a Portable Network Graphics (PNG) format from a canvas image or drawing.\n' +
'      */\n' +
'    msToBlob(): Blob;\n' +
'}\n' +
'\n' +
'interface SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    stdDeviationX: SVGAnimatedNumber;\n' +
'    in1: SVGAnimatedString;\n' +
'    stdDeviationY: SVGAnimatedNumber;\n' +
'    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;\n' +
'}\n' +
'\n' +
'interface SVGFilterPrimitiveStandardAttributes extends SVGStylable {\n' +
'    y: SVGAnimatedLength;\n' +
'    width: SVGAnimatedLength;\n' +
'    x: SVGAnimatedLength;\n' +
'    height: SVGAnimatedLength;\n' +
'    result: SVGAnimatedString;\n' +
'}\n' +
'\n' +
'interface Element {\n' +
'    msRegionOverflow: string;\n' +
'    onmspointerdown: (ev: any) => any;\n' +
'    onmsgotpointercapture: (ev: any) => any;\n' +
'    onmsgesturedoubletap: (ev: any) => any;\n' +
'    onmspointerhover: (ev: any) => any;\n' +
'    onmsgesturehold: (ev: any) => any;\n' +
'    onmspointermove: (ev: any) => any;\n' +
'    onmsgesturechange: (ev: any) => any;\n' +
'    onmsgesturestart: (ev: any) => any;\n' +
'    onmspointercancel: (ev: any) => any;\n' +
'    onmsgestureend: (ev: any) => any;\n' +
'    onmsgesturetap: (ev: any) => any;\n' +
'    onmspointerout: (ev: any) => any;\n' +
'    onmsinertiastart: (ev: any) => any;\n' +
'    onmslostpointercapture: (ev: any) => any;\n' +
'    onmspointerover: (ev: any) => any;\n' +
'    msContentZoomFactor: number;\n' +
'    onmspointerup: (ev: any) => any;\n' +
'    msGetRegionContent(): MSRangeCollection;\n' +
'    msReleasePointerCapture(pointerId: number): void;\n' +
'    msSetPointerCapture(pointerId: number): void;\n' +
'}\n' +
'\n' +
'interface IDBVersionChangeEvent extends Event {\n' +
'    newVersion: number;\n' +
'    oldVersion: number;\n' +
'}\n' +
'\n' +
'interface IDBIndex {\n' +
'    unique: boolean;\n' +
'    name: string;\n' +
'    keyPath: string;\n' +
'    objectStore: IDBObjectStore;\n' +
'    count(key?: any): IDBRequest;\n' +
'    getKey(key: any): IDBRequest;\n' +
'    openKeyCursor(range?: IDBKeyRange, direction?: string): IDBRequest;\n' +
'    get(key: any): IDBRequest;\n' +
'    openCursor(range?: IDBKeyRange, direction?: string): IDBRequest;\n' +
'}\n' +
'\n' +
'interface WheelEvent {\n' +
'    getCurrentPoint(element: Element): void;\n' +
'}\n' +
'\n' +
'interface FileList {\n' +
'    length: number;\n' +
'    item(index: number): File;\n' +
'    [index: number]: File;\n' +
'}\n' +
'\n' +
'interface IDBCursor {\n' +
'    source: any;\n' +
'    direction: string;\n' +
'    key: any;\n' +
'    primaryKey: any;\n' +
'    advance(count: number): void;\n' +
'    delete(): IDBRequest;\n' +
'    continue(key?: any): void;\n' +
'    update(value: any): IDBRequest;\n' +
'}\n' +
'\n' +
'interface SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    kernelUnitLengthY: SVGAnimatedNumber;\n' +
'    surfaceScale: SVGAnimatedNumber;\n' +
'    specularExponent: SVGAnimatedNumber;\n' +
'    in1: SVGAnimatedString;\n' +
'    kernelUnitLengthX: SVGAnimatedNumber;\n' +
'    specularConstant: SVGAnimatedNumber;\n' +
'}\n' +
'\n' +
'interface File extends Blob {\n' +
'    lastModifiedDate: any;\n' +
'    name: string;\n' +
'}\n' +
'\n' +
'interface URL {\n' +
'    revokeObjectURL(url: string): void;\n' +
'    createObjectURL(object: any, options?: ObjectURLOptions): string;\n' +
'}\n' +
'declare var URL: URL;\n' +
'\n' +
'interface RangeException {\n' +
'    name: string;\n' +
'}\n' +
'\n' +
'interface IDBCursorWithValue extends IDBCursor {\n' +
'    value: any;\n' +
'}\n' +
'\n' +
'interface HTMLTextAreaElement {\n' +
'    /**\n' +
'      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.\n' +
'      */\n' +
'    validationMessage: string;\n' +
'    /**\n' +
'      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.\n' +
'      */\n' +
'    autofocus: boolean;\n' +
'    /**\n' +
'      * Returns a  ValidityState object that represents the validity states of an element.\n' +
'      */\n' +
'    validity: ValidityState;\n' +
'    /**\n' +
'      * When present, marks an element that can\'t be submitted without a value.\n' +
'      */\n' +
'    required: boolean;\n' +
'    /**\n' +
'      * Sets or retrieves the maximum number of characters that the user can enter in a text control.\n' +
'      */\n' +
'    maxLength: number;\n' +
'    /**\n' +
'      * Returns whether an element will successfully validate based on forms validation rules and constraints.\n' +
'      */\n' +
'    willValidate: boolean;\n' +
'    /**\n' +
'      * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.\n' +
'      */\n' +
'    placeholder: string;\n' +
'    /**\n' +
'      * Returns whether a form will validate when it is submitted, without having to submit it.\n' +
'      */\n' +
'    checkValidity(): boolean;\n' +
'    /**\n' +
'      * Sets a custom error message that is displayed when a form is submitted.\n' +
'      * @param error Sets a custom error message that is displayed when a form is submitted.\n' +
'      */\n' +
'    setCustomValidity(error: string): void;\n' +
'}\n' +
'\n' +
'interface XMLHttpRequestEventTarget extends EventTarget {\n' +
'    onprogress: (ev: ProgressEvent) => any;\n' +
'    onerror: (ev: ErrorEvent) => any;\n' +
'    onload: (ev: any) => any;\n' +
'    ontimeout: (ev: any) => any;\n' +
'    onabort: (ev: any) => any;\n' +
'    onloadstart: (ev: any) => any;\n' +
'    onloadend: (ev: ProgressEvent) => any;\n' +
'}\n' +
'\n' +
'interface IDBEnvironment {\n' +
'    msIndexedDB: IDBFactory;\n' +
'    indexedDB: IDBFactory;\n' +
'}\n' +
'\n' +
'interface AudioTrackList extends EventTarget {\n' +
'    length: number;\n' +
'    onchange: (ev: any) => any;\n' +
'    onaddtrack: (ev: TrackEvent) => any;\n' +
'    getTrackById(id: string): AudioTrack;\n' +
'    item(index: number): AudioTrack;\n' +
'    [index: number]: AudioTrack;\n' +
'}\n' +
'\n' +
'interface MSBaseReader extends EventTarget {\n' +
'    onprogress: (ev: ProgressEvent) => any;\n' +
'    readyState: number;\n' +
'    onabort: (ev: any) => any;\n' +
'    onloadend: (ev: ProgressEvent) => any;\n' +
'    onerror: (ev: ErrorEvent) => any;\n' +
'    onload: (ev: any) => any;\n' +
'    onloadstart: (ev: any) => any;\n' +
'    result: any;\n' +
'    abort(): void;\n' +
'    LOADING: number;\n' +
'    EMPTY: number;\n' +
'    DONE: number;\n' +
'}\n' +
'\n' +
'interface History {\n' +
'    state: any;\n' +
'    replaceState(statedata: any, title: string, url?: string): void;\n' +
'    pushState(statedata: any, title: string, url?: string): void;\n' +
'}\n' +
'\n' +
'interface SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    operator: SVGAnimatedEnumeration;\n' +
'    radiusX: SVGAnimatedNumber;\n' +
'    radiusY: SVGAnimatedNumber;\n' +
'    in1: SVGAnimatedString;\n' +
'    SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;\n' +
'    SVG_MORPHOLOGY_OPERATOR_ERODE: number;\n' +
'    SVG_MORPHOLOGY_OPERATOR_DILATE: number;\n' +
'}\n' +
'declare var SVGFEMorphologyElement: {\n' +
'    SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;\n' +
'    SVG_MORPHOLOGY_OPERATOR_ERODE: number;\n' +
'    SVG_MORPHOLOGY_OPERATOR_DILATE: number;\n' +
'}\n' +
'\n' +
'interface HTMLSelectElement {\n' +
'    /**\n' +
'      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.\n' +
'      */\n' +
'    validationMessage: string;\n' +
'    /**\n' +
'      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.\n' +
'      */\n' +
'    autofocus: boolean;\n' +
'    /**\n' +
'      * Returns a  ValidityState object that represents the validity states of an element.\n' +
'      */\n' +
'    validity: ValidityState;\n' +
'    /**\n' +
'      * When present, marks an element that can\'t be submitted without a value.\n' +
'      */\n' +
'    required: boolean;\n' +
'    /**\n' +
'      * Returns whether an element will successfully validate based on forms validation rules and constraints.\n' +
'      */\n' +
'    willValidate: boolean;\n' +
'    /**\n' +
'      * Returns whether a form will validate when it is submitted, without having to submit it.\n' +
'      */\n' +
'    checkValidity(): boolean;\n' +
'    /**\n' +
'      * Sets a custom error message that is displayed when a form is submitted.\n' +
'      * @param error Sets a custom error message that is displayed when a form is submitted.\n' +
'      */\n' +
'    setCustomValidity(error: string): void;\n' +
'}\n' +
'\n' +
'interface CSSRule {\n' +
'    KEYFRAMES_RULE: number;\n' +
'    KEYFRAME_RULE: number;\n' +
'    VIEWPORT_RULE: number;\n' +
'}\n' +
'//declare var CSSRule: {\n' +
'//    KEYFRAMES_RULE: number;\n' +
'//    KEYFRAME_RULE: number;\n' +
'//    VIEWPORT_RULE: number;\n' +
'//}\n' +
'\n' +
'interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {\n' +
'}\n' +
'\n' +
'interface WindowTimersExtension {\n' +
'    msSetImmediate(expression: any, ...args: any[]): number;\n' +
'    clearImmediate(handle: number): void;\n' +
'    msClearImmediate(handle: number): void;\n' +
'    setImmediate(expression: any, ...args: any[]): number;\n' +
'}\n' +
'\n' +
'interface SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    in2: SVGAnimatedString;\n' +
'    xChannelSelector: SVGAnimatedEnumeration;\n' +
'    yChannelSelector: SVGAnimatedEnumeration;\n' +
'    scale: SVGAnimatedNumber;\n' +
'    in1: SVGAnimatedString;\n' +
'    SVG_CHANNEL_B: number;\n' +
'    SVG_CHANNEL_R: number;\n' +
'    SVG_CHANNEL_G: number;\n' +
'    SVG_CHANNEL_UNKNOWN: number;\n' +
'    SVG_CHANNEL_A: number;\n' +
'}\n' +
'declare var SVGFEDisplacementMapElement: {\n' +
'    SVG_CHANNEL_B: number;\n' +
'    SVG_CHANNEL_R: number;\n' +
'    SVG_CHANNEL_G: number;\n' +
'    SVG_CHANNEL_UNKNOWN: number;\n' +
'    SVG_CHANNEL_A: number;\n' +
'}\n' +
'\n' +
'interface AnimationEvent extends Event {\n' +
'    animationName: string;\n' +
'    elapsedTime: number;\n' +
'    initAnimationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, animationNameArg: string, elapsedTimeArg: number): void;\n' +
'}\n' +
'\n' +
'interface SVGComponentTransferFunctionElement extends SVGElement {\n' +
'    tableValues: SVGAnimatedNumberList;\n' +
'    slope: SVGAnimatedNumber;\n' +
'    type: SVGAnimatedEnumeration;\n' +
'    exponent: SVGAnimatedNumber;\n' +
'    amplitude: SVGAnimatedNumber;\n' +
'    intercept: SVGAnimatedNumber;\n' +
'    offset: SVGAnimatedNumber;\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;\n' +
'}\n' +
'declare var SVGComponentTransferFunctionElement: {\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;\n' +
'    SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;\n' +
'}\n' +
'\n' +
'interface MSRangeCollection {\n' +
'    length: number;\n' +
'    item(index: number): Range;\n' +
'    [index: number]: Range;\n' +
'}\n' +
'\n' +
'interface SVGFEDistantLightElement extends SVGElement {\n' +
'    azimuth: SVGAnimatedNumber;\n' +
'    elevation: SVGAnimatedNumber;\n' +
'}\n' +
'\n' +
'interface SVGException {\n' +
'    name: string;\n' +
'}\n' +
'\n' +
'interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {\n' +
'}\n' +
'\n' +
'interface IDBKeyRange {\n' +
'    upper: any;\n' +
'    upperOpen: boolean;\n' +
'    lower: any;\n' +
'    lowerOpen: boolean;\n' +
'    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;\n' +
'    only(value: any): IDBKeyRange;\n' +
'    lowerBound(bound: any, open?: boolean): IDBKeyRange;\n' +
'    upperBound(bound: any, open?: boolean): IDBKeyRange;\n' +
'}\n' +
'\n' +
'interface WindowConsole {\n' +
'    console: Console;\n' +
'}\n' +
'\n' +
'interface IDBTransaction extends EventTarget {\n' +
'    oncomplete: (ev: Event) => any;\n' +
'    db: IDBDatabase;\n' +
'    mode: string;\n' +
'    error: DOMError;\n' +
'    onerror: (ev: ErrorEvent) => any;\n' +
'    onabort: (ev: any) => any;\n' +
'    abort(): void;\n' +
'    objectStore(name: string): IDBObjectStore;\n' +
'}\n' +
'\n' +
'interface AudioTrack {\n' +
'    kind: string;\n' +
'    language: string;\n' +
'    id: string;\n' +
'    label: string;\n' +
'    enabled: boolean;\n' +
'}\n' +
'\n' +
'interface SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    orderY: SVGAnimatedInteger;\n' +
'    kernelUnitLengthY: SVGAnimatedNumber;\n' +
'    orderX: SVGAnimatedInteger;\n' +
'    preserveAlpha: SVGAnimatedBoolean;\n' +
'    kernelMatrix: SVGAnimatedNumberList;\n' +
'    edgeMode: SVGAnimatedEnumeration;\n' +
'    kernelUnitLengthX: SVGAnimatedNumber;\n' +
'    bias: SVGAnimatedNumber;\n' +
'    targetX: SVGAnimatedInteger;\n' +
'    targetY: SVGAnimatedInteger;\n' +
'    divisor: SVGAnimatedNumber;\n' +
'    in1: SVGAnimatedString;\n' +
'    SVG_EDGEMODE_WRAP: number;\n' +
'    SVG_EDGEMODE_DUPLICATE: number;\n' +
'    SVG_EDGEMODE_UNKNOWN: number;\n' +
'    SVG_EDGEMODE_NONE: number;\n' +
'}\n' +
'declare var SVGFEConvolveMatrixElement: {\n' +
'    SVG_EDGEMODE_WRAP: number;\n' +
'    SVG_EDGEMODE_DUPLICATE: number;\n' +
'    SVG_EDGEMODE_UNKNOWN: number;\n' +
'    SVG_EDGEMODE_NONE: number;\n' +
'}\n' +
'\n' +
'interface TextTrackCueList {\n' +
'    length: number;\n' +
'    item(index: number): TextTrackCue;\n' +
'    [index: number]: TextTrackCue;\n' +
'    getCueById(id: string): TextTrackCue;\n' +
'}\n' +
'\n' +
'interface CSSKeyframesRule extends CSSRule {\n' +
'    name: string;\n' +
'    cssRules: CSSRuleList;\n' +
'    findRule(rule: string): CSSKeyframeRule;\n' +
'    deleteRule(rule: string): void;\n' +
'    appendRule(rule: string): void;\n' +
'}\n' +
'\n' +
'interface Window extends WindowBase64, IDBEnvironment, WindowConsole {\n' +
'    onmspointerdown: (ev: any) => any;\n' +
'    animationStartTime: number;\n' +
'    onmsgesturedoubletap: (ev: any) => any;\n' +
'    onmspointerhover: (ev: any) => any;\n' +
'    onmsgesturehold: (ev: any) => any;\n' +
'    onmspointermove: (ev: any) => any;\n' +
'    onmsgesturechange: (ev: any) => any;\n' +
'    onmsgesturestart: (ev: any) => any;\n' +
'    onmspointercancel: (ev: any) => any;\n' +
'    onmsgestureend: (ev: any) => any;\n' +
'    onmsgesturetap: (ev: any) => any;\n' +
'    onmspointerout: (ev: any) => any;\n' +
'    msAnimationStartTime: number;\n' +
'    applicationCache: ApplicationCache;\n' +
'    onmsinertiastart: (ev: any) => any;\n' +
'    onmspointerover: (ev: any) => any;\n' +
'    onpopstate: (ev: PopStateEvent) => any;\n' +
'    onmspointerup: (ev: any) => any;\n' +
'    msCancelRequestAnimationFrame(handle: number): void;\n' +
'    matchMedia(mediaQuery: string): MediaQueryList;\n' +
'    cancelAnimationFrame(handle: number): void;\n' +
'    msIsStaticHTML(html: string): boolean;\n' +
'    msMatchMedia(mediaQuery: string): MediaQueryList;\n' +
'    requestAnimationFrame(callback: FrameRequestCallback): number;\n' +
'    msRequestAnimationFrame(callback: FrameRequestCallback): number;\n' +
'}\n' +
'\n' +
'interface SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    baseFrequencyX: SVGAnimatedNumber;\n' +
'    numOctaves: SVGAnimatedInteger;\n' +
'    type: SVGAnimatedEnumeration;\n' +
'    baseFrequencyY: SVGAnimatedNumber;\n' +
'    stitchTiles: SVGAnimatedEnumeration;\n' +
'    seed: SVGAnimatedNumber;\n' +
'    SVG_STITCHTYPE_UNKNOWN: number;\n' +
'    SVG_STITCHTYPE_NOSTITCH: number;\n' +
'    SVG_TURBULENCE_TYPE_UNKNOWN: number;\n' +
'    SVG_TURBULENCE_TYPE_TURBULENCE: number;\n' +
'    SVG_TURBULENCE_TYPE_FRACTALNOISE: number;\n' +
'    SVG_STITCHTYPE_STITCH: number;\n' +
'}\n' +
'declare var SVGFETurbulenceElement: {\n' +
'    SVG_STITCHTYPE_UNKNOWN: number;\n' +
'    SVG_STITCHTYPE_NOSTITCH: number;\n' +
'    SVG_TURBULENCE_TYPE_UNKNOWN: number;\n' +
'    SVG_TURBULENCE_TYPE_TURBULENCE: number;\n' +
'    SVG_TURBULENCE_TYPE_FRACTALNOISE: number;\n' +
'    SVG_STITCHTYPE_STITCH: number;\n' +
'}\n' +
'\n' +
'interface TextTrackList {\n' +
'    length: number;\n' +
'    item(index: number): TextTrack;\n' +
'    [index: number]: TextTrack;\n' +
'}\n' +
'\n' +
'interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {\n' +
'}\n' +
'\n' +
'interface SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    in1: SVGAnimatedString;\n' +
'    type: SVGAnimatedEnumeration;\n' +
'    values: SVGAnimatedNumberList;\n' +
'    SVG_FECOLORMATRIX_TYPE_SATURATE: number;\n' +
'    SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;\n' +
'    SVG_FECOLORMATRIX_TYPE_MATRIX: number;\n' +
'    SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;\n' +
'    SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;\n' +
'}\n' +
'declare var SVGFEColorMatrixElement: {\n' +
'    SVG_FECOLORMATRIX_TYPE_SATURATE: number;\n' +
'    SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;\n' +
'    SVG_FECOLORMATRIX_TYPE_MATRIX: number;\n' +
'    SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;\n' +
'    SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;\n' +
'}\n' +
'\n' +
'interface Console {\n' +
'    info(message?: any, ...optionalParams: any[]): void;\n' +
'    profile(reportName?: string): void;\n' +
'    assert(test?: boolean, message?: string, ...optionalParams: any[]): void;\n' +
'    msIsIndependentlyComposed(element: Element): boolean;\n' +
'    clear(): void;\n' +
'    dir(value?: any, ...optionalParams: any[]): void;\n' +
'    warn(message?: any, ...optionalParams: any[]): void;\n' +
'    error(message?: any, ...optionalParams: any[]): void;\n' +
'    log(message?: any, ...optionalParams: any[]): void;\n' +
'    profileEnd(): void;\n' +
'}\n' +
'\n' +
'interface SVGFESpotLightElement extends SVGElement {\n' +
'    pointsAtY: SVGAnimatedNumber;\n' +
'    y: SVGAnimatedNumber;\n' +
'    limitingConeAngle: SVGAnimatedNumber;\n' +
'    specularExponent: SVGAnimatedNumber;\n' +
'    x: SVGAnimatedNumber;\n' +
'    pointsAtZ: SVGAnimatedNumber;\n' +
'    z: SVGAnimatedNumber;\n' +
'    pointsAtX: SVGAnimatedNumber;\n' +
'}\n' +
'\n' +
'interface HTMLImageElement {\n' +
'    /**\n' +
'      * Gets or sets the primary DLNA PlayTo device.\n' +
'      */\n' +
'    msPlayToPrimary: boolean;\n' +
'    /**\n' +
'      * Gets or sets whether the DLNA PlayTo device is available.\n' +
'      */\n' +
'    msPlayToDisabled: boolean;\n' +
'    /**\n' +
'      * Gets the source associated with the media element for use by the PlayToManager.\n' +
'      */\n' +
'    msPlayToSource: any;\n' +
'}\n' +
'\n' +
'interface WindowBase64 {\n' +
'    btoa(rawString: string): string;\n' +
'    atob(encodedString: string): string;\n' +
'}\n' +
'\n' +
'interface IDBDatabase extends EventTarget {\n' +
'    version: string;\n' +
'    name: string;\n' +
'    objectStoreNames: DOMStringList;\n' +
'    onerror: (ev: ErrorEvent) => any;\n' +
'    onabort: (ev: any) => any;\n' +
'    createObjectStore(name: string, optionalParameters?: any): IDBObjectStore;\n' +
'    close(): void;\n' +
'    transaction(storeNames: any, mode?: string): IDBTransaction;\n' +
'    deleteObjectStore(name: string): void;\n' +
'}\n' +
'\n' +
'interface DOMStringList {\n' +
'    length: number;\n' +
'    contains(str: string): boolean;\n' +
'    item(index: number): string;\n' +
'    [index: number]: string;\n' +
'}\n' +
'\n' +
'interface HTMLButtonElement {\n' +
'    /**\n' +
'      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.\n' +
'      */\n' +
'    validationMessage: string;\n' +
'    /**\n' +
'      * Overrides the target attribute on a form element.\n' +
'      */\n' +
'    formTarget: string;\n' +
'    /**\n' +
'      * Returns whether an element will successfully validate based on forms validation rules and constraints.\n' +
'      */\n' +
'    willValidate: boolean;\n' +
'    /**\n' +
'      * Overrides the action attribute (where the data on a form is sent) on the parent form element.\n' +
'      */\n' +
'    formAction: string;\n' +
'    /**\n' +
'      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.\n' +
'      */\n' +
'    autofocus: boolean;\n' +
'    /**\n' +
'      * Returns a  ValidityState object that represents the validity states of an element.\n' +
'      */\n' +
'    validity: ValidityState;\n' +
'    /**\n' +
'      * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.\n' +
'      */\n' +
'    formNoValidate: string;\n' +
'    /**\n' +
'      * Used to override the encoding (formEnctype attribute) specified on the form element.\n' +
'      */\n' +
'    formEnctype: string;\n' +
'    /**\n' +
'      * Overrides the submit method attribute previously specified on a form element.\n' +
'      */\n' +
'    formMethod: string;\n' +
'    /**\n' +
'      * Returns whether a form will validate when it is submitted, without having to submit it.\n' +
'      */\n' +
'    checkValidity(): boolean;\n' +
'    /**\n' +
'      * Sets a custom error message that is displayed when a form is submitted.\n' +
'      * @param error Sets a custom error message that is displayed when a form is submitted.\n' +
'      */\n' +
'    setCustomValidity(error: string): void;\n' +
'}\n' +
'\n' +
'interface IDBOpenDBRequest extends IDBRequest {\n' +
'    onupgradeneeded: (ev: IDBVersionChangeEvent) => any;\n' +
'    onblocked: (ev: Event) => any;\n' +
'}\n' +
'\n' +
'interface HTMLProgressElement extends HTMLElement {\n' +
'    /**\n' +
'      * Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value.\n' +
'      */\n' +
'    value: number;\n' +
'    /**\n' +
'      * Defines the maximum, or "done" value for a progress element.\n' +
'      */\n' +
'    max: number;\n' +
'    /**\n' +
'      * Returns the quotient of value/max when the value attribute is set (determinate progress bar), or -1 when the value attribute is missing (indeterminate progress bar).\n' +
'      */\n' +
'    position: number;\n' +
'    /**\n' +
'      * Retrieves a reference to the form that the object is embedded in.\n' +
'      */\n' +
'    form: HTMLFormElement;\n' +
'}\n' +
'\n' +
'interface MSLaunchUriCallback {\n' +
'    (): void;\n' +
'}\n' +
'\n' +
'interface SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    dy: SVGAnimatedNumber;\n' +
'    in1: SVGAnimatedString;\n' +
'    dx: SVGAnimatedNumber;\n' +
'}\n' +
'\n' +
'interface HTMLFormElement {\n' +
'    /**\n' +
'      * Specifies whether autocomplete is applied to an editable text field.\n' +
'      */\n' +
'    autocomplete: string;\n' +
'    /**\n' +
'      * Designates a form that is not validated when submitted.\n' +
'      */\n' +
'    noValidate: boolean;\n' +
'    /**\n' +
'      * Returns whether a form will validate when it is submitted, without having to submit it.\n' +
'      */\n' +
'    checkValidity(): boolean;\n' +
'}\n' +
'\n' +
'interface MSUnsafeFunctionCallback {\n' +
'    (): any;\n' +
'}\n' +
'\n' +
'interface Document {\n' +
'    onmspointerdown: (ev: any) => any;\n' +
'    msHidden: boolean;\n' +
'    msVisibilityState: string;\n' +
'    onmsgesturedoubletap: (ev: any) => any;\n' +
'    visibilityState: string;\n' +
'    onmsmanipulationstatechanged: (ev: any) => any;\n' +
'    onmspointerhover: (ev: any) => any;\n' +
'    onmscontentzoom: (ev: any) => any;\n' +
'    onmspointermove: (ev: any) => any;\n' +
'    onmsgesturehold: (ev: any) => any;\n' +
'    onmsgesturechange: (ev: any) => any;\n' +
'    onmsgesturestart: (ev: any) => any;\n' +
'    onmspointercancel: (ev: any) => any;\n' +
'    onmsgestureend: (ev: any) => any;\n' +
'    onmsgesturetap: (ev: any) => any;\n' +
'    onmspointerout: (ev: any) => any;\n' +
'    onmsinertiastart: (ev: any) => any;\n' +
'    msCSSOMElementFloatMetrics: boolean;\n' +
'    onmspointerover: (ev: any) => any;\n' +
'    hidden: boolean;\n' +
'    onmspointerup: (ev: any) => any;\n' +
'    msElementsFromPoint(x: number, y: number): NodeList;\n' +
'    msElementsFromRect(left: number, top: number, width: number, height: number): NodeList;\n' +
'    clear(): void;\n' +
'}\n' +
'\n' +
'interface MessageEvent extends Event {\n' +
'    ports: any;\n' +
'}\n' +
'\n' +
'interface HTMLScriptElement {\n' +
'    async: boolean;\n' +
'}\n' +
'\n' +
'interface HTMLMediaElement {\n' +
'    /**\n' +
'      * Specifies the purpose of the audio or video media, such as background audio or alerts.\n' +
'      */\n' +
'    msAudioCategory: string;\n' +
'    /**\n' +
'      * Specifies whether or not to enable low-latency playback on the media element.\n' +
'      */\n' +
'    msRealTime: boolean;\n' +
'    /**\n' +
'      * Gets or sets the primary DLNA PlayTo device.\n' +
'      */\n' +
'    msPlayToPrimary: boolean;\n' +
'    textTracks: TextTrackList;\n' +
'    /**\n' +
'      * Gets or sets whether the DLNA PlayTo device is available.\n' +
'      */\n' +
'    msPlayToDisabled: boolean;\n' +
'    /**\n' +
'      * Returns an AudioTrackList object with the audio tracks for a given video element.\n' +
'      */\n' +
'    audioTracks: AudioTrackList;\n' +
'    /**\n' +
'      * Gets the source associated with the media element for use by the PlayToManager.\n' +
'      */\n' +
'    msPlayToSource: any;\n' +
'    /**\n' +
'      * Specifies the output device id that the audio will be sent to.\n' +
'      */\n' +
'    msAudioDeviceType: string;\n' +
'    /**\n' +
'      * Clears all effects from the media pipeline.\n' +
'      */\n' +
'    msClearEffects(): void;\n' +
'    /**\n' +
'      * Specifies the media protection manager for a given media pipeline.\n' +
'      */\n' +
'    msSetMediaProtectionManager(mediaProtectionManager?: any): void;\n' +
'    /**\n' +
'      * Inserts the specified audio effect into media pipeline.\n' +
'      */\n' +
'    msInsertAudioEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;\n' +
'}\n' +
'\n' +
'interface TextTrack extends EventTarget {\n' +
'    language: string;\n' +
'    mode: any;\n' +
'    readyState: number;\n' +
'    activeCues: TextTrackCueList;\n' +
'    cues: TextTrackCueList;\n' +
'    oncuechange: (ev: Event) => any;\n' +
'    kind: string;\n' +
'    onload: (ev: any) => any;\n' +
'    onerror: (ev: ErrorEvent) => any;\n' +
'    label: string;\n' +
'    ERROR: number;\n' +
'    SHOWING: number;\n' +
'    LOADING: number;\n' +
'    LOADED: number;\n' +
'    NONE: number;\n' +
'    HIDDEN: number;\n' +
'    DISABLED: number;\n' +
'}\n' +
'declare var TextTrack: {\n' +
'    ERROR: number;\n' +
'    SHOWING: number;\n' +
'    LOADING: number;\n' +
'    LOADED: number;\n' +
'    NONE: number;\n' +
'    HIDDEN: number;\n' +
'    DISABLED: number;\n' +
'}\n' +
'\n' +
'interface MediaQueryListListener {\n' +
'    (mql: MediaQueryList): void;\n' +
'}\n' +
'\n' +
'interface IDBRequest extends EventTarget {\n' +
'    source: any;\n' +
'    onsuccess: (ev: Event) => any;\n' +
'    error: DOMError;\n' +
'    transaction: IDBTransaction;\n' +
'    onerror: (ev: ErrorEvent) => any;\n' +
'    readyState: string;\n' +
'    result: any;\n' +
'}\n' +
'\n' +
'interface MessagePort extends EventTarget {\n' +
'    onmessage: (ev: any) => any;\n' +
'    close(): void;\n' +
'    postMessage(message?: any, ports?: any): void;\n' +
'    start(): void;\n' +
'}\n' +
'\n' +
'interface FileReader extends MSBaseReader {\n' +
'    error: DOMError;\n' +
'    readAsArrayBuffer(blob: Blob): void;\n' +
'    readAsDataURL(blob: Blob): void;\n' +
'    readAsText(blob: Blob, encoding?: string): void;\n' +
'}\n' +
'declare var FileReader: {\n' +
'    prototype: FileReader;\n' +
'    new (): FileReader;\n' +
'}\n' +
'\n' +
'interface BlobPropertyBag {\n' +
'    type?: string;\n' +
'    endings?: string;\n' +
'}\n' +
'\n' +
'interface Blob {\n' +
'    type: string;\n' +
'    size: number;\n' +
'    msDetachStream(): any;\n' +
'    slice(start?: number, end?: number, contentType?: string): Blob;\n' +
'    msClose(): void;\n' +
'}\n' +
'declare var Blob: {\n' +
'    prototype: Blob;\n' +
'    new (blobParts?: any[], options?: BlobPropertyBag): Blob;\n' +
'}\n' +
'\n' +
'interface ApplicationCache extends EventTarget {\n' +
'    status: number;\n' +
'    ondownloading: (ev: Event) => any;\n' +
'    onprogress: (ev: ProgressEvent) => any;\n' +
'    onupdateready: (ev: Event) => any;\n' +
'    oncached: (ev: Event) => any;\n' +
'    onobsolete: (ev: Event) => any;\n' +
'    onerror: (ev: ErrorEvent) => any;\n' +
'    onchecking: (ev: Event) => any;\n' +
'    onnoupdate: (ev: Event) => any;\n' +
'    swapCache(): void;\n' +
'    abort(): void;\n' +
'    update(): void;\n' +
'    CHECKING: number;\n' +
'    UNCACHED: number;\n' +
'    UPDATEREADY: number;\n' +
'    DOWNLOADING: number;\n' +
'    IDLE: number;\n' +
'    OBSOLETE: number;\n' +
'}\n' +
'declare var ApplicationCache: {\n' +
'    CHECKING: number;\n' +
'    UNCACHED: number;\n' +
'    UPDATEREADY: number;\n' +
'    DOWNLOADING: number;\n' +
'    IDLE: number;\n' +
'    OBSOLETE: number;\n' +
'}\n' +
'\n' +
'interface FrameRequestCallback {\n' +
'    (time: number): void;\n' +
'}\n' +
'\n' +
'interface XMLHttpRequest {\n' +
'    response: any;\n' +
'    withCredentials: boolean;\n' +
'    onprogress: (ev: ProgressEvent) => any;\n' +
'    onabort: (ev: any) => any;\n' +
'    responseType: string;\n' +
'    onloadend: (ev: ProgressEvent) => any;\n' +
'    upload: XMLHttpRequestEventTarget;\n' +
'    onerror: (ev: ErrorEvent) => any;\n' +
'    onloadstart: (ev: any) => any;\n' +
'}\n' +
'\n' +
'interface PopStateEvent extends Event {\n' +
'    state: any;\n' +
'    initPopStateEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, stateArg: any): void;\n' +
'}\n' +
'\n' +
'interface CSSKeyframeRule extends CSSRule {\n' +
'    keyText: string;\n' +
'    style: CSSStyleDeclaration;\n' +
'}\n' +
'\n' +
'interface MSFileSaver {\n' +
'    msSaveBlob(blob: any, defaultName?: string): boolean;\n' +
'    msSaveOrOpenBlob(blob: any, defaultName?: string): boolean;\n' +
'}\n' +
'\n' +
'interface MSStream {\n' +
'    type: string;\n' +
'    msDetachStream(): any;\n' +
'    msClose(): void;\n' +
'}\n' +
'\n' +
'interface MediaError {\n' +
'    msExtendedCode: number;\n' +
'}\n' +
'\n' +
'interface HTMLFieldSetElement {\n' +
'    /**\n' +
'      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.\n' +
'      */\n' +
'    validationMessage: string;\n' +
'    /**\n' +
'      * Returns a  ValidityState object that represents the validity states of an element.\n' +
'      */\n' +
'    validity: ValidityState;\n' +
'    /**\n' +
'      * Returns whether an element will successfully validate based on forms validation rules and constraints.\n' +
'      */\n' +
'    willValidate: boolean;\n' +
'    /**\n' +
'      * Returns whether a form will validate when it is submitted, without having to submit it.\n' +
'      */\n' +
'    checkValidity(): boolean;\n' +
'    /**\n' +
'      * Sets a custom error message that is displayed when a form is submitted.\n' +
'      * @param error Sets a custom error message that is displayed when a form is submitted.\n' +
'      */\n' +
'    setCustomValidity(error: string): void;\n' +
'}\n' +
'\n' +
'interface MSBlobBuilder {\n' +
'    append(data: any, endings?: string): void;\n' +
'    getBlob(contentType?: string): Blob;\n' +
'}\n' +
'declare var MSBlobBuilder: {\n' +
'    prototype: MSBlobBuilder;\n' +
'    new (): MSBlobBuilder;\n' +
'}\n' +
'\n' +
'interface HTMLElement {\n' +
'    onmscontentzoom: (ev: any) => any;\n' +
'    oncuechange: (ev: Event) => any;\n' +
'    spellcheck: boolean;\n' +
'    classList: DOMTokenList;\n' +
'    onmsmanipulationstatechanged: (ev: any) => any;\n' +
'    draggable: boolean;\n' +
'}\n' +
'\n' +
'interface DataTransfer {\n' +
'    types: DOMStringList;\n' +
'    files: FileList;\n' +
'}\n' +
'\n' +
'interface DOMSettableTokenList extends DOMTokenList {\n' +
'    value: string;\n' +
'}\n' +
'\n' +
'interface IDBFactory {\n' +
'    open(name: string, version?: number): IDBOpenDBRequest;\n' +
'    cmp(first: any, second: any): number;\n' +
'    deleteDatabase(name: string): IDBOpenDBRequest;\n' +
'}\n' +
'\n' +
'interface Range {\n' +
'    createContextualFragment(fragment: string): DocumentFragment;\n' +
'}\n' +
'\n' +
'interface HTMLObjectElement {\n' +
'    /**\n' +
'      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.\n' +
'      */\n' +
'    validationMessage: string;\n' +
'    /**\n' +
'      * Returns a  ValidityState object that represents the validity states of an element.\n' +
'      */\n' +
'    validity: ValidityState;\n' +
'    /**\n' +
'      * Returns whether an element will successfully validate based on forms validation rules and constraints.\n' +
'      */\n' +
'    willValidate: boolean;\n' +
'    /**\n' +
'      * Returns whether a form will validate when it is submitted, without having to submit it.\n' +
'      */\n' +
'    checkValidity(): boolean;\n' +
'    /**\n' +
'      * Sets a custom error message that is displayed when a form is submitted.\n' +
'      * @param error Sets a custom error message that is displayed when a form is submitted.\n' +
'      */\n' +
'    setCustomValidity(error: string): void;\n' +
'}\n' +
'\n' +
'interface MSPointerEvent extends MouseEvent {\n' +
'    width: number;\n' +
'    rotation: number;\n' +
'    pressure: number;\n' +
'    pointerType: any;\n' +
'    isPrimary: boolean;\n' +
'    tiltY: number;\n' +
'    height: number;\n' +
'    intermediatePoints: any;\n' +
'    currentPoint: any;\n' +
'    tiltX: number;\n' +
'    hwTimestamp: number;\n' +
'    pointerId: number;\n' +
'    initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;\n' +
'    getCurrentPoint(element: Element): void;\n' +
'    getIntermediatePoints(element: Element): void;\n' +
'    MSPOINTER_TYPE_PEN: number;\n' +
'    MSPOINTER_TYPE_MOUSE: number;\n' +
'    MSPOINTER_TYPE_TOUCH: number;\n' +
'}\n' +
'declare var MSPointerEvent: {\n' +
'    MSPOINTER_TYPE_PEN: number;\n' +
'    MSPOINTER_TYPE_MOUSE: number;\n' +
'    MSPOINTER_TYPE_TOUCH: number;\n' +
'}\n' +
'\n' +
'interface DOMException {\n' +
'    name: string;\n' +
'    INVALID_NODE_TYPE_ERR: number;\n' +
'    DATA_CLONE_ERR: number;\n' +
'    TIMEOUT_ERR: number;\n' +
'}\n' +
'//declare var DOMException: {\n' +
'//    INVALID_NODE_TYPE_ERR: number;\n' +
'//    DATA_CLONE_ERR: number;\n' +
'//    TIMEOUT_ERR: number;\n' +
'//}\n' +
'\n' +
'interface MSManipulationEvent extends UIEvent {\n' +
'    lastState: number;\n' +
'    currentState: number;\n' +
'    initMSManipulationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, lastState: number, currentState: number): void;\n' +
'    MS_MANIPULATION_STATE_STOPPED: number;\n' +
'    MS_MANIPULATION_STATE_ACTIVE: number;\n' +
'    MS_MANIPULATION_STATE_INERTIA: number;\n' +
'}\n' +
'declare var MSManipulationEvent: {\n' +
'    MS_MANIPULATION_STATE_STOPPED: number;\n' +
'    MS_MANIPULATION_STATE_ACTIVE: number;\n' +
'    MS_MANIPULATION_STATE_INERTIA: number;\n' +
'}\n' +
'\n' +
'interface FormData {\n' +
'    append(name: any, value: any, blobName?: string): void;\n' +
'}\n' +
'declare var FormData: {\n' +
'    prototype: FormData;\n' +
'    new (form?: HTMLFormElement): FormData;\n' +
'}\n' +
'\n' +
'interface HTMLDataListElement extends HTMLElement {\n' +
'    options: HTMLCollection;\n' +
'}\n' +
'\n' +
'interface SVGFEImageElement extends SVGElement, SVGLangSpace, SVGFilterPrimitiveStandardAttributes, SVGURIReference, SVGExternalResourcesRequired {\n' +
'    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;\n' +
'}\n' +
'\n' +
'interface AbstractWorker extends EventTarget {\n' +
'    onerror: (ev: ErrorEvent) => any;\n' +
'}\n' +
'\n' +
'interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    operator: SVGAnimatedEnumeration;\n' +
'    in2: SVGAnimatedString;\n' +
'    k2: SVGAnimatedNumber;\n' +
'    k1: SVGAnimatedNumber;\n' +
'    k3: SVGAnimatedNumber;\n' +
'    in1: SVGAnimatedString;\n' +
'    k4: SVGAnimatedNumber;\n' +
'    SVG_FECOMPOSITE_OPERATOR_OUT: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_OVER: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_XOR: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_IN: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_ATOP: number;\n' +
'}\n' +
'declare var SVGFECompositeElement: {\n' +
'    SVG_FECOMPOSITE_OPERATOR_OUT: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_OVER: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_XOR: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_IN: number;\n' +
'    SVG_FECOMPOSITE_OPERATOR_ATOP: number;\n' +
'}\n' +
'\n' +
'interface ValidityState {\n' +
'    customError: boolean;\n' +
'    valueMissing: boolean;\n' +
'    stepMismatch: boolean;\n' +
'    rangeUnderflow: boolean;\n' +
'    rangeOverflow: boolean;\n' +
'    typeMismatch: boolean;\n' +
'    patternMismatch: boolean;\n' +
'    tooLong: boolean;\n' +
'    valid: boolean;\n' +
'}\n' +
'\n' +
'interface HTMLTrackElement extends HTMLElement {\n' +
'    kind: string;\n' +
'    src: string;\n' +
'    srclang: string;\n' +
'    track: TextTrack;\n' +
'    label: string;\n' +
'    default: boolean;\n' +
'}\n' +
'\n' +
'interface MSApp {\n' +
'    createFileFromStorageFile(storageFile: any): File;\n' +
'    createBlobFromRandomAccessStream(type: string, seeker: any): Blob;\n' +
'    createStreamFromInputStream(type: string, inputStream: any): MSStream;\n' +
'    terminateApp(exceptionObject: any): void;\n' +
'    createDataPackage(object: any): any;\n' +
'    execUnsafeLocalFunction(unsafeFunction: MSUnsafeFunctionCallback): any;\n' +
'    getHtmlPrintDocumentSource(htmlDoc: any): any;\n' +
'    addPublicLocalApplicationUri(uri: string): void;\n' +
'    createDataPackageFromSelection(): any;\n' +
'}\n' +
'declare var MSApp: MSApp;\n' +
'\n' +
'interface HTMLVideoElement {\n' +
'    msIsStereo3D: boolean;\n' +
'    msStereo3DPackingMode: string;\n' +
'    onMSVideoOptimalLayoutChanged: (ev: any) => any;\n' +
'    onMSVideoFrameStepCompleted: (ev: any) => any;\n' +
'    msStereo3DRenderMode: string;\n' +
'    msIsLayoutOptimalForPlayback: boolean;\n' +
'    msHorizontalMirror: boolean;\n' +
'    onMSVideoFormatChanged: (ev: any) => any;\n' +
'    msZoom: boolean;\n' +
'    msInsertVideoEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;\n' +
'    msSetVideoRectangle(left: number, top: number, right: number, bottom: number): void;\n' +
'    msFrameStep(forward: boolean): void;\n' +
'}\n' +
'\n' +
'interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    in1: SVGAnimatedString;\n' +
'}\n' +
'\n' +
'interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {\n' +
'    kernelUnitLengthY: SVGAnimatedNumber;\n' +
'    surfaceScale: SVGAnimatedNumber;\n' +
'    in1: SVGAnimatedString;\n' +
'    kernelUnitLengthX: SVGAnimatedNumber;\n' +
'    diffuseConstant: SVGAnimatedNumber;\n' +
'}\n' +
'\n' +
'interface MSCSSMatrix {\n' +
'    m24: number;\n' +
'    m34: number;\n' +
'    a: number;\n' +
'    d: number;\n' +
'    m32: number;\n' +
'    m41: number;\n' +
'    m11: number;\n' +
'    f: number;\n' +
'    e: number;\n' +
'    m23: number;\n' +
'    m14: number;\n' +
'    m33: number;\n' +
'    m22: number;\n' +
'    m21: number;\n' +
'    c: number;\n' +
'    m12: number;\n' +
'    b: number;\n' +
'    m42: number;\n' +
'    m31: number;\n' +
'    m43: number;\n' +
'    m13: number;\n' +
'    m44: number;\n' +
'    multiply(secondMatrix: MSCSSMatrix): MSCSSMatrix;\n' +
'    skewY(angle: number): MSCSSMatrix;\n' +
'    setMatrixValue(value: string): void;\n' +
'    inverse(): MSCSSMatrix;\n' +
'    rotateAxisAngle(x: number, y: number, z: number, angle: number): MSCSSMatrix;\n' +
'    toString(): string;\n' +
'    rotate(angleX: number, angleY?: number, angleZ?: number): MSCSSMatrix;\n' +
'    translate(x: number, y: number, z?: number): MSCSSMatrix;\n' +
'    scale(scaleX: number, scaleY?: number, scaleZ?: number): MSCSSMatrix;\n' +
'    skewX(angle: number): MSCSSMatrix;\n' +
'}\n' +
'declare var MSCSSMatrix: {\n' +
'    prototype: MSCSSMatrix;\n' +
'    new (text?: string): MSCSSMatrix;\n' +
'}\n' +
'\n' +
'interface Worker extends AbstractWorker {\n' +
'    onmessage: (ev: any) => any;\n' +
'    postMessage(message: any, ports?: any): void;\n' +
'    terminate(): void;\n' +
'}\n' +
'declare var Worker: {\n' +
'    prototype: Worker;\n' +
'    new (stringUrl: string): Worker;\n' +
'}\n' +
'\n' +
'interface HTMLIFrameElement {\n' +
'    sandbox: DOMSettableTokenList;\n' +
'}\n' +
'\n' +
'declare var onmspointerdown: (ev: any) => any;\n' +
'declare var animationStartTime: number;\n' +
'declare var onmsgesturedoubletap: (ev: any) => any;\n' +
'declare var onmspointerhover: (ev: any) => any;\n' +
'declare var onmsgesturehold: (ev: any) => any;\n' +
'declare var onmspointermove: (ev: any) => any;\n' +
'declare var onmsgesturechange: (ev: any) => any;\n' +
'declare var onmsgesturestart: (ev: any) => any;\n' +
'declare var onmspointercancel: (ev: any) => any;\n' +
'declare var onmsgestureend: (ev: any) => any;\n' +
'declare var onmsgesturetap: (ev: any) => any;\n' +
'declare var onmspointerout: (ev: any) => any;\n' +
'declare var msAnimationStartTime: number;\n' +
'declare var applicationCache: ApplicationCache;\n' +
'declare var onmsinertiastart: (ev: any) => any;\n' +
'declare var onmspointerover: (ev: any) => any;\n' +
'declare var onpopstate: (ev: PopStateEvent) => any;\n' +
'declare var onmspointerup: (ev: any) => any;\n' +
'declare function msCancelRequestAnimationFrame(handle: number): void;\n' +
'declare function matchMedia(mediaQuery: string): MediaQueryList;\n' +
'declare function cancelAnimationFrame(handle: number): void;\n' +
'declare function msIsStaticHTML(html: string): boolean;\n' +
'declare function msMatchMedia(mediaQuery: string): MediaQueryList;\n' +
'declare function requestAnimationFrame(callback: FrameRequestCallback): number;\n' +
'declare function msRequestAnimationFrame(callback: FrameRequestCallback): number;\n' +
'declare function btoa(rawString: string): string;\n' +
'declare function atob(encodedString: string): string;\n' +
'declare var msIndexedDB: IDBFactory;\n' +
'declare var indexedDB: IDBFactory;\n' +
'declare var console: Console;\n' +
'\n' +
'\n' +
'/////////////////////////////\n' +
'/// IE11 DOM APIs \n' +
'/////////////////////////////\n' +
'\n' +
'\n' +
'interface StoreExceptionsInformation extends ExceptionInformation {\n' +
'    siteName?: string;\n' +
'    explanationString?: string;\n' +
'    detailURI?: string;\n' +
'}\n' +
'\n' +
'interface StoreSiteSpecificExceptionsInformation extends StoreExceptionsInformation {\n' +
'    arrayOfDomainStrings?: Array<string>;\n' +
'}\n' +
'\n' +
'interface ConfirmSiteSpecificExceptionsInformation extends ExceptionInformation {\n' +
'    arrayOfDomainStrings?: Array<string>;\n' +
'}\n' +
'\n' +
'interface AlgorithmParameters {\n' +
'}\n' +
'\n' +
'interface MutationObserverInit {\n' +
'    childList?: boolean;\n' +
'    attributes?: boolean;\n' +
'    characterData?: boolean;\n' +
'    subtree?: boolean;\n' +
'    attributeOldValue?: boolean;\n' +
'    characterDataOldValue?: boolean;\n' +
'    attributeFilter?: Array<string>;\n' +
'}\n' +
'\n' +
'interface ExceptionInformation {\n' +
'    domain?: string;\n' +
'}\n' +
'\n' +
'interface MsZoomToOptions {\n' +
'    contentX?: number;\n' +
'    contentY?: number;\n' +
'    viewportX?: string;\n' +
'    viewportY?: string;\n' +
'    scaleFactor?: number;\n' +
'    animate?: string;\n' +
'}\n' +
'\n' +
'interface DeviceAccelerationDict {\n' +
'    x?: number;\n' +
'    y?: number;\n' +
'    z?: number;\n' +
'}\n' +
'\n' +
'interface DeviceRotationRateDict {\n' +
'    alpha?: number;\n' +
'    beta?: number;\n' +
'    gamma?: number;\n' +
'}\n' +
'\n' +
'interface Algorithm {\n' +
'    name?: string;\n' +
'    params?: AlgorithmParameters;\n' +
'}\n' +
'\n' +
'interface NavigatorID {\n' +
'    product: string;\n' +
'    vendor: string;\n' +
'}\n' +
'\n' +
'interface HTMLBodyElement {\n' +
'    onpageshow: (ev: PageTransitionEvent) => any;\n' +
'    onpagehide: (ev: PageTransitionEvent) => any;\n' +
'}\n' +
'\n' +
'interface MSExecAtPriorityFunctionCallback {\n' +
'    (...args: any[]): any;\n' +
'}\n' +
'\n' +
'interface MSWindowExtensions {\n' +
'    captureEvents(): void;\n' +
'    releaseEvents(): void;\n' +
'}\n' +
'\n' +
'interface MSGraphicsTrust {\n' +
'    status: string;\n' +
'    constrictionActive: boolean;\n' +
'}\n' +
'\n' +
'interface AudioTrack {\n' +
'    sourceBuffer: SourceBuffer;\n' +
'}\n' +
'\n' +
'interface DragEvent {\n' +
'    msConvertURL(file: File, targetType: string, targetURL?: string): void;\n' +
'}\n' +
'\n' +
'interface SubtleCrypto {\n' +
'    unwrapKey(wrappedKey: ArrayBufferView, keyAlgorithm: any, keyEncryptionKey: Key, extractable?: boolean, keyUsages?: string[]): KeyOperation;\n' +
'    encrypt(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;\n' +
'    importKey(format: string, keyData: ArrayBufferView, algorithm: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;\n' +
'    wrapKey(key: Key, keyEncryptionKey: Key, keyWrappingAlgorithm: any): KeyOperation;\n' +
'    verify(algorithm: any, key: Key, signature: ArrayBufferView, buffer?: ArrayBufferView): CryptoOperation;\n' +
'    deriveKey(algorithm: any, baseKey: Key, derivedKeyType: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;\n' +
'    digest(algorithm: any, buffer?: ArrayBufferView): CryptoOperation;\n' +
'    exportKey(format: string, key: Key): KeyOperation;\n' +
'    generateKey(algorithm: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;\n' +
'    sign(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;\n' +
'    decrypt(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;\n' +
'}\n' +
'\n' +
'interface Crypto extends RandomSource {\n' +
'    subtle: SubtleCrypto;\n' +
'}\n' +
'\n' +
'interface VideoPlaybackQuality {\n' +
'    totalFrameDelay: number;\n' +
'    creationTime: number;\n' +
'    totalVideoFrames: number;\n' +
'    droppedVideoFrames: number;\n' +
'}\n' +
'\n' +
'interface GlobalEventHandlers {\n' +
'    onpointerenter: (ev: PointerEvent) => any;\n' +
'    onpointerout: (ev: PointerEvent) => any;\n' +
'    onpointerdown: (ev: PointerEvent) => any;\n' +
'    onpointerup: (ev: PointerEvent) => any;\n' +
'    onpointercancel: (ev: PointerEvent) => any;\n' +
'    onpointerover: (ev: PointerEvent) => any;\n' +
'    onpointermove: (ev: PointerEvent) => any;\n' +
'    onpointerleave: (ev: PointerEvent) => any;\n' +
'}\n' +
'\n' +
'interface Window extends GlobalEventHandlers {\n' +
'    onpageshow: (ev: PageTransitionEvent) => any;\n' +
'    ondevicemotion: (ev: DeviceMotionEvent) => any;\n' +
'    devicePixelRatio: number;\n' +
'    msCrypto: Crypto;\n' +
'    ondeviceorientation: (ev: DeviceOrientationEvent) => any;\n' +
'    doNotTrack: string;\n' +
'    onmspointerenter: (ev: any) => any;\n' +
'    onpagehide: (ev: PageTransitionEvent) => any;\n' +
'    onmspointerleave: (ev: any) => any;\n' +
'}\n' +
'\n' +
'interface Key {\n' +
'    algorithm: Algorithm;\n' +
'    type: string;\n' +
'    extractable: boolean;\n' +
'    keyUsage: string[];\n' +
'}\n' +
'\n' +
'interface TextTrackList extends EventTarget {\n' +
'    onaddtrack: (ev: any) => any;\n' +
'}\n' +
'\n' +
'interface DeviceAcceleration {\n' +
'    y: number;\n' +
'    x: number;\n' +
'    z: number;\n' +
'}\n' +
'\n' +
'interface Console {\n' +
'    count(countTitle?: string): void;\n' +
'    groupEnd(): void;\n' +
'    time(timerName?: string): void;\n' +
'    timeEnd(timerName?: string): void;\n' +
'    trace(): void;\n' +
'    group(groupTitle?: string): void;\n' +
'    dirxml(value: any): void;\n' +
'    debug(message?: string, ...optionalParams: any[]): void;\n' +
'    groupCollapsed(groupTitle?: string): void;\n' +
'    select(element: Element): void;\n' +
'}\n' +
'\n' +
'interface MSNavigatorDoNotTrack {\n' +
'    removeSiteSpecificTrackingException(args: ExceptionInformation): void;\n' +
'    removeWebWideTrackingException(args: ExceptionInformation): void;\n' +
'    storeWebWideTrackingException(args: StoreExceptionsInformation): void;\n' +
'    storeSiteSpecificTrackingException(args: StoreSiteSpecificExceptionsInformation): void;\n' +
'    confirmSiteSpecificTrackingException(args: ConfirmSiteSpecificExceptionsInformation): boolean;\n' +
'    confirmWebWideTrackingException(args: ExceptionInformation): boolean;\n' +
'}\n' +
'\n' +
'interface HTMLImageElement {\n' +
'    crossOrigin: string;\n' +
'    msPlayToPreferredSourceUri: string;\n' +
'}\n' +
'\n' +
'interface HTMLAllCollection extends HTMLCollection {\n' +
'    namedItem(name: string): Element;\n' +
'    //[name: string]: Element;\n' +
'}\n' +
'\n' +
'interface MSNavigatorExtensions {\n' +
'    language: string;\n' +
'}\n' +
'\n' +
'interface AesGcmEncryptResult {\n' +
'    ciphertext: ArrayBuffer;\n' +
'    tag: ArrayBuffer;\n' +
'}\n' +
'\n' +
'interface HTMLSourceElement {\n' +
'    msKeySystem: string;\n' +
'}\n' +
'\n' +
'interface CSSStyleDeclaration {\n' +
'    alignItems: string;\n' +
'    borderImageSource: string;\n' +
'    flexBasis: string;\n' +
'    borderImageWidth: string;\n' +
'    borderImageRepeat: string;\n' +
'    order: string;\n' +
'    flex: string;\n' +
'    alignContent: string;\n' +
'    msImeAlign: string;\n' +
'    flexShrink: string;\n' +
'    flexGrow: string;\n' +
'    borderImageSlice: string;\n' +
'    flexWrap: string;\n' +
'    borderImageOutset: string;\n' +
'    flexDirection: string;\n' +
'    touchAction: string;\n' +
'    flexFlow: string;\n' +
'    borderImage: string;\n' +
'    justifyContent: string;\n' +
'    alignSelf: string;\n' +
'    msTextCombineHorizontal: string;\n' +
'}\n' +
'\n' +
'interface NavigationCompletedEvent extends NavigationEvent {\n' +
'    webErrorStatus: number;\n' +
'    isSuccess: boolean;\n' +
'}\n' +
'\n' +
'interface MutationRecord {\n' +
'    oldValue: string;\n' +
'    previousSibling: Node;\n' +
'    addedNodes: NodeList;\n' +
'    attributeName: string;\n' +
'    removedNodes: NodeList;\n' +
'    target: Node;\n' +
'    nextSibling: Node;\n' +
'    attributeNamespace: string;\n' +
'    type: string;\n' +
'}\n' +
'\n' +
'interface Navigator {\n' +
'    pointerEnabled: boolean;\n' +
'    maxTouchPoints: number;\n' +
'}\n' +
'\n' +
'interface Document extends MSDocumentExtensions, GlobalEventHandlers {\n' +
'    msFullscreenEnabled: boolean;\n' +
'    onmsfullscreenerror: (ev: any) => any;\n' +
'    onmspointerenter: (ev: any) => any;\n' +
'    msFullscreenElement: Element;\n' +
'    onmsfullscreenchange: (ev: any) => any;\n' +
'    onmspointerleave: (ev: any) => any;\n' +
'    msExitFullscreen(): void;\n' +
'}\n' +
'\n' +
'interface MimeTypeArray {\n' +
'    length: number;\n' +
'    item(index: number): Plugin;\n' +
'    [index: number]: Plugin;\n' +
'    namedItem(type: string): Plugin;\n' +
'    //[type: string]: Plugin;\n' +
'}\n' +
'\n' +
'interface HTMLMediaElement {\n' +
'    /**\n' +
'      * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.\n' +
'      */\n' +
'    msPlayToPreferredSourceUri: string;\n' +
'    onmsneedkey: (ev: MSMediaKeyNeededEvent) => any;\n' +
'    /**\n' +
'      * Gets the MSMediaKeys object, which is used for decrypting media data, that is associated with this media element.\n' +
'      */\n' +
'    msKeys: MSMediaKeys;\n' +
'    msGraphicsTrustStatus: MSGraphicsTrust;\n' +
'    msSetMediaKeys(mediaKeys: MSMediaKeys): void;\n' +
'    addTextTrack(kind: string, label?: string, language?: string): TextTrack;\n' +
'}\n' +
'\n' +
'interface TextTrack {\n' +
'    addCue(cue: TextTrackCue): void;\n' +
'    removeCue(cue: TextTrackCue): void;\n' +
'}\n' +
'\n' +
'interface KeyOperation extends EventTarget {\n' +
'    oncomplete: (ev: any) => any;\n' +
'    onerror: (ev: any) => any;\n' +
'    result: any;\n' +
'}\n' +
'\n' +
'interface DOMStringMap {\n' +
'}\n' +
'\n' +
'interface DeviceOrientationEvent extends Event {\n' +
'    gamma: number;\n' +
'    alpha: number;\n' +
'    absolute: boolean;\n' +
'    beta: number;\n' +
'    initDeviceOrientationEvent(type: string, bubbles: boolean, cancelable: boolean, alpha: number, beta: number, gamma: number, absolute: boolean): void;\n' +
'}\n' +
'\n' +
'interface MSMediaKeys {\n' +
'    keySystem: string;\n' +
'    createSession(type: string, initData: Uint8Array, cdmData?: Uint8Array): MSMediaKeySession;\n' +
'    isTypeSupported(keySystem: string, type?: string): boolean;\n' +
'}\n' +
'declare var MSMediaKeys: {\n' +
'    prototype: MSMediaKeys;\n' +
'    new (): MSMediaKeys;\n' +
'}\n' +
'\n' +
'interface MSMediaKeyMessageEvent extends Event {\n' +
'    destinationURL: string;\n' +
'    message: Uint8Array;\n' +
'}\n' +
'\n' +
'interface MSHTMLWebViewElement extends HTMLElement {\n' +
'    documentTitle: string;\n' +
'    width: number;\n' +
'    src: string;\n' +
'    canGoForward: boolean;\n' +
'    height: number;\n' +
'    canGoBack: boolean;\n' +
'    navigateWithHttpRequestMessage(requestMessage: any): void;\n' +
'    goBack(): void;\n' +
'    navigate(uri: string): void;\n' +
'    stop(): void;\n' +
'    navigateToString(contents: string): void;\n' +
'    captureSelectedContentToDataPackageAsync(): MSWebViewAsyncOperation;\n' +
'    capturePreviewToBlobAsync(): MSWebViewAsyncOperation;\n' +
'    refresh(): void;\n' +
'    goForward(): void;\n' +
'    navigateToLocalStreamUri(source: string, streamResolver: any): void;\n' +
'    invokeScriptAsync(scriptName: string, ...args: any[]): MSWebViewAsyncOperation;\n' +
'    buildLocalStreamUri(contentIdentifier: string, relativePath: string): string;\n' +
'}\n' +
'\n' +
'interface NavigationEvent extends Event {\n' +
'    uri: string;\n' +
'}\n' +
'\n' +
'interface Element extends GlobalEventHandlers {\n' +
'    onlostpointercapture: (ev: PointerEvent) => any;\n' +
'    onmspointerenter: (ev: any) => any;\n' +
'    ongotpointercapture: (ev: PointerEvent) => any;\n' +
'    onmspointerleave: (ev: any) => any;\n' +
'    msZoomTo(args: MsZoomToOptions): void;\n' +
'    setPointerCapture(pointerId: number): void;\n' +
'    msGetUntransformedBounds(): ClientRect;\n' +
'    releasePointerCapture(pointerId: number): void;\n' +
'    msRequestFullscreen(): void;\n' +
'}\n' +
'\n' +
'interface RandomSource {\n' +
'    getRandomValues(array: ArrayBufferView): ArrayBufferView;\n' +
'}\n' +
'\n' +
'interface XMLHttpRequest {\n' +
'    msCaching: string;\n' +
'    msCachingEnabled(): boolean;\n' +
'    overrideMimeType(mime: string): void;\n' +
'}\n' +
'\n' +
'interface SourceBuffer extends EventTarget {\n' +
'    updating: boolean;\n' +
'    appendWindowStart: number;\n' +
'    appendWindowEnd: number;\n' +
'    buffered: TimeRanges;\n' +
'    timestampOffset: number;\n' +
'    audioTracks: AudioTrackList;\n' +
'    appendBuffer(data: ArrayBuffer): void;\n' +
'    remove(start: number, end: number): void;\n' +
'    abort(): void;\n' +
'    appendStream(stream: MSStream, maxSize?: number): void;\n' +
'}\n' +
'\n' +
'interface MSInputMethodContext extends EventTarget {\n' +
'    oncandidatewindowshow: (ev: any) => any;\n' +
'    target: HTMLElement;\n' +
'    compositionStartOffset: number;\n' +
'    oncandidatewindowhide: (ev: any) => any;\n' +
'    oncandidatewindowupdate: (ev: any) => any;\n' +
'    compositionEndOffset: number;\n' +
'    getCompositionAlternatives(): string[];\n' +
'    getCandidateWindowClientRect(): ClientRect;\n' +
'    hasComposition(): boolean;\n' +
'    isCandidateWindowVisible(): boolean;\n' +
'}\n' +
'\n' +
'interface DeviceRotationRate {\n' +
'    gamma: number;\n' +
'    alpha: number;\n' +
'    beta: number;\n' +
'}\n' +
'\n' +
'interface PluginArray {\n' +
'    length: number;\n' +
'    refresh(reload?: boolean): void;\n' +
'    item(index: number): Plugin;\n' +
'    [index: number]: Plugin;\n' +
'    namedItem(name: string): Plugin;\n' +
'    //[name: string]: Plugin;\n' +
'}\n' +
'\n' +
'interface MSMediaKeyError {\n' +
'    systemCode: number;\n' +
'    code: number;\n' +
'    MS_MEDIA_KEYERR_SERVICE: number;\n' +
'    MS_MEDIA_KEYERR_HARDWARECHANGE: number;\n' +
'    MS_MEDIA_KEYERR_OUTPUT: number;\n' +
'    MS_MEDIA_KEYERR_DOMAIN: number;\n' +
'    MS_MEDIA_KEYERR_UNKNOWN: number;\n' +
'    MS_MEDIA_KEYERR_CLIENT: number;\n' +
'}\n' +
'declare var MSMediaKeyError: {\n' +
'    MS_MEDIA_KEYERR_SERVICE: number;\n' +
'    MS_MEDIA_KEYERR_HARDWARECHANGE: number;\n' +
'    MS_MEDIA_KEYERR_OUTPUT: number;\n' +
'    MS_MEDIA_KEYERR_DOMAIN: number;\n' +
'    MS_MEDIA_KEYERR_UNKNOWN: number;\n' +
'    MS_MEDIA_KEYERR_CLIENT: number;\n' +
'}\n' +
'\n' +
'interface Plugin {\n' +
'    length: number;\n' +
'    filename: string;\n' +
'    version: string;\n' +
'    name: string;\n' +
'    description: string;\n' +
'    item(index: number): MimeType;\n' +
'    [index: number]: MimeType;\n' +
'    namedItem(type: string): MimeType;\n' +
'    //[type: string]: MimeType;\n' +
'}\n' +
'\n' +
'interface HTMLFrameSetElement {\n' +
'    onpageshow: (ev: PageTransitionEvent) => any;\n' +
'    onpagehide: (ev: PageTransitionEvent) => any;\n' +
'}\n' +
'\n' +
'interface Screen extends EventTarget {\n' +
'    msOrientation: string;\n' +
'    onmsorientationchange: (ev: any) => any;\n' +
'    msLockOrientation(orientation: string): boolean;\n' +
'    msLockOrientation(orientations: string[]): boolean;\n' +
'    msUnlockOrientation(): void;\n' +
'}\n' +
'\n' +
'interface MediaSource extends EventTarget {\n' +
'    sourceBuffers: SourceBufferList;\n' +
'    duration: number;\n' +
'    readyState: string;\n' +
'    activeSourceBuffers: SourceBufferList;\n' +
'    addSourceBuffer(type: string): SourceBuffer;\n' +
'    endOfStream(error?: string): void;\n' +
'    isTypeSupported(type: string): boolean;\n' +
'    removeSourceBuffer(sourceBuffer: SourceBuffer): void;\n' +
'}\n' +
'declare var MediaSource: {\n' +
'    prototype: MediaSource;\n' +
'    new (): MediaSource;\n' +
'}\n' +
'\n' +
'interface MediaError {\n' +
'    MS_MEDIA_ERR_ENCRYPTED: number;\n' +
'}\n' +
'//declare var MediaError: {\n' +
'//    MS_MEDIA_ERR_ENCRYPTED: number;\n' +
'//}\n' +
'\n' +
'interface SourceBufferList extends EventTarget {\n' +
'    length: number;\n' +
'    item(index: number): SourceBuffer;\n' +
'    [index: number]: SourceBuffer;\n' +
'}\n' +
'\n' +
'interface XMLDocument extends Document {\n' +
'}\n' +
'\n' +
'interface DeviceMotionEvent extends Event {\n' +
'    rotationRate: DeviceRotationRate;\n' +
'    acceleration: DeviceAcceleration;\n' +
'    interval: number;\n' +
'    accelerationIncludingGravity: DeviceAcceleration;\n' +
'    initDeviceMotionEvent(type: string, bubbles: boolean, cancelable: boolean, acceleration: DeviceAccelerationDict, accelerationIncludingGravity: DeviceAccelerationDict, rotationRate: DeviceRotationRateDict, interval: number): void;\n' +
'}\n' +
'\n' +
'interface MimeType {\n' +
'    enabledPlugin: Plugin;\n' +
'    suffixes: string;\n' +
'    type: string;\n' +
'    description: string;\n' +
'}\n' +
'\n' +
'interface PointerEvent extends MouseEvent {\n' +
'    width: number;\n' +
'    rotation: number;\n' +
'    pressure: number;\n' +
'    pointerType: any;\n' +
'    isPrimary: boolean;\n' +
'    tiltY: number;\n' +
'    height: number;\n' +
'    intermediatePoints: any;\n' +
'    currentPoint: any;\n' +
'    tiltX: number;\n' +
'    hwTimestamp: number;\n' +
'    pointerId: number;\n' +
'    initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;\n' +
'    getCurrentPoint(element: Element): void;\n' +
'    getIntermediatePoints(element: Element): void;\n' +
'}\n' +
'\n' +
'interface MSDocumentExtensions {\n' +
'    captureEvents(): void;\n' +
'    releaseEvents(): void;\n' +
'}\n' +
'\n' +
'interface HTMLElement {\n' +
'    dataset: DOMStringMap;\n' +
'    hidden: boolean;\n' +
'    msGetInputContext(): MSInputMethodContext;\n' +
'}\n' +
'\n' +
'interface MutationObserver {\n' +
'    observe(target: Node, options: MutationObserverInit): void;\n' +
'    takeRecords(): MutationRecord[];\n' +
'    disconnect(): void;\n' +
'}\n' +
'declare var MutationObserver: {\n' +
'    prototype: MutationObserver;\n' +
'    new (callback: (arr: MutationRecord[], observer: MutationObserver)=>any): MutationObserver; \n' +
'}\n' +
'\n' +
'interface AudioTrackList {\n' +
'    onremovetrack: (ev: PluginArray) => any;\n' +
'}\n' +
'\n' +
'interface HTMLObjectElement {\n' +
'    /**\n' +
'      * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.\n' +
'      */\n' +
'    msPlayToPreferredSourceUri: string;\n' +
'    /**\n' +
'      * Gets or sets the primary DLNA PlayTo device.\n' +
'      */\n' +
'    msPlayToPrimary: boolean;\n' +
'    /**\n' +
'      * Gets or sets whether the DLNA PlayTo device is available.\n' +
'      */\n' +
'    msPlayToDisabled: boolean;\n' +
'    readyState: number;\n' +
'    /**\n' +
'      * Gets the source associated with the media element for use by the PlayToManager.\n' +
'      */\n' +
'    msPlayToSource: any;\n' +
'}\n' +
'\n' +
'interface HTMLEmbedElement {\n' +
'    /**\n' +
'      * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.\n' +
'      */\n' +
'    msPlayToPreferredSourceUri: string;\n' +
'    /**\n' +
'      * Gets or sets the primary DLNA PlayTo device.\n' +
'      */\n' +
'    msPlayToPrimary: boolean;\n' +
'    /**\n' +
'      * Gets or sets whether the DLNA PlayTo device is available.\n' +
'      */\n' +
'    msPlayToDisabled: boolean;\n' +
'    readyState: string;\n' +
'    /**\n' +
'      * Gets the source associated with the media element for use by the PlayToManager.\n' +
'      */\n' +
'    msPlayToSource: any;\n' +
'}\n' +
'\n' +
'interface MSWebViewAsyncOperation extends EventTarget {\n' +
'    target: MSHTMLWebViewElement;\n' +
'    oncomplete: (ev: any) => any;\n' +
'    error: DOMError;\n' +
'    onerror: (ev: any) => any;\n' +
'    readyState: number;\n' +
'    type: number;\n' +
'    result: any;\n' +
'    start(): void;\n' +
'    ERROR: number;\n' +
'    TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;\n' +
'    TYPE_INVOKE_SCRIPT: number;\n' +
'    COMPLETED: number;\n' +
'    TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;\n' +
'    STARTED: number;\n' +
'}\n' +
'declare var MSWebViewAsyncOperation: {\n' +
'    ERROR: number;\n' +
'    TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;\n' +
'    TYPE_INVOKE_SCRIPT: number;\n' +
'    COMPLETED: number;\n' +
'    TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;\n' +
'    STARTED: number;\n' +
'}\n' +
'\n' +
'interface ScriptNotifyEvent extends Event {\n' +
'    value: string;\n' +
'    callingUri: string;\n' +
'}\n' +
'\n' +
'interface PerformanceNavigationTiming extends PerformanceEntry {\n' +
'    redirectStart: number;\n' +
'    domainLookupEnd: number;\n' +
'    responseStart: number;\n' +
'    domComplete: number;\n' +
'    domainLookupStart: number;\n' +
'    loadEventStart: number;\n' +
'    unloadEventEnd: number;\n' +
'    fetchStart: number;\n' +
'    requestStart: number;\n' +
'    domInteractive: number;\n' +
'    navigationStart: number;\n' +
'    connectEnd: number;\n' +
'    loadEventEnd: number;\n' +
'    connectStart: number;\n' +
'    responseEnd: number;\n' +
'    domLoading: number;\n' +
'    redirectEnd: number;\n' +
'    redirectCount: number;\n' +
'    unloadEventStart: number;\n' +
'    domContentLoadedEventStart: number;\n' +
'    domContentLoadedEventEnd: number;\n' +
'    type: string;\n' +
'}\n' +
'\n' +
'interface MSMediaKeyNeededEvent extends Event {\n' +
'    initData: Uint8Array;\n' +
'}\n' +
'\n' +
'interface MSManipulationEvent {\n' +
'    MS_MANIPULATION_STATE_SELECTING: number;\n' +
'    MS_MANIPULATION_STATE_COMMITTED: number;\n' +
'    MS_MANIPULATION_STATE_PRESELECT: number;\n' +
'    MS_MANIPULATION_STATE_DRAGGING: number;\n' +
'    MS_MANIPULATION_STATE_CANCELLED: number;\n' +
'}\n' +
'//declare var MSManipulationEvent: {\n' +
'//    MS_MANIPULATION_STATE_SELECTING: number;\n' +
'//    MS_MANIPULATION_STATE_COMMITTED: number;\n' +
'//    MS_MANIPULATION_STATE_PRESELECT: number;\n' +
'//    MS_MANIPULATION_STATE_DRAGGING: number;\n' +
'//    MS_MANIPULATION_STATE_CANCELLED: number;\n' +
'//}\n' +
'\n' +
'interface LongRunningScriptDetectedEvent extends Event {\n' +
'    stopPageScriptExecution: boolean;\n' +
'    executionTime: number;\n' +
'}\n' +
'\n' +
'interface MSAppView {\n' +
'    viewId: number;\n' +
'    close(): void;\n' +
'    postMessage(message: any, targetOrigin: string, ports?: any): void;\n' +
'}\n' +
'\n' +
'interface PerfWidgetExternal {\n' +
'    maxCpuSpeed: number;\n' +
'    independentRenderingEnabled: boolean;\n' +
'    irDisablingContentString: string;\n' +
'    irStatusAvailable: boolean;\n' +
'    performanceCounter: number;\n' +
'    averagePaintTime: number;\n' +
'    activeNetworkRequestCount: number;\n' +
'    paintRequestsPerSecond: number;\n' +
'    extraInformationEnabled: boolean;\n' +
'    performanceCounterFrequency: number;\n' +
'    averageFrameTime: number;\n' +
'    repositionWindow(x: number, y: number): void;\n' +
'    getRecentMemoryUsage(last: number): any;\n' +
'    getMemoryUsage(): number;\n' +
'    resizeWindow(width: number, height: number): void;\n' +
'    getProcessCpuUsage(): number;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'    removeEventListener(eventType: string, callback: (ev: any) => any): void;\n' +
'    getRecentCpuUsage(last: number): any;\n' +
'    addEventListener(eventType: string, callback: (ev: any) => any): void;\n' +
'    getRecentFrames(last: number): any;\n' +
'    getRecentPaintRequests(last: number): any;\n' +
'}\n' +
'\n' +
'interface PageTransitionEvent extends Event {\n' +
'    persisted: boolean;\n' +
'}\n' +
'\n' +
'interface MutationCallback {\n' +
'    (mutations: MutationRecord[], observer: MutationObserver): void;\n' +
'}\n' +
'\n' +
'interface HTMLDocument extends Document {\n' +
'}\n' +
'\n' +
'interface KeyPair {\n' +
'    privateKey: Key;\n' +
'    publicKey: Key;\n' +
'}\n' +
'\n' +
'interface MSApp {\n' +
'    getViewOpener(): MSAppView;\n' +
'    suppressSubdownloadCredentialPrompts(suppress: boolean): void;\n' +
'    execAsyncAtPriority(asynchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): void;\n' +
'    isTaskScheduledAtPriorityOrHigher(priority: string): boolean;\n' +
'    execAtPriority(synchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): any;\n' +
'    createNewView(uri: string): MSAppView;\n' +
'    getCurrentPriority(): string;\n' +
'    NORMAL: string;\n' +
'    HIGH: string;\n' +
'    IDLE: string;\n' +
'    CURRENT: string;\n' +
'}\n' +
'//declare var MSApp: {\n' +
'//    NORMAL: string;\n' +
'//    HIGH: string;\n' +
'//    IDLE: string;\n' +
'//    CURRENT: string;\n' +
'//}\n' +
'\n' +
'interface MSMediaKeySession extends EventTarget {\n' +
'    sessionId: string;\n' +
'    error: MSMediaKeyError;\n' +
'    keySystem: string;\n' +
'    close(): void;\n' +
'    update(key: Uint8Array): void;\n' +
'}\n' +
'\n' +
'interface HTMLTrackElement {\n' +
'    readyState: number;\n' +
'    ERROR: number;\n' +
'    LOADING: number;\n' +
'    LOADED: number;\n' +
'    NONE: number;\n' +
'}\n' +
'//declare var HTMLTrackElement: {\n' +
'//    ERROR: number;\n' +
'//    LOADING: number;\n' +
'//    LOADED: number;\n' +
'//    NONE: number;\n' +
'//}\n' +
'\n' +
'interface HTMLVideoElement {\n' +
'    getVideoPlaybackQuality(): VideoPlaybackQuality;\n' +
'}\n' +
'\n' +
'interface UnviewableContentIdentifiedEvent extends NavigationEvent {\n' +
'    referrer: string;\n' +
'}\n' +
'\n' +
'interface CryptoOperation extends EventTarget {\n' +
'    algorithm: Algorithm;\n' +
'    oncomplete: (ev: any) => any;\n' +
'    onerror: (ev: any) => any;\n' +
'    onprogress: (ev: any) => any;\n' +
'    onabort: (ev: any) => any;\n' +
'    key: Key;\n' +
'    result: any;\n' +
'    abort(): void;\n' +
'    finish(): void;\n' +
'    process(buffer: ArrayBufferView): void;\n' +
'}\n' +
'\n' +
'declare var onpageshow: (ev: PageTransitionEvent) => any;\n' +
'declare var ondevicemotion: (ev: DeviceMotionEvent) => any;\n' +
'declare var devicePixelRatio: number;\n' +
'declare var msCrypto: Crypto;\n' +
'declare var ondeviceorientation: (ev: DeviceOrientationEvent) => any;\n' +
'declare var doNotTrack: string;\n' +
'declare var onmspointerenter: (ev: any) => any;\n' +
'declare var onpagehide: (ev: PageTransitionEvent) => any;\n' +
'declare var onmspointerleave: (ev: any) => any;\n' +
'declare var onpointerenter: (ev: PointerEvent) => any;\n' +
'declare var onpointerout: (ev: PointerEvent) => any;\n' +
'declare var onpointerdown: (ev: PointerEvent) => any;\n' +
'declare var onpointerup: (ev: PointerEvent) => any;\n' +
'declare var onpointercancel: (ev: PointerEvent) => any;\n' +
'declare var onpointerover: (ev: PointerEvent) => any;\n' +
'declare var onpointermove: (ev: PointerEvent) => any;\n' +
'declare var onpointerleave: (ev: PointerEvent) => any;\n' +
'\n' +
'\n' +
'/////////////////////////////\n' +
'/// WebGL APIs \n' +
'/////////////////////////////\n' +
'\n' +
'\n' +
'interface WebGLTexture extends WebGLObject {\n' +
'}\n' +
'\n' +
'interface OES_texture_float {\n' +
'}\n' +
'\n' +
'interface WebGLContextEvent extends Event {\n' +
'    statusMessage: string;\n' +
'}\n' +
'declare var WebGLContextEvent: {\n' +
'    prototype: WebGLContextEvent;\n' +
'    new (): WebGLContextEvent;\n' +
'}\n' +
'\n' +
'interface WebGLRenderbuffer extends WebGLObject {\n' +
'}\n' +
'\n' +
'interface WebGLUniformLocation {\n' +
'}\n' +
'\n' +
'interface WebGLActiveInfo {\n' +
'    name: string;\n' +
'    type: number;\n' +
'    size: number;\n' +
'}\n' +
'\n' +
'interface WEBGL_compressed_texture_s3tc {\n' +
'    COMPRESSED_RGBA_S3TC_DXT1_EXT: number;\n' +
'    COMPRESSED_RGBA_S3TC_DXT5_EXT: number;\n' +
'    COMPRESSED_RGBA_S3TC_DXT3_EXT: number;\n' +
'    COMPRESSED_RGB_S3TC_DXT1_EXT: number;\n' +
'}\n' +
'declare var WEBGL_compressed_texture_s3tc: {\n' +
'    COMPRESSED_RGBA_S3TC_DXT1_EXT: number;\n' +
'    COMPRESSED_RGBA_S3TC_DXT5_EXT: number;\n' +
'    COMPRESSED_RGBA_S3TC_DXT3_EXT: number;\n' +
'    COMPRESSED_RGB_S3TC_DXT1_EXT: number;\n' +
'}\n' +
'\n' +
'interface WebGLContextAttributes {\n' +
'    alpha: boolean;\n' +
'    depth: boolean;\n' +
'    stencil: boolean;\n' +
'    antialias: boolean;\n' +
'    premultipliedAlpha: boolean;\n' +
'    preserveDrawingBuffer: boolean;\n' +
'}\n' +
'\n' +
'interface WebGLRenderingContext {\n' +
'    drawingBufferWidth: number;\n' +
'    drawingBufferHeight: number;\n' +
'    canvas: HTMLCanvasElement;\n' +
'    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;\n' +
'    bindTexture(target: number, texture: WebGLTexture): void;\n' +
'    bufferData(target: number, data: ArrayBufferView, usage: number): void;\n' +
'    bufferData(target: number, data: ArrayBuffer, usage: number): void;\n' +
'    bufferData(target: number, size: number, usage: number): void;\n' +
'    depthMask(flag: boolean): void;\n' +
'    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;\n' +
'    vertexAttrib3fv(indx: number, values: number[]): void;\n' +
'    vertexAttrib3fv(indx: number, values: Float32Array): void;\n' +
'    linkProgram(program: WebGLProgram): void;\n' +
'    getSupportedExtensions(): string[];\n' +
'    bufferSubData(target: number, offset: number, data: ArrayBuffer): void;\n' +
'    bufferSubData(target: number, offset: number, data: ArrayBufferView): void;\n' +
'    vertexAttribPointer(indx: number, size: number, type: number, normalized: boolean, stride: number, offset: number): void;\n' +
'    polygonOffset(factor: number, units: number): void;\n' +
'    blendColor(red: number, green: number, blue: number, alpha: number): void;\n' +
'    createTexture(): WebGLTexture;\n' +
'    hint(target: number, mode: number): void;\n' +
'    getVertexAttrib(index: number, pname: number): any;\n' +
'    enableVertexAttribArray(index: number): void;\n' +
'    depthRange(zNear: number, zFar: number): void;\n' +
'    cullFace(mode: number): void;\n' +
'    createFramebuffer(): WebGLFramebuffer;\n' +
'    uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;\n' +
'    uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;\n' +
'    framebufferTexture2D(target: number, attachment: number, textarget: number, texture: WebGLTexture, level: number): void;\n' +
'    deleteFramebuffer(framebuffer: WebGLFramebuffer): void;\n' +
'    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;\n' +
'    compressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, data: ArrayBufferView): void;\n' +
'    uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;\n' +
'    uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;\n' +
'    getExtension(name: string): Object;\n' +
'    createProgram(): WebGLProgram;\n' +
'    deleteShader(shader: WebGLShader): void;\n' +
'    getAttachedShaders(program: WebGLProgram): WebGLShader[];\n' +
'    enable(cap: number): void;\n' +
'    blendEquation(mode: number): void;\n' +
'    texImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: ArrayBufferView): void;\n' +
'    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, image: HTMLImageElement): void;\n' +
'    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, canvas: HTMLCanvasElement): void;\n' +
'    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, video: HTMLVideoElement): void;\n' +
'    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, pixels: ImageData): void;\n' +
'    createBuffer(): WebGLBuffer;\n' +
'    deleteTexture(texture: WebGLTexture): void;\n' +
'    useProgram(program: WebGLProgram): void;\n' +
'    vertexAttrib2fv(indx: number, values: number[]): void;\n' +
'    vertexAttrib2fv(indx: number, values: Float32Array): void;\n' +
'    checkFramebufferStatus(target: number): number;\n' +
'    frontFace(mode: number): void;\n' +
'    getBufferParameter(target: number, pname: number): any;\n' +
'    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;\n' +
'    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, image: HTMLImageElement): void;\n' +
'    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, canvas: HTMLCanvasElement): void;\n' +
'    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, video: HTMLVideoElement): void;\n' +
'    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, pixels: ImageData): void;\n' +
'    copyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number): void;\n' +
'    getVertexAttribOffset(index: number, pname: number): number;\n' +
'    disableVertexAttribArray(index: number): void;\n' +
'    blendFunc(sfactor: number, dfactor: number): void;\n' +
'    drawElements(mode: number, count: number, type: number, offset: number): void;\n' +
'    isFramebuffer(framebuffer: WebGLFramebuffer): boolean;\n' +
'    uniform3iv(location: WebGLUniformLocation, v: number[]): void;\n' +
'    uniform3iv(location: WebGLUniformLocation, v: Int32Array): void;\n' +
'    lineWidth(width: number): void;\n' +
'    getShaderInfoLog(shader: WebGLShader): string;\n' +
'    getTexParameter(target: number, pname: number): any;\n' +
'    getParameter(pname: number): any;\n' +
'    getShaderPrecisionFormat(shadertype: number, precisiontype: number): WebGLShaderPrecisionFormat;\n' +
'    getContextAttributes(): WebGLContextAttributes;\n' +
'    vertexAttrib1f(indx: number, x: number): void;\n' +
'    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer): void;\n' +
'    compressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, data: ArrayBufferView): void;\n' +
'    isContextLost(): boolean;\n' +
'    uniform1iv(location: WebGLUniformLocation, v: number[]): void;\n' +
'    uniform1iv(location: WebGLUniformLocation, v: Int32Array): void;\n' +
'    getRenderbufferParameter(target: number, pname: number): any;\n' +
'    uniform2fv(location: WebGLUniformLocation, v: number[]): void;\n' +
'    uniform2fv(location: WebGLUniformLocation, v: Float32Array): void;\n' +
'    isTexture(texture: WebGLTexture): boolean;\n' +
'    getError(): number;\n' +
'    shaderSource(shader: WebGLShader, source: string): void;\n' +
'    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer): void;\n' +
'    stencilMask(mask: number): void;\n' +
'    bindBuffer(target: number, buffer: WebGLBuffer): void;\n' +
'    getAttribLocation(program: WebGLProgram, name: string): number;\n' +
'    uniform3i(location: WebGLUniformLocation, x: number, y: number, z: number): void;\n' +
'    blendEquationSeparate(modeRGB: number, modeAlpha: number): void;\n' +
'    clear(mask: number): void;\n' +
'    blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;\n' +
'    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void;\n' +
'    readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;\n' +
'    scissor(x: number, y: number, width: number, height: number): void;\n' +
'    uniform2i(location: WebGLUniformLocation, x: number, y: number): void;\n' +
'    getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo;\n' +
'    getShaderSource(shader: WebGLShader): string;\n' +
'    generateMipmap(target: number): void;\n' +
'    bindAttribLocation(program: WebGLProgram, index: number, name: string): void;\n' +
'    uniform1fv(location: WebGLUniformLocation, v: number[]): void;\n' +
'    uniform1fv(location: WebGLUniformLocation, v: Float32Array): void;\n' +
'    uniform2iv(location: WebGLUniformLocation, v: number[]): void;\n' +
'    uniform2iv(location: WebGLUniformLocation, v: Int32Array): void;\n' +
'    stencilOp(fail: number, zfail: number, zpass: number): void;\n' +
'    uniform4fv(location: WebGLUniformLocation, v: number[]): void;\n' +
'    uniform4fv(location: WebGLUniformLocation, v: Float32Array): void;\n' +
'    vertexAttrib1fv(indx: number, values: number[]): void;\n' +
'    vertexAttrib1fv(indx: number, values: Float32Array): void;\n' +
'    flush(): void;\n' +
'    uniform4f(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;\n' +
'    deleteProgram(program: WebGLProgram): void;\n' +
'    isRenderbuffer(renderbuffer: WebGLRenderbuffer): boolean;\n' +
'    uniform1i(location: WebGLUniformLocation, x: number): void;\n' +
'    getProgramParameter(program: WebGLProgram, pname: number): any;\n' +
'    getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo;\n' +
'    stencilFunc(func: number, ref: number, mask: number): void;\n' +
'    pixelStorei(pname: number, param: number): void;\n' +
'    disable(cap: number): void;\n' +
'    vertexAttrib4fv(indx: number, values: number[]): void;\n' +
'    vertexAttrib4fv(indx: number, values: Float32Array): void;\n' +
'    createRenderbuffer(): WebGLRenderbuffer;\n' +
'    isBuffer(buffer: WebGLBuffer): boolean;\n' +
'    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;\n' +
'    getFramebufferAttachmentParameter(target: number, attachment: number, pname: number): any;\n' +
'    uniform4i(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;\n' +
'    sampleCoverage(value: number, invert: boolean): void;\n' +
'    depthFunc(func: number): void;\n' +
'    texParameterf(target: number, pname: number, param: number): void;\n' +
'    vertexAttrib3f(indx: number, x: number, y: number, z: number): void;\n' +
'    drawArrays(mode: number, first: number, count: number): void;\n' +
'    texParameteri(target: number, pname: number, param: number): void;\n' +
'    vertexAttrib4f(indx: number, x: number, y: number, z: number, w: number): void;\n' +
'    getShaderParameter(shader: WebGLShader, pname: number): any;\n' +
'    clearDepth(depth: number): void;\n' +
'    activeTexture(texture: number): void;\n' +
'    viewport(x: number, y: number, width: number, height: number): void;\n' +
'    detachShader(program: WebGLProgram, shader: WebGLShader): void;\n' +
'    uniform1f(location: WebGLUniformLocation, x: number): void;\n' +
'    uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;\n' +
'    uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;\n' +
'    deleteBuffer(buffer: WebGLBuffer): void;\n' +
'    copyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void;\n' +
'    uniform3fv(location: WebGLUniformLocation, v: number[]): void;\n' +
'    uniform3fv(location: WebGLUniformLocation, v: Float32Array): void;\n' +
'    stencilMaskSeparate(face: number, mask: number): void;\n' +
'    attachShader(program: WebGLProgram, shader: WebGLShader): void;\n' +
'    compileShader(shader: WebGLShader): void;\n' +
'    clearColor(red: number, green: number, blue: number, alpha: number): void;\n' +
'    isShader(shader: WebGLShader): boolean;\n' +
'    clearStencil(s: number): void;\n' +
'    framebufferRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: WebGLRenderbuffer): void;\n' +
'    finish(): void;\n' +
'    uniform2f(location: WebGLUniformLocation, x: number, y: number): void;\n' +
'    renderbufferStorage(target: number, internalformat: number, width: number, height: number): void;\n' +
'    uniform3f(location: WebGLUniformLocation, x: number, y: number, z: number): void;\n' +
'    getProgramInfoLog(program: WebGLProgram): string;\n' +
'    validateProgram(program: WebGLProgram): void;\n' +
'    isEnabled(cap: number): boolean;\n' +
'    vertexAttrib2f(indx: number, x: number, y: number): void;\n' +
'    isProgram(program: WebGLProgram): boolean;\n' +
'    createShader(type: number): WebGLShader;\n' +
'    bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer): void;\n' +
'    uniform4iv(location: WebGLUniformLocation, v: number[]): void;\n' +
'    uniform4iv(location: WebGLUniformLocation, v: Int32Array): void;\n' +
'    DEPTH_FUNC: number;\n' +
'    DEPTH_COMPONENT16: number;\n' +
'    REPLACE: number;\n' +
'    REPEAT: number;\n' +
'    VERTEX_ATTRIB_ARRAY_ENABLED: number;\n' +
'    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;\n' +
'    STENCIL_BUFFER_BIT: number;\n' +
'    RENDERER: number;\n' +
'    STENCIL_BACK_REF: number;\n' +
'    TEXTURE26: number;\n' +
'    RGB565: number;\n' +
'    DITHER: number;\n' +
'    CONSTANT_COLOR: number;\n' +
'    GENERATE_MIPMAP_HINT: number;\n' +
'    POINTS: number;\n' +
'    DECR: number;\n' +
'    INT_VEC3: number;\n' +
'    TEXTURE28: number;\n' +
'    ONE_MINUS_CONSTANT_ALPHA: number;\n' +
'    BACK: number;\n' +
'    RENDERBUFFER_STENCIL_SIZE: number;\n' +
'    UNPACK_FLIP_Y_WEBGL: number;\n' +
'    BLEND: number;\n' +
'    TEXTURE9: number;\n' +
'    ARRAY_BUFFER_BINDING: number;\n' +
'    MAX_VIEWPORT_DIMS: number;\n' +
'    INVALID_FRAMEBUFFER_OPERATION: number;\n' +
'    TEXTURE: number;\n' +
'    TEXTURE0: number;\n' +
'    TEXTURE31: number;\n' +
'    TEXTURE24: number;\n' +
'    HIGH_INT: number;\n' +
'    RENDERBUFFER_BINDING: number;\n' +
'    BLEND_COLOR: number;\n' +
'    FASTEST: number;\n' +
'    STENCIL_WRITEMASK: number;\n' +
'    ALIASED_POINT_SIZE_RANGE: number;\n' +
'    TEXTURE12: number;\n' +
'    DST_ALPHA: number;\n' +
'    BLEND_EQUATION_RGB: number;\n' +
'    FRAMEBUFFER_COMPLETE: number;\n' +
'    NEAREST_MIPMAP_NEAREST: number;\n' +
'    VERTEX_ATTRIB_ARRAY_SIZE: number;\n' +
'    TEXTURE3: number;\n' +
'    DEPTH_WRITEMASK: number;\n' +
'    CONTEXT_LOST_WEBGL: number;\n' +
'    INVALID_VALUE: number;\n' +
'    TEXTURE_MAG_FILTER: number;\n' +
'    ONE_MINUS_CONSTANT_COLOR: number;\n' +
'    ONE_MINUS_SRC_ALPHA: number;\n' +
'    TEXTURE_CUBE_MAP_POSITIVE_Z: number;\n' +
'    NOTEQUAL: number;\n' +
'    ALPHA: number;\n' +
'    DEPTH_STENCIL: number;\n' +
'    MAX_VERTEX_UNIFORM_VECTORS: number;\n' +
'    DEPTH_COMPONENT: number;\n' +
'    RENDERBUFFER_RED_SIZE: number;\n' +
'    TEXTURE20: number;\n' +
'    RED_BITS: number;\n' +
'    RENDERBUFFER_BLUE_SIZE: number;\n' +
'    SCISSOR_BOX: number;\n' +
'    VENDOR: number;\n' +
'    FRONT_AND_BACK: number;\n' +
'    CONSTANT_ALPHA: number;\n' +
'    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;\n' +
'    NEAREST: number;\n' +
'    CULL_FACE: number;\n' +
'    ALIASED_LINE_WIDTH_RANGE: number;\n' +
'    TEXTURE19: number;\n' +
'    FRONT: number;\n' +
'    DEPTH_CLEAR_VALUE: number;\n' +
'    GREEN_BITS: number;\n' +
'    TEXTURE29: number;\n' +
'    TEXTURE23: number;\n' +
'    MAX_RENDERBUFFER_SIZE: number;\n' +
'    STENCIL_ATTACHMENT: number;\n' +
'    TEXTURE27: number;\n' +
'    BOOL_VEC2: number;\n' +
'    OUT_OF_MEMORY: number;\n' +
'    MIRRORED_REPEAT: number;\n' +
'    POLYGON_OFFSET_UNITS: number;\n' +
'    TEXTURE_MIN_FILTER: number;\n' +
'    STENCIL_BACK_PASS_DEPTH_PASS: number;\n' +
'    LINE_LOOP: number;\n' +
'    FLOAT_MAT3: number;\n' +
'    TEXTURE14: number;\n' +
'    LINEAR: number;\n' +
'    RGB5_A1: number;\n' +
'    ONE_MINUS_SRC_COLOR: number;\n' +
'    SAMPLE_COVERAGE_INVERT: number;\n' +
'    DONT_CARE: number;\n' +
'    FRAMEBUFFER_BINDING: number;\n' +
'    RENDERBUFFER_ALPHA_SIZE: number;\n' +
'    STENCIL_REF: number;\n' +
'    ZERO: number;\n' +
'    DECR_WRAP: number;\n' +
'    SAMPLE_COVERAGE: number;\n' +
'    STENCIL_BACK_FUNC: number;\n' +
'    TEXTURE30: number;\n' +
'    VIEWPORT: number;\n' +
'    STENCIL_BITS: number;\n' +
'    FLOAT: number;\n' +
'    COLOR_WRITEMASK: number;\n' +
'    SAMPLE_COVERAGE_VALUE: number;\n' +
'    TEXTURE_CUBE_MAP_NEGATIVE_Y: number;\n' +
'    STENCIL_BACK_FAIL: number;\n' +
'    FLOAT_MAT4: number;\n' +
'    UNSIGNED_SHORT_4_4_4_4: number;\n' +
'    TEXTURE6: number;\n' +
'    RENDERBUFFER_WIDTH: number;\n' +
'    RGBA4: number;\n' +
'    ALWAYS: number;\n' +
'    BLEND_EQUATION_ALPHA: number;\n' +
'    COLOR_BUFFER_BIT: number;\n' +
'    TEXTURE_CUBE_MAP: number;\n' +
'    DEPTH_BUFFER_BIT: number;\n' +
'    STENCIL_CLEAR_VALUE: number;\n' +
'    BLEND_EQUATION: number;\n' +
'    RENDERBUFFER_GREEN_SIZE: number;\n' +
'    NEAREST_MIPMAP_LINEAR: number;\n' +
'    VERTEX_ATTRIB_ARRAY_TYPE: number;\n' +
'    INCR_WRAP: number;\n' +
'    ONE_MINUS_DST_COLOR: number;\n' +
'    HIGH_FLOAT: number;\n' +
'    BYTE: number;\n' +
'    FRONT_FACE: number;\n' +
'    SAMPLE_ALPHA_TO_COVERAGE: number;\n' +
'    CCW: number;\n' +
'    TEXTURE13: number;\n' +
'    MAX_VERTEX_ATTRIBS: number;\n' +
'    MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;\n' +
'    TEXTURE_WRAP_T: number;\n' +
'    UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;\n' +
'    FLOAT_VEC2: number;\n' +
'    LUMINANCE: number;\n' +
'    GREATER: number;\n' +
'    INT_VEC2: number;\n' +
'    VALIDATE_STATUS: number;\n' +
'    FRAMEBUFFER: number;\n' +
'    FRAMEBUFFER_UNSUPPORTED: number;\n' +
'    TEXTURE5: number;\n' +
'    FUNC_SUBTRACT: number;\n' +
'    BLEND_DST_ALPHA: number;\n' +
'    SAMPLER_CUBE: number;\n' +
'    ONE_MINUS_DST_ALPHA: number;\n' +
'    LESS: number;\n' +
'    TEXTURE_CUBE_MAP_POSITIVE_X: number;\n' +
'    BLUE_BITS: number;\n' +
'    DEPTH_TEST: number;\n' +
'    VERTEX_ATTRIB_ARRAY_STRIDE: number;\n' +
'    DELETE_STATUS: number;\n' +
'    TEXTURE18: number;\n' +
'    POLYGON_OFFSET_FACTOR: number;\n' +
'    UNSIGNED_INT: number;\n' +
'    TEXTURE_2D: number;\n' +
'    DST_COLOR: number;\n' +
'    FLOAT_MAT2: number;\n' +
'    COMPRESSED_TEXTURE_FORMATS: number;\n' +
'    MAX_FRAGMENT_UNIFORM_VECTORS: number;\n' +
'    DEPTH_STENCIL_ATTACHMENT: number;\n' +
'    LUMINANCE_ALPHA: number;\n' +
'    CW: number;\n' +
'    VERTEX_ATTRIB_ARRAY_NORMALIZED: number;\n' +
'    TEXTURE_CUBE_MAP_NEGATIVE_Z: number;\n' +
'    LINEAR_MIPMAP_LINEAR: number;\n' +
'    BUFFER_SIZE: number;\n' +
'    SAMPLE_BUFFERS: number;\n' +
'    TEXTURE15: number;\n' +
'    ACTIVE_TEXTURE: number;\n' +
'    VERTEX_SHADER: number;\n' +
'    TEXTURE22: number;\n' +
'    VERTEX_ATTRIB_ARRAY_POINTER: number;\n' +
'    INCR: number;\n' +
'    COMPILE_STATUS: number;\n' +
'    MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;\n' +
'    TEXTURE7: number;\n' +
'    UNSIGNED_SHORT_5_5_5_1: number;\n' +
'    DEPTH_BITS: number;\n' +
'    RGBA: number;\n' +
'    TRIANGLE_STRIP: number;\n' +
'    COLOR_CLEAR_VALUE: number;\n' +
'    BROWSER_DEFAULT_WEBGL: number;\n' +
'    INVALID_ENUM: number;\n' +
'    SCISSOR_TEST: number;\n' +
'    LINE_STRIP: number;\n' +
'    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;\n' +
'    STENCIL_FUNC: number;\n' +
'    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;\n' +
'    RENDERBUFFER_HEIGHT: number;\n' +
'    TEXTURE8: number;\n' +
'    TRIANGLES: number;\n' +
'    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;\n' +
'    STENCIL_BACK_VALUE_MASK: number;\n' +
'    TEXTURE25: number;\n' +
'    RENDERBUFFER: number;\n' +
'    LEQUAL: number;\n' +
'    TEXTURE1: number;\n' +
'    STENCIL_INDEX8: number;\n' +
'    FUNC_ADD: number;\n' +
'    STENCIL_FAIL: number;\n' +
'    BLEND_SRC_ALPHA: number;\n' +
'    BOOL: number;\n' +
'    ALPHA_BITS: number;\n' +
'    LOW_INT: number;\n' +
'    TEXTURE10: number;\n' +
'    SRC_COLOR: number;\n' +
'    MAX_VARYING_VECTORS: number;\n' +
'    BLEND_DST_RGB: number;\n' +
'    TEXTURE_BINDING_CUBE_MAP: number;\n' +
'    STENCIL_INDEX: number;\n' +
'    TEXTURE_BINDING_2D: number;\n' +
'    MEDIUM_INT: number;\n' +
'    SHADER_TYPE: number;\n' +
'    POLYGON_OFFSET_FILL: number;\n' +
'    DYNAMIC_DRAW: number;\n' +
'    TEXTURE4: number;\n' +
'    STENCIL_BACK_PASS_DEPTH_FAIL: number;\n' +
'    STREAM_DRAW: number;\n' +
'    MAX_CUBE_MAP_TEXTURE_SIZE: number;\n' +
'    TEXTURE17: number;\n' +
'    TRIANGLE_FAN: number;\n' +
'    UNPACK_ALIGNMENT: number;\n' +
'    CURRENT_PROGRAM: number;\n' +
'    LINES: number;\n' +
'    INVALID_OPERATION: number;\n' +
'    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;\n' +
'    LINEAR_MIPMAP_NEAREST: number;\n' +
'    CLAMP_TO_EDGE: number;\n' +
'    RENDERBUFFER_DEPTH_SIZE: number;\n' +
'    TEXTURE_WRAP_S: number;\n' +
'    ELEMENT_ARRAY_BUFFER: number;\n' +
'    UNSIGNED_SHORT_5_6_5: number;\n' +
'    ACTIVE_UNIFORMS: number;\n' +
'    FLOAT_VEC3: number;\n' +
'    NO_ERROR: number;\n' +
'    ATTACHED_SHADERS: number;\n' +
'    DEPTH_ATTACHMENT: number;\n' +
'    TEXTURE11: number;\n' +
'    STENCIL_TEST: number;\n' +
'    ONE: number;\n' +
'    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;\n' +
'    STATIC_DRAW: number;\n' +
'    GEQUAL: number;\n' +
'    BOOL_VEC4: number;\n' +
'    COLOR_ATTACHMENT0: number;\n' +
'    PACK_ALIGNMENT: number;\n' +
'    MAX_TEXTURE_SIZE: number;\n' +
'    STENCIL_PASS_DEPTH_FAIL: number;\n' +
'    CULL_FACE_MODE: number;\n' +
'    TEXTURE16: number;\n' +
'    STENCIL_BACK_WRITEMASK: number;\n' +
'    SRC_ALPHA: number;\n' +
'    UNSIGNED_SHORT: number;\n' +
'    TEXTURE21: number;\n' +
'    FUNC_REVERSE_SUBTRACT: number;\n' +
'    SHADING_LANGUAGE_VERSION: number;\n' +
'    EQUAL: number;\n' +
'    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;\n' +
'    BOOL_VEC3: number;\n' +
'    SAMPLER_2D: number;\n' +
'    TEXTURE_CUBE_MAP_NEGATIVE_X: number;\n' +
'    MAX_TEXTURE_IMAGE_UNITS: number;\n' +
'    TEXTURE_CUBE_MAP_POSITIVE_Y: number;\n' +
'    RENDERBUFFER_INTERNAL_FORMAT: number;\n' +
'    STENCIL_VALUE_MASK: number;\n' +
'    ELEMENT_ARRAY_BUFFER_BINDING: number;\n' +
'    ARRAY_BUFFER: number;\n' +
'    DEPTH_RANGE: number;\n' +
'    NICEST: number;\n' +
'    ACTIVE_ATTRIBUTES: number;\n' +
'    NEVER: number;\n' +
'    FLOAT_VEC4: number;\n' +
'    CURRENT_VERTEX_ATTRIB: number;\n' +
'    STENCIL_PASS_DEPTH_PASS: number;\n' +
'    INVERT: number;\n' +
'    LINK_STATUS: number;\n' +
'    RGB: number;\n' +
'    INT_VEC4: number;\n' +
'    TEXTURE2: number;\n' +
'    UNPACK_COLORSPACE_CONVERSION_WEBGL: number;\n' +
'    MEDIUM_FLOAT: number;\n' +
'    SRC_ALPHA_SATURATE: number;\n' +
'    BUFFER_USAGE: number;\n' +
'    SHORT: number;\n' +
'    NONE: number;\n' +
'    UNSIGNED_BYTE: number;\n' +
'    INT: number;\n' +
'    SUBPIXEL_BITS: number;\n' +
'    KEEP: number;\n' +
'    SAMPLES: number;\n' +
'    FRAGMENT_SHADER: number;\n' +
'    LINE_WIDTH: number;\n' +
'    BLEND_SRC_RGB: number;\n' +
'    LOW_FLOAT: number;\n' +
'    VERSION: number;\n' +
'}\n' +
'declare var WebGLRenderingContext: {\n' +
'    DEPTH_FUNC: number;\n' +
'    DEPTH_COMPONENT16: number;\n' +
'    REPLACE: number;\n' +
'    REPEAT: number;\n' +
'    VERTEX_ATTRIB_ARRAY_ENABLED: number;\n' +
'    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;\n' +
'    STENCIL_BUFFER_BIT: number;\n' +
'    RENDERER: number;\n' +
'    STENCIL_BACK_REF: number;\n' +
'    TEXTURE26: number;\n' +
'    RGB565: number;\n' +
'    DITHER: number;\n' +
'    CONSTANT_COLOR: number;\n' +
'    GENERATE_MIPMAP_HINT: number;\n' +
'    POINTS: number;\n' +
'    DECR: number;\n' +
'    INT_VEC3: number;\n' +
'    TEXTURE28: number;\n' +
'    ONE_MINUS_CONSTANT_ALPHA: number;\n' +
'    BACK: number;\n' +
'    RENDERBUFFER_STENCIL_SIZE: number;\n' +
'    UNPACK_FLIP_Y_WEBGL: number;\n' +
'    BLEND: number;\n' +
'    TEXTURE9: number;\n' +
'    ARRAY_BUFFER_BINDING: number;\n' +
'    MAX_VIEWPORT_DIMS: number;\n' +
'    INVALID_FRAMEBUFFER_OPERATION: number;\n' +
'    TEXTURE: number;\n' +
'    TEXTURE0: number;\n' +
'    TEXTURE31: number;\n' +
'    TEXTURE24: number;\n' +
'    HIGH_INT: number;\n' +
'    RENDERBUFFER_BINDING: number;\n' +
'    BLEND_COLOR: number;\n' +
'    FASTEST: number;\n' +
'    STENCIL_WRITEMASK: number;\n' +
'    ALIASED_POINT_SIZE_RANGE: number;\n' +
'    TEXTURE12: number;\n' +
'    DST_ALPHA: number;\n' +
'    BLEND_EQUATION_RGB: number;\n' +
'    FRAMEBUFFER_COMPLETE: number;\n' +
'    NEAREST_MIPMAP_NEAREST: number;\n' +
'    VERTEX_ATTRIB_ARRAY_SIZE: number;\n' +
'    TEXTURE3: number;\n' +
'    DEPTH_WRITEMASK: number;\n' +
'    CONTEXT_LOST_WEBGL: number;\n' +
'    INVALID_VALUE: number;\n' +
'    TEXTURE_MAG_FILTER: number;\n' +
'    ONE_MINUS_CONSTANT_COLOR: number;\n' +
'    ONE_MINUS_SRC_ALPHA: number;\n' +
'    TEXTURE_CUBE_MAP_POSITIVE_Z: number;\n' +
'    NOTEQUAL: number;\n' +
'    ALPHA: number;\n' +
'    DEPTH_STENCIL: number;\n' +
'    MAX_VERTEX_UNIFORM_VECTORS: number;\n' +
'    DEPTH_COMPONENT: number;\n' +
'    RENDERBUFFER_RED_SIZE: number;\n' +
'    TEXTURE20: number;\n' +
'    RED_BITS: number;\n' +
'    RENDERBUFFER_BLUE_SIZE: number;\n' +
'    SCISSOR_BOX: number;\n' +
'    VENDOR: number;\n' +
'    FRONT_AND_BACK: number;\n' +
'    CONSTANT_ALPHA: number;\n' +
'    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;\n' +
'    NEAREST: number;\n' +
'    CULL_FACE: number;\n' +
'    ALIASED_LINE_WIDTH_RANGE: number;\n' +
'    TEXTURE19: number;\n' +
'    FRONT: number;\n' +
'    DEPTH_CLEAR_VALUE: number;\n' +
'    GREEN_BITS: number;\n' +
'    TEXTURE29: number;\n' +
'    TEXTURE23: number;\n' +
'    MAX_RENDERBUFFER_SIZE: number;\n' +
'    STENCIL_ATTACHMENT: number;\n' +
'    TEXTURE27: number;\n' +
'    BOOL_VEC2: number;\n' +
'    OUT_OF_MEMORY: number;\n' +
'    MIRRORED_REPEAT: number;\n' +
'    POLYGON_OFFSET_UNITS: number;\n' +
'    TEXTURE_MIN_FILTER: number;\n' +
'    STENCIL_BACK_PASS_DEPTH_PASS: number;\n' +
'    LINE_LOOP: number;\n' +
'    FLOAT_MAT3: number;\n' +
'    TEXTURE14: number;\n' +
'    LINEAR: number;\n' +
'    RGB5_A1: number;\n' +
'    ONE_MINUS_SRC_COLOR: number;\n' +
'    SAMPLE_COVERAGE_INVERT: number;\n' +
'    DONT_CARE: number;\n' +
'    FRAMEBUFFER_BINDING: number;\n' +
'    RENDERBUFFER_ALPHA_SIZE: number;\n' +
'    STENCIL_REF: number;\n' +
'    ZERO: number;\n' +
'    DECR_WRAP: number;\n' +
'    SAMPLE_COVERAGE: number;\n' +
'    STENCIL_BACK_FUNC: number;\n' +
'    TEXTURE30: number;\n' +
'    VIEWPORT: number;\n' +
'    STENCIL_BITS: number;\n' +
'    FLOAT: number;\n' +
'    COLOR_WRITEMASK: number;\n' +
'    SAMPLE_COVERAGE_VALUE: number;\n' +
'    TEXTURE_CUBE_MAP_NEGATIVE_Y: number;\n' +
'    STENCIL_BACK_FAIL: number;\n' +
'    FLOAT_MAT4: number;\n' +
'    UNSIGNED_SHORT_4_4_4_4: number;\n' +
'    TEXTURE6: number;\n' +
'    RENDERBUFFER_WIDTH: number;\n' +
'    RGBA4: number;\n' +
'    ALWAYS: number;\n' +
'    BLEND_EQUATION_ALPHA: number;\n' +
'    COLOR_BUFFER_BIT: number;\n' +
'    TEXTURE_CUBE_MAP: number;\n' +
'    DEPTH_BUFFER_BIT: number;\n' +
'    STENCIL_CLEAR_VALUE: number;\n' +
'    BLEND_EQUATION: number;\n' +
'    RENDERBUFFER_GREEN_SIZE: number;\n' +
'    NEAREST_MIPMAP_LINEAR: number;\n' +
'    VERTEX_ATTRIB_ARRAY_TYPE: number;\n' +
'    INCR_WRAP: number;\n' +
'    ONE_MINUS_DST_COLOR: number;\n' +
'    HIGH_FLOAT: number;\n' +
'    BYTE: number;\n' +
'    FRONT_FACE: number;\n' +
'    SAMPLE_ALPHA_TO_COVERAGE: number;\n' +
'    CCW: number;\n' +
'    TEXTURE13: number;\n' +
'    MAX_VERTEX_ATTRIBS: number;\n' +
'    MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;\n' +
'    TEXTURE_WRAP_T: number;\n' +
'    UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;\n' +
'    FLOAT_VEC2: number;\n' +
'    LUMINANCE: number;\n' +
'    GREATER: number;\n' +
'    INT_VEC2: number;\n' +
'    VALIDATE_STATUS: number;\n' +
'    FRAMEBUFFER: number;\n' +
'    FRAMEBUFFER_UNSUPPORTED: number;\n' +
'    TEXTURE5: number;\n' +
'    FUNC_SUBTRACT: number;\n' +
'    BLEND_DST_ALPHA: number;\n' +
'    SAMPLER_CUBE: number;\n' +
'    ONE_MINUS_DST_ALPHA: number;\n' +
'    LESS: number;\n' +
'    TEXTURE_CUBE_MAP_POSITIVE_X: number;\n' +
'    BLUE_BITS: number;\n' +
'    DEPTH_TEST: number;\n' +
'    VERTEX_ATTRIB_ARRAY_STRIDE: number;\n' +
'    DELETE_STATUS: number;\n' +
'    TEXTURE18: number;\n' +
'    POLYGON_OFFSET_FACTOR: number;\n' +
'    UNSIGNED_INT: number;\n' +
'    TEXTURE_2D: number;\n' +
'    DST_COLOR: number;\n' +
'    FLOAT_MAT2: number;\n' +
'    COMPRESSED_TEXTURE_FORMATS: number;\n' +
'    MAX_FRAGMENT_UNIFORM_VECTORS: number;\n' +
'    DEPTH_STENCIL_ATTACHMENT: number;\n' +
'    LUMINANCE_ALPHA: number;\n' +
'    CW: number;\n' +
'    VERTEX_ATTRIB_ARRAY_NORMALIZED: number;\n' +
'    TEXTURE_CUBE_MAP_NEGATIVE_Z: number;\n' +
'    LINEAR_MIPMAP_LINEAR: number;\n' +
'    BUFFER_SIZE: number;\n' +
'    SAMPLE_BUFFERS: number;\n' +
'    TEXTURE15: number;\n' +
'    ACTIVE_TEXTURE: number;\n' +
'    VERTEX_SHADER: number;\n' +
'    TEXTURE22: number;\n' +
'    VERTEX_ATTRIB_ARRAY_POINTER: number;\n' +
'    INCR: number;\n' +
'    COMPILE_STATUS: number;\n' +
'    MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;\n' +
'    TEXTURE7: number;\n' +
'    UNSIGNED_SHORT_5_5_5_1: number;\n' +
'    DEPTH_BITS: number;\n' +
'    RGBA: number;\n' +
'    TRIANGLE_STRIP: number;\n' +
'    COLOR_CLEAR_VALUE: number;\n' +
'    BROWSER_DEFAULT_WEBGL: number;\n' +
'    INVALID_ENUM: number;\n' +
'    SCISSOR_TEST: number;\n' +
'    LINE_STRIP: number;\n' +
'    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;\n' +
'    STENCIL_FUNC: number;\n' +
'    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;\n' +
'    RENDERBUFFER_HEIGHT: number;\n' +
'    TEXTURE8: number;\n' +
'    TRIANGLES: number;\n' +
'    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;\n' +
'    STENCIL_BACK_VALUE_MASK: number;\n' +
'    TEXTURE25: number;\n' +
'    RENDERBUFFER: number;\n' +
'    LEQUAL: number;\n' +
'    TEXTURE1: number;\n' +
'    STENCIL_INDEX8: number;\n' +
'    FUNC_ADD: number;\n' +
'    STENCIL_FAIL: number;\n' +
'    BLEND_SRC_ALPHA: number;\n' +
'    BOOL: number;\n' +
'    ALPHA_BITS: number;\n' +
'    LOW_INT: number;\n' +
'    TEXTURE10: number;\n' +
'    SRC_COLOR: number;\n' +
'    MAX_VARYING_VECTORS: number;\n' +
'    BLEND_DST_RGB: number;\n' +
'    TEXTURE_BINDING_CUBE_MAP: number;\n' +
'    STENCIL_INDEX: number;\n' +
'    TEXTURE_BINDING_2D: number;\n' +
'    MEDIUM_INT: number;\n' +
'    SHADER_TYPE: number;\n' +
'    POLYGON_OFFSET_FILL: number;\n' +
'    DYNAMIC_DRAW: number;\n' +
'    TEXTURE4: number;\n' +
'    STENCIL_BACK_PASS_DEPTH_FAIL: number;\n' +
'    STREAM_DRAW: number;\n' +
'    MAX_CUBE_MAP_TEXTURE_SIZE: number;\n' +
'    TEXTURE17: number;\n' +
'    TRIANGLE_FAN: number;\n' +
'    UNPACK_ALIGNMENT: number;\n' +
'    CURRENT_PROGRAM: number;\n' +
'    LINES: number;\n' +
'    INVALID_OPERATION: number;\n' +
'    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;\n' +
'    LINEAR_MIPMAP_NEAREST: number;\n' +
'    CLAMP_TO_EDGE: number;\n' +
'    RENDERBUFFER_DEPTH_SIZE: number;\n' +
'    TEXTURE_WRAP_S: number;\n' +
'    ELEMENT_ARRAY_BUFFER: number;\n' +
'    UNSIGNED_SHORT_5_6_5: number;\n' +
'    ACTIVE_UNIFORMS: number;\n' +
'    FLOAT_VEC3: number;\n' +
'    NO_ERROR: number;\n' +
'    ATTACHED_SHADERS: number;\n' +
'    DEPTH_ATTACHMENT: number;\n' +
'    TEXTURE11: number;\n' +
'    STENCIL_TEST: number;\n' +
'    ONE: number;\n' +
'    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;\n' +
'    STATIC_DRAW: number;\n' +
'    GEQUAL: number;\n' +
'    BOOL_VEC4: number;\n' +
'    COLOR_ATTACHMENT0: number;\n' +
'    PACK_ALIGNMENT: number;\n' +
'    MAX_TEXTURE_SIZE: number;\n' +
'    STENCIL_PASS_DEPTH_FAIL: number;\n' +
'    CULL_FACE_MODE: number;\n' +
'    TEXTURE16: number;\n' +
'    STENCIL_BACK_WRITEMASK: number;\n' +
'    SRC_ALPHA: number;\n' +
'    UNSIGNED_SHORT: number;\n' +
'    TEXTURE21: number;\n' +
'    FUNC_REVERSE_SUBTRACT: number;\n' +
'    SHADING_LANGUAGE_VERSION: number;\n' +
'    EQUAL: number;\n' +
'    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;\n' +
'    BOOL_VEC3: number;\n' +
'    SAMPLER_2D: number;\n' +
'    TEXTURE_CUBE_MAP_NEGATIVE_X: number;\n' +
'    MAX_TEXTURE_IMAGE_UNITS: number;\n' +
'    TEXTURE_CUBE_MAP_POSITIVE_Y: number;\n' +
'    RENDERBUFFER_INTERNAL_FORMAT: number;\n' +
'    STENCIL_VALUE_MASK: number;\n' +
'    ELEMENT_ARRAY_BUFFER_BINDING: number;\n' +
'    ARRAY_BUFFER: number;\n' +
'    DEPTH_RANGE: number;\n' +
'    NICEST: number;\n' +
'    ACTIVE_ATTRIBUTES: number;\n' +
'    NEVER: number;\n' +
'    FLOAT_VEC4: number;\n' +
'    CURRENT_VERTEX_ATTRIB: number;\n' +
'    STENCIL_PASS_DEPTH_PASS: number;\n' +
'    INVERT: number;\n' +
'    LINK_STATUS: number;\n' +
'    RGB: number;\n' +
'    INT_VEC4: number;\n' +
'    TEXTURE2: number;\n' +
'    UNPACK_COLORSPACE_CONVERSION_WEBGL: number;\n' +
'    MEDIUM_FLOAT: number;\n' +
'    SRC_ALPHA_SATURATE: number;\n' +
'    BUFFER_USAGE: number;\n' +
'    SHORT: number;\n' +
'    NONE: number;\n' +
'    UNSIGNED_BYTE: number;\n' +
'    INT: number;\n' +
'    SUBPIXEL_BITS: number;\n' +
'    KEEP: number;\n' +
'    SAMPLES: number;\n' +
'    FRAGMENT_SHADER: number;\n' +
'    LINE_WIDTH: number;\n' +
'    BLEND_SRC_RGB: number;\n' +
'    LOW_FLOAT: number;\n' +
'    VERSION: number;\n' +
'}\n' +
'\n' +
'interface WebGLProgram extends WebGLObject {\n' +
'}\n' +
'\n' +
'interface OES_standard_derivatives {\n' +
'    FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;\n' +
'}\n' +
'declare var OES_standard_derivatives: {\n' +
'    FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;\n' +
'}\n' +
'\n' +
'interface WebGLFramebuffer extends WebGLObject {\n' +
'}\n' +
'\n' +
'interface WebGLShader extends WebGLObject {\n' +
'}\n' +
'\n' +
'interface OES_texture_float_linear {\n' +
'}\n' +
'\n' +
'interface WebGLObject {\n' +
'}\n' +
'\n' +
'interface WebGLBuffer extends WebGLObject {\n' +
'}\n' +
'\n' +
'interface WebGLShaderPrecisionFormat {\n' +
'    rangeMin: number;\n' +
'    rangeMax: number;\n' +
'    precision: number;\n' +
'}\n' +
'\n' +
'interface EXT_texture_filter_anisotropic {\n' +
'    TEXTURE_MAX_ANISOTROPY_EXT: number;\n' +
'    MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;\n' +
'}\n' +
'declare var EXT_texture_filter_anisotropic: {\n' +
'    TEXTURE_MAX_ANISOTROPY_EXT: number;\n' +
'    MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;\n' +
'}\n' +
'\n' +
'\n' +
'/////////////////////////////\n' +
'/// addEventListener overloads\n' +
'/////////////////////////////\n' +
'\n' +
'interface HTMLElement {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface Document {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msthumbnailclick", listener: (ev: MSSiteModeEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "stop", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mssitemodejumplistitemremoved", listener: (ev: MSSiteModeEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "selectionchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "storagecommit", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msfullscreenerror", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msfullscreenchange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface Element {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface MSNamespaceInfo {\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface Window {\n' +
'    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "devicemotion", listener: (ev: DeviceMotionEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "deviceorientation", listener: (ev: DeviceOrientationEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface SVGElement {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface HTMLFrameElement {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface XMLHttpRequest {\n' +
'    addEventListener(type: "timeout", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface HTMLFrameSetElement {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface Screen {\n' +
'    addEventListener(type: "msorientationchange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface SVGSVGElement {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "zoom", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface HTMLIFrameElement {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface HTMLBodyElement {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface XDomainRequest {\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeout", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface HTMLMarqueeElement {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "bounce", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "start", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "finish", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface MSWindowExtensions {\n' +
'    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface HTMLMediaElement {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msneedkey", listener: (ev: MSMediaKeyNeededEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface HTMLVideoElement {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "msneedkey", listener: (ev: MSMediaKeyNeededEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "MSVideoOptimalLayoutChanged", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "MSVideoFrameStepCompleted", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "MSVideoFormatChanged", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface TextTrackCue {\n' +
'    addEventListener(type: "enter", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "exit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface WebSocket {\n' +
'    addEventListener(type: "open", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "close", listener: (ev: CloseEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface XMLHttpRequestEventTarget {\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "timeout", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface AudioTrackList {\n' +
'    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "addtrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "removetrack", listener: (ev: any /*PluginArray*/) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface MSBaseReader {\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'interface IDBTransaction {\n' +
'    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface TextTrackList {\n' +
'    addEventListener(type: "addtrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface IDBDatabase {\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface IDBOpenDBRequest {\n' +
'    addEventListener(type: "success", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "upgradeneeded", listener: (ev: IDBVersionChangeEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "blocked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface TextTrack {\n' +
'    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface IDBRequest {\n' +
'    addEventListener(type: "success", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface MessagePort {\n' +
'    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface ApplicationCache {\n' +
'    addEventListener(type: "downloading", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "updateready", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "cached", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "obsolete", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "checking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "noupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface AbstractWorker {\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'interface Worker {\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface GlobalEventHandlers {\n' +
'    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'interface KeyOperation {\n' +
'    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface MSInputMethodContext {\n' +
'    addEventListener(type: "candidatewindowshow", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "candidatewindowhide", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "candidatewindowupdate", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface MSWebViewAsyncOperation {\n' +
'    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'interface CryptoOperation {\n' +
'    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'    addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'}\n' +
'\n' +
'\n' +
'declare function addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "devicemotion", listener: (ev: DeviceMotionEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "deviceorientation", listener: (ev: DeviceOrientationEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;\n' +
'declare function addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;\n' +
'\n' +
'\n' +
'/////////////////////////////\n' +
'/// WorkerGlobalScope APIs \n' +
'/////////////////////////////\n' +
'// TODO: These are only available in a Web Worker - should be in a separate lib file\n' +
'declare function importScripts(...urls: string[]): void;\n' +
'\n' +
'\n' +
'/////////////////////////////\n' +
'/// Windows Script Host APIS\n' +
'/////////////////////////////\n' +
'declare var ActiveXObject: { new (s: string): any; };\n' +
'\n' +
'interface ITextWriter {\n' +
'    Write(s: string): void;\n' +
'    WriteLine(s: string): void;\n' +
'    Close(): void;\n' +
'}\n' +
'\n' +
'declare var WScript: {\n' +
'    Echo(s: any): void;\n' +
'    StdErr: ITextWriter;\n' +
'    StdOut: ITextWriter;\n' +
'    Arguments: { length: number; Item(n: number): string; };\n' +
'    ScriptFullName: string;\n' +
'    Quit(exitCode?: number): number;\n' +
'}\n';
