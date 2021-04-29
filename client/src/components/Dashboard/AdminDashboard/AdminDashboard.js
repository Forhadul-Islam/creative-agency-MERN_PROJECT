import React, { useEffect, useState } from 'react';
import { AiOutlineBorderOuter, AiOutlineUserAdd } from 'react-icons/ai';
import { RiAddFill } from 'react-icons/ri';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.png';
import Header from '../Shared/Header';
import Sidebar from '../UserDashboard/Sidebar';
import AddService from './AddService/AddService';
import AllOrders from './AllOrders/AllOrders';
import MakeAdmin from './MakeAdmin/MakeAdmin';

const sidebarInfo = [
    {
        id: 1,
        name: 'All Orders',
        path: '/dashboard/all-orders',
        tag: 'All Orders',
        icon: AiOutlineBorderOuter,
    },
    {
        id: 2,
        name: 'Add service',
        path: '/dashboard/add-service',
        tag: 'Add Service',
        icon: RiAddFill,
    },
    {
        id: 3,
        name: 'Make Admin',
        path: '/dashboard/make-admin',
        tag: 'Make Admin',
        icon: AiOutlineUserAdd,
    },
];

const routes = [
    {
        path: '/dashboard',
        id: 1,
        exact: true,
        main: () => <AllOrders />,
    },
    {
        path: '/dashboard/all-orders',
        id: 1,
        exact: true,
        main: () => <AllOrders />,
    },
    {
        path: '/dashboard/add-service',
        id: 11,
        main: () => <AddService />,
    },
    {
        path: '/dashboard/make-admin',
        id: 2,
        main: () => <MakeAdmin />,
    },
];

export default function UserDashboard() {
    const [tag, setTag] = useState('Order');
    const location = useLocation();
    useEffect(() => {
        setTag(location.pathname.split('/')[2]);
    }, [location.pathname]);
    return (
        <Router>
            <div className="dashboard">
                <div className="dashboard__sidebar">
                    <a href="/">
                        <img className="dashboard__sidebar--logo" src={logo} alt="" />
                    </a>
                    <Sidebar setTag={setTag} sidebarInfo={sidebarInfo} />
                </div>
                <div>
                    <div className="dashboard__main">
                        <div className="dashboard__main--header">
                            <Header tag={tag} />
                        </div>
                        <div className="dashboard__main--container">
                            <Switch>
                                {routes.map((route) => (
                                    <Route key={route.id} path={route.path} exact={route.exact}>
                                        <route.main />
                                    </Route>
                                ))}
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}
