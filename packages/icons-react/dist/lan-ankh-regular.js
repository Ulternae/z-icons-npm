import React from 'react';

export const LanAnkhRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 128c0 42.3 22.6 78.9 50.5 107.6 10.3 10.6 20.6 19.4 29.5 26.3 8.9-6.9 19.3-15.7 29.5-26.3C217.3 206.9 240 170.3 240 128c0-44.2-35.8-80-80-80s-80 35.8-80 80m18.9 144C66 238.9 32 189.8 32 128 32 57.3 89.3 0 160 0s128 57.3 128 128c0 61.8-34 110.9-67 144h75c13.3 0 24 10.7 24 24s-10.7 24-24 24H184v168c0 13.3-10.7 24-24 24s-24-10.7-24-24V320H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanAnkhRegular;
