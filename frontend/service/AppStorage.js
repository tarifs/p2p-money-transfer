class AppStorage {
    
    storeUser(token, user) {
        this.setToken(token);
        this.setUser(user);
    }

    setToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    }

    setUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    getToken() {
        return JSON.parse(localStorage.getItem("token"));
    }

    getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    clearUser() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    storeStorage(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    getStorage(name) {
        const data = localStorage.getItem(name);
        if (data !== 'undefined') return JSON.parse(data);
        return null;
    }
}

export default new AppStorage();
