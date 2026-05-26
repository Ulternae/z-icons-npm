import React from 'react';

export const LanHexagonDivideRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M33.5 220.3c-12.7 22.2-12.7 49.4 0 71.5l96.2 168.1c12.8 22.4 36.7 36.2 62.5 36.2h191.6c25.8 0 49.7-13.8 62.5-36.2l96.2-168.1c12.7-22.2 12.7-49.4 0-71.5L446.3 52.2C433.5 29.8 409.6 16 383.8 16H192.2c-25.8 0-49.7 13.8-62.5 36.2zM75.2 268c-4.2-7.4-4.2-16.5 0-23.8l96.2-168.1c4.3-7.5 12.2-12.1 20.8-12.1h191.6c8.6 0 16.6 4.6 20.8 12.1l96.2 168.1c4.2 7.4 4.2 16.5 0 23.8l-96.1 168c-4.3 7.5-12.2 12.1-20.8 12.1H192.3c-8.6 0-16.6-4.6-20.8-12.1zM288 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-88 40c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24zm120 120a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanHexagonDivideRegular;
