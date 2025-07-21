/**
 * Factory that creates the authentication service.
 * This service manages the user's login state in memory.
 *
 * @returns {object} The authentication service with methods to log in, log out,
 * and check the current login status.
 */
export const authService = [
    '$location',
    function ($location) {
        let loggedIn = false;
        let error = null;

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

        /**
         * Checks if an error is currently active in the service.
         * @returns {boolean} True if an error is set, otherwise false.
         */
        function isError() {
            return error != null;
        }

        /**
         * Sets the application's global error state and redirects to the error page.
         * @param {*} err - The error object or message to be stored.
         * @returns {*} The error that was set.
         */
        function setError(err) {
            error = err;
            $location.path('/error');
            return error;
        }

        /**
         * Retrieves the currently stored error object.
         * @returns {*} The current error, or null if no error is active.
         */
        function getError() {
            return error;
        }

        const services = {
            login,
            logout,
            isLoggedIn,
            isError,
            getError,
            setError,
        };

        return services;
    },
];
