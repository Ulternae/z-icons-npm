import React from 'react';

export const LanReflectHorizontal = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 48v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16s16 7.2 16 16M148.7 256 32 139.3v233.4zM41 103l136 136c9.4 9.4 9.4 24.6 0 33.9L41 409c-6.9 6.9-17.2 8.9-26.2 5.2S0 401.7 0 392V120c0-9.7 5.8-18.5 14.8-22.2S34.1 96.2 41 103m322.3 153L480 372.7V139.3zM471 103c6.9-6.9 17.2-8.9 26.2-5.2S512 110.3 512 120v272c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2L335 273c-9.4-9.4-9.4-24.6 0-33.9z"})
);

export default LanReflectHorizontal;
