import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4567', '#d45087', '#2f4b7c'];

const SourceIPChart = ({ data }) => {
  
  const chartData = Object.keys(data).map(key => ({ name: key, value: data[key] }));

  
  chartData.sort((a, b) => b.value - a.value);
  const topData = chartData.slice(0, 4);

  
  if (chartData.length > 4) {
    const otherValue = chartData.slice(4).reduce((sum, entry) => sum + entry.value, 0);
    topData.push({ name: 'Other', value: otherValue });
  }

  return (
    <div style={{ width: '100%', height: '100%', padding: '20px', background: '#1c1e22', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#ffffff', marginBottom: '20px' }}>Source IPs by Count</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={topData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={150}
            paddingAngle={5}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {topData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#2c2f33', border: 'none', borderRadius: '5px' }} 
            itemStyle={{ color: '#ffffff' }} 
            labelStyle={{ color: '#ffffff' }} 
          />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ color: '#ffffff' }}
            onClick={(data, index) => {
              const chartElement = document.querySelector(`.recharts-layer.recharts-pie .recharts-pie-sector:nth-child(${index + 1})`);
              chartElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
              chartElement.style.transform = 'scale(1.1)';
              setTimeout(() => {
                chartElement.style.transform = 'scale(1)';
              }, 1000);
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SourceIPChart;
