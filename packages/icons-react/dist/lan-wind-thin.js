import React from 'react';

export const LanWindThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 8c0 4.4 3.6 8 8 8h64c39.8 0 72 32.2 72 72s-32.2 72-72 72H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h352c48.6 0 88-39.4 88-88S408.6 0 360 0h-64c-4.4 0-8 3.6-8 8m64 400c0 4.4 3.6 8 8 8h68c46.4 0 84-37.6 84-84s-37.6-84-84-84H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h420c37.6 0 68 30.4 68 68s-30.4 68-68 68h-68c-4.4 0-8 3.6-8 8M104 512h64c48.6 0 88-39.4 88-88s-39.4-88-88-88H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h160c39.8 0 72 32.2 72 72s-32.2 72-72 72h-64c-4.4 0-8 3.6-8 8s3.6 8 8 8"})
);

export default LanWindThin;
