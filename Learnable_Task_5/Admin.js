import readline, { question } from 'readline-sync';
import User from "./User.js";
import { Courses } from './Courses.js';
// import { Assessment } from "./Assessment";

export class Admin extends User {

	constructor(userName, userEmail, userPassword) {
		super(userName, userEmail, userPassword);
	}

	updateCourse(courseObject, moduleName, moduleId, moduleDuration) {
		let newCourse = {
			moduleName,
			moduleId,
			moduleDuration
		};
		courseObject.addCourse(newCourse);
		console.log(`Module added successfully: ${moduleName}`);
	};

	selectAction() {
		const actions = [
			{ id: 1, option: "Update Course" },
			{ id: 2, option: "Delete Course" },
			{ id: 3, option: "View Available Courses" },
			{ id: 4, option: "Go back to main menu"},
		];
		let status = true;

		while (status) {
			console.log("\nAvailable options");

			actions.forEach((action) => {
				console.log(`${action.id} ${action.option}`);
			});
	
			let choice = readline.question("Select an option: ");
			let newCourse, courseTitle, courseCode, courseDuration;
			switch (choice) {
				case "1":
					courseTitle = readline.question("Enter course title: ");
					courseCode = readline.question("Enter course code: ");
					courseDuration = readline.question("Enter course duration: ");
					newCourse = new Courses(courseTitle, courseCode, courseDuration);
					newCourse.addCourse(newCourse);
					break;
				case "3":
					Courses.viewAvailableCourses(this.courses);
				case "4":
					status = false;
				default:
					break;
			}
		}
	}
}

