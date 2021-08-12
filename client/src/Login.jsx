import React,{useState} from "react"
import './App.css'
import axios from 'axios'
import Nav from './Navbar'
import {Avatar,Button,Paper,Grid,Typography,Container, TextField} from '@material-ui/core'
import useStyles from './Style'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Input from './Input'
import Icon from './Icon'
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import {signin,signup} from './actions/auth'
import { Link } from 'react-router-dom';
const initialState={firstName:'',lastName:'',email:'',mobileno:'',password:'',confirmPassword:''}
const Login = () =>{
  const classes=useStyles()
  const [showPassword,setShowPassword]=useState(false)
  const [isSignup,setIsSignup]=useState(false)
  const [formData,setFormData]=useState(initialState)
  const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword)
  const dispatch=useDispatch()
  const history=useHistory()

  const handleSubmit=async (e)=>{
      e.preventDefault();
      const API=axios.create({baseURL:'http://localhost:9000'})
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization =`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})
      if(isSignup){
   try{
    
       const {data}=await API.post('/signup',formData)
         NotificationManager.success("Success");
         setTimeout(() => {
          dispatch({type:'AUTH',data})         
                 history.push('/')
        }, 1000);
    }
    catch(err){
        if (
          err.response &&
          (err.response.status === 404 || err.response.status === 401)
        )
          NotificationManager.error(err.response.data.message);
        else NotificationManager.error("Something Went Wrong");
      };
      }
      
      else{
      try{

        const {data}=await API.post('/signin',formData)
         NotificationManager.success("Success");
          setTimeout(() => {
       dispatch({type:'AUTH',data})
        history.push('/')
       }, 1000);
    }
      catch(err){
        if (
          err.response &&
          (err.response.status === 404 || err.response.status === 401)
        )
          NotificationManager.error(err.response.data.message);
        else NotificationManager.error("Something Went Wrong");
      };
      }
  }

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const switchMode=()=>{
    setIsSignup((prevIsSignup)=>!prevIsSignup)
    setShowPassword(false)
}

const googleSuccess=async(res)=>{
  const result=res?.profileObj
        const token=res?.tokenId

        try{
                dispatch({type:'AUTH',data:{result,token}})
                history.push('/')
        }catch(err){
            console.log(err)
        }
}
const googleFailure=(error)=>{
  console.log("Google Sign In Failed, Try Agian Later")
  console.log(error)
}
  return(
    <>
    <NotificationContainer />
    <br/>
    <div className="form">
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon/>
        </Avatar>
        <Typography variant="h5">{isSignup?'Sign Up':'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {
                isSignup&&(
                  <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                  </>
                )
              }
              <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              { isSignup &&  <Input name="mobileno" label="Contact Number" handleChange={handleChange} type="text"/>}
              
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/>
              { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
            </Grid>
            <Grid container spacing={3}>
              
            <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                {isSignup?'Sign Up':'Sign In'}
            </Button>
            </Grid>
           {/* <Grid item xs={12}>
            <GoogleLogin
                        clientId="580463721095-cji152gg9b4iog5eaegvhq0hnol4e7lp.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <Button 
                                className={classes.googleButton} 
                                color='primary' 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon/>} 
                                variant="contained">
                                    Google Sign In
                                </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
            </Grid> */}
            {isSignup ? 
            <></>:
             <Grid container 
         >
          <Grid item md  className={classes.forget}>
          <Link to="/forget-password" className={classes.yo}>Forgot Password?</Link>
          </Grid>
        </Grid>
}
            <Grid item xs={12}>
            <Grid container justify='flex-end'>
                        <Grid item>
                              <Button onClick={switchMode}>
                                <span style={{fontWeight:"bolder",color:"darkgreen"}}>{isSignup ? 'Already have an account? Sign In':'If not have account, Sign Up' }</span>
                            </Button>
                        </Grid>
            </Grid>

            </Grid>
            </Grid>
        </form>
      </Paper>
    </Container>
    </div>
    </>
  )
}

export default Login