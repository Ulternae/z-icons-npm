import React from 'react';

export const LanSignPostRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M232.4 24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h121.3c9.3 0 18.2 4.1 24.3 11.2l77.5 90.4c5.1 6 5.1 14.8 0 20.8L426 276.8c-6.1 7.1-15 11.2-24.3 11.2H280.4v200c0 13.3-10.7 24-24 24s-24-10.7-24-24V288h-136c-35.3 0-64-28.7-64-64v-96c0-35.3 28.7-64 64-64h136zm0 216h161.9l54.9-64-54.9-64H96.4c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16z"})
);

export default LanSignPostRegular;
