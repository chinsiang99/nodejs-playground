# nodejs under the hood
- nodejs is an asynchronous event-driven javascript runtime
- nodejs is a javascript runtime built on Chrome's V8 Javascript engine

Processors can only understand machine code
- each processor has their own unique language
- we have different processor architecture
- each one of these architectures can only understand their own language
- we have architectures like ARM46, MIPS, x86 and couple of more

On top of machine code, we have assembly language, which is extremely low level language
- to convert an assembly code to machine code, we need to have an assembler

On top of assembly language, we have language such as C/C++
- with these languages, we can actually have access to the operating system and the hardware so you have maximum amount of control over your memory 
- we use compiler in this stage and convert it into assembly language

On top of that C/C++, we have Javascript and Python, which is considered a high level language
- in javascript, we use javascript engine (V8). It will convert your javascript code straight into machine code

What is ECMAScript
- there are many javascript engine out there, therefore in order to create consistency of the way these engines execute javascript code, we use a set of rules (ECMAScript), a language specification which defines for example how a function should work, how should a syntax of a function of an object be like
- it ensures that developers are using the exact same way to run the program in different engines 

V8 can run standalone, or can be embedded into any C++ application

There are many dependencies in nodejs
- one of the most important ones is V8
- another one is libuv, it is an important C library that is used to abstract non-blocking I/O operations to a consistent interface across all other platforms.
- libuv handles file systems, DNS, network, child processes, pipes, signal handling, polling and streaming, it also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system


Brief History
- first computer => 1936
- assembly => 1949
- C => 1970
- first personal computer => 1977
- internet => 1983
- first website => 1991
- JavaScript => 1995
- Internet Explorer => 1995
- ECMAScript  => 1997
- FireFox => 2002
- Chrome & V8 => Sep, 2008
- Nodejs => 2009

libuv
- 

A computer has different hardware
- CPU
- RAM
- Storage
- Network Card
- On top of these hardware, we have operating system

Operating System
- a way of communication between a program , a process and hardware
- something that controls everything of your computer
- it allocates the resources to different processes and allow them to be able to communicate to each other
- or it will allocate some amount of RAM, some amount of memory to a specific process or it will go fetch some data from the storage
- On top of our operating system, we will have our process, which is Nodejs (one of the process) => there are some other processes too such as mysql, redis

Inside of Nodejs, we have V8 which allows us to interact with nodejs applciation with javascript

Besides, we have libuv which help us to handle things like file system, network things

Inside Nodejs, we have another thing which is very important => event loop

Inside libuv, we have a couple more threads which is called a thread pool and by default we have four threads right there for us to handle file systems etc

PLEASE NOTE THAT DO NOT BLOCK THE MAIN THREAD
