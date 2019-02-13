export const people = [
    {
        id: 1,
        name: "corini",
        age: 28,
        gender: "female"
    },
    {
        id: 2,
        name: "corini2",
        age: 28,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
};
