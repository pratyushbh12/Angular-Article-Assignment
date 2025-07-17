import {home,login,signUp,error,createArticle,articleDetails,articleList,profile,notFound} from '../../template';

/**
 * Configures the application's routes and URL hash prefix.
 *
 * @param {object} $routeProvider Provider to configure application routes.
 * @param {object} $locationProvider Provider to configure URL behavior.
 */
export const routeConfig=['$routeProvider','$locationProvider',($routeProvider,$locationProvider)=>{
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/',{
            template:home,
            controller:'myController',
        })
        .when('/login',{
            template:login,
        })
        .when('/sign-up',{
            template:signUp,
        })
        .when('/error',{
            template:error,
        })
        .when('/create-article',{
            template:createArticle,
        })
        .when('/article-details/:id',{
            template:articleDetails,
        })
        .when('/article-list',{
            template:articleList,
        })
        .when('/profile',{
            template:profile,
        })
        .otherwise({
            template:notFound,
        });
}];
