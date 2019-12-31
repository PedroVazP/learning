#https://realpython.com/python-csv/

import csv
import json
import glob
import os
import pandas

#for filename in glob.glob('//path/to/file/*.csv')
#csvfile = os.path.splitext(filename)[0]
#jsonfile = csvfile + '.json'

file = "2D"
csvP = file+'csv.csv'
jsonP = file+'json.json'
#jsonP = file[0:2]+'json.json'

line_count = 0

with open(csvP, 'r') as f:
    reader = csv.DictReader(f)
       #for row in reader:        
       #if line_count == 0:
    rows = list(reader)
    #line_count += 1
    print (reader)
    print (rows)
    print ("JSON parsed!")

with open(jsonP, 'w') as f:
        json.dump(rows, f)
        print ("JSON saved!")



"""
#http://www.andymboyle.com/2011/11/02/quick-csv-to-json-parser-in-python/        

import csv
import json


# Open the CSV
f = open( csv, 'r' )
reader = csv.DictReader(csv, fieldnames = ("x","y"))
# Parse the CSV into JSON
out = json.dumps( [ row for row in reader ] )
print ("JSON parsed!")
# Save the JSON
f = open( jsonFilePath, 'w')
f.write(out)
"""
