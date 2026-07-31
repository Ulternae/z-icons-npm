import React from 'react';

export const LanArrowRightLongToLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M507.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L457.4 272H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h441.4L340.7 123.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0zM640 112v288c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanArrowRightLongToLine;
