import React from 'react';

export const LanAngle90Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v360c0 35.3 28.7 64 64 64h360c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16zm110.3 104.8c11.5 4.2 24.6.4 31.1-9.9 7.6-12.2 3-28.4-10.4-33.6-26.2-10.1-54-16.8-82.9-19.7v48.3c21.6 2.5 42.5 7.6 62.3 14.9zm170.8 129.8c-10.4 6.5-14.2 19.6-9.9 31.1 7.3 19.8 12.4 40.7 14.9 62.3h48.3c-2.9-29-9.6-56.8-19.7-82.9-5.2-13.4-21.4-18.1-33.6-10.4zm-22.7-42.4c11.6-7.3 14.9-22.8 6.3-33.5-14.1-17.4-30-33.3-47.4-47.4-10.7-8.6-26.2-5.4-33.5 6.3-6.8 10.9-3.8 25.1 6.1 33.3 12.8 10.7 24.7 22.5 35.3 35.3 8.2 9.9 22.4 12.9 33.3 6.1z"})
);

export default LanAngle90Regular;
