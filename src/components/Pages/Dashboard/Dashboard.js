import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile pl-16">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center">
                <h2 className="text-4xl">
                    {user.displayName}{" "}
                    <span className="text-purple-500">
                        Welcome to your Dashboard
                    </span>
                </h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label for="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to={"/dashboard"}>My Appointment</Link>
                    </li>
                    <li>
                        <Link to={"/dashboard/review"}>My Review</Link>
                    </li>
                    <li>
                        <Link to={"/dashboard/history"}>My History</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;