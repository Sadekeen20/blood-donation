import React, { useContext } from 'react';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import './Login.css'
import { UserContext } from '../../../App';


const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    

    //to handle duplication of loggin In
    if(firebase.apps.length ===0){
        firebase.initializeApp(firebaseConfig);
    }
    


    const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        
        
        firebase.auth().signInWithPopup(provider).then(function(result) {
             
            const  {displayName,email} = result.user;
            const signedInUser ={name:displayName,email};
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);


          }).catch(function(error) {
            // Handle Errors here.
             
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    // jwt token starts
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            // console.log(idToken);

            sessionStorage.setItem('token',idToken); 
            history.replace(from);//redirect after token is set .
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div className="App container-style container" >
           
            <br/>
            <h2>Login</h2>
            <br/>
            <Button variant="dark" onClick={handleGoogleSignIn}>Sign In using Google</Button>
            
        </div>
    );
};

export default Login;