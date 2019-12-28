import csv

#doesnt work in notepad + (maybe ot admin mode, check) 

with open('tcsv.csv', 'a', newline='') as f:
    w = csv.writer(f)
    
    y =("1st c","2nd c","3nd c")    
    w.writerow(y)

    z =(["1st c","2nd c","3nd c"])
    w.writerow(z) #output: 1,s,t,  2,n,d, ,c  3,n,d, ,c
    w.writerow(["1","2","3"]) #not sure why here i can use []
    
    print ("{} is the var".format(y)) 
    print ("{} is the file".format(f)) 

    #future iterator
        #x = 1    
        #for x<10:
        #x = x+1 
    
    
#https://realpython.com/python-csv/#writing-csv-files-with-csv 

"""
with open('persons.csv', 'w') as csvfile:
    filewriter = csv.writer(csvfile, delimiter=',',
                            quotechar='|', quoting=csv.QUOTE_MINIMAL)
    filewriter.writerow(['Name', 'Profession'])
    filewriter.writerow(['Derek', 'Software Developer'])
    filewriter.writerow(['Steve', 'Software Developer'])
    filewriter.writerow(['Paul', 'Manager'])
"""


#https://pythonspot.com/files-spreadsheets-csv/

#https://stackoverflow.com/questions/33054527/typeerror-a-bytes-like-object-is-required-not-str-when-writing-to-a-file-in
    #PYTHON 3 ERROR WB changed to w in line 3.
