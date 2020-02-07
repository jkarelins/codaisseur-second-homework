function groupAdultsByAgeRange(people) {
  return people
    .filter(person => person.age >= 18)
    .reduce((acc, person) => {
      if (person.age <= 20) {
        if (acc["20 and younger"] === undefined) {
          acc["20 and younger"] = [];
          acc["20 and younger"].push(person);
        } else {
          acc["20 and younger"].push(person);
        }
      } else if (person.age <= 30 && person.age >= 21) {
        if (acc["21-30"] === undefined) {
          acc["21-30"] = [];
          acc["21-30"].push(person);
        } else {
          acc["21-30"].push(person);
        }
      } else if (person.age <= 40 && person.age >= 31) {
        if (acc["31-40"] === undefined) {
          acc["31-40"] = [];
          acc["31-40"].push(person);
        } else {
          acc["31-40"].push(person);
        }
      } else if (person.age <= 50 && person.age >= 41) {
        if (acc["41-50"] === undefined) {
          acc["41-50"] = [];
          acc["41-50"].push(person);
        } else {
          acc["41-50"].push(person);
        }
      } else {
        if (acc["51 and older"] === undefined) {
          acc["51 and older"] = [];
          acc["51 and older"].push(person);
        } else {
          acc["51 and older"].push(person);
        }
      }
      return acc;
    }, {});
}

module.exports = { groupAdultsByAgeRange };
