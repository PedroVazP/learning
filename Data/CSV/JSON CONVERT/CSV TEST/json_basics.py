import csv
import json

csvFilePath = 'tcsv.csv'
jsonFilePath = 'tjson.json'


csvdata = {}
x_axis = []
y_axis = []

with open (csvFilePath, "r") as csvFile:
    Reader = csv.DictReader(csvFile)
    rowN = 1
    #https://www.geeksforgeeks.org/python-convert-two-lists-into-a-dictionary/
    for row in Reader:
        # Skip the header row.
        if rowN >= 1:
            print (csvdata)
            #print (x_axis)
            #print (y_axis)
            print (row)
            #print (rowN)
            x_axis.append(row[0])
            y_axis.append(row[1])
            csvdata = (zip (x_axis, y_axis))
            rowN = rowN + 1
        

"""#this part is working now. Lets try to read CSV
#i = 0
data = []
x = [0,1,2,3]
y = [1,2,3,4]

for i in x[0:]:
    data.append("{},{}".format((x[i]),(y[i])))
    print (i)
    print (x[i])
    print (y[i])
    print (data)
"""   
       
with open (jsonFilePath, "w")as jsonFile:
    #it makes it more readable and pretty
    jsonFile.write(json.dumps(csvdata, indent=4))




#https://medium.com/@hannah15198/convert-csv-to-json-with-python-b8899c722f6d
#https://stackoverflow.com/questions/56905716/how-do-i-convert-a-csv-file-to-a-json-file-for-python-when-csv-file-is-json-stru
#https://www.w3schools.com/python/python_json.asp
    
