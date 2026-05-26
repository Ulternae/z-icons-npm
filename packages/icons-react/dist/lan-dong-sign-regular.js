import React from 'react';

export const LanDongSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M296-16c-13.3 0-24 10.7-24 24v40H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h120v84.7c-25.5-22.8-59.1-36.7-96-36.7-79.5 0-144 64.5-144 144s64.5 144 144 144c36.9 0 70.5-13.9 96-36.7V408c0 13.3 10.7 24 24 24s24-10.7 24-24V96h40c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40V8c0-13.3-10.7-24-24-24M80 288a96 96 0 1 1 192 0 96 96 0 1 1-192 0M24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanDongSignRegular;
