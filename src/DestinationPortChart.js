

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Label, Legend, Brush } from 'recharts';

const DestinationPortChart = ({ data }) => {
  const chartData = Object.keys(data).map(key => ({ name: key, count: data[key] }));

  return (
    <div style={{ width: '100%', height: 450, padding: '20px', background: '#1c1e22', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#ffffff', marginBottom: '20px' }}>Destination Ports by Count</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ffffff" tick={{ fill: '#ffffff' }}>
            <Label value="Destination Port" offset={-10} position="insideBottom" fill="#ffffff" />
          </XAxis>
          <YAxis stroke="#ffffff" tick={{ fill: '#ffffff' }}>
            <Label angle={-90} value="Count" position="insideLeft" fill="#ffffff" style={{ textAnchor: 'middle' }} />
          </YAxis>
          <Tooltip 
            cursor={{ stroke: '#82ca9d', strokeWidth: 2 }} 
            contentStyle={{ backgroundColor: '#2c2f33', border: 'none', borderRadius: '5px' }}
            itemStyle={{ color: '#ffffff' }}
            labelStyle={{ color: '#ffffff' }}
          />
          <Legend verticalAlign="top" height={36} wrapperStyle={{ color: '#ffffff' }} />
          <Line 
            type="monotone" 
            dataKey="count" 
            stroke="url(#colorUv)" 
            strokeWidth={3} 
            dot={{ fill: '#82ca9d', stroke: '#fff', strokeWidth: 2, r: 3 }} 
            activeDot={{ r: 8 }} 
          />
          <Brush dataKey="name" height={30} stroke="#82ca9d" fill="#2c2f33">
            <LineChart>
              <Line type="monotone" dataKey="count" stroke="#82ca9d" strokeWidth={1} />
            </LineChart>
          </Brush>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DestinationPortChart;
