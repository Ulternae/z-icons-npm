import React from 'react';

export const LanCompassThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m95.1-381.5-146.5 48.9c-11.9 4-21.3 13.4-25.3 25.3l-48.8 146.4c-6.3 18.8 11.6 36.6 30.4 30.4l146.5-48.8c11.9-4 21.3-13.4 25.3-25.3l48.8-146.5c6.3-18.8-11.6-36.6-30.4-30.4m15.2 25.3-48.8 146.5c-2.4 7.2-8 12.8-15.2 15.2l-146.5 48.8c-6.3 2.1-12.2-3.9-10.1-10.1l48.8-146.5c2.4-7.2 8-12.8 15.2-15.2l146.5-48.8c6.3-2.1 12.2 3.9 10.1 10.1M240 256a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanCompassThin;
