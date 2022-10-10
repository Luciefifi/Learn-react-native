class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}
let person = new Person('Jane Doe');
console.log(person); // Jane Doe

person.setName('jane smith');
console.log(typeof person);
//onsole.log( person instanceof person);
let meeting = {
    attendees: [],
    add(attendee)
    {
        console.log(`${attendee} joined the meeting`)
        this.attendees.push(attendee);
        return this;
    },
};
   function getlatest() 
{
    let count = this.attendees.length;
    return count = 0 ? undefined : this.attendees[count-1];

}
meeting.add('Lucie');
meeting.add('steve');
meeting.add('Lavender');
console.log(`the latest attendee is ${meeting.getlatest}.`);

//computed property
let propName = 'c';
 const rank = {
    a: 1,
    b: 3,
    [propName]: 2,
};
console.log(rank.c);

let name = 'fullName';
class Person1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get [name]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let fname= new Person1('John', 'Doe');
console.log(fname.fullName);   //John Doe





