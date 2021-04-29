import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ setTag, sidebarInfo }) => (
    <>
        <ul className="dashboard__sidebar--list">
            {sidebarInfo.map((navItem) => (
                <li key={navItem.id} className="dashboard__sidebar--list-item">
                    <NavLink
                        exact
                        activeClassName="dashboard__sidebar--list-item-link-active"
                        className="dashboard__sidebar--list-item-link"
                        to={navItem.path}
                        onClick={() => {
                            setTag(navItem.tag);
                        }}
                    >
                        <navItem.icon />
                        {navItem.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </>
);

export default Sidebar;
