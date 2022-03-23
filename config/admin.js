module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fee73134abfe5465a5d3117efdaddc43'),
  },
});
