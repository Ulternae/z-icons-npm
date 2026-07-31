import React from 'react';

export const LanViharaThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M292.3 1.3c-2.6-1.7-6-1.7-8.6 0L121.2 104.7c-7.5 4.8-16.3 7.3-25.2 7.3-4.4 0-8 3.6-8 8s3.6 8 8 8c11.3 0 22.3-3 32-8.7V165l-67.6 75.1H48c-4.4 0-8 3.6-8 8s3.6 8 8 8h48v69.3l-68 90.7H16c-4.4 0-8 3.6-8 8s3.6 8 8 8h48v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h200v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h200v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-12l-68-90.7v-69.3h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-12.4L448 165v-45.7c9.7 5.7 20.7 8.7 32 8.7 4.4 0 8-3.6 8-8s-3.6-8-8-8c-8.9 0-17.7-2.5-25.2-7.3zM464 256v64H112v-64zm0 80h4l60 80H48l60-80zm30-96H81.9l57.6-64h296.9zm-62-80H144v-50.9l144-91.6 144 91.6z"})
);

export default LanViharaThin;
