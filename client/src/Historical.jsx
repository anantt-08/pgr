import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
 

export default function Historical(props) {

    const data=props.data
    console.log("Data",data)
    
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
          <i className='fa fa-eye fa-large' style={{minHeight:'20px',padding:'auto'}}> Historical Predictions</i>  
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            style={{backgroundColor:'rgba(0,0,0,0.5)'}}
           
          >
            <center style={{color:'#000'}}>Historical data of 21 days</center>
            <Box p={1}  style={{width:"500px",color:'#fff',height:'90vh'}}   >
              <Typography  style={{backgroundColor:`${data[0].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[0].date}<span style={{marginLeft:"100px"}}> {data[0].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[1].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[1].date}<span style={{marginLeft:"100px"}}> {data[1].condit}</span> </b></Typography>
              <Typography style={{backgroundColor:`${data[2].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[2].date}<span style={{marginLeft:"100px"}}> {data[2].condit}</span> </b></Typography>
              <Typography style={{backgroundColor:`${data[3].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[3].date}<span style={{marginLeft:"100px"}}> {data[3].condit}</span> </b></Typography>
              <Typography style={{backgroundColor:`${data[4].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[4].date}<span style={{marginLeft:"100px"}}> {data[4].condit}</span> </b></Typography>
              <Typography style={{backgroundColor:`${data[5].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[5].date}<span style={{marginLeft:"100px"}}> {data[5].condit}</span> </b></Typography>
              <Typography style={{backgroundColor:`${data[6].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[6].date}<span style={{marginLeft:"100px"}}> {data[6].condit}</span>  </b></Typography>
              <Typography style={{backgroundColor:`${data[7].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[7].date}<span style={{marginLeft:"100px"}}> {data[7].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[8].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[8].date}<span style={{marginLeft:"100px"}}> {data[8].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[9].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[9].date}<span style={{marginLeft:"100px"}}> {data[9].condit}</span></b></Typography>

              <Typography style={{backgroundColor:`${data[10].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[10].date}<span style={{marginLeft:"100px"}}> {data[10].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[11].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[11].date}<span style={{marginLeft:"100px"}}> {data[11].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[12].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[12].date}<span style={{marginLeft:"100px"}}> {data[12].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[13].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[13].date}<span style={{marginLeft:"100px"}}> {data[13].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[14].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[14].date}<span style={{marginLeft:"100px"}}> {data[14].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[15].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[15].date}<span style={{marginLeft:"100px"}}> {data[15].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[16].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[16].date}<span style={{marginLeft:"100px"}}> {data[16].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[17].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[17].date}<span style={{marginLeft:"100px"}}> {data[17].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[18].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[18].date}<span style={{marginLeft:"100px"}}> {data[18].condit}</span></b></Typography>

              <Typography style={{backgroundColor:`${data[19].color}`,paddingTop:10,paddingBottom:10,paddingLeft:20,paddingRight:20,margin:'1px'}}><b>{data[19].date}<span style={{marginLeft:"100px"}}> {data[19].condit}</span></b></Typography>
              <Typography style={{backgroundColor:`${data[20].color}`,paddingBottom:10,paddingTop:10,paddingLeft:20,paddingRight:20}}><b>{data[20].date}<span style={{marginLeft:"100px"}}> {data[20].condit}</span></b></Typography>
              <br></br>
            
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}