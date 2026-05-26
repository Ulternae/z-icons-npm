import React from 'react';

export const LanBookCircleArrowRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 208c16.6 0 32.7 2.1 48 6V48c0-26.5-21.5-48-48-48H128C75 0 32 43 32 96v320c0 53 43 96 96 96h148c-13.7-19-24-40.7-30-64H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h112.7c8.1-98.6 90.7-176 191.3-176m144 192a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-147.3-67.3c6.2-6.2 16.4-6.2 22.6 0l56 56c6.2 6.2 6.2 16.4 0 22.6l-56 56c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l28.7-28.7H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h89.4l-28.7-28.7c-6.2-6.2-6.2-16.4 0-22.6"})
);

export default LanBookCircleArrowRightSolid;
