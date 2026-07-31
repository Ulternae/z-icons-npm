import React from 'react';

export const LanFortThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 32c4.4 0 8 3.6 8 8v56h104V40c0-4.4 3.6-8 8-8s8 3.6 8 8v56h104V40c0-4.4 3.6-8 8-8s8 3.6 8 8v128h64V40c0-4.4 3.6-8 8-8s8 3.6 8 8v56h104V40c0-4.4 3.6-8 8-8s8 3.6 8 8v56h104V40c0-4.4 3.6-8 8-8s8 3.6 8 8v176c0 22.1-17.9 40-40 40h-8v192c0 35.3-28.7 64-64 64H112c-35.3 0-64-28.7-64-64V256h-8c-22.1 0-40-17.9-40-40V40c0-4.4 3.6-8 8-8m216 464h128v-80c0-35.3-28.7-64-64-64s-64 28.7-64 64zm144 0h96c26.5 0 48-21.5 48-48V256H360c-22.1 0-40-17.9-40-40v-32h-64v32c0 22.1-17.9 40-40 40H64v192c0 26.5 21.5 48 48 48h96v-80c0-44.2 35.8-80 80-80s80 35.8 80 80zM240 168v-56H16v104c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24zm96 48c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24V112H336z"})
);

export default LanFortThin;
