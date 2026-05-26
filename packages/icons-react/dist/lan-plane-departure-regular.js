import React from 'react';

export const LanPlaneDepartureRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M517.6 134.1c16.6-6 35 2.5 41 19.1s-2.5 35-19.1 41L201.2 317.4c-3.4 1.2-11.7 4.3-25 9.1-18.2 6.6-38.5-.7-48.2-17.4l-48.8-83.5 1.2-.4 73 34c5.8 2.7 12.4 3 18.4.8l77.7-28.3c7.2-2.6 12.8-8.6 14.9-16s.5-15.4-4.3-21.4L165.5 75l26.4-9.7 202.5 105.4c6 3.1 13 3.6 19.3 1.3l104-37.8zm86.1 2.7c-15.1-41.5-61-62.9-102.5-47.8l-94.1 34.2L204.7 17.9c-6-3.1-13-3.6-19.3-1.3l-67.6 24.7c-7.2 2.6-12.8 8.6-14.9 16s-.5 15.4 4.3 21.4l94.6 119.2-37 13.5-73-34c-5.8-2.7-12.4-3-18.4-.8l-37.6 13.7c-6.7 2.4-11.9 7.7-14.4 14.4s-1.7 14.1 1.9 20.3l63.3 108.3c21.5 36.7 66.1 52.8 106.1 38.3 13.3-4.8 21.6-7.9 25-9.1l338.2-123.2c41.5-15.1 62.9-61 47.8-102.5M56.1 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanPlaneDepartureRegular;
