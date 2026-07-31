import React from 'react';

export const LanSwapSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M28.4 158.2H64V352c0 70.7 57.3 128 128 128s128-57.3 128-128V160c0-35.3 28.7-64 64-64s64 28.7 64 64v192h-35.6c-15.7 0-28.4 12.7-28.4 28.4 0 7.5 3 14.8 8.3 20.1l70.7 70.7c9.4 9.4 24.6 9.4 33.9 0l70.7-70.7c5.3-5.3 8.3-12.6 8.3-20.1 0-15.7-12.7-28.4-28.4-28.4h-35.6V160c0-70.7-57.3-128-128-128S256 89.3 256 160v192c0 35.3-28.7 64-64 64s-64-28.7-64-64V158.2h35.6c15.7 0 28.4-12.7 28.4-28.4 0-7.5-3-14.8-8.3-20.1L113 39c-9.4-9.4-24.6-9.4-33.9 0L8.3 109.7C3 115.1 0 122.3 0 129.8c0 15.7 12.7 28.4 28.4 28.4"})
);

export default LanSwapSolid;
