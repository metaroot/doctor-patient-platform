import React, {Component, useState, useEffect} from 'react'
import { useDisclosure, Text } from "@chakra-ui/core";
import '../styles/Prescriptions.css';
import firebase from '../firebase.js'

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


function BasicUsage(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="prescription">
      <Button width="200px" bg="#C6F6D5" variantColor="teal" variant="outline" height="123px" onClick={onOpen}>{props.reportId}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>রিপোর্ট আইডি {props.reportId}<br/>এর প্রেসক্রিপশন</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.prevMeds.map((prevMed) => {
              return <div>{prevMed}</div>
            })}
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

function Prescriptions() {
    
    const [currentReport, setCurrentReport] = useState('');
    const [userName, setUserName] = useState('');
    const [reports, setReports] = useState([]);

    

    useEffect(() => {
      const reportsRef = firebase.database().ref('reports');
      reportsRef.on('value', (snapshot) => {
        let reports = snapshot.val();
        let newState = [];

        for(let report in reports) {
          newState.push({
            id: report,
            report: reports[report]
          })
        }
        setReports(newState);
      })
    }, []);
  
    return (
        <>
            <Navbar/>
            <div className="prescriptions" width="100%">
              {reports.map((report) => {
                let symptoms = []
                report.report.map((id) => {
                  let symptom = id.timeDuration + " " + id.timeUnit + " ধরে " + id.symp + "এ ভুগছেন। পূর্বে " + id.prevMeds + " সেবন করেছেন।"
                  symptoms.push( symptom );
                })
                return <BasicUsage reportId={report.id} prevMeds={symptoms}/>
              })}
            </div>
        </>
    )
}

export default Prescriptions