import React from 'react';

export const LanHeadsetThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 224c0-114.9 93.1-208 208-208s208 93.1 208 208v10.9C414.8 209 385.4 192 352 192c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48 33.4 0 62.8-17 80-42.9v67c0 48.6-39.4 88-88.1 88h-48c5-6.7 8-15 8-24 0-22.1-17.9-40-40-40h-80c-22.1 0-40 17.9-40 40s17.9 40 40 40c29.3 0 82.7 0 159.9.1 57.5 0 104.1-46.5 104.1-104L448 224C448 100.3 347.7 0 224 0S0 100.3 0 224v64c0 53 43 96 96 96 26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48-33.4 0-62.8 17-80 42.9zm224 272h-56c-13.3 0-24-10.7-24-24s10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24zm112-288c44.2 0 80 35.8 80 80s-35.8 80-80 80c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32M16 288c0-44.2 35.8-80 80-80 17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32-44.2 0-80-35.8-80-80"})
);

export default LanHeadsetThin;
