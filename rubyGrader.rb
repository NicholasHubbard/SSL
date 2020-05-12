# Nicholas Hubbard
# Assignment Ruby Grader

# User inputs for name, assignment, and grade
puts "Enter your name: "
userName = gets

puts "Enter your assignment name: "
userAssignment = gets

puts "Enter your grade in number form: "
userGrade = gets.chomp.to_i


# class to initialize and define object
class Grader 
	def initialize(name, assignment, grade)
		@name = name
		@assignment = assignment
		@grade = grade
	end

	def name
		@name
	end

	def assignment
		@assignment
	end

	def grade
		@grade
	end

	# method to convert grade into a letter grade
	def convertGrade(grade)
		if grade < 60
			puts "Final Grade: F"
		elsif grade >= 60 && grade < 70
			puts "Final Grade: D"
		elsif grade >= 70 && grade < 80
			puts "Final Grade: C"
		elsif grade >= 80 && grade < 90
			puts "Final Grade: B"
		elsif grade >= 90 && grade < 100
			puts "Final Grade: A"
		elsif grade == 100
			puts "Final Grade: A+"
		elsif grade > 100
			puts "Final Grade: A++ Way to go way overboard haha"
		end
	end

end

# instantiating myUser for create the actual object
myUser = Grader.new(userName, userAssignment, userGrade)

# printing to the console to show object name, assignment, and method to show letter grade
puts "Student Name: #{myUser.name}"

puts "Assignment graded: #{myUser.assignment}"

myUser.convertGrade(myUser.grade)
