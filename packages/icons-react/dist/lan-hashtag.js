import React from 'react';

export const LanHashtag = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M202.2.4c8.6 1.9 14.1 10.4 12.3 19L191.2 128h184.6l24.7-115.4c1.9-8.6 10.4-14.1 19-12.3s14.1 10.4 12.3 19L408.5 128H496c8.8 0 16 7.2 16 16s-7.2 16-16 16h-94.4l-41.1 192H448c8.8 0 16 7.2 16 16s-7.2 16-16 16h-94.4l-24.7 115.4c-1.8 8.6-10.4 14.1-19 12.3s-14.1-10.4-12.3-19L320.9 384H136.3l-24.7 115.4c-1.9 8.6-10.4 14.1-19 12.3s-14.1-10.4-12.3-19L103.6 384H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h94.5l41.1-192H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h94.5l24.7-115.4c1.9-8.6 10.4-14.1 19-12.3zM184.4 160l-41.1 192h184.6L369 160z"})
);

export default LanHashtag;
