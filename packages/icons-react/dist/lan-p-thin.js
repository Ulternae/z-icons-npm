import React from 'react';

export const LanPThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 40c0-4.4 3.6-8 8-8h176c75.1 0 136 60.9 136 136s-60.9 136-136 136H16v168c0 4.4-3.6 8-8 8s-8-3.6-8-8zm16 248h168c66.3 0 120-53.7 120-120S250.3 48 184 48H16z"})
);

export default LanPThin;
