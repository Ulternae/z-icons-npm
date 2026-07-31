import React from 'react';

export const LanWindsockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 0c13.3 0 24 10.7 24 24v72h80v-8.6c0-20.3 18.7-35.5 38.5-31.3l320 66.7c14.8 3.1 25.5 16.2 25.5 31.3v108c0 15.2-10.6 28.2-25.5 31.3l-320 66.6c-19.9 4.1-38.5-11-38.5-31.3v-8.6H48v168c0 13.3-10.7 24-24 24S0 501.3 0 488V24C0 10.7 10.7 0 24 0m24 144v128h80V144zm368 115 48-10v-81.9l-48-10zm-48 10V147.1l-80-16.7v155.3zm-128 26.6V120.3L176 107v201.9z"})
);

export default LanWindsockRegular;
