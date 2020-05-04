import React, { useContext } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { bool, any, object } from 'prop-types';
import { AuthContext } from './App';

const ProtectedRouteHoc = ({ component: Component, ...rest }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const currentUserExistance = !!isLoggedIn;

    if (currentUserExistance || rest.public) {
        
		return (
			<Route
				{...rest}
				render={props => {
					return <Component {...props}></Component>;
				}}
			/>
		);
	}
	return <Redirect to={{ pathname: '/'}} />;
};

ProtectedRouteHoc.propTypes = {
	component: any,
	isLoggedIn: bool,
	rest: object,
	props: object,
};

export default withRouter(ProtectedRouteHoc);