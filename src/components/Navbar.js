import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from "@chakra-ui/core";
import React, { Component} from 'react';
import '../styles/Navbar.css';
import Report from './Report'
import Prescriptions from './Prescriptions'
import { Link } from "@reach/router"



  class Navbar extends Component {
      render() {
          return (
            <Breadcrumb className="navbar" bg="#FEFCBF" width="100%" height="100px" spacing="20px">
                <BreadcrumbItem>
                    <BreadcrumbLink className="link" color="#5F370E" href="/">সেবা সম্পর্কে</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink className="link" color="#5F370E" href="/prescriptions">প্রেসক্রিপশন সমূহ</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink className="link" color="#5F370E" href="/report">রিপোর্ট তৈরি করুন</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink className="link" color="#5F370E" href="#">লগ আউট</BreadcrumbLink>
                </BreadcrumbItem> 
            </Breadcrumb>              
          )
      }
  }
  
  export default Navbar