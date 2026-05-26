import React from 'react';

export const LanCircleQuarters = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M402.7 425.3 256 278.6 109.3 425.3C148.6 459.4 199.9 480 256 480s107.4-20.6 146.7-54.7m22.6-22.6C459.4 363.4 480 312.1 480 256s-20.6-107.4-54.7-146.7L278.6 256zm-22.6-316C363.4 52.6 312.1 32 256 32S148.6 52.6 109.3 86.7L256 233.4zm-316 22.6C52.6 148.6 32 199.9 32 256s20.6 107.4 54.7 146.7L233.4 256zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
);

export default LanCircleQuarters;
