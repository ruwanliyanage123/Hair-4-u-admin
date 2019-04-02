/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig :{
    apiKey: "AIzaSyDKyE2LcMbvrvy7CRInDPjAZLjx2xU--T4",
    authDomain: "hairforyou-2b7f8.firebaseapp.com",
    databaseURL: "https://hairforyou-2b7f8.firebaseio.com",
    projectId: "hairforyou-2b7f8",
    storageBucket: "hairforyou-2b7f8.appspot.com",
    messagingSenderId: "983377625388"
  }
};
