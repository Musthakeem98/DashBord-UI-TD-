import React from 'react';
import '../assets/styles/TopSellingProducts.css';

const TopSellingProducts: React.FC = () => {
  const products = [
    { name: 'Product A', value: '$12,000', refunds: 2 },
    { name: 'Product B', value: '$9,400', refunds: 5 },
    { name: 'Product C', value: '$7,200', refunds: 1 },
    { name: 'Product D', value: '$6,800', refunds: 0 },
  ];

  return (
    <div className="table-box">
      <h3>Top Selling Products</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Value</th>
            <th>Refunds</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.value}</td>
              <td>{product.refunds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProducts;