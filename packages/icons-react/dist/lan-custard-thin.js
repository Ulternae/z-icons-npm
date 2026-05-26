import React from 'react';

export const LanCustardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m25.8 384 66.3-271.2c7-28.6 32.7-48.8 62.2-48.8h203.5c29.5 0 55.2 20.2 62.2 48.8L486.3 384h-16.5L432 229.3c-20.8-7.1-44.7-13.3-63.9-13.3-20.7 0-35.9 7.2-52.5 15.2l-.4.2c-16.6 7.9-34.6 16.6-59.2 16.6s-42.6-8.7-59.1-16.6l-.4-.2c-16.7-8-31.8-15.2-52.5-15.2-19.3 0-43.1 6.2-63.9 13.3L42.2 384zm58.7-173c19.2-6 40.8-11 59.5-11 24.6 0 42.6 8.7 59.1 16.6l.4.2c16.7 8 31.8 15.2 52.5 15.2s35.9-7.2 52.5-15.2l.4-.2c16.5-7.9 34.5-16.6 59.1-16.6 18.7 0 40.3 5 59.5 11l-23.1-94.4C399.1 95.1 379.9 80 357.8 80H154.2c-22.1 0-41.4 15.1-46.6 36.6zM0 440c0-4.4 3.6-8 8-8h496c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8"})
);

export default LanCustardThin;
