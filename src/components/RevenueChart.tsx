import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import '../assets/styles/RevenueChart.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const data = [
  { name: 'Apr', Facebook: 100, Google: 80 },
  { name: 'May', Facebook: 120, Google: 90 },
  { name: 'Jun', Facebook: 200, Google: 110 },
  { name: 'Jul', Facebook: 250, Google: 130 },
  { name: 'Aug', Facebook: 300, Google: 160 },
  { name: 'Sep', Facebook: 280, Google: 170 },
  { name: 'Oct', Facebook: 340, Google: 190 },
  { name: 'Nov', Facebook: 320, Google: 200 },
  { name: 'Dec', Facebook: 400, Google: 210 }
];

const RevenueChart: React.FC = () => {
  return (
    <div className="revenue-chart-box">
      <div className="chart-header">
        <span className="chart-title">Revenue</span>
        <div className="chart-info-icon" title="Monthly revenue from Facebook & Google">
          <InfoOutlinedIcon fontSize="small" />
        </div>
      </div>

      <Legend className="chart-legend" verticalAlign="bottom" align="left" />

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="left"
            wrapperStyle={{
              paddingBottom: 12,
              paddingRight: 12,
              fontWeight: 600,
              fontSize: 12,
            }}
          />
          <Line
            type="monotone"
            dataKey="Facebook"
            stroke="#007bff"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="Google"
            stroke="#343a40"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default RevenueChart;
