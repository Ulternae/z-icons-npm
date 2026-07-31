import React from 'react';

export const LanBorderTopLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 464c0 8.8 7.2 16 16 16s16-7.2 16-16V96c0-17.7 14.3-32 32-32h368c8.8 0 16-7.2 16-16s-7.2-16-16-16H64C28.7 32 0 60.7 0 96zm264-16a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-104 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m232-24a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24-232a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-24 104a24 24 0 1 0 48 0 24 24 0 1 0-48 0"})
);

export default LanBorderTopLeft;
