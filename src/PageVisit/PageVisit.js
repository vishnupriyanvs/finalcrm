import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar
} from "recharts";


function Barchartss(props) {
  const [input, setInputs] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:4500/crm/pagevisit/${1}`)
      .then(response => {
        console.log('promise fullfilled')
        console.log(response.data)
        setInputs(response.data)

      }
      )
  }, [])


  const data = [
    { name: "Home", visits: input.home_counter },
    { name: "Course", visits: input.course_counter },
    { name: "Resource", visits: input.resource_counter }
  ];

  return (<>

    
    <div  style={{ textAlign: "center",marginTop:"90px"}}>
      <h1>Site View Details</h1>
      <div className="App">
        <PieChart style={{ textAlign: "center",marginLeft:"450px" }} width={400} height={400}>
          <Pie
            dataKey="visits"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill='rgb(39, 82, 163)'
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart style={{ textAlign: "center",marginLeft:"250px" }}
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="visits" fill="blue" background={{ fill: "green" }} />
        </BarChart>
      </div>
    </div>
    {/* <script src="visit-chart.js"></script> */}
  </>
  );
};


export default Barchartss;