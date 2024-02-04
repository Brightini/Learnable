import readline from 'readline-sync';
import { Student } from "./Student.js";
import { Admin } from "./Admin.js";

// import { User } from "./User";


function promptUser() {
	let name = readline.question("Enter your name: ");
	let email = readline.question("Enter your email: ");
	let password = readline.question("Enter your password: ");

	return { name, email, password };
}

function Main() {
	while (true) {
		console.log("\nWelcome to Learnable!");
		console.log("[1] Sign in as student");
		console.log("[2] Sign in as an admin/tutor");
		console.log("[3] Exit");
		console.log("[4] Clear Screen");

		const choice = readline.question("Enter your choice: ");

		switch (choice) {
			case "1":
			case "2":
				let { name, email, password } = promptUser();
				if (choice === "1") {
					let newStudent = new Student(name, email, password);
					newStudent.verifySignIn();
				} else if (choice === "2") {
					let newAdmin = new Admin(name, email, password);
					newAdmin.verifySignIn();
					newAdmin.selectAction();
				}
				break;
			case "3":
				console.log("Log out successful");
				process.exit();
			case "7":
				console.clear();
				break;
			default:
				console.log("Enter a valid choice");
		}
	}
}

Main();
