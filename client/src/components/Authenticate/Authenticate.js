import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Authenticate = () => {
    // const history = useHistory();
    const [hasAccount, setHasAccount] = useState(true);
    const switchForm = () => {
        setHasAccount(!hasAccount);
    };
    // const handleGoToHome = () => {
    //     history.push('/');
    // };
    return (
        <div className="authenticate">
            <NavLink to="/">
                <img className="authenticate__logo" src={logo} alt="" />
            </NavLink>
            <div className="authenticate__container">
                {hasAccount ? <LoginForm /> : <SignupForm />}
                {
                    <div className="authenticate__container--switch">
                        {hasAccount ? 'Do not have an account?' : 'Already have an account?'}
                        <span
                            onClick={switchForm}
                            role="button"
                            tabIndex="0"
                            className="authenticate__container--switch-span"
                        >
                            {hasAccount ? 'Create an account!' : 'Login here!'}
                        </span>
                    </div>
                }
            </div>
        </div>
    );
};

export default Authenticate;
