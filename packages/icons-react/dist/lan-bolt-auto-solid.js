import React from 'react';

export const LanBoltAutoSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M339.6 22.7c11.8 9.1 15.7 25.2 9.4 38.7L274 224h110c13.5 0 25.6 8.5 30.2 21.3s.5 27-10 35.5l-256 208c-11.6 9.4-28.1 9.6-39.8.4S92.7 464 99 450.5L174 288H64c-13.5 0-25.6-8.5-30.2-21.3s-.5-27 10-35.5l256-208c11.6-9.4 28.1-9.6 39.8-.4zM464 288c9.1 0 17.4 5.1 21.5 13.3l88 176c5.9 11.9 1.1 26.3-10.7 32.2s-26.3 1.1-32.2-10.7l-13.4-26.7H410.9l-13.4 26.7c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2l88-176c4.1-8.1 12.4-13.3 21.5-13.3zm-29.2 136h58.3l-29.2-58.3-29.2 58.3z"})
);

export default LanBoltAutoSolid;
