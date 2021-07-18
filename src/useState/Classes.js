import React from "react";

function Classes() {
    const [student, setStudent] = React.useState(new Student());

    const setFirstName = (e) => {
        student.firstName = e.target.value;
        setStudent(new Student(student));
    };

    const setLastName = (e) => {
        student.lastName = e.target.value;
        setStudent(new Student(student));
    };

    return (
        <div>
            <h2>Class in useState</h2>
            <p>First Name: {student.firstName}</p>
            <p>Last Name: {student.lastName}</p>
            <input type="text" onChange={setFirstName} />
            <input type="text" onChange={setLastName} />
        </div>
    );
}

export default Classes;

class Student {
    constructor(student) {
        this.firstName = student ? student.firstName : "";
        this.lastName = student ? student.lastName : "";
    }
}
