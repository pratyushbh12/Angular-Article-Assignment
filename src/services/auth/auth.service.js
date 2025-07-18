/**
 * Factory that creates the authentication service.
 * This service manages the user's login state in memory.
 *
 * @returns {object} The authentication service with methods to log in, log out,
 * and check the current login status.
 */
export const authService = function () {
    let loggedIn = false;

    /**
     * Marks the user as logged in.
     * @returns {boolean} The new authentication state (true).
     */
    function login() {
        loggedIn = true;
        return loggedIn;
    }

    /**
     * Marks the user as logged out.
     * @returns {boolean} The new authentication state (false).
     */
    function logout() {
        loggedIn = false;
        return loggedIn;
    }

    /**
     * Checks if the user is currently logged in.
     * @returns {boolean} The current authentication state.
     */
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
