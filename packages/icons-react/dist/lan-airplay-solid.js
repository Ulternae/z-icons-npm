import React from 'react';

export const LanAirplaySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 128h384v224h-46.9l62.2 62.2c28-6.9 48.7-32.1 48.7-62.2V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v224c0 30.1 20.7 55.3 48.7 62.2l62.2-62.2H64zm34.4 332.2c5 12 16.6 19.8 29.6 19.8h256c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9z"})
);

export default LanAirplaySolid;
