import React from 'react';

export const LanBowArcheryThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M65.7 150.4c91-85 233.6-83.2 322.3 5.5s90.5 231.3 5.5 322.3l28.1 28.1c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-384-384c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0zm311 16.8C294.3 84.8 161.7 83 77 161.7l305.2 305.2c78.8-84.7 77-217.2-5.5-299.7"})
);

export default LanBowArcheryThin;
