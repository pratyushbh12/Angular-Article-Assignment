import 'angular-route';
import 'angular-translate';

import angular from 'angular';

/** Manages the main AngularJS module ('myApp'). */
class AppModule {
    /** Initializes the module's core dependencies. */
    constructor() {
        this._module = null;
        this._dependencies = ['ngRoute', 'pascalprecht.translate'];
    }

    /**
     * Lazily creates and returns the main AngularJS module instance.
     *
     * @returns {object} The main AngularJS module.
     */
    get module() {
        if (!this._module) {
            this._module = angular.module('myApp', this._dependencies);
        }
        return this._module;
    }

    /**
     * Sets the module instance, primarily for testing purposes.
     *
     * @param {object} newModule The new AngularJS module instance.
     */
    set module(newModule) {
        this._module = newModule;
    }
}

export const main = new AppModule();
