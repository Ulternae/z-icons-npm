import React from 'react';

export const LanHouseTreeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M439.1 9.4c-12.5-12.5-32.8-12.5-45.3 0l-76.1 76.2 153 133.9c16.4 14.3 25.8 35.1 25.8 56.8 0 25.5-12.6 48.1-32 61.7v121.2c0 19.4-5.5 37.4-14.9 52.8h158.9c11.9 0 22.9-6.6 28.4-17.2s4.7-23.4-2.2-33.1L558 352h18.5c11.9 0 22.9-6.6 28.4-17.2s4.7-23.4-2.2-33.1L526 192h18.5c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128zM416.5 304h4.5c15.2 0 27.5-12.3 27.5-27.5 0-7.9-3.4-15.5-9.4-20.7L268.5 106.5c-7.8-6.8-17.7-10.5-28-10.5s-20.3 3.7-28 10.5L41.9 255.8c-6 5.2-9.4 12.8-9.4 20.7 0 15.2 12.3 27.5 27.5 27.5h4.5v155.4c0 29.1 23.6 52.6 52.6 52.6h246.8c29.1 0 52.6-23.6 52.6-52.6zm-224-8c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24z"})
);

export default LanHouseTreeSolid;
