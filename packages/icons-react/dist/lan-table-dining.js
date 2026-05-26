import React from 'react';

export const LanTableDining = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M524 64.5c12.6 2.2 22.9 11.8 25.7 24.6l17.8 80c3.8 17.3-7.1 33.8-23.3 37.9v225c0 8.8-7.2 16-16 16s-16-7.2-16-16V288h-448v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V207c-15.2-3.9-25.7-18.3-24-34.2l.6-3.7 17.8-80C29.8 74.4 42.8 64 57.8 64h460.7zM64.1 256h448v-48h-448zM40 176h496.2l-17.8-80H57.7l-17.8 80z"})
);

export default LanTableDining;
