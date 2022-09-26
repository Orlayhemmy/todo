import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData } from '../../constants';

const TaskDoneChart = () => {
  return (
    <div className='task-done'>
      <div className="task-done__header">
        <h3>task done</h3>
        <div className="task-done__header__chart-tabs">
          {['daily', 'weekly', 'monthly'].map((menu) =>
          <ul className="task-done__header__chart-tabs__tab" key={menu}>
            <li onClick={() => {}} key={menu}>{menu}</li>
          </ul>
          )}
        </div>
      </div>
      <ResponsiveContainer aspect={2.8}>
        <LineChart data={chartData}
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
