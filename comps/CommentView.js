import Link from 'next/link'
import CommentList from './CommentList';
import CommentInput from './commentInput';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/CommentOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Divider } from '@material-ui/core';
import styles from '../styles/lister.module.css'
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core'
import BackArrow from '@material-ui/icons/ArrowBackIosOutlined'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '50vw',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  actionIcons: {
    justifyContent: 'space-evenly'
  },
  CommentInput: {
    padding: theme.spacing(0, 2.3)
  },
}));

const CommentItem = ({ comments, post, users }) => {
    const classes = useStyles();
    const [user, setUser] = useState([{name: 'N/A'}])

    useEffect(() => {
      const poster = users.filter(user => {
        return user.id === post.userId
      })
      setUser(poster)
    },[post.userId, users])

    return ( 
    <>
          <Button>
        <Link href="/" passHref>
            <BackArrow />
        </Link>
    </Button>
    <Card className={classes.root}>
      <Link href={`/lister/${user[0].id}`} passHref>
        <a>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe"
                  className={classes.avatar}
                  src={`https://avatars.dicebear.com/api/initials/${user[0].name}.svg`}>
          </Avatar>
        }
        title={ user[0].name }
        // cheating , I know
        subheader={`${Math.round(Math.random() * 10)} hours ago`}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
        </a>
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          { post.body }
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image="https://source.unsplash.com/random"
        title="Paella dish"
      />
      <CardActions className={classes.actionIcons}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label="comment"
        >
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <Divider variant='middle' component='hr'/>
      <div className="comment-list-continare">
        <div className={classes.CommentInput}>
        <CommentInput />
        </div>
        <List className={styles.list_container} >
            {comments && comments.map(comment => ( 
                <CommentList  key={comment.id}
                              comment={comment}/>
            ))}
        </List>
        
      </div>
    </Card>
    </>
     );
}
 
export default CommentItem;