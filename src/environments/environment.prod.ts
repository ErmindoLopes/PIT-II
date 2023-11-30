export const environment = {
  production: true,
  env_file: "prod",

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
