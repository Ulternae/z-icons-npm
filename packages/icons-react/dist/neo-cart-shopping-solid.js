import React from 'react';

export const NeoCartShoppingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 616 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M28 28C12.5 28 0 40.5 0 56s12.5 28 28 28c18.6 0 34.4 13.5 37.4 31.8l38.5 235.9c6.9 42 37.8 78.5 82.9 85.8 32.7 5.3 78.9 10.5 135.2 10.5 64.2 0 107-6.7 133.3-13 28.3-6.9 47.7-27.5 58.4-49.8l64.8-135c6.2-13 9.5-27.3 9.5-41.7 0-53.3-43.2-96.4-96.4-96.4H121.5C113.9 65.1 77.3 28 28 28m112 490a42 42 0 1 1 84 0 42 42 0 1 1-84 0m294 42a42 42 0 1 0 0-84 42 42 0 1 0 0 84"})
);

export default NeoCartShoppingSolid;
