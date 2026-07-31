import React from 'react';

export const LanEyeClosedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M13.3 230.4c14.1-10.6 34.1-7.8 44.8 6.3.2.2 22.4 29.2 61.2 57.4 40.5 29.4 98 57.9 169.2 57.9s128.7-28.4 169.2-57.9c39-28.3 61.2-57.4 61.2-57.4 10.6-14.1 30.6-16.9 44.8-6.3s17 30.6 6.4 44.8c-16.1 19.6-33.6 37.3-52.8 53.4l40.1 69.5c6.6 11.5 2.7 26.2-8.8 32.8s-26.2 2.7-32.8-8.8l-37.3-64.7c-17.2 11.2-36.7 22.1-58.5 31.4l19.7 73.5c3.4 12.8-4.2 26-17 29.4s-25.9-4.2-29.4-17l-18.8-70.2c-19.4 5.2-40.1 8.9-62 10.5v73c0 13.2-10.8 24-24 24-13.3 0-24-10.7-24-24v-73c-21.9-1.6-42.6-5.3-62-10.5l-18.8 70.2c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l19.7-73.5c-21.7-9.3-41.3-20.1-58.4-31.3l-37.3 64.6c-6.6 11.5-21.3 15.4-32.8 8.8s-15.4-21.3-8.8-32.8l40-69.4c-19.2-16.2-36.6-33.9-52.8-53.5C-3.7 261-.8 241 13.3 230.4"})
);

export default LanEyeClosedSolid;
