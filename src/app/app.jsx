import React, { useEffect, useState } from "react";
import Chart from "./comps/chart";
import Table from "./comps/table";
import getData from "./getData";
import Navbar from './comps/Navbar'
import Footer from './comps/Footer'

export default function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    getData().then((processedData) => setApiData(processedData));
  }, []);
  return (
    <main >
      <Navbar/>
      <div className="container">
      <Table tableData={apiData} />
      <Chart chartData={apiData} />
      </div>
      <Footer/>
    </main>
  );
}
//  <main className="container">
//       <Table tableData={apiData} />
//       <Chart chartData={apiData} />
//     </main>