

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, Label, Text } from 'recharts';

const CategoryChart = ({ data }) => {
  const chartData = Object.keys(data).map(key => ({ name: key, count: data[key] }));

  return (
    <div style={{ width: '100%', height: 450, padding: '20px', background: '#2c2f33', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>Alerts by Category</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ffffff" tick={{ fill: '#ffffff' }}>
            <Label value="Category" offset={-10} position="insideBottom" fill="#ffffff" />
          </XAxis>
          <YAxis stroke="#ffffff" tick={{ fill: '#ffffff' }}>
            <Label angle={-90} value="Count" position="insideLeft" fill="#ffffff" style={{ textAnchor: 'middle' }} />
          </YAxis>
          <Tooltip 
            cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }} 
            contentStyle={{ backgroundColor: '#2c2f33', border: 'none', borderRadius: '5px' }}
            itemStyle={{ color: '#ffffff' }}
            labelStyle={{ color: '#ffffff' }}
          />
          <Legend verticalAlign="top" height={36} wrapperStyle={{ color: '#ffffff' }} />
          <Bar dataKey="count" fill="url(#colorUv)" barSize={30} radius={[5, 5, 0, 0]} />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;
