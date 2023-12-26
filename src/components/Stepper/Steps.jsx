import React from 'react';
import { Button, Divider, Steps, Card} from 'antd';
import { useState } from 'react';
import BuildingTypeCard from './BuildingTypeCard';
import ProtectionType from './ProtectionType';
import Details from './Details';
import OverallInfo from './OverallInfo';


const StepItems = [
  {id: 0, title: 'Виберіть тип приміщення', content: <BuildingTypeCard/>},
  {id: 1, title: 'Виберіть тип захисту', content: <ProtectionType/>},
  {id: 2, title: 'Уточніть деталі', content: <Details/>},
  {id: 3, title: 'Загальна інформація', content: <OverallInfo/>},
];

const Stepper = () => {
  const [current, setCurrent] = useState(0);
  
  return(  
    <>
      <Steps current={current}>
          {StepItems.map((item) => (<Steps.Step title={item.title} key={item.id}/>))}
      </Steps>
     
      <Divider/>

      <section>{StepItems[current].content}</section>

      <Button onClick={()=>{
        current !== StepItems.length - 1 ? setCurrent(current + 1) : setCurrent(StepItems.length - 1)}}>
          Continue</Button>
    </>
  );
}
export default Stepper;