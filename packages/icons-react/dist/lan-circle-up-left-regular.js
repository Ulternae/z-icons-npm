import React from 'react';

export const LanCircleUpLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m56-352H184c-13.3 0-24 10.7-24 24v128c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l35-35 67 67c9.4 9.4 24.6 9.4 33.9 0l24-24c9.4-9.4 9.4-24.6 0-33.9l-67-67 35-35c6.9-6.9 8.9-17.2 5.2-26.2S321.7 160 312 160"})
);

export default LanCircleUpLeftRegular;
