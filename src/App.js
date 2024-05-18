
import './App.css';
import {useEffect, useState} from 'react';
import data from './data';
import Product from './Product';

function App() {

        const buttonStyle = {
          backgroundColor: '#4CAF50', /* Green */
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          transitionDuration: '0.4s',
          borderRadius: '12px',
      };
      
      const containerStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center'
      };


      const [items,setitems]=useState(data);
      console.log(data);
      const clickHandler=(categoryItem)=>{

        const updateItems=data.filter((currItem)=>{
            return currItem.category==categoryItem;
        });
        
        console.log(updateItems);
        setitems(updateItems);

      }

      const showAll=()=>{
        setitems(data);
      }
  

  return (
    <div>

        <div style={containerStyle}>
          <button style={buttonStyle} onClick={()=>clickHandler('Breakfast')}>Breakfast</button>
          <button style={buttonStyle} onClick={()=>clickHandler('Lunch')}>Lunch</button>
          <button style={buttonStyle} onClick={()=>clickHandler('Dinner')}>Dinner</button>
          <button style={buttonStyle} onClick={()=>showAll()}>All</button>

        </div>

        <div>

        {

          items.map((item)=>(
              <Product key={item.id} item={item}/>
          ))

        }
      
      </div>






        
    </div>
  );
}

export default App;
