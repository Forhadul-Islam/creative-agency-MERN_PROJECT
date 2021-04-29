import React, { useState } from 'react';
import AdminDashboard from '../components/Dashboard/AdminDashboard/AdminDashboard';
import UserDashboard from '../components/Dashboard/UserDashboard/UserDashboard';

const Dashboard = () => {
    const [isAdmin] = useState(false);
    return <div>{!isAdmin ? <UserDashboard /> : <AdminDashboard />}</div>;
};

export default Dashboard;
