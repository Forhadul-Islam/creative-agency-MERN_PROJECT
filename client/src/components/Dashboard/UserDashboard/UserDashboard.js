import React, { useEffect, useState } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.png';
import Header from '../Shared/Header';
import OrderForm from './OrderForm/OrderForm';
import ReviewForm from './ReviewForm/ReviewForm';
import ServiceList from './ServiceList/ServiceList';
import Sidebar from './Sidebar';

const sidebarInfo = [
    {
        id: 1,
        name: 'Orders',
        path: '/dashboard/order',
        tag: 'Order',
        icon: () => <RiShoppingBagLine />,
    },
    {
        id: 2,
        name: 'Service-list',
        path: '/dashboard/service-list',
        tag: 'Service List',
        icon: () => <RiShoppingBagLine />,
    },
    {
        id: 3,
        name: 'Review',
        path: '/dashboard/review',
        tag: 'Review',
        icon: () => <RiShoppingBagLine />,
    },
];

const routes = [
    {
        path: '/dashboard',
        id: 1,
        exact: true,
        main: () => <OrderForm />,
    },
    {
        path: '/dashboard/order',
        id: 11,
        main: () => <OrderForm />,
    },
    {
        path: '/dashboard/service-list',
        id: 2,
        main: () => <ServiceList />,
    },
    {
        path: '/dashboard/review',
        id: 3,
        main: () => <ReviewForm />,
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
