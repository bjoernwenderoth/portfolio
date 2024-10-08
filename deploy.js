var ghpages = require('gh-pages');
/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish('dist/portfolio/browser', {
    branch: 'gh-pages',
    repo: 'https://github.com/bjoernwenderoth/portfolio.git',
    cname: "bjoern-wenderoth.de",
    history: false,
  }, function(err) {
    console.log(err);
    
  });