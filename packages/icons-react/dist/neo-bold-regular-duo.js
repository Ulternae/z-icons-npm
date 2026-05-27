import React from 'react';

export const NeoBoldRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 504 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 84h196c28.2 0 48.6 8.8 61.9 22.1S392 139.8 392 168s-8.8 48.6-22.1 61.9S336.2 252 308 252H112zm0 224h252c28.2 0 48.6 8.8 61.9 22.1S448 363.8 448 392s-8.8 48.6-22.1 61.9S392.2 476 364 476H112z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M28 28C12.5 28 0 40.5 0 56s12.5 28 28 28h28v392H28c-15.5 0-28 12.5-28 28s12.5 28 28 28h336c40.3 0 75.9-12.9 101.5-38.5S504 432.3 504 392s-12.9-75.9-38.5-101.5c-13.5-13.5-29.8-23.5-48-29.9 20.3-24.7 30.5-56.8 30.5-92.7 0-40.3-12.9-75.9-38.5-101.5S348.3 28 308 28zm280 224H112V84h196c28.2 0 48.6 8.8 61.9 22.1S392 139.8 392 168s-8.8 48.6-22.1 61.9S336.2 252 308 252m-196 56h252c28.2 0 48.6 8.8 61.9 22.1S448 363.8 448 392s-8.8 48.6-22.1 61.9S392.2 476 364 476H112z"})
);

export default NeoBoldRegular-duo;
