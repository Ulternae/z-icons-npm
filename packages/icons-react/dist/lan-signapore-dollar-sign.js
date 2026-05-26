import React from 'react';

export const LanSignaporeDollarSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M400 0c-8.8 0-16 7.2-16 16v48h-9.9C317.7 64 272 109.7 272 166.1c0 50.4 36.8 93.3 86.6 100.9l62 9.5c34.2 5.3 59.5 34.7 59.5 69.3 0 38.7-31.4 70.1-70.1 70.1l-106 .1c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48.2c53.5-3.2 96-47.6 96-101.9 0-50.4-36.8-93.3-86.6-100.9l-62-9.5c-34.2-5.3-59.5-34.7-59.5-69.3 0-38.7 31.4-70.1 70.1-70.1h89.9c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16zM102.1 64C45.7 64 0 109.7 0 166.1c0 50.4 36.8 93.3 86.6 100.9l62 9.5c34.2 5.3 59.5 34.7 59.5 69.3 0 38.7-31.4 70.1-70.1 70.1L32 416c-8.8 0-16 7.2-16 16s7.2 16 16 16h105.9c56.4 0 102.1-45.7 102.1-102.1 0-50.4-36.8-93.3-86.6-100.9l-62-9.5C57.3 230.2 32 200.7 32 166.1 32 127.4 63.4 96 102.1 96H192c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanSignaporeDollarSign;
