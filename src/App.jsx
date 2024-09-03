import { useState, useEffect } from "react";
import ProductList from "./ProductList";

function App() {
  const [pim, setPim] = useState("");
  const [data, setData] = useState([]);
  const [deley,setDeley] = useState("")

  
  useEffect( ()=> {
    let sto = setTimeout( ()=>{
      setDeley(pim)
    },1000 )
    return ()=>{
      clearTimeout(sto)
    }
  },[pim] )



  const productFetch = async () => {
    const resp = await fetch("https://dummyjson.com/products/search?q=phone");
    const shows = await resp.json();

    // console.log(shows);
    
    setData(
      shows.products.filter((el) => {
      return  String(el.title).toLowerCase().includes(pim.toLowerCase()) ||
              String(el.price).toLowerCase().includes(pim.toLowerCase()) ||
              String(el.stock).toLowerCase().includes(pim.toLowerCase());
      })
    );
  };

  useEffect(() => {
    productFetch();
  }, [deley]);

  const hdlChange = (e) => {
    setPim(e);
    console.log(e);
  };

  return (
    <div className="p-7">
      <h1 className="bg-lime-500 text-white text-3xl">Product Search</h1>
      <br />
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"  onChange={(e) => hdlChange(e.target.value)} />
      
      <ProductList data={data} />
    </div>
  );
}

export default App;
