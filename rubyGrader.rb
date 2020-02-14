# Nicholas Hubbard
# Assignment Ruby Grader

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

end

def convertGrade(score)
	if score < 60
		return "F"
	elsif score >= 60 && score < 70
		return "D"
	elsif score >= 70 && score < 80
		return "C"
	elsif score >= 80 && score < 90
		return "B"
	elsif score >= 90 && score < 100
		return "A"
	elsif score == 100
		return "A+"
	elsif score > 100
		return "A++ Way to go way overboard haha"
end

puts "Enter your name: "
userName = gets

puts "Enter your assignment name: "
userAssignment = gets

puts "Enter your grade in number form: "
userGrade = gets


myUser = Grader.new(userName, userAssignment, userGrade)

myUser.score = convertGrade(myUser.grade)

puts "Student Name: #{myUser.name}"

puts "Assignment graded: #{myUser.assignment}"

puts "Final Grade: #{myUser.score}"





end	