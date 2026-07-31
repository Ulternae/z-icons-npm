import React from 'react';

export const LanMoundRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M453.3 368H59.2L154 203.1c21-36.6 60-59.1 102.2-59.1s81.2 22.6 102.2 59.1zM256.2 96c-59.4 0-114.2 31.7-143.9 83.2L3.8 368c-12.3 21.3 3.1 48 27.7 48h449.4c24.6 0 40-26.6 27.7-48L400.1 179.2C370.5 127.7 315.6 96 256.2 96"})
);

export default LanMoundRegular;
