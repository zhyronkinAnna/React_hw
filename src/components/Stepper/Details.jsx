import { useEffect, useState } from "react";
import React from 'react';
import {Card, Input} from 'antd';

import data from './protections.json';

const Details = () => {

    let building = "";
    let protections = [];
    let protectionDetails = [];
    const [buildingDetails, setBuildingDetails] = useState([]);
  
    useEffect(() => {
       building = localStorage.getItem('building').toString();
       protections = JSON.parse(localStorage.getItem('protection'));
       protectionDetails = data.protectionDetails;
       getProtections();
    }, []);

    const getProtections = () => {
        let protectionsStr = [];
        const dataProtections = data[building].protections;
    
        for (let protect of dataProtections) {
          if (protections.find((item) => item === protect.type)) {
            const protectDetails = getProtectDetails(protect.req);
            protectionsStr.push(...protectDetails);
          }
        }
        setBuildingDetails([...new Set(protectionsStr)]);
    };

    useEffect(() => {
        console.log(buildingDetails);
    }, [buildingDetails]);

    const getProtectDetails = (detailsArr) => {
        return detailsArr.map(index => protectionDetails[index]);
    }

    const inputOnChange = (e, item) => {
        const { value } = e.target;

        const storedUserdetails = JSON.parse(localStorage.getItem('userDetails')) || [];
        storedUserdetails[item.title] = value;
        localStorage.setItem('userDetails', JSON.stringify(storedUserdetails));
    }

    return (
        <form className="grid">
            {buildingDetails.map((item) => (
                <Card className="card-flex" key={item.id}>
                    {item.title}
                    <Input onChange={(e) => inputOnChange(e, item)}/>
                </Card>
            ))}
            
        </form>
    );
}

export default Details;
