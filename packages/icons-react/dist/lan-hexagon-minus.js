import React from 'react';

export const LanHexagonMinus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M61.3 275.9 157.5 444c7.1 12.4 20.4 20.1 34.7 20.1h191.6c14.3 0 27.6-7.7 34.7-20.1l96.2-168.1c7-12.3 7-27.4 0-39.7L418.5 68.1C411.4 55.7 398.2 48 383.8 48H192.2c-14.3 0-27.6 7.7-34.7 20.1L61.3 236.2c-7 12.3-7 27.4 0 39.7m-27.8 15.9c-12.7-22.2-12.7-49.4 0-71.5l96.2-168.1C142.5 29.8 166.4 16 192.2 16h191.6c25.8 0 49.7 13.8 62.5 36.2l96.2 168.1c12.7 22.2 12.7 49.4 0 71.5l-96.2 168.1c-12.8 22.4-36.7 36.2-62.5 36.2H192.2c-25.8 0-49.7-13.8-62.5-36.2zM192 240h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanHexagonMinus;
