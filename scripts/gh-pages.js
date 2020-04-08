var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/portfolio',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        user: {
            name: 'Alexander Sivashev',
            email: 'shyr1punk@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
