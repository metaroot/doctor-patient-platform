import React, { Component } from 'react';
import '../styles/Report.css';
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
      render() {
          return (
              <div className="report-form">
                <div className="make-report">
                    <p className="make-report-text">আপনার মেডিকেল রিপোর্ট তৈরি করুন</p>
                </div>
                <div className="symptom">
                    <div className="symptom-text-div">
                        <p className="symptom-text">রোগ:</p>
                        <Select className="symptom-select" placeholder="রোগ নির্বাচন করুন">
                            <option value="option1">জ্বর</option>
                            <option value="option2">কাশি</option>
                            <option value="option3">মাথাব্যথা</option>
                        </Select>
                    </div>
                    
                    <div className="duration-text-div">
                        <p className="duration-text">সময়কাল:</p>
                        <NumberInput className="number-input" defaultValue={1} min={1} max={366} width="100px">
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <div className="duration">
                            <Select className="duration-select" placeholder="দিন">
                                <option value="option1">সময়</option>
                                <option value="option2">সপ্তাহ</option>
                                <option value="option3">মাস</option>
                                <option value="option3">বছর</option>
                            </Select>
                        </div>
                    </div>
                    <div className="medicine-text-div">
                        <p className="medicine-text">ওষুধ:</p>
                        <Input placeholder="পূর্বে সেবনকৃত ওষুধ"/>
                    </div>

                    <Button variantColor="yellow">আরো যোগ করুন</Button>

                </div>
                <div className="submit-button" style={{paddingTop: "20px"}}>
                    <ToastExample/>
                </div>     
              </div>
          )
      }
}
  
  export default Report