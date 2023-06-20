// Define user schema
const userSchema = {
    id: Number,
    name: String,
    email: String,
    password: String
}

let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@yahoo.com",
        password: "password123"
    },
    {
        id: 2,
        name: "Sammy",
        email: "sammy@codepath.org",
        password: "theyeariwasborn"
    },
]

// users[0] === Alice

const userModel = {
    getAll: () => {
        return users;
    },
    getById: (id) => {
        return users.find(user => user.id === id);
    },
    create: (user) => { 
        const newId = users.length + 1; 
        console.log("USER:")
        const newUser = { ...user, id: newId };
        users.push(newUser);
        return newUser;
    },
    update: (id, user) => {
        const index = users.findIndex(user => user.id === id);
        if (index === -1) { // if no user
            return null;
        }
        const updatedUser = { ...users[index], ...user };
        users[index] = updatedUser;
        return updatedUser;
    },
    delete: (id) => {
        const index = users.findIndex(user => user.id === id);
        if (index === -1) { // if no user
            return null
        }
        const deletedUser = users[index];
        users.splice(index, 1);
        return deletedUser;
    }
}

module.exports = userModel;