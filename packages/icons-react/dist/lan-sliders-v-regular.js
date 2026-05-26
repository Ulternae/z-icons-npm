import React from 'react';

export const LanSlidersVRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M440 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v91.7c-32.5 10.2-56 40.5-56 76.3s23.5 66.1 56 76.3V488c0 13.3 10.7 24 24 24s24-10.7 24-24V268.3c32.5-10.2 56-40.5 56-76.3s-23.5-66.1-56-76.3zm-160 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v251.7c-32.5 10.2-56 40.5-56 76.3s23.5 66.1 56 76.3V488c0 13.3 10.7 24 24 24s24-10.7 24-24v-59.7c32.5-10.2 56-40.5 56-76.3s-23.5-66.1-56-76.3zm-160 0c0-13.3-10.7-24-24-24S72 10.7 72 24v59.7C39.5 93.9 16 124.2 16 160s23.5 66.1 56 76.3V488c0 13.3 10.7 24 24 24s24-10.7 24-24V236.3c32.5-10.2 56-40.5 56-76.3s-23.5-66.1-56-76.3zM64 160a32 32 0 1 1 64 0 32 32 0 1 1-64 0m160 192a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-192a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanSlidersVRegular;
