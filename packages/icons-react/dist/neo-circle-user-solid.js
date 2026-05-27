import React from 'react';

export const NeoCircleUserSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280 0C197 0 126.4 26.5 76.5 76.5S0 197 0 280s26.5 153.6 76.5 203.5S197 560 280 560s153.6-26.5 203.5-76.5S560 363 560 280s-26.5-153.6-76.5-203.5S363 0 280 0m150.8 455.9C393.9 486.3 343.1 504 280 504s-113.9-17.7-150.8-48.1c-9.3-7.9-11.1-21.8-2.6-30.6C158.7 392.4 213.4 392 256 392h48c42.6 0 97.2.4 129.4 33.3 8.6 8.8 6.7 22.7-2.6 30.6m-221.9-303c17.6-17.7 42.4-26.9 71.1-26.9s53.5 9.2 71.2 26.9S378 195.4 378 224s-9.2 53.5-26.8 71.2S308.7 322 280 322s-53.5-9.2-71.1-26.8S182 252.7 182 224s9.2-53.5 26.9-71.1"})
);

export default NeoCircleUserSolid;
