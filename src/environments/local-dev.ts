import env from './local';
export default Object.assign(
  {
    app: 'local',
    mode: 'development'
  },
  env
);
