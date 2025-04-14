import React from 'react';
import '../assets/styles/DashboardCards.css';

const cardData = [
  {
    title: 'Sales',
    value: '$230,220',
    change: '+55% since last month',
    type: 'positive',
    dateRange: '6 May - 7 May',
  },
  {
    title: 'Customers',
    value: '3,200',
    change: '+12% since last month',
    type: 'positive',
    dateRange: '6 May - 7 May',
  },
  {
    title: 'Avg. Revenue',
    value: '$1,200',
    change: '-213 since last month',
    type: 'negative',
    dateRange: '6 May - 7 May',
  },
];

const DashboardCards: React.FC = () => {
  return (
    <div className="dashboard-cards">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            <div className="card-title">{card.title}</div>
            <div className="card-daterange">{card.dateRange}</div>
          </div>
          <div className="card-value">{card.value}</div>
          <span className={card.type}>{card.change}</span>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
