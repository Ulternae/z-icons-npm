import React from 'react';

export const LanScalpel = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m306.7 352-30.4 30.4c-42 42-99 65.6-158.4 65.6H77.1l95.8-96zm-101.9-32 270-270.6C485.9 38.3 501 32 516.8 32c32.4 0 58.8 26.3 59 58.4.1 15.6-6.1 30.7-17.2 41.7L384 306.7c-8.5 8.5-20 13.3-32 13.3zm376.5-165.3c17.1-17.1 26.6-40.3 26.5-64.5-.2-49.9-41.1-90.2-91-90.2-24.2 0-47.6 9.6-64.7 26.8L31.9 448 0 480h118c67.9 0 133-27 181-75l53-53c20.5 0 40.1-8.1 54.6-22.6z"})
);

export default LanScalpel;
