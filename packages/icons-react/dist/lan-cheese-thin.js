import React from 'react';

export const LanCheeseThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M495.9 240H27.4l263-189.9c1.9-1.3 4.1-2.1 6.4-2.1 107.6 0 195.3 85.3 199.2 192zM16 256.4v-.4h480v160c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm496-.4v-8.7C512 128.4 415.6 32 296.7 32c-5.7 0-11.2 1.8-15.8 5.1L13.3 230.4c-8.4 6-13.3 15.7-13.3 26V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64z"})
);

export default LanCheeseThin;
