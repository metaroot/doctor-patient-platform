import React from 'react';
import Report from './Report';
import Prescriptions from './Prescriptions';
import PatientHome from './PatientHome';

const protectedRoutes = [
	{
		name: 'Report',
		exact: true,
		path: '/report',
		main: props => <Report {...props} />,
		public: false,
    },
    {
		name: 'Prescriptions',
		exact: true,
		path: '/prescriptions',
		main: props => <Prescriptions {...props} />,
		public: false,
    },
    {
		name: 'PatientHome',
		exact: true,
		path: '/home',
		main: props => <PatientHome {...props} />,
		public: false,
	},
];

export default protectedRoutes;
