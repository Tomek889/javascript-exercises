const findTheOldest = function(people) {
    let highestAge = 0;
    let age = 0;
    let oldestPerson;
    for (let person of people) {
        if (isNaN(person.yearOfDeath)) {
            age = new Date().getFullYear() - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if (age > highestAge) {
            highestAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
