import React from 'react';

export const LanCartFlatbed = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16h32c8.8 0 16 7.2 16 16v304c0 35.3 28.7 64 64 64h8.6c-5.4 9.4-8.6 20.3-8.6 32 0 35.3 28.7 64 64 64s64-28.7 64-64c0-11.7-3.1-22.6-8.6-32h145.1c-5.4 9.4-8.6 20.3-8.6 32 0 35.3 28.7 64 64 64s64-28.7 64-64c0-11.7-3.1-22.6-8.6-32h56.6c8.8 0 16-7.2 16-16s-7.2-16-16-16h-432c-17.7 0-32-14.3-32-32L96 48C96 21.5 74.5 0 48 0zm464 448a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-288 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m16-384h256c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16m-48 16v160c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H208c-26.5 0-48 21.5-48 48"})
);

export default LanCartFlatbed;
