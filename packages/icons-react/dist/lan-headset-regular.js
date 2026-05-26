import React from 'react';

export const LanHeadsetRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M49.1 204.2C58.9 116.3 133.5 48 224 48s165.1 68.3 174.9 156.2C385 196.4 369 192 352 192h-16c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h16c17.5 0 33.9-4.7 48-12.8v20.9c0 39.8-32.3 72-72 72h-40c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48s21.5 48 48 48c44 0 36 0 119.9.1 66.3 0 120.1-53.7 120.1-120V224C448 100.3 347.7 0 224 0S0 100.3 0 224v64c0 53 43 96 96 96h16c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48H96c-17 0-33 4.4-46.9 12.2M352 240c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16v-96zM48 288c0-26.5 21.5-48 48-48h16v96H96c-26.5 0-48-21.5-48-48"})
);

export default LanHeadsetRegular;
