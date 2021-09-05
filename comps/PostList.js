import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostItem from '../comps/PostItem'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const PostList = ({ posts, users, comments }) => {
    const classes = useStyles();
    
    return ( 
        <>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {posts && posts.map((post) => (
            <Grid key={post.id} item>
              <PostItem   post={post}
                          comment={comments && comments.filter(comment => {
                            return comment.postId === post.id
                          })}
                          user={ users && users.filter(user => { 
                            return user.id === post.userId})
                          }/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
        </>
     );
}
 
export default PostList;

