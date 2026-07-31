import React from 'react';

export const LanLighthouseThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M283.7 1.3c2.6-1.7 6-1.7 8.7 0l112 72c3.7 2.4 4.8 7.3 2.4 11.1s-7.3 4.8-11.1 2.4L384 79.3v80.8h16c4.4 0 8 3.6 8 8s-3.6 8-8 8h-13l61 320h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h24l61-320h-12.9c-4.4 0-8-3.6-8-8s3.6-8 8-8h16V79.3l-11.7 7.5c-3.7 2.4-8.7 1.3-11.1-2.4s-1.3-8.7 2.4-11.1zM264 496h48v-72c0-13.3-10.7-24-24-24s-24 10.7-24 24zm64 0h103.7l-61-320H205.2l-61 320h103.7v-72c0-22.1 17.9-40 40-40s40 17.9 40 40v72zm40-427.1-80-51.4-80 51.4V160h160zM35.6 24.8l64 32c4 2 5.6 6.8 3.6 10.7s-6.8 5.6-10.7 3.6l-64-32c-4-2-5.6-6.8-3.6-10.7s6.8-5.6 10.7-3.6m64 174.3-64 32c-4 2-8.8.4-10.7-3.6s-.4-8.8 3.6-10.7l64-32c4-2 8.8-.4 10.7 3.6s.4 8.8-3.6 10.7M551.2 28.4c2 4 .4 8.8-3.6 10.7l-64 32c-4 2-8.8.4-10.7-3.6s-.4-8.8 3.6-10.7l64-32c4-2 8.8-.4 10.7 3.6m-78.3 160c2-4 6.8-5.6 10.7-3.6l64 32c4 2 5.6 6.8 3.6 10.7s-6.8 5.6-10.7 3.6l-64-32c-4-2-5.6-6.8-3.6-10.7"})
);

export default LanLighthouseThin;
