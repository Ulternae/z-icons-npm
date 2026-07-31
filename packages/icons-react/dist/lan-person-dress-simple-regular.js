import React from 'react';

export const LanPersonDressSimpleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128.1 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128m35.4 234.7c-4.5-15.8-19-26.7-35.4-26.7s-30.9 10.9-35.4 26.7L63.7 336h128.8zm-117-13.2c10.4-36.4 43.7-61.5 81.6-61.5s71.2 25.1 81.6 61.5l34.8 121.7c5.8 20.4-9.5 40.8-30.8 40.8h-21.6v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V384h-32v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V384H42.5c-21.3 0-36.6-20.3-30.8-40.8z"})
);

export default LanPersonDressSimpleRegular;
