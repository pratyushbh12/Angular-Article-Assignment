export const authService = function () {
    let loggedIn = false;

    function login() {
        loggedIn = true;
        return loggedIn;
    }

    function logout() {
        loggedIn = false;
        return loggedIn;
    }

    function isLoggedIn() {
        return loggedIn;
    }

    const services = {
        login,
        logout,
        isLoggedIn,
    };

    return services;
};
