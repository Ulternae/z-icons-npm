import React from 'react';

export const LanDisplayChartUpThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 48c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48zM64 416h126.6l-13.3 80h-73.2c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8h-73.2l-13.3-80h126.6c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v256c0 35.3 28.7 64 64 64m129.4 80 13.3-80h98.4l13.3 80H193.3zM336 128c-4.4 0-8 3.6-8 8s3.6 8 8 8h68.7L280 268.7l-74.3-74.3c-3.1-3.1-8.2-3.1-11.3 0l-112 112c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L200 211.3l74.3 74.4c1.5 1.5 3.5 2.3 5.7 2.3s4.2-.8 5.7-2.3L416 155.3V224c0 4.4 3.6 8 8 8s8-3.6 8-8v-88c0-4.4-3.6-8-8-8z"})
);

export default LanDisplayChartUpThin;
