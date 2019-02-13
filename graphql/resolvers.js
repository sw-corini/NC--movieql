const corini = {
    name: "corini",
    age: 28,
    gender: "female"
};
const resolvers = {
    Query: {
        person: () => corini
    }
};
export default resolvers;
