import React from 'react';

export const LanDialMaxThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M272 32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-37.7 261.7L384 395.3c-56.5 50.7-143.5 48.8-197.8-5.5-56.2-56.2-56.2-147.4 0-203.6s147.4-56.2 203.6 0c54.3 54.3 56.2 141.3 5.5 197.8L293.7 282.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3zm118.8 107.4a160 160 0 1 0-226.2-226.2 160 160 0 1 0 226.2 226.2M544 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64M16 288a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m368-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M96 464a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m368-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanDialMaxThin;
