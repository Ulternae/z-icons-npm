import React from 'react';

export const LanLariSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144 0c13.3 0 24 10.7 24 24v41.5q11.85-1.5 24-1.5c12.15 0 16.1.5 24 1.5V24c0-13.3 10.7-24 24-24s24 10.7 24 24v54c58.9 23.8 103.2 76 116.2 139.7 2.6 13-5.8 25.7-18.7 28.3s-25.7-5.8-28.3-18.7c-8.3-41-34-75.6-69.1-95.9L264 232c0 13.3-10.7 24-24 24s-24-10.7-24-24V114c-7.8-1.3-15.8-2-24-2s-16.2.7-24 2v118c0 13.3-10.7 24-24 24s-24-10.7-24-24V131.3C77 156.2 48 202.7 48 256c0 79.5 64.5 144 144 144h168c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h41C25.1 364.8 0 313.3 0 256c0-80.6 49.6-149.6 120-178V24c0-13.3 10.7-24 24-24"})
);

export default LanLariSignRegular;
