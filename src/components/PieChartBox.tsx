import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '../assets/styles/PieChartBox.css';

const data = [
  { name: 'Facebook', value: 400 },
  { name: 'Direct', value: 300 },
  { name: 'Organic', value: 300 },
  { name: 'Referral', value: 200 },
];

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

const PieChartBox: React.FC = () => {
  return (
    <div className="chart-box">
      <div className="chart-header">
        <span className="chart-title">Channels</span>
        <div className="info-icon" title="Breakdown of traffic sources">
          <InfoOutlinedIcon />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="40%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={false}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ paddingRight: 50 }} />
        </PieChart>
      </ResponsiveContainer>

      <div className="chart-footer">
        <div className="footer-text">
          More than <strong>1,200,000</strong> sales are made using referral
          marketing and <strong>700,000</strong> are from social media.
        </div>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
};

export default PieChartBox;
