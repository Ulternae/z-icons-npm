import React from 'react';

export const NeoHandSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M308.4 28c0-15.5-12.5-28-28-28s-28 12.5-28 28v196.1c-.1 15.4-12.6 27.9-28 27.9-15.5 0-28-12.5-28-28V84c0-15.5-12.5-28-28-28s-28 12.5-28 28v260.7c0 18-23.3 25.8-34.3 12l-34.5-43c-14.3-17.9-41.1-19.4-57.3-3.2C2 322.8-.5 341.8 8.1 356.9l43.5 76.2c44.9 78.5 128.4 127 218.8 127h10c74.5 0 138.1-23.8 183.1-68.9s68.9-108.7 68.9-183.2V140c0-15.5-12.5-28-28-28s-28 12.5-28 28v84.1c-.1 15.4-12.6 27.9-28 27.9-15.5 0-28-12.5-28-28V84c0-15.5-12.5-28-28-28s-28 12.5-28 28v140.1c-.1 15.4-12.6 27.9-28 27.9-15.5 0-28-12.5-28-28z"})
);

export default NeoHandSolid;
