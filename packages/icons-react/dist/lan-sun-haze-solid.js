import React from 'react';

export const LanSunHazeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M168 464c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24s10.7-24 24-24zm384 0c13.3 0 24 10.7 24 24s-10.7 24-24 24H264c-13.3 0-24-10.7-24-24s10.7-24 24-24zm-64-96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24zM288-32c8.4 0 16.3 4.4 20.6 11.7l55.5 92.6L468.8 46c8.2-2 16.9.4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L491.9 320H417c9.6-19.3 15-41 15-64 0-79.5-64.5-144-144-144s-144 64.5-144 144c0 23 5.4 44.7 15 64H84.2l-72.5-43.4C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6l92.6-55.5L78 75.1c-2-8.2.4-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 192c53 0 96 43 96 96 0 24.6-9.2 47-24.4 64H216.5c-15.2-17-24.5-39.4-24.5-64 0-53 43-96 96-96"})
);

export default LanSunHazeSolid;
