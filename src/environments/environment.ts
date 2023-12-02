// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  env_file: "local",

  config:{
    //apiUrl:'http://localhost:3000',
    apiUrl:'https://pit-2-7494aa7b6847.herokuapp.com',
  },

  jwt:{
    iss:"Pit-II",
    sub:"pit2@localhost",
    aud:"pit2.localhost"
  }
};

