import React from 'react';

export const LanBathThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 53.3C48 32.7 64.7 16 85.3 16c9.9 0 19.4 3.9 26.3 10.9L143.7 59c-9.9 12.3-15.7 27.9-15.7 44.9 0 23.1 10.9 43.7 27.8 56.9l-1.5 1.5c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l104-104c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-1.5 1.5C243.6 42.9 223.1 32 199.9 32c-17 0-32.6 5.9-44.9 15.7l-32.1-32.1C112.9 5.6 99.4 0 85.3 0 55.8 0 32 23.8 32 53.3V272H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v80c0 38.1 19 71.7 48 91.9V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-34.8c14.5 6.9 30.8 10.8 48 10.8h224c17.2 0 33.5-3.9 48-10.8V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-44.1c29-20.2 48-53.9 48-91.9v-80h24c4.4 0 8-3.6 8-8s-3.6-8-8-8H48zm197.4 18-78.2 78.2c-14.1-10.2-23.3-26.7-23.3-45.4 0-30.9 25.1-56 56-56 18.7 0 35.3 9.2 45.4 23.3zM48 288h416v80c0 53-43 96-96 96H144c-53 0-96-43-96-96z"})
);

export default LanBathThin;
