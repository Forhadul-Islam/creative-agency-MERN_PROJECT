import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ setTag, sidebarInfo }) => (
    <>
        <ul className="dashboard__sidebar--list">
            {sidebarInfo.map((navItem) => (
                <li className="dashboard__sidebar--list-item">
                    <NavLink
                        exact
                        activeClassName="dashboard__sidebar--list-item-link-active"
                        className="dashboard__sidebar--list-item-link"
                        to={navItem.path}
                        onClick={() => {
                            setTag(navItem.tag);
                        }}
                    >
                        <div>Icon</div>
                        {navItem.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </>
);

export default Sidebar;
