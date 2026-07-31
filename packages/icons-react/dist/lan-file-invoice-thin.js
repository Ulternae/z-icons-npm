import React from 'react';

export const LanFileInvoiceThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V186.5q0-5.4-1.2-10.5H264c-30.9 0-56-25.1-56-56V17.2q-5.1-1.2-10.5-1.2zm296 144c-1.8-2.7-3.8-5.1-6.1-7.4L231.4 30.1c-2.3-2.3-4.8-4.3-7.4-6.1v96c0 22.1 17.9 40 40 40zM0 64C0 28.7 28.7 0 64 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64 40c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8m0 64c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8m16 208c0 13.3 10.7 24 24 24h176c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24H104c-13.3 0-24 10.7-24 24zm-16 0v-80c0-22.1 17.9-40 40-40h176c22.1 0 40 17.9 40 40v80c0 22.1-17.9 40-40 40H104c-22.1 0-40-17.9-40-40"})
);

export default LanFileInvoiceThin;
