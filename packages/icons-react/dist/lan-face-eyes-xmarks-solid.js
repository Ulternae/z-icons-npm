import React from 'react';

export const LanFaceEyesXmarksSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-208c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80M105.9 153.9c7.8-7.8 20.5-7.8 28.3 0l25.9 25.9 25.9-25.9c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3l-25.9 25.9 25.9 25.9c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0l-25.9-25.9-25.9 25.9c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3l25.9-25.9-25.9-25.9c-7.8-7.8-7.8-20.5 0-28.3m192 0c7.8-7.8 20.5-7.8 28.3 0l25.9 25.9 25.9-25.9c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3l-25.9 25.9 25.9 25.9c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0l-25.9-25.9-25.9 25.9c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3l25.9-25.9-25.9-25.9c-7.8-7.8-7.8-20.5 0-28.3"})
);

export default LanFaceEyesXmarksSolid;
