import env from './local';
export default Object.assign(
  {
    app: 'firebase',
    mode: 'development',
    env: 'local-dev'
  },
  env
);

console.log('==local-dev===');
