import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
/**Components */
import Topbar from './Topbar';
import NavDrawer from './NavDrawer';

const drawerWidth = 240;
// Creating own styles rules //

const useStyles = (props) =>
  makeStyles((theme) => {
    return {
      root: {
        display: 'flex'
      },
      page: {
        background: theme.palette.background.default,
        width: '100%',
        flexGrow: 1,
        minHeight: '100vh',
        height: '100%',
        padding: theme.spacing(3)
      },
      toolbar: theme.mixins.toolbar,
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0
        }
      },
      navDrawer: {
        width: drawerWidth,
        // Page size nave drawer options
        [theme.breakpoints.down('md')]: {
          width: drawerWidth,
          flexShrink: 0,
          display: 'none'
        },
        [theme.breakpoints.up('md')]: {
          width: drawerWidth,
          flexShrink: 0
        }
      },
      drawerPaper: {
        width: drawerWidth
      },
      appBar: {
        [theme.breakpoints.up('md')]: {
          width: props ? `calc(100% - ${drawerWidth}px) !important` : '100% !important'
        },
        zIndex: theme.zIndex.drawer + 1
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          display: 'none !important'
        }
      },
      closeMenuButton: {
        marginRight: 'auto !important',
        marginLeft: 0 + '!important'
      },
      title: {
        padding: theme.spacing(2)
      }
    };
  });
// End of creating own styles rules //

const Layout = ({
  children,
  logOutApp
  // auth: { isAuthenticated, users: { isAdmin = false } = {} },
}) => {
  const isAuthenticated = true;

  const classes = useStyles(isAuthenticated)();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handelLogOut = () => {
    // logOutApp();
    // toast.success("Logged Out Successfully");
    navigate('/');
  };

  return (
    <>
      <div className={classes.root}>
        {/* App Bar Configurations  */}
        <Topbar
          appBar={classes.appBar}
          auth={isAuthenticated}
          logOutApp={handelLogOut}
          menuButton={classes.menuButton}
          mobileOpen={() => setMobileOpen(!mobileOpen)}
        />
        {/* Side Drawer settings */}
        {isAuthenticated && (
          <NavDrawer
            {...classes}
            currentUserRole={true} // {isAdmin}
            mobileOpen={mobileOpen}
            setMobileOpen={() => setMobileOpen(!mobileOpen)}
          />
        )}
        {/* Main content */}
        <div className={classes.page}>
          <div className={classes.toolbar}></div>
          {children}
        </div>
        {/* End Main content */}
      </div>
    </>
  );
};

Layout.propTypes = {
  // children: PropTypes.node.isRequired,
  // auth: PropTypes.object.isRequired,
  // logOutApp: PropTypes.func.isRequired,
};

export default Layout;
