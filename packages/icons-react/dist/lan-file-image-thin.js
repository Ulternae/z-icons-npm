import React from 'react';

export const LanFileImageThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M197.5 16q5.4 0 10.5 1.2V120c0 30.9 25.1 56 56 56h102.8q1.2 5.1 1.2 10.5V448c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zm156.4 136.6c2.3 2.3 4.3 4.8 6.1 7.4h-96c-22.1 0-40-17.9-40-40V24c2.7 1.8 5.1 3.8 7.4 6.1zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm32 240a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m76.7 8.5L70.4 407.6c-4.1 4.4-6.4 10.2-6.4 16.3 0 13.3 10.8 24.1 24.1 24.1h207.8c13.3 0 24.1-10.8 24.1-24.1 0-6.1-2.3-11.9-6.4-16.3L211.3 296.5c-5-5.4-12-8.5-19.3-8.5s-14.3 3.1-19.3 8.5M192 304c2.9 0 5.6 1.2 7.5 3.3l102.4 111.1c1.4 1.5 2.1 3.5 2.1 5.5 0 4.5-3.6 8.1-8.1 8.1H88.1c-4.5 0-8.1-3.6-8.1-8.1 0-2 .8-4 2.1-5.5l102.4-111.1c1.9-2.1 4.7-3.3 7.5-3.3"})
);

export default LanFileImageThin;
