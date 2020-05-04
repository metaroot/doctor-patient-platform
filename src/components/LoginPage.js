import React, { Component, useState, useEffect, useContext } from 'react';
import '../styles/PatientHome.css';
import { AuthContext } from './App'
import { Text } from "@chakra-ui/core";
import '../styles/Navbar.css';
import { Stack, Box, Heading } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";
import { Link, useHistory, Redirect, withRouter } from "react-router-dom";


import firebase, { auth, provider } from '../firebase.js';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@chakra-ui/core";
import Navbar from './Navbar';



function Feature({ title, desc, ...rest }) {
    return (
        <Box p={5} shadow="md" borderWidth="1px" {...rest} bg="#FFFFF0">
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
        </Box>
    );
}

function StackEx() {
    return (
        <Stack className="about" spacing={8} variantColor="#FEFCBF">
        <Feature
            fontSize="25px"
            variantColor="#FEFCBF"
            title="সেবাটি সম্পর্কে"
            desc="ভালভাবে লক্ষ্য করলে অনুধাবন করা যায় সামনের দুই মাসের মাঝে বাংলাদেশের স্বাস্থ্য সেবার অবকাঠামো ভেঙ্গে পড়ার বেশ ভাল সম্ভাবনা রয়েছে। ডেঙ্গু ও যখন এসে পড়বে এবং করোনার প্রকোপও যখন আরও বাড়বে তখন মানুষ ঘরে বসে স্বাস্থ্য সেবা চাইবে এবং বর্তমান অনলাইন কিংবা টেলিকম অবকাঠামো এত চাপ নিতে পারবে না। ঠিক সেই সময়টায় এই সেবাটি মানুষজনের সামনে দিলে মানুষজন উপকার পাবে। এবং মনে রাখবে। ওয়েব অ্যাপ বানানোর সবচে কাটিং এইজ টেক ব্যবহৃত হবে নিচ দিয়ে। তাই প্রত্যন্ত অঞ্চলের মানুষ যারা কম ব্যান্ডউইথ ব্যবহার করেন তারাও সেবাটি ব্যবহার করার সময় বারি খাবেন না। বানায়া রাখব। পরে অবস্থা বুইঝা ব্যবস্থা নেয়া যাবে। মাঠে প্রয়োগ করতে ডাক্তারদের সাথে যোগাযোগ করতে হবে। ডাক্তার পোর্টাল এর মক আপ ও দ্রুত শেষ করছি। "
        />
        </Stack>
    );
}

const LoginPage =({history}) => {
    const Auth = useContext(AuthContext);
    const setLoggedIn = Auth.setLoggedIn;
    const isLoggedIn = Auth.isLoggedIn;
    const setUser = Auth.setUser;
    const user = Auth.user;

    useEffect(() => {
        
        auth.onAuthStateChanged((user) => {
            if(user) {
                setUser(user);
                console.log(user);
                setLoggedIn(true);
            }
        })
    }, []);

    const login  = () => {
        auth.signInWithRedirect(provider)
          .then((result) => {
            console.log("yo I'm inside then now");
            const user = result.user;
            setUser(user);
            if(user) setLoggedIn(true);
            auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
            history.push('/home');
        });
    }

    if (isLoggedIn) return <Redirect to="/home" />;
    
    return (
        <>
            {!isLoggedIn && <Breadcrumb className="navbar" bg="#FEFCBF" width="100%" height="100px" spacing="20px">
                <Button onClick={login} variantColor="yellow">Log In</Button>
            </Breadcrumb>}
            {isLoggedIn && <Navbar />}
            <StackEx/>
        </>
    )
    
}

export default withRouter(LoginPage)