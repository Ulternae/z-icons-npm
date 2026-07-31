import React from 'react';

export const LanCarBusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 48h192c26.5 0 48 21.5 48 48H48c0-26.5 21.5-48 48-48m-48 96h185.4c21.7-20.2 50.7-32.2 81.9-32.2H384V96c0-53-43-96-96-96H96C43 0 0 43 0 96v256c0 29.8 20.4 54.9 48 62v42c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h48v-48H64c-8.8 0-16-7.2-16-16V240h139l13.8-44c.4-1.3.9-2.7 1.3-4H48zm64 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m203.3-128.1h137.4c10.5 0 19.8 6.8 22.9 16.8l19.7 63.2H272.6l19.7-63.2c3.1-10 12.4-16.8 22.9-16.8zm-68.7 2.5-28 89.5c-16.1 11.6-26.6 30.6-26.6 51.9v136c0 13.3 10.7 24 24 24s24-10.7 24-24v-8h288v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-136c0-21.4-10.5-40.3-26.6-51.9l-28-89.5c-9.4-30.1-37.2-50.5-68.7-50.5H315.3c-31.5 0-59.3 20.5-68.7 50.5M528 399.9v32H240v-80c0-8.8 7.2-16 16-16h256c8.8 0 16 7.2 16 16zm-240 8a24 24 0 1 0 0-48 24 24 0 1 0 0 48m216-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanCarBusRegular;
