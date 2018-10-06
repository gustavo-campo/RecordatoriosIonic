// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDbVxcBz8qUHXXAg546MjUmXvKmdPUBMe4",
    authDomain: "fireapp-ca034.firebaseapp.com",
    databaseURL: "https://fireapp-ca034.firebaseio.com",
    projectId: "fireapp-ca034",
    storageBucket: "fireapp-ca034.appspot.com",
    messagingSenderId: "496121182567"
  }
};