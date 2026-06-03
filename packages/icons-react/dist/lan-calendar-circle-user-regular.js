import React from 'react';

export const LanCalendarCircleUserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M152 0c13.3 0 24 10.7 24 24v40h160V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h32c35.3 0 64 28.7 64 64v86c-15.3-3.9-31.4-6-48-6-27.3 0-53.3 5.7-76.9 16H80v192c0 8.8 7.2 16 16 16h146.7c2.8 16.8 7.8 32.9 14.8 48H96c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V24c0-13.3 10.7-24 24-24m0 112H96c-8.8 0-16 7.2-16 16v48h352v-48c0-8.8-7.2-16-16-16zm136 288a144 144 0 1 1 288 0 144 144 0 1 1-288 0m221.7 80.7c-6.2-19-24-32.7-45.1-32.7h-65.2c-21 0-38.9 13.7-45.1 32.7 20.1 19.4 47.5 31.3 77.7 31.3s57.5-11.9 77.7-31.3M480 368a48 48 0 1 0-96 0 48 48 0 1 0 96 0"})
);

export default LanCalendarCircleUserRegular;
