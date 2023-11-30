import { useState } from 'react';
import { useImmer } from 'use-immer';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const E1 = () =>{
     const [list, updateList] = useImmer(initialList);
    //const [list, updateList] = useState(initialList);


    console.log(list, "main");

    const clickHendler = () =>{
        let id = 2;
        let nextSeen = "sadsad";
        updateList(draft =>{
            const artwork = draft.find(a => a.id === id);
              artwork.title = nextSeen;
              console.log(list, "inside");
        });

        console.log(list, "after");
    }
     

    return(
      <>
        <button onClick={clickHendler}>
           {/* 123 {initialList[0].title} ... {initialList[2].title},{initialList[2].id} */}
           123 {list[0].title} ... {list[2].title},{list[2].id}
        </button>
      </>
    );
}

export default E1;
