import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardCards from './components/DashboardCards';
import RevenueChart from './components/RevenueChart';
import PieChartBox from './components/PieChartBox';
import BarChartAge from './components/BarChartAge';
import SalesByCountry from './components/SalesByCountry';
import TopSellingProducts from './components/TopSellingProducts';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <DashboardCards />
        <div className="chart-row">
          <PieChartBox />
          <RevenueChart />
        </div>
        <BarChartAge />
        <SalesByCountry />
        <TopSellingProducts />
      </div>
    </div>
  );
};

export default App;