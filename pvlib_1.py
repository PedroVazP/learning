# This is a wip for a library class of functions to be used for web scrapper.

import re
import datetime #for timestamp

class pvlib:

    #https://docs.python.org/3/tutorial/classes.html 
            #_init_ defines some variables and initial values for the class )... self, args, instances, .... 
            #New code, def_init_(self) below to test how it works.
    
    
    def __init__(self): # I get an error as self is not defined, but cant pass an argument. 
        self.data = []
    
    a = 12345 

    def b(self):
        return 'hello'
       
    def hello():
        print ("Hello world")
        return ("Hello world")    
    
    def store(string):
        str(string)
        file = "output.txt"
        f=open(file,"a+")
        f.write ("\n")
        ts1 =('Timestamp: {:%Y-%m-%d %H:%M:%S}'.format(datetime.datetime.now()))
        #ts2 =('Timestamp: {:%Y-%b-%d %H:%M:%S}'.format(datetime.datetime.now()))
        #ts3 =('Date now: %s' % datetime.datetime.now())
        #ts4 =('Date today: %s' % datetime.date.today())
        f.write(ts1)
        f.write ("\t")
        f.write (string)
        f.close()
        print (f)
       
        """
            To add: Pending to create an error check. Write vs create new.
            if file = error
            f= open(file,e"w+")
        """

    if __name__ == "__main__":
        store("")

X = pvlib()

a = ["apple", "pinaple"]
pvlib.a
pvlib.b(["a","b","c"])



#other notes

    #How to test? : try pvlib.store("prueba"),
    # How to break?, file did hundred "prueba"

    #_init_ ?, Why do this works for? See BELOW. to research
    #https://stackoverflow.com/questions/448271/what-is-init-py-for

    #Open. Investigate How does Def_init_ WORKS
    #Open. How to connect this to other program

    #Class & Functions documentation
        #https://www.w3schools.com/python/python_classes.asp
        #https://realpython.com/lessons/classes-python/
        #https://www.programiz.com/python-programming/object-oriented-programming   
        #function documentation - https://www.programiz.com/python-programming/function
        # files documentation = https://automatetheboringstuff.com/chapter8/
       
