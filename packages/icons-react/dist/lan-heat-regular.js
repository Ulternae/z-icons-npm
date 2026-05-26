import React from 'react';

export const LanHeatRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M176 32c13.3 0 24 10.7 24 24v88c0 36.4 11.8 71.7 33.6 100.8l19.2 25.6c28 37.4 43.2 82.9 43.2 129.6v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56c0-36.3-11.8-71.7-33.6-100.8l-19.2-25.6c-28-37.4-43.2-82.9-43.2-129.6V56c0-13.3 10.7-24 24-24M24 96c13.3 0 24 10.7 24 24v37.9c0 33.2 9.8 65.6 28.2 93.2l31.5 47.3c23.7 35.5 36.3 77.2 36.3 119.8v37.9c0 13.3-10.7 24-24 24s-24-10.7-24-24v-37.9c0-33.2-9.8-65.6-28.2-93.2l-31.5-47.3A215.76 215.76 0 0 1 0 157.9V120c0-13.3 10.7-24 24-24m328 24v37.9c0 33.2 9.8 65.6 28.2 93.2l31.5 47.3c23.7 35.5 36.3 77.2 36.3 119.8v37.9c0 13.3-10.7 24-24 24s-24-10.7-24-24v-37.9c0-33.2-9.8-65.6-28.2-93.2l-31.5-47.3A215.76 215.76 0 0 1 304 157.9V120c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanHeatRegular;
