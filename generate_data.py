import numpy as np 
import csv
import math

x_list = [i for i in np.linspace(0,40,200)]
temp1 = []
temp2 = []
goal1 = []
goal2 = []

for x in x_list:
    temp1.append(9)
    temp2.append(14)

    goal1_score = 2+1*math.exp(.12*x)
    if goal1_score <= 25.5:
        goal1.append(goal1_score)
    else: 
        goal1.append(0)

    goal2_score = 3+2*math.exp(.06*x)
    if goal2_score <= 25.5:
        goal2.append(goal2_score)
    else:
        goal2.append('0')
    
# print(goal1)
# print(goal2)

with open('data/procrastination_data.csv', mode = 'w') as csv_file:
    line_writer = csv.writer(csv_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    line_writer.writerow(['time','texting','watching','infovis_homework','portfolio'])
    for i in range(200):
        line_writer.writerow([x_list[i], temp1[i],temp2[i],goal1[i],goal2[i]])
    