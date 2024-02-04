export class Courses {
    #moduleName;
    #moduleId;
    #moduleDuration;
    static courses = [];

    constructor(moduleName, moduleId, moduleDuration) {
        this.#moduleName = moduleName;
        this.#moduleId = moduleId;
        this.#moduleDuration = moduleDuration;
    }

    addCourse(course) {
        if (course) {
            Courses.courses.push(course);
        } else {
            console.log("Unable to add course to the list");
        }
    }

    static viewAvailableCourses() {
        if (Courses.courses) {
            Courses.courses.forEach((course, index) => {
                console.log(`${index + 1}. ${course.moduleName}`);
            });
        } else {
            console.log("No available course");
        }
    }

}
