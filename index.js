const githubNpmProfile = require('github-npm-profile');

module.exports = (githubUsername, options) => {
  return githubNpmProfile(githubUsername, options)
    .then(npmUser)
    .then(profile => profile.twitter);
};
