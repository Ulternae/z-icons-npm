import React from 'react';

export const LanGolfClubThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.032 576 544.032',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M561.9-29.2c2.4-2.8 6.5-3.7 9.9-1.9s4.9 5.8 3.8 9.4l-.6 1.5-274.4 503c-9.8 18-28.7 29.2-49.2 29.2H72c-22.1 0-40-17.9-40-40V327.2c0-25.3 23.2-44.2 48-39.2l273.6 56.1 4 .8L561-27.9zM76.8 303.7c-14.9-3-28.8 8.3-28.8 23.5V360h72c4.4 0 8 3.6 8 8s-3.6 8-8 8H48v48h72c4.4 0 8 3.6 8 8s-3.6 8-8 8H48v32c0 13.3 10.7 24 24 24h179.5c14.6 0 28.1-8 35.1-20.8l63-115.5-272.8-55.9z"})
);

export default LanGolfClubThin;
