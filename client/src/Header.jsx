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
            <center>
            <img src={logo} width='60' height='60'/>
            </center>
            
        </div>
        <div className='heading'>
            <center>
            <h1 className='heading'>Praedico global research</h1>
            </center>
        </div>
        {user ? (
                <div >

                  <div className='loginbtn' >
                    <center>
                      <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                      </center>
                  </div>
                  
                  <div className='signupbtn' >
                    <center>
                  <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                  </center>
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
