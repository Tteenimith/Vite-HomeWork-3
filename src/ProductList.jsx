import { useState, useEffect } from "react";

export default function ProductList(props) {
  const { data } = props;
    console.log(data);
    
  return (
    <div className="border text-start mt-4">
      <br />
      <ul>
        {data.map((el) => 
          <pre className="ml-4 text-1xl">{el.title} / Price : {el.price} / Remaining : {el.stock}</pre>
        )}
      </ul>
    </div>
  );
}

