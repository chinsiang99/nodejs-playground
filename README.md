# Buffers
- to really understand buffers, we need to get a good grasp on four simple computer science topics, which are binary data, binary numbers, hexadecimal numbers (base 16 number), and character sets/encodings

Binary data
- it a data that has only two possible states (zeros and ones)
- everything on your computer is a combination of binary data
- 8 bits = 1 byte

Hexadecimal numbers
- normally have indicaters # or 0x
- '#' indicator normally is used in css, color codes
- '%' expressing some characters in URLs like space (%20)
- '&#x' expressing unicode characters in HTML, XHTML and XML
- '0x' is the most common indicator for hexadecimal numbers
- consist of 16 characters, from 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
- the need of hexadecimal numbers are actually to help engineers to see charcters length to be much smaller, easier to read

Character Sets
- letters and symbols(characters) that a writing system uses, and a representation of assigning different numbers to those characters
- one of the character sets is the most common one (Unicode)

Unicode
- a standard for representing and encoding characters in most of the writing systems worldwide
- it defines 144697 characters

ASCII
- stands for American Standard Code for Information Interchange
- it defines 128 characters, lowercase and uppercase of letters a-z, numbers from 0-9, punctuations [$,%, ..., ^] and some control characters like DEL (Delete)
- it is a subset of unicode, hence the characters have the same number as unicode, (character 's' gets assigned to number 115)

Character encodings
- a system of assigning a sequence of bytes (just some zeroes and ones) to a character
- The most common one is utf-8, defined by the Unicode Standard, therefore its characters have the same numbers as the Unicode
- Please note that defining a character encoding system !! because different will ahve different values

Buffers
- a buffer is a container in memory that has a fixed length of size that gets in some data, some raw binary data (zeroes and ones) and then it quickly sends it on to another place
- reason why we had buffers in nodejs is because javascript itself does not good at all dealing with raw binary data
- it is important because it can deal with files, network requests, all of the things that uses binary data