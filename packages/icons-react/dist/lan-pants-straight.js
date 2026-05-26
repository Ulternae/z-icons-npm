import React from 'react';

export const LanPantsStraight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M51.5 32c-9.2 0-16.5 7.8-16 17l2.9 47h57.9c8.8 0 16 7.2 16 16s-7.2 16-16 16H40.4l21.1 337c.5 8.4 7.5 15 16 15h130.9V184c0-8.8 7.2-16 16-16s16 7.2 16 16v296h130.9c8.5 0 15.4-6.6 16-15l21.1-337h-55.9c-8.8 0-16-7.2-16-16s7.2-16 16-16h57.9l2.9-47c.6-9.2-6.7-17-16-17zm172.9 480H77.5c-25.3 0-46.3-19.7-47.9-45L3.6 51C1.9 23.4 23.8 0 51.5 0h345.8c27.7 0 49.6 23.4 47.9 51l-26 416c-1.6 25.3-22.6 45-47.9 45z"})
);

export default LanPantsStraight;
