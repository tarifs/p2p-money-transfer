import AppStorage from "./AppStorage";
class Api {
    static getHeaders() {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${AppStorage.getToken()}`
        };
    }

    static getFormHeaders() {
        return {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': `Bearer ${AppStorage.getToken()}`
        };
    }

    static getHeadersWithoutAuth() {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    };
}

export default Api;