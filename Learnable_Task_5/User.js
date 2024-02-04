class User {
	#userName;
	#userEmail
	#userPassword;
	signInStatus = false;

	constructor(userName, userEmail, userPassword) {
		this.#userName = userName;
		this.#userEmail = userEmail;
		this.#userPassword = userPassword;
	}
	fetchName() {
		return this.#userName;
	}
	fetchEmail() {
		return this.#userEmail;
	}

	verifySignIn() {
		if (this.#userEmail, this.#userEmail, this.#userPassword) {
			this.signInStatus = true;
			console.log("Sign in successful");
		}
	}
}

export default User;
