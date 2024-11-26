// Learn more at developers.reddit.com/docs
import { Devvit, useState } from '@devvit/public-api';
import { setupGame } from './lib/fetchPosts.js';

Devvit.configure({
  redditAPI: true,
  redis: true
});

// Add a menu item to the subreddit menu for instantiating the new experience post
Devvit.addMenuItem({
  label: 'Add my post',
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();

    const date = new Date();
    const date_string = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
   
    await reddit.submitPost({
      title: `My devvit post - ${date_string}`,
      subredditName: subreddit.name,
      // The preview appears while the post loads
      preview: (
        <vstack height="100%" width="100%" alignment="middle center">
          <image url="simpsons-bart.gif" imageWidth={500} imageHeight={500} />
        </vstack>
      ),
    });
    ui.showToast({ text: 'Created post!' });
  },
});

// Add a post type definition
Devvit.addCustomPostType({
  name: 'Experience Post',
  height: 'tall',
  render: (_context) => {
    const [launched, setLaunched] = useState(false);
    
    return(
      
        <webview
          grow
          id="web-view"
          url="index.html"
          onMessage={(msg) => {
            console.log('Received from webview:', msg);
          }
        }
          height="100%" 
          width="100%"
        />
    )
  },
});

export default Devvit;
