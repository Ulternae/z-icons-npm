import React from 'react';

export const LanBookCopyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 88c0-48.6 39.4-88 88-88h192c39.8 0 72 32.2 72 72v128c0 25-12.7 47-32 59.9V336h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H304c-44.2 0-80-35.8-80-80zm80 184c-17.7 0-32 14.3-32 32s14.3 32 32 32h192v-64zm-32-41.3c9.8-4.3 20.6-6.7 32-6.7h200c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H312c-22.1 0-40 17.9-40 40zM88 128h88v48H88c-22.1 0-40 17.9-40 40v142.7c9.8-4.3 20.6-6.7 32-6.7h105.3c7.5 18.6 19.3 35 34 48H80c-17.7 0-32 14.3-32 32s14.3 32 32 32h192v-36c10.2 2.6 21 4 32 4h16v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80V216c0-48.6 39.4-88 88-88"})
);

export default LanBookCopyRegular;
