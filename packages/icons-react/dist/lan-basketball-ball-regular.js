import React from 'react';

export const LanBasketballBallRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 458.4V456c0-33.3 10.7-64.1 28.9-89.2l52.2 52.2c-23.5 18.6-51 32.2-81.1 39.4m-47.8 5.6h-.2c-48.8 0-93.7-16.8-129.1-44.9L256 289.9l42.6 42.7c-26.7 34-42.6 76.9-42.6 123.4 0 2.7.1 5.3.2 8m76.4-165.4L289.9 256l129.2-129.1C447.2 162.3 464 207.2 464 256v.2c-2.7-.1-5.3-.2-8-.2-46.6 0-89.4 15.9-123.4 42.6m125.8 5.4c-7.1 30.1-20.8 57.7-39.4 81.1l-52.2-52.2c25-18.2 55.9-28.9 89.2-28.9zM256 222.1l-42.6-42.6c26.7-34 42.6-76.9 42.6-123.4 0-2.7-.1-5.3-.2-8h.2c48.8 0 93.7 16.8 129.1 44.9zm-76.9-76.9-52.2-52.3c23.5-18.6 51-32.2 81.1-39.4v2.4c0 33.3-10.7 64.1-28.9 89.2zm-33.9 33.9C120.2 197.3 89.3 208 56 208h-2.4c7.1-30.1 20.8-57.7 39.4-81.1zM48 255.8c2.7.1 5.3.2 8 .2 46.6 0 89.4-15.9 123.4-42.6l42.7 42.6L92.9 385.1C64.8 349.7 48 304.8 48 256zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512"})
);

export default LanBasketballBallRegular;
