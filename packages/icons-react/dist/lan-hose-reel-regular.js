import React from 'react';

export const LanHoseReelRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 256c0-114.9 93.1-208 208-208s208 93.1 208 208v96h-8c-13.3 0-24 10.7-24 24 0 11.2 7.7 20.7 18.2 23.3l9.7 68c-7.1 4.2-11.9 11.9-11.9 20.7 0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24 0-8.8-4.8-16.6-11.9-20.7l9.7-68c10.4-2.6 18.2-12 18.2-23.3 0-13.3-10.7-24-24-24h-8v-96C544 114.6 429.4 0 288 0S32 114.6 32 256s114.6 256 256 256c54.4 0 104.8-17 146.3-45.9l-27.5-39.4C373.2 450.2 332.2 464 288 464c-114.9 0-208-93.1-208-208m96 0a112 112 0 1 1 224 0 112 112 0 1 1-224 0m272 0a160 160 0 1 0-320 0 160 160 0 1 0 320 0m-160 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128"})
);

export default LanHoseReelRegular;
