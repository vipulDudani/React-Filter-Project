
function Product({item}) {

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        margin: '16px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      };
    
      const imageStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '8px 8px 0 0'
      };
    
      const nameStyle = {
        fontSize: '1.5em',
        margin: '16px 0 8px'
      };
    
      const descriptionStyle = {
        fontSize: '1em',
        color: '#555'
      };





    return (
      <div style={cardStyle}>
              <img  src={item.image} style={imageStyle} />
              <h4>{item.category}</h4>
              <h4 style={nameStyle}>{item.name}</h4>
              <h5 style={descriptionStyle}>{item.info}</h5>
       </div>
    );
  }
  
  export default Product;
  