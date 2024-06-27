import React from 'react'
import './ListProduct.css'

const ListProduct = () => {

  const [allproducts, setA11Products] = useState([]);
const fetchlnfo=async ()=>{
  await fetch('http://localhost:4000/allproducts')
  .then((res)=>res.json())
  .then((data)=>{setAllProducts(data)});
}

  return (
    <div className='list-product'>
      <h1>A11 Products List</h1>
<div className="1istproduct-format-main">
  <p>Products</p>
  <p>Title</p>
  <p>Old Price</p>
  <p>New Price</p>
  <p>Category</p>
  <p>Remove</p>
</div>

<div className="listproduct-allproducts">
<hr/>

</div>

    </div>
  )
}

export default ListProduct
