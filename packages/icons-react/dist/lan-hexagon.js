import React from 'react';

export const LanHexagon = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m61.3 236.2 96.2-168.1c7.1-12.4 20.3-20.1 34.7-20.1h191.6c14.3 0 27.6 7.7 34.7 20.1l96.2 168.1c7 12.3 7 27.4 0 39.7L418.5 444c-7.1 12.4-20.4 20.1-34.7 20.1H192.2c-14.3 0-27.6-7.7-34.7-20.1L61.3 275.9c-7-12.3-7-27.4 0-39.7m-27.8-15.9c-12.7 22.2-12.7 49.4 0 71.5l96.2 168.1c12.8 22.4 36.7 36.2 62.5 36.2h191.6c25.8 0 49.7-13.8 62.5-36.2l96.2-168.1c12.7-22.2 12.7-49.4 0-71.5L446.3 52.2C433.5 29.8 409.6 16 383.8 16H192.2c-25.8 0-49.7 13.8-62.5 36.2z"})
);

export default LanHexagon;
