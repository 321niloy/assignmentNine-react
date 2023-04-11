import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Assignment 4',
    mark: 60,
  },
  {
    name: 'Assignment 5',
    mark: 55,
  },
  {
    name: 'Assignment 6',
    mark: 54,
  },
  {
    name: "Assignment 7",
    mark: 59
  },
  {
    name: 'Assignment 8',
    mark: 56,
  }
];

const Statics = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Statics;
