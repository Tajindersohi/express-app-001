import { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    getList();
    },[])
    const getList = async() => {
    await fetch('/api').then(
     (response) => response.json()).then(
       data => {
        setBackendData(data.users)
        }
        )
      }
      console.log("datatat",backendData)
    return (
    <div className="App">
      {typeof backendData === undefined  ? 
      <p>
      Loading...
      </p>
      :
    (
      backendData?.map((item,i)=>
      <p key={i}>{item}</p> 
    )
    )
}
 </div>
  );
}

export default App;
