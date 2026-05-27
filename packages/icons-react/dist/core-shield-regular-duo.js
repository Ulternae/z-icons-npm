import React from 'react';

export const CoreShieldRegular-duo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m64 119 160-53.3L384 119v146.3c0 60.6-34.2 116-88.4 143.1L224 444.2l-71.6-35.8C98.2 381.3 64 325.9 64 265.3z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"m234.1 1.6 170.1 56.7C430.4 67 448 91.5 448 119v146.3c0 84.8-47.9 162.4-123.8 200.3L224 515.8l-100.2-50.1C47.9 427.7 0 350.2 0 265.3V119c0-27.5 17.6-52 43.8-60.7L213.9 1.6 224-1.7zM64 119v146.3c0 60.6 34.2 116 88.4 143.1l71.6 35.8 71.6-35.8c54.2-27.1 88.4-82.5 88.4-143.1V119L224 65.7z"})
);

export default CoreShieldRegular-duo;
