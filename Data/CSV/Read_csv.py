import csv

# create list holders for our data.
X_axis = []
Y_axis = []

# open file
with open('tcsv.csv', 'r') as g:
    reader = csv.reader(g)

    # read file row by row
    rowNr = 0
    for row in reader:
        # Skip the header row.
        if rowNr >= 1:
            X_axis.append(row[0])
            Y_axis.append(row[1])

        # Increase the row number
        rowNr = rowNr + 1

# Print data 
print (X_axis)
print (Y_axis)

#https://docs.python.org/3/library/csv.html

"""
# create list holders for our data.
names = []
jobs = []

# open file
with open('persons.csv', 'rb') as f:
    reader = csv.reader(f)

    # read file row by row
    rowNr = 0
    for row in reader:
        # Skip the header row.
        if rowNr >= 1:
            names.append(row[0])
            jobs.append(row[1])

        # Increase the row number
        rowNr = rowNr + 1

# Print data 
print names
print jobs

#https://docs.python.org/3/library/csv.html

"""
