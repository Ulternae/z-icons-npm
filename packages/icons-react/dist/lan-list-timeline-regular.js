import React from 'react';

export const LanListTimelineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 486.6c6 6 14.1 9.4 22.6 9.4H416c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H230.6c-8.5 0-16.6 3.4-22.6 9.4l-43.3 43.3c-6.2 6.2-6.2 16.4 0 22.6zM221.3 80l16-16H400v32H237.3zm0 176 16-16H464v32H237.3zm0 176 16-16H400v32H237.3zM208 25.4l-43.3 43.3c-6.2 6.2-6.2 16.4 0 22.6l43.3 43.3c6 6 14.1 9.4 22.6 9.4H416c17.7 0 32-14.3 32-32V48c0-17.7-14.3-32-32-32H230.6c-8.5 0-16.6 3.4-22.6 9.4M230.6 192c-8.5 0-16.6 3.4-22.6 9.4l-43.3 43.3c-6.2 6.2-6.2 16.4 0 22.6l43.3 43.3c6 6 14.1 9.4 22.6 9.4H480c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zM64 48a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0 176a32 32 0 1 0 0 64 32 32 0 1 0 0-64m32 208a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
);

export default LanListTimelineRegular;
