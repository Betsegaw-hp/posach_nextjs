import React from 'react'
import { server } from '../../config/index'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from '../../styles/lister.module.css'
import Link from 'next/link'


const Lister = ({ users }) => {
    
    return ( 
        <>
         <div >
         <h1 className={styles.title}>users</h1>   
         <List className={styles.list_container} >
            {users && users.map(user => ( 
                <Link key={user.id} 
                      href={`/lister/${user.id}`} 
                      passHref>
                 <a>                   
                <ListItem   alignItems="flex-start"
                            className={styles.list}>
                  <ListItemAvatar>
                    <Avatar alt={ user.name } src={`https://avatars.dicebear.com/api/initials/${user.name}.svg?mood[]=happy`} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.username}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="div"
                          variant="body2"
                          color="textPrimary"
                        >
                        { user.name }
                        </Typography>
                        {` ${user.address.street}, ${user.address.city}  `}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                  </a>       

                </Link>
            ))}
        </List>
         </div>

        </>
     );
    }
 
export default Lister;


export async function getStaticProps() {
    const res = await fetch(`${server}/api/lister`)
    const data = await res.json()

    return {
        props: { users : data}
    }
}