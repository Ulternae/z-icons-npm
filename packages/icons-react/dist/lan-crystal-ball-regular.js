import React from 'react';

export const LanCrystalBallRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 224c0-97.2-78.8-176-176-176S48 126.8 48 224c0 71 42 132.2 102.6 160h146.8C358 356.2 400 295 400 224M86.9 401.2C34 360.2 0 296.1 0 224 0 100.3 100.3 0 224 0s224 100.3 224 224c0 72.1-34 136.2-86.9 177.2l65 72.2c3.8 4.2 5.9 9.8 5.9 15.5 0 12.8-10.4 23.1-23.1 23.1H39.1C26.3 512 16 501.6 16 488.9c0-5.7 2.1-11.2 5.9-15.5zm80.6-300.9 9.8 26.4 26.4 9.8c7 2.6 7 12.4 0 15l-26.4 9.8-9.8 26.4c-2.6 7-12.4 7-15 0l-9.8-26.4-26.4-9.8c-7-2.6-7-12.4 0-15l26.4-9.8 9.8-26.4c2.6-7 12.4-7 15 0m113 48c2.6-7 12.4-7 15 0l18.4 49.8 49.8 18.4c7 2.6 7 12.4 0 15l-49.8 18.4-18.4 49.8c-2.6 7-12.4 7-15 0l-18.4-49.8-49.8-18.4c-7-2.6-7-12.4 0-15l49.8-18.4z"})
);

export default LanCrystalBallRegular;
