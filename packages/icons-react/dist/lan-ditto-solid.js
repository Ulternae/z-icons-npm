import React from 'react';

export const LanDittoSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 96v2.3c0 3.8.3 7.6 1 11.4l25.5 146.8c3.2 18.2 19 31.5 37.5 31.5s34.3-13.3 37.5-31.5L127 109.6c.7-3.8 1-7.5 1-11.4v-2.3c0-35.3-28.7-64-64-64S0 60.7 0 96m192 0v2.3c0 3.8.3 7.6 1 11.4l25.5 146.8c3.2 18.2 19 31.5 37.5 31.5s34.3-13.3 37.5-31.5L319 109.6c.7-3.8 1-7.5 1-11.4v-2.3c0-35.3-28.7-64-64-64s-64 28.7-64 64z"})
);

export default LanDittoSolid;
