/* 
    4 pelare inom Objektorienterad programmering (OOP)
      * Encapsulation
      * Inheritance
      * Polymorphism
      * Abstraction
    
    JS
      * Encapsulation
      * Inheritance
      * Polymorphism
      
    --------------------------------------------

    <= ES5
      * Inheritance

    >= ES6
      * Encapsulation
      * Polymorphism
*/


// INHERITANCE
// Arv mellan klasser


class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

}

class Teacher extends Person {
  constructor(firstName, lastName, teacherId, skills) {
    super(firstName, lastName)
    this.teacherId = teacherId;
    this.skills = skills;
  }

  displaySkills() {
    this.skills.forEach(skill => {
      console.log(skill)
    })
  }
}


class Student extends Person {
  constructor(firstName, lastName, studentId) {
    super(firstName, lastName)
    this.studentId = studentId  
  }
}



const t1 = new Teacher('Joakim', 'Wahlström', 1, ['Javascript', 'React', 'Vue', 'UX-Design'])

console.log(t1.fullName())
t1.displaySkills()

const s1 = new Student('Johan', 'Andersson', 1)
// console.log(s1.displaySkills());
console.log(s1.fullName());