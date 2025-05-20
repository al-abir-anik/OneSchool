"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    present: 40,
    absent: 24,
  },
  {
    name: "Sun",
    present: 30,
    absent: 13,
  },
  {
    name: "Mon",
    present: 20,
    absent: 98,
  },
  {
    name: "Tue",
    present: 27,
    absent: 39,
  },
  {
    name: "Wed",
    present: 18,
    absent: 48,
  },
  {
    name: "Thu",
    present: 23,
    absent: 38,
  },
];

const AttendenceChart = () => {
  return (
    <div className="w-full h-full p-4 bg-white rounded-xl">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendence</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill:"# d1d5db"}}/>
          <YAxis axisLine={false} tickLine={false} tick={{fill:"# d1d5db"}}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10,10,0,0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="cicle"
             radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendenceChart;
