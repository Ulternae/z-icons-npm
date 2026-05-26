import React from 'react';

export const LanPlayFlipThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M364.5 50.9c7.4-4.1 16.5-3.9 23.8.4S400 63.5 400 72v368c0 8.5-4.5 16.3-11.8 20.6s-16.3 4.5-23.8.4L28.5 277c-7.7-4.2-12.5-12.2-12.5-21s4.8-16.8 12.5-21.1zm31.9 423.5c12.2-7.2 19.6-20.3 19.6-34.4V72c0-14.1-7.5-27.2-19.6-34.4s-27.2-7.5-39.6-.7l-336 184C8 227.9 0 241.4 0 256s8 28.1 20.8 35.1l336 184c12.4 6.8 27.4 6.5 39.6-.7"})
);

export default LanPlayFlipThin;
