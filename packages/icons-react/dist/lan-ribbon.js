import React from 'react';

export const LanRibbon = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M235.1 32h-86.3c-22.3 0-43 11.6-54.6 30.6l-1.3 2.1L117.8 96H266l24.9-31.3-1.3-2.1c-11.5-19-32.2-30.6-54.5-30.6m-91.8 96 48.6 61.2 48.6-61.2h-97.3zm114.6 144 62.6-78.2c16.8-21 18.7-50.4 4.6-73.4l-16.3-26.7-96.3 121.1 45.5 57.1zm87.5-58.2-67.1 83.9L364.5 406c5.5 6.9 4.4 16.9-2.5 22.5l-80 64c-6.9 5.5-17 4.4-22.5-2.5L38.6 213.8c-25.2-31.6-28-75.5-7-110L67 45.9C84.4 17.4 115.4 0 148.9 0h86.3c33.4 0 64.5 17.4 81.9 45.9l35.3 57.8c21.1 34.5 18.3 78.5-7 110zM19.5 406 75 336.2l20.5 25.6-41.1 51.6 55 44 31.3-39.1 20.5 25.6-36.8 46c-5.5 6.9-15.6 8-22.5 2.5l-80-64c-6.9-5.5-8-15.6-2.5-22.5zM75.2 93.8l-16.3 26.7c-14 23-12.2 52.3 4.6 73.4l211 263.7 55-44L75.2 93.9z"})
);

export default LanRibbon;
