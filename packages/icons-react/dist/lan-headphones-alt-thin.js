import React from 'react';

export const LanHeadphonesAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 224c0-114.9 93.1-208 208-208s208 93.1 208 208v74.9C414.8 273 385.4 256 352 256h-16c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h16c53 0 96-43 96-96V224C448 100.3 347.7 0 224 0S0 100.3 0 224v160c0 53 43 96 96 96h16c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48H96c-33.4 0-62.8 17-80 42.9zm0 128c0-44.2 35.8-80 80-80h16c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H96c-44.2 0-80-35.8-80-80zm416 0v32c0 44.2-35.8 80-80 80h-16c-17.7 0-32-14.3-32-32V304c0-17.7 14.3-32 32-32h16c44.2 0 80 35.8 80 80"})
);

export default LanHeadphonesAltThin;
