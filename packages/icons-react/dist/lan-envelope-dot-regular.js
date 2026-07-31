import React from 'react';

export const LanEnvelopeDotRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 0a80 80 0 1 1 0 160 80 80 0 1 1 0-160M93.4 64H369c-.7 5.2-1 10.6-1 16 0 11 1.4 21.8 4 32H93.4C86 112 80 118 80 125.4c0 4.2 2 8.2 5.3 10.7l178.5 135.4c14.3 10.8 34.1 10.8 48.4 0l112.4-85.3c15.5 10.4 33.3 17.5 52.6 20.4l-136 103.2c-31.4 23.9-74.9 23.9-106.4 0L80 192.3V384c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V208c17 0 33.2-3.3 48-9.3V384c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128h.1c0-.9-.1-1.7-.1-2.6C32 91.5 59.5 64 93.4 64"})
);

export default LanEnvelopeDotRegular;
