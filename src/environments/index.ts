/*
this file may be replaced during build with another environment file (prod,local,firebase,...),
so don't import it inside any environment file

to select an environment file `ng build --configuration firebase`
`ng build --prod` is equivilent to `ng build --configuration production`
whitch load angular.js->projects.<projectName>.configuration.production
witch replaces environments/index with environments/production

- the default environment is environments/local (ie: {app:local, mode:production})

- each file has a `-dev` file for development fase (ex: environments/firebase & environments/firebase-dev)

- todo: pass varisbles (process.env.myVar) to environment file to control it's flow
ex: `ng build --configuration:production --vars app=local`,
and in environment/prod: adpp:vars.app || 'local'
note that angular cannot acces the node-specific process (because Angular runs in the browser)

- todo: auto import zone-error to all environment files, if mode='development'

- to do: use top-level configurations in angular.json i.e: instead of projects.<project>.configurations
 */

import env from './local';
export default env;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.

console.log('==env/index===');
