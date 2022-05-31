import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './recentTrades.css';
import RecentTradesList from './recentTradesList/recentTradesList';

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    }
  }));
  

function RecentTrades () {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              // indicatorColor="transparent"
              //   textColor="primary"
              //   variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab className={classes.tab} label="Recent trades" {...a11yProps(0)} />
              <Tab className={classes.tab} label="Market Depth" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className="recentTradesListWrapper">

              <header className='recentTradesListHeader'>
                <span className="recentTradesListHeaderLabel">price</span>
                <span className="recentTradesListHeaderLabel">amount</span>
                <span className="recentTradesListHeaderLabel">time</span>
              </header>
            
              <ul className='recentTradesListTable'>
                  <RecentTradesList />
              </ul>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Market depth
          </TabPanel>
        </div> 
      </>
    );
}

export default RecentTrades;


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


