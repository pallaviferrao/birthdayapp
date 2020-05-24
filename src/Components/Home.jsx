import React from 'react';
import FirstPage from './FirstPage.jsx';
import PeopleSpeak from './PeopleSpeak.jsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';


class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          
        };
      
      }
      
    render(){
       
       
        return(<div class="back">
           
            <CenteredTabs/>
          
         </div>)
    }
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
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
 function CenteredTabs() {


    const AntTabs = withStyles({
        root: {
        //   borderBottom: '1px solid #e8e8e8',
        },
        indicator: {
          backgroundColor: '#1890ff',
        },
      })(Tabs);
      
      const AntTab = withStyles((theme) => ({
        root: {
          textTransform: 'none',
          minWidth: 72,
          fontWeight: theme.typography.fontWeightRegular,
          marginRight: theme.spacing(4),
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:hover': {
            color: '#40a9ff',
            opacity: 1,
          },
          '&$selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
          },
          '&:focus': {
            color: '#40a9ff',
          },
        },
        selected: {},
      }))((props) => <Tab disableRipple {...props} />);
    
    
      
      const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        padding: {
        //   padding: theme.spacing(3),
        },
        demo1: {
        //   backgroundColor: theme.palette.background.paper,
        },
        demo2: {
          backgroundColor: '#2e1534',
        },
      }));
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
      
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Photos" />
          <AntTab label="What  Everyone has to say" />
          <AntTab label="Quiz" />
          <AntTab label="Football" />
        </AntTabs>
        <TabPanel value={value} index={0}>
        <FirstPage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PeopleSpeak/>
      </TabPanel>
      <TabPanel value={value} index={2}>
     text
      </TabPanel>
      <TabPanel value={value} index={3}>
      Somethings
      </TabPanel>
        <Typography  />
        
      </div>
    
    </div>
  );
  }
export default Home