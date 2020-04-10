import React, { Component } from 'react';
import '../styles/Report.css';
import Disease from './Disease.js'
import { Text } from "@chakra-ui/core";
import { useToast } from "@chakra-ui/core";
import { Select } from "@chakra-ui/core";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/core";
import { Flex } from "@chakra-ui/core";
import { Input } from "@chakra-ui/core";
import { Button } from "@chakra-ui/core";

function ToastExample() {
    const toast = useToast();
    return (
      <Button
        variantColor="yellow"
        onClick={() =>
          toast({
            title: "রিপোর্ট জমা হয়েছে",
            description: "অতিসত্বর একজন ইন্টার্ন কিংবা প্রফেশনাল ডাক্তার আপনার রিপোর্টটি দেখে দিবেন। সেটি ফিরে এলে আপনার নোটিফিকেশন ট্যাবে দেখতে পাবেন  ",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        প্রেরণ করুন
      </Button>
    );
}

class Report extends Component {

    constructor(props) {
        super(props);

        this.state = {
            entries: [],
            sympSet: {
                symp: '',
                timeDuration: 1,
                timeUnit: 'day',
                med: ''
            }
        };
        this.submitSymp = this.submitSymp.bind(this);
    }

    submitSymp(e) {
        e.preventDefault();
        let prevEntries = this.state.entries;

        let unitSymp = {
            symp: 'yo',
            timeDuration: 5,
            timeUnit: 'year',
            med: 'napa'
        }
        
        prevEntries.push(unitSymp);
    
        this.setState({
          entries: prevEntries,
          sympSet: {
            symp: '',
            timeDuration: 1,
            timeUnit: 'day',
            med: ''
          }
        });     
    }
    
    render() {
        return (
            <div className="report-form">
                <div className="make-report">
                    <p className="make-report-text">আপনার মেডিকেল রিপোর্ট তৈরি করুন</p>
                </div>
                <Disease/>

                {this.state.entries.map(() => (
                    <Disease/>
                ))}
                
                <div className="buttons" style={{paddingTop: "20px"}}>
                    <div className="add-button" style={{paddingRight: "10px"}}>
                        <Button 
                            variantColor="yellow"
                            onClick = {this.submitSymp}
                        >
                                আরো যোগ করুন
                        </Button>
                    </div>
                    <div className="submit-button">
                        <ToastExample/>
                    </div> 
                </div>       
            </div>
        )
    }
}
  
  export default Report