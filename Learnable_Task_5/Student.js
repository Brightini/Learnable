import User from './User.js';
import { Courses } from './Courses.js';
// import { Assessment } from './Assessment';

export class Student extends User {

	constructor(userName, userEmail, userPassword) {
		super(userName, userEmail, userPassword);
	}
	
}

function selectOption() {
	console.log("\nSelect an option");
	
}
