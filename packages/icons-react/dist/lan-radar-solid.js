import React from 'react';

export const LanRadarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m293 185.1-54 54c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L497 49c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-34-.1l-43.7 43.8C374.9 22.1 318.1 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256h-64c0 106-86 192-192 192S64 362 64 256 150 64 256 64c44.4 0 85.2 15 117.7 40.3l-34.3 34.3C315.9 121.8 287.1 112 256 112c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144h-64c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80c13.4 0 25.9 3.3 37 9.1"})
);

export default LanRadarSolid;
