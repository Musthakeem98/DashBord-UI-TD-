import React from 'react';
import '../assets/styles/SalesByCountry.css';

const SalesByCountry: React.FC = () => {
  const countries = [
    { name: 'USA', sales: '$120K', bounce: '33%', flag: '🇺🇸' },
    { name: 'Germany', sales: '$85K', bounce: '29%', flag: '🇩🇪' },
    { name: 'India', sales: '$100K', bounce: '42%', flag: '🇮🇳' },
    { name: 'UK', sales: '$75K', bounce: '37%', flag: '🇬🇧' },
  ];

  return (
    <div className="table-box">
      <div className="chart-header">
        <span className="chart-title">Sales by Country</span>
      </div>
      <div className="country-table">
        {countries.map((country, index) => (
          <div className="country-row" key={index}>
            <div className="country-col flag">{country.flag}</div>
            <div className="country-col">
              <div className="label">Country:</div>
              <div className="value">{country.name}</div>
            </div>
            <div className="country-col">
              <div className="label">Sales:</div>
              <div className="value">{country.sales}</div>
            </div>
            <div className="country-col">
              <div className="label">Bounce:</div>
              <div className="value">{country.bounce}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesByCountry;
