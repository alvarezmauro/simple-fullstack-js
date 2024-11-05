import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/example`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <body>
      <p>{data}</p>
    </body>
  );
}

export default App;
