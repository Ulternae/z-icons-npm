import React from 'react';

export const LanCarGarageRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M297.6-6c-6.1-2.7-13.1-2.7-19.2 0l-256 112c-12.2 5.3-17.7 19.5-12.4 31.6s19.5 17.7 31.6 12.4L288 42.2 534.4 150c12.1 5.3 26.3-.2 31.6-12.4s-.2-26.3-12.4-31.6zm-94.3 198h169.4c10.5 0 19.8 6.8 22.9 16.8l19.7 63.2H160.6l19.7-63.2c3.1-10 12.4-16.8 22.9-16.8zm-68.7 2.5-25.1 80.2C83.2 282.6 64 307.1 64 336v152c0 13.3 10.7 24 24 24s24-10.7 24-24v-24h352v24c0 13.3 10.7 24 24 24s24-10.7 24-24V336c0-28.9-19.2-53.4-45.5-61.3l-25.1-80.2c-9.4-30-37.2-50.5-68.7-50.5H203.3c-31.5 0-59.3 20.5-68.7 50.5M464 384v32H112v-80c0-8.8 7.2-16 16-16h320c8.8 0 16 7.2 16 16zm-304 8a24 24 0 1 0 0-48 24 24 0 1 0 0 48m280-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanCarGarageRegular;
