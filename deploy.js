import * as ghpages from 'gh-pages';

ghpages.publish(
  'dist', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/swimmingkiim/christmas-screen.git', // Update to point to your repository
    user: {
      name: 'swimmingkiim', // update to use your name
      email: 'swimmingkiim@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);