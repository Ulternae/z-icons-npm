import React from 'react';

export const LanMugThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 80c-8.8 0-16 7.2-16 16v256c0 44.2 35.8 80 80 80h192c44.2 0 80-35.8 80-80V80zm352 0v176h24c48.6 0 88-39.4 88-88s-39.4-88-88-88zm0 192v80c0 53-43 96-96 96H160c-53 0-96-43-96-96V96c0-17.7 14.3-32 32-32h376c57.4 0 104 46.6 104 104s-46.6 104-104 104z"})
);

export default LanMugThin;
