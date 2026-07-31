import React from 'react';

export const LanCircleBolt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m37.7-400c-7.9 0-15.5 3.1-21.1 8.7L152 241.4c-5.1 5.1-8 12.1-8 19.3 0 15.1 12.2 27.3 27.3 27.3H210l-20.6 74.1c-5.3 19 9 37.9 28.8 37.9 7.9 0 15.5-3.1 21.1-8.7L360 270.6c5.1-5.1 8-12.1 8-19.3 0-15.1-12.2-27.3-27.3-27.3H302l20.6-74.1c5.3-19-9-37.9-28.8-37.9zM182.6 256l106.9-106.9-24.1 86.6c-2.8 10 5 20.3 15.4 20.3h48.5L222.4 362.9l24.1-86.6c2.8-10-5-20.3-15.4-20.3z"})
);

export default LanCircleBolt;
