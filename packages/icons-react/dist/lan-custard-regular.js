import React from 'react';

export const LanCustardRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M84.1 112.8 21.7 368h49.4l29.4-120.4c15.5-4.5 31-7.6 43.5-7.6 16.7 0 28.8 5.6 45.6 13.6l1 .5C206.9 262 227.8 272 256 272s49.1-10 65.4-17.9l1-.5c16.8-8.1 28.9-13.6 45.6-13.6 12.5 0 28 3.1 43.5 7.6L440.9 368h49.4l-62.4-255.2c-7-28.6-32.7-48.8-62.2-48.8H146.2C116.7 64 91 84.2 84 112.8zm314.6 82.4c-10.4-2-20.8-3.2-30.7-3.2-28.2 0-49.1 10-65.4 17.9l-1 .5c-16.8 8-28.9 13.6-45.6 13.6s-28.8-5.6-45.6-13.6l-1-.5C193.1 202 172.2 192 144 192c-9.9 0-20.3 1.2-30.7 3.2l17.4-71c1.8-7.2 8.2-12.2 15.5-12.2h219.5c7.4 0 13.8 5 15.5 12.2l17.4 71zM0 424c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24"})
);

export default LanCustardRegular;
