import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import '../assets/styles/BarChartAge.css';

const data = [
  { age: '18-24', sales: 400 },
  { age: '25-34', sales: 700 },
  { age: '35-44', sales: 600 },
  { age: '45-54', sales: 300 },
  { age: '55-64', sales: 200 },
];

const BarChartAge: React.FC = () => {
  return (
    <div className="bar-chart-box">
      <div className="chart-header">
        <span className="chart-title">Sales by Age</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" barSize={22}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis dataKey="age" type="category" axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
          <Bar dataKey="sales" fill="#000080" radius={[0, 5, 5, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartAge;
