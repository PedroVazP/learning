import csv

#doesnt work in notepad + (maybe ot admin mode, check) 

with open('tcsv.csv', 'a', newline='') as f:

    filewriter = csv.writer(f, delimiter=',',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)

    
    x = 0    
    for x in range (1, 10): #https://wiki.python.org/moin/ForLoop
    #while x < 10: #https://wiki.python.org/moin/WhileLoop
        x = x+1
        filewriter.writerow(['1st Column', x])

    string = "Hello World"
    for y in string:
        filewriter.writerow(['1st Column', y])
    
    """
#https://realpython.com/python-csv/#writing-csv-files-with-csv 
#https://pythonspot.com/files-spreadsheets-csv/
#https://stackoverflow.com/questions/33054527/typeerror-a-bytes-like-object-is-required-not-str-when-writing-to-a-file-in

      
OTHER EXAMPLE

1.
    with open('persons.csv', 'w') as csvfile:
    filewriter = csv.writer(csvfile, delimiter=',',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
    filewriter.writerow(['Name', 'Profession'])
    filewriter.writerow(['Derek', 'Software Developer'])
    filewriter.writerow(['Steve', 'Software Developer'])
    filewriter.writerow(['Paul', 'Manager'])

2.
    
    w = csv.writer(f)
    y =("1st c","2nd c","3nd c")    
    w.writerow(y)

    z =(["1st c","2nd c","3nd c"])
    w.writerow(z) #output: 1,s,t,  2,n,d, ,c  3,n,d, ,c
    w.writerow(["1","2","3"]) #not sure why here i can use []
    
    print ("{} is the var".format(y)) 
    print ("{} is the file".format(f)) 


"""

