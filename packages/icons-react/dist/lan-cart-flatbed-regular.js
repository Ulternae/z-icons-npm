import React from 'react';

export const LanCartFlatbedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h32c4.4 0 8 3.6 8 8v320c0 38 29.5 69.1 66.8 71.8-1.8 5.1-2.8 10.5-2.8 16.2 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16h197.5c-1.8 5-2.7 10.4-2.7 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16h42.7c13.3 0 24-10.7 24-24s-10.7-24-24-24h-416c-13.3 0-24-10.7-24-24V56C112 25.1 86.9 0 56 0zm184 112h256v192H208zm-48 0v192c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H208c-26.5 0-48 21.5-48 48"})
);

export default LanCartFlatbedRegular;
