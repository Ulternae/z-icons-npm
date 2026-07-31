import React from 'react';

export const LanCentSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 0c8.8 0 16 7.2 16 16v48.2c47.9 2 91.2 21.5 123.8 52.2 6.4 6.1 6.7 16.2.6 22.6s-16.2 6.7-22.6.7C297.1 112.6 258.5 96 216 96c-88.4 0-160 71.6-160 160s71.6 160 160 160c42.5 0 81.1-16.6 109.8-43.6 6.4-6.1 16.6-5.8 22.6.7s5.8 16.6-.6 22.6c-32.6 30.7-75.9 50.2-123.8 52.2v48.2c0 8.8-7.2 16-16 16s-16-7.2-16-16v-49.5C97.3 434.7 24 353.9 24 256S97.3 77.3 192 65.5V16c0-8.8 7.2-16 16-16"})
);

export default LanCentSign;
