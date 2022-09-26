import Card from "../card"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useState } from "react";
const data = [
  {
    "name": "May",
    "uv": 90,
    "pv": 60,
  },
  {
    "name": "Jun",
    "uv": 110,
    "pv": 200,
  },
  {
    "name": "Jul",
    "uv": 380,
    "pv": 305,
  },
  {
    "name": "Aug",
    "uv": 265,
    "pv": 195,
  },
  {
    "name": "Sep",
    "uv": 215,
    "pv": 310,
  },
  {
    "name": "Oct",
    "uv": 170,
    "pv": 215,
  },
  {
    "name": "Nov",
    "uv": 320,
    "pv": 380,
  },
  {
    "name": "Dec",
    "uv": 290,
    "pv": 70,
  },
  {
    "name": "Jan",
    "uv": 170,
    "pv": 80,
  },
  {
    "name": "Feb",
    "uv": 120,
    "pv": 90,
  },
  {
    "name": "Mar",
    "uv": 180,
    "pv": 150,
  },
  {
    "name": "Apr",
    "uv": 90,
    "pv": 100,
  }
]

const TaskDoneChart = () => {
  const [activeChart, setActiveChart] = useState('daily')

  return (
    <div className='task-done'>
      <div className="task-done__header">
        <h3>task done</h3>
        <div className="task-done__header__chart-tabs">
          {['daily', 'weekly', 'monthly'].map((menu) =>
          <ul className="task-done__header__chart-tabs__tab">
            <li onClick={() => {}} key={menu}>{menu}</li>
            {/* {activeChart === menu && <hr />} */}
          </ul>
          )}
        </div>
      </div>
      <ResponsiveContainer aspect={2.8}>
        <LineChart data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid vertical={false} stroke="#eff1f3" strokeWidth={1} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 11}} dy={16} />
          <YAxis axisLine={false} tickLine={false} domain={[0, 400]}  tickMargin={40} tick={{ fontSize: 11}} 
          />
          <Tooltip />
          <Line type="natural" dataKey="pv" stroke="#f8b400" strokeWidth={2} dot={{ stroke: '#f8b400', fill: '#f8b400' }} />
          <Line type="natural" dataKey="uv" stroke="#4ba8a8" strokeWidth={2}  dot={{ stroke: '#4ba8a8', fill: '#4ba8a8' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TaskDoneChart
