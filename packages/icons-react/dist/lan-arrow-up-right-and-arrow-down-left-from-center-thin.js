import React from 'react';

export const LanArrowUpRightAndArrowDownLeftFromCenterThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M290.3 210.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L496 27.3V168c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8H344c-4.4 0-8 3.6-8 8s3.6 8 8 8h140.7L290.4 210.3zm-68.7 91.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L16 484.7V344c0-4.4-3.6-8-8-8s-8 3.6-8 8v160c0 4.4 3.6 8 8 8h160c4.4 0 8-3.6 8-8s-3.6-8-8-8H27.3l194.4-194.3z"})
);

export default LanArrowUpRightAndArrowDownLeftFromCenterThin;
