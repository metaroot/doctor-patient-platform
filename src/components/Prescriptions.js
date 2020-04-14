import React, {Component} from 'react'
import { useDisclosure, Text } from "@chakra-ui/core";
import '../styles/Prescriptions.css';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from "@chakra-ui/core";
import Navbar from './Navbar';


  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <div className="prescription">
        <Button width="200px" bg="#C6F6D5" variantColor="teal" variant="outline" height="123px" onClick={onOpen}>রিপোর্ট আইডি ie6y9<br/>এর প্রেসক্রিপশন</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>রিপোর্ট আইডি ie6y9<br/>এর প্রেসক্রিপশন</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            জ্বর এর জন্য ন্যাপা সেবন করুন। <br/>
            করোনা সন্দেহে ইথানল সেবন করছিলেন। সেটি আশু বন্ধ করুন। <br/>
            গলা ব্যাথার জন্য  acetaminophen সেবন করতে পারেন। <br/><br/>

            ডঃ ইসমাইল - ০১৮১২৩৪৫৬৭৮ <br/>
            ইন্টার্ন, ময়মনসিংহ মেডিকেল কলেজ 
              {/* <Lorem count={2} /> */}
            </ModalBody>
  
            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button bg="#CEEDFF">Further Communication</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }

class Prescriptions extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <div className="prescriptions" width="100%">
                  <BasicUsage/>
                  <BasicUsage/>
                  <BasicUsage/>
                  <BasicUsage/>
                  <BasicUsage/>
                  <BasicUsage/>
                  <BasicUsage/>
                  <BasicUsage/>
                  <BasicUsage/>
                  <BasicUsage/>
                </div>
            </>
        )
    }
}

export default Prescriptions