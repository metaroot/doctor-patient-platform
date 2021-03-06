import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/core";
import React, { Component, useContext, useState, useEffect} from 'react';
import '../styles/Navbar.css';
import Report from './Report'
import Prescriptions from './Prescriptions'
import { Link } from 'react-router-dom'
import LoginPage from './LoginPage'
import { Button } from "@chakra-ui/core";
import { Redirect, useHistory, withRouter } from 'react-router-dom';
import firebase, { auth, provider } from '../firebase.js';
import { AuthContext }  from './App'

const Navbar = () => {
    const Auth = useContext(AuthContext);
    const setLoggedIn = Auth.setLoggedIn || {};
    const isLoggedIn = Auth.isLoggedIn;
    const user = Auth.user;
    const setUser = Auth.setUser;

    const history = useHistory();


    const handleLogout = () => {
        auth.signOut().then(() => {
            setLoggedIn(false);
            setUser(null);
            history.push('/');
            //console.log(isLoggedIn);
        }); 
    }
    return (
        <Breadcrumb className="navbar" bg="#FEFCBF" width="100%" height="100px" spacing="20px">
            <BreadcrumbItem>
                <BreadcrumbLink className="link" color="#5F370E" as={Link} to='/'>সেবা সম্পর্কে</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink className="link" color="#5F370E" as={Link} to='/prescriptions'>প্রেসক্রিপশন সমূহ</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink className="link" color="#5F370E" as={Link} to='/report'>রিপোর্ট তৈরি করুন</BreadcrumbLink>
            </BreadcrumbItem>

            <Button variantColor="yellow" onClick={handleLogout}>                            
                লগ আউট
            </Button> 
        </Breadcrumb>              
    )
    
}
  
  export default withRouter(Navbar)