import React,{useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [People, setPeople] = useState(data);

  const removeItem = (id)=>{
     let newPeople = People.filter((person) => person.id !== id)
     setPeople(newPeople)
  }
  return <React.Fragment>
    {People.map((person)=>{
      const {id,name} = person
      return(
        <div key={id} className='item'>
        <h3>{name}</h3>
        <button onClick={()=>removeItem(id)}>Remove</button>
        </div>
      )
    })}
    <button className='btn' onClick={()=>setPeople([])}>Remove list</button>


  </React.Fragment>
  
};

export default UseStateArray;
