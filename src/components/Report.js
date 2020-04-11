import React, { Component } from 'react';
import '../styles/Report.css';
import { Text } from "@chakra-ui/core";
import { useToast } from "@chakra-ui/core";
import { Select } from "@chakra-ui/core";
import { IconButton } from "@chakra-ui/core";
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
            symp: '',
            timeDuration: 1,
            timeUnit: '',
            prevMeds: '',
        };
        this.submitSymp = this.submitSymp.bind(this);
    }

    submitSymp(e) {
        e.preventDefault();
        const entry = {
            symp: this.state.symp,
            timeDuration: this.state.timeDuration,
            timeUnit: this.state.timeUnit,
            prevMeds: this.state.prevMeds
        }
        let prevEntries = this.state.entries

        prevEntries.push(entry);
        
        this.setState({
            symp: '',
            timeDuration: 1,
            timeUnit: '',
            prevMeds: '',
            entries:  prevEntries
        })     
    }

    deleteSymp(id) {
        let currentEntries = this.state.entries
        currentEntries.splice(id, 1)
        this.setState({
            entries: currentEntries
        })
    }
    
    render() {
        return (
            <div className="report-form">
                <div className="make-report" style={{display: 'flex'}}>
                    <img className="iron-man" style={{paddingTop: "35px", paddingBottom:"10px", paddingRight: "20px", width: "70px"}} src="https://media0.giphy.com/media/7OEje1TMS7hCw/giphy.gif?cid=ecf05e472714886e80a908d2ae926c16fbb807cf8733e41a&rid=giphy.gif"></img>
                    <p className="make-report-text">আপনার মেডিকেল রিপোর্ট তৈরি করুন</p>
                </div>
                    
                {this.state.entries ? (this.state.entries.map((entry) => (
                    <div className="symptom">
                        <div className="symptom-text-div">
                            <p className="symptom-text">রোগ:</p>
                            <Select
                                className="symptom-select"
                                placeholder={entry.symp}
                                >
                            </Select>
                        </div>
                        
                        <div className="duration-text-div">
                            <p className="duration-text">সময়কাল:</p>
                            <NumberInput
                                className="number-input" 
                                defaultValue={entry.timeDuration} 
                                min={1} 
                                max={366} 
                                width="100px"
                                >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <div className="duration">
                                <Select
                                    placeholder={entry.timeUnit}
                                    >
                                </Select>
                            </div>
                        </div>
                        <div className="medicine-text-div">
                            <p className="medicine-text">ওষুধ:</p>
                            <Input
                            placeholder={entry.prevMeds}
                            />
                        </div>
                        <IconButton className="delete-symp" icon="delete" variantColor="yellow" onClick={() => this.deleteSymp(this.state.entries.indexOf(entry))} />
                    </div>    
                ))) : (
                    <div />
                )}

                <div className="symptom">
                    <div className="symptom-text-div">
                        <p className="symptom-text">রোগ:</p>
                        <Select
                        className="symptom-select"
                        placeholder="রোগ নির্বাচন করুন"
                        onChange={e => this.setState({ symp: e.target.value })}
                        >
                            <option value="জ্বর">জ্বর</option>
                            <option value="কাশি">কাশি</option>
                            <option value="মাথাব্যথা">মাথাব্যথা</option>
                        </Select>
                    </div>
                    
                    <div className="duration-text-div">
                        <p className="duration-text">সময়কাল:</p>
                        <NumberInput
                        className="number-input" 
                        defaultValue={1} 
                        min={1} 
                        max={366} 
                        width="100px"
                        onChange={value => this.setState({timeDuration: value})}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <div className="duration">
                            <Select
                            className="duration-select" 
                            placeholder="সময়কাল"
                            onChange={e => this.setState({ timeUnit: e.target.value })}
                            >
                                <option value="দিন">দিন</option>
                                <option value="সপ্তাহ">সপ্তাহ</option>
                                <option value="মাস">মাস</option>
                                <option value="year">বছর</option>
                            </Select>
                        </div>
                    </div>
                    <div className="medicine-text-div">
                        <p className="medicine-text">ওষুধ:</p>
                        <Input
                        placeholder="পূর্বে সেবনকৃত ওষুধ"
                        onChange={e => this.setState({ prevMeds: e.target.value })}
                        />
                    </div>
                    <IconButton className="add-symp" icon="add" variantColor="yellow" onClick={this.submitSymp}/>
                </div>
                
                <div className="buttons" style={{paddingTop: "20px"}}>
                    <div className="submit-button">
                        <ToastExample/>
                    </div> 
                </div>       
            </div>
        )
    }
}
  
  export default Report