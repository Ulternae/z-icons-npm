import React from 'react';

export const LanBullhornRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M466.2 18.3c8.4 4 13.8 12.4 13.8 21.7v432c0 9.3-5.4 17.7-13.8 21.7s-18.3 2.7-25.5-3.2l-56.2-46.3c-41.2-34-91.7-54.5-144.5-59.2v79c0 26.5-21.5 48-48 48h-48c-26.5 0-48-21.5-48-48v-84C40.8 365.8 0 315.6 0 256c0-70.7 57.3-128 128-128h89.4c61-.2 120-21.4 167.1-60.2l56.2-46.3c7.2-5.9 17.1-7.1 25.5-3.2M240 336v.9c64 4.8 125.2 29.2 175 70.3l17 14V90.9l-17 14c-49.8 41-111 65.5-175 70.3zm-48 48h-48v80h48zm-64-208c-44.2 0-80 35.8-80 80s35.8 80 80 80h64V176z"})
);

export default LanBullhornRegular;
