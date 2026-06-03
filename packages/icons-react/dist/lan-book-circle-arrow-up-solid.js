import React from 'react';

export const LanBookCircleArrowUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576.008 544.008',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 208c16.6 0 32.7 2.1 48 6V48c0-26.5-21.5-48-48-48H128C75 0 32 43 32 96v320c0 53 43 96 96 96h148c-13.7-19-24-40.7-30-64H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h112.7c8.1-98.6 90.7-176 191.3-176m-1.5 48a144 144 0 1 0 3 288 144 144 0 1 0-3-288m-65.8 148c-6.3-6.2-6.4-16.3-.2-22.6l55.4-56.6c6.2-6.3 16.3-6.4 22.6-.2l56.6 55.4c6.3 6.2 6.4 16.3.2 22.6s-16.3 6.4-22.6.2l-29-28.4.9 89.4c.1 8.8-7 16.1-15.8 16.2s-16.1-7-16.2-15.8l-.9-89.4-28.4 29c-6.2 6.3-16.3 6.4-22.6.2"})
);

export default LanBookCircleArrowUpSolid;
