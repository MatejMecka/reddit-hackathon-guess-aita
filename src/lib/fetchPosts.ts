import { Comment, Devvit, Post } from "@devvit/public-api";
import { RNG } from "./rng.js";

export const setupGame = async function(context: Devvit.Context) {
    // Fetch date from post
    const postId: string = context.postId!;
    const post: Post = await context.reddit.getPostById(postId);
    const title: string = post.title
    const date = title.split('- ')[1]

    // Fetch Posts from Redis
    const key = `game_data_${postId}`
    const gameData = await context.redis.get(key);
    if(gameData == undefined) {
        // If not fetch then store
        const selected_posts = [];
        const posts_aita: Post[] = await context.reddit.getTopPosts({
            subredditName: 'AmItheAsshole', 
            limit: 50,
            timeframe: 'day'
        }).all()
        console.log(posts_aita.length)

        // Use RNG
        const rng = new RNG(new Date(date).getTime());

        // Select Each Post
        let ROUNDS = 3
        for (let i = 0; i < ROUNDS; i++){
            if(selected_posts.length == 3){
                await context.redis.set(key, JSON.stringify(selected_posts))
                return selected_posts;
            }

            const postIndex = rng.nextRange(0, posts_aita.length);
            const postTitle = posts_aita[postIndex].title
            
            console.log(`ROUND ${i} - ${postTitle}`)

            // We do not care about Updates
            if(postTitle.includes("UPDATE") || post.numberOfComments < 30 || post.score > 50) {
                ROUNDS++;
            }


            // YTA, NAH, ESH
            let choiceVotes = [0,0,0];
            let finalChoice;
            const comments: Comment[] = await posts_aita[postIndex].comments.all()
            comments.forEach(elem => {
                const comment_text = elem.body.toLowerCase()
                console.log(comment_text);
                if(comment_text.includes("yta")) {
                    choiceVotes[0]++;
                } else if (comment_text.includes("nta")){
                    choiceVotes[1]++;
                } else if (comment_text.includes("esh")) {
                    choiceVotes[2]++;
                }
            })

            // If all votes are Equal, Discard, find a new post
            if(choiceVotes[0] == choiceVotes[1] && choiceVotes[0] == choiceVotes[2] && choiceVotes[1] == choiceVotes[2]) {
                ROUNDS++;
            }
            
            // YTA > NTA, and YTA > ESH
            if(choiceVotes[0] > choiceVotes[1] && choiceVotes[0] > choiceVotes[2]) {
                finalChoice = "YTA"
            } else if(choiceVotes[1] > choiceVotes[0] && choiceVotes[1] > choiceVotes[2]) {
                // NTA > YTA, and NTA > ESH
                finalChoice = "NTA"
            } else if (choiceVotes[2] > choiceVotes[0] && choiceVotes[2] > choiceVotes[1]) {
                // ESH > YTA, and ESH > NTA
                finalChoice = "ESH"
            }

            selected_posts.push({title: postTitle, choice: finalChoice})
            console.log(choiceVotes);
            
        }
        return selected_posts
    } else {
        return JSON.parse(gameData)
    }

    


}