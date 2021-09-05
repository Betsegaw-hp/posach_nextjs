import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/lister.module.css'
import Link from 'next/link'

const CommentList = () => {
    return ( 
        <>
        <List className={styles.list_container} >
            {[0,1,2,3,4,5].map((user, i) => ( 
                <div key={i}>                  
                <ListItem   alignItems="flex-start"
                            className={styles.list}>
                <Link   //  key={user.id} 
                        //  href={`/lister/${user.id}`} 
                            href={`/lister/${user}`} 
                            passHref> 
                   <a>             
                  <ListItemAvatar>
                    <Avatar alt={ user }
                            // alt={ user.name }
                            // src={`https://avatars.dicebear.com/api/initials/${user.name}.svg?mood[]=happy`} />
                            src={`https://avatars.dicebear.com/api/initials/${user}.svg?mood[]=happy`} />
                  </ListItemAvatar>
                  </a>
                </Link> 
                  <ListItemText
                    // primary={user.username}
                    primary={user}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="div"
                          variant="body2"
                          color="textPrimary"
                        >
                        {/* { user.name } */}
                        { user }
                        </Typography>
                        {/* {` ${user.address.street}, ${user.address.city}  `} */}
                        {` ${user}, ${user}  `}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />      
                </div>
            ))}
        </List>
        </>
     );
}
 
export default CommentList;