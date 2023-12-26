import { Card, Checkbox } from 'antd';
import React from 'react';
import { useState, useEffect} from 'react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeckIcon from '@mui/icons-material/Deck';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

import './Stepper.css';

const options = [
    { value: "Захист від вторгнення", iconTag: <SportsMartialArtsIcon/>},
    { value: "Пожежна безпека", iconTag: <LocalFireDepartmentIcon/>},
    { value: "Захист від протікань", iconTag: <WaterDropIcon/>},
    { value: "Охорона вулиці", iconTag: <DeckIcon/>}
];

const ProtectionType = () => {
    const [checkedOptions, setCheckedOptions] = useState(null);
    const [optionsState, setOptions] = useState(options);

    const onChangeHandler = (checkedValues) => {
        setCheckedOptions(checkedValues);
    };

    useEffect(() => {
       const buildingType = localStorage.getItem('building');
            if (buildingType === 'Квартира') {
                const isUpdateNeeded = optionsState.some(option => 
                    option.value === 'Охорона вулиці' && !option.disabled);

                if (!isUpdateNeeded) return;

                const updatedOptions = optionsState.map(option =>
                    option.value === 'Охорона вулиці'
                        ? { ...option, disabled: true }
                        : option
                );
                setOptions(updatedOptions);
            }
    }, [optionsState]);

    useEffect(() => {
        localStorage.setItem('protection', JSON.stringify(checkedOptions));
    }, [checkedOptions])

    return (
        <Checkbox.Group className='grid' onChange={onChangeHandler}>
             {optionsState.map((option) => ( 
                <Card key={option.value}>
                    <div className='card-flex'>
                        <Checkbox key={option.value} 
                                  value={option.value} 
                                  disabled={option.disabled}>
                            {option.value}
                        </Checkbox>
                        {option.iconTag}
                    </div>
                </Card>
      ))}
        </Checkbox.Group>
    );
}

export default ProtectionType;
