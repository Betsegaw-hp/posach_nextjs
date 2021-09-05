import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/FavoriteOutlined';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/CommentOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const PostItem = (props) => {
    const { post, user } = props
    const classes = useStyles();
    
    return ( 
    <>
          <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          B
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={user[0].name}
      // cheating , I know
      subheader={`${Math.abs(Math.round((new Date().getMilliseconds())/60 - (Math.random() * 10)))} hours ago`}
    />
    <CardMedia
      className={classes.media}
      loading
      image={`https://source.unsplash.com/featured/${post.title}`}
      title={post.title}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        { post.body }
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="show more">
        <CommentIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
    </Card>
    </>
     );
}
 
export default PostItem;





