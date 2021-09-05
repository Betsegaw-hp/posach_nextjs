import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostItem from '../comps/PostItem'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const PostList = ({ posts, users }) => {
    const classes = useStyles();
    
    return ( 
        <>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {posts && posts.map((post) => (
            <Grid key={post.id} item>
              <PostItem   post={post}
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

