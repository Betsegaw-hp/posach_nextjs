import React from 'react'
import Link from 'next/link'
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/lister.module.css'
import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
  multiText: {
  // height:'2rem',
  }
}))

const CommentList = ({ comment }) => {
  const classes = UseStyles()
    return ( 
        <>
              <div >                  
                <ListItem   alignItems="flex-start"
                            className={styles.list}>            
                  <ListItemAvatar>
                    <Avatar alt={ comment.name.slice(0 ,15) }
                            src={`https://avatars.dicebear.com/api/initials/${comment.name}.svg?mood[]=happy`} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={ comment.name.slice(0 ,15) }
                    className={classes.multiText}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="div"
                          variant="body2"
                          color="textSecondary"
                        >
                        { comment.body }
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />      
              </div>
        </>
     );
}
 
export default CommentList;

