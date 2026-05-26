import React from 'react';

export const LanTransporterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-32 352h64V167.1c-9.9-4.6-20.8-7.1-32-7.1s-22.1 2.5-32 7.1zm0 48v80h-48V217.6L147.5 302c-7.7 10.8-22.7 13.3-33.5 5.5s-13.2-22.7-5.5-33.5l79.2-110.5C210.8 131.2 248.2 112 288 112s77.2 19.2 100.3 51.5L467.5 274c7.7 10.8 5.2 25.8-5.5 33.5s-25.8 5.2-33.5-5.5L368 217.6V448h-48v-80zm-48 128h216c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24zM64 96l25.4 7.3c3.9 1.1 6.6 4.7 6.6 8.7s-2.7 7.6-6.6 8.7L64 128l-7.3 25.4c-1.1 3.9-4.7 6.6-8.7 6.6s-7.6-2.7-8.7-6.6L32 128l-25.4-7.3C2.7 119.6 0 116.1 0 112s2.7-7.6 6.6-8.7L32 96l7.3-25.4c1.1-3.9 4.6-6.6 8.7-6.6s7.6 2.7 8.7 6.6zM536.7 6.6 544 32l25.4 7.3c3.9 1.1 6.6 4.7 6.6 8.7s-2.7 7.6-6.6 8.7L544 64l-7.3 25.4c-1.1 3.9-4.7 6.6-8.7 6.6s-7.6-2.7-8.7-6.6L512 64l-25.4-7.3c-3.9-1.1-6.6-4.7-6.6-8.7s2.7-7.6 6.6-8.7L512 32l7.3-25.4c1.1-3.9 4.6-6.6 8.7-6.6s7.6 2.7 8.7 6.6"})
);

export default LanTransporterRegular;
