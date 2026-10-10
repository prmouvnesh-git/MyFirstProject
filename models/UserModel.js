// models/UserModel.js

class UserModel {
    constructor() {
        // Mock database of users
        this.users = [
            { email: 'mouvnesh@gmail.com', password: 'prm', role: 'admin' },
            { email: 'donor@example.com', password: 'password123', role: 'donor' }
        ];
    }

    /**
     * Authenticate a user by email and password
     * @param {string} email 
     * @param {string} password 
     * @returns {Object|null} The user object if valid, else null
     */
    authenticate(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        return user || null;
    }
}

// Global instance to simulate database access
const userModel = new UserModel();
