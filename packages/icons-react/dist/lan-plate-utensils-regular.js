import React from 'react';

export const LanPlateUtensilsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 16c13.3 0 24 10.7 24 24v128c0 4.4 3.6 8 8 8h8V40c0-13.3 10.7-24 24-24s24 10.7 24 24v136h8c4.4 0 8-3.6 8-8V40c0-13.3 10.7-24 24-24s24 10.7 24 24v128c0 30.9-25.1 56-56 56h-8v248c0 13.3-10.7 24-24 24s-24-10.7-24-24V224h-8c-30.9 0-56-25.1-56-56V40c0-13.3 10.7-24 24-24m536 144v112h32V85.2c-16.6 15.3-32 39.1-32 74.8m32 160h-48c-17.7 0-32-14.3-32-32V160c0-100.8 84.2-136.8 101.1-143 2-.7 4-1 6.1-1 11.5 0 20.9 9.3 20.9 20.9L640 472c0 13.3-10.7 24-24 24s-24-10.7-24-24zM336 480c-71.4 0-135-33.4-176-85.4V264l.2-.1c4.2 93.5 81.3 168 175.8 168 64.7 0 121.3-34.9 151.9-87 11.4 11.3 26.3 19.1 42.8 21.9-38.6 67.6-111.3 113.1-194.7 113.1zM224 62c32.9-19.1 71.2-30 112-30 54.1 0 103.7 19.2 142.5 51.1-6.4 15.7-11.2 33.5-13.2 53.4C433.1 101.8 387.2 80 336.1 80c-42.5 0-81.6 15.1-112 40.2zm112 322a128 128 0 1 1 0-256 128 128 0 1 1 0 256m80-128a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
);

export default LanPlateUtensilsRegular;
