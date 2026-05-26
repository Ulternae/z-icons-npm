import React from 'react';

export const LanFill = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M296 32c15.4 0 30.1 6.1 41 17l126 126c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41l-31 31H32.6c1.7-12.4 7.5-24 16.4-33l107.7-107.7 72 72c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-72-72L255 49c10.9-10.9 25.6-17 41-17m-161.9 92.7L26.3 232.4C9.5 249.3 0 272.1 0 296s9.5 46.7 26.3 63.6l126.1 126.1c16.9 16.8 39.7 26.3 63.6 26.3s46.7-9.5 63.6-26.3l206.1-206.1c16.8-16.9 26.3-39.7 26.3-63.6s-9.5-46.7-26.3-63.6L359.6 26.3C342.7 9.5 319.9 0 296 0s-46.7 9.5-63.6 26.3L156.7 102 91.3 36.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l65.4 65.4zM49 337c-5-5-8.9-10.7-11.8-17H400L257 463c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17z"})
);

export default LanFill;
