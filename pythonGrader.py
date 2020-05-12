# Nicholas Hubbard
# Assignment Pyhton Grader Class 0520

import sys

# Created user inputs to gather the data needed
userName = raw_input("Enter your name : ")
userAssignment = raw_input("Enter the assignment name : ")

while True:
	try:
		userGrade = float(raw_input("Enter the grade for this assignment in number form : "))
		break
	except ValueError:
		print("ERROR: Incorrect Input")


# Created a Grader class to take in the user input and create an object
class Grader:
	def __init__(self,name,assignment,grade) :
		self.name = name
		self.assignment = assignment
		self.grade = grade

# Method to convert number grade to letter grade
def assign_letter_grade(score): 
	if score < 60: return "F"
	elif score >= 60 and score < 70: return "D"
	elif score >= 70 and score < 80: return "C"
	elif score >= 80 and score < 90: return "B"
	elif score >= 90 and score < 100: return "A"
	elif score == 100: return "A+"
	elif score > 100: return "A++ Holy Moly! How much extra credit did you do??"
	else : return "Unable to understand what you inputted for the grade"

# Defining the user object
myUser = Grader(userName, userAssignment, userGrade)

# Calling the method to convert grade
myUser.score = assign_letter_grade(myUser.grade)

# Printing object to the command line
print("Student name: "+myUser.name)
print("Assignment graded: "+myUser.assignment)
print("Final grade: "+myUser.score)