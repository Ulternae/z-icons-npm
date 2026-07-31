import React from 'react';

export const LanTentDoublePeakThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M541.7 159.2c-33.7-20.8-78.9-56-113.1-110.3-.2-.3-.9-1.1-2.6-1.1s-2.6.6-2.9.9c-23 28.9-70.9 77.9-135.2 77.9s-112.2-49-135.2-77.9c-.3-.3-1.2-1-2.9-.9s-2.4.8-2.6 1.1C113 103.2 67.8 138.4 34.1 159.2c-11.4 7-18.3 18.6-18.3 30.5V240h544v-50.3c0-11.9-6.9-23.5-18.3-30.5zM560 256H297l123.9 240H512c26.5 0 48-21.5 48-48zm-288 0H16v192c0 26.5 21.5 48 48 48h208zm16 240h114.9L288 273.4zM25.9 145.6C58.2 125.7 101.3 92 133.8 40.4c6.8-10.8 23.6-11.6 31.6-1.6 22.6 28.4 66.3 71.8 122.6 71.8s100-43.4 122.6-71.9c7.9-10 24.8-9.1 31.6 1.6 32.5 51.6 75.6 85.3 107.9 105.2 15.5 9.5 25.9 25.9 25.9 44.1V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V189.7c0-18.2 10.4-34.6 25.9-44.1"})
);

export default LanTentDoublePeakThin;
