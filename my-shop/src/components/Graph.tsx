import React, { PureComponent } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const series = [
  {
    name: "",
    data: [
      { category: ".", value: 150 },
      { category: ".", value: 120 },
      { category: ".", value: 60 },
      { category: ".", value: 70 },
      { category: ".", value: 60 },
      { category: ".", value: 125 },
      { category: ".", value: 0 },
      { category: ".", value: 40 },
      { category: ".", value: 30 },
      { category: ".", value: 200 },
      { category: ".", value: 140 },
      { category: ".", value: 250 },
      { category: ".", value: 140 },
      { category: ".", value: 164 },
      { category: ".", value: 140 },
      { category: ".", value: 240 },
    ],
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/line-chart-width-multi-series-64tbt";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="15.17%"
                style={{ stopColor: "#3E3E3E", stopOpacity: 1 }}
              />
              <stop
                offset="88.46%"
                style={{ stopColor: "#fff", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          {series.map((s) => (
            <Line
              dataKey="value"
              data={s.data}
              key={s.name}
              dot={false}
              stroke="url(#lineGradient)"
              strokeWidth={3}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
