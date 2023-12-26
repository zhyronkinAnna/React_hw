import React from 'react';
import { useState, useEffect } from 'react';
import {Card, Radio} from 'antd';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessIcon from '@mui/icons-material/Business';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import FaxIcon from '@mui/icons-material/Fax';

import './Stepper.css';

const buildings = [
  { title: "Квартира", iconTeg: <ApartmentIcon/>},
  { title: "Будинок", iconTeg: <MapsHomeWorkIcon/>},
  { title: "Офіс", iconTeg: <BusinessIcon/>},
  { title: "Бізнес", iconTeg: <FaxIcon/>},
];

const BuildingTypeCard = () => {

  const [checked, setChecked] = useState(null);
  const onChangeHandler = (e) => {
    setChecked(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('building', checked);
  }, [checked]);

    return (
      <Radio.Group onChange={onChangeHandler}>
        <div className='grid'>
            {buildings.map((item)=>( 
                <Card key={item.title}>
                  <div className='card-flex'>
                    <Radio value={item.title}/>
                    {item.title}
                    {item.iconTeg}
                  </div>
                </Card>
         ))}
        </div>
      </Radio.Group>
    );
}

export default BuildingTypeCard;
