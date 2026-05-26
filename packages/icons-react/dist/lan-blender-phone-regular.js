import React from 'react';

export const LanBlenderPhoneRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M151.4 13.2c10.2 5.8 14.5 18.4 10 29.3l-23.2 56.3c-3.9 9.6-13.7 15.4-24 14.4l-20.2-2c-15.3 41.7-16 87.7-2.1 129.9l22.4-2.2c10.3-1 20 4.8 24 14.4l23.2 56.3c4.5 10.9.2 23.4-10 29.3l-2.9 1.6c-33.6 19.2-81.7 16.2-106.2-21.6-56.3-86.6-56.3-199.1 0-285.7C67-4.5 115.1-7.5 148.6 11.6l2.9 1.6zM534.6 0c21 0 36.3 19.8 31 40.1l-75.1 287.8c13 8.6 21.5 23.3 21.5 40.1v96c0 26.5-21.5 48-48 48H240c-26.5 0-48-21.5-48-48v-96c0-19.4 11.6-36.2 28.2-43.7L195 34.8C193.4 16.1 208.1 0 226.9 0zM268 320h174.9l16.7-64H408c-13.3 0-24-10.7-24-24s10.7-24 24-24h64.1l16.7-64H408c-13.3 0-24-10.7-24-24s10.7-24 24-24h93.4l12.5-48H244.4l23.7 272zm-28 48v96h224v-96zm88 48a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanBlenderPhoneRegular;
