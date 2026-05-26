import React from 'react';

export const LanCitrusSlice = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M427.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-400 400c-6.2 6.2-6.2 16.4 0 22.6C58.9 481.5 132.5 512 209.2 512h4c165 0 298.8-133.8 298.8-298.8v-4c0-76.7-30.5-150.2-84.7-204.5M278.8 175.8l89.4-89.4c21.5 25.2 36.9 55.9 43.7 89.7h-133l-.2-.2zm16.8 32.2h120.3c.1 2.7.2 5.3.2 8 0 49.5-18 94.7-47.7 129.7l-82.5-82.5c10.7-16.5 14-36.5 9.8-55.2zm50.1 160.3C310.8 398.1 265.5 416 216 416c-2.7 0-5.3-.1-8-.2v-122c18.4 4.6 38.2 1.8 54.9-8.4l82.8 82.8zM176 412c-33.7-6.9-64.4-22.2-89.7-43.7l89.7-89.7zm272-196c0-58.3-21.5-111.6-57-152.3L415.6 39C457 85.8 480 146.3 480 209.1v4C480 360.5 360.5 480 213.2 480h-4c-62.9 0-123.4-23-170.2-64.4L63.7 391c40.8 35.5 94 57 152.3 57 128.1 0 232-103.9 232-232m-191.8-17.5c13.1 15.7 12.2 39.1-2.5 53.8s-38.1 15.6-53.8 2.5z"})
);

export default LanCitrusSlice;
