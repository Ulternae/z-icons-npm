import React from 'react';

export const LanCircleAustralRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-325.5 16.6 37.5h-33.2zm27.4-56.7C278.6 119 267.9 112 256 112s-22.6 7-27.4 17.8L186.9 224H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h28.7l-10.6 24H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h3.9l-9.9 22.3c-5.4 12.1.1 26.3 12.2 31.7s26.3-.1 31.7-12.2l18.5-41.7h111.2l18.5 41.7c5.4 12.1 19.5 17.6 31.7 12.2s17.6-19.5 12.2-31.7l-9.9-22.3h3.9c8.8 0 16-7.2 16-16s-7.2-16-16-16h-18.1l-10.6-24H368c8.8 0 16-7.2 16-16s-7.2-16-16-16h-42.9zM225.2 256h61.6l10.6 24h-82.8z"})
);

export default LanCircleAustralRegular;
