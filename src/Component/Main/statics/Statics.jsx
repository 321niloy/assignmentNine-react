import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Assignment4',
    A: 60,
    fullMark: 60,
  },
  {
    subject: 'Assignment5',
    A: 55,
    fullMark: 60,
  },
  {
    subject: 'Assignment6',
    A: 54,
    fullMark: 60,
  },
  {
    subject: 'Assignment7',
    A: 59,
    fullMark: 60,
  },
  {
    subject: 'Assignment8',
    A: 56,
    fullMark: 60,
  },
];

const Statics = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Marks" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Statics;
