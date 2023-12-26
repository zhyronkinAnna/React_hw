import React from 'react';
import { useEffect, useState} from 'react';
import {Card} from 'antd';
import './Stepper.css';

const OverallInfo = () => {
   const [overallInfo, setsOverallInfo] = useState([]);

   useEffect(() => {
         getOverallInfo();
   }, []);

   const getOverallInfo = () => {
      const temp = JSON.parse(localStorage.getItem('userDetails')) || [];
      setsOverallInfo(Object.entries(temp).map(([key, value]) => ({ key, value })));
   }

    return (
        <div className='grid'>
           { overallInfo.map((item) => (
            <Card>
               <span>{item.key}: </span>
               <span>{item.value}</span>
            </Card>
           ))}
        </div>
    );
}

export default OverallInfo;
