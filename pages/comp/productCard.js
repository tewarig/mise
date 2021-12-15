export default  function ProductCard(id , name,  price ,categories){
    return(<div id={id}>
    product id: {id }
    product Name:  {name}
    product price: {price}
    </div>);
}