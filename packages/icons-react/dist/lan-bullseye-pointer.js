import React from 'react';

export const LanBullseyePointer = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 480c123.7 0 224-100.3 224-224S379.7 32 256 32 32 132.3 32 256c0 5.9.2 11.8.7 17.6l-4.9 1.6c-9.9 3.4-18.5 8.9-25.4 15.9Q0 273.85 0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256q-17.85 0-35.1-2.4c7-6.9 12.5-15.6 15.8-25.4l1.6-4.9c5.8.5 11.7.7 17.6.7zm0-384c88.4 0 160 71.6 160 160 0 87.2-69.8 158.1-156.5 160l10.9-32.8C334.3 376 384 321.8 384 256c0-70.7-57.3-128-128-128-65.8 0-120 49.7-127.2 113.6L96 252.5C97.9 165.8 168.8 96 256 96m-4.7 164.7c4.3 4.3 5.8 10.6 3.9 16.4l-64 192c-2.2 6.5-8.3 10.9-15.2 10.9s-13-4.4-15.2-10.9L137 397.6l-93.7 93.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l93.7-93.7L43 351.2c-6.6-2.2-11-8.3-11-15.2s4.4-13 10.9-15.2l192-64c5.7-1.9 12.1-.4 16.4 3.9M98.6 336l50.5 16.8c4.8 1.6 8.5 5.3 10.1 10.1l16.8 50.5 38.7-116.1z"})
);

export default LanBullseyePointer;
