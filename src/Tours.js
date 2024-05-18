import Card from "./Card";

function Tours({tours}) {

    const appStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '16px'
      };

  return (
    <div>
        <div>
            <h1>Play with Destinations</h1>
        </div>

        <div>

            {

                tours.map((tour)=>{

                    return <div style={appStyle}><Card {...tour}/></div>
                    
                }) 



            }

        </div>
        
        
        
        
    </div>
  );
}

export default Tours;
