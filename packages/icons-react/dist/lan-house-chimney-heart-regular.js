import React from 'react';

export const LanHouseChimneyHeartRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 6.1c-9.1-8.2-22.9-8.2-32 0L8 214.1c-9.9 8.8-10.7 24-1.8 33.9s24 10.7 33.9 1.8l8-7.2v205.3c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V242.6l8 7.2c9.9 8.8 25 8 33.9-1.8s8-25-1.8-33.9l-40-35.9V88c0-13.3-10.7-24-24-24s-24 10.7-24 24v47.2L272.2 6.1zm144 193.6V448c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V199.7L256 56.2zm-169.1 55.2c-9.5-9.5-22.5-14.9-36-14.9H208c-26.5 0-48 21.5-48 48 0 53.4 66.9 95.7 89 108.2 4.4 2.5 9.6 2.5 14 0 22.1-12.5 89-54.8 89-108.2 0-26.5-21.5-48-48-48h-2.9c-13.5 0-26.5 5.4-36 14.9L256 264z"})
);

export default LanHouseChimneyHeartRegular;
