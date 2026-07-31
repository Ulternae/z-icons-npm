import React from 'react';

export const LanSwordLaserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -54.977 640 611.002',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M580.1-3.7 275.2 272.8l28.4 28.4zM619 24.9 337.6 335.2l7.8 7.8c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-8-8L130.4 542c-18.7 18.7-49.1 18.7-67.9 0l-28.1-28.1c-18.7-18.7-18.7-49.1 0-67.9l173.1-173.1-8-8c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l7.8 7.8L551.5-42.6c18.9-17.1 47.9-16.4 65.9 1.6s18.7 47 1.6 65.9m-377.6 282-16.9 16.9 28.1 28.1 16.9-16.9zm-45.2 45.2-19.7 19.7 28.1 28.1 19.7-19.7zm-48 48L68.3 480l28.1 28.1 79.9-79.9z"})
);

export default LanSwordLaserRegular;
