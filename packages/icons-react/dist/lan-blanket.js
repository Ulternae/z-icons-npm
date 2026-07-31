import React from 'react';

export const LanBlanket = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 128v184.4C49 297.2 71.4 288 96 288h296c8.6 0 16.7 1.9 24 5.4V128c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64M0 384V128c0-53 43-96 96-96h256c53 0 96 43 96 96v216c0 30.9-25.1 56-56 56H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h296c13.3 0 24-10.7 24-24s-10.7-24-24-24H96c-35.3 0-64 28.7-64 64s28.7 64 64 64h336c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-53 0-96-43-96-96"})
);

export default LanBlanket;
