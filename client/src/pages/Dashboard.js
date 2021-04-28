import React, { useState } from 'react';
import AdminDashboard from '../components/Dashboard/AdminDashboard/AdminDashboard';
import UserDashboard from '../components/Dashboard/UserDashboard/UserDashboard';

const Dashboard = () => {
    const [isAdmin] = useState(true);
    return <div>{!isAdmin ? <UserDashboard /> : <AdminDashboard />}</div>;
};

export default Dashboard;
