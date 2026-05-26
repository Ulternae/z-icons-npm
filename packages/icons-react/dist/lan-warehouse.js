import React from 'react';

export const LanWarehouse = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M544 192H32v304c0 8.8-7.2 16-16 16s-16-7.2-16-16V155.8c0-26.4 16.2-50.1 40.8-59.6L270.6 6.8c11.2-4.4 23.6-4.4 34.8 0l229.8 89.3c24.6 9.6 40.8 33.3 40.8 59.6V496c0 8.8-7.2 16-16 16s-16-7.2-16-16zm0-32v-4.2c0-13.2-8.1-25-20.4-29.8L293.8 36.6c-3.7-1.5-7.9-1.5-11.6 0L52.4 126C40.1 130.7 32 142.6 32 155.8v4.2zm-432 96h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16M96 368c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16m16 80h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanWarehouse;
