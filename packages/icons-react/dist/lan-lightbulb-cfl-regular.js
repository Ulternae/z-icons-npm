import React from 'react';

export const LanLightbulbCflRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M183.3 18.2c3.2 12.9-4.6 25.9-17.5 29.1l-128 32C25 82.5 11.9 74.7 8.7 61.8s4.6-25.9 17.5-29.1l128-32c12.9-3.2 25.9 4.6 29.1 17.5m110.5 93.1-256 64c-12.9 3.2-25.9-4.6-29.1-17.5s4.6-25.9 17.5-29.1l256-64c12.9-3.2 25.9 4.6 29.1 17.5s-4.6 25.9-17.5 29.1m0 96-256 64c-12.9 3.2-25.9-4.6-29.1-17.5s4.6-25.9 17.5-29.1l256-64c12.9-3.2 25.9 4.6 29.1 17.5s-4.6 25.9-17.5 29.1M96 384v-77.8l48-12V384h32v-80c0-10.8 7.2-20.3 17.7-23.2l88-24c12.8-3.5 26 4.1 29.5 16.8s-4.1 26-16.8 29.5l-70.3 19.2V384h8c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80h-32c-44.2 0-80-35.8-80-80v-24c0-13.3 10.7-24 24-24h8z"})
);

export default LanLightbulbCflRegular;
