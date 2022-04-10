module.exports = ({ env }) => ({
  url: '/',
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'db7dc695082ef2c18975a132f805e6e3'),
  },
});
