import React, { Component } from 'react';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
export default class Forgetpassword extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", errors: {} };
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput = e => {
        // e.preventDefault();
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({email: value });
    }
    
   validateEmail=(email)=> {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    handleForm = e => {
        e.preventDefault();
        if (this.state.email === '') {
            NotificationManager.warning("Email is Required");
            return false;
        }
        if(!this.validateEmail(this.state.email)){
            NotificationManager.error("Incorrect Email Format");
          return false;
        }
        const data = { email: this.state.email };
        axios
            .post("http://localhost:9000/reset", data)
            .then(result => {
                NotificationManager.success("Password Reset link sent to your email .Please check the your email.Link Will be Valid For 30 min");
                this.setState({email:""});
                            })
            .catch(err => {
                  if (err.response && err.response.status === 404)
                    NotificationManager.error(err.response.data.msg);
                  else
                    NotificationManager.error("Something Went Wrong");
                  this.setState({ errors: err.response })
            });

    }
    render() {
        return (
          <div>
            <div className="content">
                <NotificationContainer />
                <form onSubmit={this.handleForm}>
                    <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-sm-1 col-md-3"></div>
                        <div className="col-sm-10 col-md-6">
                         <div>
      <div>
        <div>
          <Card>
            <div className="header pt-3 grey lighten-2">
              <div className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Forgot Password? 
                                 </h3>
              </div>
            </div>
            <CardContent className="mx-2">
          <TextField
          id="outlined-full-width"
          label="Email"
          style={{ margin: 8 }}
          placeholder="Enter Email"
          value={this.email}
          fullWidth
          margin="normal"
          onChange={this.handleInput}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
              <div className="text-center mb-4 mt-5">
                <Button variant="contained" color="secondary" onClick={this.handleForm} 
                  className="btn-block z-depth-2">
                  Send MAIL   
                               </Button>
              </div>
             
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
                        </div>
                        <div className="col-sm-1 col-md-3"></div>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
