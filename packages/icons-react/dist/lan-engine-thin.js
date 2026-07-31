import React from 'react';

export const LanEngineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 40c0 4.4-3.6 8-8 8h-80v80h128c30.9 0 56 25.1 56 56v208c0 30.9-25.1 56-56 56H232c-17.6 0-34.2-8.3-44.8-22.4L156 384h-36c-30.9 0-56-25.1-56-56v-64H16v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V160c0-4.4 3.6-8 8-8s8 3.6 8 8v88h48v-64c0-30.9 25.1-56 56-56h128V48h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h176c4.4 0 8 3.6 8 8m144 345.4V168c0-4.4 3.6-8 8-8s8 3.6 8 8v240c0 4.4-3.6 8-8 8s-8-3.6-8-8zM120 144c-22.1 0-40 17.9-40 40v144c0 22.1 17.9 40 40 40h40c2.5 0 4.9 1.2 6.4 3.2L200 416c7.6 10.1 19.4 16 32 16h160c22.1 0 40-17.9 40-40V184c0-22.1-17.9-40-40-40zm224 80H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h176c4.4 0 8 3.6 8 8s-3.6 8-8 8"})
);

export default LanEngineThin;
