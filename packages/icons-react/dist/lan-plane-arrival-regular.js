import React from 'react';

export const LanPlaneArrivalRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M490.1 243.9c17.4 3.1 29 19.7 26 37.1s-19.7 29-37.1 26l-354.5-62.5-26.2-4.6c-19-3.4-33-19.8-33.1-39.2l-.5-96.7 1.3.2 46.2 66c3.7 5.2 9.2 8.8 15.5 9.9l81.4 14.4c7.6 1.3 15.4-1.1 20.9-6.4s8.1-13.1 7-20.7L214.6 16.6l27.8 4.9L365 213.9c3.6 5.7 9.4 9.6 16.1 10.7l109 19.2zm73.2 45.4c7.7-43.5-21.4-85-64.9-92.7l-98.6-17.4L277.2-13.2c-3.6-5.7-9.4-9.6-16.1-10.7l-70.9-12.6c-7.6-1.3-15.4 1.1-20.9 6.4s-8.1 13.1-7 20.7l22.3 150.6-38.8-6.8-46.2-66c-3.7-5.2-9.2-8.8-15.5-9.9l-39.4-6.9c-7-1.2-14.2.7-19.6 5.3s-8.6 11.4-8.5 18.5l.7 125.5c.2 42.5 30.8 78.8 72.7 86.2 13.9 2.5 22.7 4 26.2 4.6l354.5 62.5c43.5 7.7 85-21.4 92.7-64.9zM224 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64m128.5-15.6a32 32 0 1 0-64 0 32 32 0 1 0 64 0M24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanPlaneArrivalRegular;
