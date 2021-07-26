 import React,{useState,useEffect} from "react"
 import './App.css'
 import logo from './logo.jpg'
 import {Link,useHistory,useLocation} from 'react-router-dom'
 import useStyles from './Style'
import { NotificationContainer, NotificationManager } from 'react-notifications';
 import {AppBar,Avatar,Toolbar,Typography,Button} from '@material-ui/core'
 import {useDispatch} from 'react-redux' 
 const Header = () =>{

  const classes=useStyles()
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user)
  const dispatch=useDispatch()
  const history=useHistory()
  const location=useLocation()

  useEffect(()=>{
    const token=user?.token
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])

  const logout=()=>{
  NotificationManager.success("Logged Out");
   setTimeout(() => {
            dispatch({type:'LOGOUT'})
    history.push('/')
    setUser(null)
        }, 1000);
  }

  return(
    <>
     <NotificationContainer />
    <div className='headd'>
    <center/>
        <div className='hdlogo'>
            
            <img src={logo} width='60' height='60'/>
            
        </div>
        <div className='heading'>
            <h1 className='heading'>Praedico global research</h1>
        </div>
        {user ? (
                <div style={{display:"flex",alignItems: 'center'}}>

                  <div className='loginbtn' style={{marginRight:"36px"}}>
                      <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                  </div>
                  
                  <div className='signupbtn' >
                  <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                  </div>
                </div>           
                ):
            (
                <>
                  <div className='signupbtn'>
                    <Button component={Link} to='/login' variant="contained" color="primary">Login</Button>
                  </div>
                </>
            )}
    </div>
    </>
  )
}

export default Header
