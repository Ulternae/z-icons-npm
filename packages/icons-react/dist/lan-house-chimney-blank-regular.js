import React from 'react';

export const LanHouseChimneyBlankRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240 6.1c9.1-8.2 22.9-8.2 32 0l144 129.1V88c0-13.3 10.7-24 24-24s24 10.7 24 24v90.2l40 35.9c9.9 8.8 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-8-7.2v205.3c0 35.3-28.7 64-64 64h-288c-35.3 0-64-28.7-64-64V242.6l-8 7.2c-9.9 8.8-25 8-33.9-1.8s-8-25 1.8-33.9zM416 248v-48.3L256 56.2 96 199.7V448c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16z"})
);

export default LanHouseChimneyBlankRegular;
