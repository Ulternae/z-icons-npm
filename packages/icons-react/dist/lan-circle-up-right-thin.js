import React from 'react';

export const LanCircleUpRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480m0-496a256 256 0 1 1 0 512 256 256 0 1 1 0-512m80 184c0-4.4-3.6-8-8-8H200c-3.2 0-6.2 1.9-7.4 4.9s-.6 6.4 1.7 8.7l40.7 40.7c3.1 3.1 3.1 8.2 0 11.3l-72.7 72.7c-3.1 3.1-3.1 8.2 0 11.3l24 24c3.1 3.1 8.2 3.1 11.3 0l72.7-72.6c3.1-3.1 8.2-3.1 11.3 0l40.7 40.7c2.3 2.3 5.7 3 8.7 1.7s4.9-4.2 4.9-7.4V184zm-8-24c13.3 0 24 10.7 24 24v128c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-35-35-67 67c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l67-67-35-35c-6.9-6.9-8.9-17.2-5.2-26.2S190.3 160 200 160z"})
);

export default LanCircleUpRightThin;
