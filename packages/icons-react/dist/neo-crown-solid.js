import React from 'react';

export const NeoCrownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M215.4 42.7C226.5 16.8 251.9 0 280.1 0s53.7 16.8 64.8 42.7L404.6 182l46.6-31c10.7-7.2 23.3-11 36.2-11 40.7 0 71.5 36.9 64.3 77l-42.1 231.4c-5.5 30-27.2 56-58.9 63.6-35.8 8.6-97.4 20-170.5 20s-134.7-11.5-170.5-20c-31.7-7.6-53.5-33.6-58.9-63.6L8.6 217c-7.3-40.1 23.5-77 64.3-77 12.9 0 25.5 3.8 36.2 11l46.5 31zM280.1 392a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
);

export default NeoCrownSolid;
