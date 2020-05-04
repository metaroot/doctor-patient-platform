import React from 'react';
import LoginPage from './LoginPage';
import PatientHome from './PatientHome';
import Prescriptions from './Prescriptions';
import Navbar from './Navbar';
import Report from './Report';

const routes = [
  { name: "LoginPage", path: "/", exact: true, main: () => <LoginPage /> },
];

export default routes;