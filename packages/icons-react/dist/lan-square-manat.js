import React from 'react';

export const LanSquareManat = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm208 40c0-8.8 7.2-16 16-16s16 7.2 16 16v9.1c54.3 7.8 96 54.4 96 110.9v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V256c0-38.7-27.5-71-64-78.4V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V177.6c-36.5 7.4-64 39.7-64 78.4v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V256c0-56.4 41.7-103.1 96-110.9z"})
);

export default LanSquareManat;
