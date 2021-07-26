import React,{useState,useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Label from '@material-ui/icons/ShoppingCartOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Arrow from '@material-ui/icons/PlayArrowOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Userlist from "./userlist";
import MenuBookIcon from '@material-ui/icons/MenuBook';
//& ${classname write } to change
const useTreeItemStyles = makeStyles((theme) => ({
  root: {
      color: theme.palette.text.secondary,
      '&:hover > $content': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:focus > $content, &$selected > $content': {
       backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
        color: 'var(--tree-view-color)',
      },
      '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
        backgroundColor: 'transparent',
      },
    },
    content: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '$expanded > &': {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    group: {
      marginLeft: 0,
      '& $content': {
        paddingLeft: theme.spacing(2),
      },
    },
    expanded: {},
    selected: {},
    label: {
      fontWeight: 'inherit',
      color: 'inherit',
    },
    labelRoot: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1, 0),
    },
    labelIcon: {
      marginRight: theme.spacing(3),
      fontSize: "29px",
    },

    labelText: {
      fontWeight: 'inherit',
      flexGrow: 1,
    }


  }));
  
  function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
  
    return (
      <TreeItem
        label={
          <div className={classes.labelRoot}>
            <LabelIcon color="inherit" className={classes.labelIcon} />
            <Typography variant="body2" className={classes.labelText}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </div>
        }
        style={{
          '--tree-view-color': color,
          '--tree-view-bg-color': bgColor,
        }}
        classes={{
          root: classes.root,
          content: classes.content,
          expanded: classes.expanded,
          selected: classes.selected,
          group: classes.group,
          label: classes.label,
        }}
        {...other}
      />
    );
  }
  
  StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
  };
  
  const useStyles = makeStyles({
    root: {
      height: 264,
      flexGrow: 1,
      maxWidth: 400,
    },
  });
 
export default function DashboardList(props)  {
 // const [width,setWidth]=useState(0)
    const classes = useStyles();  
    const [size, setSize] = useState(0);

const handleClick=(value)=>{

props.handleView(value)
{size <450 ?  props.handleDrawerClose() :  props.handleDrawer();}
}
const updateSize = () =>{
  setSize(window.innerWidth);
} 
useLayoutEffect(() => {
        
  window.addEventListener('resize', updateSize);
  updateSize();
  return () => window.removeEventListener('resize', updateSize);
}, []);
 return(   
    <TreeView
    className={classes.root}
    defaultCollapseIcon={<ArrowDropDownIcon />}
    defaultExpandIcon={<ArrowRightIcon />}
    defaultEndIcon={<div style={{ width: 24 }} />}
    defaultSelected= {['6']}
      > 
      <StyledTreeItem
        nodeId="6"
        labelText="Users"
        labelIcon={AddCircleOutlineIcon}
        onClick={()=>handleClick(<Userlist />)} 
        color="#e3742f"
        bgColor="#fcefe3"
      />
    <Divider />
  <StyledTreeItem
        nodeId="7"
        labelText="Home"
        labelIcon={MenuBookIcon}
        onClick={()=>props.history.push("/")} 
        color="#e3742f"
        bgColor="#1a73e8"
      />
    <Divider />
    <Divider />
       <StyledTreeItem
        nodeId="50"
        labelText="Logout"
        labelIcon={ExitToAppIcon}
        onClick={()=>handleClick(50)} 
        color="#1a73e8"
        bgColor="#e8f0fe"
      />

  </TreeView>
);
 }
