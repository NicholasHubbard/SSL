// Nicholas Hubbard
// Assignment: nodejs Grader

// Creating a class to take in object data
class Grader{
	constructor(name, assignment, grade){
		this.name = name;
		this.assignment = assignment;
		this.grade = grade;
	}
}


// creating a readline to take in user input
const readline = require("readline");
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

// series of questions that will pull user data and instantiate an object
rl.question("Enter your name: ", (name)=>{
	rl.question("Enter the assignment name: ",(assignment)=>{
		rl.question("Enter your grade in number form: ",(grade)=>{
			myUser = new Grader(name, assignment, grade)
			console.log("Student Name: "+ myUser.name)
			console.log("Assignment Name: "+ myUser.assignment)
			myUser.score = Score(myUser.grade)
			console.log("Assignment Grade: "+ myUser.score)
			rl.close();
		})
	})
})

// function to determine grade conversion
function Score(grade){
	let letterGrade;

	if(grade < 60){
		letterGrade = "F"
	}else if(grade >= 60 && grade < 70){
		letterGrade = "D";
	}else if(grade >= 70 && grade < 80){
		letterGrade = "C";
	}else if(grade >= 80 && grade < 90){
		letterGrade = "B";
	}else if(grade >= 90 && grade < 100){
		letterGrade =  "A";
	}else if(grade == 100){
		letterGrade = "A+ Woo!";
	}else if(grade > 100){
		letterGrade = "A++!! I didn't think that was possible!";
	}
	return letterGrade;
}





