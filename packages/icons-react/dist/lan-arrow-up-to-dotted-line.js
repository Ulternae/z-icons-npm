import React from 'react';

export const LanArrowUpToDottedLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m132.7 108.7c6.2-6.2 16.4-6.2 22.6 0l144 144c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L208 182.6V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V182.6L59.3 299.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zM136 48a24 24 0 1 1 0-48 24 24 0 1 1 0 48m136-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m88 24a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
);

export default LanArrowUpToDottedLine;
