# This is a wip for a library class of functions to be used for web scrapper.

import re
import datetime #for timestamp

class devlib:
    #to run type devlib.a, etc...  
    
    def __init__(self): # I get an error as self is not defined, but cant pass an argument. 
        self.data = []
 
    def b(self):
        return 'hello'  
         
    def c (self,m,n):
        c = devlib.comp(self,m,n)
        
    def comp (self,m,n):
        #m = self.m
        #n = self.n
        if m>n :
            print ("{} is greater than {}".format(m,n)) 
        elif n>m:
            print ("{} is greater than {}".format(n,m))
            #printing variables 
            #https://stackoverflow.com/questions/9333245/python-printing-text-after-printing-a-variables
        else:
            print ("Error ;)")
        return ("Hello")
        
    def d (self,x,y):
        z = x + y
        print (z)
        return (z)
    
    def e (self,x,y): #still trying to figure out how self works. cant get it running yet.
        #Traceback (most recent call last):
            #File "<stdin>", line 1, in <module>
            #File "C:\Users\Pedrosky\Documents\GitHub\learning\devlib.py", line 37, in e
            #self_x = self.x
            #AttributeError: 'devlib' object has no attribute 'x'
        self_x = self.x
        self_y = self.y
        print ("Hello world {}".format(self_x))
        print ("Hello world %s".format(self_y))
        return ("Hello world")    
    
    
xx = devlib()

a = ["apple", "pinaple"]
#devlib.a
#xx.a

devlib.b(["a"])
devlib.b("a")


#other notes
    #https://docs.python.org/3/tutorial/classes.html 
            #_init_ defines some variables and initial values for the class )... self, args, instances, .... 
            #New code, def_init_(self) below to test how it works.
            
    #https://stackoverflow.com/questions/448271/what-is-init-py-for

    #Open. Investigate How does Def_init_ WORKS
    #Open. How to connect this to other program

    #Class & Functions documentation
        #https://www.w3schools.com/python/python_classes.asp
        #https://realpython.com/lessons/classes-python/
        #https://www.programiz.com/python-programming/object-oriented-programming   
        #function documentation - https://www.programiz.com/python-programming/function
        # files documentation = https://automatetheboringstuff.com/chapter8/
       
