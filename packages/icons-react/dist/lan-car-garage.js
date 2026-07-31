import React from 'react';

export const LanCarGarage = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M294.4 1.3c-4.1-1.8-8.7-1.8-12.8 0l-256 112c-8.1 3.5-11.8 13-8.2 21.1s13 11.8 21.1 8.2L288 33.5l249.6 109.2c8.1 3.5 17.5-.1 21.1-8.2s-.2-17.5-8.2-21.1l-256-112zM195.9 176h184.2c14.2 0 26.7 9.4 30.7 23l21.5 73H143.8l21.5-73c4-13.6 16.5-23 30.7-23zm-61.4 13.9-24.9 84.7C83.2 282.6 64 307.1 64 336v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h384v32c0 8.8 7.2 16 16 16s16-7.2 16-16V336c0-28.9-19.2-53.4-45.6-61.3L441.5 190c-8-27.2-33-45.9-61.4-45.9H195.9c-28.4 0-53.4 18.7-61.4 45.9zM480 384v48H96v-96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32zm-320 8a24 24 0 1 0 0-48 24 24 0 1 0 0 48m280-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanCarGarage;
