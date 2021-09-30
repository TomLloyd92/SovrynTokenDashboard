import axios from 'axios';
import { useState, useEffect} from "react";

function Testcall() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      //console.log(res.data.data.items);
      //setItems(res.data.data.items)
      console.log(res.data);
      setItems(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  });

  //https://jsonplaceholder.typicode.com/posts
  //https://api.covalenthq.com/v1/chains/status/?key=ckey_b5b84bdb25ad4ff4acc7c59812e
  //https://api.covalenthq.com/v1/chains/status/?key=ckey_414fccc7ff4047428a3c04c16b4


  return (
    <div>
      Welcome
      {/* <ul>
        {items.map(item => (
          <li key={item.chain_id}>
            {item.name}
          </li>
        ))}
      </ul> */}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
      </div>
  );
}
export default Testcall;