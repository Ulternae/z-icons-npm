import React from 'react';

export const LanFaceRaisedEyebrowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m208 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-176 72c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H184c-13.3 0-24 10.7-24 24m183.1-189.2c5.6-2.8 12.3-2.8 17.9 0l14.1 7.1c9.9 4.9 21.9.9 26.8-8.9s.9-21.9-8.9-26.8l-14.1-7.1c-16.9-8.4-36.8-8.4-53.7 0l-46.1 23.1c-9.9 4.9-13.9 17-8.9 26.8s17 13.9 26.8 8.9zM128 148c-11 0-20 9-20 20s9 20 20 20h64c11 0 20-9 20-20s-9-20-20-20z"})
);

export default LanFaceRaisedEyebrowSolid;
