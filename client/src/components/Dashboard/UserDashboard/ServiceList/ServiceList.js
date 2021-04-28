import { Card, Tag } from 'antd';
import React, { useState } from 'react';
import serviceImg from '../../../../images/icons/service1.png';

const ServiceList = () => {
    const [loading] = useState(false);
    const ServiceListItem = () => (
        <Card bordered loading={loading}>
            <div className="service-list__item">
                <div className="service-list__item--top">
                    <img className="service-list__item--top-image" src={serviceImg} alt="" />
                    <Tag className="service-list__item--top-tag" color="magenta">
                        Pending
                    </Tag>
                </div>
                <div className="service-list__item--bottom">
                    <div className="service-list__item--bottom-title">
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div className="service-list__item--bottom-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque magnam
                        incidunt libero eligendi saepe sapiente quae assumenda dignissimos
                        exercitationem.
                    </div>
                </div>
            </div>
        </Card>
    );
    return (
        <div>
            <div className="service-list">
                <ServiceListItem />
                <ServiceListItem />
                <ServiceListItem />
                <ServiceListItem />
                <ServiceListItem />
            </div>
        </div>
    );
};

export default ServiceList;
