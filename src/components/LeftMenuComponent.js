import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import PersonIcon from '@material-ui/icons/Person';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  fixToBottom: {
    marginTop: 'auto',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
  }
}));


const LeftMenu = () => {
      const classes = useStyles();
      const [open, setOpen] = React.useState(false);

      const handleDrawer = () => {
        setOpen(!open);
      };

      return (
        <div>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            
            <div>
              <IconButton onClick={handleDrawer}>
                {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon><HomeIcon  /></ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><CreateIcon /></ListItemIcon>
                <ListItemText primary="Writings" />
              </ListItem>
              <ListItem button>
                <ListItemIcon><PersonIcon /></ListItemIcon>
                <ListItemText primary="Me" />
              </ListItem>
            </List>
            
            <div className={classes.fixToBottom}>
              <List>
                <ListItem button>
                  <ListItemIcon><EmailIcon /></ListItemIcon>
                  <ListItemText primary="Email" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><TwitterIcon /></ListItemIcon>
                  <ListItemText primary="Twitter" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><GitHubIcon /></ListItemIcon>
                  <ListItemText primary="GitHub" />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </div>
      );
};

export default LeftMenu;
