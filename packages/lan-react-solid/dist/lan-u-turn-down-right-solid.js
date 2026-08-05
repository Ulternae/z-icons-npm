import React from 'react';

export function LanUTurnDownRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512.049 528.056',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 240c0 114.9 93.1 208 208 208h128v48c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l112-112 2.2-2.4c10.2-12.6 9.5-31.1-2.2-42.8l-112-112c-9.2-9.2-22.9-11.9-34.9-6.9S336 259.1 336 272v48H208c-44.2 0-80-35.8-80-80s35.8-80 80-80h208c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H208C93.1 32 0 125.1 0 240"})
  );
}

export default LanUTurnDownRightSolid;
