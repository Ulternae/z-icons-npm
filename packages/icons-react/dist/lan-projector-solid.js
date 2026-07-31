import React from 'react';

export const LanProjectorSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M376-8v64c0 13.3-10.7 24-24 24s-24-10.7-24-24V-8c0-13.3 10.7-24 24-24s24 10.7 24 24M217 7l40 40c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L183 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 34-.1m304 34-40 40c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L487 7c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zm-41 151h32c35.3 0 64 28.7 64 64v160c0 35.3-28.7 64-64 64h-2.7c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32H157.2c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h160c29.2-38.9 75.7-64 128-64s98.8 25.1 128 64m-32 96a96 96 0 1 0-192 0 96 96 0 1 0 192 0M88 256c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zM64 360c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H88c-13.3 0-24 10.7-24 24"})
);

export default LanProjectorSolid;
