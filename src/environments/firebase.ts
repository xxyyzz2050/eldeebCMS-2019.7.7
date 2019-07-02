import env from './local';
export default Object.assign(
  {
    app: 'firebase',
    mode: 'production'
  },
  env
);
