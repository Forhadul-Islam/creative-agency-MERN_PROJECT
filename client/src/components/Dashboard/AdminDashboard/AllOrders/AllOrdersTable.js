import { Table } from 'antd';
import React from 'react';

const { Column } = Table;

const selectStyle = {
    padding: '2px',
    border: 'none',
    fontWeight: '600',
    fontSize: ' 1.7rem',
    cursor: 'pointer',
};

const AllOrdersTable = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            email: 32,
            service: '10 Downing Street',
            projectDetails: 'lorem ipsum no more ot do',
            status: ['Pending', 'Done', 'On going'],
        },
        {
            key: '2',
            name: 'John',
            email: 42,
            service: '10 Downing Street',
            projectDetails: 'lorem ipsum no more ot do',
            status: ['Pending', 'Done', 'On going'],
        },
        {
            key: '1',
            name: 'Mike',
            email: 32,
            service: '10 Downing Street',
            projectDetails: 'lorem ipsum no more ot do',
            status: ['Pending', 'Done', 'On going'],
        },
        {
            key: '2',
            name: 'John',
            email: 42,
            service: '10 Downing Street',
            projectDetails: 'some details',
            status: ['Pending', 'Done', 'On going'],
        },
    ];

    return (
        <div>
            <Table
                bordered
                title={() => 'All Orders From Clients'}
                loading={false}
                dataSource={dataSource}
            >
                <Column title="Name" dataIndex="name" key="name" />

                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Service" dataIndex="service" key="service" />
                <Column title="Project details" dataIndex="service" key="projectDetails" />
                <Column
                    title="status"
                    dataIndex="status"
                    key="status"
                    render={(status) => (
                        <>
                            <select style={selectStyle} name="status" id="status">
                                {status.map((option) => (
                                    <option value={option}>{option}</option>
                                ))}
                            </select>
                        </>
                    )}
                />
            </Table>
        </div>
    );
};

export default AllOrdersTable;
