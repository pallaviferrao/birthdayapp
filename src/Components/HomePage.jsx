import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
    root: {
      
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
  })(Tabs);

  const AntTab = withStyles(theme => ({
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
  }))(props => <Tab disableRipple {...props} />);
 

class HomePage extends React.Component{
  
  state = {
    img: ""
  }
    render(){
        // let value = 0;
        // let setValue =0;
        const [value, setValue] = React.useState(0);
        const handleChange = (event, newValue) => {
           setValue(newValue);
           };
        return(
            <div>
 <div >

  <AntTabs value={value} onChange={handleChange} aria-label="ant example">
    <AntTab label="Tab 1" />
    <AntTab label="Tab 2" />
    <AntTab label="Tab 3" />
  </AntTabs>
  <Typography />
</div> 

</div>
        )
    }
}
export default HomePage