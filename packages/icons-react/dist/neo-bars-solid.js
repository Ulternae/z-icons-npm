import React from 'react';

export const NeoBarsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 504 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 280c0-15.5 12.5-28 28-28h448c15.5 0 28 12.5 28 28s-12.5 28-28 28H28c-15.5 0-28-12.5-28-28m484.2-169.2c14.8-4.5 23.1-20.2 18.6-35s-20.2-23.1-35-18.5C398.8 78 323.5 84 252 84S105.2 78 36.2 57.2C21.5 52.7 5.8 61 1.2 75.8s3.8 30.5 18.6 35C93.9 133.5 175.1 140 252 140s158.1-6.5 232.2-29.2m0 338.5c14.8 4.6 23.1 20.2 18.6 35s-20.2 23.1-35 18.5C398.8 482 323.5 476 252 476s-146.8 6-215.8 26.8c-14.8 4.5-30.4-3.8-35-18.5s3.8-30.5 18.6-35C93.9 426.5 175.1 420 252 420s158.1 6.5 232.2 29.2z"})
);

export default NeoBarsSolid;
