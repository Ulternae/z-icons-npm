import React from 'react';

export const LanTildeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M102.8 144C54.9 144 16 182.9 16 230.8V344c0 4.4-3.6 8-8 8s-8-3.6-8-8V230.8C0 174 46 128 102.8 128c28.5 0 55.7 11.8 75.2 32.7l167.7 179.7c16.4 17.6 39.4 27.6 63.5 27.6 47.9 0 86.8-38.9 86.8-86.8V168c0-4.4 3.6-8 8-8s8 3.6 8 8v113.2C512 338 466 384 409.2 384c-28.5 0-55.7-11.8-75.2-32.7L166.3 171.6C149.8 154 126.9 144 102.8 144"})
);

export default LanTildeThin;
