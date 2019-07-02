export interface Env {
  [key: string]: any;
}

export default {
  app: 'local', // where the app deployed: local|firebase
  mode: 'production' // production|development|testing
} as Env;
