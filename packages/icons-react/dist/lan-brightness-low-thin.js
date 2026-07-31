import React from 'react';

export const LanBrightnessLowThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M204 80a12 12 0 1 0-24 0 12 12 0 1 0 24 0m-12 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192M76 140a12 12 0 1 0-17-17 12 12 0 1 0 17 17M16 244a12 12 0 1 0 0 24 12 12 0 1 0 0-24m60 128a12 12 0 1 0-17 17 12 12 0 1 0 17-17m128 60c0-6.6-5.4-12-12-12s-12 5.4-12 12 5.4 12 12 12 12-5.4 12-12m120.9-43.1a12 12 0 1 0-17-17 12 12 0 1 0 17 17M368 244a12 12 0 1 0 0 24 12 12 0 1 0 0-24m-43.1-120.9a12 12 0 1 0-17 17 12 12 0 1 0 17-17"})
);

export default LanBrightnessLowThin;
