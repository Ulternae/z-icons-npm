import React from 'react';

export const LanPlaneFlyingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 576 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 208c17.7 0 32 14.3 32 32s-14.3 32-32 32H109.4c-19.3 0-35.9-13.8-39.4-32.8L52.7 144h1.1l55.5 56.8c4.5 4.6 10.7 7.2 17.2 7.2h86.7c7.8 0 15.1-3.8 19.6-10.1s5.7-14.5 3.1-21.8L185.8 32h27.9L375 200.6c4.5 4.7 10.8 7.4 17.3 7.4zm80 32c0-44.2-35.8-80-80-80h-93.4L241.3-8.6c-4.5-4.7-10.7-7.4-17.3-7.4h-72c-7.8 0-15.1 3.8-19.6 10.1s-5.7 14.5-3.1 21.8L179.4 160h-42.8l-55.5-56.8C76.7 98.6 70.5 96 64 96H24c-7.1 0-13.9 3.2-18.4 8.6S-.9 117.3.4 124.3l22.4 123.4c7.6 41.8 44.1 72.3 86.6 72.3H496c44.2 0 80-35.8 80-80M24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanPlaneFlyingRegular;
