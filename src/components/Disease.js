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



class Disease extends Component {
    render() {
        return (
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
                        <Select className="duration-select" placeholder="দিন">yarn
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
            </div>      
        )
    }
}

export default Disease;