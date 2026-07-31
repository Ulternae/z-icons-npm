import React from 'react';

export const LanShekelSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M56 32c-22.1 0-40 17.9-40 40v400c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-13.3 10.7-24 24-24h136c48.6 0 88 39.4 88 88v216c0 4.4 3.6 8 8 8s8-3.6 8-8V136c0-57.4-46.6-104-104-104zm272 448c57.4 0 104-46.6 104-104V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v336c0 48.6-39.4 88-88 88H192c-13.3 0-24-10.7-24-24V168c0-4.4-3.6-8-8-8s-8 3.6-8 8v272c0 22.1 17.9 40 40 40z"})
);

export default LanShekelSignThin;
