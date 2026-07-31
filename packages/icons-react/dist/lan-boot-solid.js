import React from 'react';

export const LanBootSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 32C0 14.3 14.3 0 32 0h256c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h72v48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h104c70.7 0 128 57.3 128 128H0zm0 400h448v28.7c0 12.4-4.5 24.4-12.7 33.8-9.7 11.1-23.8 17.5-38.6 17.5H392c-17.8 0-34.7-7.7-46.4-21.1l-3.5-4c-3.2-3.6-8.9-3.6-12 0l-3.5 4C314.7 504.3 297.8 512 280 512s-34.7-7.7-46.4-21.1l-3.5-4c-3.2-3.6-8.9-3.6-12 0l-3.5 4C202.7 504.3 185.8 512 168 512s-34.7-7.7-46.4-21.1l-3.5-4c-3.2-3.6-8.9-3.6-12 0l-3.5 4C90.7 504.3 73.8 512 56 512h-4.7c-14.8 0-28.8-6.4-38.6-17.5C4.5 485.2 0 473.2 0 460.7z"})
);

export default LanBootSolid;
