# This is a wip for a library class of functions to be used for web scrapper.

import re
import datetime #for timestamp

class devlib:

    #https://docs.python.org/3/tutorial/classes.html 
            #_init_ defines some variables and initial values for the class )... self, args, instances, .... 
            #New code, def_init_(self) below to test how it works.
    
    
    def __init__(self): # I get an error as self is not defined, but cant pass an argument. 
        self.data = []
    
    a = 12345 

    def b(self):
        return 'hello'
       
    def c (self,a,b):
        self_a = self.a
        self_b = self.b
        print ("Hello world",a)
        print ("Hello world",b)
        return ("Hello world")    
         
x = devlib()

a = ["apple", "pinaple"]
devlib.a
devlib.b(["a"])

x.a
devlib.b("a")
#x.c(0,1,2)

#other notes
    #https://stackoverflow.com/questions/448271/what-is-init-py-for

    #Open. Investigate How does Def_init_ WORKS
    #Open. How to connect this to other program

    #Class & Functions documentation
        #https://www.w3schools.com/python/python_classes.asp
        #https://realpython.com/lessons/classes-python/
        #https://www.programiz.com/python-programming/object-oriented-programming   
        #function documentation - https://www.programiz.com/python-programming/function
        # files documentation = https://automatetheboringstuff.com/chapter8/
       
