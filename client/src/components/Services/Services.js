import React, { useState } from 'react';
import servicesData from '../../datas/services.json';
import image from '../../images/icons/service1.png';

const Services = () => {
    const [services] = useState(servicesData);
    return (
        <div className="services">
            <div className="services__title">
                Provide awesome <span className="services__title--span"> services</span>
            </div>
            <div className="services__container">
                {services.map((service) => (
                    <div className="services__container--item">
                        <img className="services__container--item-image" src={image} alt="jhj" />
                        <div className="services__container--item-title">{service.title}</div>
                        <div className="services__container--item-description">
                            {service.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
