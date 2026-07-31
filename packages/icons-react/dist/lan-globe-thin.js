import React from 'react';

export const LanGlobeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M331.9 427.2c-22.7 46-50.7 68.8-75.9 68.8s-53.2-22.8-75.9-68.8c-21.1-42.9-34.9-101.3-36-163.2H368c-1.1 61.9-14.9 120.3-36.1 163.2m36-179.2H144c1.2-61.9 15-120.3 36.1-163.2C202.8 38.8 230.8 16 256 16s53.2 22.8 75.9 68.8C353 127.7 366.9 186 368 248zm16 16h111.9c-3.7 112-84.1 204.6-190.4 226.9 44.7-39.5 76.8-129.4 78.5-226.9m111.9-16H383.9c-1.6-97.5-33.8-187.4-78.5-226.9C411.7 43.4 492.2 136 495.9 248zM128 248H16.1c3.7-112 84.1-204.6 190.4-226.9C161.8 60.6 129.7 150.5 128 248M16.1 264H128c1.7 97.5 33.9 187.4 78.6 226.9C100.3 468.6 19.8 376 16.1 264M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512"})
);

export default LanGlobeThin;
