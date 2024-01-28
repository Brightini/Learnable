class LearnableInterns {
    // Static properties
    static name;
    static id;
    static password = "??!!@@";

    // a constructor
    LearnableInterns(name, id, password) {
        this.name = name;
        this.id = id;
        this.password = password;
    }

    // a static method
    static verify (password) {
        if (LearnableInterns.password === password) {
            return true;
        } else {
            return false;
        }
    }

}

let firstIntern = new LearnableInterns("Bright", 123, "??!!@@");
if (LearnableInterns.verify("??!!@@")) {
    console.log("Welcome to Learnable.");
}
else
    console.log("Password verification failed.")
