import React from 'react';

export const LanPizzaSlice = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M167.5 32.8c-6.1-.4-12.4 3.7-14.4 11.1l-10 37.6C295 96.1 415.9 217 430.5 368.9l37.6-10c7.4-2 11.5-8.3 11.1-14.4C467.7 177.7 334.3 44.3 167.5 32.8M38.6 473.4l360.5-96.1c-11-140.9-123.5-253.4-264.4-264.4zM4.7 507.3c-4-4-5.6-9.9-4.1-15.4L122.2 35.6C127.7 14.8 146.9-.7 169.7.9c182.8 12.6 328.8 158.6 341.4 341.4 1.6 22.8-14 41.9-34.7 47.5L20.1 511.5c-5.5 1.5-11.4-.1-15.4-4.1zM176 216a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 120a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-104 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanPizzaSlice;
